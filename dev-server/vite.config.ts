import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const config = JSON.parse(readFileSync(resolve(__dirname, 'dev-config.json'), 'utf-8'));

export default defineConfig({
	plugins: [svelte(), tailwindcss()],
	server: {
		port: 5555,
		open: false,
		watch: { usePolling: true, interval: 500 },
		proxy: {
			'/api': { target: config.host, changeOrigin: true },
			'/custom': { target: config.canisterUrl, changeOrigin: true },
			'/images': { target: config.canisterUrl, changeOrigin: true },
		},
	},
});
