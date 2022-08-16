import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://milkyweb.app',
	// Enable Preact to support Preact JSX components.
	integrations: [preact(), prefetch(), sitemap()],
});
