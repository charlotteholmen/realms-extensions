import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

export default defineConfig({
	plugins: [svelte({ emitCss: false })],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'PublicDashboardExt',
			formats: ['es'],
			fileName: () => 'index.js',
		},
		rollupOptions: {
			external: ['leaflet', 'h3-js'],
			output: {
				inlineDynamicImports: true,
			},
		},
		cssCodeSplit: false,
		minify: 'esbuild',
		sourcemap: false,
		target: 'es2020',
		emptyOutDir: true,
	},
});
