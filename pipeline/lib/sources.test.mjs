import test from 'node:test';
import assert from 'node:assert/strict';
import { normaliseUrl, citedUrls, sourceState, hasChanged, watch, sourceChangesByPage, changedSourcesFor } from './sources.mjs';

const page = (date, text) => `<html><head><meta name="ms.date" content="${date}"><title>x</title></head><body><nav>menu ${Math.random()}</nav><main><h1>Doc</h1><p>${text}</p></main><footer>f</footer></body></html>`;

test('normaliseUrl drops fragments, locale and trailing punctuation but keeps the view query', () => {
  assert.equal(normaliseUrl('https://learn.microsoft.com/en-us/power-platform/admin/x#section),'), 'https://learn.microsoft.com/power-platform/admin/x');
  assert.equal(normaliseUrl('https://Learn.Microsoft.com/graph/api/user-get?view=graph-rest-1.0'), 'https://learn.microsoft.com/graph/api/user-get?view=graph-rest-1.0');
  assert.equal(normaliseUrl('not a url'), null);
});

test('citedUrls gathers watched hosts from body, controls and the report, once each', () => {
  const urls = citedUrls({
    data: { controls: [{ ui: { docs: 'https://learn.microsoft.com/a' }, api: { docs: 'https://learn.microsoft.com/b#x' } }] },
    body: 'See https://learn.microsoft.com/a and https://example.com/not-watched.',
    report: { claims: [{ source: 'https://learn.microsoft.com/c' }, { source: 'roadmap record' }, { source: null }] },
  });
  assert.deepEqual([...urls].sort(), ['https://learn.microsoft.com/a', 'https://learn.microsoft.com/b', 'https://learn.microsoft.com/c']);
});

test('sourceState reads ms.date and hashes the article text only', () => {
  const a = sourceState(page('11/10/2025', 'same words'));
  const b = sourceState(page('11/10/2025', 'same words'));
  assert.equal(a.msDate, '11/10/2025');
  assert.equal(a.hash, b.hash, 'nav noise outside <main> does not change the hash');
  assert.equal(sourceState('', 404).hash, null);
});

test('hasChanged follows ms.date when present, the text hash otherwise', () => {
  assert.equal(hasChanged({ msDate: '1/1/2025', hash: 'a' }, { msDate: '1/1/2025', hash: 'b' }), false);
  assert.equal(hasChanged({ msDate: '1/1/2025', hash: 'a' }, { msDate: '2/1/2025', hash: 'a' }), true);
  assert.equal(hasChanged({ msDate: null, hash: 'a' }, { msDate: null, hash: 'b' }), true);
  assert.equal(hasChanged({ hash: null }, { msDate: '2/1/2025', hash: 'a' }), false, 'no baseline, no change');
});

test('watch baselines first, reports changes with the pages affected, drops uncited urls and survives errors', async () => {
  const content = { 'https://learn.microsoft.com/a': page('01/01/2025', 'alpha'), 'https://learn.microsoft.com/b': page('01/01/2025', 'beta') };
  const fetchImpl = async (url) => url.includes('/missing') ? { ok: false, status: 404, text: async () => '' } : { ok: true, status: 200, text: async () => content[url] };
  const cited = new Map([['https://learn.microsoft.com/a', new Set(['p1', 'p2'])], ['https://learn.microsoft.com/b', new Set(['p2'])], ['https://learn.microsoft.com/missing', new Set(['p3'])]]);
  const store = { sources: { 'https://learn.microsoft.com/old': { hash: 'x', pages: ['gone'] } } };
  const first = await watch(store, cited, { fetchImpl, date: '2026-11-16' });
  assert.equal(first.baselines, 2); assert.deepEqual(first.changed, []); assert.deepEqual(first.unreachable, ['https://learn.microsoft.com/missing']);
  assert.equal(store.sources['https://learn.microsoft.com/old'], undefined, 'uncited url dropped');
  assert.equal(store.sources['https://learn.microsoft.com/missing'].error, 'HTTP 404');
  content['https://learn.microsoft.com/a'] = page('11/15/2026', 'alpha revised');
  const second = await watch(store, cited, { fetchImpl, date: '2026-11-17' });
  assert.deepEqual(second.changed, ['https://learn.microsoft.com/a']);
  assert.deepEqual(second.affected, ['p1', 'p2']);
  assert.equal(store.sources['https://learn.microsoft.com/a'].changedAt, '2026-11-17');
  assert.equal(store.sources['https://learn.microsoft.com/a'].previous.msDate, '01/01/2025');
  assert.deepEqual([...sourceChangesByPage(store)], [['p1', '2026-11-17'], ['p2', '2026-11-17']]);
  assert.equal(changedSourcesFor(store, 'p2', '2026-11-16').length, 1);
  assert.equal(changedSourcesFor(store, 'p2', '2026-11-17').length, 0, 'a check on the change day already saw it');
});

test('watch reads a page once a day and stops on sustained 429, leaving the rest for the next run', async () => {
  const calls = [];
  const fetchImpl = async (url) => { calls.push(url); return url.endsWith('/ok') ? { ok: true, status: 200, text: async () => page('01/01/2025', 'fine') } : { ok: false, status: 429, text: async () => '' }; };
  const cited = new Map([['https://learn.microsoft.com/read-today', new Set(['p1'])], ['https://learn.microsoft.com/ok', new Set(['p1'])]]);
  for (let i = 0; i < 10; i++) cited.set(`https://learn.microsoft.com/limited-${i}`, new Set(['p2']));
  const store = { sources: { 'https://learn.microsoft.com/read-today': { checkedAt: '2026-11-17', hash: 'h', msDate: '01/01/2025', pages: ['p1'] }, 'https://learn.microsoft.com/limited-0': { checkedAt: '2026-11-15', hash: 'h0', msDate: '01/01/2025', pages: ['p2'] } } };
  const result = await watch(store, cited, { fetchImpl, date: '2026-11-17', concurrency: 1, pauseMs: 0, stopAfterRateLimited: 3 });
  assert.equal(result.readToday, 1, 'the page read earlier today is not read again');
  assert.ok(!calls.includes('https://learn.microsoft.com/read-today'));
  assert.equal(calls[0], 'https://learn.microsoft.com/limited-1', 'never-read pages go first, then the one read longest ago');
  assert.equal(result.stopped, true); assert.equal(result.rateLimited, 3); assert.equal(result.fetched, 3);
  assert.equal(result.left, cited.size - 1 - 3, 'the rest wait for the next run');
  assert.equal(store.sources['https://learn.microsoft.com/limited-1'].error, 'HTTP 429');
  assert.equal(store.sources['https://learn.microsoft.com/limited-1'].failedAt, '2026-11-17');
  assert.equal(store.sources['https://learn.microsoft.com/limited-1'].checkedAt, undefined, 'a failed read is not a check');
  assert.equal(store.sources['https://learn.microsoft.com/limited-0'].checkedAt, '2026-11-15', 'a page not reached keeps its earlier checkedAt');
  assert.equal(store.sources['https://learn.microsoft.com/limited-0'].hash, 'h0', 'and its baseline');
  assert.equal(store.sources['https://learn.microsoft.com/ok'], undefined, 'not reached this run');
  const next = await watch(store, cited, { fetchImpl: async (url) => ({ ok: true, status: 200, text: async () => page('01/01/2025', 'fine') }), date: '2026-11-17', concurrency: 2, pauseMs: 0 });
  assert.equal(next.readToday, 1); assert.equal(next.fetched, cited.size - 1); assert.equal(next.stopped, false);
  assert.equal(store.sources['https://learn.microsoft.com/limited-1'].error, undefined);
  assert.equal(store.sources['https://learn.microsoft.com/limited-1'].failedAt, undefined);
  assert.equal(store.sources['https://learn.microsoft.com/limited-0'].checkedAt, '2026-11-17');
});
