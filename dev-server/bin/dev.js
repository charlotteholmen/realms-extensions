#!/usr/bin/env node
/**
 * CLI: realms-ext-dev [ext_id]
 *
 * Starts a Vite dev server for the given extension.
 * If ext_id is omitted, infers it from the cwd (expects to be in frontend-rt/).
 */
import { createServer } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const devServerRoot = resolve(__dirname, '..');
const config = JSON.parse(readFileSync(resolve(devServerRoot, 'dev-config.json'), 'utf-8'));

// Determine extension ID and path
let extId = process.argv[2];
let extFrontendRt;

if (extId) {
	extFrontendRt = resolve(devServerRoot, '..', 'extensions', extId, 'frontend-rt');
} else {
	// Infer from cwd
	const cwd = process.cwd();
	if (cwd.endsWith('frontend-rt')) {
		extId = basename(dirname(cwd));
		extFrontendRt = cwd;
	} else if (existsSync(resolve(cwd, 'frontend-rt'))) {
		extId = basename(cwd);
		extFrontendRt = resolve(cwd, 'frontend-rt');
	} else {
		console.error('Usage: realms-ext-dev [ext_id]');
		console.error('  Or run from inside an extension directory.');
		process.exit(1);
	}
}

const indexTs = resolve(extFrontendRt, 'src', 'index.ts');
if (!existsSync(indexTs)) {
	console.error(`Extension entry not found: ${indexTs}`);
	process.exit(1);
}

console.log(`\n  Starting dev server for extension: ${extId}`);
console.log(`  Source: ${extFrontendRt}/src/\n`);

const server = await createServer({
	configFile: false,
	root: devServerRoot,
	plugins: [svelte({ compilerOptions: { dev: false }, emitCss: false }), tailwindcss()],
	define: {
		__EXT_ID__: JSON.stringify(extId),
		__BACKEND_CANISTER_ID__: JSON.stringify(config.backendCanisterId),
		__FILE_REGISTRY_CANISTER_ID__: JSON.stringify(config.fileRegistryCanisterId),
	},
	resolve: {
		alias: {
			'/__ext_index__': indexTs,
			'/__dev_entry.ts': resolve(devServerRoot, 'dev-entry.ts'),
		},
		dedupe: ['svelte'],
	},
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

await server.listen();
server.printUrls();
