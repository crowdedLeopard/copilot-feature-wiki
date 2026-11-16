import { getCollection, type CollectionEntry } from 'astro:content';
import catalogJson from '../../data/catalog.json';
import statsJson from '../../data/stats.json';
import heldJson from '../../data/held.json';
import lifecycleJson from '../../data/lifecycle.json';
import messageIndexJson from '../../data/message-center.json';
import { compareByAction, TOPICS, LIFECYCLE } from './site';

export type Feature = CollectionEntry<'features'>;
export type Concept = CollectionEntry<'concepts'>;
export type Digest = CollectionEntry<'digests'>;
export type Verification = CollectionEntry<'verifications'>['data'];
/** A Microsoft 365 Message Center post, from raw/message-center (see pipeline/ingest-message-center.mjs). */
export type Notice = CollectionEntry<'messages'>;

/** What the Message Center ingest recorded about its last run: counts, and how many posts the tenant-privacy screen kept back, by reason. */
export const messageIndex = messageIndexJson as {
  generated: string | null; source?: string; count: number; inFeed?: number; actBy?: number;
  screen?: { withheld: number; byReason: Record<string, number>; reasons: Record<string, string>; tenantWordsFromGraph?: boolean };
  withheld?: { id: string; reasons: string[] }[];
  posts: { id: string; title: string; topic: string; roadmapIds: number[]; actionRequiredBy: string | null; lastModified: string; published: string; inFeed?: boolean }[];
};

/** Every published Message Center post, most recently revised first. */
export async function allNotices(): Promise<Notice[]> {
  const items = await getCollection('messages');
  return items.sort((a, b) => b.data.lastModified.localeCompare(a.data.lastModified) || a.data.id.localeCompare(b.data.id));
}

/** Posts keyed by the roadmap ids they name. */
export function noticesByRoadmap(notices: Notice[]) {
  const m = new Map<number, Notice[]>();
  for (const n of notices) for (const id of n.data.roadmapIds) { if (!m.has(id)) m.set(id, []); m.get(id)!.push(n); }
  return m;
}

/** Posts with an act-by date that has not passed (or passed within `graceDays`), soonest first. */
export function actByNotices(notices: Notice[], { graceDays = 7, now = Date.now() } = {}) {
  const floor = now - graceDays * 86400000;
  return notices
    .filter((n) => n.data.actionRequiredBy && new Date(n.data.actionRequiredBy).getTime() >= floor)
    .sort((a, b) => a.data.actionRequiredBy!.localeCompare(b.data.actionRequiredBy!));
}

/** The earliest act-by date still ahead among a briefing's posts, with the post it comes from. */
export function nearestActBy(posts: Notice[], now = Date.now()) {
  const ahead = actByNotices(posts, { graceDays: 0, now });
  return ahead.length ? { date: ahead[0].data.actionRequiredBy!, post: ahead[0] } : null;
}

/** A briefing the verifier is holding back from publication, from data/held.json (written by pipeline/verify-finish.mjs). */
export interface HeldItem {
  slug: string; roadmapId: number | null; title: string; topic: string | null;
  reason: string; since: string | null; attempts: number; reasons: string[];
}
export const held = heldJson as { generated: string; count: number; items: HeldItem[] };

/** Held briefings keyed by roadmap id, for the radar. */
export function heldIds() {
  const m = new Map<number, HeldItem>();
  for (const h of held.items) if (h.roadmapId) m.set(h.roadmapId, h);
  return m;
}

/** The verifier's report for one briefing, or null when it has not been checked yet. */
export async function verificationFor(slug: string): Promise<Verification | null> {
  const items = await getCollection('verifications');
  return items.find((e) => e.data.slug === slug)?.data ?? null;
}

export interface CatalogItem {
  id: number;
  title: string;
  description: string;
  moreInfoLink: string | null;
  status: string;
  statusKey: string;
  targetDate: string | null;
  previewDate: string | null;
  created: string;
  modified: string;
  products: string[];
  clouds: string[];
  releasePhase: string[];
  platforms: string[];
  topic: string | null;
  roadmapUrl: string;
  briefing: string | null;
  /** Message Center posts that name this item (ids), added by ingest when the Message Center source is connected. */
  messageCenter?: string[];
}

export const catalog = (catalogJson as { generated: string; count: number; items: CatalogItem[] });
export const stats = statsJson as {
  generated: string; briefings: number; archived?: number; concepts: number; tracked: number; byTopic: Record<string, number>; actNow: number; updatedThisWeek: number;
  verification?: { checked: number; needsCorrection: number; unchecked: number; held: number };
  messageCenter?: { posts: number; actBy: number; withheld: number; linked: number };
};
/** When each briefed roadmap item was last seen in the feed, and which are currently missing (written by ingest). */
export const lifecycle = lifecycleJson as { generated: string | null; graceDays: number; seen: Record<string, string>; missing: Record<string, { lastSeen: string | null; missingSince: string }> };

/** Live briefings: everything that is not archived. Lists, the Atlas, search ranking and the digest use this. */
export async function allFeatures(): Promise<Feature[]> {
  const items = await getCollection('features');
  return items.filter((f) => !f.data.archived).sort(compareByAction);
}

/** Archived briefings (cancelled by Microsoft, or gone from the roadmap). Newest archive first. */
export async function archivedFeatures(): Promise<Feature[]> {
  const items = await getCollection('features');
  return items.filter((f) => f.data.archived).sort((a, b) => b.data.archived!.date.localeCompare(a.data.archived!.date) || a.data.title.localeCompare(b.data.title));
}

/** Every briefing page, live and archived: for routes and for resolving links, so an archived page keeps its address. */
export async function allFeaturesIncludingArchived(): Promise<Feature[]> {
  return [...(await allFeatures()), ...(await archivedFeatures())];
}

/** A live page not written or refreshed for longer than its status allows (120 days, 180 once launched). */
export function reviewDue(f: Feature, now = Date.now()) {
  if (f.data.archived) return false;
  const limit = f.data.status === 'launched' ? LIFECYCLE.reviewAfterDays.launched : LIFECYCLE.reviewAfterDays.default;
  return (now - new Date(f.data.updated).getTime()) / 86400000 > limit;
}

export async function allConcepts(): Promise<Concept[]> {
  const items = await getCollection('concepts');
  return items.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function allDigests(): Promise<Digest[]> {
  const items = await getCollection('digests');
  return items.sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export function byTopic(features: Feature[]) {
  const map = new Map<string, Feature[]>();
  for (const t of TOPICS) map.set(t.id, []);
  for (const f of features) map.get(f.data.topic)?.push(f);
  return map;
}

export function tagCounts(features: Feature[], concepts: Concept[]) {
  const counts = new Map<string, number>();
  for (const f of features) for (const t of f.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  for (const c of concepts) for (const t of c.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

/** Roadmap items with a briefing, keyed by roadmap id. */
export function briefedIds(features: Feature[]) {
  const m = new Map<number, Feature>();
  for (const f of features) if (f.data.roadmapId) m.set(f.data.roadmapId, f);
  return m;
}

export function recentCatalog(topicId?: string, days = 90, limit = 250) {
  const cutoff = Date.now() - days * 86400000;
  return catalog.items
    .filter((i) => (!topicId || i.topic === topicId) && new Date(i.modified).getTime() >= cutoff)
    .sort((a, b) => b.modified.localeCompare(a.modified))
    .slice(0, limit);
}

export function daysSince(iso: string) {
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
}
