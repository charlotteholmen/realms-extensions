import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

/**
 * Per-extension build producing a single self-contained ESM bundle for the
 * member_dashboard frontend. Uploaded to file_registry under
 *   ext/member_dashboard/<version>/frontend/dist/index.js
 * and dynamic-imported at runtime by realm_frontend's extension-loader.
 *
 * Output requirements (Issue #168):
 *   - One file: dist/index.js
 *   - ESM with default export `mount(target, props) => { unmount }`
 *   - All deps inlined (Svelte runtime, no externals) — no flowbite / no
 *     Tailwind / no SvelteKit runtime — so the bundle is standalone and
 *     works regardless of host realm_frontend's bundle graph
 *   - CSS inlined into the JS so there is no separate stylesheet to load
 */
export default defineConfig({
	plugins: [svelte({ emitCss: false })],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'MemberDashboardExt',
			formats: ['es'],
			fileName: () => 'index.js',
		},
		rollupOptions: {
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
