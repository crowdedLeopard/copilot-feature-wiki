#!/usr/bin/env node
/**
 * Verify, step 3 of 3: record the outcome and enforce the gate.
 *
 * A briefing or concept page written in this run that the verifier did not reach is held as
 * "unverified" so it is never published unchecked; the next run verifies it first. Writes data/held.json (what is held
 * and why, for the radar and the run summary), data/last-verify.json, the log line and the step
 * summary, then removes the working files so the commit step sees only real changes.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, readJson, writeJson, appendLog, today } from './lib/util.mjs';
import { VERIFY_TASK_DIR, VERIFY_RESULTS, holdUnverified, writeHeldIndex } from './lib/verify.mjs';

const tasks = (await readJson(path.join(DATA_DIR, 'verify-tasks.json'), { tasks: [] })).tasks;
const results = (await readJson(VERIFY_RESULTS, { results: [] })).results;
const run = await readJson(path.join(DATA_DIR, 'verify-run.json'), { engine: 'none', tasks: [] });
const ran = run.engine && run.engine !== 'none';

const outcome = new Map(results.filter((r) => r.ok).map((r) => [r.slug, r]));
const incomplete = new Set(results.filter((r) => r.incomplete).map((r) => r.slug));
const heldNow = [];
if (ran) {
  for (const t of tasks) {
    if (outcome.has(t.slug)) continue;
    // Only pages written in this run are held for being unreached; a live page whose scheduled
    // re-check did not happen keeps its earlier stamp until the next run.
    if (t.writtenThisRun && (t.where === 'features' || t.where === 'concepts')) {
      const h = await holdUnverified(t.slug);
      if (h) heldNow.push(t.slug);
    }
  }
}
const held = await writeHeldIndex();

const verified = results.filter((r) => r.ok && r.status === 'verified').length;
const gaps = results.filter((r) => r.ok && r.status === 'verified-with-gaps').length;
const heldFailed = results.filter((r) => r.ok && r.status === 'held').length;
const unreached = tasks.length - outcome.size;
const models = [...new Set(run.tasks?.filter((t) => t.ok).map((t) => t.model) || [])].join(', ') || 'none';
const line = `- ${today()} verify: ${tasks.length} checked (${verified} verified, ${gaps} verified with gaps, ${heldFailed} held, ${unreached} not reached${heldNow.length ? `, ${heldNow.length} held as unverified` : ''}) on ${run.engine || 'none'} ${models}; ${held.length} page(s) held in total`;
if (tasks.length || ran) await appendLog(line);
console.log(line.slice(2));

if (process.env.GITHUB_STEP_SUMMARY) {
  const out = [line.slice(2), ''];
  for (const t of tasks) {
    const r = outcome.get(t.slug);
    if (!r) { out.push(`- ⏳ ${t.slug}: ${incomplete.has(t.slug) ? 'incomplete (verifier tools failed)' : 'not reached'}${heldNow.includes(t.slug) ? ', held as unverified' : ''}`); continue; }
    const mark = r.status === 'verified' ? '✓' : r.status === 'verified-with-gaps' ? '◐' : '✗';
    out.push(`- ${mark} ${t.slug}: ${r.status}, ${r.counts.confirmed}/${r.counts.claims} confirmed${r.counts.contradicted ? `, ${r.counts.contradicted} contradicted` : ''}${r.reasons?.length ? ` (${r.reasons.join('; ')})` : ''}`);
  }
  if (held.length) {
    out.push('', `Held, not published (${held.length}):`);
    for (const h of held) out.push(`- ${h.slug}: ${h.reason}${h.attempts ? `, ${h.attempts} failed rewrite(s)` : ''}${h.reason === 'parked' ? ' — needs a person' : ''}`);
  }
  await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, out.join('\n') + '\n');
}

await writeJson(path.join(DATA_DIR, 'last-verify.json'), {
  date: today(), engine: run.engine || 'none', models, attempted: tasks.length, verified, verifiedWithGaps: gaps, held: heldFailed, unreached, heldUnverified: heldNow.length,
  heldTotal: held.length, cost: run.tasks?.reduce((s, t) => s + (t.cost || 0), 0) ?? 0,
});
await fs.rm(VERIFY_TASK_DIR, { recursive: true, force: true });
await fs.rm(path.join(DATA_DIR, 'verify-tasks.json'), { force: true });
await fs.rm(VERIFY_RESULTS, { force: true });
await fs.rm(path.join(DATA_DIR, 'verify-run.json'), { force: true });
