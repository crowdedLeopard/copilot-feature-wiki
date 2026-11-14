/**
 * The atlas graph: every briefing, concept, shared tag and product as a node, with the links between
 * them, laid out inside the brain from src/lib/brain.ts. Built at site build time from the content
 * collections, so the daily run redraws it without any extra pipeline step.
 *
 * Positions are deterministic. A briefing's place depends on its slug and on the briefings created
 * before it, so adding tomorrow's pages does not move today's.
 */
import type { Feature, Concept } from './data';
import { catalog } from './data';
import { DESKS, ACTION, RISK, featureUrl, conceptUrl, tagUrl, href, tagLabel } from './site';
import { CORE, DESK_REGION, REGION_ANCHOR, clampInside, hash32, rng, sampleRegion, type Vec3 } from './brain';

export type NodeKind = 'f' | 'c' | 't' | 'p';
export const EDGE = { related: 0, tag: 1, product: 2 } as const;

export interface AtlasNode {
  /** `f:slug`, `c:slug`, `t:tag`, `p:product-key` */
  id: string;
  k: NodeKind;
  /** Full title */
  t: string;
  /** Short label for the canvas */
  l: string;
  /** Site URL */
  u: string;
  /** Index into `desks`, or -1 for nodes that belong to no single desk */
  d: number;
  p: Vec3;
  /** Number of links */
  n: number;
  /** Briefings only */
  s?: string;
  risk?: string;
  cost?: string;
  impact?: string;
  action?: string;
  status?: string;
  updated?: string;
}

export interface AtlasDesk {
  id: string;
  label: string;
  short: string;
  region: string;
  regionLabel: string;
  role: string;
  why: string;
  briefed: number;
  tracked: number;
  anchor: Vec3;
}

export interface AtlasData {
  generated: string;
  desks: AtlasDesk[];
  nodes: AtlasNode[];
  /** [from, to, kind] as indexes into `nodes` */
  edges: [number, number, number][];
  counts: { briefings: number; concepts: number; tags: number; products: number; links: number; tracked: number };
}

const round = (v: Vec3): Vec3 => [Math.round(v[0] * 1000) / 1000, Math.round(v[1] * 1000) / 1000, Math.round(v[2] * 1000) / 1000];
const dist = (a: Vec3, b: Vec3) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

/** "Copilot Studio: block maker-provided credentials for tool authentication" -> "Block maker-provided credentials…" */
export function shortLabel(title: string, max = 38): string {
  const cut = title.includes(': ') ? title.slice(title.indexOf(': ') + 2) : title;
  const text = cut.charAt(0).toUpperCase() + cut.slice(1);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/[\s,;:(-]+\S*$/, '') + '…';
}

function productLabel(name: string) {
  return name.replace(/^Microsoft Copilot \(Microsoft 365\)$/, 'Microsoft 365 Copilot').replace(/ governance and administration$/, ' governance');
}

const BODY_LINK = /\]\(\/(features|concepts)\/([a-z0-9-]+)\/?(?:#[^)]*)?\)/g;

let memo: { key: string; atlas: AtlasData } | null = null;

/** The atlas for the current content. Pages ask for it many times in one build, so it is computed once. */
export function buildAtlas(features: Feature[], concepts: Concept[]): AtlasData {
  const key = [...features, ...concepts].map((e) => `${e.data.slug}@${e.data.updated}:${e.data.related.join('+')}:${e.data.tags.length}`).sort().join('|');
  if (memo?.key !== key) memo = { key, atlas: compute(features, concepts) };
  return memo.atlas;
}

function compute(features: Feature[], concepts: Concept[]): AtlasData {
  const deskIndex = new Map(DESKS.map((d, i) => [d.id, i]));
  const nodes: AtlasNode[] = [];
  const index = new Map<string, number>();
  const add = (n: AtlasNode) => { index.set(n.id, nodes.length); nodes.push(n); return nodes.length - 1; };

  // ---- Briefings, oldest first, so new pages never displace existing ones.
  const ordered = [...features].sort((a, b) => a.data.created.localeCompare(b.data.created) || a.data.slug.localeCompare(b.data.slug));
  const placed: { p: Vec3; slug: string }[] = [];
  for (const f of ordered) {
    const d = f.data;
    const region = DESK_REGION[d.desk]?.region ?? 'parietal';
    const R = rng(hash32(`f:${d.slug}`));
    const near = placed.filter((q) => d.related.includes(q.slug));
    let best: Vec3 = [0, 0, 0], bestScore = -Infinity;
    for (let i = 0; i < 28; i++) {
      const c = sampleRegion(R, region, 0.62, 0.9);
      let gap = 0.5;
      for (const q of placed) gap = Math.min(gap, dist(c, q.p));
      let pull = 0;
      for (const q of near) pull += dist(c, q.p);
      const score = gap - (near.length ? (0.18 * pull) / near.length : 0);
      if (score > bestScore) { bestScore = score; best = c; }
    }
    placed.push({ p: best, slug: d.slug });
    add({
      id: `f:${d.slug}`, k: 'f', t: d.title, l: shortLabel(d.title), u: featureUrl(d.slug), d: deskIndex.get(d.desk) ?? -1, p: round(best), n: 0,
      s: d.summary, risk: d.risk, cost: d.cost, impact: d.impact, action: d.action, status: d.status, updated: d.updated,
    });
  }

  // ---- Concepts, shared tags and products sit deeper, between the briefings they connect.
  for (const c of [...concepts].sort((a, b) => a.data.slug.localeCompare(b.data.slug))) {
    add({ id: `c:${c.data.slug}`, k: 'c', t: c.data.title, l: shortLabel(c.data.title.replace(/:.*$/, ''), 30), u: conceptUrl(c.data.slug), d: -1, p: [0, 0, 0], n: 0, s: c.data.summary, updated: c.data.updated });
  }

  const pages = [
    ...features.map((f) => ({ id: `f:${f.data.slug}`, slug: f.data.slug, tags: f.data.tags, related: f.data.related, products: f.data.products, body: f.body ?? '' })),
    ...concepts.map((c) => ({ id: `c:${c.data.slug}`, slug: c.data.slug, tags: c.data.tags, related: c.data.related, products: [] as string[], body: c.body ?? '' })),
  ];

  const tagUse = new Map<string, number>();
  for (const pg of pages) for (const t of pg.tags) tagUse.set(t, (tagUse.get(t) ?? 0) + 1);
  const conceptSlugs = new Set(concepts.map((c) => c.data.slug));
  for (const [tag, uses] of [...tagUse.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    // A tag that only one page carries connects nothing; a tag named after a concept is that concept.
    if (uses < 2 || conceptSlugs.has(tag)) continue;
    add({ id: `t:${tag}`, k: 't', t: tagLabel(tag), l: tagLabel(tag), u: tagUrl(tag), d: -1, p: [0, 0, 0], n: 0 });
  }

  const productNames = new Map<string, string>();
  for (const f of features) for (const name of f.data.products) if (!productNames.has(name.toLowerCase())) productNames.set(name.toLowerCase(), name);
  for (const [key, name] of [...productNames.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    add({ id: `p:${key}`, k: 'p', t: productLabel(name), l: productLabel(name).replace(/^Microsoft (?!\d)/, ''), u: href(`/features/?q=${encodeURIComponent(name)}`), d: -1, p: [0, 0, 0], n: 0 });
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
    for (const slug of pg.related) link(pg.id, index.has(`f:${slug}`) ? `f:${slug}` : `c:${slug}`, EDGE.related);
    for (const m of pg.body.matchAll(BODY_LINK)) link(pg.id, `${m[1] === 'features' ? 'f' : 'c'}:${m[2]}`, EDGE.related);
  }
  for (const pg of pages) {
    for (const tag of pg.tags) link(pg.id, conceptSlugs.has(tag) ? `c:${tag}` : `t:${tag}`, EDGE.tag);
    for (const name of pg.products) link(pg.id, `p:${name.toLowerCase()}`, EDGE.product);
  }
  for (const [a, b] of edges) { nodes[a].n++; nodes[b].n++; }

  // ---- Place the inner nodes at the weighted middle of what they link to, drawn towards the core.
  const DEPTH: Record<NodeKind, number> = { f: 1, t: 0.62, c: 0.4, p: 0.3 };
  const inner = nodes.map((n, i) => i).filter((i) => nodes[i].k !== 'f');
  const neighbours = new Map<number, number[]>();
  for (const [a, b] of edges) {
    (neighbours.get(a) ?? neighbours.set(a, []).get(a)!).push(b);
    (neighbours.get(b) ?? neighbours.set(b, []).get(b)!).push(a);
  }
  for (const i of inner) {
    const n = nodes[i];
    const anchors = (neighbours.get(i) ?? []).filter((j) => nodes[j].k === 'f');
    const R = rng(hash32(n.id));
    let c: Vec3 = [CORE[0], CORE[1], CORE[2]];
    if (anchors.length) {
      c = [0, 0, 0];
      for (const j of anchors) { c[0] += nodes[j].p[0]; c[1] += nodes[j].p[1]; c[2] += nodes[j].p[2]; }
      c = [c[0] / anchors.length, c[1] / anchors.length, c[2] / anchors.length];
    }
    const k = DEPTH[n.k];
    const j = n.k === 't' ? 0.09 : 0.07;
    n.p = [
      CORE[0] + (c[0] - CORE[0]) * k + (R() - 0.5) * j * 2,
      CORE[1] + (c[1] - CORE[1]) * k + (R() - 0.5) * j * 2,
      CORE[2] + (c[2] - CORE[2]) * k + (R() - 0.5) * j * 2,
    ];
  }
  // Ease apart anything that landed on top of something else.
  const MIN = 0.105;
  for (let pass = 0; pass < 40; pass++) {
    for (let x = 0; x < inner.length; x++) {
      for (let y = x + 1; y < inner.length; y++) {
        const a = nodes[inner[x]], b = nodes[inner[y]];
        const d = dist(a.p, b.p);
        if (d >= MIN) continue;
        const push = (MIN - d) / 2 / (d || 1e-6);
        const v: Vec3 = d ? [(a.p[0] - b.p[0]) * push, (a.p[1] - b.p[1]) * push, (a.p[2] - b.p[2]) * push] : [MIN / 2, 0, 0];
        a.p = [a.p[0] + v[0], a.p[1] + v[1], a.p[2] + v[2]];
        b.p = [b.p[0] - v[0], b.p[1] - v[1], b.p[2] - v[2]];
      }
    }
  }
  for (const i of inner) nodes[i].p = round(clampInside(nodes[i].p));

  // ---- Desks
  const tracked = new Map<string, number>();
  for (const item of catalog.items) if (item.desk) tracked.set(item.desk, (tracked.get(item.desk) ?? 0) + 1);
  const desks: AtlasDesk[] = DESKS.map((d) => {
    const r = DESK_REGION[d.id];
    return {
      id: d.id, label: d.label, short: d.short, region: r.region, regionLabel: r.label, role: r.role, why: r.why,
      briefed: features.filter((f) => f.data.desk === d.id).length, tracked: tracked.get(d.id) ?? 0, anchor: round(REGION_ANCHOR[r.region]),
    };
  });

  const count = (k: NodeKind) => nodes.filter((n) => n.k === k).length;
  return {
    generated: catalog.generated,
    desks,
    nodes,
    edges,
    counts: { briefings: count('f'), concepts: count('c'), tags: count('t'), products: count('p'), links: edges.length, tracked: catalog.items.filter((i) => i.desk).length },
  };
}

/** Roadmap items the ledger tracks but has not briefed: drawn as dormant points in their desk's region. */
export function buildRadar(features: Feature[]) {
  const briefed = new Set(features.map((f) => f.data.roadmapId).filter(Boolean));
  const deskIndex = new Map(DESKS.map((d, i) => [d.id, i]));
  const statuses = ['in-development', 'preview', 'rolling-out', 'launched'];
  const items = catalog.items
    .filter((i) => i.desk && !briefed.has(i.id) && i.statusKey !== 'cancelled')
    .map((i) => [i.id, deskIndex.get(i.desk!) ?? 0, Math.max(0, statuses.indexOf(i.statusKey)), i.title.length > 96 ? i.title.slice(0, 95).trimEnd() + '…' : i.title, i.modified.slice(0, 10)] as const);
  return { statuses, items };
}

export { ACTION, RISK };
