const RISK_RANK: Record<string, number> = { low: 1, medium: 2, high: 3 };
const ACTION_RANK: Record<string, number> = { 'act-now': 3, prepare: 2, review: 1, none: 0 };

export function initFilters() {
  const list = document.getElementById('f-list');
  const text = document.getElementById('f-text') as HTMLInputElement | null;
  const countEl = document.getElementById('f-count');
  const activeEl = document.getElementById('f-active');
  const empty = document.getElementById('f-empty');
  const reset = document.getElementById('f-reset');
  const sort = document.getElementById('f-sort') as HTMLSelectElement | null;
  if (!list || !text || !countEl || !empty || !reset || !sort) return;

  const rows = Array.from(list.querySelectorAll<HTMLLIElement>('li.row'));
  const boxes = Array.from(document.querySelectorAll<HTMLInputElement>('.fgroup input[type=checkbox]'));
  const multiValued = new Set(['audiences', 'tags']);

  // Preselect from the query string: ?action=act-now&desk=agents&tag=x
  const params = new URLSearchParams(location.search);
  for (const [k, v] of params) {
    const name = k === 'tag' ? 'tags' : k === 'audience' ? 'audiences' : k;
    if (name === 'q') { text.value = v; continue; }
    for (const val of v.split(',')) {
      const box = boxes.find((b) => b.name === name && b.value === val);
      if (box) { box.checked = true; box.closest('details')?.setAttribute('open', ''); }
    }
  }

  function selected(): Record<string, Set<string>> {
    const sel: Record<string, Set<string>> = {};
    for (const b of boxes) if (b.checked) (sel[b.name] ??= new Set()).add(b.value);
    return sel;
  }

  function apply() {
    const sel = selected();
    const q = text!.value.trim().toLowerCase();
    let shown = 0;
    for (const row of rows) {
      let ok = true;
      for (const [name, values] of Object.entries(sel)) {
        const attr = row.dataset[name] ?? '';
        if (multiValued.has(name)) {
          const have = attr.split(' ');
          if (![...values].some((v) => have.includes(v))) { ok = false; break; }
        } else if (!values.has(attr)) { ok = false; break; }
      }
      if (ok && q) ok = (row.dataset.text ?? '').includes(q);
      row.hidden = !ok;
      if (ok) shown++;
    }
    countEl!.textContent = String(shown);
    empty!.hidden = shown > 0;
    const n = Object.values(sel).reduce((a, s) => a + s.size, 0) + (q ? 1 : 0);
    reset!.hidden = n === 0;
    if (activeEl) activeEl.textContent = n ? `· ${n} filter${n === 1 ? '' : 's'} applied` : '';

    // Keep the URL shareable.
    const p = new URLSearchParams();
    for (const [name, values] of Object.entries(sel)) p.set(name === 'tags' ? 'tag' : name, [...values].join(','));
    if (q) p.set('q', q);
    const qs = p.toString();
    history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
  }

  function resort() {
    const mode = sort!.value;
    const sorted = [...rows].sort((a, b) => {
      if (mode === 'title') return (a.dataset.title ?? '').localeCompare(b.dataset.title ?? '');
      if (mode === 'updated') return (b.dataset.updated ?? '').localeCompare(a.dataset.updated ?? '');
      if (mode === 'risk') {
        const d = (RISK_RANK[b.dataset.risk ?? ''] ?? 0) - (RISK_RANK[a.dataset.risk ?? ''] ?? 0);
        return d || (ACTION_RANK[b.dataset.action ?? ''] ?? 0) - (ACTION_RANK[a.dataset.action ?? ''] ?? 0);
      }
      const d = (ACTION_RANK[b.dataset.action ?? ''] ?? 0) - (ACTION_RANK[a.dataset.action ?? ''] ?? 0);
      return d || (RISK_RANK[b.dataset.risk ?? ''] ?? 0) - (RISK_RANK[a.dataset.risk ?? ''] ?? 0) || (b.dataset.updated ?? '').localeCompare(a.dataset.updated ?? '');
    });
    for (const r of sorted) list!.appendChild(r);
  }

  boxes.forEach((b) => b.addEventListener('change', apply));
  text.addEventListener('input', apply);
  sort.addEventListener('change', resort);
  reset.addEventListener('click', () => { boxes.forEach((b) => (b.checked = false)); text!.value = ''; apply(); });
  apply();
}
