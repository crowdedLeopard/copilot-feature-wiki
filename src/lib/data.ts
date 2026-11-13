import { getCollection, type CollectionEntry } from 'astro:content';
import catalogJson from '../../data/catalog.json';
import statsJson from '../../data/stats.json';
import { compareByAction, DESKS } from './site';

export type Feature = CollectionEntry<'features'>;
export type Concept = CollectionEntry<'concepts'>;
export type Digest = CollectionEntry<'digests'>;

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
  desk: string | null;
  roadmapUrl: string;
  briefing: string | null;
}

export const catalog = (catalogJson as { generated: string; count: number; items: CatalogItem[] });
export const stats = statsJson as {
  generated: string; briefings: number; concepts: number; tracked: number; byDesk: Record<string, number>; actNow: number; updatedThisWeek: number;
};

export async function allFeatures(): Promise<Feature[]> {
  const items = await getCollection('features');
  return items.sort(compareByAction);
}

export async function allConcepts(): Promise<Concept[]> {
  const items = await getCollection('concepts');
  return items.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function allDigests(): Promise<Digest[]> {
  const items = await getCollection('digests');
  return items.sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export function byDesk(features: Feature[]) {
  const map = new Map<string, Feature[]>();
  for (const d of DESKS) map.set(d.id, []);
  for (const f of features) map.get(f.data.desk)?.push(f);
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

export function recentCatalog(deskId?: string, days = 90, limit = 250) {
  const cutoff = Date.now() - days * 86400000;
  return catalog.items
    .filter((i) => (!deskId || i.desk === deskId) && new Date(i.modified).getTime() >= cutoff)
    .sort((a, b) => b.modified.localeCompare(a.modified))
    .slice(0, limit);
}

export function daysSince(iso: string) {
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
}
