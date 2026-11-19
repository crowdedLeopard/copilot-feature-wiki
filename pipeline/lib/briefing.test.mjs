import test from 'node:test';
import assert from 'node:assert/strict';
import { slugForItem, siblingsFor, titleForPage, researchBrief } from './briefing.mjs';

const WW = 'Worldwide (Standard Multi-Tenant)';
const item = (id, title, clouds, extra = {}) => ({
  id, title, clouds, status: 'In development', statusKey: 'in-development', products: ['Microsoft Purview'], platforms: ['Web'],
  targetDate: 'March CY2027', previewDate: null, releasePhase: ['General Availability'], created: '2026-02-20T00:00:24',
  modified: '2026-11-17T18:36:41', moreInfoLink: null, roadmapUrl: `https://www.microsoft.com/microsoft-365/roadmap?id=${id}`,
  description: 'Azure PST Import.', topic: 'security-compliance', ...extra,
});
const title = 'Microsoft Purview: Data Lifecycle Management - Azure PST Import';
const base = 'microsoft-purview-data-lifecycle-management-azure-pst-import';
const ww = item(557559, title, [WW]);
const gov = item(565865, title, ['GCC', 'GCC High', 'DoD']);
const gcc = item(565866, title, ['GCC']);

test('slugForItem: the queued slug and an existing page win, whatever the title gives', async () => {
  assert.equal(await slugForItem(gov, { queued: 'kept-slug', pages: new Map() }), 'kept-slug');
  assert.equal(await slugForItem(gov, { queued: 'kept-slug', pages: new Map([['kept-slug', 565865]]) }), 'kept-slug');
  assert.equal(await slugForItem(gov, { pages: new Map([['some-old-slug', 565865]]) }), 'some-old-slug');
});

test('slugForItem: a queued slug whose page a twin item has since taken is not followed', async () => {
  // 566998 was queued for a revision of the shared page while it held 566998; the page now holds 562222.
  const a = item(566998, 'Microsoft Copilot Studio: Invoke agents as workflow steps with the agent node', [WW]);
  const shared = 'microsoft-copilot-studio-invoke-agents-as-workflow-steps-with-the-agent-node';
  assert.equal(await slugForItem(a, { queued: shared, pages: new Map([[shared, 562222]]) }), `${shared}-566998`);
  assert.equal(await slugForItem(a, { queued: shared, taken: new Set([shared]), pages: new Map() }), `${shared}-566998`);
});

test('slugForItem: a free title slug is used as it is', async () => {
  assert.equal(await slugForItem(ww, { pages: new Map() }), base);
});

test('slugForItem: a government-cloud twin of a page takes the cloud as its suffix', async () => {
  const pages = new Map([[base, 557559]]);
  assert.equal(await slugForItem(gov, { pages }), `${base}-us-government`);
  assert.equal(await slugForItem(gcc, { pages }), `${base}-gcc`);
  assert.equal(await slugForItem(item(1, title, ['GCC High']), { pages }), `${base}-gcc-high`);
  assert.equal(await slugForItem(item(2, title, ['DoD']), { pages }), `${base}-dod`);
});

test('slugForItem: a worldwide twin, or a mixed-cloud one, takes its roadmap id', async () => {
  const pages = new Map([[base, 565865]]);
  assert.equal(await slugForItem(ww, { pages }), `${base}-557559`);
  assert.equal(await slugForItem(item(3, title, [WW, 'GCC']), { pages }), `${base}-3`);
  // The cloud slug is taken too: fall back to the id rather than overwrite.
  assert.equal(await slugForItem(gcc, { pages: new Map([[base, 1], [`${base}-gcc`, 2]]) }), `${base}-565866`);
});

test('slugForItem: two new twins in one run do not collide', async () => {
  const taken = new Set();
  const a = await slugForItem(ww, { taken, pages: new Map() }); taken.add(a);
  const b = await slugForItem(gov, { taken, pages: new Map() }); taken.add(b);
  assert.deepEqual([a, b], [base, `${base}-us-government`]);
});

test('slugForItem: a page without a roadmapId is never overwritten', async () => {
  assert.equal(await slugForItem(ww, { pages: new Map([[base, null]]) }), `${base}-557559`);
});

test('slugForItem: a suffix stays within the slug length', async () => {
  const long = 'Microsoft Teams: AI-powered notes for in-person meetings with Facilitator in Teams Rooms on Windows';
  const android = long.replace('Windows', 'Android');
  const t = item(560318, long, [WW, 'GCC']);
  const first = await slugForItem(item(560700, android, [WW, 'GCC']), { pages: new Map() });
  assert.equal(first.length, 90);
  const second = await slugForItem(t, { pages: new Map([[first, 560700]]) });
  assert.notEqual(second, first);
  assert.ok(second.length <= 90 && second.endsWith('-560318') && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(second), second);
});

test('siblingsFor: the other items with this title, with their page slugs, and nothing for a lone item', async () => {
  const index = new Map([[base, [ww, gov]]]);
  const pages = new Map([[base, 557559]]);
  const sibs = await siblingsFor(gov, { index, pages });
  assert.equal(sibs.length, 1);
  assert.equal(sibs[0].id, 557559);
  assert.equal(sibs[0].briefing, base);
  assert.deepEqual(sibs[0].clouds, [WW]);
  assert.equal((await siblingsFor(ww, { index, pages }))[0].briefing, null);
  assert.deepEqual(await siblingsFor(item(9, 'Something else', [WW]), { index, pages }), []);
});

test('titleForPage: a government twin names its clouds once; others keep the writer\'s title', () => {
  const sibs = [{ id: 557559 }];
  assert.equal(titleForPage('Microsoft Purview: Azure PST Import to Exchange Online mailboxes', gov, sibs), 'Microsoft Purview: Azure PST Import to Exchange Online mailboxes (GCC, GCC High, DoD)');
  assert.equal(titleForPage('Microsoft Purview: Azure PST Import for GCC High and DoD tenants', gov, sibs), 'Microsoft Purview: Azure PST Import for GCC High and DoD tenants');
  assert.equal(titleForPage('Microsoft Purview: Azure PST Import', ww, sibs), 'Microsoft Purview: Azure PST Import');
  assert.equal(titleForPage('Microsoft Purview: Azure PST Import', gov, []), 'Microsoft Purview: Azure PST Import');
  const long = 'x'.repeat(150);
  assert.equal(titleForPage(long, gov, sibs), long);
});

test('researchBrief: the sibling section carries the records and the twin page is offered as a link', async () => {
  const sibs = await siblingsFor(gov, { index: new Map([[base, [ww, gov]]]), pages: new Map([[base, 557559]]) });
  const index = [`${base} | Microsoft Purview: Azure PST Import`, 'other-page | Other'];
  const brief = researchBrief(gov, null, index, undefined, [], [], sibs);
  assert.match(brief, /## Other roadmap items with this title/);
  assert.match(brief, /"id": 557559/);
  assert.match(brief, new RegExp(`"briefing": "${base}"`));
  assert.match(brief, new RegExp(`^${base} \\| Microsoft Purview: Azure PST Import$`, 'm'));
  assert.doesNotMatch(researchBrief(ww, null, index), /Other roadmap items with this title/);
});
