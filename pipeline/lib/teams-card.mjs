/**
 * The weekly Teams digest: which briefings go in it, and the Adaptive Card that carries them.
 *
 * Pure functions, no I/O. `digestModel` reduces the loaded pages to what the card says; `buildCard`
 * turns that into an Adaptive Card; `buildPayload` wraps the card the way the Teams Workflows webhook
 * trigger ("When a Teams webhook request is received") expects it; `digestMarkdown` is the same digest
 * as plain Markdown for the run summary and the local dry run.
 *
 * The card is written for colleagues who will not open the site every day: "Act now" first, one line
 * each on cost, risk and where the control lives, a link to the briefing, and nothing the reader has to
 * scroll past to find out whether anything needs doing.
 */
import { TOPICS, TOPIC_BY_ID, ACTION, RISK, COST, DEFAULT_STATE, STATUS } from '../../config/taxonomy.mjs';
import { API_KIND_LABEL } from './render.mjs';

export const DEFAULT_SITE = { url: 'https://crowdedleopard.github.io', base: '/copilot-feature-wiki' };
/** Teams rejects a webhook message over 28 KB; stay well under it. */
export const MAX_PAYLOAD_BYTES = 26 * 1024;

export function isoWeek(d = new Date()) {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return { year: date.getUTCFullYear(), week };
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function longDate(d) {
  const date = typeof d === 'string' ? new Date(d) : d;
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
/** "October CY2026" -> "Oct 2026". */
export function shortRoadmapDate(s) {
  if (!s) return '';
  const m = String(s).match(/^([A-Za-z]+)\s+CY(\d{4})$/);
  return m ? `${m[1].slice(0, 3)} ${m[2]}` : String(s);
}

/** The `<!-- rationale ... -->` block the writer leaves at the end of a page body. */
export function extractRationale(body = '') {
  const m = body.match(/<!--\s*rationale\s*([\s\S]*?)-->/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split('\n')) {
    const mm = line.match(/^\s*(risk|cost|impact):\s*(.+?)\s*$/);
    if (mm) out[mm[1]] = mm[2];
  }
  return out;
}

function clip(text, max) {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), max - 30)).replace(/[,;:]$/, '')}…`;
}

/**
 * One line from a rationale: the rating word, then the first sentence of the reason. The writer's
 * rationales start with the rating word ("High. Left in the default state…"); when a page has no
 * rationale the scale's own help text stands in, so the line always says why.
 */
export function ratingLine(scale, key, rationale) {
  const label = scale[key]?.label ?? key;
  const text = (rationale || '').replace(/\s+/g, ' ').trim();
  const body = text.replace(/^[A-Z][a-z]+\.\s*/, '');
  let sentence = body.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? body;
  // A long first sentence built from clauses ("…on user confirmation; connectors enabled for read…") stops at
  // the first clause that already makes the point; a short one is kept whole.
  const clause = sentence.indexOf(';');
  if (sentence.length > 150 && clause > 60) sentence = sentence.slice(0, clause);
  const reason = sentence.trim() || scale[key]?.help || '';
  return clip(`${label}. ${!reason || /[.!?]$/.test(reason) ? reason : `${reason}.`}`, 180);
}

/** Where the first documented control lives: admin centre and path, else the API call, else the gap. */
export function controlLine(controls = []) {
  const ui = controls.find((c) => c?.ui);
  if (ui) {
    const steps = String(ui.ui.path).split(/\s*>\s*/).filter(Boolean);
    let path = steps.join(' › ');
    if (`${ui.ui.surface}: ${path}`.length > 170 && steps.length > 3) path = `… › ${steps.slice(-3).join(' › ')}`;
    return clip(`${ui.ui.surface}: ${path}`, 190);
  }
  const api = controls.find((c) => c?.api);
  if (api) return clip(`${API_KIND_LABEL[api.api.kind] ?? 'API'}: ${api.api.call}`, 190);
  return 'No admin control documented by Microsoft yet.';
}

function siteHref(site, path) {
  return `${site.url.replace(/\/$/, '')}${site.base.replace(/\/$/, '')}${path}`;
}

function item(p, site) {
  const d = p.data;
  const rationale = extractRationale(p.body);
  const target = shortRoadmapDate(d.targetDate);
  const meta = [
    DEFAULT_STATE[d.defaultState]?.label ?? 'Default not stated',
    `${STATUS[d.status]?.label ?? d.status}${target ? `, ${target}` : ''}`,
    TOPIC_BY_ID[d.topic]?.label ?? d.topic,
  ];
  if (d.verification?.status === 'needs-correction') meta.push('awaiting correction');
  return {
    slug: p.slug,
    title: d.title,
    url: siteHref(site, `/features/${p.slug}/`),
    topic: d.topic,
    action: d.action,
    risk: d.risk,
    cost: d.cost,
    defaultState: d.defaultState,
    updated: d.updated,
    meta: meta.join(' · '),
    riskLine: ratingLine(RISK, d.risk, rationale.risk),
    costLine: ratingLine(COST, d.cost, rationale.cost),
    controlLine: controlLine(d.controls),
  };
}

const byRiskThenDate = (a, b) => (RISK[b.data.risk]?.rank ?? 0) - (RISK[a.data.risk]?.rank ?? 0) || String(b.data.updated).localeCompare(String(a.data.updated));

/**
 * Reduce the live pages to the week's digest. `pages` is the output of loadPages(); archived and
 * broken pages are left out, as the site leaves them out. `digestExists` says whether this week's
 * digest page has been generated, so the card can link to it rather than to a page that is not there.
 */
export function digestModel(pages, { now = new Date(), days = 7, maxItems = 8, site = DEFAULT_SITE, digestExists = true } = {}) {
  const until = now;
  const since = new Date(now.getTime() - days * 86400000);
  const live = pages.filter((p) => !p.error && p.data?.title && !p.data.archived);
  const fresh = live.filter((p) => new Date(p.data.updated).getTime() >= since.getTime());
  const { year, week } = isoWeek(now);
  const slug = `${year}-w${String(week).padStart(2, '0')}`;

  const actNowPages = fresh.filter((p) => p.data.action === 'act-now').sort(byRiskThenDate);
  const actNow = actNowPages.slice(0, maxItems).map((p) => item(p, site));
  const watchPages = fresh.filter((p) => p.data.action === 'prepare' && p.data.risk === 'high').sort(byRiskThenDate).slice(0, 3);
  const count = (action) => fresh.filter((p) => p.data.action === action).length;
  const byTopic = TOPICS.map((t) => ({ id: t.id, label: t.label, count: fresh.filter((p) => p.data.topic === t.id).length })).filter((t) => t.count);
  const stillActNow = live.filter((p) => p.data.action === 'act-now' && new Date(p.data.updated).getTime() < since.getTime()).length;

  const counts = {
    updated: fresh.length,
    actNow: actNowPages.length,
    highRisk: fresh.filter((p) => p.data.risk === 'high').length,
    prepare: count('prepare'),
    review: count('review'),
    none: count('none'),
  };
  const headline = !fresh.length
    ? `Week ${week}: no briefings changed`
    : counts.actNow
      ? `Week ${week}: ${counts.actNow} change${counts.actNow === 1 ? '' : 's'} need${counts.actNow === 1 ? 's' : ''} action now`
      : `Week ${week}: nothing new needs action`;
  const standfirst = !fresh.length
    ? `No briefings were created or refreshed in the week to ${longDate(until)}. The roadmap was ingested as usual.`
    : `${counts.updated} briefing${counts.updated === 1 ? ' was' : 's were'} created or refreshed in the week to ${longDate(until)}. ${counts.actNow ? `${counts.actNow} ${counts.actNow === 1 ? 'is' : 'are'} rated Act now` : 'None is rated Act now'}${counts.highRisk ? `, ${counts.highRisk} high risk` : ''}.`;

  return {
    year, week, slug, since, until, days,
    headline, standfirst, counts, byTopic, stillActNow,
    actNow,
    moreActNow: Math.max(0, actNowPages.length - actNow.length),
    watch: watchPages.map((p) => item(p, site)),
    links: {
      digest: siteHref(site, digestExists ? `/digests/${slug}/` : '/digests/'),
      actNow: siteHref(site, '/features/?action=act-now'),
      briefings: siteHref(site, '/features/'),
      home: siteHref(site, '/'),
    },
  };
}

const text = (t, extra = {}) => ({ type: 'TextBlock', text: t, wrap: true, ...extra });

function itemBlocks(it) {
  return [
    text(`**[${it.title}](${it.url})**`, { spacing: 'Medium' }),
    text(it.meta, { size: 'Small', isSubtle: true, spacing: 'None' }),
    {
      type: 'FactSet',
      spacing: 'Small',
      facts: [
        { title: 'Risk', value: it.riskLine },
        { title: 'Cost', value: it.costLine },
        { title: 'Control', value: it.controlLine },
      ],
    },
  ];
}

/** The Adaptive Card. Version 1.4 renders in every Teams client; `msteams.width` makes it use the full column. */
export function buildCard(m) {
  const body = [
    text('RELEASE LEDGER · WEEKLY DIGEST', { size: 'Small', weight: 'Bolder', isSubtle: true }),
    text(m.headline, { size: 'Large', weight: 'Bolder', spacing: 'Small' }),
    text(m.standfirst, { spacing: 'Small' }),
  ];

  if (m.actNow.length) {
    const items = m.actNow.flatMap(itemBlocks);
    if (m.moreActNow) items.push(text(`[${m.moreActNow} more Act now briefing${m.moreActNow === 1 ? '' : 's'} this week](${m.links.actNow})`, { spacing: 'Medium' }));
    body.push({
      type: 'Container',
      separator: true,
      spacing: 'Large',
      items: [
        text('Act now', { size: 'Medium', weight: 'Bolder' }),
        text(ACTION['act-now'].help, { size: 'Small', isSubtle: true, spacing: 'None' }),
        ...items,
      ],
    });
  } else if (m.counts.updated) {
    body.push({
      type: 'Container', separator: true, spacing: 'Large',
      items: [text('Act now', { size: 'Medium', weight: 'Bolder' }), text('Nothing created or refreshed this week is rated Act now.', { spacing: 'Small' })],
    });
  }

  if (m.counts.updated) {
    const lines = [];
    const rest = [['prepare', m.counts.prepare], ['review', m.counts.review], ['none', m.counts.none]].filter(([, n]) => n);
    if (rest.length) lines.push(rest.map(([k, n]) => `**${n}** ${ACTION[k].label.toLowerCase()}`).join(' · '));
    lines.push(`By topic: ${m.byTopic.map((t) => `${t.label} ${t.count}`).join(', ')}.`);
    if (m.stillActNow) lines.push(`${m.stillActNow} earlier briefing${m.stillActNow === 1 ? '' : 's'} ${m.stillActNow === 1 ? 'is' : 'are'} still rated [Act now](${m.links.actNow}).`);
    const items = [
      text('Also this week', { size: 'Medium', weight: 'Bolder' }),
      ...lines.map((l, i) => text(l, { spacing: i ? 'Small' : 'Small' })),
    ];
    if (m.watch.length) {
      items.push(text('High risk, prepare now:', { weight: 'Bolder', spacing: 'Medium' }));
      items.push(text(m.watch.map((w) => `- [${w.title}](${w.url})`).join('\n'), { spacing: 'None' }));
    }
    body.push({ type: 'Container', separator: true, spacing: 'Large', items });
  }

  body.push(text(
    'Posted every Monday by the Release Ledger weekly job. Ratings are editorial judgements: check licensing and behaviour against the Microsoft documentation linked from each briefing.',
    { size: 'Small', isSubtle: true, spacing: 'Large', separator: true },
  ));

  const actions = [{ type: 'Action.OpenUrl', title: "Read the week's digest", url: m.links.digest }];
  if (m.actNow.length || m.stillActNow) actions.push({ type: 'Action.OpenUrl', title: 'All Act now briefings', url: m.links.actNow });
  else actions.push({ type: 'Action.OpenUrl', title: 'All briefings', url: m.links.briefings });

  return {
    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
    type: 'AdaptiveCard',
    version: '1.4',
    msteams: { width: 'Full' },
    body,
    actions,
  };
}

/** The request body for the Workflows webhook trigger: a message carrying one Adaptive Card attachment. */
export function buildPayload(card) {
  return {
    type: 'message',
    attachments: [{ contentType: 'application/vnd.microsoft.card.adaptive', contentUrl: null, content: card }],
  };
}

/**
 * Model, card and payload together, trimming the Act now list until the payload fits under the Teams
 * limit. Returns the model that was actually sent.
 */
export function buildDigest(pages, opts = {}) {
  let maxItems = opts.maxItems ?? 8;
  for (;;) {
    const model = digestModel(pages, { ...opts, maxItems });
    const card = buildCard(model);
    const payload = buildPayload(card);
    const bytes = Buffer.byteLength(JSON.stringify(payload), 'utf8');
    if (bytes <= MAX_PAYLOAD_BYTES || maxItems <= 1) return { model, card, payload, bytes };
    maxItems -= 1;
  }
}

/** The same digest as Markdown, for the run summary and the local dry run. */
export function digestMarkdown(m) {
  const out = [`## ${m.headline}`, '', m.standfirst, ''];
  if (m.actNow.length) {
    out.push('### Act now', '');
    for (const it of m.actNow) {
      out.push(`**[${it.title}](${it.url})**  `, `${it.meta}`, '', `- Risk: ${it.riskLine}`, `- Cost: ${it.costLine}`, `- Control: ${it.controlLine}`, '');
    }
    if (m.moreActNow) out.push(`[${m.moreActNow} more Act now briefings this week](${m.links.actNow})`, '');
  } else if (m.counts.updated) out.push('### Act now', '', 'Nothing created or refreshed this week is rated Act now.', '');
  if (m.counts.updated) {
    out.push('### Also this week', '');
    out.push(`${m.counts.prepare} prepare, ${m.counts.review} review, ${m.counts.none} no action. By topic: ${m.byTopic.map((t) => `${t.label} ${t.count}`).join(', ')}.`);
    if (m.stillActNow) out.push(`${m.stillActNow} earlier briefings are still rated [Act now](${m.links.actNow}).`);
    if (m.watch.length) out.push('', 'High risk, prepare now:', ...m.watch.map((w) => `- [${w.title}](${w.url})`));
    out.push('');
  }
  out.push(`[Read the week's digest](${m.links.digest}) · [All Act now briefings](${m.links.actNow})`, '');
  return out.join('\n');
}
