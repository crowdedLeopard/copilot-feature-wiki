// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

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
  // The atlas is the graph view; keep the obvious address working.
  redirects: { '/graph': `${BASE}/atlas/` },
  integrations: [sitemap()],
  markdown: {
    processor: satteri({ hastPlugins: [baseLinks] }),
    shikiConfig: { theme: 'github-light' },
  },
  build: { format: 'directory', assets: 'assets' },
});
