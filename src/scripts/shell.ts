import MiniSearch from 'minisearch';

type Doc = { id: string; title: string; summary: string; kind: 'briefing' | 'concept'; url: string; desk?: string; tags: string[]; products?: string[]; action?: string; risk?: string };

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

function theme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effective = current ?? (systemDark ? 'dark' : 'light');
    const next = effective === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('rl-theme', next); } catch {}
  });
}

function menu() {
  const btn = document.getElementById('menu-toggle');
  const head = document.getElementById('masthead');
  if (!btn || !head) return;
  btn.addEventListener('click', () => {
    const open = head.getAttribute('data-open') === 'true';
    head.setAttribute('data-open', String(!open));
    btn.setAttribute('aria-expanded', String(!open));
  });
}

function search() {
  const dialog = document.getElementById('search') as HTMLDialogElement | null;
  const input = document.getElementById('search-input') as HTMLInputElement | null;
  const list = document.getElementById('search-results');
  const openBtn = document.getElementById('search-open');
  if (!dialog || !input || !list || !openBtn || typeof dialog.showModal !== 'function') return;

  let index: MiniSearch<Doc> | null = null;
  let docs: Doc[] = [];
  let loading: Promise<void> | null = null;
  let selected = 0;

  async function load() {
    if (index) return;
    if (!loading) {
      loading = fetch(`${BASE}/search.json`).then((r) => r.json()).then((data: Doc[]) => {
        docs = data;
        index = new MiniSearch<Doc>({
          fields: ['title', 'summary', 'tags', 'products', 'desk'],
          storeFields: ['title', 'summary', 'kind', 'url', 'desk', 'action', 'risk'],
          searchOptions: { boost: { title: 3, tags: 2 }, prefix: true, fuzzy: 0.2, combineWith: 'AND' },
        });
        index.addAll(data);
      });
    }
    await loading;
  }

  function render(items: Doc[]) {
    list!.innerHTML = '';
    selected = 0;
    if (!items.length) {
      const li = document.createElement('li');
      li.innerHTML = `<a aria-disabled="true"><span class="t muted">No matches. Try a product, a tag or a roadmap ID.</span></a>`;
      list!.appendChild(li);
      return;
    }
    items.forEach((d, i) => {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      const a = document.createElement('a');
      a.href = d.url;
      if (i === 0) a.setAttribute('aria-selected', 'true');
      a.innerHTML = `<span class="k">${d.kind === 'concept' ? 'Concept' : (d.action === 'act-now' ? 'Act now' : d.desk ?? 'Briefing')}</span><span class="t"></span><span class="s"></span>`;
      (a.querySelector('.t') as HTMLElement).textContent = d.title;
      (a.querySelector('.s') as HTMLElement).textContent = d.summary;
      li.appendChild(a);
      list!.appendChild(li);
    });
  }

  function run() {
    const q = input!.value.trim();
    if (!index) return;
    if (!q) { render(docs.filter((d) => d.action === 'act-now').slice(0, 8)); return; }
    const hits = index.search(q).slice(0, 12).map((h) => h as unknown as Doc);
    render(hits);
  }

  function open() {
    dialog!.showModal();
    input!.value = '';
    input!.focus();
    load().then(run);
  }

  openBtn.addEventListener('click', open);
  document.addEventListener('keydown', (e) => {
    const target = e.target as HTMLElement | null;
    const typing = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); dialog!.open ? dialog!.close() : open(); }
    else if (e.key === '/' && !typing && !dialog!.open) { e.preventDefault(); open(); }
  });
  input.addEventListener('input', run);
  input.addEventListener('keydown', (e) => {
    const links = Array.from(list!.querySelectorAll('a[href]')) as HTMLAnchorElement[];
    if (!links.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      links[selected]?.removeAttribute('aria-selected');
      selected = (selected + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
      links[selected].setAttribute('aria-selected', 'true');
      links[selected].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      links[selected]?.click();
    }
  });
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog!.close(); });
}

function tocSpy() {
  const links = Array.from(document.querySelectorAll('.toc a[href^="#"]')) as HTMLAnchorElement[];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const map = new Map<string, HTMLAnchorElement>();
  links.forEach((a) => map.set(decodeURIComponent(a.hash.slice(1)), a));
  const headings = Array.from(map.keys()).map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((a) => a.removeAttribute('aria-current'));
        map.get(en.target.id)?.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });
  headings.forEach((h) => io.observe(h));
}

export function initShell() {
  theme();
  menu();
  search();
  tocSpy();
}
