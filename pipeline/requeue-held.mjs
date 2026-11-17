#!/usr/bin/env node
/**
 * Between ingest and compile: put held briefings back through the writer.
 *
 * A page the independent check held for failing comes back as a "revise" task at the front of
 * the queue (it keeps its slug; the held copy, with the verifier's findings appended, is the
 * existing page the rewrite starts from). A page held as "unverified" is waiting for the
 * verifier, not the writer, so it is taken out of the queue. A page parked after its last
 * correction round (MAX_REVISIONS failed checks) is left for a person and taken out of the queue too.
 */
import path from 'node:path';
import { DATA_DIR, readJson, writeJson } from './lib/util.mjs';
import { GRACE_EXISTING, holdNeedingCorrection, holdReason, listHeld, listNeedingCorrection, MAX_REVISIONS, writeHeldIndex } from './lib/verify.mjs';

const file = path.join(DATA_DIR, 'queue.json');
const queue = await readJson(file, { items: [] });
// With the grace off (the default), a page still online with an "awaiting correction" notice from an earlier run
// goes offline now, and is queued for its rewrite with the other held pages below.
const offline = GRACE_EXISTING ? [] : await holdNeedingCorrection();
if (offline.length) await writeHeldIndex();
// A held concept page has no roadmap item: pipeline/lib/concepts.mjs queues its correction, so it is not counted here.
const held = (await listHeld()).filter((h) => h.kind !== 'concept');
let removed = 0, parked = 0;
const revisions = [];
for (const h of held) {
  const id = h.data.roadmapId;
  const before = queue.items.length;
  queue.items = queue.items.filter((q) => q.id !== id);
  removed += before - queue.items.length;
  // holdReason gives a page parked under an earlier, lower cap its remaining round.
  const reason = holdReason(h.report);
  const attempts = h.report?.attempts || 0;
  if (reason === 'failed' && attempts < MAX_REVISIONS && id) {
    revisions.push({ id, title: h.data.title, topic: h.data.topic, reason: 'revise', priority: 100, modified: h.data.roadmapModified || h.data.updated, slug: h.slug, attempts, since: h.report?.hold?.since || '' });
  } else if (reason === 'parked' || (reason === 'failed' && attempts >= MAX_REVISIONS)) {
    parked++;
  }
}
// The pages with the most correction rounds left go first (fewest failed checks, then the longest held), so a
// run never spends its places on pages one failure from being parked while first-time corrections wait.
revisions.sort((a, b) => a.attempts - b.attempts || a.since.localeCompare(b.since) || a.slug.localeCompare(b.slug));
queue.items = [...revisions.map(({ attempts, since, ...task }) => task), ...queue.items];
const revise = revisions.length;
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
const line = `requeue-held: ${held.length} held page(s)${offline.length ? ` (${offline.length} taken offline now, awaiting correction)` : ''}, ${correcting} live page(s) needing correction; ${revise + correcting} queued for revision, ${parked} parked for a person, ${removed} stale queue entr${removed === 1 ? 'y' : 'ies'} removed`;
console.log(line);
if (process.env.GITHUB_STEP_SUMMARY && (held.length || correcting || offline.length)) { const fs = await import('node:fs/promises'); await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n'); }
