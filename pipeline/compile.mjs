#!/usr/bin/env node
/**
 * Compile (API path): turn queued roadmap items into briefings. One Claude call per item, grounded in
 * the raw roadmap record, the Microsoft Learn MCP server and web search restricted to Microsoft domains.
 *
 * Needs ANTHROPIC_API_KEY. Without it the step logs a notice and exits 0 so the rest of the
 * pipeline (ingest, lint, build, deploy) still runs. The daily workflow prefers the Claude Code
 * path (compile-tasks.mjs, write-briefing.mjs, compile-finish.mjs) when a CLAUDE_CODE_OAUTH_TOKEN
 * secret exists, and falls back to this script when only an API key is set.
 *
 * Env:
 *   COMPILE_LIMIT   max items per run (default 12)
 *   COMPILE_MODEL   default claude-opus-5-5
 *   COMPILE_ONLY    comma-separated roadmap ids to force (ignores queue order)
 *   LEARN_MCP_URL   default https://learn.microsoft.com/api/mcp (set to "off" to disable)
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import { briefingOutput } from './lib/schema.mjs';
import { WIKI_DIR, DATA_DIR, writeJson, appendLog, today, slugify } from './lib/util.mjs';
import { loadIndexSlugs, selectQueue, loadRawItem, loadExisting, researchBrief, writeBriefingPage, existingSlugForRoadmapId } from './lib/briefing.mjs';

const LIMIT = Number(process.env.COMPILE_LIMIT || 12);
const MODEL = process.env.COMPILE_MODEL || 'claude-opus-5-5';
const LEARN_MCP_URL = process.env.LEARN_MCP_URL || 'https://learn.microsoft.com/api/mcp';
const ONLY = (process.env.COMPILE_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean).map(Number);

const MS_DOMAINS = ['learn.microsoft.com', 'techcommunity.microsoft.com', 'adoption.microsoft.com', 'microsoft.com', 'devblogs.microsoft.com', 'youtube.com'];

async function summary(line) {
  console.log(line);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n');
}

function buildTools() {
  const tools = [
    { type: 'web_search_20260209', name: 'web_search', max_uses: 8, allowed_domains: MS_DOMAINS },
    { type: 'web_fetch_20260209', name: 'web_fetch', max_uses: 8, allowed_domains: MS_DOMAINS, max_content_tokens: 30000 },
  ];
  const mcp = [];
  if (LEARN_MCP_URL && LEARN_MCP_URL !== 'off') {
    mcp.push({ type: 'url', url: LEARN_MCP_URL, name: 'microsoft-learn' });
    tools.push({ type: 'mcp_toolset', mcp_server_name: 'microsoft-learn' });
  }
  return { tools, mcp };
}

async function compileOne(client, item, existing, indexSlugs, schemaDoc) {
  const { tools, mcp } = buildTools();
  const messages = [{ role: 'user', content: researchBrief(item, existing, indexSlugs) }];
  let response;
  for (let turn = 0; turn < 6; turn++) {
    const stream = client.beta.messages.stream({
      model: MODEL,
      max_tokens: 32000,
      system: [{ type: 'text', text: schemaDoc, cache_control: { type: 'ephemeral' } }],
      messages,
      tools,
      ...(mcp.length ? { mcp_servers: mcp } : {}),
      betas: ['mcp-client-2025-11-20', 'server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: { effort: 'high', format: zodOutputFormat(briefingOutput) },
    });
    response = await stream.finalMessage();
    if (response.stop_reason === 'pause_turn') {
      messages.push({ role: 'assistant', content: response.content });
      continue;
    }
    break;
  }
  if (response.stop_reason === 'refusal') throw new Error(`Refused: ${response.stop_details?.category ?? 'unknown'}`);
  if (response.stop_reason === 'max_tokens') throw new Error('Hit max_tokens before finishing');
  const text = response.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
  return { out: JSON.parse(text), usage: response.usage };
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    await summary('compile: skipped. Add a CLAUDE_CODE_OAUTH_TOKEN or ANTHROPIC_API_KEY repository secret to enable daily curation.');
    return;
  }
  const items = await selectQueue({ limit: LIMIT, only: ONLY });
  if (!items.length) { await summary('compile: queue empty, nothing to do.'); return; }

  const client = new Anthropic({ maxRetries: 3, timeout: 15 * 60 * 1000 });
  const schemaDoc = await fs.readFile(path.join(WIKI_DIR, 'SCHEMA.md'), 'utf8');
  const indexSlugs = await loadIndexSlugs();

  let written = 0, failed = 0, inTok = 0, outTok = 0;
  for (const q of items) {
    const item = await loadRawItem(q.id);
    if (!item) { console.warn(`no raw record for ${q.id}`); continue; }
    const slug = q.slug || (await existingSlugForRoadmapId(item.id)) || slugify(item.title);
    const { existing, existingFm } = await loadExisting(slug);
    try {
      console.log(`compiling ${q.id} ${item.title} (${q.reason})`);
      const { out, usage } = await compileOne(client, item, existing, indexSlugs, schemaDoc);
      inTok += usage.input_tokens + (usage.cache_read_input_tokens || 0) + (usage.cache_creation_input_tokens || 0);
      outTok += usage.output_tokens;
      const { title } = await writeBriefingPage(item, out, { slug, existingFm, indexSlugs });
      written++;
      indexSlugs.push(`${slug} | ${title}`);
    } catch (err) {
      failed++;
      console.error(`FAILED ${q.id}: ${err.message}`);
    }
  }
  const line = `- ${today()} compile: ${written} briefings written, ${failed} failed, ${items.length} attempted (${MODEL}, ${inTok} in / ${outTok} out tokens)`;
  await appendLog(line);
  await summary(line.slice(2));
  await writeJson(path.join(DATA_DIR, 'last-compile.json'), { date: today(), path: 'api', written, failed, attempted: items.length, model: MODEL, inTok, outTok });
}

main().catch(async (err) => { console.error(err); await summary(`compile: failed. ${err.message}`); process.exit(1); });
