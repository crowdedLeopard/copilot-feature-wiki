import test from 'node:test';
import assert from 'node:assert/strict';
import { flaggedSides, confirmedSides, confirmedForItem, confirmedSection } from './confirmed-controls.mjs';
import { researchBrief } from './briefing.mjs';

const stamp = { status: 'verified', date: '2026-11-17', version: 2 };
const row = (governs, path, call, kind = 'powershell') => ({
  governs, scope: 'environment',
  ui: path ? { surface: 'Power Platform admin center', path, docs: 'https://learn.microsoft.com/power-platform/admin/a' } : null,
  api: call ? { kind, call, docs: 'https://learn.microsoft.com/powershell/module/b' } : null,
});
const page = (slug, topic, products, controls, extra = {}) => ({ slug, data: { slug, topic, products, tags: ['copilot-credits'], version: 2, verification: stamp, controls, ...extra } });
const report = (claims = []) => ({ version: 2, claims });

const pages = [
  page('a', 'copilot-studio', ['Microsoft Copilot Studio'], [
    row('Agent monthly limits', 'Licensing > Products > Copilot Studio > Summary > Manage Agents', 'Set-Thing -Identity <agent> -Limit <credits>'),
    row('Environment allocation', 'Licensing > Copilot Studio > Manage Copilot Credits', 'PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with body {"scope":{}}', 'power-platform-api'),
  ]),
  page('b', 'copilot-studio', ['Microsoft Copilot Studio'], [
    row('Agent limits', 'Licensing >  Products > Copilot Studio > Summary > Manage agents', 'POST /beta/copilot/admin/catalog/packages/{id}/block', 'graph'),
  ]),
  page('c', 'modern-work', ['Microsoft Teams'], [row('Meeting recording', 'Meetings > Meeting policies > policy > Meeting recording', 'Set-CsTeamsMeetingPolicy -Identity <policy> -AllowCloudRecording $true')]),
  page('copilot-credits', null, [], [row('How an agent is capped', 'Licensing > Products > Copilot Studio > Summary > Manage Agents', null)], { kind: 'concept', covers: ['pay-as-you-go'] }),
  page('held', 'copilot-studio', ['Microsoft Copilot Studio'], [row('Unchecked', 'Somewhere > Else', null)], { verification: { ...stamp, status: 'held' } }),
  page('stale', 'copilot-studio', ['Microsoft Copilot Studio'], [row('Changed since the check', 'Old > Path', null)], { version: 3 }),
];
const reports = {
  a: report([
    { n: 1, where: 'controls[0].ui', status: 'supported', severity: null },
    { n: 2, where: 'controls[1].ui; Governance controls', status: 'supported', severity: 'minor' },
  ]),
  b: report(), c: report(), 'copilot-credits': report(), held: report(), stale: report(),
};

test('flaggedSides names each side a finding touches, and both sides for a finding on the row', () => {
  const f = flaggedSides({ claims: [
    { where: 'controls[0].ui', status: 'supported', severity: null },
    { where: 'controls[1].api; Governance controls', status: 'contradicted', severity: 'blocker' },
    { where: 'controls[2]', status: 'supported', severity: 'minor' },
  ] });
  assert.deepEqual([...f].sort(), ['1.api', '2.api', '2.ui']);
});

test('confirmedSides keeps what passed, once per path or call', () => {
  const sides = confirmedSides(pages, reports);
  const paths = sides.filter((s) => s.side === 'ui');
  const shared = paths.find((s) => /manage agents$/i.test(s.path));
  assert.equal(shared.on.length, 3, 'case and spacing do not split one path into two');
  assert.equal(shared.governs, 'How an agent is capped', 'a concept page words the control');
  assert.ok(!paths.some((s) => /Manage Copilot Credits/.test(s.path)), 'a side with a minor finding is left out');
  assert.ok(!paths.some((s) => /Somewhere|Old > Path/.test(s.path)), 'held pages and pages changed since their check are left out');
  const calls = sides.filter((s) => s.side === 'api').map((s) => s.call);
  assert.ok(calls.includes('POST /beta/copilot/admin/catalog/packages/{id}/block'));
  assert.ok(!calls.some((c) => /allocationsV2/.test(c)), 'a REST call that prints a body is not offered as a model');
});

test('confirmedForItem lists the same product first and nothing from another topic', () => {
  const sides = confirmedSides(pages, reports);
  const item = { id: 1, topic: 'copilot-studio', products: ['Microsoft Copilot Studio'] };
  const { paths, calls } = confirmedForItem(item, sides);
  assert.match(paths[0].path, /Manage Agents$/i);
  assert.ok(!paths.some((s) => /Meeting recording/.test(s.path)));
  assert.ok(!calls.some((s) => /Set-CsTeamsMeetingPolicy/.test(s.call)));
  assert.deepEqual(confirmedForItem({ id: 2, topic: 'sales', products: ['Dynamics 365'] }, sides), { paths: [], calls: [] });
  assert.equal(confirmedForItem({ ...item, slug: 'b' }, sides).calls.some((s) => /packages/.test(s.call)), false, "a page's own rows are not offered back to it");
});

test('the brief shows the section for a new briefing and a refresh, never for a correction', () => {
  const sides = confirmedSides(pages, reports);
  const item = { id: 1, title: 'T', topic: 'copilot-studio', products: ['Microsoft Copilot Studio'], description: 'd' };
  const section = confirmedSection(item, sides);
  assert.match(section, /^## Controls the independent check has already confirmed/);
  assert.match(section, /- How an agent is capped \| Power Platform admin center > Licensing > Products > Copilot Studio > Summary > Manage Agents \| https:\/\/learn\.microsoft\.com\/power-platform\/admin\/a/);
  assert.match(section, /\| Microsoft Graph \| POST \/beta\/copilot\/admin\/catalog\/packages\/\{id\}\/block \|/);
  assert.equal(confirmedSection({ ...item, topic: 'sales', products: [] }, sides), '');
  assert.ok(researchBrief(item, null, [], undefined, [], sides).includes(section));
  assert.ok(researchBrief(item, '---\nslug: "x"\n---\nbody', [], undefined, [], sides).includes('## Controls the independent check'));
  assert.ok(!researchBrief(item, '---\nslug: "x"\n---\nbody\n<!-- verifier-findings v2\n- [contradicted, blocker] a\n-->', [], undefined, [], sides).includes('## Controls the independent check'));
  assert.ok(!researchBrief(item, null, []).includes('## Controls the independent check'), 'nothing is printed until something has been confirmed');
});
