#!/usr/bin/env node
/**
 * Compile (Claude Code path), step 1 of 3: prepare the task list for the agent.
 *
 * Selects the queue entries for this run, loads each raw roadmap record and any existing page, and
 * writes data/compile-tasks.json plus one brief per item under data/compile-tasks/<id>.md. The
 * Claude Code action then reads pipeline/prompts/compile-agent.md and works through the tasks,
 * calling write-briefing.mjs for each. compile-finish.mjs records the outcome.
 *
 * A full run also carries a few concept tasks (kind "concept": a concept page to write, correct or
 * refresh, see pipeline/lib/concepts.mjs). They come out of COMPILE_LIMIT, not on top of it, and a
 * run narrowed with COMPILE_ONLY or COMPILE_TOPIC, or smaller than CONCEPTS.minRunLimit, has none.
 *
 * Env: COMPILE_LIMIT (default 12), COMPILE_ONLY (comma-separated roadmap ids), COMPILE_TOPIC (one topic id,
 * to spend a whole run on one topic's backlog), COMPILE_CONCEPTS (concept pages this run; default
 * CONCEPTS.perRun, 0 for none), COMPILE_CONCEPTS_ONLY (comma-separated concept slugs to write, for a test run).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, readJson, writeJson, slugify, today } from './lib/util.mjs';
import { loadIndexSlugs, selectQueue, topicSplit, loadRawItem, loadExisting, researchBrief, existingSlugForRoadmapId } from './lib/briefing.mjs';
import { loadGlossary } from './lib/tags.mjs';
import { CONCEPTS } from '../config/taxonomy.mjs';
import { CONCEPT_STATE, selectConceptTasks, conceptBrief, conceptTaskId, liveBriefings, allConceptPages, loadExistingConcept } from './lib/concepts.mjs';
import { postsForBrief } from './lib/message-center.mjs';
import { loadConfirmedControls } from './lib/confirmed-controls.mjs';

const LIMIT = Number(process.env.COMPILE_LIMIT || 12);
const ONLY = (process.env.COMPILE_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean).map(Number);
const TOPIC = (process.env.COMPILE_TOPIC || '').trim();
const TASK_DIR = path.join(DATA_DIR, 'compile-tasks');

// Concept pages take a few of the run's sessions. A narrowed or small run is all briefings.
const CONCEPTS_ONLY = (process.env.COMPILE_CONCEPTS_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean);
const wanted = process.env.COMPILE_CONCEPTS === undefined || process.env.COMPILE_CONCEPTS === '' ? CONCEPTS.perRun : Number(process.env.COMPILE_CONCEPTS) || 0;
const conceptSlots = ONLY.length || TOPIC || LIMIT < CONCEPTS.minRunLimit ? 0 : Math.max(0, Math.min(wanted, LIMIT));
const conceptPicks = await selectConceptTasks({ limit: conceptSlots, only: CONCEPTS_ONLY });

const items = CONCEPTS_ONLY.length ? [] : await selectQueue({ limit: LIMIT - conceptPicks.length, only: ONLY, topic: TOPIC });
const indexSlugs = await loadIndexSlugs();
const glossary = await loadGlossary();
const confirmed = items.length ? await loadConfirmedControls() : [];
await fs.rm(TASK_DIR, { recursive: true, force: true });
await fs.mkdir(TASK_DIR, { recursive: true });
await fs.rm(path.join(DATA_DIR, 'compile-results.json'), { force: true });

const tasks = [];
for (const q of items) {
  const item = await loadRawItem(q.id);
  if (!item) { console.warn(`no raw record for ${q.id}`); continue; }
  const slug = q.slug || (await existingSlugForRoadmapId(item.id)) || slugify(item.title);
  const { existing } = await loadExisting(slug);
  const posts = await postsForBrief(item.id);
  const briefFile = path.join(TASK_DIR, `${q.id}.md`);
  await fs.writeFile(briefFile, researchBrief(item, existing, indexSlugs, glossary, posts, confirmed));
  tasks.push({
    id: q.id, reason: q.reason, slug, title: item.title, status: item.status, topic: item.topic,
    exists: Boolean(existing), messageCenter: posts.map((p) => p.id), brief: path.relative(process.cwd(), briefFile),
    raw: path.relative(process.cwd(), path.join('raw', 'roadmap', 'items', `${q.id}.json`)),
    page: path.relative(process.cwd(), path.join('wiki', 'features', `${slug}.md`)),
  });
}
if (conceptPicks.length) {
  const ctx = { briefings: await liveBriefings(), concepts: await allConceptPages(), glossary, state: await readJson(CONCEPT_STATE, {}) };
  for (const c of conceptPicks) {
    const id = conceptTaskId(c.slug);
    const existing = c.exists ? await loadExistingConcept(c.slug) : null;
    const briefFile = path.join(TASK_DIR, `${id}.md`);
    await fs.writeFile(briefFile, conceptBrief(c, { ...ctx, existing: existing?.raw || null }));
    tasks.push({
      id, kind: 'concept', reason: c.reason, slug: c.slug, title: c.title, topic: null,
      exists: Boolean(existing), brief: path.relative(process.cwd(), briefFile),
      page: path.relative(process.cwd(), path.join('wiki', 'concepts', `${c.slug}.md`)),
    });
  }
}
await writeJson(path.join(DATA_DIR, 'compile-tasks.json'), { generated: new Date().toISOString(), date: today(), limit: LIMIT, topic: TOPIC || null, tasks });
const briefingTasks = tasks.filter((t) => t.kind !== 'concept');
const conceptTasks = tasks.filter((t) => t.kind === 'concept');
const conceptNote = conceptTasks.length ? `, and ${conceptTasks.length} concept page${conceptTasks.length > 1 ? 's' : ''} (${conceptTasks.map((t) => `${t.slug}: ${t.reason}`).join(', ')})` : '';
const line = `compile-tasks: ${tasks.length} task(s) prepared for the agent (${briefingTasks.filter((t) => t.exists).length} refresh, ${briefingTasks.filter((t) => !t.exists).length} new; ${topicSplit(briefingTasks)}${conceptNote})`;
console.log(line);
if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n');
// The agent gets a turn budget that grows with the task list: about 40 tool calls per briefing, never fewer than 400.
if (process.env.GITHUB_OUTPUT) await fs.appendFile(process.env.GITHUB_OUTPUT, `count=${tasks.length}\nturns=${Math.max(400, tasks.length * 40)}\n`);
