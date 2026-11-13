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
import { DATA_DIR, readJson, writeJson, slugify } from './lib/util.mjs';
import { loadIndexSlugs, loadRawItem, loadExisting, writeBriefingPage, existingSlugForRoadmapId } from './lib/briefing.mjs';

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

const slug = task?.slug || (await existingSlugForRoadmapId(id)) || slugify(item.title);
const { existingFm } = await loadExisting(slug);
const indexSlugs = await loadIndexSlugs();
try {
  const { file, title } = await writeBriefingPage(item, raw, { slug, existingFm, indexSlugs });
  await record({ ok: true, slug, title, file: path.relative(process.cwd(), file) });
  console.log(`OK wrote ${path.relative(process.cwd(), file)}\n   ${title}`);
} catch (err) {
  await record({ ok: false, slug, error: err.message });
  console.error(`REJECTED ${id}: ${err.message}`);
  process.exit(1);
}
