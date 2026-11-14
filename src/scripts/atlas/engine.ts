/**
 * Atlas renderer. Draws the ledger as a rotating, stippled brain on a 2D canvas: the cortex as a
 * shell of points, briefings as nodes in their desk's lobe, links as fibres bowed through the middle.
 *
 * One engine, three modes:
 *   full    the /atlas/ page: rotate, zoom, hover, select, filters
 *   teaser  the home page: slow spin, hover labels, click through to the atlas
 *   mini    the panel on a briefing or concept: one node and its neighbours lit, the rest faint
 *
 * No dependencies. Colours come from CSS custom properties on the host element, so the atlas follows
 * the site theme.
 */
import { buildShell, sampleRegion, rng, hash32, CORE, REGIONS, type Shell, type Vec3 } from '../../lib/brain';
import type { AtlasData, AtlasNode } from '../../lib/graph';

export type Mode = 'full' | 'teaser' | 'mini';
export type ColourBy = 'desk' | 'risk' | 'action';
export interface RadarItem { id: number; desk: number; status: string; title: string; modified: string }
export type Pick = { type: 'node'; node: AtlasNode; index: number } | { type: 'radar'; item: RadarItem } | null;

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
  sx: number; sy: number; sz: number; sr: number;
}

interface EdgeView { a: number; b: number; kind: number; c: Vec3; seed: number }

interface Palette {
  glow: boolean;
  desk: RGB[];
  stipple: RGB; edge: RGB; ink: RGB; inkDim: RGB; labelBg: RGB; neutral: RGB; paper: RGB;
  high: RGB; medium: RGB; low: RGB;
  mono: string; sans: string;
}

const TAU = Math.PI * 2;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const rgba = (c: RGB, a: number) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a.toFixed(3)})`;
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
  private sprites = new Map<string, HTMLCanvasElement>();

  private W = 0; private H = 0; private dpr = 1;
  private yaw = -0.55; private pitch = 0.2; private zoom = 1; private panX = 0; private panY = 0;
  private home = { yaw: -0.55, pitch: 0.2, zoom: 1 };
  private tween: null | { t0: number; dur: number; from: number[]; to: number[] } = null;
  private m = new Float32Array(9);

  private shell: Shell;
  private bucketXY: Float32Array[] = [];
  private bucketN = new Int32Array(24);
  private nodes: NodeView[];
  private edges: EdgeView[];
  private order: NodeView[];
  private byId = new Map<string, NodeView>();

  private radar: null | { pos: Float32Array; desk: Uint8Array; sx: Float32Array; sy: Float32Array; sz: Float32Array; items: RadarItem[] } = null;
  private hotRadar = -1;
  private selRadar = -1;

  private hot: NodeView | null = null;
  private sel: NodeView | null = null;
  private pinned: NodeView | null = null; // mini mode focus
  private hoverDesk = -1;
  private deskOn: boolean[];
  private riskOn = new Set(['high', 'medium', 'low']);
  private layers: Record<string, boolean> = { c: true, t: true, p: true, radar: true, labels: true };
  private colourBy: ColourBy = 'desk';
  private spin = true;

  private running = false; private visible = true; private raf = 0; private frame = 0;
  private lastT = 0; private lastTouch = 0; private spinEase = 0; private time = 0;
  private pointers = new Map<number, { x: number; y: number }>();
  private drag: null | { x: number; y: number; moved: number; mode: 'rotate' | 'pan'; pinch: number } = null;
  private mouse = { x: -1, y: -1, inside: false };
  private pulses: { e: number; t0: number; dir: 1 | -1 }[] = [];
  private nextPulse = 0;
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
    this.deskOn = data.desks.map(() => true);

    const small = Math.min(window.innerWidth, 900) < 700;
    this.shell = buildShell(this.mode === 'full' ? (small ? 5200 : 9500) : this.mode === 'teaser' ? (small ? 3600 : 6000) : 4200);
    for (let b = 0; b < 24; b++) this.bucketXY.push(new Float32Array(this.shell.count * 2));

    this.nodes = data.nodes.map((d, i) => ({
      i, d, nb: [], ed: [], active: true, shown: true, a: 0, sx: 0, sy: 0, sz: 0, sr: 0,
      base: d.k === 'f' ? 3.0 + 0.95 * Math.sqrt(d.n) : d.k === 'c' ? 4.2 + 0.7 * Math.sqrt(d.n) : d.k === 't' ? 1.5 + 0.55 * Math.sqrt(d.n) : 2.2 + 0.5 * Math.sqrt(d.n),
    }));
    this.nodes.forEach((n) => this.byId.set(n.d.id, n));
    this.order = [...this.nodes];
    this.edges = data.edges.map(([a, b, kind], idx) => {
      const p = data.nodes[a].p, q = data.nodes[b].p;
      const mid: Vec3 = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2, (p[2] + q[2]) / 2];
      const len = Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
      // Long links dive through the middle like association fibres; short ones barely bend.
      const k = clamp(len / 2.4, 0.03, 0.5);
      this.nodes[a].nb.push(b); this.nodes[b].nb.push(a);
      this.nodes[a].ed.push(idx); this.nodes[b].ed.push(idx);
      return { a, b, kind, c: [mid[0] + (CORE[0] - mid[0]) * k, mid[1] + (CORE[1] - mid[1]) * k, mid[2] + (CORE[2] - mid[2]) * k] as Vec3, seed: (hash32(`${a}:${b}`) % 1000) / 1000 };
    });

    if (this.mode === 'mini' && opts.focus) {
      this.pinned = this.byId.get(opts.focus) ?? null;
      this.layers.labels = false;
      if (this.pinned) {
        const v = this.sideView(this.pinned.d.p);
        this.home = { yaw: v.yaw, pitch: v.pitch, zoom: 1.2 };
      }
    }
    if (this.mode === 'teaser') this.home = { yaw: -0.5, pitch: 0.16, zoom: 0.9 };
    this.yaw = this.home.yaw; this.pitch = this.home.pitch; this.zoom = this.home.zoom;
    if (this.reduced) this.spin = false;

    this.readPalette();
    this.refilter();
    this.bind();
    this.resize();
    this.start();
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
  setDesk(i: number, on: boolean) { this.deskOn[i] = on; this.refilter(); }
  setRisk(risk: string, on: boolean) { on ? this.riskOn.add(risk) : this.riskOn.delete(risk); this.refilter(); }
  setLayer(name: string, on: boolean) { this.layers[name] = on; this.refilter(); }
  setColour(c: ColourBy) { this.colourBy = c; }
  setSpin(on: boolean) { this.spin = on; this.lastTouch = 0; }
  highlightDesk(i: number) { this.hoverDesk = i; }
  zoomBy(f: number) { this.flyTo({ zoom: clamp(this.zoom * f, 0.55, 7) }, 260); this.touch(); }
  reset() { this.select(null); this.flyTo({ yaw: this.home.yaw, pitch: this.home.pitch, zoom: this.home.zoom, panX: 0, panY: 0 }, 700); }

  select(id: string | null, fly = true) {
    const n = id ? this.byId.get(id) ?? null : null;
    this.sel = n;
    this.selRadar = -1;
    if (n && fly) {
      const v = this.sideView(n.d.p);
      this.flyTo({ yaw: v.yaw, pitch: v.pitch, zoom: clamp(this.zoom, 1, 2.2), panX: 0, panY: 0 }, 850);
    }
    this.opts.onSelect?.(n ? { type: 'node', node: n.d, index: n.i } : null);
  }

  loadRadar(src: { statuses: string[]; items: [number, number, number, string, string][] }) {
    const n = src.items.length;
    const pos = new Float32Array(n * 3), desk = new Uint8Array(n);
    const items: RadarItem[] = [];
    for (let i = 0; i < n; i++) {
      const [id, d, s, title, modified] = src.items[i];
      const region = REGIONS.indexOf(this.data.desks[d].region as (typeof REGIONS)[number]);
      const p = sampleRegion(rng(hash32(`r:${id}`)), REGIONS[region], 0.28, 0.965);
      pos[i * 3] = p[0]; pos[i * 3 + 1] = p[1]; pos[i * 3 + 2] = p[2];
      desk[i] = d;
      items.push({ id, desk: d, status: src.statuses[s], title, modified });
    }
    this.radar = { pos, desk, sx: new Float32Array(n), sy: new Float32Array(n), sz: new Float32Array(n), items };
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    this.running = false;
    this.cleanup.forEach((fn) => fn());
  }

  // ------------------------------------------------------------------------------------------
  // Setup

  private readPalette() {
    const cs = getComputedStyle(this.host);
    const v = (name: string, fb: RGB) => parseColour(cs.getPropertyValue(name), fb);
    this.pal = {
      glow: cs.getPropertyValue('--atlas-glow').trim() === '1',
      desk: this.data.desks.map((d) => v(`--desk-${d.id}`, [120, 120, 120])),
      stipple: v('--atlas-stipple', [60, 60, 64]),
      edge: v('--atlas-edge', [40, 40, 48]),
      ink: v('--atlas-ink', [27, 27, 31]),
      inkDim: v('--atlas-ink-dim', [110, 110, 118]),
      labelBg: v('--atlas-label-bg', [250, 248, 242]),
      neutral: v('--atlas-neutral', [85, 85, 92]),
      paper: v('--atlas-paper', [246, 244, 238]),
      high: v('--risk-high', [168, 50, 31]), medium: v('--risk-medium', [168, 107, 20]), low: v('--risk-low', [59, 122, 63]),
      mono: cs.getPropertyValue('--font-mono').trim() || 'monospace',
      sans: cs.getPropertyValue('--font-body').trim() || 'sans-serif',
    };
    this.sprites.clear();
    this.widths.clear();
  }

  private sprite(c: RGB): HTMLCanvasElement {
    const key = `${c[0] | 0},${c[1] | 0},${c[2] | 0}`;
    let s = this.sprites.get(key);
    if (s) return s;
    s = document.createElement('canvas');
    s.width = s.height = 64;
    const g = s.getContext('2d')!;
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    if (this.pal.glow) {
      grad.addColorStop(0, rgba(c, 0.9)); grad.addColorStop(0.22, rgba(c, 0.42)); grad.addColorStop(0.55, rgba(c, 0.1)); grad.addColorStop(1, rgba(c, 0));
    } else {
      grad.addColorStop(0, rgba(c, 0.55)); grad.addColorStop(0.5, rgba(c, 0.16)); grad.addColorStop(1, rgba(c, 0));
    }
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    this.sprites.set(key, s);
    return s;
  }

  private bind() {
    const c = this.canvas;
    const on = <K extends keyof HTMLElementEventMap>(el: EventTarget, type: K | string, fn: (e: any) => void, o?: AddEventListenerOptions) => {
      el.addEventListener(type, fn as EventListener, o);
      this.cleanup.push(() => el.removeEventListener(type, fn as EventListener, o));
    };

    const ro = new ResizeObserver(() => this.resize());
    ro.observe(c);
    this.cleanup.push(() => ro.disconnect());

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((en) => { this.visible = en[0].isIntersecting; if (this.visible) this.start(); });
      io.observe(c);
      this.cleanup.push(() => io.disconnect());
    }
    on(document, 'visibilitychange', () => { if (!document.hidden) this.start(); });

    const mo = new MutationObserver(() => this.readPalette());
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    this.cleanup.push(() => mo.disconnect());
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    on(mq, 'change', () => this.readPalette());
    if (document.fonts?.ready) document.fonts.ready.then(() => this.widths.clear());

    const local = (e: PointerEvent | WheelEvent | MouseEvent) => { const r = c.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const interactive = this.mode === 'full';

    on(c, 'pointerdown', (e: PointerEvent) => {
      const p = local(e);
      this.pointers.set(e.pointerId, p);
      if (!interactive && e.pointerType !== 'mouse') { this.drag = { ...p, moved: 0, mode: 'rotate', pinch: 0 }; return; }
      c.setPointerCapture?.(e.pointerId);
      this.drag = { ...p, moved: 0, mode: e.button === 2 || e.shiftKey ? 'pan' : 'rotate', pinch: 0 };
      if (this.pointers.size === 2) {
        const [a, b] = [...this.pointers.values()];
        this.drag.pinch = Math.hypot(a.x - b.x, a.y - b.y);
      }
      this.tween = null;
      this.touch();
    });
    on(c, 'pointermove', (e: PointerEvent) => {
      const p = local(e);
      this.mouse = { ...p, inside: true };
      if (!this.drag || !this.pointers.has(e.pointerId)) { this.pick(); return; }
      if (!interactive && e.pointerType !== 'mouse') return; // leave touch scrolling alone outside the atlas page
      const prev = this.pointers.get(e.pointerId)!;
      this.pointers.set(e.pointerId, p);
      if (this.pointers.size === 2 && interactive) {
        const [a, b] = [...this.pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (this.drag.pinch) this.zoom = clamp(this.zoom * (d / this.drag.pinch), 0.55, 7);
        this.drag.pinch = d;
        this.drag.moved += 10;
        this.touch();
        return;
      }
      const dx = p.x - prev.x, dy = p.y - prev.y;
      this.drag.moved += Math.abs(dx) + Math.abs(dy);
      if (this.drag.moved < 4) return;
      if (this.drag.mode === 'pan') { this.panX += dx; this.panY += dy; }
      else { this.yaw += dx * 0.0075; this.pitch = clamp(this.pitch + dy * 0.0075, -1.45, 1.45); }
      if (this.hot) { this.hot = null; this.opts.onHover?.(null); }
      this.touch();
    });
    const end = (e: PointerEvent) => {
      const was = this.drag;
      this.pointers.delete(e.pointerId);
      if (this.pointers.size === 0) this.drag = null;
      if (!was || was.moved >= 6 || e.type === 'pointercancel') return;
      const p = local(e);
      this.mouse = { ...p, inside: true };
      this.pick();
      if (this.mode !== 'full') return; // the small views are links; the page handles the click
      if (this.hot) this.select(this.hot.d.id, false);
      else if (this.hotRadar >= 0 && this.radar) { this.sel = null; this.selRadar = this.hotRadar; this.opts.onSelect?.({ type: 'radar', item: this.radar.items[this.hotRadar] }); }
      else this.select(null);
      this.touch();
    };
    on(c, 'pointerup', end);
    on(c, 'pointercancel', end);
    on(c, 'pointerleave', () => { this.mouse.inside = false; if (!this.drag) { this.setHot(null, -1); } });

    if (interactive) {
      on(c, 'wheel', (e: WheelEvent) => {
        e.preventDefault();
        const p = local(e);
        const z0 = this.zoom, z1 = clamp(z0 * Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0016)), 0.55, 7);
        // Keep the point under the cursor where it is.
        const mx = p.x - this.W / 2, my = p.y - this.H / 2;
        this.panX = mx - (mx - this.panX) * (z1 / z0);
        this.panY = my - (my - this.panY) * (z1 / z0);
        this.zoom = z1;
        this.tween = null;
        this.touch();
      }, { passive: false });
      on(c, 'dblclick', (e: MouseEvent) => {
        this.mouse = { ...local(e), inside: true };
        this.pick();
        if (this.hot) this.select(this.hot.d.id, true); else this.reset();
      });
      on(c, 'contextmenu', (e: MouseEvent) => e.preventDefault());
      on(c, 'keydown', (e: KeyboardEvent) => {
        const step = 0.12;
        const turn = (dy: number, dp: number) => { this.tween = null; this.yaw += dy; this.pitch = clamp(this.pitch + dp, -1.45, 1.45); this.touch(); };
        if (e.key === 'ArrowLeft') turn(-step, 0);
        else if (e.key === 'ArrowRight') turn(step, 0);
        else if (e.key === 'ArrowUp') turn(0, -step);
        else if (e.key === 'ArrowDown') turn(0, step);
        else if (e.key === '+' || e.key === '=') this.zoomBy(1.25);
        else if (e.key === '-' || e.key === '_') this.zoomBy(0.8);
        else if (e.key === '0') this.reset();
        else if (e.key === 'Escape') this.select(null);
        else if (e.key === 'Enter' && this.sel) { location.href = this.sel.d.u; return; }
        else return;
        e.preventDefault();
      });
    }
  }

  private touch() { this.lastTouch = performance.now(); this.spinEase = 0; }

  private resize() {
    const r = this.canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.W = r.width; this.H = r.height;
    this.canvas.width = Math.round(r.width * this.dpr);
    this.canvas.height = Math.round(r.height * this.dpr);
  }

  private start() {
    if (this.running) return;
    this.running = true;
    this.lastT = performance.now();
    const loop = (t: number) => {
      if (!this.visible || document.hidden) { this.running = false; return; }
      this.raf = requestAnimationFrame(loop);
      this.frame++;
      // The small views idle at half rate; nobody is studying them frame by frame.
      if (this.mode !== 'full' && !this.mouse.inside && this.frame % 2) return;
      const dt = Math.min(0.05, (t - this.lastT) / 1000);
      this.lastT = t;
      this.time = t;
      this.step(dt, t);
      this.render(t);
    };
    this.raf = requestAnimationFrame(loop);
  }

  // ------------------------------------------------------------------------------------------
  // Camera

  /** Yaw and pitch that bring a point to face the viewer. */
  private facing(p: Vec3) {
    const yaw = Math.atan2(-p[0], p[2]);
    const z1 = -p[0] * Math.sin(yaw) + p[2] * Math.cos(yaw);
    return { yaw, pitch: clamp(Math.atan2(p[1], z1), -1.1, 1.1) };
  }

  /**
   * A view that shows a point without losing the profile of the brain: turn to the hemisphere the
   * point is in, then only part of the way towards it.
   */
  private sideView(p: Vec3) {
    const f = this.facing(p);
    const side = p[2] >= 0 ? 0 : Math.PI;
    let d = (f.yaw - side) % TAU;
    if (d > Math.PI) d -= TAU; else if (d < -Math.PI) d += TAU;
    return { yaw: side + clamp(d, -0.85, 0.85), pitch: clamp(f.pitch * 0.55, -0.5, 0.5) };
  }

  private flyTo(to: Partial<{ yaw: number; pitch: number; zoom: number; panX: number; panY: number }>, dur: number) {
    const from = [this.yaw, this.pitch, this.zoom, this.panX, this.panY];
    const target = [to.yaw ?? this.yaw, to.pitch ?? this.pitch, to.zoom ?? this.zoom, to.panX ?? this.panX, to.panY ?? this.panY];
    // Turn the short way round.
    let dy = (target[0] - from[0]) % TAU;
    if (dy > Math.PI) dy -= TAU; else if (dy < -Math.PI) dy += TAU;
    target[0] = from[0] + dy;
    if (this.reduced) { [this.yaw, this.pitch, this.zoom, this.panX, this.panY] = target; return; }
    this.tween = { t0: performance.now(), dur, from, to: target };
  }

  private step(dt: number, t: number) {
    if (this.tween) {
      const k = clamp((t - this.tween.t0) / this.tween.dur, 0, 1), e = ease(k);
      const f = this.tween.from, g = this.tween.to;
      this.yaw = f[0] + (g[0] - f[0]) * e; this.pitch = f[1] + (g[1] - f[1]) * e; this.zoom = f[2] + (g[2] - f[2]) * e;
      this.panX = f[3] + (g[3] - f[3]) * e; this.panY = f[4] + (g[4] - f[4]) * e;
      if (k >= 1) this.tween = null;
    } else if (this.mode === 'mini') {
      if (!this.reduced && !this.mouse.inside) this.yaw = this.home.yaw + Math.sin(t / 5200) * 0.34;
    } else if (this.spin && !this.drag && !this.sel && this.selRadar < 0 && !this.hot && this.hotRadar < 0 && t - this.lastTouch > 2200) {
      this.spinEase = Math.min(1, this.spinEase + dt * 0.6);
      this.yaw += dt * (this.mode === 'teaser' ? 0.16 : 0.12) * this.spinEase;
    }
    const cy = Math.cos(this.yaw), sy = Math.sin(this.yaw), cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const m = this.m;
    m[0] = cy; m[1] = 0; m[2] = sy;
    m[3] = sy * sp; m[4] = cp; m[5] = -cy * sp;
    m[6] = -sy * cp; m[7] = sp; m[8] = cy * cp;
  }

  private get scale() { return Math.min(this.W * (this.W < 560 ? 1.14 : 1), this.H * 1.22) * 0.37 * this.zoom; }

  // ------------------------------------------------------------------------------------------
  // Filters and picking

  private refilter() {
    for (const n of this.nodes) {
      const d = n.d;
      n.shown = d.k === 'f' || !!this.layers[d.k];
      n.active = d.k !== 'f' || (this.deskOn[d.d] && this.riskOn.has(d.risk ?? ''));
    }
    // A concept, tag or product stays lit only while something it links to is still in view.
    for (const n of this.nodes) {
      if (n.d.k === 'f') continue;
      n.active = n.nb.some((j) => this.nodes[j].d.k === 'f' ? this.nodes[j].active : true);
      if (!n.nb.some((j) => this.nodes[j].d.k === 'f')) n.active = true;
    }
  }

  private setHot(n: NodeView | null, radar: number) {
    if (n === this.hot && radar === this.hotRadar) return;
    this.hot = n; this.hotRadar = radar;
    this.canvas.style.cursor = n || radar >= 0 ? 'pointer' : this.mode === 'full' ? 'grab' : 'pointer';
    this.opts.onHover?.(n ? { type: 'node', node: n.d, index: n.i } : radar >= 0 && this.radar ? { type: 'radar', item: this.radar.items[radar] } : null);
  }

  private pick() {
    const { x, y } = this.mouse;
    let best: NodeView | null = null, bestScore = Infinity;
    for (const n of this.nodes) {
      if (!n.shown || !n.active) continue;
      if (this.mode === 'mini' && this.pinned && n !== this.pinned && !this.pinned.nb.includes(n.i)) continue;
      const reach = Math.max(n.sr + 5, 9);
      const d = Math.hypot(n.sx - x, n.sy - y);
      if (d > reach) continue;
      const score = d - n.sz * 4; // nearer the pointer, then nearer the viewer
      if (score < bestScore) { bestScore = score; best = n; }
    }
    let r = -1;
    if (!best && this.radar && this.layers.radar && this.mode === 'full') {
      let bd = 36;
      const R = this.radar;
      for (let i = 0; i < R.items.length; i++) {
        if (!this.deskOn[R.desk[i]] || R.sz[i] < -0.25) continue;
        const dx = R.sx[i] - x, dy = R.sy[i] - y, d = dx * dx + dy * dy;
        if (d < bd) { bd = d; r = i; }
      }
    }
    this.setHot(best, r);
  }

  // ------------------------------------------------------------------------------------------
  // Colours

  private colourOf(n: NodeView): RGB {
    const d = n.d, P = this.pal;
    if (d.k !== 'f') return d.k === 'c' ? P.ink : P.neutral;
    if (this.colourBy === 'risk') return d.risk === 'high' ? P.high : d.risk === 'medium' ? P.medium : P.low;
    if (this.colourBy === 'action') return d.action === 'act-now' ? P.high : d.action === 'prepare' ? P.medium : d.action === 'review' ? P.neutral : P.inkDim;
    return P.desk[d.d] ?? P.neutral;
  }

  // ------------------------------------------------------------------------------------------
  // Drawing

  private render(t: number) {
    const ctx = this.ctx, W = this.W, H = this.H, P = this.pal, m = this.m;
    if (!W || !H) return;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const S = this.scale, cx = W / 2 + this.panX, cy = H / 2 + this.panY, CAM = 5;
    const mini = this.mode === 'mini';
    const focusNode = this.hot ?? this.sel ?? this.pinned;
    const lit = focusNode ? new Set<number>([focusNode.i, ...focusNode.nb]) : null;
    if (mini && this.pinned && this.hot && this.hot !== this.pinned) { lit!.clear(); lit!.add(this.pinned.i); this.pinned.nb.forEach((j) => lit!.add(j)); }

    // ---- Cortex: a shell of points, brighter where it faces the viewer, drawn lobe by lobe.
    const sh = this.shell, pos = sh.pos, nrm = sh.nrm;
    this.bucketN.fill(0);
    for (let i = 0; i < sh.count; i++) {
      const x = pos[i * 3], y = pos[i * 3 + 1], z = pos[i * 3 + 2];
      const z2 = m[6] * x + m[7] * y + m[8] * z;
      const k = (CAM / (CAM - z2)) * S;
      const nz = m[6] * nrm[i * 3] + m[7] * nrm[i * 3 + 1] + m[8] * nrm[i * 3 + 2];
      const b = sh.region[i] * 4 + (nz > 0.02 ? 2 : 0) + sh.line[i];
      const o = this.bucketN[b]++ * 2;
      this.bucketXY[b][o] = cx + (m[0] * x + m[2] * z) * k;
      this.bucketXY[b][o + 1] = cy - (m[3] * x + m[4] * y + m[5] * z) * k;
    }
    const regionDesk = REGIONS.map((r) => this.data.desks.findIndex((d) => d.region === r));
    const dot = clamp(1.05 + 0.3 * Math.sqrt(this.zoom), 1.1, 2.1) * (mini ? 0.85 : 1);
    for (let b = 0; b < 24; b++) {
      const n = this.bucketN[b];
      if (!n) continue;
      const desk = regionDesk[b >> 2], front = (b & 2) > 0, line = (b & 1) > 0;
      const hovered = this.hoverDesk === desk;
      const off = desk >= 0 && !this.deskOn[desk];
      let alpha = (front ? (line ? 1 : 0.42) : line ? 0.24 : 0.1) * (P.glow ? 0.8 : 0.9);
      if (off) alpha *= 0.22;
      if (this.hoverDesk >= 0) alpha *= hovered ? 1.7 : 0.45;
      if (mini) alpha *= this.pinned && this.pinned.d.d === desk ? 1.1 : 0.8;
      const tint = desk >= 0 ? mix(P.stipple, P.desk[desk], hovered ? 0.95 : off ? 0 : 0.62) : P.stipple;
      ctx.fillStyle = rgba(tint, Math.min(1, alpha));
      const xy = this.bucketXY[b], s = front ? dot : dot * 0.85, h = s / 2;
      for (let i = 0; i < n; i++) ctx.fillRect(xy[i * 2] - h, xy[i * 2 + 1] - h, s, s);
    }

    // ---- Radar: tracked roadmap items with no briefing yet, dormant in their region.
    const R = this.radar;
    if (R && this.layers.radar && this.mode === 'full') {
      const count = R.items.length;
      const rs = clamp(1.2 + 0.5 * Math.sqrt(this.zoom), 1.5, 3.2);
      for (let pass = 0; pass < 2; pass++) {
        for (let d = 0; d < this.data.desks.length; d++) {
          const off = !this.deskOn[d];
          let alpha = (pass ? 0.62 : 0.2) * (off ? 0.15 : 1) * (lit ? 0.45 : 1);
          if (this.hoverDesk >= 0) alpha *= this.hoverDesk === d ? 1.3 : 0.35;
          ctx.fillStyle = rgba(this.colourBy === 'desk' ? mix(P.desk[d], P.glow ? [255, 255, 255] : P.ink, 0.12) : P.neutral, Math.min(1, alpha));
          for (let i = 0; i < count; i++) {
            if (R.desk[i] !== d) continue;
            if (!pass) {
              const x = R.pos[i * 3], y = R.pos[i * 3 + 1], z = R.pos[i * 3 + 2];
              const z2 = m[6] * x + m[7] * y + m[8] * z, k = (CAM / (CAM - z2)) * S;
              R.sx[i] = cx + (m[0] * x + m[2] * z) * k; R.sy[i] = cy - (m[3] * x + m[4] * y + m[5] * z) * k; R.sz[i] = z2;
            }
            if (R.sz[i] > 0 !== !!pass) continue;
            const s = pass ? rs : rs * 0.8;
            ctx.fillRect(R.sx[i] - s / 2, R.sy[i] - s / 2, s, s);
          }
        }
      }
    }

    // ---- Project the nodes.
    const sizeK = (mini ? 0.66 : this.mode === 'teaser' ? 0.85 : 1) * clamp(Math.pow(this.zoom, 0.55), 0.8, 2.4) * clamp(Math.min(W, H) / 620, 0.72, 1.15);
    for (const n of this.nodes) {
      const p = n.d.p;
      const z2 = m[6] * p[0] + m[7] * p[1] + m[8] * p[2];
      const k = CAM / (CAM - z2);
      n.sx = cx + (m[0] * p[0] + m[2] * p[2]) * k * S;
      n.sy = cy - (m[3] * p[0] + m[4] * p[1] + m[5] * p[2]) * k * S;
      n.sz = z2;
      n.sr = n.base * sizeK * k;
      let target = !n.shown ? 0 : !n.active ? 0.07 : 1;
      if (target === 1 && lit && !lit.has(n.i)) target = mini ? 0.3 : 0.15;
      if (target === 1 && this.hoverDesk >= 0 && n.d.k === 'f' && n.d.d !== this.hoverDesk) target = 0.2;
      n.a += (target - n.a) * (this.reduced ? 1 : 0.2);
    }

    // ---- Fibres.
    const edgeAlpha = P.glow ? [0.3, 0.1, 0.065] : [0.36, 0.13, 0.08];
    const hotEdges: number[] = [];
    for (let kind = 2; kind >= 0; kind--) {
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
          const faded = !!lit || (this.hoverDesk >= 0 && a.d.d !== this.hoverDesk && b.d.d !== this.hoverDesk);
          if (faded !== !!dim) continue;
          const c = e.c, z2 = m[6] * c[0] + m[7] * c[1] + m[8] * c[2], k = (CAM / (CAM - z2)) * S;
          ctx.moveTo(a.sx, a.sy);
          ctx.quadraticCurveTo(cx + (m[0] * c[0] + m[2] * c[2]) * k, cy - (m[3] * c[0] + m[4] * c[1] + m[5] * c[2]) * k, b.sx, b.sy);
          any = true;
        }
        if (!any) continue;
        ctx.strokeStyle = rgba(P.edge, edgeAlpha[kind] * (dim ? (mini ? 0.5 : 0.28) : 1));
        ctx.lineWidth = kind === 0 ? 0.9 : 0.7;
        ctx.stroke();
      }
    }
    const ctrl = (e: EdgeView) => {
      const c = e.c, z2 = m[6] * c[0] + m[7] * c[1] + m[8] * c[2], k = (CAM / (CAM - z2)) * S;
      return [cx + (m[0] * c[0] + m[2] * c[2]) * k, cy - (m[3] * c[0] + m[4] * c[1] + m[5] * c[2]) * k];
    };
    if (focusNode && hotEdges.length) {
      const hc = focusNode.d.k === 'f' ? mix(this.colourOf(focusNode), P.ink, P.glow ? 0.35 : 0.15) : P.ink;
      ctx.lineWidth = 1.15;
      for (const ei of hotEdges) {
        const e = this.edges[ei], a = this.nodes[e.a], b = this.nodes[e.b];
        const [qx, qy] = ctrl(e);
        ctx.strokeStyle = rgba(hc, (e.kind === 0 ? 0.95 : 0.6) * Math.min(a.a, b.a) * (focusNode.a > 0.5 ? 1 : 0.6));
        ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.quadraticCurveTo(qx, qy, b.sx, b.sy); ctx.stroke();
      }
      // Impulses running outwards from the node in focus.
      if (!this.reduced) {
        for (const ei of hotEdges) {
          const e = this.edges[ei];
          const from = e.a === focusNode.i ? this.nodes[e.a] : this.nodes[e.b], to = e.a === focusNode.i ? this.nodes[e.b] : this.nodes[e.a];
          const [qx, qy] = ctrl(e);
          const u = (t / 1500 + e.seed) % 1;
          for (let trail = 0; trail < 3; trail++) {
            const v = u - trail * 0.035;
            if (v < 0) continue;
            const w = 1 - v;
            const px = w * w * from.sx + 2 * w * v * qx + v * v * to.sx, py = w * w * from.sy + 2 * w * v * qy + v * v * to.sy;
            ctx.fillStyle = rgba(P.glow ? [255, 255, 255] : P.ink, (0.9 - trail * 0.3) * Math.sin(Math.PI * v));
            ctx.beginPath(); ctx.arc(px, py, 1.9 - trail * 0.4, 0, TAU); ctx.fill();
          }
        }
      }
    } else if (!this.reduced && !mini) {
      // Idle: the occasional impulse along a related link, so the thing looks alive.
      if (t > this.nextPulse && this.edges.length) {
        this.nextPulse = t + 260 + Math.random() * 520;
        for (let tries = 0; tries < 6; tries++) {
          const ei = (Math.random() * this.edges.length) | 0, e = this.edges[ei];
          const a = this.nodes[e.a], b = this.nodes[e.b];
          if (e.kind === 2 || !a.shown || !b.shown || !a.active || !b.active) continue;
          this.pulses.push({ e: ei, t0: t, dir: Math.random() < 0.5 ? 1 : -1 });
          break;
        }
      }
      this.pulses = this.pulses.filter((p) => t - p.t0 < 1700);
      for (const p of this.pulses) {
        const e = this.edges[p.e];
        const from = p.dir > 0 ? this.nodes[e.a] : this.nodes[e.b], to = p.dir > 0 ? this.nodes[e.b] : this.nodes[e.a];
        const [qx, qy] = ctrl(e);
        const u = (t - p.t0) / 1700;
        for (let trail = 0; trail < 3; trail++) {
          const v = u - trail * 0.03;
          if (v < 0) continue;
          const w = 1 - v;
          const px = w * w * from.sx + 2 * w * v * qx + v * v * to.sx, py = w * w * from.sy + 2 * w * v * qy + v * v * to.sy;
          ctx.fillStyle = rgba(P.glow ? [255, 255, 255] : P.ink, (0.75 - trail * 0.25) * Math.sin(Math.PI * v) * (lit ? 0.3 : 1));
          ctx.beginPath(); ctx.arc(px, py, 1.5 - trail * 0.3, 0, TAU); ctx.fill();
        }
      }
    }

    // ---- Nodes, far side first.
    this.order.sort((a, b) => a.sz - b.sz);
    for (const n of this.order) {
      if (n.a < 0.02) continue;
      const d = n.d, col = this.colourOf(n), r = n.sr, x = n.sx, y = n.sy;
      const depth = clamp(0.72 + n.sz * 0.35, 0.5, 1); // the far side sits back a little
      const a = n.a * depth;
      const isFocus = n === this.hot || n === this.sel || n === this.pinned;
      if (d.k === 'f' || d.k === 'c') {
        const g = r * (P.glow ? 5.2 : 3.6) * (isFocus ? 1.25 : 1);
        ctx.globalAlpha = a * (P.glow ? 0.9 : 0.5);
        if (P.glow) ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(this.sprite(d.k === 'c' ? P.neutral : col), x - g, y - g, g * 2, g * 2);
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
      }
      if (d.k === 'f') {
        if (!P.glow) { ctx.fillStyle = rgba(P.paper, a); ctx.beginPath(); ctx.arc(x, y, r + 1.3, 0, TAU); ctx.fill(); }
        ctx.fillStyle = rgba(P.glow ? mix(col, [255, 255, 255], 0.3) : col, a);
        ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
        if (P.glow) { ctx.fillStyle = rgba([255, 255, 255], a * 0.85); ctx.beginPath(); ctx.arc(x, y, r * 0.42, 0, TAU); ctx.fill(); }
        if (d.action === 'act-now' && n.a > 0.5 && !mini) {
          // Act-now briefings carry a slow beacon.
          const ph = this.reduced ? 0.35 : (t / 2600 + (n.i % 7) / 7) % 1;
          ctx.strokeStyle = rgba(P.high, (1 - ph) * 0.85 * a);
          ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.arc(x, y, r + 2.5 + ph * 11, 0, TAU); ctx.stroke();
        }
      } else if (d.k === 'c') {
        ctx.fillStyle = rgba(P.glow ? [16, 17, 20] : P.paper, a);
        ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
        ctx.strokeStyle = rgba(col, a); ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke();
        ctx.fillStyle = rgba(col, a);
        ctx.beginPath(); ctx.arc(x, y, r * 0.38, 0, TAU); ctx.fill();
      } else if (d.k === 't') {
        ctx.fillStyle = rgba(col, a * 0.85);
        ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
      } else {
        ctx.strokeStyle = rgba(col, a); ctx.lineWidth = 1.2;
        ctx.fillStyle = rgba(P.glow ? [16, 17, 20] : P.paper, a);
        ctx.beginPath(); ctx.moveTo(x, y - r * 1.25); ctx.lineTo(x + r * 1.25, y); ctx.lineTo(x, y + r * 1.25); ctx.lineTo(x - r * 1.25, y); ctx.closePath();
        ctx.fill(); ctx.stroke();
      }
      if (isFocus) {
        ctx.strokeStyle = rgba(P.ink, n === this.hot ? 0.95 : 0.8);
        ctx.lineWidth = 1.3;
        ctx.beginPath(); ctx.arc(x, y, r + (d.k === 'p' ? 5 : 3.5), 0, TAU); ctx.stroke();
      }
    }

    // ---- Labels.
    // Keep labels clear of the captions printed over the plate.
    this.placed = mini || this.mode === 'teaser' ? [[0, 0, W * 0.8, 36], [0, H - 34, 190, H]] : [[0, 0, W, 38], [0, H - 56, 250, H], [W - 96, H - 96, W, H]];
    if (this.mode !== 'mini') this.regionLabels(cx, cy, S, CAM);
    this.nodeLabels(focusNode, lit);
    if (this.hotRadar >= 0 || this.selRadar >= 0) this.radarLabel(this.hotRadar >= 0 ? this.hotRadar : this.selRadar);
    if (this.mode === 'full') this.gizmo();
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

  private regionLabels(cx: number, cy: number, S: number, CAM: number) {
    const ctx = this.ctx, P = this.pal, m = this.m;
    const teaser = this.mode === 'teaser' || this.W < 700;
    const f1 = `600 ${teaser ? 9.5 : 10.5}px ${P.mono}`, f2 = `400 ${teaser ? 8.5 : 9.5}px ${P.mono}`;
    (ctx as any).letterSpacing = '0.09em';
    this.data.desks.forEach((d, di) => {
      // Pin to whichever hemisphere is turned towards the viewer.
      let best: null | { x: number; y: number; z: number } = null;
      for (const side of [1, -1]) {
        const p: Vec3 = [d.anchor[0], d.anchor[1], d.anchor[2] * side];
        const z2 = m[6] * p[0] + m[7] * p[1] + m[8] * p[2], k = (CAM / (CAM - z2)) * S;
        const c = { x: cx + (m[0] * p[0] + m[2] * p[2]) * k, y: cy - (m[3] * p[0] + m[4] * p[1] + m[5] * p[2]) * k, z: z2 };
        if (!best || c.z > best.z) best = c;
      }
      if (!best || best.x < -60 || best.x > this.W + 60 || best.y < -60 || best.y > this.H + 60) return;
      const off = !this.deskOn[di];
      // Stand the label off the silhouette, on the ray from the middle of the brain through its anchor.
      let dx = best.x - cx, dy = best.y - cy;
      const len = Math.hypot(dx, dy) || 1;
      dx /= len; dy /= len;
      const rim = 1 / Math.hypot(dx / (S * 1.04), dy / (S * 0.82));
      const reach = Math.max(len + 16, rim + (teaser ? 6 : 14));
      const lx = cx + dx * reach, ly = cy + dy * reach;
      const title = d.short.toUpperCase();
      const brief = `${d.region.toUpperCase()} · ${d.briefed}`;
      let sub = teaser ? brief : `${d.region.toUpperCase()} · ${d.role.toUpperCase()} — ${d.briefed} BRIEFED`;
      const right = dx >= 0;
      let w = 0, x0 = 0, y0 = 0, rect: number[] = [];
      const fit = (shift: number) => {
        w = Math.max(this.measure(title, f1), this.measure(sub, f2)) * 1.1 + 4;
        x0 = clamp(right ? lx + 6 : lx - 6 - w, 8, this.W - w - 8);
        y0 = clamp(ly - 12 + shift, 46, this.H - 62);
        rect = [x0 - 4, y0 - 4, x0 + w + 4, y0 + 28];
        return this.free(rect);
      };
      // The long caption gives way to the short one where it would be pushed back over the brain or
      // into another label; after that the label steps away from the brain, then towards it.
      let ok = fit(0);
      if (sub !== brief && (!ok || (right ? lx + 6 + w > this.W - 8 : lx - 6 - w < 8))) { sub = brief; ok = fit(0); }
      const away = dy >= 0 ? 17 : -17;
      for (let n = 1; n <= 4 && !ok; n++) ok = fit(away * n);
      for (let n = 1; n <= 3 && !ok; n++) ok = fit(-away * n);
      if (!ok) return;
      this.placed.push(rect);
      const dim = off ? 0.3 : this.hoverDesk >= 0 && this.hoverDesk !== di ? 0.4 : 1;
      ctx.strokeStyle = rgba(P.inkDim, 0.7 * dim);
      ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(best.x, best.y); ctx.lineTo(right ? x0 - 5 : x0 + w + 1, y0 + 6); ctx.stroke();
      ctx.fillStyle = rgba(P.desk[di], dim);
      ctx.beginPath(); ctx.arc(best.x, best.y, 2.2, 0, TAU); ctx.fill();
      ctx.textBaseline = 'top';
      ctx.textAlign = 'left';
      ctx.font = f1; ctx.fillStyle = rgba(P.ink, dim);
      ctx.fillText(title, x0, y0);
      ctx.font = f2; ctx.fillStyle = rgba(P.inkDim, dim);
      ctx.fillText(sub, x0, y0 + 14);
    });
    (ctx as any).letterSpacing = '0px';
  }

  private nodeLabels(focusNode: NodeView | null, lit: Set<number> | null) {
    const ctx = this.ctx, P = this.pal;
    const mini = this.mode === 'mini';
    const queue: { n: NodeView; strong: boolean }[] = [];
    if (this.hot) queue.push({ n: this.hot, strong: true });
    if (this.sel && this.sel !== this.hot) queue.push({ n: this.sel, strong: true });
    if (this.pinned && this.pinned !== this.hot) queue.push({ n: this.pinned, strong: true });
    const labelFrom = mini ? this.pinned : focusNode;
    if (labelFrom && (!mini || this.W > 460)) {
      const around = labelFrom.nb.map((j) => this.nodes[j]).filter((n) => n.shown && n.active && n !== this.hot).sort((a, b) => (a.d.k === 'f' ? 0 : 1) - (b.d.k === 'f' ? 0 : 1) || b.d.n - a.d.n);
      for (const n of around.slice(0, mini ? 9 : 14)) queue.push({ n, strong: false });
    } else if (!focusNode && this.layers.labels) {
      const budget = Math.round(clamp(5 + 9 * (this.zoom - 0.9), 4, 26) * (this.mode === 'teaser' ? 0.5 : 1));
      const auto = this.nodes.filter((n) => n.shown && n.active && n.sz > -0.15 && (n.d.k === 'f' || n.d.k === 'c') && (this.hoverDesk < 0 || n.d.d === this.hoverDesk))
        .sort((a, b) => b.d.n + b.sz * 4 - (a.d.n + a.sz * 4));
      for (const n of auto.slice(0, budget)) queue.push({ n, strong: false });
    }
    const size = mini ? 10.5 : 11.5;
    for (const { n, strong } of queue) {
      if (n.a < 0.3 && !strong) continue;
      const d = n.d;
      const font = `${strong ? 500 : 400} ${size}px ${P.sans}`;
      const text = strong && !mini && this.W > 560 ? (d.t.length > 64 ? d.t.slice(0, 62).trimEnd() + '…' : d.t) : d.l;
      const meta = strong ? this.metaLine(d) : '';
      const mfont = `400 9px ${P.mono}`;
      const w = Math.max(this.measure(text, font), meta ? this.measure(meta, mfont) * 1.09 : 0) + 12;
      const h = meta ? 33 : 19;
      const gap = n.sr + 7;
      const tries = [[n.sx + gap, n.sy - h / 2], [n.sx - gap - w, n.sy - h / 2], [n.sx - w / 2, n.sy - gap - h], [n.sx - w / 2, n.sy + gap]];
      let spot: number[] | null = null;
      for (const [x, y] of tries) {
        const xx = clamp(x, 3, this.W - w - 3), yy = clamp(y, 3, this.H - h - 3);
        if (!strong && (xx !== x || yy !== y)) continue;
        const rect = [xx - 2, yy - 2, xx + w + 2, yy + h + 2];
        if (this.free(rect)) { spot = [xx, yy]; this.placed.push(rect); break; }
      }
      if (!spot) {
        if (!strong) continue;
        spot = [clamp(n.sx + gap, 3, this.W - w - 3), clamp(n.sy - h / 2, 3, this.H - h - 3)];
      }
      const [x, y] = spot;
      ctx.fillStyle = rgba(P.labelBg, strong ? 0.94 : 0.78);
      ctx.fillRect(x, y, w, h);
      if (strong) { ctx.strokeStyle = rgba(P.inkDim, 0.55); ctx.lineWidth = 0.8; ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1); }
      ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
      ctx.font = font; ctx.fillStyle = rgba(strong ? P.ink : mix(P.ink, P.inkDim, 0.35), 1);
      ctx.fillText(text, x + 6, y + (meta ? 11 : h / 2 + 0.5));
      if (meta) {
        (ctx as any).letterSpacing = '0.08em';
        ctx.font = mfont; ctx.fillStyle = rgba(P.inkDim, 1);
        ctx.fillText(meta, x + 6, y + 24);
        (ctx as any).letterSpacing = '0px';
      }
    }
  }

  private metaLine(d: AtlasNode): string {
    if (d.k === 'f') return [this.data.desks[d.d]?.short, RISK_LABEL[d.risk ?? ''], ACTION_LABEL[d.action ?? '']].filter(Boolean).join(' · ').toUpperCase();
    if (d.k === 'c') return `CONCEPT · ${d.n} LINKS`;
    if (d.k === 't') return `TAG · ${d.n} PAGES`;
    return `PRODUCT · ${d.n} BRIEFINGS`;
  }

  private radarLabel(i: number) {
    const R = this.radar;
    if (!R) return;
    const ctx = this.ctx, P = this.pal, it = R.items[i];
    const x0 = R.sx[i], y0 = R.sy[i];
    ctx.strokeStyle = rgba(P.ink, 0.9); ctx.lineWidth = 1.1;
    ctx.beginPath(); ctx.arc(x0, y0, 5, 0, TAU); ctx.stroke();
    const font = `400 11.5px ${P.sans}`, mfont = `400 9px ${P.mono}`;
    const text = it.title.length > 60 ? it.title.slice(0, 58).trimEnd() + '…' : it.title;
    const meta = `ON THE RADAR · ${this.data.desks[it.desk].short.toUpperCase()} · ${it.status.replace(/-/g, ' ').toUpperCase()}`;
    const w = Math.max(this.measure(text, font), this.measure(meta, mfont) * 1.09) + 12, h = 33;
    const x = clamp(x0 + 11, 3, this.W - w - 3), y = clamp(y0 - h / 2, 3, this.H - h - 3);
    ctx.fillStyle = rgba(P.labelBg, 0.94); ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = rgba(P.inkDim, 0.55); ctx.lineWidth = 0.8; ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
    ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    ctx.font = font; ctx.fillStyle = rgba(P.ink, 1); ctx.fillText(text, x + 6, y + 11);
    (ctx as any).letterSpacing = '0.08em';
    ctx.font = mfont; ctx.fillStyle = rgba(P.inkDim, 1); ctx.fillText(meta, x + 6, y + 24);
    (ctx as any).letterSpacing = '0px';
  }

  /** Orientation key: anterior, superior, right. */
  private gizmo() {
    const ctx = this.ctx, P = this.pal, m = this.m;
    const ox = this.W - 46, oy = this.H - 46, L = 24;
    ctx.lineWidth = 0.9;
    ctx.strokeStyle = rgba(P.inkDim, 0.6);
    ctx.beginPath(); ctx.arc(ox, oy, 13, 0, TAU); ctx.stroke();
    ctx.font = `400 8.5px ${P.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const axes: [string, Vec3][] = [['A', [1, 0, 0]], ['S', [0, 1, 0]], ['R', [0, 0, 1]]];
    for (const [name, v] of axes) {
      const x = m[0] * v[0] + m[2] * v[2], y = m[3] * v[0] + m[4] * v[1] + m[5] * v[2], z = m[6] * v[0] + m[7] * v[1] + m[8] * v[2];
      const a = 0.45 + 0.5 * clamp(z * 0.5 + 0.5, 0, 1);
      ctx.strokeStyle = rgba(P.ink, a * 0.8);
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + x * L, oy - y * L); ctx.stroke();
      ctx.fillStyle = rgba(P.ink, a);
      ctx.fillText(name, ox + x * (L + 8), oy - y * (L + 8));
    }
  }
}

export async function loadAtlas(base: string): Promise<AtlasData> {
  const res = await fetch(`${base}/atlas.json`);
  if (!res.ok) throw new Error(`atlas.json ${res.status}`);
  return res.json();
}
