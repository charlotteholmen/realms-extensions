import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

const CANISTER_URL = 'https://pqwsi-vyaaa-aaaau-agrbq-cai.icp0.io';

export default defineConfig({
	plugins: [svelte(), tailwindcss()],
	server: {
		port: 5555,
		open: false,
		watch: { usePolling: true, interval: 500 },
		proxy: {
			'/custom': { target: CANISTER_URL, changeOrigin: true },
			'/images': { target: CANISTER_URL, changeOrigin: true },
		},
	},
});
