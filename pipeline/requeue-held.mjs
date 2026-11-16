#!/usr/bin/env node
/**
 * Between ingest and compile: put held briefings back through the writer.
 *
 * A page the independent check held for failing comes back as a "revise" task at the front of
 * the queue (it keeps its slug; the held copy, with the verifier's findings appended, is the
 * existing page the rewrite starts from). A page held as "unverified" is waiting for the
 * verifier, not the writer, so it is taken out of the queue. A page parked after two failed
 * rewrites is left for a person and taken out of the queue too.
 */
import path from 'node:path';
import { DATA_DIR, readJson, writeJson } from './lib/util.mjs';
import { listHeld, listNeedingCorrection, MAX_REVISIONS } from './lib/verify.mjs';

const file = path.join(DATA_DIR, 'queue.json');
const queue = await readJson(file, { items: [] });
const held = await listHeld();
let revise = 0, removed = 0, parked = 0;
for (const h of held) {
  const id = h.data.roadmapId;
  const before = queue.items.length;
  queue.items = queue.items.filter((q) => q.id !== id);
  removed += before - queue.items.length;
  const reason = h.report?.hold?.reason || 'unverified';
  if (reason === 'failed' && (h.report?.attempts || 0) < MAX_REVISIONS && id) {
    queue.items.unshift({ id, title: h.data.title, topic: h.data.topic, reason: 'revise', priority: 100, modified: h.data.roadmapModified || h.data.updated, slug: h.slug });
    revise++;
  } else if (reason === 'parked' || (reason === 'failed' && (h.report?.attempts || 0) >= MAX_REVISIONS)) {
    parked++;
  }
}
// Pages kept live under grace with a "needs correction" notice are rewritten first of all.
let correcting = 0;
for (const p of await listNeedingCorrection()) {
  const id = p.data.roadmapId;
  if (!id) continue;
  queue.items = queue.items.filter((q) => q.id !== id);
  queue.items.unshift({ id, title: p.data.title, topic: p.data.topic, reason: 'revise', priority: 101, modified: p.data.roadmapModified || p.data.updated, slug: p.slug });
  correcting++;
}
queue.count = queue.items.length;
await writeJson(file, queue);
const line = `requeue-held: ${held.length} held page(s), ${correcting} live page(s) needing correction; ${revise + correcting} queued for revision, ${parked} parked for a person, ${removed} stale queue entr${removed === 1 ? 'y' : 'ies'} removed`;
console.log(line);
if (process.env.GITHUB_STEP_SUMMARY && (held.length || correcting)) { const fs = await import('node:fs/promises'); await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n'); }
