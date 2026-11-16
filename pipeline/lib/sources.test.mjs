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
