#!/usr/bin/env node
/**
 * Compile (Claude Code path), step 3 of 3: record what the agent run produced.
 * Appends a line to wiki/log.md, writes data/last-compile.json and the step summary.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, readJson, writeJson, appendLog, today } from './lib/util.mjs';

const tasks = await readJson(path.join(DATA_DIR, 'compile-tasks.json'), { tasks: [] });
const results = await readJson(path.join(DATA_DIR, 'compile-results.json'), { results: [] });
const attempted = tasks.tasks.length;
const written = results.results.filter((r) => r.ok).length;
const rejected = results.results.filter((r) => !r.ok).length;
const untouched = tasks.tasks.filter((t) => !results.results.some((r) => r.id === t.id && r.ok)).length - rejected;
const model = process.env.COMPILE_MODEL || 'claude-code default';

const line = `- ${today()} compile: ${written} briefings written, ${rejected} rejected by schema, ${untouched} not reached, ${attempted} attempted (claude-code, ${model})`;
await appendLog(line);
console.log(line.slice(2));
if (process.env.GITHUB_STEP_SUMMARY) {
  await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line.slice(2) + '\n');
  for (const r of results.results) {
    await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, r.ok ? `- ✓ ${r.id} ${r.title}\n` : `- ✗ ${r.id} ${r.error}\n`);
  }
}
await writeJson(path.join(DATA_DIR, 'last-compile.json'), { date: today(), path: 'claude-code', written, failed: rejected + untouched, attempted, model });
// Working files are not committed; clean them so the commit step sees only real changes.
await fs.rm(path.join(DATA_DIR, 'compile-tasks'), { recursive: true, force: true });
await fs.rm(path.join(DATA_DIR, 'compile-tasks.json'), { force: true });
await fs.rm(path.join(DATA_DIR, 'compile-results.json'), { force: true });
