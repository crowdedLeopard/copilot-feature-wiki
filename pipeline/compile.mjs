#!/usr/bin/env node
/**
 * Compile: turn queued roadmap items into briefings. One Claude call per item, grounded in the raw
 * roadmap record, the Microsoft Learn MCP server and web search restricted to Microsoft domains.
 *
 * Needs ANTHROPIC_API_KEY. Without it the step logs a notice and exits 0 so the rest of the
 * pipeline (ingest, lint, build, deploy) still runs.
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
import { briefingOutput, featureFrontmatter, isAllowedSourceUrl } from './lib/schema.mjs';
import { renderBriefing } from './lib/render.mjs';
import { ROOT, RAW_DIR, WIKI_DIR, FEATURES_DIR, DATA_DIR, readJson, writeJson, appendLog, today, slugify } from './lib/util.mjs';
import { DESK_BY_ID } from '../config/taxonomy.mjs';

const LIMIT = Number(process.env.COMPILE_LIMIT || 12);
const MODEL = process.env.COMPILE_MODEL || 'claude-opus-5-5';
const LEARN_MCP_URL = process.env.LEARN_MCP_URL || 'https://learn.microsoft.com/api/mcp';
const ONLY = (process.env.COMPILE_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean).map(Number);

const MS_DOMAINS = ['learn.microsoft.com', 'techcommunity.microsoft.com', 'adoption.microsoft.com', 'microsoft.com', 'devblogs.microsoft.com', 'youtube.com'];

async function summary(line) {
  console.log(line);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n');
}

async function loadIndexSlugs() {
  let files = [];
  try { files = await fs.readdir(FEATURES_DIR); } catch { return []; }
  const out = [];
  for (const f of files.filter((f) => f.endsWith('.md'))) {
    const md = await fs.readFile(path.join(FEATURES_DIR, f), 'utf8');
    const title = md.match(/^title:\s*"(.*)"/m)?.[1] || f;
    out.push(`${f.replace(/\.md$/, '')} | ${title}`);
  }
  return out;
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

function userPrompt(item, existing, indexSlugs) {
  const desk = DESK_BY_ID[item.desk];
  return `Write or refresh the briefing for this Microsoft 365 Roadmap item.

## Roadmap record (raw, authoritative for status and dates)
${JSON.stringify({
  id: item.id, title: item.title, status: item.status, targetDate: item.targetDate, previewDate: item.previewDate,
  products: item.products, clouds: item.clouds, releasePhase: item.releasePhase, platforms: item.platforms,
  created: item.created, modified: item.modified, moreInfoLink: item.moreInfoLink, roadmapUrl: item.roadmapUrl,
}, null, 2)}

Description:
${item.description}

## Desk
${desk.label}: ${desk.blurb}

${existing ? `## Existing briefing (refresh it: keep what is still true, correct what changed, note the change)\n${existing}\n` : ''}
## Existing briefings you may link in relatedSlugs (slug | title)
${indexSlugs.slice(0, 400).join('\n') || '(none yet)'}

## Research steps
1. Search Microsoft Learn (MCP) for the feature, its admin controls and licensing. Open the one or two most relevant pages.
2. If Learn has nothing yet, search web (Microsoft domains only) for the Tech Community or adoption post.
3. Look for an official Microsoft video (Microsoft Mechanics, Microsoft 365 Community, Power Platform channels). Include only what you actually found.
4. Then write the briefing as JSON matching the required schema. Markdown inside section strings. No H1/H2 headings inside sections (the renderer adds them); use H3 or bold for sub-labels. British English.`;
}

async function compileOne(client, item, existing, indexSlugs, schemaDoc) {
  const { tools, mcp } = buildTools();
  const messages = [{ role: 'user', content: userPrompt(item, existing, indexSlugs) }];
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
  const parsed = briefingOutput.safeParse(JSON.parse(text));
  if (!parsed.success) throw new Error('Output failed schema: ' + parsed.error.issues.map((i) => i.path.join('.') + ' ' + i.message).join('; '));
  return { out: parsed.data, usage: response.usage };
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    await summary('compile: skipped. Add the ANTHROPIC_API_KEY repository secret to enable daily curation.');
    return;
  }
  const queue = await readJson(path.join(DATA_DIR, 'queue.json'), { items: [] });
  let items = queue.items;
  if (ONLY.length) items = ONLY.map((id) => items.find((q) => q.id === id) || { id, reason: 'forced', slug: null }).filter(Boolean);
  items = items.slice(0, LIMIT);
  if (!items.length) { await summary('compile: queue empty, nothing to do.'); return; }

  const client = new Anthropic({ maxRetries: 3, timeout: 15 * 60 * 1000 });
  const schemaDoc = await fs.readFile(path.join(WIKI_DIR, 'SCHEMA.md'), 'utf8');
  const indexSlugs = await loadIndexSlugs();
  await fs.mkdir(FEATURES_DIR, { recursive: true });

  let written = 0, failed = 0, inTok = 0, outTok = 0;
  for (const q of items) {
    const item = await readJson(path.join(RAW_DIR, 'roadmap', 'items', `${q.id}.json`));
    if (!item) { console.warn(`no raw record for ${q.id}`); continue; }
    const slug = q.slug || slugify(item.title);
    const file = path.join(FEATURES_DIR, `${slug}.md`);
    let existing = null, existingFm = null;
    try {
      existing = await fs.readFile(file, 'utf8');
      const yaml = existing.match(/^---\n([\s\S]*?)\n---/)?.[1] || '';
      existingFm = {
        created: yaml.match(/^created:\s*"([^"]+)"/m)?.[1],
        version: Number(yaml.match(/^version:\s*(\d+)/m)?.[1] || 1),
        changes: [...yaml.matchAll(/- date: "(\d{4}-\d{2}-\d{2})"\n\s+note: "((?:[^"\\]|\\.)*)"/g)].map((m) => ({ date: m[1], note: JSON.parse(`"${m[2]}"`) })),
      };
    } catch {}

    try {
      console.log(`compiling ${q.id} ${item.title} (${q.reason})`);
      const { out, usage } = await compileOne(client, item, existing, indexSlugs, schemaDoc);
      inTok += usage.input_tokens + (usage.cache_read_input_tokens || 0) + (usage.cache_creation_input_tokens || 0);
      outTok += usage.output_tokens;
      const sources = out.sources.filter((s) => isAllowedSourceUrl(s.url));
      if (!sources.some((s) => s.kind === 'roadmap')) sources.unshift({ title: `Microsoft 365 Roadmap ${item.id}`, url: item.roadmapUrl, kind: 'roadmap' });
      const fm = {
        title: out.title, slug, roadmapId: item.id, desk: item.desk, products: item.products, summary: out.summary,
        status: item.statusKey, releasePhase: item.releasePhase, clouds: item.clouds, platforms: item.platforms,
        targetDate: item.targetDate, previewDate: item.previewDate || null,
        risk: out.risk, cost: out.cost, impact: out.impact, defaultState: out.defaultState, action: out.action,
        licensing: { model: out.licensingModel, notes: out.licensingNotes },
        audiences: out.audiences, tags: [...new Set(out.tags.map((t) => slugify(t)).filter(Boolean))],
        sources, videos: out.videos.filter((v) => isAllowedSourceUrl(v.url)),
        related: out.relatedSlugs.filter((s) => indexSlugs.some((l) => l.startsWith(s + ' |')) && s !== slug).slice(0, 6),
        confidence: out.confidence, created: existingFm?.created || today(), updated: today(), roadmapModified: item.modified,
        changes: [...(existingFm?.changes || []), { date: today(), note: out.changeNote }],
        version: (existingFm?.version || 0) + 1,
      };
      const check = featureFrontmatter.safeParse(fm);
      if (!check.success) throw new Error('Front matter invalid: ' + check.error.issues.map((i) => i.path.join('.') + ' ' + i.message).join('; '));
      // Rationales are kept as a compact "at a glance" block the site renders under the header.
      const sections = { ...out.sections };
      sections.whatsChanging = sections.whatsChanging;
      const page = renderBriefing(check.data, sections) +
        `\n<!-- rationale\nrisk: ${out.riskRationale}\ncost: ${out.costRationale}\nimpact: ${out.impactRationale}\n-->\n`;
      await fs.writeFile(file, page);
      written++;
      indexSlugs.push(`${slug} | ${out.title}`);
    } catch (err) {
      failed++;
      console.error(`FAILED ${q.id}: ${err.message}`);
    }
  }
  const line = `- ${today()} compile: ${written} briefings written, ${failed} failed, ${items.length} attempted (${MODEL}, ${inTok} in / ${outTok} out tokens)`;
  await appendLog(line);
  await summary(line.slice(2));
  await writeJson(path.join(DATA_DIR, 'last-compile.json'), { date: today(), written, failed, attempted: items.length, model: MODEL, inTok, outTok });
}

main().catch(async (err) => { console.error(err); await summary(`compile: failed. ${err.message}`); process.exit(1); });
