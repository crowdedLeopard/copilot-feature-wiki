/**
 * Layout for the atlas: a flat map of pages and the links between them. Pure maths, no DOM.
 *
 * Each topic has a fixed home on a ring, in taxonomy order, so the map keeps its shape from one
 * daily build to the next. Briefings settle near their topic's home and are drawn towards the pages
 * they link to; concepts and shared tags have no home and come to rest between the pages that use
 * them. The simulation is seeded from each page's id and runs a fixed number of steps, so the same
 * wiki always gives the same map.
 */

export type Vec2 = [number, number];

export function hash32(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995); h ^= h >>> 15;
  return h >>> 0;
}

export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface LayoutNode {
  id: string;
  /** Index of the topic the page is filed under, or -1 for a concept or tag */
  topic: number;
  /** How much room the mark needs, relative to a briefing (1) */
  size: number;
}

export interface LayoutEdge { a: number; b: number; /** Pull, relative to a link between two pages (1) */ w: number }

export interface Layout {
  pos: Vec2[];
  /** Home of each topic, including topics with no pages yet */
  homes: Vec2[];
  /** [minX, minY, maxX, maxY] of every node */
  box: [number, number, number, number];
}

/** Distance, in map units, that neighbouring briefings settle at. Everything else is in proportion. */
export const SPACING = 30;
/** The map is wider than it is tall, like the plate it is drawn on. */
const ASPECT = 1.5;
const STEPS = 420;

export function layout(nodes: LayoutNode[], edges: LayoutEdge[], topicCount: number): Layout {
  const n = nodes.length;
  const members = Array.from({ length: topicCount }, () => 0);
  for (const node of nodes) if (node.topic >= 0) members[node.topic]++;
  const hubs = nodes.filter((node) => node.topic < 0).length;

  // ---- Homes. A topic's patch grows with the square root of its pages, so density stays even.
  // Topics that have pages share the ring evenly, in taxonomy order, the first two either side of the top.
  const patch = members.map((m) => SPACING * (0.9 + 0.62 * Math.sqrt(Math.max(m, 1))));
  const middle = SPACING * (1 + 0.36 * Math.sqrt(hubs));
  const live = members.map((m, i) => (m > 0 ? i : -1)).filter((i) => i >= 0);
  const k = live.length;
  const unit: Vec2[] = live.map((_, slot) => {
    if (k === 1) return [0, 0];
    const a = -Math.PI / 2 - Math.PI / k + (slot * Math.PI * 2) / k;
    return [Math.cos(a) * ASPECT, Math.sin(a)];
  });
  let ring = k > 1 ? middle + Math.max(...live.map((i) => patch[i])) * 0.45 : 0;
  for (let slot = 0; slot < k && k > 1; slot++) {
    const next = (slot + 1) % k;
    const apart = Math.hypot(unit[slot][0] - unit[next][0], unit[slot][1] - unit[next][1]);
    ring = Math.max(ring, (patch[live[slot]] + patch[live[next]] + SPACING * 1.1) / apart);
  }
  const homes: Vec2[] = members.map(() => [0, 0] as Vec2);
  live.forEach((i, slot) => { homes[i] = [unit[slot][0] * ring, unit[slot][1] * ring]; });
  const spanX = Math.max(ring * ASPECT, middle), spanY = Math.max(ring, middle);

  // ---- Seed positions.
  const pos: Vec2[] = nodes.map((node) => {
    const R = rng(hash32(node.id));
    const a = R() * Math.PI * 2, d = Math.sqrt(R());
    if (node.topic >= 0) {
      const h = homes[node.topic], r = patch[node.topic] * 0.8;
      return [h[0] + Math.cos(a) * d * r, h[1] + Math.sin(a) * d * r];
    }
    return [Math.cos(a) * d * middle, Math.sin(a) * d * middle];
  });
  const adj: number[][] = nodes.map(() => []);
  edges.forEach((e, i) => { adj[e.a].push(i); adj[e.b].push(i); });
  // A concept or tag starts in the middle of the pages that use it.
  nodes.forEach((node, i) => {
    if (node.topic >= 0 || !adj[i].length) return;
    let x = 0, y = 0, c = 0;
    for (const ei of adj[i]) {
      const o = edges[ei].a === i ? edges[ei].b : edges[ei].a;
      if (nodes[o].topic < 0) continue;
      x += pos[o][0]; y += pos[o][1]; c++;
    }
    if (c) pos[i] = [x / c + (pos[i][0] / middle) * SPACING * 0.5, y / c + (pos[i][1] / middle) * SPACING * 0.5];
  });

  // ---- Relax. Short-range repulsion keeps marks apart, links pull, homes hold the shape.
  const fx = new Float64Array(n), fy = new Float64Array(n);
  const reach = SPACING * 5;
  for (let step = 0; step < STEPS; step++) {
    const heat = SPACING * 0.9 * Math.pow(1 - step / STEPS, 1.6) + 0.02;
    fx.fill(0); fy.fill(0);
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let dx = pos[i][0] - pos[j][0], dy = pos[i][1] - pos[j][1];
        let d = Math.hypot(dx, dy);
        if (d > reach) continue;
        if (d < 0.01) { dx = ((i * 7 + j) % 5) - 2 || 1; dy = ((i + j * 3) % 5) - 2; d = Math.hypot(dx, dy); }
        const room = SPACING * 0.5 * (nodes[i].size + nodes[j].size);
        const f = (room * room) / (d * d) * (1 - d / reach);
        fx[i] += (dx / d) * f; fy[i] += (dy / d) * f;
        fx[j] -= (dx / d) * f; fy[j] -= (dy / d) * f;
      }
    }
    for (const e of edges) {
      const dx = pos[e.b][0] - pos[e.a][0], dy = pos[e.b][1] - pos[e.a][1];
      const d = Math.hypot(dx, dy) || 0.01;
      const ta = nodes[e.a].topic, tb = nodes[e.b].topic;
      const rest = SPACING * (ta >= 0 && tb >= 0 ? 1.15 : 1);
      // A page with many links is not dragged about by each one.
      const share = 1 / Math.sqrt(Math.min(adj[e.a].length, adj[e.b].length));
      const f = ((d - rest) / SPACING) * 0.34 * e.w * share;
      // Pages hold their ground: a link to another topic pulls gently, and a concept or tag comes to
      // its pages rather than dragging them out of their topic.
      const ka = ta < 0 ? 1 : tb < 0 ? 0.12 : ta === tb ? 1 : 0.3;
      const kb = tb < 0 ? 1 : ta < 0 ? 0.12 : ta === tb ? 1 : 0.3;
      fx[e.a] += (dx / d) * f * ka; fy[e.a] += (dy / d) * f * ka;
      fx[e.b] -= (dx / d) * f * kb; fy[e.b] -= (dy / d) * f * kb;
    }
    for (let i = 0; i < n; i++) {
      const t = nodes[i].topic;
      if (t >= 0) {
        const dx = homes[t][0] - pos[i][0], dy = homes[t][1] - pos[i][1];
        const d = Math.hypot(dx, dy) || 0.01;
        // Gentle inside the patch, firm beyond its edge.
        const f = (d / patch[t]) * 0.2 + Math.max(0, d - patch[t]) / SPACING * 0.55;
        fx[i] += (dx / d) * f; fy[i] += (dy / d) * f;
      } else {
        // Hubs are held loosely to the map as a whole, so an unused tag does not drift away.
        fx[i] -= (pos[i][0] / spanX) * 0.05; fy[i] -= (pos[i][1] / spanY) * 0.05;
      }
    }
    for (let i = 0; i < n; i++) {
      const f = Math.hypot(fx[i], fy[i]);
      if (f < 1e-9) continue;
      const move = Math.min(f * SPACING * 0.5, heat);
      pos[i] = [pos[i][0] + (fx[i] / f) * move, pos[i][1] + (fy[i] / f) * move];
    }
  }

  // ---- Ease apart anything still touching.
  for (let pass = 0; pass < 30; pass++) {
    let moved = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const min = SPACING * 0.36 * (nodes[i].size + nodes[j].size);
        const dx = pos[i][0] - pos[j][0], dy = pos[i][1] - pos[j][1];
        const d = Math.hypot(dx, dy);
        if (d >= min) continue;
        const ux = d ? dx / d : 1, uy = d ? dy / d : 0, push = (min - d) / 2;
        pos[i] = [pos[i][0] + ux * push, pos[i][1] + uy * push];
        pos[j] = [pos[j][0] - ux * push, pos[j][1] - uy * push];
        moved = true;
      }
    }
    if (!moved) break;
  }

  const round = (v: number) => Math.round(v * 10) / 10;
  const out: Vec2[] = pos.map((p) => [round(p[0]), round(p[1])]);
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of out) { minX = Math.min(minX, p[0]); minY = Math.min(minY, p[1]); maxX = Math.max(maxX, p[0]); maxY = Math.max(maxY, p[1]); }
  if (!out.length) { minX = minY = -SPACING; maxX = maxY = SPACING; }
  return { pos: out, homes: homes.map((h) => [round(h[0]), round(h[1])] as Vec2), box: [minX, minY, maxX, maxY] };
}
