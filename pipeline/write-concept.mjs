#!/usr/bin/env node
/**
 * Compile, concept pages: the writer calls this once per concept task with its structured output,
 * the counterpart of write-briefing.mjs.
 *
 *   node pipeline/write-concept.mjs <slug> <output.json>
 *
 * Validates the JSON against the concept schema, builds and validates the front matter, renders the
 * page to wiki/concepts/<slug>.md and records the result in data/compile-results.json. An output of
 * the form { "decline": "reason" } records that the tag does not need a page instead. Exit code 1
 * with a readable message when validation fails, so the agent can fix and retry.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, readJson, writeJson } from './lib/util.mjs';
import { writeConceptPage, conceptTaskId } from './lib/concepts.mjs';

const [, , slugArg, outputFile] = process.argv;
const slug = String(slugArg || '').replace(/^concept-/, '');
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !outputFile) {
  console.error('usage: node pipeline/write-concept.mjs <slug> <output.json>');
  process.exit(2);
}
const id = conceptTaskId(slug);

const resultsFile = path.join(DATA_DIR, 'compile-results.json');
async function record(entry) {
  const results = await readJson(resultsFile, { results: [] });
  results.results = results.results.filter((r) => r.id !== id);
  results.results.push({ id, kind: 'concept', at: new Date().toISOString(), ...entry });
  await writeJson(resultsFile, results);
}

const tasks = await readJson(path.join(DATA_DIR, 'compile-tasks.json'), { tasks: [] });
const task = tasks.tasks.find((t) => t.id === id) || { id, kind: 'concept', slug, reason: 'manual' };

let raw;
try {
  raw = JSON.parse(await fs.readFile(outputFile, 'utf8'));
} catch (err) {
  console.error(`Could not parse ${outputFile} as JSON: ${err.message}`);
  await record({ ok: false, error: `invalid JSON: ${err.message}` });
  process.exit(1);
}

try {
  const r = await writeConceptPage(task, raw);
  if (r.declined) {
    // No slug on a decline: nothing was written, so there is nothing for the verify step to check.
    await record({ ok: true, declined: true, title: task.title || slug, reason: r.reason });
    console.log(`OK declined ${slug}\n   ${r.reason}`);
  } else {
    await record({ ok: true, slug, title: r.title, file: path.relative(process.cwd(), r.file), newTags: r.tags.added, stubTags: r.tags.stubs });
    console.log(`OK wrote ${path.relative(process.cwd(), r.file)}\n   ${r.title}`);
    if (r.tags.added.length || r.tags.filled.length) console.log(`   glossary: defined ${[...r.tags.added, ...r.tags.filled].join(', ')}`);
    if (r.tags.stubs.length) console.log(`   glossary: ${r.tags.stubs.join(', ')} still need a description (add them to newTags)`);
  }
} catch (err) {
  await record({ ok: false, slug, error: err.message });
  console.error(`REJECTED ${slug}: ${err.message}`);
  process.exit(1);
}
