// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ldpgroup.co.id',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto'
	},
	// Ensure proper asset handling for GitHub Pages
	vite: {
		build: {
			assetsInlineLimit: 0
		}
	}
});
