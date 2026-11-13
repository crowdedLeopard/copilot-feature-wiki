#!/usr/bin/env node
/**
 * Compile (Claude Code path), step 1 of 3: prepare the task list for the agent.
 *
 * Selects the queue entries for this run, loads each raw roadmap record and any existing page, and
 * writes data/compile-tasks.json plus one brief per item under data/compile-tasks/<id>.md. The
 * Claude Code action then reads pipeline/prompts/compile-agent.md and works through the tasks,
 * calling write-briefing.mjs for each. compile-finish.mjs records the outcome.
 *
 * Env: COMPILE_LIMIT (default 12), COMPILE_ONLY (comma-separated roadmap ids).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, writeJson, slugify, today } from './lib/util.mjs';
import { loadIndexSlugs, selectQueue, loadRawItem, loadExisting, researchBrief, existingSlugForRoadmapId } from './lib/briefing.mjs';

const LIMIT = Number(process.env.COMPILE_LIMIT || 12);
const ONLY = (process.env.COMPILE_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean).map(Number);
const TASK_DIR = path.join(DATA_DIR, 'compile-tasks');

const items = await selectQueue({ limit: LIMIT, only: ONLY });
const indexSlugs = await loadIndexSlugs();
await fs.rm(TASK_DIR, { recursive: true, force: true });
await fs.mkdir(TASK_DIR, { recursive: true });
await fs.rm(path.join(DATA_DIR, 'compile-results.json'), { force: true });

const tasks = [];
for (const q of items) {
  const item = await loadRawItem(q.id);
  if (!item) { console.warn(`no raw record for ${q.id}`); continue; }
  const slug = q.slug || (await existingSlugForRoadmapId(item.id)) || slugify(item.title);
  const { existing } = await loadExisting(slug);
  const briefFile = path.join(TASK_DIR, `${q.id}.md`);
  await fs.writeFile(briefFile, researchBrief(item, existing, indexSlugs));
  tasks.push({
    id: q.id, reason: q.reason, slug, title: item.title, status: item.status, desk: item.desk,
    exists: Boolean(existing), brief: path.relative(process.cwd(), briefFile),
    raw: path.relative(process.cwd(), path.join('raw', 'roadmap', 'items', `${q.id}.json`)),
    page: path.relative(process.cwd(), path.join('wiki', 'features', `${slug}.md`)),
  });
}
await writeJson(path.join(DATA_DIR, 'compile-tasks.json'), { generated: new Date().toISOString(), date: today(), limit: LIMIT, tasks });
const line = `compile-tasks: ${tasks.length} task(s) prepared for the agent (${tasks.filter((t) => t.exists).length} refresh, ${tasks.filter((t) => !t.exists).length} new)`;
console.log(line);
if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n');
if (process.env.GITHUB_OUTPUT) await fs.appendFile(process.env.GITHUB_OUTPUT, `count=${tasks.length}\n`);
