/** The two small atlases: the teaser on the home page and the plate inside a briefing or concept. */
import { Atlas, loadAtlas } from './engine';
import type { AtlasData, AtlasNode } from '../../lib/graph';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
let shared: Promise<AtlasData> | null = null;
const data = () => (shared ??= loadAtlas(BASE));

/** Start drawing only when the plate scrolls into view; these pages are for reading first. */
function whenVisible(el: Element, run: () => void) {
  if (!('IntersectionObserver' in window)) { run(); return; }
  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    io.disconnect();
    run();
  }, { rootMargin: '200px' });
  io.observe(el);
}

function mount(link: HTMLAnchorElement, mode: 'teaser' | 'mini', focus?: string) {
  const canvas = link.querySelector('canvas');
  if (!canvas || new URLSearchParams(location.search).has('print')) return;
  whenVisible(link, async () => {
    let atlas: AtlasData;
    try { atlas = await data(); } catch { return; }
    if (focus && !atlas.nodes.some((n) => n.id === focus)) { link.hidden = true; return; }
    let hot: AtlasNode | null = null;
    new Atlas(canvas, atlas, { mode, focus, onHover: (pick) => { hot = pick?.type === 'node' ? pick.node : null; } });
    link.dataset.ready = 'true';
    // The plate is a plain link to the atlas. With a node under the pointer, go to that node instead.
    link.addEventListener('click', (e) => {
      if (!hot || hot.id === focus || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      location.href = mode === 'mini' ? hot.u : `${BASE}/atlas/?n=${encodeURIComponent(hot.id)}`;
    });
  });
}

export function initAtlasEmbeds() {
  document.querySelectorAll<HTMLAnchorElement>('a[data-atlas-teaser]').forEach((el) => mount(el, 'teaser'));
  document.querySelectorAll<HTMLAnchorElement>('a[data-atlas-mini]').forEach((el) => mount(el, 'mini', el.dataset.atlasMini));
}
