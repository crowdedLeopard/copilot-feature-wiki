/**
 * Atlas renderer. Draws the ledger as a flat map on a 2D canvas: pages as points grouped by topic,
 * and the links between them as hairlines.
 *
 * One engine, three modes:
 *   full    the /atlas/ page: move, zoom, hover, select, filters
 *   teaser  the home page: the whole map, hover labels, click through to the atlas
 *   mini    the panel on a briefing or concept: that page and the pages it links to, the rest faint
 *
 * No dependencies. Positions come ready-made from the build (src/lib/layout.ts); colours come from
 * CSS custom properties on the host element, so the atlas follows the site theme. Nothing moves
 * unless the reader moves it, so the canvas is only redrawn when something changes.
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
  sx: number; sy: number; sr: number;
}

interface EdgeView { a: number; b: number; kind: number }

interface Palette {
  topic: RGB[];
  paper: RGB; grid: RGB; edge: RGB; ink: RGB; inkDim: RGB; labelBg: RGB; neutral: RGB;
  high: RGB; medium: RGB; low: RGB;
  mono: string; sans: string; serif: string;
}

interface View { x: number; y: number; zoom: number }

const TAU = Math.PI * 2;
/** Map units between neighbouring briefings; the same figure the layout works to. */
const UNIT = 30;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const rgba = (c: RGB, a: number) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${clamp(a, 0, 1).toFixed(3)})`;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

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
  /** What the opening view has to show: [minX, minY, maxX, maxY] in map units */
  private frame: [number, number, number, number];
  /** Pixels per map unit when the frame exactly fills the plate */
  private fit = 1;
  private view: View = { x: 0, y: 0, zoom: 1 };
  private home: View = { x: 0, y: 0, zoom: 1 };
  private tween: null | { t0: number; dur: number; from: View; to: View } = null;

  private nodes: NodeView[];
  private edges: EdgeView[];
  private byId = new Map<string, NodeView>();

  private hot: NodeView | null = null;
  private sel: NodeView | null = null;
  private pinned: NodeView | null = null; // mini mode focus
  private hoverTopic = -1;
  private hoverRow = -1;
  private topicOn: boolean[];
  private riskOn = new Set(['high', 'medium', 'low']);
  private layers: Record<string, boolean> = { c: true, t: true, labels: true };
  private colourBy: ColourBy = 'topic';

  private raf = 0; private visible = true;
  private pointers = new Map<number, { x: number; y: number }>();
  private drag: null | { moved: number; pinch: number } = null;
  private mouse = { x: -1, y: -1, inside: false };
  private widths = new Map<string, number>();
  private placed: number[][] = [];
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
    this.topicOn = data.topics.map(() => true);

    this.nodes = data.nodes.map((d, i) => ({
      i, d, nb: [], ed: [], active: true, shown: true, a: 0, sx: 0, sy: 0, sr: 0,
      base: d.k === 'f' ? 3.1 + 0.85 * Math.sqrt(d.n) : d.k === 'c' ? 4.6 + 0.55 * Math.sqrt(d.n) : 1.5 + 0.42 * Math.sqrt(d.n),
    }));
    this.nodes.forEach((n) => this.byId.set(n.d.id, n));
    this.edges = data.edges.map(([a, b, kind], idx) => {
      this.nodes[a].nb.push(b); this.nodes[b].nb.push(a);
      this.nodes[a].ed.push(idx); this.nodes[b].ed.push(idx);
      return { a, b, kind };
    });

    this.frame = [...data.box];
    if (this.mode === 'mini' && opts.focus) {
      this.pinned = this.byId.get(opts.focus) ?? null;
      if (this.pinned) this.frame = this.around(this.pinned);
    }

    this.readPalette();
    this.refilter();
    this.bind();
    this.resize();
    this.need();
  }

  // ------------------------------------------------------------------------------------------
  // Public controls

  get nodeList(): AtlasNode[] { return this.data.nodes; }
  neighbours(id: string): { node: AtlasNode; kind: number }[] {
    const n = this.byId.get(id);
    if (!n) return [];
    return n.ed.map((ei) => { const e = this.edges[ei]; return { node: this.data.nodes[e.a === n.i ? e.b : e.a], kind: e.kind }; });
  }
  setTopic(i: number, on: boolean) { this.topicOn[i] = on; this.refilter(); this.syncHoverTopic(); }
  setRisk(risk: string, on: boolean) { on ? this.riskOn.add(risk) : this.riskOn.delete(risk); this.refilter(); this.need(); }
  setLayer(name: string, on: boolean) { this.layers[name] = on; this.refilter(); this.need(); }
  setColour(c: ColourBy) { this.colourBy = c; this.need(); }
  highlightTopic(i: number) { this.hoverRow = i; this.syncHoverTopic(); }
  zoomBy(f: number) { this.flyTo({ ...this.view, zoom: clamp(this.view.zoom * f, 0.5, 9) }, 240); }
  reset() { this.select(null); this.flyTo(this.home, 520); }

  select(id: string | null, fly = true) {
    const n = id ? this.byId.get(id) ?? null : null;
    this.sel = n;
    if (n && fly) {
      // Bring the page and what it links to into view, without zooming out past the opening view.
      const box = this.around(n);
      const z = clamp(Math.min(this.usable().w / ((box[2] - box[0]) * this.fit), this.usable().h / ((box[3] - box[1]) * this.fit)), this.home.zoom, 2.6);
      this.flyTo({ x: (box[0] + box[2]) / 2, y: (box[1] + box[3]) / 2, zoom: Math.max(z, Math.min(this.view.zoom, 2.6)) }, 620);
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

  /** The box around a page and everything it links to, with room for labels. */
  private around(n: NodeView): [number, number, number, number] {
    let minX = n.d.x, maxX = n.d.x, minY = n.d.y, maxY = n.d.y;
    for (const j of n.nb) {
      const p = this.nodes[j].d;
      minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
    }
    // Never closer than a few neighbours' width, so a page with one link is not blown up to fill the plate.
    const padX = Math.max(UNIT * 1.4, (UNIT * 9 - (maxX - minX)) / 2), padY = Math.max(UNIT * 1.2, (UNIT * 6 - (maxY - minY)) / 2);
    return [minX - padX, minY - padY, maxX + padX, maxY + padY];
  }

  /** The part of the plate the map may use: clear of the captions along the top and bottom edges. */
  private usable() {
    // Topic names stand above the top groups and below the bottom ones, so they need a band of their own.
    const names = this.mode === 'mini' ? 0 : this.topicLabelHeight() + 16;
    const top = (this.mode === 'mini' ? 40 : 38) + names, bottom = (this.mode === 'full' ? 48 : 36) + names;
    const side = this.mode === 'mini' ? 22 : this.W < 560 ? 26 : 48;
    return { x: side, y: top, w: Math.max(40, this.W - side * 2), h: Math.max(40, this.H - top - bottom) };
  }

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
    const interactive = this.mode === 'full';

    on(c, 'pointerdown', (e: PointerEvent) => {
      const p = local(e);
      this.pointers.set(e.pointerId, p);
      this.drag = { moved: 0, pinch: 0 };
      if (!interactive) return; // the small views are links; touch scrolls the page past them
      c.setPointerCapture?.(e.pointerId);
      if (this.pointers.size === 2) {
        const [a, b] = [...this.pointers.values()];
        this.drag.pinch = Math.hypot(a.x - b.x, a.y - b.y);
      }
      this.tween = null;
    });
    on(c, 'pointermove', (e: PointerEvent) => {
      const p = local(e);
      this.mouse = { ...p, inside: true };
      if (!this.drag || !this.pointers.has(e.pointerId) || !interactive) { if (e.pointerType === 'mouse' || !this.drag) this.pick(); return; }
      const prev = this.pointers.get(e.pointerId)!;
      this.pointers.set(e.pointerId, p);
      if (this.pointers.size === 2) {
        const [a, b] = [...this.pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (this.drag.pinch) this.zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, d / this.drag.pinch);
        this.drag.pinch = d;
        this.drag.moved += 10;
        return;
      }
      const dx = p.x - prev.x, dy = p.y - prev.y;
      this.drag.moved += Math.abs(dx) + Math.abs(dy);
      if (this.drag.moved < 4) return;
      const s = this.fit * this.view.zoom;
      this.view.x -= dx / s; this.view.y -= dy / s;
      if (this.hot) this.setHot(null);
      this.need();
    });
    const end = (e: PointerEvent) => {
      const was = this.drag;
      this.pointers.delete(e.pointerId);
      if (this.pointers.size === 0) this.drag = null;
      if (!was || was.moved >= 6 || e.type === 'pointercancel' || !interactive) return;
      this.mouse = { ...local(e), inside: true };
      this.pick();
      this.select(this.hot ? this.hot.d.id : null, false);
    };
    on(c, 'pointerup', end);
    on(c, 'pointercancel', end);
    on(c, 'pointerleave', () => { this.mouse.inside = false; if (!this.drag) this.setHot(null); });

    if (interactive) {
      on(c, 'wheel', (e: WheelEvent) => {
        e.preventDefault();
        const p = local(e);
        this.tween = null;
        this.zoomAt(p.x, p.y, Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0016)));
      }, { passive: false });
      on(c, 'dblclick', (e: MouseEvent) => {
        const p = local(e);
        this.mouse = { ...p, inside: true };
        this.pick();
        if (this.hot) { this.select(this.hot.d.id, true); return; }
        const w = this.toMap(p.x, p.y);
        this.flyTo({ x: w.x, y: w.y, zoom: clamp(this.view.zoom * 1.7, 0.5, 9) }, 320);
      });
      on(c, 'contextmenu', (e: MouseEvent) => e.preventDefault());
      on(c, 'keydown', (e: KeyboardEvent) => {
        const step = 60 / (this.fit * this.view.zoom);
        const move = (dx: number, dy: number) => { this.tween = null; this.view.x += dx; this.view.y += dy; this.need(); };
        if (e.key === 'ArrowLeft') move(-step, 0);
        else if (e.key === 'ArrowRight') move(step, 0);
        else if (e.key === 'ArrowUp') move(0, -step);
        else if (e.key === 'ArrowDown') move(0, step);
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
    const u = this.usable(), f = this.frame;
    this.fit = Math.min(u.w / Math.max(f[2] - f[0], 1), u.h / Math.max(f[3] - f[1], 1));
    // The small plate on a briefing never magnifies its neighbourhood beyond a comfortable reading size.
    if (this.mode === 'mini') this.fit = Math.min(this.fit, 2.3);
    // Centre the frame in the usable part of the plate, which sits a little off the plate's own centre.
    const s = this.fit;
    this.home = { x: (f[0] + f[2]) / 2 - (u.x + u.w / 2 - this.W / 2) / s, y: (f[1] + f[3]) / 2 - (u.y + u.h / 2 - this.H / 2) / s, zoom: 1 };
    if (first) this.view = { ...this.home };
    this.need();
  }

  // ------------------------------------------------------------------------------------------
  // View

  private toMap(sx: number, sy: number) {
    const s = this.fit * this.view.zoom;
    return { x: this.view.x + (sx - this.W / 2) / s, y: this.view.y + (sy - this.H / 2) / s };
  }

  /** Zoom by a factor, keeping the point under the pointer where it is. */
  private zoomAt(sx: number, sy: number, factor: number) {
    const before = this.toMap(sx, sy);
    this.view.zoom = clamp(this.view.zoom * factor, 0.5, 9);
    const after = this.toMap(sx, sy);
    this.view.x += before.x - after.x; this.view.y += before.y - after.y;
    this.need();
  }

  private flyTo(to: View, dur: number) {
    if (this.reduced) { this.view = { ...to }; this.tween = null; this.need(); return; }
    this.tween = { t0: performance.now(), dur, from: { ...this.view }, to: { ...to } };
    this.need();
  }

  /** Ask for a redraw. Frames run only while something is changing. */
  private need() {
    if (this.raf || !this.visible || document.hidden) return;
    this.raf = requestAnimationFrame((t) => {
      this.raf = 0;
      let more = false;
      if (this.tween) {
        const k = clamp((t - this.tween.t0) / this.tween.dur, 0, 1), e = ease(k), f = this.tween.from, g = this.tween.to;
        // Zoom is eased on a log scale so the map does not lurch.
        this.view = { x: f.x + (g.x - f.x) * e, y: f.y + (g.y - f.y) * e, zoom: Math.exp(Math.log(f.zoom) + (Math.log(g.zoom) - Math.log(f.zoom)) * e) };
        if (k >= 1) this.tween = null; else more = true;
      }
      if (this.render()) more = true;
      if (more) this.need();
    });
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
      const score = d - (n.d.k === 't' ? 0 : 3); // nearest, with pages preferred over the tags beside them
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
    const s = this.fit * this.view.zoom, ox = W / 2 - this.view.x * s, oy = H / 2 - this.view.y * s;
    const mini = this.mode === 'mini', full = this.mode === 'full';
    const focusNode = this.hot ?? this.sel ?? this.pinned;
    const lit = focusNode ? new Set<number>([focusNode.i, ...focusNode.nb]) : null;
    if (mini && this.pinned && this.hot && this.hot !== this.pinned) { lit!.clear(); lit!.add(this.pinned.i); this.pinned.nb.forEach((j) => lit!.add(j)); }

    // ---- Graticule: a faint grid of points that travels with the map.
    let step = UNIT * 1.5;
    while (step * s < 22) step *= 2;
    ctx.fillStyle = rgba(P.grid, mini ? 0.7 : 0.9);
    const gx0 = Math.floor(-ox / s / step) * step, gy0 = Math.floor(-oy / s / step) * step;
    for (let gx = gx0; gx * s + ox < W; gx += step) {
      for (let gy = gy0; gy * s + oy < H; gy += step) ctx.fillRect(Math.round(gx * s + ox) - 0.5, Math.round(gy * s + oy) - 0.5, 1.2, 1.2);
    }

    // ---- Place the marks.
    const sizeK = (mini ? 0.92 : this.mode === 'teaser' ? 0.86 : 1) * clamp(Math.pow(s / 1.25, 0.5), 0.7, 2.3);
    let unsettled = false;
    for (const n of this.nodes) {
      n.sx = ox + n.d.x * s; n.sy = oy + n.d.y * s;
      n.sr = n.base * sizeK;
      let target = !n.shown ? 0 : !n.active ? 0.08 : 1;
      if (target === 1 && lit && !lit.has(n.i)) target = mini ? 0.26 : 0.16;
      if (target === 1 && this.hoverTopic >= 0 && n.d.k === 'f' && n.d.d !== this.hoverTopic) target = 0.2;
      if (this.reduced || Math.abs(target - n.a) < 0.012) n.a = target; else { n.a += (target - n.a) * 0.24; unsettled = true; }
    }

    // ---- Links. Shared-tag lines are fainter than links between pages.
    const hotEdges: number[] = [];
    for (let kind = 1; kind >= 0; kind--) {
      for (let dim = 0; dim < 2; dim++) {
        ctx.beginPath();
        let any = false;
        for (let ei = 0; ei < this.edges.length; ei++) {
          const e = this.edges[ei];
          if (e.kind !== kind) continue;
          const a = this.nodes[e.a], b = this.nodes[e.b];
          if (!a.shown || !b.shown || !a.active || !b.active) continue;
          const isHot = !!focusNode && (e.a === focusNode.i || e.b === focusNode.i);
          if (isHot) { if (!dim) hotEdges.push(ei); continue; }
          const faded = !!lit || (this.hoverTopic >= 0 && a.d.d !== this.hoverTopic && b.d.d !== this.hoverTopic);
          if (faded !== !!dim) continue;
          ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy);
          any = true;
        }
        if (!any) continue;
        ctx.strokeStyle = rgba(P.edge, (kind === 0 ? 0.3 : 0.13) * (dim ? (mini ? 0.5 : 0.3) : 1));
        ctx.lineWidth = kind === 0 ? 0.9 : 0.7;
        ctx.stroke();
      }
    }
    if (focusNode && hotEdges.length) {
      ctx.lineWidth = 1.15;
      for (const ei of hotEdges) {
        const e = this.edges[ei], a = this.nodes[e.a], b = this.nodes[e.b];
        ctx.strokeStyle = rgba(P.ink, (e.kind === 0 ? 0.85 : 0.42) * Math.min(a.a, b.a));
        ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
      }
    }

    // ---- Marks: tags underneath, then briefings, then concepts.
    const rank = { t: 0, f: 1, c: 2 } as const;
    for (let layer = 0; layer < 3; layer++) {
      for (const n of this.nodes) {
        const d = n.d;
        if (rank[d.k] !== layer || n.a < 0.02) continue;
        const col = this.colourOf(n), r = n.sr, x = n.sx, y = n.sy, a = n.a;
        if (x < -40 || y < -40 || x > W + 40 || y > H + 40) continue;
        const isFocus = n === this.hot || n === this.sel || n === this.pinned;
        if (d.k === 't') {
          ctx.fillStyle = rgba(P.paper, a); ctx.beginPath(); ctx.arc(x, y, r + 1, 0, TAU); ctx.fill();
          ctx.fillStyle = rgba(col, a * 0.78); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
        } else if (d.k === 'f') {
          // A ring of paper keeps the lines from running into the point.
          ctx.fillStyle = rgba(P.paper, a); ctx.beginPath(); ctx.arc(x, y, r + 1.6, 0, TAU); ctx.fill();
          ctx.fillStyle = rgba(col, a); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
          if (d.action === 'act-now') {
            ctx.strokeStyle = rgba(P.high, a); ctx.lineWidth = 1.3;
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
    }

    // ---- Labels. Keep them clear of the captions printed over the plate.
    this.placed = full ? [[0, 0, W, 40], [0, H - 52, 210, H]] : this.mode === 'teaser' ? [[0, 0, W, 38], [0, H - 36, W, H]] : [[0, 0, W, 32], [0, H - 32, 180, H]];
    if (!mini) this.topicLabels(s, ox, oy);
    this.nodeLabels(focusNode, s);
    return unsettled;
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
      if (n === own || n.d.k === 't' || n.a < 0.5) continue;
      const m = n.sr + 1.5;
      if (n.sx + m > r[0] && n.sx - m < r[2] && n.sy + m > r[1] && n.sy - m < r[3]) return true;
    }
    return false;
  }

  /** Text with a halo of paper behind it, as on a printed map. */
  private haloText(text: string, x: number, y: number, font: string, colour: string, halo = 3.2) {
    const ctx = this.ctx;
    ctx.font = font;
    ctx.lineJoin = 'round';
    ctx.lineWidth = halo;
    ctx.strokeStyle = rgba(this.pal.paper, 0.92);
    ctx.strokeText(text, x, y);
    ctx.fillStyle = colour;
    ctx.fillText(text, x, y);
  }

  private get smallLabels() { return this.mode === 'teaser' || this.W < 620; }
  private topicLabelHeight() { return this.smallLabels ? 30 : 34; }

  /** Each topic is named beside its own group: above it in the top half of the map, below it in the bottom half. */
  private topicLabels(s: number, ox: number, oy: number) {
    const ctx = this.ctx, P = this.pal;
    const small = this.smallLabels;
    const f1 = `500 ${small ? 14 : 16.5}px ${P.serif}`, f2 = `400 ${small ? 8.5 : 9.5}px ${P.mono}`;
    const midY = (this.data.box[1] + this.data.box[3]) / 2;
    this.data.topics.forEach((t, ti) => {
      if (!t.at) return;
      const above = t.at.y <= midY;
      const x = ox + t.at.x * s, edge = oy + (above ? t.at.top : t.at.bottom) * s + (above ? -14 : 14);
      const title = small ? t.short : t.label, sub = `${t.briefed} ${t.briefed === 1 ? 'BRIEFING' : 'BRIEFINGS'}`;
      const w = Math.max(this.measure(title, f1), this.measure(sub, f2) * 1.1) + 8, h = this.topicLabelHeight();
      const x0 = clamp(x - w / 2, 6, this.W - w - 6), y0 = above ? edge - h : edge;
      // A name that would be cut by the edge of the plate, or run under its captions, is left out.
      if (x < 0 || x > this.W || y0 < 36 || y0 + h > this.H - 4) return;
      if (!this.free([x0, y0, x0 + w, y0 + h])) return;
      this.placed.push([x0, y0, x0 + w, y0 + h]);
      const off = this.topicOn[ti] === false;
      const dim = off ? 0.32 : this.hoverTopic >= 0 && this.hoverTopic !== ti ? 0.42 : 1;
      const cx = x0 + w / 2;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      this.haloText(title, cx, y0 + (small ? 13 : 15), f1, rgba(P.ink, dim));
      // A short rule in the topic's colour ties the name to its points.
      const tw = this.measure(sub, f2) * 1.1;
      (ctx as any).letterSpacing = '0.1em';
      this.haloText(sub, cx + 7, y0 + (small ? 26 : 29), f2, rgba(P.inkDim, dim), 2.6);
      (ctx as any).letterSpacing = '0px';
      ctx.fillStyle = rgba(P.topic[ti], dim);
      ctx.beginPath(); ctx.arc(cx - tw / 2 - 2, y0 + (small ? 23 : 25.6), 3, 0, TAU); ctx.fill();
    });
    ctx.textAlign = 'left';
  }

  private nodeLabels(focusNode: NodeView | null, s: number) {
    const ctx = this.ctx, P = this.pal;
    const mini = this.mode === 'mini', teaser = this.mode === 'teaser';
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
      // The best-connected pages are named first; more names appear as the reader zooms in.
      const area = (this.W * this.H) / 62000;
      const budget = Math.round(clamp(area * Math.pow(this.view.zoom, 1.5), 3, 70) * (teaser ? 0.6 : 1));
      const tagsToo = s > 2.4;
      const auto = this.nodes.filter((n) => n.shown && n.active && inView(n) && (n.d.k !== 't' || tagsToo) && (this.hoverTopic < 0 || n.d.k !== 'f' || n.d.d === this.hoverTopic))
        .sort((a, b) => (b.d.k === 'c' ? 100 : b.d.k === 't' ? -4 : 0) + b.d.n - ((a.d.k === 'c' ? 100 : a.d.k === 't' ? -4 : 0) + a.d.n));
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
      if (!strong && labelFrom && n.sx < labelFrom.sx) tries.unshift(tries.splice(1, 1)[0]);
      let spot: number[] | null = null;
      for (const [x, y] of tries) {
        const xx = clamp(x, 3, this.W - w - 3), yy = clamp(y, 3, this.H - h - 3);
        if (!strong && (xx !== x || yy !== y)) continue;
        const rect = [xx - 3, yy - 2, xx + w + 3, yy + h + 2];
        if (this.free(rect) && (strong || !this.covers(rect, n))) { spot = [xx, yy]; this.placed.push(rect); break; }
      }
      if (!spot) {
        if (!strong) continue;
        spot = [clamp(n.sx + gap, 3, this.W - w - 3), clamp(n.sy - h / 2, 3, this.H - h - 3)];
      }
      const [x, y] = spot;
      if (!strong) {
        this.haloText(text, x + pad, y + h / 2 + 0.5, font, rgba(d.k === 'c' ? P.ink : tag ? P.inkDim : mix(P.ink, P.inkDim, 0.3), 1));
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
