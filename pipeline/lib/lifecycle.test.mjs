import test from 'node:test';
import assert from 'node:assert/strict';
import { lifecycleFields, archiveNote } from './lifecycle.mjs';

const item = { statusKey: 'launched' };
const archivedCancelled = { reason: 'cancelled', date: '2026-11-19', lastSeen: '2026-11-19' };
const archivedRemoved = { reason: 'removed', date: '2026-11-19', lastSeen: null };

test('a live page takes its status from the roadmap record and carries no archived block', () => {
  assert.deepEqual(lifecycleFields(item, { created: '2026-11-17' }), { status: 'launched' });
  assert.deepEqual(lifecycleFields(item, null), { status: 'launched' });
});

test('a correction of a page archived as cancelled keeps the block and the cancelled status, whatever the record says', () => {
  assert.deepEqual(lifecycleFields(item, { archived: archivedCancelled }), { status: 'cancelled', archived: archivedCancelled });
});

test('a page archived as removed keeps the block and the record status', () => {
  assert.deepEqual(lifecycleFields(item, { archived: archivedRemoved }), { status: 'launched', archived: archivedRemoved });
});

test('a restored task drops the archived block and takes the record status again', () => {
  assert.deepEqual(lifecycleFields(item, { archived: archivedCancelled }, { restore: true }), { status: 'launched' });
});

test('archive notes say what happened', () => {
  assert.match(archiveNote('cancelled'), /marked the roadmap item as cancelled/);
  assert.match(archiveNote('removed', '2026-11-19'), /left the Microsoft 365 Roadmap \(last seen 2026-11-19\)/);
});
