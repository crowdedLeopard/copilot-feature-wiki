import test from 'node:test';
import assert from 'node:assert/strict';
import { pageHash, verificationDue, checkNote, MAX_AGE_DAYS } from './verify.mjs';

const data = { title: 'A briefing', version: 2, updated: '2026-11-16', changes: [{ date: '2026-11-16', note: 'x' }], controls: [{ governs: 'a' }], tags: ['b', 'a'] };
const body = 'Hello  world\n\n<!-- verifier-findings\nold findings\n-->\n';

test('pageHash ignores the stamp, the log, dates and the findings comment, and key order', () => {
  const h = pageHash(data, body);
  assert.match(h, /^[a-f0-9]{32}$/);
  assert.equal(pageHash({ ...data, changes: [], updated: '2027-01-01', version: 9, verification: { status: 'verified' } }, 'Hello world'), h);
  assert.equal(pageHash({ tags: ['b', 'a'], controls: [{ governs: 'a' }], title: 'A briefing' }, 'Hello world'), h);
  assert.notEqual(pageHash(data, 'Hello there'), h, 'a body edit changes the hash');
  assert.notEqual(pageHash({ ...data, title: 'Another' }, body), h, 'a front-matter edit changes the hash');
});

test('verificationDue names the reason in order', () => {
  const v = { status: 'verified', date: '2026-11-16', version: 2, hash: pageHash(data, body) };
  const now = new Date('2026-11-17T00:00:00Z').getTime();
  assert.equal(verificationDue({ ...data }, now, { body }), 'never-checked');
  assert.equal(verificationDue({ ...data, verification: v }, now, { body }), null);
  assert.equal(verificationDue({ ...data, version: 3, verification: v }, now, { body }), 'changed-since-check');
  assert.equal(verificationDue({ ...data, verification: v }, now, { body: 'Hello there' }), 'changed-since-check');
  assert.equal(verificationDue({ ...data, verification: v }, now, { body, sourceChangedAt: '2026-11-17' }), 'source-changed');
  assert.equal(verificationDue({ ...data, verification: v }, now, { body, sourceChangedAt: '2026-11-16' }), null, 'a change seen on the check day was covered by the check');
  assert.equal(verificationDue({ ...data, verification: v }, now + (MAX_AGE_DAYS + 1) * 86400000, { body }), 'check-expired');
  assert.equal(verificationDue({ ...data, verification: { ...v, hash: undefined } }, now, { body: 'anything' }), null, 'a stamp without a hash is not re-checked for text');
});

test('checkNote reads as a change-log line', () => {
  const c = { claims: 60, confirmed: 57, unconfirmed: 3, contradicted: 0 };
  assert.equal(checkNote('verified', { ...c, confirmed: 60, unconfirmed: 0 }, 'gpt-6.1-sol'), 'Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed');
  assert.match(checkNote('held', { ...c, contradicted: 2 }, 'gpt-6.1-sol'), /held: 2 of 60 statements contradicted, 3 unconfirmed; taken offline until corrected$/);
  assert.ok(checkNote('needs-correction', c, 'm').length <= 300);
});
