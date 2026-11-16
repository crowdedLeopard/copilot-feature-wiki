// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { LEGACY_DESK_TOPIC } from './config/taxonomy.mjs';

const SITE_URL = process.env.SITE_URL ?? 'https://crowdedleopard.github.io';
const BASE = process.env.SITE_BASE ?? '/copilot-feature-wiki';

/**
 * Wiki pages link to each other with root-relative paths (/features/x/), which keeps the Markdown
 * portable. On the published site those links need the Pages base path in front, and external
 * links should open in a new tab.
 */
const baseLinks = {
  name: 'release-ledger-links',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties?.href;
      if (typeof href !== 'string') return;
      if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith(BASE + '/')) {
        ctx.setProperty(node, 'href', BASE + href);
      } else if (/^https?:\/\//.test(href)) {
        ctx.setProperty(node, 'rel', 'noopener');
      }
    },
  },
};

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: 'always',
  redirects: {
    // The atlas is the graph view; keep the obvious address working.
    '/graph': `${BASE}/atlas/`,
    // Topics were called desks until November 2026. Old addresses still land on the right page.
    '/desks': `${BASE}/topics/`,
    ...Object.fromEntries(Object.entries(LEGACY_DESK_TOPIC).flatMap(([desk, topic]) => [
      [`/desks/${desk}`, `${BASE}/topics/${topic}/`],
      ...(desk === topic ? [] : [[`/radar/${desk}`, `${BASE}/radar/${topic}/`]]),
    ])),
  },
  integrations: [sitemap()],
  markdown: {
    processor: satteri({ hastPlugins: [baseLinks] }),
    shikiConfig: { theme: 'github-light' },
  },
  build: { format: 'directory', assets: 'assets' },
});
