#!/usr/bin/env node
/**
 * Compile (Claude Code path), step 2 of 3: the agent calls this once per item with its structured
 * output, and the page is written exactly as the API path would write it.
 *
 *   node pipeline/write-briefing.mjs <roadmapId> <output.json>
 *
 * Validates the JSON against the briefing schema, builds and validates the front matter, renders
 * the page to wiki/features/<slug>.md, and records the result in data/compile-results.json.
 * Exit code 1 with a readable message when validation fails, so the agent can fix and retry.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, readJson, writeJson } from './lib/util.mjs';
import { loadIndexSlugs, loadRawItem, loadExisting, writeBriefingPage, slugForItem, siblingsFor } from './lib/briefing.mjs';

const [, , idArg, outputFile] = process.argv;
const id = Number(idArg);
if (!id || !outputFile) {
  console.error('usage: node pipeline/write-briefing.mjs <roadmapId> <output.json>');
  process.exit(2);
}

const resultsFile = path.join(DATA_DIR, 'compile-results.json');
async function record(entry) {
  const results = await readJson(resultsFile, { results: [] });
  results.results = results.results.filter((r) => r.id !== id);
  results.results.push({ id, at: new Date().toISOString(), ...entry });
  await writeJson(resultsFile, results);
}

const tasks = await readJson(path.join(DATA_DIR, 'compile-tasks.json'), { tasks: [] });
const task = tasks.tasks.find((t) => t.id === id);
const item = await loadRawItem(id);
if (!item) { console.error(`No raw roadmap record for ${id} (raw/roadmap/items/${id}.json). Run ingest first.`); process.exit(1); }

let raw;
try {
  raw = JSON.parse(await fs.readFile(outputFile, 'utf8'));
} catch (err) {
  console.error(`Could not parse ${outputFile} as JSON: ${err.message}`);
  await record({ ok: false, error: `invalid JSON: ${err.message}` });
  process.exit(1);
}

// compile-tasks.mjs chose the slug for the run (slugForItem keeps twin items on separate pages); the fallback is
// for a session run by hand without a task file.
const slug = task?.slug || (await slugForItem(item));
const { existingFm } = await loadExisting(slug);
const indexSlugs = await loadIndexSlugs();
const siblings = await siblingsFor(item);
try {
  // Only a 'restored' task (the item is back on the roadmap) may drop an archived page's archived block and status.
  const { file, title, tags } = await writeBriefingPage(item, raw, { slug, existingFm, indexSlugs, restore: task?.reason === 'restored', siblings });
  // The task's reason (no-briefing, revise, fresh-draft, forced, ...) lets a reader of the run's results tell a first
  // draft from a correction or a parked page written again, which the page's version number cannot.
  await record({ ok: true, slug, title, reason: task?.reason, file: path.relative(process.cwd(), file), newTags: tags.added, stubTags: tags.stubs });
  console.log(`OK wrote ${path.relative(process.cwd(), file)}\n   ${title}`);
  if (tags.added.length || tags.filled.length) console.log(`   glossary: defined ${[...tags.added, ...tags.filled].join(', ')}`);
  if (tags.stubs.length) console.log(`   glossary: ${tags.stubs.join(', ')} still need a description (add them to newTags)`);
} catch (err) {
  await record({ ok: false, slug, error: err.message });
  console.error(`REJECTED ${id}: ${err.message}`);
  process.exit(1);
}
