import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findingsComment, withCurrentFindingsComment } from './verify.mjs';

const report = {
  date: '2026-11-16', status: 'held', model: 'checker',
  claims: [
    { status: 'supported', severity: null, where: 'Summary', type: 'behaviour', claim: 'Confirmed statement.' },
    { status: 'supported', severity: 'minor', where: 'Governance guidance', type: 'consistency', claim: 'A step has no row.', fix: 'Add a row.' },
    { status: 'contradicted', severity: 'blocker', where: 'controls[0].api', type: 'absence', claim: 'No API is documented.', quote: 'PUT /allocations', fix: 'Give the call.\nCite the reference.', source: 'https://learn.microsoft.com/x' },
  ],
};

test('the findings comment lists what to correct before the minor findings, each under its instruction', () => {
  const lines = findingsComment(report).trim().split('\n');
  assert.match(lines[0], /^<!-- verifier-findings \(2026-11-16, held; checked by checker\)$/);
  assert.match(lines[1], /found fault only with the statements below/);
  assert.match(lines[2], /^Correct each of these with the smallest change/);
  assert.match(lines[3], /^- \[contradicted, blocker\] .*Fix: Give the call\. Cite the reference\. \| Source: https:/);
  assert.match(lines[4], /^These are minor and do not hold the page/);
  assert.match(lines[5], /^- \[supported, minor\] /);
  assert.equal(lines[6], '-->');
  assert.equal(lines.length, 7);
});

test('a page with nothing failing gets no comment', () => {
  assert.equal(findingsComment({ ...report, claims: report.claims.slice(0, 1) }), '');
});

test('a comment written under the earlier heading is laid out the current way in the brief, and only once', () => {
  const earlier = [
    'Body text.',
    '',
    '<!-- verifier-findings (2026-11-16, held; checked by checker)',
    'The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:',
    '- [supported, minor] Governance guidance / consistency: A step has no row. | Fix: Add a row.',
    '- [contradicted, blocker] controls[0].api / absence: No API is documented. | Fix: Give the call.',
    '-->',
    '',
  ].join('\n');
  const current = withCurrentFindingsComment(earlier);
  assert.ok(current.startsWith('Body text.\n\n<!-- verifier-findings (2026-11-16, held; checked by checker)\n'));
  assert.ok(!current.includes('Fix every one'));
  assert.ok(current.indexOf('[contradicted, blocker]') < current.indexOf('These are minor'));
  assert.ok(current.indexOf('These are minor') < current.indexOf('[supported, minor]'));
  assert.equal(withCurrentFindingsComment(current), current);
  assert.equal(withCurrentFindingsComment(`Body.\n${findingsComment(report)}`), `Body.\n${findingsComment(report)}`);
});

test('text without a findings comment is returned unchanged', () => {
  assert.equal(withCurrentFindingsComment('Body text.\n'), 'Body text.\n');
});
