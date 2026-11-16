/**
 * The source watch: which Microsoft pages each live briefing rests on, and whether they have changed since the
 * briefing was checked. pipeline/watch-sources.mjs runs it daily with no model; verify-tasks.mjs reads the result
 * and queues a re-check (reason "source-changed") for every page that cites a changed source. State lives in
 * data/sources.json: one entry per URL with the date Microsoft stamps on the page (ms.date), a hash of its article
 * text, when it was last read, when it last changed, and the pages that cite it.
 */
import path from 'node:path';
import { createHash } from 'node:crypto';
import { DATA_DIR, readJson, stripHtml } from './util.mjs';
import { VERIFICATION } from '../../config/taxonomy.mjs';

export const SOURCES_FILE = path.join(DATA_DIR, 'sources.json');
const URL_RE = /https?:\/\/[^\s)"'<>\]]+/g;

/** The page a cited URL names: no fragment, no locale segment, no trailing punctuation or slash. The query stays (Learn's ?view= picks the version). */
export function normaliseUrl(raw) {
  try {
    const u = new URL(String(raw).replace(/[.,;:)\]]+$/, ''));
    u.hash = '';
    u.hostname = u.hostname.toLowerCase();
    u.pathname = u.pathname.replace(/^\/[a-z]{2}-[a-z]{2}(?=\/)/i, '');
    return u.toString().replace(/\/$/, '');
  } catch { return null; }
}

export const isWatched = (url) => { try { return VERIFICATION.watchedHosts.includes(new URL(url).hostname.toLowerCase()); } catch { return false; } };

/** Every watched URL a page cites: in its body, its controls and sources, and in the claims of its last check report. */
export function citedUrls({ data = {}, body = '', report = null } = {}) {
  const found = new Set();
  const add = (text) => { for (const m of String(text || '').match(URL_RE) || []) { const u = normaliseUrl(m); if (u && isWatched(u)) found.add(u); } };
  add(body);
  add(JSON.stringify(data.controls || []));
  add(JSON.stringify(data.sources || []));
  for (const c of report?.claims || []) add(c.source);
  return found;
}

/** What is remembered about one fetched page: the date Microsoft stamps on it and a hash of its article text. */
export function sourceState(html, status = 200) {
  if (!status || status >= 400) return { status, msDate: null, hash: null };
  const meta = (name) => (String(html).match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]*content=["']([^"']*)["']`, 'i')) || String(html).match(new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*name=["']${name}["']`, 'i')) || [])[1] || null;
  const main = (String(html).match(/<main[\s\S]*?<\/main>/i) || String(html).match(/<article[\s\S]*?<\/article>/i) || [String(html)])[0];
  const text = stripHtml(main).replace(/\s+/g, ' ').trim();
  return { status, msDate: meta('ms.date'), hash: createHash('sha256').update(text).digest('hex').slice(0, 32), chars: text.length };
}

/**
 * Did the page change? Microsoft's own date is the signal when it is there (it moves when the content is edited);
 * the text hash stands in only when neither reading carries a date, so a page's changing furniture does not cost a
 * re-check.
 */
export function hasChanged(before, after) {
  if (!before?.hash || !after?.hash) return false;
  if (before.msDate || after.msDate) return before.msDate !== after.msDate;
  return before.hash !== after.hash;
}

export async function loadSources() { return readJson(SOURCES_FILE, { generated: null, sources: {} }); }

/** The latest change date among the sources each page cites: Map slug → 'YYYY-MM-DD'. */
export function sourceChangesByPage(store) {
  const out = new Map();
  for (const s of Object.values(store?.sources || {})) {
    if (!s.changedAt) continue;
    for (const slug of s.pages || []) if (!out.has(slug) || out.get(slug) < s.changedAt) out.set(slug, s.changedAt);
  }
  return out;
}

/** The sources a page cites that changed after a given date. */
export function changedSourcesFor(store, slug, since) {
  return Object.entries(store?.sources || {}).filter(([, s]) => s.changedAt && (!since || s.changedAt > since) && (s.pages || []).includes(slug)).map(([url, s]) => ({ url, changedAt: s.changedAt, msDate: s.msDate, previousMsDate: s.previous?.msDate ?? null }));
}

/** Fetch one page. The fetch implementation is injectable: tests use a stub, and the cloud sandbox cannot reach Learn. */
export async function fetchSource(url, { fetchImpl = fetch, timeoutMs = 20_000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetchImpl(url, { redirect: 'follow', signal: ctrl.signal, headers: { accept: 'text/html,application/xhtml+xml', 'user-agent': 'release-ledger-source-watch/1.0 (+github pages wiki)', 'accept-language': 'en-US,en;q=0.8' } });
    const html = res.ok ? await res.text() : '';
    return sourceState(html, res.status);
  } catch (err) {
    return { status: 0, msDate: null, hash: null, error: err?.name === 'AbortError' ? 'timeout' : String(err?.message || err) };
  } finally { clearTimeout(timer); }
}

/**
 * Re-read the cited pages and update the store in place. `cited` is Map url → Set of slugs. Entries for URLs no page
 * cites any more are dropped. The first reading of a URL is a baseline, not a change. Returns the run's summary.
 */
export async function watch(store, cited, { fetchImpl = fetch, concurrency = 4, limit = 800, date = new Date().toISOString().slice(0, 10), timeoutMs } = {}) {
  store.sources ||= {};
  for (const url of Object.keys(store.sources)) if (!cited.has(url)) delete store.sources[url];
  // Never-read pages first, then the ones read longest ago, so a cap still moves the whole set along.
  const order = [...cited.keys()].sort((a, b) => (store.sources[a]?.checkedAt || '').localeCompare(store.sources[b]?.checkedAt || '') || a.localeCompare(b)).slice(0, Math.max(0, limit));
  const changed = [], unreachable = [], affected = new Set();
  let index = 0, fetched = 0, baselines = 0;
  async function worker() {
    while (index < order.length) {
      const url = order[index++];
      const entry = store.sources[url] || { firstSeen: date, pages: [] };
      entry.pages = [...cited.get(url)].sort();
      const state = await fetchSource(url, { fetchImpl, timeoutMs });
      fetched++;
      entry.checkedAt = date;
      if (!state.hash) { entry.status = state.status; entry.error = state.error || `HTTP ${state.status}`; unreachable.push(url); store.sources[url] = entry; continue; }
      if (!entry.hash) baselines++;
      else if (hasChanged(entry, state)) {
        entry.previous = { msDate: entry.msDate, hash: entry.hash, seenAt: entry.changedAt || entry.firstSeen };
        entry.changedAt = date;
        entry.changes = (entry.changes || 0) + 1;
        changed.push(url);
        for (const slug of entry.pages) affected.add(slug);
      }
      entry.status = state.status; entry.msDate = state.msDate; entry.hash = state.hash; delete entry.error;
      store.sources[url] = entry;
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, Math.min(concurrency, order.length)) }, worker));
  store.generated = new Date().toISOString();
  return { cited: cited.size, fetched, baselines, changed, unreachable, affected: [...affected].sort(), skipped: Math.max(0, cited.size - order.length) };
}
