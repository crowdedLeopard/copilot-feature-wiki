import test from 'node:test';
import assert from 'node:assert/strict';
import { pageHash, verificationDue, checkNote, MAX_AGE_DAYS, SETTLED_AGE_DAYS, CLEAN_PASSES, passStreak, recheckDaysFor, parkedNext, MAX_REVISIONS, STANDARD_HASH, WRITER_STANDARD_HASH } from './verify.mjs';

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
  const archived = { reason: 'cancelled', date: '2026-11-19' };
  assert.equal(verificationDue({ ...data, archived }, now, { body }), null, 'an archived page that was never checked is left alone');
  assert.equal(verificationDue({ ...data, archived, status: 'cancelled', verification: v }, now + (MAX_AGE_DAYS + 1) * 86400000, { body: 'edited' }), null, 'an archived page is never due, however old or changed');
});

test('checkNote reads as a change-log line', () => {
  const c = { claims: 60, confirmed: 57, unconfirmed: 3, contradicted: 0 };
  assert.equal(checkNote('verified', { ...c, confirmed: 60, unconfirmed: 0 }, 'gpt-6.1-sol'), 'Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed');
  assert.match(checkNote('held', { ...c, contradicted: 2 }, 'gpt-6.1-sol'), /held: 2 of 60 statements contradicted, 3 unconfirmed; taken offline until corrected$/);
  assert.ok(checkNote('needs-correction', c, 'm').length <= 300);
});

test('a settled page (the same text passed CLEAN_PASSES checks in a row) moves to the long cycle', () => {
  assert.ok(SETTLED_AGE_DAYS > MAX_AGE_DAYS && CLEAN_PASSES >= 2);
  assert.equal(passStreak(undefined, 1, 'verified'), 1, 'first pass');
  assert.equal(passStreak({ status: 'verified-with-gaps', version: 1 }, 1, 'verified'), 2, 'a stamp from before the field counts as one pass');
  assert.equal(passStreak({ status: 'verified', version: 1, passes: 2 }, 1, 'verified-with-gaps'), 3);
  assert.equal(passStreak({ status: 'verified', version: 1, passes: 2 }, 2, 'verified'), 1, 'a new version starts again');
  assert.equal(passStreak({ status: 'held', version: 1, passes: 0 }, 1, 'verified'), 1, 'a pass after a hold');
  assert.equal(passStreak({ status: 'verified', version: 1, passes: 3 }, 1, 'held'), 0, 'a hold resets it');
  assert.equal(recheckDaysFor({ passes: 1 }), MAX_AGE_DAYS);
  assert.equal(recheckDaysFor({ passes: CLEAN_PASSES }), SETTLED_AGE_DAYS);
  const body = 'Hello world';
  const data = { slug: 's', title: 'T', version: 1 };
  const v = { status: 'verified', date: '2026-11-16', version: 1, hash: pageHash(data, body), passes: CLEAN_PASSES };
  const now = new Date('2026-11-16T12:00:00Z').getTime();
  assert.equal(verificationDue({ ...data, verification: v }, now + (MAX_AGE_DAYS + 1) * 86400000, { body }), null, 'not expired on the 7-day cycle');
  assert.equal(verificationDue({ ...data, verification: v }, now + (SETTLED_AGE_DAYS + 1) * 86400000, { body }), 'check-expired');
  assert.equal(verificationDue({ ...data, verification: { ...v, passes: 1 } }, now + (MAX_AGE_DAYS + 1) * 86400000, { body }), 'check-expired', 'one pass stays on the short cycle');
  assert.equal(verificationDue({ ...data, verification: v }, now + 2 * 86400000, { body, sourceChangedAt: '2026-11-17' }), 'source-changed', 'a cited page change still queues a settled page');
  assert.equal(verificationDue({ ...data, verification: v }, now + 2 * 86400000, { body: 'edited' }), 'changed-since-check', 'a text change still queues a settled page');
});

test('parkedNext: a fresh draft at the cap, another when the writer\'s rules changed, otherwise a person', () => {
  assert.match(STANDARD_HASH, /^[0-9a-f]{12}$/);
  assert.match(WRITER_STANDARD_HASH, /^[0-9a-f]{12}$/);
  assert.notEqual(WRITER_STANDARD_HASH, STANDARD_HASH);
  assert.equal(parkedNext({ attempts: MAX_REVISIONS }), 'fresh-draft');
  assert.equal(parkedNext({ attempts: MAX_REVISIONS + 1, standard: STANDARD_HASH, writerStandard: WRITER_STANDARD_HASH }), 'person', 'the fresh draft failed under the rules as they stand');
  assert.equal(parkedNext({ attempts: MAX_REVISIONS + 1, standard: 'a1b2c3d4e5f6', writerStandard: WRITER_STANDARD_HASH }), 'person', 'only the verifier prompt changed: the writer would produce the same text');
  assert.equal(parkedNext({ attempts: MAX_REVISIONS + 1, standard: 'a1b2c3d4e5f6', writerStandard: 'a1b2c3d4e5f6' }), 'fresh-draft', 'the writer\'s rules changed since');
  assert.equal(parkedNext({ attempts: MAX_REVISIONS + 1 }), 'fresh-draft', 'a report without the field predates it');
  assert.equal(parkedNext({ attempts: MAX_REVISIONS + 2, standard: STANDARD_HASH, writerStandard: WRITER_STANDARD_HASH }), 'person');
});
