import path from 'path';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		/* ssr: false, */

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'svelte-maths': path.resolve('src/lib')
				}
			}
		}
	}
};

export default config;
