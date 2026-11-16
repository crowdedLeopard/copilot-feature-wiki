/**
 * Atlas renderer. Draws the ledger as a map in three dimensions on a 2D canvas: pages as points
 * grouped by topic, the links between them as hairlines, turned and zoomed by the reader.
 *
 * One engine, three modes:
 *   full    the /atlas/ page: turn, zoom, hover, select, filters
 *   teaser  the home page: the whole map turning slowly, hover labels, click through to the atlas
 *   mini    the panel on a briefing or concept: that page and the pages it links to, the rest faint
 *
 * No dependencies. Positions come ready-made from the build (src/lib/layout.ts); colours come from
 * CSS custom properties on the host element, so the atlas follows the site theme. Depth is shown as
 * a print would show it: nearer points are larger and darker, farther ones smaller and paler, over a
 * dotted floor. Frames are drawn only while something is changing.
 */
import type { AtlasData, AtlasNode } from '../../lib/graph';

export type Mode = 'full' | 'teaser' | 'mini';
export type ColourBy = 'topic' | 'risk' | 'action';
export type Pick = { node: AtlasNode; index: number } | null;

export interface AtlasOptions {
  mode: Mode;
  /** Node id to feature (mini mode) */
  focus?: string;
  onHover?: (pick: Pick) => void;
  onSelect?: (pick: Pick) => void;
}

type RGB = [number, number, number];

interface NodeView {
  i: number;
  d: AtlasNode;
  base: number;
  nb: number[];
  ed: number[];
  /** Passes the current filters */
  active: boolean;
  /** Its layer is switched on */
  shown: boolean;
  a: number;
  /** Where it falls on the plate, and how large */
  sx: number; sy: number; sr: number;
  /** Distance towards the viewer from the middle of the view, in map units */
  z: number;
  /** 0 at the back of the view, 1 at the front */
  near: number;
}

interface EdgeView { a: number; b: number; kind: number }

interface Palette {
  topic: RGB[];
  paper: RGB; grid: RGB; edge: RGB; ink: RGB; inkDim: RGB; labelBg: RGB; neutral: RGB;
  high: RGB; medium: RGB; low: RGB;
  mono: string; sans: string; serif: string;
}

/** The camera: which way the map is turned, how close, and the point it turns about. */
interface View { yaw: number; pitch: number; zoom: number; x: number; y: number; z: number }

const TAU = Math.PI * 2;
/** Map units between neighbouring briefings; the same figure the layout works to. */
const UNIT = 30;
/** The opening view: turned a little so the topics stand clear of each other, seen from slightly above. */
const HOME_YAW = -0.39;
const HOME_PITCH = 0.17;
const PITCH_MAX = 1.25;
/** Distance of the viewer from the middle of the map, in map radii. Smaller means stronger perspective. */
const CAMERA = 3.2;
/** Radians turned per pixel dragged */
const TURN = 0.0068;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const rgba = (c: RGB, a: number) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${clamp(a, 0, 1).toFixed(3)})`;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
/** The angle equal to `target` that is the shortest turn from `from`. */
/** The map can be drawn a little smaller than it opens, and much larger. */
const ZOOM_MIN = 0.7, ZOOM_MAX = 8;
const nearestTurn = (target: number, from: number) => target + TAU * Math.round((from - target) / TAU);

function parseColour(v: string, fallback: RGB): RGB {
  const s = v.trim();
  let m = s.match(/^#([0-9a-f]{3})$/i);
  if (m) return [...m[1]].map((h) => parseInt(h + h, 16)) as RGB;
  m = s.match(/^#([0-9a-f]{6})/i);
  if (m) return [parseInt(m[1].slice(0, 2), 16), parseInt(m[1].slice(2, 4), 16), parseInt(m[1].slice(4, 6), 16)];
  m = s.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
  if (m) return [+m[1], +m[2], +m[3]];
  return fallback;
}

const RISK_LABEL: Record<string, string> = { high: 'High risk', medium: 'Medium risk', low: 'Low risk' };
const ACTION_LABEL: Record<string, string> = { 'act-now': 'Act now', prepare: 'Prepare', review: 'Review', none: 'Awareness' };

export class Atlas {
  readonly data: AtlasData;
  readonly canvas: HTMLCanvasElement;
  private host: HTMLElement;
  private ctx: CanvasRenderingContext2D;
  private opts: AtlasOptions;
  private mode: Mode;
  private pal!: Palette;

  private W = 0; private H = 0; private dpr = 1;
  /** Pixels per map unit when the opening view exactly fills the plate */
  private fit = 1;
  /** The opening turn, and the plate width it was worked out for */
  private homeYaw = HOME_YAW; private sizedFor = 0;
  private view: View = { yaw: HOME_YAW, pitch: HOME_PITCH, zoom: 1, x: 0, y: 0, z: 0 };
  private home: View = { ...this.view };
  private tween: null | { t0: number; dur: number; from: View; to: View } = null;
  /** Values worked out once per frame from the view */
  private cam = { cy: 1, sy: 0, cp: 1, sp: 0, s: 1, cx: 0, cyy: 0, dist: 1, range: 1 };
  private out = { sx: 0, sy: 0, k: 1, z: 0 };

  private nodes: NodeView[];
  private edges: EdgeView[];
  private byId = new Map<string, NodeView>();
  /** Node indexes, farthest first */
  private order: number[];
  /** The briefings filed under each topic, as node indexes */
  private topicNodes: number[][];
  /** The dotted floor under the map: x and z of each dot */
  private floor: number[] = [];
  private floorY = 0; private floorR = 0;

  private hot: NodeView | null = null;
  private sel: NodeView | null = null;
  private pinned: NodeView | null = null; // mini mode focus
  /** Mini mode: how far the pinned page's neighbourhood reaches */
  private span = UNIT * 3;
  private hoverTopic = -1;
  private hoverRow = -1;
  private topicOn: boolean[];
  private riskOn = new Set(['high', 'medium', 'low']);
  private layers: Record<string, boolean> = { c: true, t: true, labels: true };
  private colourBy: ColourBy = 'topic';

  private raf = 0; private visible = true;
  private lastT = 0; private frameNo = 0;
  /** The map turns slowly by itself while nobody is using it */
  private spin = true; private spinEase = 0; private lastTouch = 0; private phase = 0;
  /** Turning speed left over when a drag is let go, in radians a second */
  private vel = { yaw: 0, pitch: 0 };
  /** The view changed this frame; and it did so only because the map is turning by itself */
  private moving = false; private idling = false;
  private pointers = new Map<number, { x: number; y: number }>();
  private drag: null | { moved: number; pinch: number; pan: boolean; t: number; mx: number; my: number } = null;
  private mouse = { x: -1, y: -1, inside: false };
  private widths = new Map<string, number>();
  private placed: number[][] = [];
  /** Which side of its point each name was put on, kept while the map moves so names do not jump about */
  private sides = new Map<number, number>();
  /** When a name last found nowhere to stand, by node index */
  private sideMissed = new Map<number, number>();
  /** Where each topic's name currently stands: 0 its own side of the map, 1 the other, 2 left, 3 right */
  private topicSide: (number | undefined)[] = [];
  private cleanup: (() => void)[] = [];
  private reduced = false;

  constructor(canvas: HTMLCanvasElement, data: AtlasData, opts: AtlasOptions) {
    this.canvas = canvas;
    this.host = (canvas.closest('[data-atlas]') as HTMLElement) ?? canvas.parentElement!;
    this.ctx = canvas.getContext('2d')!;
    this.data = data;
    this.opts = opts;
    this.mode = opts.mode;
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.spin = !this.reduced;
    this.topicOn = data.topics.map(() => true);

    this.nodes = data.nodes.map((d, i) => ({
      i, d, nb: [], ed: [], active: true, shown: true, a: 0, sx: 0, sy: 0, sr: 0, z: 0, near: 0.5,
      base: d.k === 'f' ? 3.1 + 0.85 * Math.sqrt(d.n) : d.k === 'c' ? 4.6 + 0.55 * Math.sqrt(d.n) : 1.5 + 0.42 * Math.sqrt(d.n),
    }));
    this.nodes.forEach((n) => this.byId.set(n.d.id, n));
    this.order = this.nodes.map((n) => n.i);
    this.topicNodes = data.topics.map((_, ti) => this.nodes.filter((n) => n.d.k === 'f' && n.d.d === ti).map((n) => n.i));
    this.edges = data.edges.map(([a, b, kind], idx) => {
      this.nodes[a].nb.push(b); this.nodes[b].nb.push(a);
      this.nodes[a].ed.push(idx); this.nodes[b].ed.push(idx);
      return { a, b, kind };
    });

    const e = data.extent, step = UNIT * 1.6;
    this.floorR = e.across * 0.86;
    this.floorY = e.tall + UNIT * 0.5;
    const reach = Math.ceil(this.floorR / step) * step;
    for (let gx = -reach; gx <= reach; gx += step) {
      for (let gz = -reach; gz <= reach; gz += step) if (Math.hypot(gx, gz) <= this.floorR) this.floor.push(gx, gz);
    }

    if (this.mode === 'mini' && opts.focus) this.pinned = this.byId.get(opts.focus) ?? null;

    this.readPalette();
    this.refilter();
    this.bind();
    this.resize();
    this.need();
  }

  // ------------------------------------------------------------------------------------------
  // Public controls

  get nodeList(): AtlasNode[] { return this.data.nodes; }
  get spinning() { return this.spin; }
  neighbours(id: string): { node: AtlasNode; kind: number }[] {
    const n = this.byId.get(id);
    if (!n) return [];
    return n.ed.map((ei) => { const e = this.edges[ei]; return { node: this.data.nodes[e.a === n.i ? e.b : e.a], kind: e.kind }; });
  }
  setTopic(i: number, on: boolean) { this.topicOn[i] = on; this.refilter(); this.syncHoverTopic(); }
  setRisk(risk: string, on: boolean) { on ? this.riskOn.add(risk) : this.riskOn.delete(risk); this.refilter(); this.need(); }
  setLayer(name: string, on: boolean) { this.layers[name] = on; this.refilter(); this.need(); }
  setColour(c: ColourBy) { this.colourBy = c; this.need(); }
  /** Let the map turn by itself while it is not being used, or hold it still. */
  setSpin(on: boolean) { this.spin = on; this.lastTouch = 0; this.need(); }
  highlightTopic(i: number) { this.hoverRow = i; this.syncHoverTopic(); }
  zoomBy(f: number) {
    this.touch();
    const zoom = clamp(this.view.zoom * f, ZOOM_MIN, ZOOM_MAX);
    this.flyTo({ ...this.view, ...(zoom < this.view.zoom ? this.easeBack(this.view.zoom, zoom) : {}), zoom }, 240);
  }
  reset() { this.select(null); this.flyTo({ ...this.home, yaw: nearestTurn(this.home.yaw, this.view.yaw) }, 620); }

  select(id: string | null, fly = true) {
    const n = id ? this.byId.get(id) ?? null : null;
    this.sel = n;
    this.touch();
    if (n && fly) {
      // Turn the page towards the reader and close in on it and the pages it links to.
      const a = this.around(n), f = this.facing(n.d.x, n.d.y, n.d.z), u = this.usable();
      const zoom = clamp(Math.min(u.w, u.h * 1.2) / (2.7 * a.span * this.fit), Math.max(1.15, this.home.zoom), 2.6);
      this.flyTo({
        yaw: f ? nearestTurn(f.yaw, this.view.yaw) : this.view.yaw,
        pitch: f ? clamp(f.pitch * 0.5 + this.home.pitch * 0.6, -0.8, 0.8) : this.view.pitch,
        zoom: Math.max(zoom, Math.min(this.view.zoom, 2.6)),
        x: a.x * 0.85, y: a.y * 0.85, z: a.z * 0.85,
      }, 760);
    }
    this.opts.onSelect?.(n ? { node: n.d, index: n.i } : null);
    this.need();
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    this.cleanup.forEach((fn) => fn());
  }

  /** Hovering a topic's row picks it out on the map, unless that topic is switched off. */
  private syncHoverTopic() {
    this.hoverTopic = this.hoverRow >= 0 && this.topicOn[this.hoverRow] !== false ? this.hoverRow : -1;
    this.need();
  }

  // ------------------------------------------------------------------------------------------
  // Setup

  private readPalette() {
    const cs = getComputedStyle(this.host);
    const v = (name: string, fb: RGB) => parseColour(cs.getPropertyValue(name), fb);
    this.pal = {
      topic: this.data.topics.map((t) => v(`--topic-${t.id}`, [120, 120, 120])),
      paper: v('--atlas-paper', [248, 246, 240]),
      grid: v('--atlas-grid', [217, 213, 201]),
      edge: v('--atlas-edge', [40, 40, 48]),
      ink: v('--atlas-ink', [27, 27, 31]),
      inkDim: v('--atlas-ink-dim', [110, 110, 118]),
      labelBg: v('--atlas-label-bg', [250, 248, 242]),
      neutral: v('--atlas-neutral', [85, 85, 92]),
      high: v('--risk-high', [168, 50, 31]), medium: v('--risk-medium', [168, 107, 20]), low: v('--risk-low', [59, 122, 63]),
      mono: cs.getPropertyValue('--font-mono').trim() || 'monospace',
      sans: cs.getPropertyValue('--font-body').trim() || 'sans-serif',
      serif: cs.getPropertyValue('--font-display').trim() || 'serif',
    };
    this.widths.clear();
    this.need();
  }

  /** The middle of a page and everything it links to, leaning towards the page itself, and how far that group reaches. */
  private around(n: NodeView) {
    const pts = [n, ...n.nb.map((j) => this.nodes[j])];
    let x = 0, y = 0, z = 0;
    for (const p of pts) { x += p.d.x; y += p.d.y; z += p.d.z; }
    x = (x / pts.length + n.d.x) / 2; y = (y / pts.length + n.d.y) / 2; z = (z / pts.length + n.d.z) / 2;
    // Never tighter than a few neighbours' width, so a page with one link is not blown up to fill the plate.
    let span = UNIT * 2.6;
    for (const p of pts) span = Math.max(span, Math.hypot(p.d.x - x, p.d.y - y, p.d.z - z));
    return { x, y, z, span };
  }

  /** The turn that brings a point on the map round to face the reader. Null for a point on the axis, which faces every way. */
  private facing(x: number, y: number, z: number) {
    const h = Math.hypot(x, z);
    if (h < UNIT * 0.8) return null;
    return { yaw: Math.atan2(-x, z), pitch: clamp(Math.atan2(-y, h), -1, 1) };
  }

  /** The part of the plate the map may use: clear of the captions along the top and bottom edges. */
  private usable() {
    // Topic names stand above the upper groups, so the top needs a band for them. Below, they share the floor's space.
    const names = this.mode === 'mini' ? 0 : this.topicLabelHeight() + 4;
    const top = (this.mode === 'mini' ? 40 : 38) + names, bottom = (this.mode === 'full' ? 50 : 38);
    const side = this.mode === 'mini' ? 22 : this.W < 560 ? 16 : 30;
    return { x: side, y: top, w: Math.max(40, this.W - side * 2), h: Math.max(40, this.H - top - bottom) };
  }

  private touch() { this.lastTouch = performance.now(); this.spinEase = 0; }

  private bind() {
    const c = this.canvas;
    const on = (el: EventTarget, type: string, fn: (e: any) => void, o?: AddEventListenerOptions) => {
      el.addEventListener(type, fn as EventListener, o);
      this.cleanup.push(() => el.removeEventListener(type, fn as EventListener, o));
    };

    const ro = new ResizeObserver(() => this.resize());
    ro.observe(c);
    this.cleanup.push(() => ro.disconnect());

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((en) => { this.visible = en[0].isIntersecting; if (this.visible) this.need(); });
      io.observe(c);
      this.cleanup.push(() => io.disconnect());
    }
    on(document, 'visibilitychange', () => { if (!document.hidden) this.need(); });

    const mo = new MutationObserver(() => this.readPalette());
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    this.cleanup.push(() => mo.disconnect());
    on(window.matchMedia('(prefers-color-scheme: dark)'), 'change', () => this.readPalette());
    if (document.fonts) {
      // Canvas text does not wait for web fonts, so ask for the ones the labels use and redraw when they land.
      const refresh = () => { this.widths.clear(); this.need(); };
      Promise.all([`500 16px ${this.pal.serif}`, `400 12px ${this.pal.sans}`, `500 12px ${this.pal.sans}`, `400 10px ${this.pal.mono}`, `500 10px ${this.pal.mono}`].map((f) => document.fonts.load(f).catch(() => null))).then(refresh);
      document.fonts.ready.then(refresh);
    }

    const local = (e: PointerEvent | WheelEvent | MouseEvent) => { const r = c.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const middle = () => { const [a, b] = [...this.pointers.values()]; return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, d: Math.hypot(a.x - b.x, a.y - b.y) }; };
    const interactive = this.mode === 'full';

    on(c, 'pointerdown', (e: PointerEvent) => {
      const p = local(e);
      this.pointers.set(e.pointerId, p);
      this.drag = { moved: 0, pinch: 0, pan: e.button === 1 || e.button === 2 || e.shiftKey, t: performance.now(), mx: p.x, my: p.y };
      if (!interactive) return; // the small views are links; touch scrolls the page past them
      c.setPointerCapture?.(e.pointerId);
      if (this.pointers.size === 2) { const m = middle(); this.drag.pinch = m.d; this.drag.mx = m.x; this.drag.my = m.y; }
      this.tween = null;
      this.vel.yaw = this.vel.pitch = 0;
      this.touch();
    });
    on(c, 'pointermove', (e: PointerEvent) => {
      const p = local(e);
      this.mouse = { ...p, inside: true };
      if (!this.drag || !this.pointers.has(e.pointerId) || !interactive) { if (e.pointerType === 'mouse' || !this.drag) this.pick(); return; }
      const prev = this.pointers.get(e.pointerId)!;
      this.pointers.set(e.pointerId, p);
      this.touch();
      if (this.pointers.size === 2) {
        // Two fingers: pinch to zoom, move together to slide the map.
        const m = middle();
        if (this.drag.pinch) this.zoomAt(m.x, m.y, m.d / this.drag.pinch);
        this.setCam();
        this.pan(m.x - this.drag.mx, m.y - this.drag.my);
        this.drag.pinch = m.d; this.drag.mx = m.x; this.drag.my = m.y;
        this.drag.moved += 10;
        this.need();
        return;
      }
      const dx = p.x - prev.x, dy = p.y - prev.y;
      this.drag.moved += Math.abs(dx) + Math.abs(dy);
      if (this.drag.moved < 4) return;
      if (this.drag.pan) { this.setCam(); this.pan(dx, dy); }
      else {
        const v = this.view, now = performance.now(), dt = Math.max(0.008, (now - this.drag.t) / 1000);
        v.yaw += dx * TURN;
        v.pitch = clamp(v.pitch + dy * TURN, -PITCH_MAX, PITCH_MAX);
        this.vel.yaw = this.vel.yaw * 0.4 + clamp((dx * TURN) / dt, -4, 4) * 0.6;
        this.vel.pitch = this.vel.pitch * 0.4 + clamp((dy * TURN) / dt, -3, 3) * 0.6;
        this.drag.t = now;
      }
      if (this.hot) this.setHot(null);
      this.need();
    });
    const end = (e: PointerEvent) => {
      const was = this.drag;
      this.pointers.delete(e.pointerId);
      if (this.pointers.size === 0) this.drag = null;
      // A drag that came to rest before it was let go leaves the map where it is.
      if (!was || was.pan || this.reduced || performance.now() - was.t > 90) this.vel.yaw = this.vel.pitch = 0;
      this.touch();
      this.need();
      if (!was || was.moved >= 6 || e.type === 'pointercancel' || !interactive) return;
      this.vel.yaw = this.vel.pitch = 0;
      this.mouse = { ...local(e), inside: true };
      this.pick();
      this.select(this.hot ? this.hot.d.id : null, false);
    };
    on(c, 'pointerup', end);
    on(c, 'pointercancel', end);
    on(c, 'pointerleave', () => { this.mouse.inside = false; this.touch(); if (!this.drag) this.setHot(null); this.need(); });

    if (interactive) {
      on(c, 'wheel', (e: WheelEvent) => {
        e.preventDefault();
        const p = local(e);
        this.tween = null;
        this.touch();
        this.zoomAt(p.x, p.y, Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0016)));
        this.need();
      }, { passive: false });
      on(c, 'dblclick', (e: MouseEvent) => {
        const p = local(e);
        this.mouse = { ...p, inside: true };
        this.pick();
        if (this.hot) { this.select(this.hot.d.id, true); return; }
        this.touch();
        const from = { ...this.view };
        this.zoomAt(p.x, p.y, 1.7);
        const to = { ...this.view };
        this.view = from;
        this.flyTo(to, 320);
      });
      on(c, 'contextmenu', (e: MouseEvent) => e.preventDefault());
      on(c, 'keydown', (e: KeyboardEvent) => {
        const v = this.view;
        const turn = (dy: number, dp: number) => {
          this.tween = null;
          if (e.shiftKey) { this.setCam(); this.pan(-dy * 300, -dp * 300); }
          else { v.yaw += dy; v.pitch = clamp(v.pitch + dp, -PITCH_MAX, PITCH_MAX); }
          this.touch(); this.need();
        };
        if (e.key === 'ArrowLeft') turn(-0.14, 0);
        else if (e.key === 'ArrowRight') turn(0.14, 0);
        else if (e.key === 'ArrowUp') turn(0, -0.1);
        else if (e.key === 'ArrowDown') turn(0, 0.1);
        else if (e.key === '+' || e.key === '=') this.zoomBy(1.3);
        else if (e.key === '-' || e.key === '_') this.zoomBy(1 / 1.3);
        else if (e.key === '0') this.reset();
        else if (e.key === 'Escape') this.select(null);
        else if (e.key === 'Enter' && this.sel) { location.href = this.sel.d.u; return; }
        else return;
        e.preventDefault();
      });
    }
  }

  private resize() {
    const r = this.canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const first = !this.W;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.W = r.width; this.H = r.height;
    this.canvas.width = Math.round(r.width * this.dpr);
    this.canvas.height = Math.round(r.height * this.dpr);
    const u = this.usable(), e = this.data.extent;
    if (this.mode === 'mini' && this.pinned) {
      // The plate on a briefing looks at that page from outside the map, close enough to read its neighbours' names.
      const a = this.around(this.pinned), f = this.facing(this.pinned.d.x, this.pinned.d.y, this.pinned.d.z);
      this.span = a.span;
      this.fit = clamp(Math.min((u.w - 140) / (2 * a.span), u.h / (1.7 * a.span)), 0.5, 2.3);
      this.home = { yaw: f ? f.yaw : HOME_YAW, pitch: f ? clamp(f.pitch * 0.5 + 0.12, -0.6, 0.6) : HOME_PITCH, zoom: 1, x: a.x, y: a.y, z: a.z };
    } else {
      // Size the map so that it fits the plate whichever way it is turned, and centre what the reader sees:
      // the points and the floor under them, as they fall on the plate from a little above.
      const env = this.envelope();
      this.fit = Math.min(u.w / (2 * env.across * 1.02), u.h / ((env.bottom - env.top) * 1.02));
      this.home = { yaw: HOME_YAW, pitch: HOME_PITCH, zoom: 1, x: 0, y: (env.top + env.bottom) / 2 / Math.cos(HOME_PITCH), z: 0 };
      if (first || Math.abs(r.width - this.sizedFor) > 80) {
        this.sizedFor = r.width;
        this.home.yaw = this.clearestYaw();
      } else this.home.yaw = this.homeYaw;
      this.homeYaw = this.home.yaw;
    }
    if (first) this.view = { ...this.home };
    this.sides.clear();
    this.need();
  }

  // ------------------------------------------------------------------------------------------
  // View

  /**
   * How far the map reaches on the plate, in map units, over a full turn at the opening tilt: its
   * half-width, and its top and bottom measured from the middle. Stray tags are left out of the width,
   * so that one of them far from the rest does not shrink the whole map.
   */
  private envelope() {
    const cp = Math.cos(HOME_PITCH), sp = Math.sin(HOME_PITCH), dist = this.data.extent.radius * CAMERA;
    let across = UNIT, top = 0, bottom = 0;
    for (const n of this.nodes) {
      const h = Math.hypot(n.d.x, n.d.z);
      // Turned to the side a point is as far across as it gets; turned to the front or back, as high or low.
      if (n.d.k !== 't') across = Math.max(across, h);
      for (const z1 of [h, -h]) {
        const k = dist / (dist - (z1 * cp - n.d.y * sp)), y = (n.d.y * cp + z1 * sp) * k;
        top = Math.min(top, y); bottom = Math.max(bottom, y);
      }
    }
    across = Math.max(across, this.data.extent.across * 0.9);
    bottom = Math.max(bottom, this.floorY * cp + this.floorR * sp * 0.6);
    return { across, top, bottom };
  }

  /**
   * The turn the map opens at. Two things make a view easy to read: the groups overlap as little as
   * they can on the plate, and the smaller groups stand nearer the reader, where a larger one cannot
   * hide them. Worked out from the map itself, so the opening view stays a good one as the wiki grows.
   */
  private clearestYaw(): number {
    const groups = this.data.topics.filter((t) => t.at).map((t) => ({ at: t.at!, n: t.briefed }));
    if (groups.length < 2) return HOME_YAW;
    const most = Math.max(...groups.map((g) => g.n), 1), radius = this.data.extent.radius;
    const keep = { ...this.view };
    let best = HOME_YAW, bestCost = Infinity;
    const STEPS = 72;
    for (let i = 0; i < STEPS; i++) {
      // Start from the default and work outwards, so that of two equally clear views the nearer one wins.
      const yaw = HOME_YAW + (i % 2 ? -1 : 1) * Math.ceil(i / 2) * (TAU / STEPS);
      this.view = { ...this.home, yaw };
      this.setCam();
      let cost = 0;
      const discs = groups.map((g) => {
        const o = this.project(g.at.x, g.at.y, g.at.z);
        cost -= (1 - g.n / most) * (o.z / radius);
        return { x: o.sx, y: o.sy, r: g.at.r * 0.9 * o.k * this.cam.s, z: o.z };
      });
      for (let a = 0; a < discs.length; a++) {
        for (let b = a + 1; b < discs.length; b++) {
          const p = discs[a], q = discs[b];
          const over = (p.r + q.r - Math.hypot(p.x - q.x, p.y - q.y)) / (p.r + q.r);
          if (over <= 0) continue;
          // An overlap costs more when the group in front is the larger of the two.
          const front = p.z > q.z ? p : q, back = p.z > q.z ? q : p;
          cost += over * over * (1 + front.r / back.r);
        }
      }
      if (cost < bestCost - 1e-6) { bestCost = cost; best = yaw; }
    }
    this.view = keep;
    return best;
  }

  /**
   * How large the map is drawn for a view, in pixels to the map unit. Tilted towards a plan view the
   * map stands taller on the plate, so the whole of it is drawn a little smaller and still fits. Close
   * in, where only part of the map is in view anyway, that allowance fades out.
   */
  private scaleOf(v: View) {
    let tilt = 1;
    if (this.mode === 'full') {
      const e = this.data.extent, tall = (p: number) => e.across * Math.abs(Math.sin(p)) + e.tall * Math.cos(p);
      tilt = Math.min(1, tall(HOME_PITCH) / tall(v.pitch));
      tilt += (1 - tilt) * clamp((v.zoom - 1) / 0.6, 0, 1);
    }
    return this.fit * v.zoom * tilt;
  }

  /** The direction from the map towards the reader, in map units. Needs `setCam()` first. */
  private sight(): [number, number, number] {
    const c = this.cam;
    return [-c.sy * c.cp, -c.sp, c.cy * c.cp];
  }

  /** How far towards the reader the pages around a spot on the plate stand, or null where there are none. */
  private depthAt(sx: number, sy: number) {
    const reach = Math.max(70, Math.min(this.W, this.H) * 0.16);
    let sum = 0, weight = 0;
    for (const n of this.nodes) {
      if (!n.shown || !n.active || n.d.k === 't') continue;
      const d = Math.hypot(n.sx - sx, n.sy - sy);
      if (d >= reach) continue;
      const w = (1 - d / reach) ** 2;
      sum += n.z * w; weight += w;
    }
    return weight > 0.05 ? sum / weight : null;
  }

  /**
   * Where the view is centred after zooming out from one zoom to another. The map is let go of on the
   * way out: whatever the view closed in on is given back step by step, and by the full view the map
   * is in the middle of the plate again, so it cannot be lost off the edge.
   */
  private easeBack(z0: number, z1: number) {
    const v = this.view, h = this.home;
    const keep = z0 > 1 ? clamp((z1 - 1) / (z0 - 1), 0, 1) : z1 / z0;
    return { x: h.x + (v.x - h.x) * keep, y: h.y + (v.y - h.y) * keep, z: h.z + (v.z - h.z) * keep };
  }

  private setCam() {
    const v = this.view, u = this.usable(), c = this.cam;
    c.cy = Math.cos(v.yaw); c.sy = Math.sin(v.yaw); c.cp = Math.cos(v.pitch); c.sp = Math.sin(v.pitch);
    c.s = this.scaleOf(v);
    c.cx = u.x + u.w / 2; c.cyy = u.y + u.h / 2;
    c.dist = this.data.extent.radius * CAMERA;
    // The depth over which marks fade: the whole map from afar, less of it close in.
    c.range = this.mode === 'mini' ? Math.max(this.span * 1.5, UNIT * 4) : this.data.extent.radius / Math.sqrt(Math.max(1, v.zoom));
  }

  /** Where a point of the map falls on the plate. Writes to `this.out`: position, scale and distance towards the viewer. */
  private project(x: number, y: number, z: number) {
    const c = this.cam, v = this.view, o = this.out;
    const dx = x - v.x, dy = y - v.y, dz = z - v.z;
    const x1 = dx * c.cy + dz * c.sy, z1 = dz * c.cy - dx * c.sy;
    const y2 = dy * c.cp + z1 * c.sp, z2 = z1 * c.cp - dy * c.sp;
    const k = c.dist / Math.max(c.dist - z2, c.dist * 0.3);
    o.sx = c.cx + x1 * k * c.s; o.sy = c.cyy + y2 * k * c.s; o.k = k; o.z = z2;
    return o;
  }

  /** Slide the map across the plate by a distance in pixels. Needs `setCam()` first. */
  private pan(dx: number, dy: number) {
    const c = this.cam, v = this.view, s = c.s;
    v.x -= (c.cy * dx - c.sy * c.sp * dy) / s;
    v.y -= (c.cp * dy) / s;
    v.z -= (c.sy * dx + c.cy * c.sp * dy) / s;
    // The map cannot be slid right off the plate.
    const far = Math.hypot(v.x, v.y, v.z), max = this.data.extent.radius * 1.15;
    if (far > max) { v.x *= max / far; v.y *= max / far; v.z *= max / far; }
  }

  /**
   * Zoom in on what is under the pointer, keeping it where it is. The view closes on those pages in
   * depth as well, so a group at the back of the map comes forward rather than staying small and pale.
   * Zooming out eases the whole map back to the middle.
   */
  private zoomAt(sx: number, sy: number, factor: number) {
    const v = this.view, z0 = v.zoom, z1 = clamp(z0 * factor, ZOOM_MIN, ZOOM_MAX);
    if (z1 === z0) return;
    this.setCam();
    if (z1 < z0) { Object.assign(v, this.easeBack(z0, z1), { zoom: z1 }); return; }
    const c = this.cam, s0 = c.s, f = this.sight();
    const depth = this.depthAt(sx, sy) ?? 0, step = depth * (1 - z0 / z1);
    v.x += f[0] * step; v.y += f[1] * step; v.z += f[2] * step;
    v.zoom = z1;
    this.setCam();
    // The same spot of the map, now nearer and larger, goes back under the pointer.
    const before = c.dist / Math.max(c.dist - depth, c.dist * 0.3), after = c.dist / Math.max(c.dist - (depth - step), c.dist * 0.3);
    const m = 1 - (after * c.s) / (before * s0);
    this.pan(((sx - c.cx) * m) / after, ((sy - c.cyy) * m) / after);
  }

  private flyTo(to: View, dur: number) {
    this.vel.yaw = this.vel.pitch = 0;
    if (this.reduced) { this.view = { ...to }; this.tween = null; this.need(); return; }
    this.tween = { t0: performance.now(), dur, from: { ...this.view }, to: { ...to } };
    this.need();
  }

  /** Ask for a redraw. Frames run only while something is changing. */
  private need() {
    if (this.raf || !this.visible || document.hidden) return;
    this.raf = requestAnimationFrame((t) => {
      this.raf = 0;
      // The small views turn at half the frame rate; nobody is studying them frame by frame.
      if (this.mode !== 'full' && this.idling && this.frameNo++ & 1) { this.need(); return; }
      const dt = this.lastT ? Math.min(0.06, (t - this.lastT) / 1000) : 0.016;
      this.lastT = t;
      let more = this.advance(t, dt);
      if (this.render()) more = true;
      if (more) this.need(); else this.lastT = 0;
    });
  }

  /** Moves the view on by one frame. Returns true while another frame is wanted. */
  private advance(t: number, dt: number): boolean {
    const v = this.view;
    this.moving = false; this.idling = false;
    if (this.tween) {
      const k = clamp((t - this.tween.t0) / this.tween.dur, 0, 1), e = ease(k), f = this.tween.from, g = this.tween.to;
      const lerp = (a: number, b: number) => a + (b - a) * e;
      // Zoom is eased on a log scale so the map does not lurch.
      this.view = { yaw: lerp(f.yaw, g.yaw), pitch: lerp(f.pitch, g.pitch), zoom: Math.exp(lerp(Math.log(f.zoom), Math.log(g.zoom))), x: lerp(f.x, g.x), y: lerp(f.y, g.y), z: lerp(f.z, g.z) };
      if (k >= 1) this.tween = null;
      this.moving = true;
      return true;
    }
    if (this.drag) { this.moving = this.drag.moved >= 4 && this.mode === 'full'; this.spinEase = 0; return false; }
    if (Math.abs(this.vel.yaw) + Math.abs(this.vel.pitch) > 0.03) {
      // Let go mid-turn, the map carries on a little and settles.
      v.yaw += this.vel.yaw * dt;
      v.pitch = clamp(v.pitch + this.vel.pitch * dt, -PITCH_MAX, PITCH_MAX);
      const damp = Math.exp(-dt * 3.6);
      this.vel.yaw *= damp; this.vel.pitch *= damp;
      this.moving = true;
      return true;
    }
    this.vel.yaw = this.vel.pitch = 0;
    // Left alone, the map turns slowly. It holds still under the pointer and while a page is selected.
    if (!this.spin || this.mouse.inside || (this.mode === 'full' && this.sel)) { this.spinEase = 0; return false; }
    if (t - this.lastTouch < (this.mode === 'full' ? 1500 : 400)) return true;
    this.spinEase = Math.min(1, this.spinEase + dt * 0.8);
    if (this.mode === 'mini') {
      // The plate on a briefing only sways, so the page it is about stays in front.
      this.phase += dt * this.spinEase;
      v.yaw = this.home.yaw + Math.sin(this.phase * 0.4) * 0.24;
    } else v.yaw += dt * (this.mode === 'teaser' ? 0.1 : 0.07) * this.spinEase;
    this.moving = this.idling = true;
    return true;
  }

  // ------------------------------------------------------------------------------------------
  // Filters and picking

  private refilter() {
    for (const n of this.nodes) {
      const d = n.d;
      n.shown = d.k === 'f' || !!this.layers[d.k];
      n.active = d.k !== 'f' || (this.topicOn[d.d] !== false && this.riskOn.has(d.risk ?? ''));
    }
    // A concept or tag stays lit only while a briefing it links to is still in view.
    for (const n of this.nodes) {
      if (n.d.k === 'f') continue;
      const pages = n.nb.filter((j) => this.nodes[j].d.k === 'f');
      n.active = !pages.length || pages.some((j) => this.nodes[j].active);
    }
  }

  private setHot(n: NodeView | null) {
    if (n === this.hot) return;
    this.hot = n;
    this.canvas.style.cursor = n ? 'pointer' : this.mode === 'full' ? 'grab' : 'pointer';
    this.opts.onHover?.(n ? { node: n.d, index: n.i } : null);
    this.need();
  }

  private pick() {
    const { x, y } = this.mouse;
    let best: NodeView | null = null, bestScore = Infinity;
    for (const n of this.nodes) {
      if (!n.shown || !n.active) continue;
      if (this.mode === 'mini' && this.pinned && n !== this.pinned && !this.pinned.nb.includes(n.i)) continue;
      const d = Math.hypot(n.sx - x, n.sy - y);
      if (d > Math.max(n.sr + 5, 9)) continue;
      // Nearest to the pointer, with pages preferred over the tags beside them and the front over the back.
      const score = d - (n.d.k === 't' ? 0 : 3) - n.near * 5;
      if (score < bestScore) { bestScore = score; best = n; }
    }
    this.setHot(best);
  }

  // ------------------------------------------------------------------------------------------
  // Colours

  private colourOf(n: NodeView): RGB {
    const d = n.d, P = this.pal;
    if (d.k !== 'f') return d.k === 'c' ? P.ink : P.neutral;
    if (this.colourBy === 'risk') return d.risk === 'high' ? P.high : d.risk === 'medium' ? P.medium : P.low;
    if (this.colourBy === 'action') return d.action === 'act-now' ? P.high : d.action === 'prepare' ? P.medium : d.action === 'review' ? P.neutral : P.inkDim;
    return P.topic[d.d] ?? P.neutral;
  }

  // ------------------------------------------------------------------------------------------
  // Drawing

  /** Draws one frame. Returns true while marks are still fading towards their state. */
  private render(): boolean {
    const ctx = this.ctx, W = this.W, H = this.H, P = this.pal;
    if (!W || !H) return false;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    this.setCam();
    const c = this.cam, s = c.s;
    const mini = this.mode === 'mini', full = this.mode === 'full';
    const focusNode = this.hot ?? this.sel ?? this.pinned;
    const lit = focusNode ? new Set<number>([focusNode.i, ...focusNode.nb]) : null;
    if (mini && this.pinned && this.hot && this.hot !== this.pinned) { lit!.clear(); lit!.add(this.pinned.i); this.pinned.nb.forEach((j) => lit!.add(j)); }
    const nearOf = (z: number) => clamp(0.5 + z / (2 * c.range), 0, 1);

    this.drawFloor(nearOf);

    // ---- Place the marks.
    const sizeK = (mini ? 0.92 : this.mode === 'teaser' ? 0.86 : 1) * clamp(Math.pow(s / 1.25, 0.5), 0.7, 2.3);
    let unsettled = false;
    for (const n of this.nodes) {
      const o = this.project(n.d.x, n.d.y, n.d.z);
      n.sx = o.sx; n.sy = o.sy; n.z = o.z; n.near = nearOf(o.z);
      n.sr = n.base * sizeK * Math.pow(o.k, 0.9);
      let target = !n.shown ? 0 : !n.active ? 0.08 : 1;
      if (target === 1 && lit && !lit.has(n.i)) target = mini ? 0.26 : 0.16;
      if (target === 1 && this.hoverTopic >= 0 && n.d.k === 'f' && n.d.d !== this.hoverTopic) target = 0.2;
      if (this.reduced || Math.abs(target - n.a) < 0.012) n.a = target; else { n.a += (target - n.a) * 0.24; unsettled = true; }
    }
    this.order.sort((a, b) => this.nodes[a].z - this.nodes[b].z);

    // ---- Links, farthest first. Shared-tag lines are fainter than links between pages, and both pale with distance.
    const BANDS = 4;
    const hotEdges: number[] = [];
    const band = new Int8Array(this.edges.length);
    for (let ei = 0; ei < this.edges.length; ei++) {
      const e = this.edges[ei], a = this.nodes[e.a], b = this.nodes[e.b];
      if (!a.shown || !b.shown || !a.active || !b.active) { band[ei] = -1; continue; }
      if (focusNode && (e.a === focusNode.i || e.b === focusNode.i)) { band[ei] = -1; hotEdges.push(ei); continue; }
      const faded = !!lit || (this.hoverTopic >= 0 && a.d.d !== this.hoverTopic && b.d.d !== this.hoverTopic);
      // Bands 0 to 4 are lines at full strength, back to front; 5 to 9 the same for lines that are dimmed.
      band[ei] = Math.round(((a.near + b.near) / 2) * BANDS) + (faded ? BANDS + 1 : 0);
    }
    for (let dim = 1; dim >= 0; dim--) {
      for (let bk = 0; bk <= BANDS; bk++) {
        for (let kind = 1; kind >= 0; kind--) {
          const want = bk + dim * (BANDS + 1);
          let any = false;
          ctx.beginPath();
          for (let ei = 0; ei < this.edges.length; ei++) {
            if (band[ei] !== want || this.edges[ei].kind !== kind) continue;
            const a = this.nodes[this.edges[ei].a], b = this.nodes[this.edges[ei].b];
            ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy);
            any = true;
          }
          if (!any) continue;
          const depth = 0.22 + 0.78 * (bk / BANDS);
          ctx.strokeStyle = rgba(P.edge, (kind === 0 ? 0.34 : 0.14) * depth * (dim ? (mini ? 0.5 : 0.3) : 1));
          ctx.lineWidth = (kind === 0 ? 0.9 : 0.7) * (0.8 + 0.4 * (bk / BANDS));
          ctx.stroke();
        }
      }
    }
    if (focusNode && hotEdges.length) {
      for (const ei of hotEdges) {
        const e = this.edges[ei], a = this.nodes[e.a], b = this.nodes[e.b];
        ctx.lineWidth = 1.15;
        ctx.strokeStyle = rgba(P.ink, (e.kind === 0 ? 0.85 : 0.42) * Math.min(a.a, b.a) * (0.55 + 0.45 * Math.min(a.near, b.near)));
        ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
      }
    }

    // ---- Marks, farthest first, so nearer points cover the ones behind them. Distance pales a mark towards the paper.
    for (const idx of this.order) {
      const n = this.nodes[idx], d = n.d;
      if (n.a < 0.02) continue;
      const r = n.sr, x = n.sx, y = n.sy, a = n.a;
      if (x < -40 || y < -40 || x > W + 40 || y > H + 40) continue;
      const isFocus = n === this.hot || n === this.sel || n === this.pinned;
      const fog = isFocus ? 0 : (1 - n.near) * 0.56;
      const col = mix(this.colourOf(n), P.paper, fog);
      if (d.k === 't') {
        ctx.fillStyle = rgba(P.paper, a); ctx.beginPath(); ctx.arc(x, y, r + 1, 0, TAU); ctx.fill();
        ctx.fillStyle = rgba(col, a * 0.82); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
      } else if (d.k === 'f') {
        // A ring of paper keeps the lines from running into the point.
        ctx.fillStyle = rgba(P.paper, a); ctx.beginPath(); ctx.arc(x, y, r + 1.6, 0, TAU); ctx.fill();
        ctx.fillStyle = rgba(col, a); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
        if (d.action === 'act-now') {
          ctx.strokeStyle = rgba(mix(P.high, P.paper, fog), a); ctx.lineWidth = 1.3;
          ctx.beginPath(); ctx.arc(x, y, r + 3.2, 0, TAU); ctx.stroke();
        }
      } else {
        ctx.fillStyle = rgba(P.paper, a); ctx.beginPath(); ctx.arc(x, y, r + 1.4, 0, TAU); ctx.fill();
        ctx.strokeStyle = rgba(col, a); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke();
        ctx.fillStyle = rgba(col, a); ctx.beginPath(); ctx.arc(x, y, r * 0.36, 0, TAU); ctx.fill();
      }
      if (isFocus) {
        ctx.strokeStyle = rgba(P.ink, 0.9); ctx.lineWidth = 1.3;
        ctx.beginPath(); ctx.arc(x, y, r + (d.k === 'f' && d.action === 'act-now' ? 6 : 3.8), 0, TAU); ctx.stroke();
      }
    }

    // ---- Labels. Keep them clear of the captions printed over the plate.
    this.placed = full ? [[0, 0, W, 40], [0, H - 52, 260, H]] : this.mode === 'teaser' ? [[0, 0, W, 38], [0, H - 36, W, H]] : [[0, 0, W, 32], [0, H - 32, 180, H]];
    if (!mini) this.topicLabels();
    this.nodeLabels(focusNode, s);
    return unsettled;
  }

  /** A disc of dots under the map. It turns with the map, which is what lets the eye read the depth. */
  private drawFloor(nearOf: (z: number) => number) {
    const ctx = this.ctx, P = this.pal, mini = this.mode === 'mini';
    // Seen edge-on the floor is only a line across the map, so it fades out as the view comes level with it.
    const rim: number[] = [];
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * TAU, o = this.project(Math.cos(a) * this.floorR, this.floorY, Math.sin(a) * this.floorR);
      rim.push(o.sx, o.sy);
      x0 = Math.min(x0, o.sx); x1 = Math.max(x1, o.sx); y0 = Math.min(y0, o.sy); y1 = Math.max(y1, o.sy);
    }
    const open = clamp(((y1 - y0) / Math.max(x1 - x0, 1) - 0.03) / 0.09, 0, 1);
    if (open <= 0) return;
    const size = clamp(Math.sqrt(this.cam.s) * 1.25, 1, 2.4);
    const dot = mix(P.grid, P.inkDim, 0.3);
    for (let i = 0; i < this.floor.length; i += 2) {
      const gx = this.floor[i], gz = this.floor[i + 1];
      const o = this.project(gx, this.floorY, gz);
      if (o.sx < -4 || o.sy < -4 || o.sx > this.W + 4 || o.sy > this.H + 4) continue;
      const edge = Math.hypot(gx, gz) / this.floorR;
      const d = size * o.k;
      ctx.fillStyle = rgba(dot, (0.3 + 0.7 * nearOf(o.z)) * (1 - 0.5 * edge * edge) * (mini ? 0.7 : 1) * open);
      ctx.fillRect(o.sx - d / 2, o.sy - d / 2, d, d);
    }
    if (mini) return;
    // The rim of the floor, as a hairline.
    ctx.beginPath();
    ctx.moveTo(rim[0], rim[1]);
    for (let i = 2; i < rim.length; i += 2) ctx.lineTo(rim[i], rim[i + 1]);
    ctx.strokeStyle = rgba(P.grid, 0.85 * open); ctx.lineWidth = 0.8;
    ctx.stroke();
  }

  private measure(text: string, font: string): number {
    const key = font + '|' + text;
    let w = this.widths.get(key);
    if (w === undefined) { this.ctx.font = font; w = this.ctx.measureText(text).width; this.widths.set(key, w); }
    return w;
  }

  private free(r: number[]) {
    for (const q of this.placed) if (r[0] < q[2] && r[2] > q[0] && r[1] < q[3] && r[3] > q[1]) return false;
    return true;
  }

  /** True when a label box would sit on top of a page's point (other than its own). */
  private covers(r: number[], own: NodeView) {
    for (const n of this.nodes) {
      // Only points in front of the label's own page count: a name may pass over what lies behind it.
      if (n === own || n.d.k === 't' || n.a < 0.5 || n.z < own.z - UNIT * 0.3) continue;
      const m = n.sr + 1.5;
      if (n.sx + m > r[0] && n.sx - m < r[2] && n.sy + m > r[1] && n.sy - m < r[3]) return true;
    }
    return false;
  }

  /** Text with a halo of paper behind it, as on a printed map. */
  private haloText(text: string, x: number, y: number, font: string, colour: string, halo = 3.2, haloAlpha = 0.92) {
    const ctx = this.ctx;
    ctx.font = font;
    ctx.lineJoin = 'round';
    ctx.lineWidth = halo;
    ctx.strokeStyle = rgba(this.pal.paper, haloAlpha);
    ctx.strokeText(text, x, y);
    ctx.fillStyle = colour;
    ctx.fillText(text, x, y);
  }

  private get smallLabels() { return this.mode === 'teaser' || this.W < 620; }
  private topicLabelHeight() { return this.smallLabels ? 30 : 34; }

  /**
   * Each topic is named beside its own group: above a group that stands in the upper half of the map,
   * below one in the lower half. The name is fixed to the group in space, so it travels with it as the
   * map turns and pales as the group goes round the back. Where that side is crowded with other pages
   * the name takes the other side, and where both are crowded it steps back until the group comes clear.
   */
  private topicLabels() {
    const ctx = this.ctx, P = this.pal;
    const small = this.smallLabels;
    const f1 = `500 ${small ? 14 : 16.5}px ${P.serif}`, f2 = `400 ${small ? 8.5 : 9.5}px ${P.mono}`;
    const range = this.cam.range, h = this.topicLabelHeight();
    /** Pages that a box on the plate would sit on */
    const crowd = (x0: number, y0: number, w: number) => {
      let c = 0;
      for (const n of this.nodes) if (n.d.k !== 't' && n.shown && n.a > 0.5 && n.sx > x0 && n.sx < x0 + w && n.sy > y0 - 2 && n.sy < y0 + h + 2) c++;
      return c;
    };
    const list = this.data.topics.map((t, ti) => {
      if (!t.at) return null;
      const title = small ? t.short : t.label, sub = `${t.briefed} ${t.briefed === 1 ? 'BRIEFING' : 'BRIEFINGS'}`;
      const w = Math.max(this.measure(title, f1), this.measure(sub, f2) * 1.1) + 8;
      // Where the group's own pages fall on the plate just now.
      let lo = Infinity, hi = -Infinity, left = Infinity, right = -Infinity;
      for (const i of this.topicNodes[ti]) {
        const n = this.nodes[i];
        lo = Math.min(lo, n.sy - n.sr); hi = Math.max(hi, n.sy + n.sr); left = Math.min(left, n.sx - n.sr); right = Math.max(right, n.sx + n.sr);
      }
      const o = this.project(t.at.x, t.at.y, t.at.z), mid = o.sx, depth = o.z;
      // Four places a name can stand: on the group's own side of the map, on the other, or to its left or right.
      const spot = (side: number) => {
        const above = side === 0 ? t.at!.up : !t.at!.up;
        const x0 = side === 2 ? left - 10 - w : side === 3 ? right + 10 : clamp(mid - w / 2, 6, this.W - w - 6);
        const y0 = side > 1 ? (lo + hi) / 2 - h / 2 : above ? lo - h - 7 : hi + 7;
        // A name that would be cut by the edge of the plate, or run under its captions, cannot go there.
        const fits = mid > 0 && mid < this.W && x0 >= 6 && x0 + w <= this.W - 6 && y0 >= 36 && y0 + h <= this.H - 4;
        return { x0, y0, fits, crowd: fits ? crowd(x0, y0, w) + (side ? 0.5 : 0) : 99 };
      };
      // Stay where the name already is unless somewhere else is clearly emptier, so it does not hop about.
      // A name placed for the first time simply takes the emptiest spot.
      // It goes back to its own side as soon as that is no worse.
      const settled = this.topicSide[ti] !== undefined;
      let side = this.topicSide[ti] ?? 0, at = spot(side);
      for (let other = 0; other < 4; other++) {
        if (other === side) continue;
        const there = spot(other), margin = !settled ? 0.01 : other === 0 ? 0 : 2;
        if (there.fits && (!at.fits || there.crowd + margin <= at.crowd)) { side = other; at = there; }
      }
      this.topicSide[ti] = side;
      return { title, sub, ti, w, left, right, ...at, near: clamp(0.5 + depth / (2 * range), 0, 1) };
    }).filter((l): l is NonNullable<typeof l> => !!l && l.fits).sort((a, b) => b.near - a.near);
    for (const l of list) {
      const { title, sub, ti, w, y0, near, crowd: over } = l;
      let x0 = l.x0;
      if (!this.free([x0, y0, x0 + w, y0 + h])) {
        // Two names want the same place: the one farther back steps sideways, as long as it still stands
        // over or under its own group. Otherwise it waits, rather than seem to name the group next door.
        const inWay = this.placed.filter((b) => b[1] < y0 + h && b[3] > y0 && b[0] < x0 + w && b[2] > x0);
        const steps = [Math.min(...inWay.map((b) => b[0])) - 10 - w, Math.max(...inWay.map((b) => b[2])) + 10]
          .filter((x) => x >= 6 && x + w <= this.W - 6 && x + w / 2 > l.left - w * 0.2 && x + w / 2 < l.right + w * 0.2 && this.free([x, y0, x + w, y0 + h]))
          .sort((a, b) => Math.abs(a - x0) - Math.abs(b - x0));
        if (!steps.length) continue;
        x0 = steps[0];
      }
      this.placed.push([x0, y0, x0 + w, y0 + h]);
      const off = this.topicOn[ti] === false;
      const clear = clamp(1 - (over - 1) * 0.17, 0.3, 1);
      const dim = (off ? 0.32 : this.hoverTopic >= 0 && this.hoverTopic !== ti ? 0.42 : 1) * (0.5 + 0.5 * near) * clear;
      const cx = x0 + w / 2;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      this.haloText(title, cx, y0 + (small ? 13 : 15), f1, rgba(P.ink, dim), 3.2, 0.5 + 0.42 * clear);
      // A dot in the topic's colour ties the name to its points.
      const tw = this.measure(sub, f2) * 1.1;
      (ctx as any).letterSpacing = '0.1em';
      this.haloText(sub, cx + 7, y0 + (small ? 26 : 29), f2, rgba(P.inkDim, dim), 2.6, 0.5 + 0.42 * clear);
      (ctx as any).letterSpacing = '0px';
      ctx.fillStyle = rgba(P.topic[ti], dim);
      ctx.beginPath(); ctx.arc(cx - tw / 2 - 2, y0 + (small ? 23 : 25.6), 3, 0, TAU); ctx.fill();
    }
    ctx.textAlign = 'left';
  }

  private nodeLabels(focusNode: NodeView | null, s: number) {
    const ctx = this.ctx, P = this.pal;
    const mini = this.mode === 'mini', teaser = this.mode === 'teaser';
    const still = !this.moving, now = performance.now();
    // While the map is still, every name is placed afresh. While it moves, each keeps the side it had.
    if (still) { this.sides.clear(); this.sideMissed.clear(); }
    const inView = (n: NodeView) => n.sx > 0 && n.sy > 0 && n.sx < this.W && n.sy < this.H;
    const queue: { n: NodeView; strong: boolean }[] = [];
    if (this.hot) queue.push({ n: this.hot, strong: true });
    if (this.sel && this.sel !== this.hot) queue.push({ n: this.sel, strong: true });
    if (this.pinned && this.pinned !== this.hot) queue.push({ n: this.pinned, strong: true });
    const labelFrom = mini ? this.pinned : focusNode;
    if (labelFrom) {
      const around = labelFrom.nb.map((j) => this.nodes[j]).filter((n) => n.shown && n.active && n !== this.hot)
        .sort((a, b) => (a.d.k === 't' ? 1 : 0) - (b.d.k === 't' ? 1 : 0) || b.d.n - a.d.n);
      for (const n of around.slice(0, mini ? (this.W > 460 ? 12 : 6) : 16)) queue.push({ n, strong: false });
    } else if (this.layers.labels) {
      // The best-connected pages near the front are named first; more names appear as the reader zooms in.
      // While the map is turning only the concepts are named, so names do not flicker in and out.
      const area = (this.W * this.H) / 62000;
      const budget = Math.round(clamp(area * Math.pow(this.view.zoom, 1.5), 3, 70) * (teaser ? 0.6 : 1));
      const tagsToo = s > 2.6 && still;
      const auto = this.nodes.filter((n) => n.shown && n.active && inView(n) && n.near > 0.34 && (still ? n.d.k !== 't' || tagsToo : n.d.k === 'c') && (this.hoverTopic < 0 || n.d.k !== 'f' || n.d.d === this.hoverTopic))
        .sort((a, b) => (b.d.k === 'c' ? 100 : b.d.k === 't' ? -4 : 0) + b.d.n + b.near * 6 - ((a.d.k === 'c' ? 100 : a.d.k === 't' ? -4 : 0) + a.d.n + a.near * 6));
      for (const n of auto.slice(0, budget)) queue.push({ n, strong: false });
    }
    const size = mini || teaser ? 10.5 : 11.5;
    ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    for (const { n, strong } of queue) {
      if (n.a < 0.3 && !strong) continue;
      const d = n.d, tag = d.k === 't';
      const font = tag && !strong ? `400 ${size - 1.5}px ${P.mono}` : `${strong || d.k === 'c' ? 500 : 400} ${size}px ${P.sans}`;
      const text = strong && !mini && this.W > 560 ? (d.t.length > 64 ? d.t.slice(0, 62).trimEnd() + '…' : d.t) : tag && !strong ? d.l.toLowerCase() : d.l;
      const meta = strong ? this.metaLine(d) : '';
      const mfont = `400 9px ${P.mono}`;
      const pad = strong ? 6 : 1;
      const w = Math.max(this.measure(text, font), meta ? this.measure(meta, mfont) * 1.09 : 0) + pad * 2;
      const h = meta ? 33 : strong ? 20 : 14;
      const gap = n.sr + (strong ? 8 : 5);
      const tries = [[n.sx + gap, n.sy - h / 2], [n.sx - gap - w, n.sy - h / 2], [n.sx - w / 2, n.sy - gap - h], [n.sx - w / 2, n.sy + gap]];
      // A linked page is named on the side away from the page in focus, so the line between them does not run through its name.
      const order = !strong && labelFrom && n.sx < labelFrom.sx ? [1, 0, 2, 3] : [0, 1, 2, 3];
      let spot: number[] | null = null;
      const kept = still || strong ? undefined : this.sides.get(n.i);
      // A name with nowhere to go is tried again in a moment, not on every frame.
      if (kept !== undefined && kept < 0 && now - (this.sideMissed.get(n.i) ?? 0) < 900) continue;
      // While the map moves a name stays on the side it has, and moves only when another name comes to stand there.
      for (const ti of kept !== undefined && kept >= 0 ? [kept, ...order.filter((i) => i !== kept)] : order) {
        const [x, y] = tries[ti];
        const xx = clamp(x, 3, this.W - w - 3), yy = clamp(y, 3, this.H - h - 3);
        if (!strong && (xx !== x || yy !== y)) continue;
        const rect = [xx - 3, yy - 2, xx + w + 3, yy + h + 2];
        if (this.free(rect) && (strong || ti === kept || !this.covers(rect, n))) { spot = [xx, yy]; this.placed.push(rect); if (!strong) this.sides.set(n.i, ti); break; }
      }
      if (!spot && !strong) { this.sides.set(n.i, -1); this.sideMissed.set(n.i, now); }
      if (!spot) {
        if (!strong) continue;
        spot = [clamp(n.sx + gap, 3, this.W - w - 3), clamp(n.sy - h / 2, 3, this.H - h - 3)];
      }
      const [x, y] = spot;
      if (!strong) {
        const depth = labelFrom ? 1 : 0.55 + 0.45 * n.near;
        this.haloText(text, x + pad, y + h / 2 + 0.5, font, rgba(d.k === 'c' ? P.ink : tag ? P.inkDim : mix(P.ink, P.inkDim, 0.3), depth));
        continue;
      }
      ctx.fillStyle = rgba(P.labelBg, 0.96);
      ctx.fillRect(x, y, w, h);
      ctx.strokeStyle = rgba(P.inkDim, 0.55); ctx.lineWidth = 0.8; ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
      ctx.font = font; ctx.fillStyle = rgba(P.ink, 1);
      ctx.fillText(text, x + pad, y + (meta ? 11 : h / 2 + 0.5));
      if (meta) {
        (ctx as any).letterSpacing = '0.08em';
        ctx.font = mfont; ctx.fillStyle = rgba(P.inkDim, 1);
        ctx.fillText(meta, x + pad, y + 24);
        (ctx as any).letterSpacing = '0px';
      }
    }
  }

  private metaLine(d: AtlasNode): string {
    if (d.k === 'f') return [this.data.topics[d.d]?.short, RISK_LABEL[d.risk ?? ''], ACTION_LABEL[d.action ?? '']].filter(Boolean).join(' · ').toUpperCase();
    if (d.k === 'c') return `CONCEPT · ${d.n} LINKS`;
    return `TAG · ${d.n} PAGES`;
  }
}

export async function loadAtlas(base: string): Promise<AtlasData> {
  const res = await fetch(`${base}/atlas.json`);
  if (!res.ok) throw new Error(`atlas.json ${res.status}`);
  return res.json();
}
