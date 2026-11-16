#!/usr/bin/env node
/**
 * Verify, step 1 of 3: decide which pages the independent check looks at in this run and prepare
 * one brief per page. Briefings and concept pages are checked alike; a concept page has no roadmap
 * record, default state or licensing model, so its brief leaves those out.
 *
 * Order: pages written but never checked (today's rewrites, and anything held as "unverified"),
 * then pages edited since their last check, then pages whose check has expired. Pages updated
 * today are never cut by the limit: a page is not published unchecked.
 *
 * For each page the brief carries the page as published, the raw roadmap record, the results of
 * the deterministic pre-checks (cited pages reachable, control paths and cmdlets present on the
 * pages they cite, agreement with the roadmap record) and the exact shape of the verdict file the
 * recorder accepts. The editorial rules the verifier applies are in pipeline/prompts/verify-agent.md.
 *
 * Writes data/verify-tasks.json, data/verify-tasks/<slug>.md, data/verify-tasks/<slug>.precheck.json.
 * Env: VERIFY_LIMIT (default 24), VERIFY_ONLY (comma-separated slugs, or "all").
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, FEATURES_DIR, CONCEPTS_DIR, readJson, writeJson, today } from './lib/util.mjs';
import { loadPages } from './lib/pages.mjs';
import { loadRawItem } from './lib/briefing.mjs';
import { VERIFY_TASK_DIR, VERIFY_RESULTS, listHeld, precheck, precheckText, verificationDue } from './lib/verify.mjs';
import { postsForBrief, briefSection as messageCenterSection } from './lib/message-center.mjs';

const LIMIT = Number(process.env.VERIFY_LIMIT || 24);
const ONLY = (process.env.VERIFY_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean);
const ALL = ONLY.length === 1 && ONLY[0].toLowerCase() === 'all';
const rel = (p) => path.relative(process.cwd(), p);
const exists = async (p) => { try { await fs.access(p); return rel(p); } catch { return null; } };

async function candidates() {
  const out = [];
  for (const h of await listHeld()) {
    if ((h.report?.hold?.reason || 'unverified') === 'unverified') out.push({ slug: h.slug, kind: h.kind, file: h.file, where: 'held', data: h.data, reason: 'unverified', sort: `0-${h.data.updated}` });
  }
  const pages = [
    ...(await loadPages()).filter((p) => !p.error && p.data.title).map((p) => ({ ...p, kind: 'briefing', where: 'features', dir: FEATURES_DIR })),
    ...(await loadPages(CONCEPTS_DIR)).filter((p) => !p.error && p.data.title).map((p) => ({ ...p, kind: 'concept', where: 'concepts', dir: CONCEPTS_DIR })),
  ];
  // Pages the writer produced in this run (the Copilot writer leaves compile-results.json in place); a page updated today counts too.
  const written = new Set(((await readJson(path.join(DATA_DIR, 'compile-results.json'), { results: [] })).results || []).filter((r) => r.ok && r.slug).map((r) => r.slug));
  const now = Date.now();
  for (const p of pages) {
    const due = verificationDue(p.data, now);
    const todayPage = written.has(p.slug) || p.data.updated === today();
    if (ALL || due || ONLY.includes(p.slug)) {
      const reason = due || 'requested';
      const rank = todayPage ? 0 : reason === 'never-checked' ? 1 : reason === 'changed-since-check' ? 2 : reason === 'check-expired' ? 3 : 4;
      const key = reason === 'check-expired' ? p.data.verification?.date || '' : `9${String(9e12 - new Date(p.data.updated).getTime()).padStart(13, '0')}`; // newest first, expired oldest first
      out.push({ slug: p.slug, kind: p.kind, file: path.join(p.dir, p.file), where: p.where, data: p.data, reason, sort: `${rank}-${key}`, today: todayPage, writtenThisRun: todayPage && !p.data.verification });
    }
  }
  if (ONLY.length && !ALL) return out.filter((c) => ONLY.includes(c.slug));
  out.sort((a, b) => a.sort.localeCompare(b.sort));
  const mustTake = out.filter((c) => c.today || c.reason === 'unverified').length;
  return out.slice(0, Math.max(LIMIT, mustTake));
}

function brief(c, raw, pc, writerOutput, posts = []) {
  const d = c.data;
  const concept = c.kind === 'concept';
  const coverage = [];
  (d.controls || []).forEach((ctl, i) => {
    if (ctl.ui) coverage.push(`- \`controls[${i}].ui\` — ${ctl.governs}: ${ctl.ui.surface} › ${ctl.ui.path} (${ctl.ui.docs})`);
    if (ctl.api) coverage.push(`- \`controls[${i}].api\` — ${ctl.governs}: ${ctl.api.kind} \`${ctl.api.call}\` (${ctl.api.docs})`);
  });
  if (!concept) {
    coverage.push(`- the default state (front matter says "${d.defaultState}")`);
    coverage.push(`- the licensing model (front matter says "${d.licensing?.model}"${d.licensing?.notes ? `; notes: "${d.licensing.notes}"` : ''})`);
  }
  if (concept && !coverage.length) coverage.push('- (this page has no controls table; every statement in its text still needs a claim)');
  const record = concept
    ? `## No roadmap record

This is a concept page (wiki/SCHEMA.md, "Concept pages"). It explains a mechanism and is not tied to a roadmap item, so it has no record facts, no default state and no licensing model in its front matter. Every factual statement on it has to rest on a Microsoft page.`
    : `## Roadmap record (authoritative for status, dates, clouds, platforms and release phase)

\`\`\`json
${raw ? JSON.stringify({ id: raw.id, title: raw.title, status: raw.status, statusKey: raw.statusKey, targetDate: raw.targetDate, previewDate: raw.previewDate, products: raw.products, clouds: raw.clouds, releasePhase: raw.releasePhase, platforms: raw.platforms, created: raw.created, modified: raw.modified, moreInfoLink: raw.moreInfoLink, roadmapUrl: raw.roadmapUrl, description: raw.description }, null, 2) : 'No roadmap record for this page.'}
\`\`\``;
  // The pre-check's roadmap line says nothing about a page that has no roadmap record.
  const prechecks = concept ? precheckText(pc).split('\n').filter((l) => !/roadmap record/.test(l)).join('\n') : precheckText(pc);
  return `# Pre-check file: ${d.title}

Slug \`${c.slug}\`. Page \`${rel(c.file)}\`${c.where === 'held' ? ' (currently held, not published)' : ''}. ${concept ? 'A concept page: no roadmap item' : `Roadmap item ${d.roadmapId ?? 'none'}`}${d.roadmapId ? ` (\`raw/roadmap/items/${d.roadmapId}.json\`)` : ''}. Page version ${d.version || 1}. Why this check: ${c.reason}.${writerOutput ? ` The writer's output with its evidence list is at \`${writerOutput}\`.` : ''}

Write the verdict to \`data/verify-tasks/${c.slug}.verdict.json\` and nothing else. The pipeline records it: it computes pass or hold from your claims (any blocker, or three or more majors, holds the page) and takes the stricter of that and your \`verdict\`. The recorder also insists that the rows below each have a claim, that every supported claim carries its quote and source, and that every unsupported or contradicted claim carries a severity.

## Rows that must each have a claim
${coverage.join('\n')}

## Automatic pre-checks (leads to confirm, not conclusions)

${prechecks}

${record}
${posts.length ? `\n${messageCenterSection(posts).replace('## Message Center posts for this item', '## Message Center posts for this item (record facts: authoritative for the act-by date, rollout window and what Microsoft asks administrators to do)')}` : ''}`;
}

const picked = await candidates();
await fs.rm(VERIFY_TASK_DIR, { recursive: true, force: true });
await fs.mkdir(VERIFY_TASK_DIR, { recursive: true });
await fs.rm(VERIFY_RESULTS, { force: true });
await fs.rm(path.join(DATA_DIR, 'verify-run.json'), { force: true });

const tasks = [];
for (const c of picked) {
  const raw = c.data.roadmapId ? await loadRawItem(c.data.roadmapId) : null;
  const body = (await fs.readFile(c.file, 'utf8')).replace(/^---\n[\s\S]*?\n---\n?/, '');
  const pc = await precheck(c.data, body, raw);
  const writerOutput = c.kind === 'concept'
    ? await exists(path.join(DATA_DIR, 'compile-tasks', `concept-${c.slug}.output.json`))
    : c.data.roadmapId ? await exists(path.join(DATA_DIR, 'compile-tasks', `${c.data.roadmapId}.output.json`)) : null;
  const posts = c.data.roadmapId ? await postsForBrief(c.data.roadmapId) : [];
  const briefFile = path.join(VERIFY_TASK_DIR, `${c.slug}.md`);
  await fs.writeFile(briefFile, brief(c, raw, pc, writerOutput, posts));
  await writeJson(path.join(VERIFY_TASK_DIR, `${c.slug}.precheck.json`), pc);
  tasks.push({
    slug: c.slug, ...(c.kind === 'concept' ? { kind: 'concept' } : {}), title: c.data.title, roadmapId: c.data.roadmapId ?? null, topic: c.data.topic, version: c.data.version || 1,
    reason: c.reason, where: c.where, page: rel(c.file), brief: rel(briefFile), writerOutput,
    raw: c.data.roadmapId ? `raw/roadmap/items/${c.data.roadmapId}.json` : null, messageCenter: posts.map((p) => p.id), writtenThisRun: Boolean(c.writtenThisRun),
    verdict: rel(path.join(VERIFY_TASK_DIR, `${c.slug}.verdict.json`)), precheck: pc.summary,
  });
  console.log(`  ${c.slug} (${c.reason}): ${pc.summary.unreachable} dead link(s), ${pc.summary.uiPathsWithMissingWords} path(s) with missing words, ${pc.summary.apiCallsNotOnPage} call(s) not on page, ${pc.summary.roadmapDrift} roadmap drift`);
}
await writeJson(path.join(DATA_DIR, 'verify-tasks.json'), { generated: new Date().toISOString(), date: today(), limit: LIMIT, only: ONLY, tasks });
const conceptCount = tasks.filter((t) => t.kind === 'concept').length;
const line = `verify-tasks: ${tasks.length - conceptCount} briefing(s)${conceptCount ? ` and ${conceptCount} concept page(s)` : ''} queued for the independent check (${tasks.filter((t) => t.reason === 'never-checked' || t.reason === 'unverified').length} never checked, ${tasks.filter((t) => t.reason === 'changed-since-check').length} changed since last check, ${tasks.filter((t) => t.reason === 'check-expired').length} expired)`;
console.log(line);
if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n');
if (process.env.GITHUB_OUTPUT) await fs.appendFile(process.env.GITHUB_OUTPUT, `count=${tasks.length}\n`);
