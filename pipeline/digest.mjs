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
import { TOPICS, ACTION, RISK, MESSAGE_CENTER } from '../config/taxonomy.mjs';
import { isoWeek } from './lib/teams-card.mjs';
import { loadMessageIndex } from './lib/message-center.mjs';

async function main() {
  const since = Date.now() - 7 * 86400000;
  const pages = (await loadPages()).filter((p) => !p.error && p.data.title && !p.data.archived);
  const fresh = pages.filter((p) => new Date(p.data.updated).getTime() >= since);
  const queue = await readJson(path.join(DATA_DIR, 'queue.json'), { items: [] });
  const statusChanges = (queue.items || []).filter((q) => q.reason === 'status-changed').slice(0, 20);
  const { year, week } = isoWeek();
  const slug = `${year}-w${String(week).padStart(2, '0')}`;
  const actNow = fresh.filter((p) => p.data.action === 'act-now');
  const highRisk = fresh.filter((p) => p.data.risk === 'high');
  // Message Center: the act-by dates Microsoft set or revised this week and that are still ahead, soonest first.
  // Posts without a date are not reported; the site lists deadlines only, and the reader's own Message Center has the rest.
  const messages = await loadMessageIndex();
  const todayIso = today();
  const notices = (messages.posts || []).filter((m) => m.actionRequiredBy && m.actionRequiredBy.slice(0, 10) >= todayIso && new Date(m.lastModified).getTime() >= since)
    .sort((a, b) => a.actionRequiredBy.localeCompare(b.actionRequiredBy) || b.lastModified.localeCompare(a.lastModified));
  const briefedIds = new Map(pages.filter((p) => p.data.roadmapId).map((p) => [p.data.roadmapId, p]));

  const fm = {
    title: `Week ${week}, ${year}: ${fresh.length} briefings updated`,
    slug,
    summary: `${fresh.length} briefings created or refreshed, ${actNow.length} need action now, ${highRisk.length} rated high risk.`,
    date: today(),
    weekStart: new Date(since).toISOString().slice(0, 10),
    counts: { updated: fresh.length, actNow: actNow.length, highRisk: highRisk.length, statusChanges: statusChanges.length, notices: notices.length },
  };
  const lines = [];
  lines.push('## This week in one paragraph', '');
  if (!fresh.length) lines.push('No briefings were created or refreshed this week. The roadmap feed was ingested as usual; see the log for details.', '');
  else {
    const byTopic = TOPICS.map((t) => [t, fresh.filter((p) => p.data.topic === t.id)]).filter(([, l]) => l.length);
    lines.push(`${fresh.length} briefings changed across ${byTopic.length} topic${byTopic.length === 1 ? '' : 's'}: ${byTopic.map(([t, l]) => `${l.length} in ${t.label}`).join(', ')}. ${actNow.length ? `${actNow.length} carry an "Act now" rating because they are on by default or close to a deadline.` : 'Nothing is rated "Act now".'} ${highRisk.length ? `${highRisk.length} are rated high risk, mostly because they move organisational data or let agents act on their own.` : ''}`.trim(), '');
  }
  if (actNow.length) {
    lines.push('## Act now', '');
    for (const p of actNow) lines.push(`- **[${p.data.title}](/features/${p.slug}/)** (${RISK[p.data.risk].label} risk). ${p.data.summary}`);
    lines.push('');
  }
  for (const topic of TOPICS) {
    const mine = fresh.filter((p) => p.data.topic === topic.id && p.data.action !== 'act-now')
      .sort((a, b) => (ACTION[b.data.action]?.rank ?? 0) - (ACTION[a.data.action]?.rank ?? 0));
    if (!mine.length) continue;
    lines.push(`## ${topic.label}`, '');
    for (const p of mine) {
      const change = p.data.changes?.at(-1)?.note;
      lines.push(`- **[${p.data.title}](/features/${p.slug}/)**. ${ACTION[p.data.action]?.label ?? ''}, ${RISK[p.data.risk].label.toLowerCase()} risk. ${p.data.summary}${change && change !== 'Initial briefing' ? ` *(${change})*` : ''}`);
    }
    lines.push('');
  }
  if (notices.length) {
    lines.push('## Deadlines set this week', '', `${notices.length} Message Center post${notices.length === 1 ? '' : 's'} published or revised this week ${notices.length === 1 ? 'carries' : 'carry'} a date by which administrators must have done something. Soonest first; the [Deadlines page](/message-centre/) has every date still ahead.`, '');
    for (const m of notices.slice(0, 25)) {
      const briefing = (m.roadmapIds || []).map((id) => briefedIds.get(id)).find(Boolean);
      const cat = MESSAGE_CENTER.category[m.category]?.label || m.category;
      lines.push(`- **Act by ${m.actionRequiredBy.slice(0, 10)}.** ${briefing ? `[${m.title}](/features/${briefing.slug}/)` : `[${m.title}](/message-centre/#${m.id})`} (${m.id}). ${cat}${m.isMajorChange ? ', major change' : ''}.${briefing ? ` Briefing: [${briefing.data.title}](/features/${briefing.slug}/).` : ' No briefing yet.'}`);
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
