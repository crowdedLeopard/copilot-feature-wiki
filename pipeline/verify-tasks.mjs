#!/usr/bin/env node
/**
 * Verify, step 1 of 3: decide which pages the independent check looks at in this run and prepare
 * one brief per page. Briefings and concept pages are checked alike; a concept page has no roadmap
 * record, default state or licensing model, so its brief leaves those out.
 *
 * Order: pages written but never checked (this run's output, and anything held as "unverified"),
 * then pages edited since their last check, then pages whose check has expired. Pages written in
 * this run are never cut by the limit, and are held if the verifier does not reach them: a page is
 * not published unchecked. A page that was merely edited today (a bulk front-matter change, a lint
 * rewrite) is already published and is an ordinary candidate, subject to the limit.
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
import { TOPICS } from '../config/taxonomy.mjs';
import { loadRawItem } from './lib/briefing.mjs';
import { VERIFY_TASK_DIR, VERIFY_RESULTS, listHeld, precheck, precheckText, verificationDue } from './lib/verify.mjs';
import { postsForBrief, briefSection as messageCenterSection } from './lib/message-center.mjs';
import { loadSources, sourceChangesByPage, changedSourcesFor } from './lib/sources.mjs';

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
  // Pages the writer produced in this run: every writer records them in compile-results.json (write-briefing.mjs,
  // write-concept.mjs, compile.mjs), which compile-finish leaves in place for this step. The updated date is not
  // used here: a bulk edit can stamp today's date on pages that are already published and checked or in grace.
  const written = new Set(((await readJson(path.join(DATA_DIR, 'compile-results.json'), { results: [] })).results || []).filter((r) => r.ok && r.slug).map((r) => r.slug));
  const now = Date.now();
  // The daily source watch: a page whose cited Microsoft page changed after its check is due again.
  const sources = await loadSources();
  const sourceChanges = sourceChangesByPage(sources);
  for (const p of pages) {
    const due = verificationDue(p.data, now, { body: p.body, sourceChangedAt: sourceChanges.get(p.slug) || null });
    const writtenNow = written.has(p.slug);
    if (ALL || due || ONLY.includes(p.slug)) {
      const reason = due || 'requested';
      // Pages that have never been checked come before re-checks; both come after this run's own pages.
      const rank = writtenNow ? 0 : reason === 'never-checked' ? 1 : reason === 'changed-since-check' || reason === 'source-changed' ? 2 : reason === 'check-expired' ? 3 : 4;
      const key = reason === 'check-expired' ? p.data.verification?.date || '' : `9${String(9e12 - new Date(p.data.updated).getTime()).padStart(13, '0')}`; // newest first, expired oldest first
      const changedSources = reason === 'source-changed' ? changedSourcesFor(sources, p.slug, p.data.verification?.date) : [];
      out.push({ slug: p.slug, kind: p.kind, file: path.join(p.dir, p.file), where: p.where, data: p.data, reason, changedSources, sort: `${rank}-${key}`, today: writtenNow, writtenThisRun: writtenNow && !p.data.verification });
    }
  }
  if (ONLY.length && !ALL) return out.filter((c) => ONLY.includes(c.slug));
  out.sort((a, b) => a.sort.localeCompare(b.sort));
  // Everything written in this run and everything held as unverified is always checked; VERIFY_LIMIT is the number
  // of other pages (never checked, changed since their check, check expired) on top of that, as the workflow input
  // says. Before 16 Nov 2026 the limit was shared, so a run that wrote 24 pages never reached an older one. The
  // run's credit cap (VERIFY_MAX_RUN_CREDITS) still bounds what is actually spent.
  const mustTake = out.filter((c) => c.today || c.reason === 'unverified').length;
  return byTopicInTurn(out.slice(0, mustTake + LIMIT));
}

/**
 * The run's own pages are checked one topic at a time in turn, the way the writer shares a run across topics,
 * so a thin topic (Modern Work in November 2026) is not left for last behind whichever topic happens to sort
 * first. Pages held as unverified from earlier runs stay ahead of them, and everything else keeps its order.
 */
function byTopicInTurn(list) {
  const head = list.filter((c) => c.reason === 'unverified');
  const todays = list.filter((c) => c.reason !== 'unverified' && c.today);
  const rest = list.filter((c) => c.reason !== 'unverified' && !c.today);
  const lanes = new Map([...TOPICS.map((t) => t.id), 'concepts'].map((id) => [id, []]));
  for (const c of todays) {
    const lane = c.kind === 'concept' ? 'concepts' : c.data.topic;
    if (!lanes.has(lane)) lanes.set(lane, []);
    lanes.get(lane).push(c);
  }
  const inTurn = [];
  while (inTurn.length < todays.length) for (const lane of lanes.values()) if (lane.length) inTurn.push(lane.shift());
  return [...head, ...inTurn, ...rest];
}

function brief(c, raw, pc, writerOutput, posts = []) {
  const d = c.data;
  const changedSources = (c.changedSources || []).length ? [
    '## Cited Microsoft pages that changed since the last check', '',
    'The daily source watch found these pages, which this briefing cites, changed after the briefing was last checked. Read each one with particular care: what it now says may contradict the page.', '',
    ...c.changedSources.map((s) => `- ${s.url} (Microsoft's date now ${s.msDate || 'not stated'}${s.previousMsDate ? `, was ${s.previousMsDate}` : ''}; change seen ${s.changedAt})`), '',
  ].join('\n') : '';
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
${changedSources ? `\n${changedSources}` : ''}
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
    raw: c.data.roadmapId ? `raw/roadmap/items/${c.data.roadmapId}.json` : null, messageCenter: posts.map((p) => p.id), writtenThisRun: Boolean(c.writtenThisRun), writtenNow: Boolean(c.today),
    verdict: rel(path.join(VERIFY_TASK_DIR, `${c.slug}.verdict.json`)), precheck: pc.summary,
  });
  console.log(`  ${c.slug} (${c.reason}): ${pc.summary.unreachable} dead link(s), ${pc.summary.uiPathsWithMissingWords} path(s) with missing words, ${pc.summary.apiCallsNotOnPage} call(s) not on page, ${pc.summary.roadmapDrift} roadmap drift`);
}
await writeJson(path.join(DATA_DIR, 'verify-tasks.json'), { generated: new Date().toISOString(), date: today(), limit: LIMIT, only: ONLY, tasks });
const conceptCount = tasks.filter((t) => t.kind === 'concept').length;
const line = `verify-tasks: ${tasks.length - conceptCount} briefing(s)${conceptCount ? ` and ${conceptCount} concept page(s)` : ''} queued for the independent check (${tasks.filter((t) => t.reason === 'never-checked' || t.reason === 'unverified').length} never checked, ${tasks.filter((t) => t.reason === 'changed-since-check').length} changed since last check, ${tasks.filter((t) => t.reason === 'source-changed').length} after a cited Microsoft page changed, ${tasks.filter((t) => t.reason === 'check-expired').length} expired)`;
console.log(line);
if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n');
if (process.env.GITHUB_OUTPUT) await fs.appendFile(process.env.GITHUB_OUTPUT, `count=${tasks.length}\n`);
