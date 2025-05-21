// @ts-ignore
// import config from 'config-svelte';

// export default config();


//Newly Added Config for our deployment

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
//Must update game name when we need builds inside specific gameName folder
const gameName="scatter";
export default {
    preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: `../../static/apps/${gameName}`,
			assets: `../../static/apps/${gameName}`,
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};
