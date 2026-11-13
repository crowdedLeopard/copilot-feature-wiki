#!/usr/bin/env node
/**
 * Digest: write the weekly digest page (wiki/digests/<ISO week>.md) from briefings created or
 * updated in the last seven days, plus roadmap items that changed status. Rewritten on every run
 * so the current week's digest always reflects the latest state.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { loadPages } from './lib/pages.mjs';
import { WIKI_DIR, DATA_DIR, readJson, appendLog, today, toFrontmatter } from './lib/util.mjs';
import { DESKS, ACTION, RISK } from '../config/taxonomy.mjs';

function isoWeek(d = new Date()) {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return { year: date.getUTCFullYear(), week };
}

async function main() {
  const since = Date.now() - 7 * 86400000;
  const pages = (await loadPages()).filter((p) => !p.error && p.data.title);
  const fresh = pages.filter((p) => new Date(p.data.updated).getTime() >= since);
  const queue = await readJson(path.join(DATA_DIR, 'queue.json'), { items: [] });
  const statusChanges = (queue.items || []).filter((q) => q.reason === 'status-changed').slice(0, 20);
  const { year, week } = isoWeek();
  const slug = `${year}-w${String(week).padStart(2, '0')}`;
  const actNow = fresh.filter((p) => p.data.action === 'act-now');
  const highRisk = fresh.filter((p) => p.data.risk === 'high');

  const fm = {
    title: `Week ${week}, ${year}: ${fresh.length} briefings updated`,
    slug,
    summary: `${fresh.length} briefings created or refreshed, ${actNow.length} need action now, ${highRisk.length} rated high risk.`,
    date: today(),
    weekStart: new Date(since).toISOString().slice(0, 10),
    counts: { updated: fresh.length, actNow: actNow.length, highRisk: highRisk.length, statusChanges: statusChanges.length },
  };
  const lines = [];
  lines.push('## This week in one paragraph', '');
  if (!fresh.length) lines.push('No briefings were created or refreshed this week. The roadmap feed was ingested as usual; see the log for details.', '');
  else {
    const byDesk = DESKS.map((d) => [d, fresh.filter((p) => p.data.desk === d.id)]).filter(([, l]) => l.length);
    lines.push(`${fresh.length} briefings changed across ${byDesk.length} desk${byDesk.length === 1 ? '' : 's'}: ${byDesk.map(([d, l]) => `${l.length} in ${d.label}`).join(', ')}. ${actNow.length ? `${actNow.length} carry an "Act now" rating because they are on by default or close to a deadline.` : 'Nothing is rated "Act now".'} ${highRisk.length ? `${highRisk.length} are rated high risk, mostly because they move organisational data or let agents act on their own.` : ''}`.trim(), '');
  }
  if (actNow.length) {
    lines.push('## Act now', '');
    for (const p of actNow) lines.push(`- **[${p.data.title}](/features/${p.slug}/)** (${RISK[p.data.risk].label} risk). ${p.data.summary}`);
    lines.push('');
  }
  for (const desk of DESKS) {
    const mine = fresh.filter((p) => p.data.desk === desk.id && p.data.action !== 'act-now')
      .sort((a, b) => (ACTION[b.data.action]?.rank ?? 0) - (ACTION[a.data.action]?.rank ?? 0));
    if (!mine.length) continue;
    lines.push(`## ${desk.label}`, '');
    for (const p of mine) {
      const change = p.data.changes?.at(-1)?.note;
      lines.push(`- **[${p.data.title}](/features/${p.slug}/)**. ${ACTION[p.data.action]?.label ?? ''}, ${RISK[p.data.risk].label.toLowerCase()} risk. ${p.data.summary}${change && change !== 'Initial briefing' ? ` *(${change})*` : ''}`);
    }
    lines.push('');
  }
  if (statusChanges.length) {
    lines.push('## Roadmap status changes awaiting refresh', '');
    for (const q of statusChanges) lines.push(`- ${q.title} (roadmap ${q.id}): ${q.from ?? 'previous'} to ${q.to ?? q.status}`);
    lines.push('');
  }
  const dir = path.join(WIKI_DIR, 'digests');
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, `${slug}.md`), `${toFrontmatter(fm)}\n\n${lines.join('\n')}\n`);
  const line = `- ${today()} digest: ${slug} written (${fresh.length} updated briefings)`;
  await appendLog(line);
  console.log(line);
}

main().catch((err) => { console.error(err); process.exit(1); });
