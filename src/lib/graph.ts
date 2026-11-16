/**
 * The atlas graph: every briefing, concept and shared tag as a node, with the links between them,
 * laid out as a flat map by src/lib/layout.ts. Built at site build time from the content
 * collections, so the daily run redraws it without any extra pipeline step.
 *
 * Two pages are linked when one names the other in `related` or in its text. A page is linked to a
 * tag it carries, when at least one other page carries it too.
 */
import type { Feature, Concept } from './data';
import { catalog } from './data';
import { TOPICS, featureUrl, conceptUrl, tagUrl } from './site';
import { tagLabel } from './tags';
import { layout, type LayoutEdge, type LayoutNode } from './layout';

export type NodeKind = 'f' | 'c' | 't';
export const EDGE = { link: 0, tag: 1 } as const;

export interface AtlasNode {
  /** `f:slug`, `c:slug`, `t:tag` */
  id: string;
  k: NodeKind;
  /** Full title */
  t: string;
  /** Short label for the canvas */
  l: string;
  /** Site URL */
  u: string;
  /** Index into `topics`, or -1 for a concept or tag */
  d: number;
  x: number;
  y: number;
  /** Number of links */
  n: number;
  /** Briefings and concepts */
  s?: string;
  updated?: string;
  /** Briefings only */
  risk?: string;
  cost?: string;
  impact?: string;
  action?: string;
  status?: string;
}

export interface AtlasTopic {
  id: string;
  label: string;
  short: string;
  blurb: string;
  briefed: number;
  tracked: number;
  /** Where the topic's briefings sit: the middle of the group and its top and bottom edges. Null while the topic has no briefings. */
  at: null | { x: number; y: number; top: number; bottom: number };
}

export interface AtlasData {
  generated: string;
  topics: AtlasTopic[];
  nodes: AtlasNode[];
  /** [from, to, kind] as indexes into `nodes` */
  edges: [number, number, number][];
  /** [minX, minY, maxX, maxY] of the node positions */
  box: [number, number, number, number];
  counts: { briefings: number; concepts: number; tags: number; links: number; tracked: number };
}

/** "Copilot Studio: block maker-provided credentials for tool authentication" -> "Block maker-provided credentials…" */
export function shortLabel(title: string, max = 38): string {
  const cut = title.includes(': ') ? title.slice(title.indexOf(': ') + 2) : title;
  const text = cut.charAt(0).toUpperCase() + cut.slice(1);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/[\s,;:(-]+\S*$/, '') + '…';
}

const BODY_LINK = /\]\(\/(features|concepts)\/([a-z0-9-]+)\/?(?:#[^)]*)?\)/g;

let memo: { key: string; atlas: AtlasData } | null = null;

/** The atlas for the current content. Pages ask for it many times in one build, so it is computed once. */
export function buildAtlas(features: Feature[], concepts: Concept[]): AtlasData {
  const key = [...features, ...concepts].map((e) => `${e.data.slug}@${e.data.updated}:${e.data.related.join('+')}:${e.data.tags.join('+')}`).sort().join('|');
  if (memo?.key !== key) memo = { key, atlas: compute(features, concepts) };
  return memo.atlas;
}

function compute(features: Feature[], concepts: Concept[]): AtlasData {
  const topicIndex = new Map(TOPICS.map((t, i) => [t.id, i]));
  const nodes: AtlasNode[] = [];
  const index = new Map<string, number>();
  const add = (n: AtlasNode) => { index.set(n.id, nodes.length); nodes.push(n); };

  // ---- Nodes, in a fixed order so the layout is reproducible.
  for (const f of [...features].sort((a, b) => a.data.created.localeCompare(b.data.created) || a.data.slug.localeCompare(b.data.slug))) {
    const d = f.data;
    add({
      id: `f:${d.slug}`, k: 'f', t: d.title, l: shortLabel(d.title), u: featureUrl(d.slug), d: topicIndex.get(d.topic) ?? -1, x: 0, y: 0, n: 0,
      s: d.summary, risk: d.risk, cost: d.cost, impact: d.impact, action: d.action, status: d.status, updated: d.updated,
    });
  }
  for (const c of [...concepts].sort((a, b) => a.data.slug.localeCompare(b.data.slug))) {
    add({ id: `c:${c.data.slug}`, k: 'c', t: c.data.title, l: shortLabel(c.data.title.replace(/:.*$/, ''), 30), u: conceptUrl(c.data.slug), d: -1, x: 0, y: 0, n: 0, s: c.data.summary, updated: c.data.updated });
  }

  const pages = [
    ...features.map((f) => ({ id: `f:${f.data.slug}`, tags: f.data.tags, related: f.data.related, body: f.body ?? '' })),
    ...concepts.map((c) => ({ id: `c:${c.data.slug}`, tags: c.data.tags, related: c.data.related, body: c.body ?? '' })),
  ];
  const tagUse = new Map<string, number>();
  for (const pg of pages) for (const t of new Set(pg.tags)) tagUse.set(t, (tagUse.get(t) ?? 0) + 1);
  const conceptSlugs = new Set(concepts.map((c) => c.data.slug));
  for (const [tag, uses] of [...tagUse.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    // A tag that only one page carries connects nothing; a tag named after a concept is that concept.
    if (uses < 2 || conceptSlugs.has(tag)) continue;
    add({ id: `t:${tag}`, k: 't', t: tagLabel(tag), l: tagLabel(tag), u: tagUrl(tag), d: -1, x: 0, y: 0, n: 0 });
  }

  // ---- Links
  const edges: [number, number, number][] = [];
  const seen = new Set<string>();
  const link = (a: string, b: string, kind: number) => {
    const i = index.get(a), j = index.get(b);
    if (i === undefined || j === undefined || i === j) return;
    const key = i < j ? `${i}-${j}` : `${j}-${i}`;
    if (seen.has(key)) return;
    seen.add(key);
    edges.push([i, j, kind]);
  };
  for (const pg of pages) {
    for (const slug of pg.related) link(pg.id, index.has(`f:${slug}`) ? `f:${slug}` : `c:${slug}`, EDGE.link);
    for (const m of pg.body.matchAll(BODY_LINK)) link(pg.id, `${m[1] === 'features' ? 'f' : 'c'}:${m[2]}`, EDGE.link);
  }
  // A tag named after a concept is a link to that concept's page.
  for (const pg of pages) for (const tag of pg.tags) if (conceptSlugs.has(tag)) link(pg.id, `c:${tag}`, EDGE.link);
  for (const pg of pages) for (const tag of pg.tags) if (!conceptSlugs.has(tag)) link(pg.id, `t:${tag}`, EDGE.tag);
  for (const [a, b] of edges) { nodes[a].n++; nodes[b].n++; }

  // ---- Positions
  const SIZE: Record<NodeKind, number> = { f: 1, c: 1.25, t: 0.62 };
  const lnodes: LayoutNode[] = nodes.map((n) => ({ id: n.id, topic: n.k === 'f' ? n.d : -1, size: SIZE[n.k] }));
  const ledges: LayoutEdge[] = edges.map(([a, b, kind]) => ({ a, b, w: kind === EDGE.link ? 1 : 0.45 }));
  const placed = layout(lnodes, ledges, TOPICS.length);
  nodes.forEach((n, i) => { n.x = placed.pos[i][0]; n.y = placed.pos[i][1]; });

  // ---- Topics
  const tracked = new Map<string, number>();
  for (const item of catalog.items) if (item.topic) tracked.set(item.topic, (tracked.get(item.topic) ?? 0) + 1);
  const topics: AtlasTopic[] = TOPICS.map((t, i) => {
    const mine = nodes.filter((n) => n.k === 'f' && n.d === i);
    let at: AtlasTopic['at'] = null;
    if (mine.length) {
      const x = mine.reduce((s, n) => s + n.x, 0) / mine.length, y = mine.reduce((s, n) => s + n.y, 0) / mine.length;
      at = { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, top: Math.min(...mine.map((n) => n.y)), bottom: Math.max(...mine.map((n) => n.y)) };
    }
    return { id: t.id, label: t.label, short: t.short, blurb: t.blurb, briefed: mine.length, tracked: tracked.get(t.id) ?? 0, at };
  });

  const count = (k: NodeKind) => nodes.filter((n) => n.k === k).length;
  return {
    generated: catalog.generated,
    topics,
    nodes,
    edges,
    box: placed.box,
    counts: { briefings: count('f'), concepts: count('c'), tags: count('t'), links: edges.length, tracked: catalog.items.filter((i) => i.topic).length },
  };
}
