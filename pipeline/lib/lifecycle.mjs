/**
 * What happens to a briefing after it is written.
 *
 * Archiving: when Microsoft cancels the roadmap item, or the item leaves the roadmap and stays away
 * for the grace period, the page is archived in place. That is a deterministic front-matter edit
 * (no model call): the page keeps its address, its text and its place in search, the site files it
 * under /archive/ with a dated notice, and the lists, Atlas and digest leave it out.
 *
 * Review: a page nobody has touched for REVIEW_AFTER_DAYS goes back into its topic's queue as
 * "review-due", so controls, licensing and status get re-checked even when the roadmap entry has
 * not changed. Ingest decides both; this module holds the rules and the page edit.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { load as yamlLoad } from 'js-yaml';
import { featureFrontmatter } from './schema.mjs';
import { FEATURES_DIR, today } from './util.mjs';
import { LIFECYCLE } from '../../config/taxonomy.mjs';

export const REMOVED_GRACE_DAYS = LIFECYCLE.removedGraceDays;

export function daysBetween(fromIso, toIso = today()) {
  return Math.floor((new Date(toIso).getTime() - new Date(fromIso).getTime()) / 86400000);
}

export function reviewDueAfter(status) {
  return status === 'launched' ? LIFECYCLE.reviewAfterDays.launched : LIFECYCLE.reviewAfterDays.default;
}

/** True when a live page has not been written or refreshed for longer than its status allows. */
export function isReviewDue({ updated, status, archived }, on = today()) {
  return !archived && Boolean(updated) && daysBetween(updated, on) > reviewDueAfter(status);
}

export function archiveNote(reason, lastSeen) {
  return reason === 'cancelled'
    ? 'Archived: Microsoft marked the roadmap item as cancelled. The briefing is kept for reference.'
    : `Archived: the item left the Microsoft 365 Roadmap${lastSeen ? ` (last seen ${lastSeen})` : ''} and did not return within ${REMOVED_GRACE_DAYS} days. The briefing is kept for reference.`;
}

/**
 * The lifecycle-owned front matter a rewrite carries over. The `archived` block and the cancelled status that goes
 * with a cancellation belong to this module, not to the writer: a correction or refresh of an archived page keeps
 * them, so a check that faults something else on the page cannot put the page back online (a correction did that
 * on 19 Nov 2026). Only a `restored` task, queued when the item is back on the roadmap, drops them.
 */
export function lifecycleFields(item, existingFm, { restore = false } = {}) {
  const archived = !restore && existingFm?.archived ? existingFm.archived : null;
  return {
    status: archived?.reason === 'cancelled' ? 'cancelled' : item.statusKey,
    ...(archived ? { archived } : {}),
  };
}

/**
 * Archive one briefing in place. Touches only the front-matter lines it owns: status (cancelled
 * only), updated, the changes list and a new `archived` block. The result is validated against the
 * briefing schema before anything is written. Returns the change note, or null if already archived.
 */
export async function archiveBriefing(slug, { reason, lastSeen = null, on = today() }) {
  if (!['cancelled', 'removed'].includes(reason)) throw new Error(`Unknown archive reason "${reason}"`);
  const file = path.join(FEATURES_DIR, `${slug}.md`);
  const original = await fs.readFile(file, 'utf8');
  if (/^archived:/m.test(original)) return null;
  const note = archiveNote(reason, lastSeen);
  let md = original;
  if (reason === 'cancelled') md = md.replace(/^status: "[a-z-]+"$/m, 'status: "cancelled"');
  md = md.replace(/^updated: "\d{4}-\d{2}-\d{2}"$/m, `updated: ${JSON.stringify(on)}`);
  const entry = `  - date: ${JSON.stringify(on)}\n    note: ${JSON.stringify(note)}`;
  if (/^changes: \[\]$/m.test(md)) md = md.replace(/^changes: \[\]$/m, `changes:\n${entry}`);
  else md = md.replace(/^changes:\n(?:  - date: [^\n]*\n    note: [^\n]*\n)+/m, (block) => block + entry + '\n');
  const archivedBlock = `archived:\n  reason: ${JSON.stringify(reason)}\n  date: ${JSON.stringify(on)}\n  lastSeen: ${JSON.stringify(lastSeen)}\n`;
  if (/^version: \d+$/m.test(md)) md = md.replace(/^version: \d+\n/m, (line) => archivedBlock + line);
  else md = md.replace(/\n---\n/, `\n${archivedBlock}---\n`);
  const yaml = md.match(/^---\n([\s\S]*?)\n---/)?.[1] || '';
  const check = featureFrontmatter.safeParse(yamlLoad(yaml));
  if (!check.success || !check.data.archived || !check.data.changes.some((c) => c.note === note)) {
    throw new Error(`Archiving ${slug} would break its front matter: ${check.success ? 'edit did not apply' : check.error.issues.map((i) => i.path.join('.') + ' ' + i.message).join('; ')}`);
  }
  await fs.writeFile(file, md);
  return note;
}
