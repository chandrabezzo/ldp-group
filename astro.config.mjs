// @ts-check
import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
	site: 'https://ldpgroup.co.id',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto'
	},
	integrations: [astroI18next()],
	// Ensure proper asset handling for GitHub Pages
	vite: {
		build: {
			assetsInlineLimit: 0
		}
	}
});
