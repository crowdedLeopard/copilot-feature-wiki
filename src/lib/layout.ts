/**
 * Layout for the atlas: pages and the links between them, placed in three dimensions. Pure maths, no DOM.
 *
 * Each topic has a fixed home in space. The homes stand on a ring around a vertical axis, in taxonomy
 * order, alternately above and below the middle, so that from any side the topics read as separate
 * groups. Briefings settle near their topic's home and are drawn towards the pages they link to;
 * concepts and shared tags have no home and come to rest between the pages that use them. The
 * simulation is seeded from each page's id and runs a fixed number of steps, so the same wiki always
 * gives the same map.
 *
 * Axes: x and z are horizontal, y is vertical and grows downwards, as on screen.
 */

export type Vec3 = [number, number, number];

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
  pos: Vec3[];
  /** Home of each topic, including topics with no pages yet */
  homes: Vec3[];
  /** Radius of the sphere around the origin that holds every node */
  radius: number;
  /** Largest distance of a node from the vertical axis */
  across: number;
  /** Largest distance of a node above or below the middle */
  tall: number;
}

/** Distance, in map units, that neighbouring briefings settle at. Everything else is in proportion. */
export const SPACING = 30;
/** How far the homes are lifted above or dropped below the middle, as a share of the ring's radius. */
const LIFT = 0.56;
/** Distance between two neighbouring homes, as a multiple of the room their pages need. Seen from the side, groups overlap unless they stand well apart. */
const APART = 2.05;
/** The map is squashed a little from top to bottom, like the plate it is drawn on. */
const SQUASH = 0.82;
const STEPS = 460;

const dist = (a: Vec3, b: Vec3) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

export function layout(nodes: LayoutNode[], edges: LayoutEdge[], topicCount: number): Layout {
  const n = nodes.length;
  const members = Array.from({ length: topicCount }, () => 0);
  for (const node of nodes) if (node.topic >= 0) members[node.topic]++;
  const hubs = nodes.filter((node) => node.topic < 0).length;

  // ---- Homes. A topic's pages fill a ball that grows with the cube root of their number, so density stays even.
  // Topics that have pages share the ring evenly, in taxonomy order, alternately raised and lowered.
  const patch = members.map((m) => SPACING * (0.55 + 0.6 * Math.cbrt(Math.max(m, 1))));
  const middle = SPACING * (0.8 + 0.5 * Math.cbrt(hubs));
  const live = members.map((m, i) => (m > 0 ? i : -1)).filter((i) => i >= 0);
  const k = live.length;
  const unit: Vec3[] = live.map((_, slot) => {
    if (k === 1) return [0, 0, 0];
    // The first topic stands front left, and the ring runs clockwise seen from above.
    const a = Math.PI * 0.75 - (slot * Math.PI * 2) / k;
    const odd = k % 2 === 1 && slot === k - 1;
    return [Math.cos(a), odd ? 0 : slot % 2 === 0 ? -LIFT : LIFT, Math.sin(a)];
  });
  let ring = k > 1 ? middle + Math.max(...live.map((i) => patch[i])) * 0.4 : 0;
  for (let a = 0; a < k; a++) {
    for (let b = a + 1; b < k; b++) {
      const apart = dist(unit[a], unit[b]);
      ring = Math.max(ring, ((patch[live[a]] + patch[live[b]]) * APART) / apart);
    }
  }
  const homes: Vec3[] = members.map(() => [0, 0, 0] as Vec3);
  live.forEach((i, slot) => { homes[i] = [unit[slot][0] * ring, unit[slot][1] * ring, unit[slot][2] * ring]; });
  const span = Math.max(ring, middle);

  // ---- Seed positions.
  const ball = (R: () => number): Vec3 => {
    const u = R() * 2 - 1, a = R() * Math.PI * 2, r = Math.cbrt(R()), s = Math.sqrt(1 - u * u);
    return [Math.cos(a) * s * r, u * r, Math.sin(a) * s * r];
  };
  const pos: Vec3[] = nodes.map((node) => {
    const b = ball(rng(hash32(node.id)));
    if (node.topic >= 0) {
      const h = homes[node.topic], r = patch[node.topic] * 0.8;
      return [h[0] + b[0] * r, h[1] + b[1] * r, h[2] + b[2] * r];
    }
    return [b[0] * middle, b[1] * middle, b[2] * middle];
  });
  const adj: number[][] = nodes.map(() => []);
  edges.forEach((e, i) => { adj[e.a].push(i); adj[e.b].push(i); });
  // A concept or tag starts in the middle of the pages that use it.
  nodes.forEach((node, i) => {
    if (node.topic >= 0 || !adj[i].length) return;
    let x = 0, y = 0, z = 0, c = 0;
    for (const ei of adj[i]) {
      const o = edges[ei].a === i ? edges[ei].b : edges[ei].a;
      if (nodes[o].topic < 0) continue;
      x += pos[o][0]; y += pos[o][1]; z += pos[o][2]; c++;
    }
    const j = SPACING * 0.5 / middle;
    if (c) pos[i] = [x / c + pos[i][0] * j, y / c + pos[i][1] * j, z / c + pos[i][2] * j];
  });

  // ---- Relax. Short-range repulsion keeps marks apart, links pull, homes hold the shape.
  const fx = new Float64Array(n), fy = new Float64Array(n), fz = new Float64Array(n);
  const reach = SPACING * 4.5;
  for (let step = 0; step < STEPS; step++) {
    const heat = SPACING * 0.9 * Math.pow(1 - step / STEPS, 1.6) + 0.02;
    fx.fill(0); fy.fill(0); fz.fill(0);
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let dx = pos[i][0] - pos[j][0], dy = pos[i][1] - pos[j][1], dz = pos[i][2] - pos[j][2];
        let d = Math.hypot(dx, dy, dz);
        if (d > reach) continue;
        if (d < 0.01) { dx = ((i * 7 + j) % 5) - 2 || 1; dy = ((i + j * 3) % 5) - 2; dz = ((i * 3 + j * 5) % 5) - 2; d = Math.hypot(dx, dy, dz); }
        const room = SPACING * 0.5 * (nodes[i].size + nodes[j].size);
        const f = (room * room) / (d * d) * (1 - d / reach) / d;
        fx[i] += dx * f; fy[i] += dy * f; fz[i] += dz * f;
        fx[j] -= dx * f; fy[j] -= dy * f; fz[j] -= dz * f;
      }
    }
    for (const e of edges) {
      const dx = pos[e.b][0] - pos[e.a][0], dy = pos[e.b][1] - pos[e.a][1], dz = pos[e.b][2] - pos[e.a][2];
      const d = Math.hypot(dx, dy, dz) || 0.01;
      const ta = nodes[e.a].topic, tb = nodes[e.b].topic;
      const rest = SPACING * (ta >= 0 && tb >= 0 ? 1.15 : 1);
      // A page with many links is not dragged about by each one.
      const share = 1 / Math.sqrt(Math.min(adj[e.a].length, adj[e.b].length));
      const f = ((d - rest) / SPACING) * 0.34 * e.w * share / d;
      // Pages hold their ground: a link to another topic pulls gently, and a concept or tag comes to
      // its pages rather than dragging them out of their topic.
      const ka = ta < 0 ? 1 : tb < 0 ? 0.12 : ta === tb ? 1 : 0.3;
      const kb = tb < 0 ? 1 : ta < 0 ? 0.12 : ta === tb ? 1 : 0.3;
      fx[e.a] += dx * f * ka; fy[e.a] += dy * f * ka; fz[e.a] += dz * f * ka;
      fx[e.b] -= dx * f * kb; fy[e.b] -= dy * f * kb; fz[e.b] -= dz * f * kb;
    }
    for (let i = 0; i < n; i++) {
      const t = nodes[i].topic;
      if (t >= 0) {
        const dx = homes[t][0] - pos[i][0], dy = homes[t][1] - pos[i][1], dz = homes[t][2] - pos[i][2];
        const d = Math.hypot(dx, dy, dz) || 0.01;
        // Gentle inside the ball, firm beyond its edge.
        const f = ((d / patch[t]) * 0.2 + Math.max(0, d - patch[t]) / SPACING * 0.55) / d;
        fx[i] += dx * f; fy[i] += dy * f; fz[i] += dz * f;
      } else {
        // Hubs are held loosely to the map as a whole, so an unused tag does not drift away.
        fx[i] -= (pos[i][0] / span) * 0.05; fy[i] -= (pos[i][1] / span) * 0.08; fz[i] -= (pos[i][2] / span) * 0.05;
      }
    }
    for (let i = 0; i < n; i++) {
      const f = Math.hypot(fx[i], fy[i], fz[i]);
      if (f < 1e-9) continue;
      const move = Math.min(f * SPACING * 0.5, heat) / f;
      pos[i] = [pos[i][0] + fx[i] * move, pos[i][1] + fy[i] * move, pos[i][2] + fz[i] * move];
    }
  }

  // ---- Ease apart anything still touching.
  for (let pass = 0; pass < 30; pass++) {
    let moved = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const min = SPACING * 0.36 * (nodes[i].size + nodes[j].size);
        const dx = pos[i][0] - pos[j][0], dy = pos[i][1] - pos[j][1], dz = pos[i][2] - pos[j][2];
        const d = Math.hypot(dx, dy, dz);
        if (d >= min) continue;
        const ux = d ? dx / d : 1, uy = d ? dy / d : 0, uz = d ? dz / d : 0, push = (min - d) / 2;
        pos[i] = [pos[i][0] + ux * push, pos[i][1] + uy * push, pos[i][2] + uz * push];
        pos[j] = [pos[j][0] - ux * push, pos[j][1] - uy * push, pos[j][2] - uz * push];
        moved = true;
      }
    }
    if (!moved) break;
  }

  const round = (v: number) => Math.round(v * 10) / 10;
  const out: Vec3[] = pos.map((p) => [round(p[0]), round(p[1] * SQUASH), round(p[2])]);
  let radius = SPACING, across = SPACING, tall = SPACING;
  for (const p of out) {
    radius = Math.max(radius, Math.hypot(p[0], p[1], p[2]));
    across = Math.max(across, Math.hypot(p[0], p[2]));
    tall = Math.max(tall, Math.abs(p[1]));
  }
  return {
    pos: out,
    homes: homes.map((h) => [round(h[0]), round(h[1] * SQUASH), round(h[2])] as Vec3),
    radius: round(radius), across: round(across), tall: round(tall),
  };
}
