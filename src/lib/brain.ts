/**
 * Brain geometry for the atlas. Pure maths, no DOM: the build uses it to place nodes, the browser
 * uses it to draw the stippled shell, so both agree on where each lobe is.
 *
 * Axes (right-handed, anatomical RAS turned for the screen):
 *   x = anterior (+) / posterior (-)     the brain is 2 units long
 *   y = superior (+) / inferior (-)
 *   z = right (+) / left (-)
 *
 * The shape is a union of simple solids: two cerebral hemispheres, two temporal lobes, two cerebellar
 * hemispheres, the pons and the brain stem. It is a diagram, not an anatomical model.
 */

export type Vec3 = [number, number, number];

export const REGIONS = ['frontal', 'parietal', 'temporal', 'occipital', 'cerebellum', 'stem'] as const;
export type Region = (typeof REGIONS)[number];

/** Which desk lives in which region, and the one-word function printed under the label. */
export const DESK_REGION: Record<string, { region: Region; label: string; role: string; why: string }> = {
  agents: { region: 'frontal', label: 'Frontal lobe', role: 'Executive', why: 'Planning and acting: where agents that take decisions and actions are filed.' },
  'power-platform': { region: 'parietal', label: 'Parietal lobe', role: 'Integration', why: 'Joins inputs together: apps, flows, Dataverse and connectors.' },
  copilot: { region: 'temporal', label: 'Temporal lobe', role: 'Language', why: 'Language and memory: Copilot Chat, grounding, recall of meetings and files.' },
  'security-compliance': { region: 'occipital', label: 'Occipital lobe', role: 'Oversight', why: 'Vision: what the organisation can see, label, retain and audit.' },
  'modern-work': { region: 'cerebellum', label: 'Cerebellum', role: 'Coordination', why: 'Coordination of everyday work, and the most densely packed part of the roadmap.' },
  'admin-billing': { region: 'stem', label: 'Brain stem', role: 'Regulation', why: 'Keeps the rest running: licences, billing, the admin centre.' },
};

// ---------------------------------------------------------------------------------------------
// Deterministic randomness: positions must not move between daily builds.

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

// ---------------------------------------------------------------------------------------------
// Solids

/** Vertical shift applied to everything so the whole brain is centred on the origin. */
const LIFT = 0.1;

interface Ellipsoid { c: Vec3; r: Vec3 }

const CEREBRUM: Ellipsoid = { c: [0, 0.16, 0.33], r: [1.0, 0.6, 0.47] };
const TEMPORAL: Ellipsoid = { c: [0.16, -0.27, 0.5], r: [0.5, 0.2, 0.24] };
const CEREBELLUM: Ellipsoid = { c: [-0.6, -0.45, 0.25], r: [0.33, 0.23, 0.29] };
const PONS: Ellipsoid = { c: [-0.12, -0.46, 0], r: [0.17, 0.14, 0.19] };
const STEM = { a: [-0.13, -0.2, 0] as Vec3, b: [-0.3, -0.97, 0] as Vec3, r0: 0.135, r1: 0.08 };

const FLOOR_Y = -0.1; // below this the underside of the cerebrum is flattened
const FLOOR_K = 0.55;

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** The hemispheres narrow towards the frontal pole and widen a little at the back. */
function taper(x: number) {
  return 1 - 0.2 * smooth(0.15, 1.0, x) + 0.05 * smooth(0.1, -0.7, x);
}

/** Ellipsoid space -> anatomical space for the cerebrum (egg shape, flat underside). */
function warpCerebrum(p: Vec3): Vec3 {
  const y = p[1] < FLOOR_Y ? FLOOR_Y + (p[1] - FLOOR_Y) * FLOOR_K : p[1];
  // The occipital pole sits a little lower than the crown; the frontal pole dips too.
  const droop = 0.07 * smooth(-0.35, -1.0, p[0]) + 0.05 * smooth(0.55, 1.0, p[0]);
  return [p[0], y - droop, p[2] * taper(p[0])];
}

function unwarpCerebrum(p: Vec3): Vec3 {
  const droop = 0.07 * smooth(-0.35, -1.0, p[0]) + 0.05 * smooth(0.55, 1.0, p[0]);
  const y0 = p[1] + droop;
  const y = y0 < FLOOR_Y ? FLOOR_Y + (y0 - FLOOR_Y) / FLOOR_K : y0;
  return [p[0], y, p[2] / taper(p[0])];
}

function rho(p: Vec3, e: Ellipsoid, side: number): number {
  const dx = (p[0] - e.c[0]) / e.r[0];
  const dy = (p[1] - e.c[1]) / e.r[1];
  const dz = (p[2] - e.c[2] * side) / e.r[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function rhoStem(p: Vec3): number {
  const ax = STEM.b[0] - STEM.a[0], ay = STEM.b[1] - STEM.a[1];
  const len2 = ax * ax + ay * ay;
  let t = ((p[0] - STEM.a[0]) * ax + (p[1] - STEM.a[1]) * ay) / len2;
  t = Math.min(1, Math.max(0, t));
  const qx = STEM.a[0] + ax * t, qy = STEM.a[1] + ay * t;
  const d = Math.hypot(p[0] - qx, p[1] - qy, p[2]);
  return d / (STEM.r0 + (STEM.r1 - STEM.r0) * t);
}

/** Normalised depth inside the cerebrum: 0 at the hemisphere centre, 1 at the cortex. Above 1 is outside. */
function rhoCerebrum(a: Vec3): number {
  const p = unwarpCerebrum(a);
  return Math.min(rho(p, CEREBRUM, 1), rho(p, CEREBRUM, -1));
}

type Solid = 'cerebrum' | 'temporal' | 'cerebellum' | 'pons' | 'stem';

/** Depth of an anatomical-space point inside each solid (<= 1 is inside). */
function depths(a: Vec3): Record<Solid, number> {
  return {
    cerebrum: rhoCerebrum(a),
    temporal: Math.min(rho(a, TEMPORAL, 1), rho(a, TEMPORAL, -1)),
    cerebellum: Math.min(rho(a, CEREBELLUM, 1), rho(a, CEREBELLUM, -1)),
    pons: rho(a, PONS, 1),
    stem: rhoStem(a),
  };
}

/** The lobes are cut from the cerebrum by three planes: central sulcus, parieto-occipital sulcus, Sylvian fissure. */
// Each line wanders a little so the boundaries look drawn rather than ruled.
const centralSulcus = (y: number, z: number) => 0.13 - 0.3 * (y - 0.1) + 0.028 * Math.sin(y * 13 + 1.1) + 0.02 * Math.sin(Math.abs(z) * 11);
const occipitalLine = (y: number, z: number) => -0.6 + 0.12 * (y - 0.1) + 0.024 * Math.sin(y * 15 + 0.4) + 0.018 * Math.sin(Math.abs(z) * 12 + 2);
const sylvian = (x: number) => -0.08 + 0.1 * smooth(0.5, -0.5, x) + 0.014 * Math.sin(x * 17);
const besideSylvian = (x: number, z: number) => Math.abs(z) > 0.2 && x > -0.5 && x < 0.66;

function lobeOf(a: Vec3): Region {
  const [x, y, z] = a;
  if (y < sylvian(x) && besideSylvian(x, z)) return 'temporal';
  if (x > centralSulcus(y, z)) return 'frontal';
  if (x < occipitalLine(y, z)) return 'occipital';
  return 'parietal';
}

/** How close a cortex point is to a boundary between lobes (0 on the line). Used to draw the sulci. */
function lobeEdge(a: Vec3): number {
  const [x, y, z] = a;
  let d = Math.min(Math.abs(x - centralSulcus(y, z)), Math.abs(x - occipitalLine(y, z)));
  if (besideSylvian(x, z)) d = Math.min(d, Math.abs(y - sylvian(x)));
  return d;
}

const toWorld = (a: Vec3): Vec3 => [a[0], a[1] + LIFT, a[2]];
const toAnat = (w: Vec3): Vec3 => [w[0], w[1] - LIFT, w[2]];

/** Region of a world-space point, or null when it is outside the brain. */
export function regionAt(w: Vec3): Region | null {
  const a = toAnat(w);
  const d = depths(a);
  if (d.cerebrum <= 1) return lobeOf(a);
  if (d.temporal <= 1) return 'temporal';
  if (d.cerebellum <= 1) return 'cerebellum';
  if (d.pons <= 1 || d.stem <= 1) return 'stem';
  return null;
}

// ---------------------------------------------------------------------------------------------
// Cortex texture

/** Folding field. Its zero level set, cut by the surface, gives meandering lines that read as sulci. */
function folds(p: Vec3): number {
  const f = 8.5;
  const x = p[0] * f, y = p[1] * f * 1.2, z = p[2] * f * 1.15;
  return (
    Math.sin(x + 1.9 * Math.sin(y * 0.9 + 0.8) + 1.4 * Math.sin(z * 1.1 + 2.1)) +
    Math.sin(y * 1.1 + 1.7 * Math.sin(z * 0.8 + 4.0) + 1.3 * Math.sin(x * 1.2 + 1.0)) +
    Math.sin(z + 1.6 * Math.sin(x * 0.7 + 5.2) + 1.5 * Math.sin(y * 1.3 + 3.3))
  );
}

export interface Shell {
  /** xyz triples, world space */
  pos: Float32Array;
  /** unit normals, xyz triples */
  nrm: Float32Array;
  /** index into REGIONS */
  region: Uint8Array;
  /** 1 where the point lies on a drawn line (sulcus, folium, lobe boundary), 0 for the faint fill between */
  line: Uint8Array;
  count: number;
}

function onEllipsoid(R: () => number, e: Ellipsoid, side: number): { p: Vec3; n: Vec3 } {
  // Uniform direction, then thinned so the density is even over the stretched surface.
  const maxA = Math.max(e.r[0] * e.r[1], e.r[1] * e.r[2], e.r[0] * e.r[2]);
  for (;;) {
    const u = R() * 2 - 1, th = R() * Math.PI * 2, s = Math.sqrt(1 - u * u);
    const d: Vec3 = [s * Math.cos(th), u, s * Math.sin(th)];
    const area = Math.hypot(e.r[1] * e.r[2] * d[0], e.r[0] * e.r[2] * d[1], e.r[0] * e.r[1] * d[2]);
    if (R() * maxA > area) continue;
    const p: Vec3 = [e.c[0] + e.r[0] * d[0], e.c[1] + e.r[1] * d[1], e.c[2] * side + e.r[2] * d[2]];
    const n: Vec3 = [d[0] / e.r[0], d[1] / e.r[1], d[2] / e.r[2]];
    const l = Math.hypot(n[0], n[1], n[2]);
    return { p, n: [n[0] / l, n[1] / l, n[2] / l] };
  }
}

/**
 * Stipple the outside of the brain. Points gather along the folds so the cortex reads as a line
 * engraving; everything hidden inside another solid is dropped.
 */
export function buildShell(count: number, seed = 20261113): Shell {
  const R = rng(seed);
  const pos = new Float32Array(count * 3), nrm = new Float32Array(count * 3);
  const region = new Uint8Array(count), line = new Uint8Array(count);
  // Share of the points each solid gets, roughly by visible area.
  const plan: [Solid, number][] = [['cerebrum', 0.66], ['temporal', 0.1], ['cerebellum', 0.17], ['pons', 0.025], ['stem', 0.045]];
  let i = 0;
  for (const [solid, share] of plan) {
    const target = solid === 'stem' ? count : Math.min(count, i + Math.round(count * share));
    let guard = 0;
    while (i < target && guard++ < count * 400) {
      const side = R() < 0.5 ? 1 : -1;
      let a: Vec3, n: Vec3, keep = 1, isLine = 0, reg: Region;
      if (solid === 'cerebrum') {
        const s = onEllipsoid(R, CEREBRUM, side);
        a = warpCerebrum(s.p); n = s.n;
        if (Math.min(rho(s.p, CEREBRUM, -side), 9) < 0.995) continue; // inside the other hemisphere
        // Thin out the two facing walls of the longitudinal fissure.
        if (Math.abs(a[2]) < 0.07 && n[2] * side < -0.3) keep *= 0.3;
        const g = folds(s.p);
        const fold = Math.exp(-((g / 0.23) ** 2));
        const edge = Math.exp(-((lobeEdge(a) / 0.011) ** 2));
        const lineness = Math.max(fold, edge);
        keep *= 0.055 + 0.945 * lineness;
        isLine = lineness > 0.45 ? 1 : 0;
        reg = lobeOf(a);
        const d = depths(a);
        if (d.temporal < 0.99 || d.cerebellum < 0.99 || d.pons < 0.99 || d.stem < 0.99) continue;
      } else if (solid === 'temporal') {
        const s = onEllipsoid(R, TEMPORAL, side);
        a = s.p; n = s.n; reg = 'temporal';
        if (rhoCerebrum(a) < 0.99) continue;
        const fold = Math.exp(-((folds([a[0] * 1.1, a[1] * 0.8, a[2]]) / 0.22) ** 2));
        keep *= 0.07 + 0.93 * fold;
        isLine = fold > 0.45 ? 1 : 0;
      } else if (solid === 'cerebellum') {
        const s = onEllipsoid(R, CEREBELLUM, side);
        a = s.p; n = s.n; reg = 'cerebellum';
        const d = depths(a);
        if (d.cerebrum < 0.99 || d.pons < 0.99 || d.stem < 0.99 || rho(a, CEREBELLUM, -side) < 0.995) continue;
        // Folia: fine, nearly horizontal leaves.
        const leaf = Math.sin(a[1] * 62 + 2.2 * Math.sin(a[0] * 5.5 + 1.0) + 1.2 * Math.sin(a[2] * 6));
        const fol = Math.exp(-((leaf / 0.3) ** 2));
        keep *= 0.05 + 0.95 * fol;
        isLine = fol > 0.45 ? 1 : 0;
      } else if (solid === 'pons') {
        const s = onEllipsoid(R, PONS, 0);
        a = s.p; n = s.n; reg = 'stem';
        const d = depths(a);
        if (d.cerebrum < 0.99 || d.cerebellum < 0.99 || d.temporal < 0.99) continue;
        const band = Math.exp(-((Math.sin(a[1] * 48) / 0.35) ** 2));
        keep *= 0.1 + 0.9 * band;
        isLine = band > 0.45 ? 1 : 0;
      } else {
        // Brain stem: a tapered column with a few long fibres running down it.
        const t = R();
        const ang = R() * Math.PI * 2;
        const rad = STEM.r0 + (STEM.r1 - STEM.r0) * t;
        const ax = STEM.b[0] - STEM.a[0], ay = STEM.b[1] - STEM.a[1];
        const len = Math.hypot(ax, ay);
        const ux = ax / len, uy = ay / len; // axis
        const vx = -uy, vy = ux; // in-plane perpendicular
        const cx = STEM.a[0] + ax * t, cy = STEM.a[1] + ay * t;
        a = [cx + vx * Math.cos(ang) * rad, cy + vy * Math.cos(ang) * rad, Math.sin(ang) * rad];
        n = [vx * Math.cos(ang), vy * Math.cos(ang), Math.sin(ang)];
        reg = 'stem';
        const d = depths(a);
        if (d.cerebrum < 0.99 || d.cerebellum < 0.99 || d.pons < 0.99 || d.temporal < 0.99) continue;
        const fibre = Math.exp(-((Math.sin(ang * 7) / 0.3) ** 2));
        keep *= 0.1 + 0.9 * fibre;
        isLine = fibre > 0.45 ? 1 : 0;
      }
      if (R() > keep) continue;
      const w = toWorld(a);
      pos[i * 3] = w[0]; pos[i * 3 + 1] = w[1]; pos[i * 3 + 2] = w[2];
      nrm[i * 3] = n[0]; nrm[i * 3 + 1] = n[1]; nrm[i * 3 + 2] = n[2];
      region[i] = REGIONS.indexOf(reg);
      line[i] = isLine;
      i++;
    }
  }
  return { pos, nrm, region, line, count: i };
}

// ---------------------------------------------------------------------------------------------
// Sampling inside a region (node placement)

/**
 * A point inside `region`, at a relative depth between `inner` and `outer`
 * (0 = middle of the solid, 1 = its surface). Deterministic for a given generator.
 */
export function sampleRegion(R: () => number, region: Region, inner = 0.6, outer = 0.9): Vec3 {
  for (let tries = 0; tries < 4000; tries++) {
    const side = R() < 0.5 ? 1 : -1;
    const u = R() * 2 - 1, th = R() * Math.PI * 2, s = Math.sqrt(1 - u * u);
    const d: Vec3 = [s * Math.cos(th), u, s * Math.sin(th)];
    // Cube-root keeps the density even through the shell between the two depths.
    const k = Math.cbrt(inner ** 3 + R() * (outer ** 3 - inner ** 3));
    let a: Vec3;
    if (region === 'cerebellum') {
      a = [CEREBELLUM.c[0] + CEREBELLUM.r[0] * d[0] * k, CEREBELLUM.c[1] + CEREBELLUM.r[1] * d[1] * k, CEREBELLUM.c[2] * side + CEREBELLUM.r[2] * d[2] * k];
      const dp = depths(a);
      if (dp.cerebrum < 1 || dp.pons < 1 || dp.stem < 1) continue;
      return toWorld(a);
    }
    if (region === 'stem') {
      if (R() < 0.45) {
        a = [PONS.c[0] + PONS.r[0] * d[0] * k, PONS.c[1] + PONS.r[1] * d[1] * k, PONS.r[2] * d[2] * k];
        if (rhoCerebrum(a) < 1) continue;
      } else {
        const t = 0.25 + R() * 0.7;
        const rad = (STEM.r0 + (STEM.r1 - STEM.r0) * t) * Math.sqrt(R()) * 0.85;
        const ang = R() * Math.PI * 2;
        const ax = STEM.b[0] - STEM.a[0], ay = STEM.b[1] - STEM.a[1];
        const len = Math.hypot(ax, ay);
        a = [STEM.a[0] + ax * t + (-ay / len) * Math.cos(ang) * rad, STEM.a[1] + ay * t + (ax / len) * Math.cos(ang) * rad, Math.sin(ang) * rad];
      }
      return toWorld(a);
    }
    if (region === 'temporal' && R() < 0.75) {
      a = [TEMPORAL.c[0] + TEMPORAL.r[0] * d[0] * k, TEMPORAL.c[1] + TEMPORAL.r[1] * d[1] * k, TEMPORAL.c[2] * side + TEMPORAL.r[2] * d[2] * k];
      if (rhoCerebrum(a) < 1 && lobeOf(a) !== 'temporal') continue;
      return toWorld(a);
    }
    const e: Vec3 = [CEREBRUM.c[0] + CEREBRUM.r[0] * d[0] * k, CEREBRUM.c[1] + CEREBRUM.r[1] * d[1] * k, CEREBRUM.c[2] * side + CEREBRUM.r[2] * d[2] * k];
    if (e[2] * side < 0.07) continue; // stay out of the midline
    a = warpCerebrum(e);
    if (lobeOf(a) !== region) continue;
    const dp = depths(a);
    if (dp.cerebellum < 1 || dp.pons < 1) continue;
    return toWorld(a);
  }
  return [0, 0, 0];
}

/** Middle of the brain, where the long-range fibres cross. */
export const CORE: Vec3 = [-0.04, 0.14 + LIFT, 0];

/** Pull a world-space point back inside the brain if it has drifted out. */
export function clampInside(w: Vec3): Vec3 {
  let p = w;
  for (let i = 0; i < 24 && regionAt(p) === null; i++) {
    p = [p[0] + (CORE[0] - p[0]) * 0.12, p[1] + (CORE[1] - p[1]) * 0.12, p[2] + (CORE[2] - p[2]) * 0.12];
  }
  return p;
}

/** Where each region's label is pinned: a point on the cortex of the right hemisphere (mirror z for the left). */
export const REGION_ANCHOR: Record<Region, Vec3> = {
  frontal: toWorld([0.62, 0.42, 0.3]),
  parietal: toWorld([-0.2, 0.62, 0.36]),
  temporal: toWorld([0.5, -0.4, 0.52]),
  occipital: toWorld([-0.88, 0.1, 0.24]),
  cerebellum: toWorld([-0.74, -0.52, 0.36]),
  stem: toWorld([-0.27, -0.84, 0.08]),
};
