#!/usr/bin/env node
/**
 * Verify, API engine: one Claude call per briefing with the Microsoft Learn MCP server and web
 * fetch on Microsoft domains, returning the verdict as structured output. Used by verify-run.mjs
 * when VERIFY_ENGINE=api (or auto with only an ANTHROPIC_API_KEY). Run directly it verifies the
 * prepared task list on this engine.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import { ROOT, DATA_DIR, readJson } from './lib/util.mjs';
import { verdictSchema } from './lib/verify-schema.mjs';
import { recordVerification } from './lib/verify.mjs';

const LEARN_MCP_URL = process.env.LEARN_MCP_URL || 'https://learn.microsoft.com/api/mcp';
const MS_DOMAINS = ['learn.microsoft.com', 'techcommunity.microsoft.com', 'adoption.microsoft.com', 'microsoft.com', 'devblogs.microsoft.com'];

function tools() {
  const list = [
    { type: 'web_search_20260209', name: 'web_search', max_uses: 10, allowed_domains: MS_DOMAINS },
    { type: 'web_fetch_20260209', name: 'web_fetch', max_uses: 12, allowed_domains: MS_DOMAINS, max_content_tokens: 30000 },
  ];
  const mcp = [];
  if (LEARN_MCP_URL && LEARN_MCP_URL !== 'off') {
    mcp.push({ type: 'url', url: LEARN_MCP_URL, name: 'microsoft-learn' });
    list.push({ type: 'mcp_toolset', mcp_server_name: 'microsoft-learn' });
  }
  return { list, mcp };
}

/**
 * Verify one prepared task. Resolves { verdict, status, cost, turns }. Throws on refusal, on an
 * unavailable model (the runner then tries the fallback model) and on a verdict the recorder rejects
 * after one correction round.
 */
export async function verifyWithApi(task, { model = 'claude-fable-5-2', instructions = '' } = {}) {
  const client = new Anthropic({ maxRetries: 3, timeout: 15 * 60 * 1000 });
  const promptFile = path.join(ROOT, 'pipeline', 'prompts', 'verify-agent.md');
  const standard = await fs.readFile(promptFile, 'utf8').catch(() => instructions);
  const brief = await fs.readFile(path.join(ROOT, task.brief), 'utf8');
  const precheck = await readJson(path.join(ROOT, task.brief.replace(/\.md$/, '.precheck.json')), null);
  const { list, mcp } = tools();
  const system = [{ type: 'text', text: `${standard}\n\nYou are running without a file system or shell. Return the verdict as the structured output; the pipeline records it.`, cache_control: { type: 'ephemeral' } }];
  const page = await fs.readFile(path.join(ROOT, task.page), 'utf8');
  const record = task.raw ? await fs.readFile(path.join(ROOT, task.raw), 'utf8').catch(() => '') : '';
  const writer = task.writerOutput ? await fs.readFile(path.join(ROOT, task.writerOutput), 'utf8').catch(() => '') : '';
  const messages = [{ role: 'user', content: `${instructions}\n\nRoadmap id: ${task.roadmapId ?? 'none'}. Run date: ${new Date().toISOString().slice(0, 10)}.\n\n## The page (${task.page})\n\n${page}\n\n## The roadmap record\n\n\`\`\`json\n${record}\n\`\`\`\n${writer ? `\n## The writer's output with its evidence list\n\n\`\`\`json\n${writer}\n\`\`\`\n` : ''}\n## Pre-check file\n\n${brief}` }];
  let response, cost = 0, turns = 0;
  for (let round = 0; round < 2; round++) {
    for (let turn = 0; turn < 8; turn++) {
      const stream = client.beta.messages.stream({
        model, max_tokens: 32000, system, messages, tools: list,
        ...(mcp.length ? { mcp_servers: mcp } : {}),
        betas: ['mcp-client-2025-11-20', 'server-side-fallback-2026-07-01'],
        fallbacks: 'default',
        output_config: { effort: 'high', format: zodOutputFormat(verdictSchema) },
      });
      response = await stream.finalMessage();
      turns++;
      const u = response.usage;
      cost += ((u.input_tokens || 0) + (u.cache_creation_input_tokens || 0)) * 8e-6 + (u.cache_read_input_tokens || 0) * 2e-7 + (u.output_tokens || 0) * 4e-5;
      if (response.stop_reason === 'pause_turn') { messages.push({ role: 'assistant', content: response.content }); continue; }
      break;
    }
    if (response.stop_reason === 'refusal') throw new Error(`Refused: ${response.stop_details?.category ?? 'unknown'}`);
    if (response.stop_reason === 'max_tokens') throw new Error('Hit max_tokens before finishing the verdict');
    const text = response.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
    const verdict = JSON.parse(text);
    try {
      const r = await recordVerification(task.slug, verdict, { model, engine: 'api', precheck });
      return { verdict, status: r.status, cost, turns };
    } catch (err) {
      if (round === 1) throw err;
      // One correction round: tell the model exactly what the recorder rejected.
      messages.push({ role: 'assistant', content: response.content });
      messages.push({ role: 'user', content: `The recorder rejected that verdict: ${err.message}\nReturn a corrected verdict.` });
    }
  }
  throw new Error('unreachable');
}

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  process.env.VERIFY_ENGINE = 'api';
  await import('./verify-run.mjs');
}
