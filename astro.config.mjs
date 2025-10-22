// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ldpgroup.com',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto'
	}
});
