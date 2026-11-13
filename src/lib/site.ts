import {
  SITE, DESKS, DESK_BY_ID, RISK, COST, IMPACT, DEFAULT_STATE, ACTION, STATUS, LICENSING_MODEL, AUDIENCES, SOURCE_KIND,
} from '../../config/taxonomy.mjs';

export { SITE, DESKS, DESK_BY_ID, RISK, COST, IMPACT, DEFAULT_STATE, ACTION, STATUS, LICENSING_MODEL, AUDIENCES, SOURCE_KIND };

export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the Pages base path. */
export function href(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
}

export function featureUrl(slug: string) { return href(`/features/${slug}/`); }
export function conceptUrl(slug: string) { return href(`/concepts/${slug}/`); }
export function deskUrl(desk: string) { return href(`/desks/${desk}/`); }
export function tagUrl(tag: string) { return href(`/tags/${tag}/`); }

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function formatDate(iso: string | null | undefined, opts: { long?: boolean } = {}): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const day = d.getUTCDate();
  const month = MONTHS[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return opts.long ? `${day} ${month} ${year}` : `${day} ${month.slice(0, 3)} ${year}`;
}

/** "October CY2026" -> "Oct 2026" */
export function shortRoadmapDate(s: string | null | undefined): string {
  if (!s) return 'Not stated';
  const m = s.match(/^([A-Za-z]+)\s+CY(\d{4})$/);
  if (m) return `${m[1].slice(0, 3)} ${m[2]}`;
  return s;
}

export function roadmapUrl(id: number | null) {
  return id ? `https://www.microsoft.com/microsoft-365/roadmap?id=${id}` : null;
}

export function tagLabel(tag: string) {
  return tag.replace(/-/g, ' ').replace(/\bm365\b/g, 'M365').replace(/\bmcp\b/g, 'MCP').replace(/\bdlp\b/g, 'DLP').replace(/\bpayg\b/g, 'PAYG')
    .replace(/\bp3\b/g, 'P3').replace(/\be7\b/g, 'E7').replace(/\bid\b/g, 'ID').replace(/\bai\b/g, 'AI').replace(/\bubb\b/g, 'UBB');
}

export function cloudShort(c: string) {
  return c.replace('Worldwide (Standard Multi-Tenant)', 'Worldwide').replace('GCC High', 'GCC High');
}

export function compareByAction<T extends { data: { action: string; risk: string; updated: string } }>(a: T, b: T) {
  const ar = (ACTION as any)[a.data.action]?.rank ?? 0, br = (ACTION as any)[b.data.action]?.rank ?? 0;
  if (br !== ar) return br - ar;
  const rr = (RISK as any)[b.data.risk].rank - (RISK as any)[a.data.risk].rank;
  if (rr !== 0) return rr;
  return b.data.updated.localeCompare(a.data.updated);
}

export function extractRationale(body: string | undefined): { risk?: string; cost?: string; impact?: string } {
  if (!body) return {};
  const m = body.match(/<!--\s*rationale\s*([\s\S]*?)-->/);
  if (!m) return {};
  const out: Record<string, string> = {};
  for (const line of m[1].split('\n')) {
    const mm = line.match(/^\s*(risk|cost|impact):\s*(.+)$/i);
    if (mm) out[mm[1].toLowerCase()] = mm[2].trim();
  }
  return out;
}

export function excerpt(body: string | undefined, max = 400): string {
  if (!body) return '';
  const text = body
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^#+\s.*$/gm, '')
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? text.slice(0, max).replace(/\s\S*$/, '') + '…' : text;
}

export function youtubeSearchUrl(title: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`Microsoft ${title}`)}`;
}

export function learnSearchUrl(title: string) {
  return `https://learn.microsoft.com/search/?terms=${encodeURIComponent(title)}`;
}
