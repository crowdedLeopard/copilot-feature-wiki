#!/usr/bin/env node
/**
 * Source watch, daily, no model: re-read every Microsoft Learn page the live briefings and concept pages cite, and
 * record which ones changed. verify-tasks.mjs then queues the briefings that cite a changed page for a re-check
 * (reason "source-changed"), ahead of the routine re-checks. State: data/sources.json. See pipeline/lib/sources.mjs.
 *
 * Env: SOURCE_WATCH on (default) | off; SOURCE_WATCH_CONCURRENCY (2); SOURCE_WATCH_LIMIT (800 pages a run);
 * SOURCE_WATCH_PAUSE_MS (150 between requests in each worker). Each page is read once a day across the day's runs,
 * and the run stops on sustained HTTP 429 from Learn, leaving the rest for the next run (see watch in lib/sources.mjs).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { loadPages, loadConcepts } from './lib/pages.mjs';
import { readJson, writeJson, appendLog, today } from './lib/util.mjs';
import { REPORT_DIR } from './lib/verify.mjs';
import { SOURCES_FILE, loadSources, citedUrls, watch } from './lib/sources.mjs';

const summary = async (line) => { console.log(line); if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n'); };

if ((process.env.SOURCE_WATCH || 'on').toLowerCase() === 'off') {
  await summary('source watch: off (SOURCE_WATCH); cited Microsoft pages were not re-read.');
  process.exit(0);
}

const pages = [
  ...(await loadPages()).filter((p) => !p.error && p.data.title && !p.data.archived),
  ...(await loadConcepts()).filter((p) => !p.error && p.data.title),
];
const cited = new Map();
for (const p of pages) {
  const report = await readJson(path.join(REPORT_DIR, `${p.slug}.json`), null);
  for (const url of citedUrls({ data: p.data, body: p.body, report })) {
    if (!cited.has(url)) cited.set(url, new Set());
    cited.get(url).add(p.slug);
  }
}

const store = await loadSources();
const started = Date.now();
const result = await watch(store, cited, {
  concurrency: Math.max(1, Number(process.env.SOURCE_WATCH_CONCURRENCY || 2)),
  limit: Math.max(1, Number(process.env.SOURCE_WATCH_LIMIT || 800)),
  pauseMs: Math.max(0, Number(process.env.SOURCE_WATCH_PAUSE_MS || 150)),
  date: today(),
});
await writeJson(SOURCES_FILE, store);

const seconds = Math.round((Date.now() - started) / 1000);
const line = `- ${today()} source watch: ${result.fetched} of ${result.cited} Microsoft pages cited by ${pages.length} live pages re-read in ${seconds}s` +
  `${result.readToday ? ` (${result.readToday} read earlier today)` : ''}` +
  `${result.baselines ? `, ${result.baselines} read for the first time` : ''}` +
  `, ${result.changed.length} changed${result.affected.length ? ` (${result.affected.length} briefing${result.affected.length === 1 ? '' : 's'} queued for a re-check)` : ''}` +
  `${result.unreachable.length ? `, ${result.unreachable.length} unreachable${result.rateLimited ? ` (${result.rateLimited} rate limited by Learn)` : ''}` : ''}` +
  `${result.stopped ? `, stopped after ${result.rateLimited} rate-limit answers with ${result.left} left for the next run` : ''}${result.skipped ? `, ${result.skipped} not reached (SOURCE_WATCH_LIMIT)` : ''}`;
await appendLog(line);
await summary(line.slice(2));
for (const url of result.changed) console.log(`  changed: ${url} (now ${store.sources[url].msDate || 'no ms.date'}, was ${store.sources[url].previous?.msDate || 'no ms.date'}) → ${store.sources[url].pages.join(', ')}`);
if (result.unreachable.length) console.log(`  unreachable: ${result.unreachable.slice(0, 20).join(', ')}${result.unreachable.length > 20 ? ', …' : ''}`);
