import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({ postcss: true }),

	kit: {
		adapter: adapter(),
		alias: {
			"$components": "./src/lib/components",
			"$sections": "./src/lib/sections"
		}
	}
};

export default config;
