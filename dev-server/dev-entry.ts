/**
 * Shared dev entry point for all runtime extensions.
 *
 * Reads the extension's index.ts mount function, creates a real
 * RealmExtensionContext backed by the test canister, and mounts.
 *
 * The extension ID is passed via the __EXT_ID__ define replacement
 * injected by the CLI launcher.
 */
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './realm_backend.did.js';

declare const __EXT_ID__: string;
declare const __BACKEND_CANISTER_ID__: string;
declare const __FILE_REGISTRY_CANISTER_ID__: string;

function readableOf<T>(value: T) {
	const subs = new Set<(v: T) => void>();
	return {
		subscribe(fn: (v: T) => void) {
			fn(value);
			subs.add(fn);
			return () => subs.delete(fn);
		},
		set(v: T) {
			value = v;
			subs.forEach((fn) => fn(v));
		},
	};
}

async function main() {
	const agent = new HttpAgent({ verifyQuerySignatures: false });
	const backend = Actor.createActor(idlFactory, {
		agent,
		canisterId: __BACKEND_CANISTER_ID__,
	});

	const ctx = {
		extensionId: __EXT_ID__,
		version: 'dev',
		backend,

		async callSync(fn: string, args?: Record<string, unknown>) {
			const raw = await (backend as any).extension_sync_call(
				__EXT_ID__, fn, JSON.stringify(args || {}),
			);
			const res = typeof raw === 'string' ? JSON.parse(raw) : raw;
			if (res?.success === false) throw new Error(res.response ?? 'extension_sync_call failed');
			if (!res?.response) return res;
			try { return JSON.parse(res.response); } catch { return res.response; }
		},
		async callAsync(fn: string, args?: Record<string, unknown>) {
			const raw = await (backend as any).extension_async_call(
				__EXT_ID__, fn, JSON.stringify(args || {}),
			);
			const res = typeof raw === 'string' ? JSON.parse(raw) : raw;
			if (res?.success === false) throw new Error(res.response ?? 'extension_async_call failed');
			if (!res?.response) return res;
			try { return JSON.parse(res.response); } catch { return res.response; }
		},

		principal: readableOf(''),
		isAuthenticated: readableOf(false),
		userProfiles: readableOf([] as string[]),

		realmInfo: readableOf({
			name: '',
			welcomeMessage: '',
			manifesto: '',
			registries: [],
			quarters: [],
			isQuarter: false,
			parentRealmCanisterId: '',
			loading: true,
			error: null,
		}),

		config: {
			ckbtc_ledger_canister_id: '',
			ckbtc_indexer_canister_id: '',
			token_backend_canister_id: '',
			canisterId: __BACKEND_CANISTER_ID__,
			fileRegistryCanisterId: __FILE_REGISTRY_CANISTER_ID__,
		},

		navigate: async (path: string) => {
			console.log('[dev] navigate:', path);
		},

		t: readableOf((key: string) => key),
		locale: readableOf('en'),

		notifications: {
			items: readableOf([]),
			unreadCount: readableOf(0),
			load: async () => {},
			markAsRead: async () => {},
		},

		theme: {
			cn: (...classes: (string | undefined | null | false)[]) =>
				classes.filter(Boolean).join(' '),
		},

		ui: {
			AccessDenied: null as any,
			accessDeniedOperation: () => null,
			MonacoEditor: null as any,
			MonacoDiffEditor: null as any,
		},
	};

	const mountModule = await import(/* @vite-ignore */ `/__ext_index__`);
	const mount = mountModule.default;
	const target = document.getElementById('ext-mount')!;
	document.getElementById('dev-label')!.textContent = `dev · ${__EXT_ID__}`;
	mount(target, ctx);
}

main().catch(console.error);
