/**
 * The tag glossary (wiki/tags.json) for the site: the name readers see for a tag, its group and the
 * one-line explanation on its tag page. The pipeline's pipeline/lib/tags.mjs reads and writes the
 * same file. A tag with no entry still gets a readable name from humaniseTag().
 */
import glossaryJson from '../../wiki/tags.json';
import { TAG_GROUPS, TAG_GROUP_BY_ID, CLOUDS } from '../../config/taxonomy.mjs';

export interface TagEntry { label: string; group: string; description: string }
export interface TagGroup { id: string; label: string; blurb: string }
export interface TagInfo extends TagEntry { tag: string; groupLabel: string; defined: boolean }

const glossary = glossaryJson as { about: string; aliases: Record<string, string>; tags: Record<string, TagEntry> };
const GROUPS = TAG_GROUPS as TagGroup[];
const GROUP_BY_ID = TAG_GROUP_BY_ID as Record<string, TagGroup>;
const CLOUD = CLOUDS as Record<string, { tag: string; short: string }>;

export const glossaryAbout: string = glossary.about;
export const tagGroups: TagGroup[] = GROUPS;

/** Fallback name for a tag with no glossary entry: "copilot-credits" -> "Copilot credits", acronyms upper-cased. */
export function humaniseTag(tag: string): string {
  const words = tag.replace(/-/g, ' ')
    .replace(/\bm365\b/g, 'M365').replace(/\bmcp\b/g, 'MCP').replace(/\bdlp\b/g, 'DLP').replace(/\bpayg\b/g, 'PAYG')
    .replace(/\bp3\b/g, 'P3').replace(/\be7\b/g, 'E7').replace(/\bid\b/g, 'ID').replace(/\bai\b/g, 'AI').replace(/\bapi\b/g, 'API')
    .replace(/\bgcc\b/g, 'GCC').replace(/\bdod\b/g, 'DoD').replace(/\bsql\b/g, 'SQL').replace(/\bcli\b/g, 'CLI');
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/** The tag that is kept for a spelling: itself, or the target of its alias. */
export function canonicalTag(tag: string): string {
  return glossary.aliases[tag] ?? tag;
}

export function tagInfo(tag: string): TagInfo {
  const t = canonicalTag(tag);
  const e = glossary.tags[t];
  const group = e?.group && GROUP_BY_ID[e.group] ? e.group : 'other';
  return {
    tag: t,
    label: e?.label || humaniseTag(t),
    group,
    groupLabel: GROUP_BY_ID[group].label,
    description: e?.description || '',
    defined: Boolean(e?.description),
  };
}

export function tagLabel(tag: string): string { return tagInfo(tag).label; }
export function tagDescription(tag: string): string { return tagInfo(tag).description; }

export interface TagWithCount extends TagInfo { count: number }

/** Tags in use, filed under their groups in TAG_GROUPS order and sorted by name. Empty groups are left out. */
export function groupTags(counts: [string, number][]): (TagGroup & { tags: TagWithCount[] })[] {
  const all = counts.map(([t, n]) => ({ ...tagInfo(t), count: n }));
  return GROUPS
    .map((g) => ({ ...g, tags: all.filter((t) => t.group === g.id).sort((a, b) => a.label.localeCompare(b.label)) }))
    .filter((g) => g.tags.length > 0);
}

/** The other tags in use from the same group, most used first. */
export function siblingTags(tag: string, counts: [string, number][], limit = 14): TagWithCount[] {
  const me = tagInfo(tag);
  return counts
    .filter(([t]) => t !== me.tag && tagInfo(t).group === me.group)
    .map(([t, n]) => ({ ...tagInfo(t), count: n }))
    .slice(0, limit);
}

/** A roadmap cloud name ("GCC High") as readers should see it, with the glossary's explanation for a tooltip. */
export function cloudInfo(roadmapName: string): { short: string; label: string; description: string; government: boolean } {
  const c = CLOUD[roadmapName];
  const info = c ? tagInfo(c.tag) : null;
  return {
    short: c?.short ?? roadmapName,
    label: info?.label ?? roadmapName,
    description: info?.description ?? '',
    government: Boolean(c) && c.tag !== 'worldwide',
  };
}
