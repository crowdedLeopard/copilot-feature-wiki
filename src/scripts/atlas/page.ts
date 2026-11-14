/** Wires the /atlas/ page: the renderer, the inspector, search and the filter controls. */
import { Atlas, loadAtlas, type ColourBy, type Pick, type RadarItem } from './engine';
import type { AtlasNode } from '../../lib/graph';
import { ACTION, COST, IMPACT, RISK, STATUS, formatDate, href } from '../../lib/site';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

type Child = Node | string | null | false | undefined;
function h<K extends keyof HTMLElementTagNameMap>(tag: K, attrs: Record<string, string | null | undefined> = {}, ...children: Child[]): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) el.setAttribute(k, v);
  for (const c of children) if (c) el.append(c);
  return el;
}

const KIND: Record<string, string> = { f: 'Briefing', c: 'Concept', t: 'Tag', p: 'Product' };

function rating(kind: 'risk' | 'cost' | 'impact', value: string) {
  const scale = (kind === 'risk' ? RISK : kind === 'cost' ? COST : IMPACT) as Record<string, { label: string; rank: number; help: string }>;
  const entry = scale[value] ?? { label: value, rank: 0, help: '' };
  const filled = Math.round(Math.min(entry.rank, 3));
  const tone = kind === 'cost' ? (value === 'high' ? 'high' : value === 'variable' ? 'variable' : value === 'medium' ? 'medium' : 'neutral') : value;
  const pips = h('span', { class: 'pips', 'aria-hidden': 'true' });
  for (let i = 0; i < 3; i++) pips.append(h('i', { class: `pip${i < filled ? ' pip--on' : ''}` }));
  return h('span', { class: `rating rating--${tone}`, title: entry.help, 'aria-label': `${kind} ${entry.label}` },
    h('span', { class: 'rating__label' }, kind), pips, h('span', { class: 'rating__value' }, entry.label));
}

export async function initAtlasPage() {
  const root = document.getElementById('atlas');
  const canvas = document.getElementById('atlas-canvas') as HTMLCanvasElement | null;
  const insp = document.getElementById('atlas-inspector');
  if (!root || !canvas || !insp) return;
  const idle = [...insp.childNodes].map((n) => n.cloneNode(true));

  let data;
  try { data = await loadAtlas(BASE); } catch {
    root.querySelector('.atlas__loading')!.textContent = 'The atlas could not be loaded. The pages are listed under Index below.';
    return;
  }

  let pinned: Pick = null;

  const show = (pick: Pick) => {
    insp.replaceChildren();
    if (!pick) { insp.append(...idle.map((n) => n.cloneNode(true))); return; }
    const card = pick.type === 'radar' ? radarCard(pick.item) : nodeCard(pick.node);
    insp.append(...(card.filter(Boolean) as (Node | string)[]));
  };

  const linkRow = (n: AtlasNode, label: string) => {
    const b = h('button', { type: 'button' }, h('span', {}, n.k === 'f' ? n.t : n.l), h('span', { class: 'k' }, label));
    b.addEventListener('click', () => atlas.select(n.id));
    return h('li', {}, b);
  };

  function nodeCard(n: AtlasNode): Child[] {
    const desk = n.d >= 0 ? data!.desks[n.d] : null;
    const out: Child[] = [];
    const eyebrow = h('div', { class: 'eyebrow' }, h('span', {}, KIND[n.k]));
    if (desk) eyebrow.append(h('span', { class: 'sep' }), h('span', {}, desk.label));
    out.push(eyebrow, h('h2', { class: 'insp__title' }, h('a', { href: n.u }, n.t)));
    if (n.s) out.push(h('p', { class: 'insp__sum' }, n.s));
    if (n.k === 'f') {
      const act = (ACTION as Record<string, { label: string; help: string }>)[n.action ?? ''];
      const st = (STATUS as Record<string, { label: string }>)[n.status ?? ''];
      out.push(h('div', { class: 'insp__facts' },
        act && h('span', { class: `badge badge--${n.action}`, title: act.help }, act.label),
        st && h('span', { class: `badge badge--status-${n.status}` }, st.label),
        rating('risk', n.risk ?? ''), rating('cost', n.cost ?? ''), rating('impact', n.impact ?? '')));
    } else if (!n.s) {
      out.push(h('p', { class: 'insp__sum' }, n.k === 't' ? `${n.n} pages carry this tag.` : `${n.n} ${n.n === 1 ? 'briefing covers' : 'briefings cover'} this product.`));
    }
    const go = n.k === 'f' ? 'Open briefing' : n.k === 'c' ? 'Open concept' : n.k === 't' ? 'Open tag page' : 'List its briefings';
    out.push(h('div', { class: 'insp__go' }, h('a', { class: 'btn', href: n.u }, go), n.updated ? h('span', { class: 'muted' }, `Updated ${formatDate(n.updated)}`) : null));
    const links = atlas.neighbours(n.id).sort((a, b) => a.kind - b.kind || (a.node.k === 'f' ? 0 : 1) - (b.node.k === 'f' ? 0 : 1) || b.node.n - a.node.n);
    if (links.length) {
      const ul = h('ul', { class: 'insp__links' });
      for (const l of links) ul.append(linkRow(l.node, l.kind === 0 ? (l.node.k === 'c' ? 'Concept' : 'Related') : l.node.k === 'f' ? (n.k === 't' ? 'Tagged' : n.k === 'p' ? 'Covers' : 'Depends') : KIND[l.node.k]));
      out.push(ul);
    }
    return out;
  }

  function radarCard(it: RadarItem): Child[] {
    const desk = data!.desks[it.desk];
    const st = (STATUS as Record<string, { label: string }>)[it.status];
    return [
      h('div', { class: 'eyebrow' }, h('span', {}, 'On the radar'), h('span', { class: 'sep' }), h('span', {}, desk.label)),
      h('h2', { class: 'insp__title' }, h('a', { href: `https://www.microsoft.com/microsoft-365/roadmap?id=${it.id}`, rel: 'noopener' }, it.title)),
      h('div', { class: 'insp__facts', style: 'margin-top:0.6rem' }, st && h('span', { class: `badge badge--status-${it.status}` }, st.label), h('span', { class: 'mono small muted' }, `Roadmap ${it.id} · changed ${formatDate(it.modified)}`)),
      h('p', { class: 'insp__sum' }, 'Tracked from the Microsoft 365 Roadmap. No briefing has been written yet; the daily run takes the highest-priority items first.'),
      h('div', { class: 'insp__go' }, h('a', { class: 'btn btn--outline', href: `https://www.microsoft.com/microsoft-365/roadmap?id=${it.id}`, rel: 'noopener' }, 'Roadmap entry'), h('a', { href: href(`/radar/${desk.id}/`) }, `${desk.short} radar`)),
    ];
  }

  const atlas = new Atlas(canvas, data, {
    mode: 'full',
    onHover: (pick) => { if (!pinned) show(pick); },
    onSelect: (pick) => {
      pinned = pick;
      show(pick);
      const url = new URL(location.href);
      if (pick?.type === 'node') url.searchParams.set('n', pick.node.id); else url.searchParams.delete('n');
      history.replaceState(null, '', url);
    },
  });
  root.dataset.ready = 'true';

  // The radar layer is the heavy part of the data, so it arrives after the first frame.
  const radarN = document.getElementById('atlas-radar-n');
  fetch(`${BASE}/atlas-radar.json`).then((r) => r.json()).then((radar) => {
    atlas.loadRadar(radar);
    if (radarN) radarN.textContent = radar.items.length.toLocaleString('en-GB');
  }).catch(() => { if (radarN) radarN.textContent = '0'; });

  const start = new URLSearchParams(location.search).get('n');
  if (start && data.nodes.some((n) => n.id === start)) atlas.select(start);

  // ---- Stage buttons
  document.getElementById('atlas-reset')?.addEventListener('click', () => atlas.reset());
  document.getElementById('atlas-in')?.addEventListener('click', () => atlas.zoomBy(1.35));
  document.getElementById('atlas-out')?.addEventListener('click', () => atlas.zoomBy(1 / 1.35));
  const spin = document.getElementById('atlas-spin');
  spin?.setAttribute('aria-pressed', String(atlas.spinning));
  spin?.addEventListener('click', () => { const on = spin.getAttribute('aria-pressed') !== 'true'; spin.setAttribute('aria-pressed', String(on)); atlas.setSpin(on); });

  // ---- Colour
  const colour = document.getElementById('atlas-colour');
  colour?.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest('button');
    if (!b) return;
    colour.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    atlas.setColour(b.dataset.colour as ColourBy);
  });

  // ---- Desks: click to hide or show a region, hover to light it.
  const desks = document.getElementById('atlas-desks');
  const deskButtons = Array.from(desks?.querySelectorAll<HTMLButtonElement>('button') ?? []);
  deskButtons.forEach((b) => {
    const i = Number(b.dataset.desk);
    b.addEventListener('click', () => { const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', String(on)); atlas.setDesk(i, on); });
    b.addEventListener('pointerenter', () => atlas.highlightDesk(i));
    b.addEventListener('pointerleave', () => atlas.highlightDesk(-1));
    b.addEventListener('focus', () => atlas.highlightDesk(i));
    b.addEventListener('blur', () => atlas.highlightDesk(-1));
  });
  document.getElementById('atlas-desks-all')?.addEventListener('click', () => deskButtons.forEach((b) => { b.setAttribute('aria-pressed', 'true'); atlas.setDesk(Number(b.dataset.desk), true); }));

  document.querySelectorAll<HTMLButtonElement>('#atlas-risk button').forEach((b) => b.addEventListener('click', () => {
    const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', String(on)); atlas.setRisk(b.dataset.risk!, on);
  }));
  document.querySelectorAll<HTMLButtonElement>('#atlas-layers button').forEach((b) => b.addEventListener('click', () => {
    const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', String(on)); atlas.setLayer(b.dataset.layer!, on);
  }));

  // ---- Find
  const find = document.getElementById('atlas-find') as HTMLInputElement | null;
  const hits = document.getElementById('atlas-hits');
  if (find && hits) {
    const run = () => {
      const q = find.value.trim().toLowerCase();
      hits.replaceChildren();
      if (!q) return;
      const words = q.split(/\s+/);
      const found = data!.nodes.filter((n) => { const hay = `${n.t} ${n.id}`.toLowerCase(); return words.every((w) => hay.includes(w)); })
        .sort((a, b) => 'fctp'.indexOf(a.k) - 'fctp'.indexOf(b.k) || b.n - a.n).slice(0, 7);
      if (!found.length) { hits.append(h('li', { class: 'muted small', style: 'padding:0.4rem 0' }, 'Nothing in the atlas matches.')); return; }
      for (const n of found) {
        const b = h('button', { type: 'button' }, h('span', {}, n.t), h('span', { class: 'k' }, KIND[n.k]));
        b.addEventListener('click', () => { atlas.select(n.id); find.value = ''; hits.replaceChildren(); });
        hits.append(h('li', {}, b));
      }
    };
    find.addEventListener('input', run);
    find.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); (hits.querySelector('button') as HTMLButtonElement | null)?.click(); }
      else if (e.key === 'Escape') { find.value = ''; hits.replaceChildren(); }
    });
  }
}
