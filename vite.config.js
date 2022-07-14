/** @type {import('vite').UserConfig} */

import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
    server: {
        port: 8080
    },
    preview: {
        port: 8080
    }
};

export default config;
