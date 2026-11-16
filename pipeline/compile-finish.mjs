#!/usr/bin/env node
/**
 * Compile (agent paths), step 3 of 3: record what the agent run produced.
 * Appends a line to wiki/log.md, writes data/last-compile.json and the step summary.
 * Shared by the Claude Code path and the Copilot CLI path; COMPILE_PATH names which one ran.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, readJson, writeJson, appendLog, today } from './lib/util.mjs';

const tasks = await readJson(path.join(DATA_DIR, 'compile-tasks.json'), { tasks: [] });
const results = await readJson(path.join(DATA_DIR, 'compile-results.json'), { results: [] });
const usage = await readJson(path.join(DATA_DIR, 'compile-usage.json'), null);
const attempted = tasks.tasks.length;
// Concept pages (kind "concept") are counted beside the briefings; a declined concept wrote nothing.
const isConcept = (x) => x.kind === 'concept';
const okResults = results.results.filter((r) => r.ok);
const conceptsWritten = okResults.filter((r) => isConcept(r) && !r.declined).length;
const conceptsDeclined = okResults.filter((r) => isConcept(r) && r.declined).length;
const written = okResults.length - conceptsWritten - conceptsDeclined;
const rejected = results.results.filter((r) => !r.ok).length;
const untouched = tasks.tasks.filter((t) => !results.results.some((r) => r.id === t.id && r.ok)).length - rejected;
const conceptWords = tasks.tasks.some(isConcept) ? `, ${conceptsWritten} concept page${conceptsWritten === 1 ? '' : 's'} written${conceptsDeclined ? ` and ${conceptsDeclined} declined` : ''}` : '';
const compilePath = process.env.COMPILE_PATH || usage?.path || 'claude-code';
const model = process.env.COMPILE_MODEL || usage?.model || `${compilePath} default`;
const credits = typeof usage?.credits === 'number' ? Math.round(usage.credits) : null;
const spend = credits == null ? '' : `, ${credits.toLocaleString('en-GB')} AI credits`;

const failedToStart = usage?.status === 'failed' ? `; writer did not start (${usage.kind || 'error'})` : '';
const line = `- ${today()} compile: ${written} briefings written${conceptWords}, ${rejected} rejected by schema, ${untouched} not reached, ${attempted} attempted (${compilePath}, ${model}${spend}${failedToStart})`;
await appendLog(line);
console.log(line.slice(2));
if (process.env.GITHUB_STEP_SUMMARY) {
  await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line.slice(2) + '\n');
  for (const r of results.results) {
    await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, r.ok ? `- ✓ ${r.id} ${r.title}${r.declined ? ' (declined)' : ''}\n` : `- ✗ ${r.id} ${r.error}\n`);
  }
}
await writeJson(path.join(DATA_DIR, 'last-compile.json'), {
  date: today(), path: compilePath, written, failed: rejected + untouched, attempted, model,
  ...(tasks.tasks.some(isConcept) ? { concepts: conceptsWritten, conceptsDeclined } : {}),
  ...(credits == null ? {} : { credits }),
  ...(usage?.status ? { status: usage.status, consecutiveFailures: usage.consecutiveFailures || 0 } : {}),
});
// The working files (task list, briefs, output JSON with its evidence list, results, usage) are git-ignored
// and stay in place for the verification step; the next compile-tasks run clears them. COMPILE_CLEAN=1
// removes them now, for local runs.
if (process.env.COMPILE_CLEAN === '1') {
  await fs.rm(path.join(DATA_DIR, 'compile-tasks'), { recursive: true, force: true });
  await fs.rm(path.join(DATA_DIR, 'compile-tasks.json'), { force: true });
  await fs.rm(path.join(DATA_DIR, 'compile-results.json'), { force: true });
  await fs.rm(path.join(DATA_DIR, 'compile-usage.json'), { force: true });
}
