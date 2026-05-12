<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	const cn = ctx.theme?.cn ?? ((...classes: string[]) => classes.filter(Boolean).join(' '));

	// ── Types ────────────────────────────────────────────────

	type Kind = 'extension' | 'codex';
	type TabId = 'installed' | 'browse' | 'upload';

	interface Registry {
		canister_id: string;
		canister_type: string;
	}

	interface InstalledItem {
		kind: Kind;
		id: string;
		version: string;
		source: { registry_canister_id?: string; version?: string } | null;
		manifest: Record<string, any> | null;
	}

	interface RegistryExtension {
		ext_id: string;
		versions: string[];
		latest: string;
		manifest: Record<string, unknown> | null;
	}

	interface RegistryCodex {
		codex_id: string;
		versions: string[];
		latest: string;
	}

	interface CatalogEntry {
		kind: Kind;
		id: string;
		versions: string[];
		latest: string;
		manifest: Record<string, any> | null;
		registryCanisterId: string;
	}

	interface Toast {
		id: number;
		type: 'success' | 'error' | 'info';
		text: string;
	}

	// ── File registry HTTP client ────────────────────────────

	const FILE_REGISTRY_FALLBACK = ctx.config?.fileRegistryCanisterId || '';

	function fileRegistryBaseUrlFor(canisterId: string): string {
		const host = typeof window !== 'undefined' ? window.location.host : '';
		const isLocal = host.includes('localhost') || host.includes('127.0.0.1');
		if (isLocal) {
			const port = host.split(':')[1] ?? '4943';
			return `http://${canisterId}.localhost:${port}`;
		}
		return `https://${canisterId}.icp0.io`;
	}

	async function fetchJson<T>(url: string): Promise<T> {
		const resp = await fetch(url, { headers: { Accept: 'application/json' } });
		if (!resp.ok) throw new Error(`HTTP ${resp.status} from ${url}: ${await resp.text().catch(() => '')}`);
		return (await resp.json()) as T;
	}

	async function listRegistryExtensions(canisterId: string): Promise<RegistryExtension[]> {
		return fetchJson<RegistryExtension[]>(`${fileRegistryBaseUrlFor(canisterId)}/api/extensions`);
	}

	async function listRegistryCodices(canisterId: string): Promise<RegistryCodex[]> {
		return fetchJson<RegistryCodex[]>(`${fileRegistryBaseUrlFor(canisterId)}/api/codices`);
	}

	function compareVersions(a: string, b: string): number {
		const pa = a.split('-', 1)[0].split('.').map((n) => parseInt(n, 10) || 0);
		const pb = b.split('-', 1)[0].split('.').map((n) => parseInt(n, 10) || 0);
		const len = Math.max(pa.length, pb.length);
		for (let i = 0; i < len; i++) {
			const x = pa[i] ?? 0;
			const y = pb[i] ?? 0;
			if (x !== y) return x - y;
		}
		if (a === b) return 0;
		return a < b ? -1 : 1;
	}

	function parseRaw(raw: any): any {
		return typeof raw === 'string' ? JSON.parse(raw) : raw;
	}

	// ── State ────────────────────────────────────────────────

	let activeTab = $state<TabId>('installed');

	let registries = $state<Registry[]>([]);
	let registriesLoading = $state(true);
	let registriesError = $state('');
	let marketplaceCanisterId = $state('');

	let installed = $state<InstalledItem[]>([]);
	let installedLoading = $state(true);
	let installedError = $state('');

	let registryEntries = $state<CatalogEntry[]>([]);
	let registryLoading = $state(false);
	let registryErrors = $state<string[]>([]);

	let busy = $state<Record<string, string>>({});
	let toasts = $state<Toast[]>([]);
	let toastCounter = 0;

	let uploadKind = $state<Kind>('extension');
	let uploadId = $state('');
	let uploadFiles = $state<{ path: string; size: number; content: string }[]>([]);
	let uploadRunInit = $state(true);
	let uploadBusy = $state(false);
	let fileInput = $state<HTMLInputElement | null>(null);

	let uploadTotalBytes = $derived(uploadFiles.reduce((acc, f) => acc + f.size, 0));
	let uploadOverIngressLimit = $derived(uploadTotalBytes > 1.8 * 1024 * 1024);

	let isAuth = $derived(ctx.isAuthenticated !== false);

	// ── Helpers ──────────────────────────────────────────────

	function rowKey(kind: Kind, id: string): string {
		return `${kind}:${id}`;
	}

	function setBusy(kind: Kind, id: string, label: string) {
		busy = { ...busy, [rowKey(kind, id)]: label };
	}

	function clearBusy(kind: Kind, id: string) {
		const next = { ...busy };
		delete next[rowKey(kind, id)];
		busy = next;
	}

	function pushToast(type: Toast['type'], text: string) {
		const id = ++toastCounter;
		toasts = [...toasts, { id, type, text }];
		setTimeout(() => {
			toasts = toasts.filter((t) => t.id !== id);
		}, 5000);
	}

	function fmtSize(bytes: number): string {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
	}

	function shortId(s: string, n = 8): string {
		return s.length > n ? `${s.slice(0, n)}…` : s;
	}

	function notifySidebarRefresh() {
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('realms:extensions-changed'));
		}
	}

	// ── Loading ──────────────────────────────────────────────

	async function loadRegistriesFromBackend() {
		registriesLoading = true;
		registriesError = '';
		try {
			const raw = await ctx.backend.status();
			const resp = parseRaw(raw);
			if (resp?.success && resp?.data?.status) {
				const canisters: { canister_id: string; canister_type: string }[] =
					resp.data.status.canisters ?? [];
				const fileRegs = canisters
					.filter((c) => c.canister_type === 'file_registry')
					.map((c) => ({ canister_id: c.canister_id, canister_type: c.canister_type }));
				registries = fileRegs as Registry[];
				const mp = canisters.find((c) => c.canister_type === 'marketplace');
				marketplaceCanisterId = mp?.canister_id ?? '';
			} else {
				registries = [];
				registriesError = 'status() did not return a success payload';
			}
		} catch (e: any) {
			registriesError = e?.message ?? String(e);
			registries = [];
		} finally {
			registriesLoading = false;
		}
	}

	async function loadInstalled() {
		installedLoading = true;
		installedError = '';
		try {
			const [extRaw, codexRaw] = await Promise.all([
				ctx.backend.list_runtime_extensions(),
				ctx.backend.list_codex_packages(),
			]);

			const items: InstalledItem[] = [];

			const extParsed = parseRaw(extRaw);
			if (extParsed?.success) {
				const ids: string[] = extParsed.runtime_extensions ?? [];
				const manifests: Record<string, any> = extParsed.all_manifests ?? {};
				const sources: Record<string, any> = extParsed.sources ?? {};
				for (const id of ids) {
					const m = manifests?.[id] ?? {};
					items.push({ kind: 'extension', id, version: m?.version ?? '', source: sources?.[id] ?? null, manifest: m });
				}
			}

			const codexParsed = parseRaw(codexRaw);
			if (codexParsed?.success) {
				const ids: string[] = codexParsed.codex_packages ?? [];
				const manifests: Record<string, any> = codexParsed.manifests ?? {};
				for (const id of ids) {
					const m = manifests?.[id] ?? {};
					items.push({ kind: 'codex', id, version: m?.version ?? '', source: null, manifest: m });
				}
			}

			installed = items.sort((a, b) =>
				a.kind === b.kind ? a.id.localeCompare(b.id) : a.kind.localeCompare(b.kind),
			);
		} catch (e: any) {
			installedError = e?.message ?? String(e);
		} finally {
			installedLoading = false;
		}
	}

	async function loadRegistryCatalog() {
		registryLoading = true;
		registryErrors = [];
		const out: CatalogEntry[] = [];

		const regsToQuery = registries.length > 0
			? registries
			: FILE_REGISTRY_FALLBACK
				? [{ canister_id: FILE_REGISTRY_FALLBACK, canister_type: 'file_registry' }]
				: [];

	for (const reg of regsToQuery) {
		const errors: string[] = [];
		const exts = await listRegistryExtensions(reg.canister_id).catch((e: any) => {
			errors.push(`extensions: ${e?.message ?? String(e)}`);
			return [] as RegistryExtension[];
		});
		const codices = await listRegistryCodices(reg.canister_id).catch((e: any) => {
			errors.push(`codices: ${e?.message ?? String(e)}`);
			return [] as RegistryCodex[];
		});
		for (const e of exts) {
			out.push({
				kind: 'extension', id: e.ext_id, versions: e.versions, latest: e.latest,
				manifest: e.manifest as any, registryCanisterId: reg.canister_id,
			});
		}
		for (const c of codices) {
			out.push({
				kind: 'codex', id: c.codex_id, versions: c.versions, latest: c.latest,
				manifest: null, registryCanisterId: reg.canister_id,
			});
		}
		if (errors.length > 0 && exts.length === 0 && codices.length === 0) {
			registryErrors = [
				...registryErrors,
				`Failed to load from registry ${shortId(reg.canister_id)}: ${errors.join('; ')}`,
			];
		}
	}

		registryEntries = out.sort((a, b) =>
			a.kind === b.kind ? a.id.localeCompare(b.id) : a.kind.localeCompare(b.kind),
		);
		registryLoading = false;
	}

	async function refreshAll() {
		await loadRegistriesFromBackend();
		await Promise.all([loadInstalled(), loadRegistryCatalog()]);
	}

	// ── Mutations: Installed ─────────────────────────────────

	async function uninstall(item: InstalledItem) {
		const ok = confirm(`Uninstall ${item.id}? Data written by the package will remain, but the package itself will be removed.`);
		if (!ok) return;

		setBusy(item.kind, item.id, `Uninstalling ${item.id}…`);
		try {
			const args = JSON.stringify(
				item.kind === 'extension' ? { extension_id: item.id } : { codex_id: item.id },
			);
			const raw = item.kind === 'extension'
				? await ctx.backend.uninstall_extension(args)
				: await ctx.backend.uninstall_codex(args);
			const parsed = parseRaw(raw);
			if (!parsed?.success) throw new Error(parsed?.error ?? 'Unknown error');
			pushToast('success', `Uninstalled ${item.id}`);
			notifySidebarRefresh();
			await Promise.all([loadInstalled(), loadRegistryCatalog()]);
		} catch (e: any) {
			pushToast('error', e?.message ?? String(e));
		} finally {
			clearBusy(item.kind, item.id);
		}
	}

	async function reloadCodex(item: InstalledItem) {
		setBusy(item.kind, item.id, `Reloading ${item.id}…`);
		try {
			const raw = await ctx.backend.reload_codex(JSON.stringify({ codex_id: item.id, run_init: false }));
			const parsed = parseRaw(raw);
			if (!parsed?.success) throw new Error(parsed?.error ?? 'Unknown error');
			if (parsed.init_warning) pushToast('info', `Init warning: ${parsed.init_warning}`);
			pushToast('success', `Reloaded ${item.id}`);
		} catch (e: any) {
			pushToast('error', e?.message ?? String(e));
		} finally {
			clearBusy(item.kind, item.id);
		}
	}

	async function updateInstalled(item: InstalledItem) {
		const candidate = registryEntries.find((c) => c.kind === item.kind && c.id === item.id);
		if (!candidate || !candidate.latest) return;
		if (item.version && compareVersions(candidate.latest, item.version) <= 0) return;
		const ok = confirm(`Update ${item.id} from v${item.version || '?'} to v${candidate.latest}?`);
		if (!ok) return;
		await installFromRegistry(candidate, candidate.latest);
	}

	// ── Mutations: Browse ────────────────────────────────────

	async function installFromRegistry(entry: CatalogEntry, ver: string) {
		setBusy(entry.kind, entry.id, `Installing ${entry.id}…`);
		try {
			let raw: string;
			if (entry.kind === 'extension') {
				raw = await ctx.backend.install_extension_from_registry(
					JSON.stringify({ registry_canister_id: entry.registryCanisterId, ext_id: entry.id, version: ver }),
				);
			} else {
				raw = await ctx.backend.install_codex_from_registry(
					JSON.stringify({ registry_canister_id: entry.registryCanisterId, codex_id: entry.id, version: ver, run_init: true }),
				);
			}
			const parsed = parseRaw(raw);
			if (!parsed?.success) throw new Error(parsed?.error ?? 'Unknown error');
			if (parsed.init_warning) pushToast('info', `Init warning: ${parsed.init_warning}`);
			pushToast('success', `Installed ${entry.id} (v${ver})`);
			notifySidebarRefresh();
			await loadInstalled();
		} catch (e: any) {
			pushToast('error', e?.message ?? String(e));
		} finally {
			clearBusy(entry.kind, entry.id);
		}
	}

	// ── Upload ───────────────────────────────────────────────

	async function readFileAsText(file: File): Promise<string> {
		return await new Promise<string>((resolve, reject) => {
			const r = new FileReader();
			r.onload = () => resolve(String(r.result ?? ''));
			r.onerror = () => reject(r.error);
			r.readAsText(file);
		});
	}

	async function onFilesSelected(evt: Event) {
		const input = evt.target as HTMLInputElement;
		if (!input.files) return;
		const collected: typeof uploadFiles = [];
		for (const f of Array.from(input.files)) {
			const rel = (f as any).webkitRelativePath as string | undefined;
			let path = rel && rel.length > 0 ? rel : f.name;
			const slash = path.indexOf('/');
			if (rel && slash >= 0) path = path.slice(slash + 1);
			collected.push({ path, size: f.size, content: await readFileAsText(f) });
		}
		uploadFiles = collected;
	}

	function clearUpload() {
		uploadFiles = [];
		if (fileInput) fileInput.value = '';
	}

	async function performUpload() {
		if (!uploadId || uploadFiles.length === 0) return;
		uploadBusy = true;
		try {
			const filesMap: Record<string, string> = {};
			for (const f of uploadFiles) filesMap[f.path] = f.content;

			let raw: string;
			if (uploadKind === 'extension') {
				raw = await ctx.backend.install_extension(JSON.stringify({ extension_id: uploadId, files: filesMap }));
			} else {
				raw = await ctx.backend.install_codex(JSON.stringify({ codex_id: uploadId, files: filesMap, run_init: uploadRunInit }));
			}
			const parsed = parseRaw(raw);
			if (!parsed?.success) throw new Error(parsed?.error ?? 'Unknown error');
			if (parsed.init_warning) pushToast('info', `Init warning: ${parsed.init_warning}`);
			pushToast('success', `Installed ${uploadId}`);
			notifySidebarRefresh();
			clearUpload();
			uploadId = '';
			await loadInstalled();
		} catch (e: any) {
			pushToast('error', e?.message ?? String(e));
		} finally {
			uploadBusy = false;
		}
	}

	// ── Derived helpers ──────────────────────────────────────

	function findCatalogEntry(item: InstalledItem): CatalogEntry | undefined {
		return registryEntries.find((c) => c.kind === item.kind && c.id === item.id);
	}

	function statusFor(item: InstalledItem): 'installed' | 'outdated' | 'unknown' {
		const c = findCatalogEntry(item);
		if (!c || !c.latest || !item.version) return 'unknown';
		return compareVersions(c.latest, item.version) > 0 ? 'outdated' : 'installed';
	}

	function isInstalled(entry: CatalogEntry): InstalledItem | undefined {
		return installed.find((i) => i.kind === entry.kind && i.id === entry.id);
	}

	// Badge color helpers
	function kindBadge(kind: Kind): string {
		return kind === 'extension'
			? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300'
			: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300';
	}

	function statusBadge(st: string): { cls: string; label: string } {
		if (st === 'outdated') return { cls: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300', label: 'update available' };
		if (st === 'installed') return { cls: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300', label: 'installed' };
		return { cls: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400', label: 'unknown' };
	}

	const spinnerSvg = `<svg class="inline-block w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>`;

	// ── Lifecycle ─────────────────────────────────────────────

	$effect(() => {
		void refreshAll();
	});
</script>

<div class={cn('max-w-5xl mx-auto p-6')}>
	<!-- Hero header -->
	<div class={cn(
		'flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4',
		'bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20',
		'border-2 border-indigo-200 dark:border-indigo-800 rounded-xl p-5 mb-5',
	)}>
		<div>
			<h1 class={cn('text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-1')}>
				Package Manager
				<span class={cn('text-xs font-normal text-indigo-600 dark:text-indigo-400 ml-2')}>
					v{ctx.config?.version || ''}
				</span>
			</h1>
			<p class={cn('text-sm text-indigo-700/80 dark:text-indigo-300/80')}>
				Install, update, and uninstall extensions and codex packages from
				connected file registries.
			</p>
		</div>
		<button
			onclick={refreshAll}
			disabled={installedLoading || registryLoading || registriesLoading}
			class={cn(
				'px-4 py-2 text-sm font-medium border border-indigo-300 dark:border-indigo-700 rounded-lg',
				'text-indigo-700 dark:text-indigo-300 bg-white/60 dark:bg-gray-800/40',
				'hover:bg-white dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
			)}
		>
			Refresh
		</button>
	</div>

	<!-- Toasts -->
	{#if toasts.length > 0}
		<div class={cn('fixed top-5 right-5 z-50 flex flex-col gap-2 w-80')}>
			{#each toasts as toast (toast.id)}
				<div class={cn(
					'px-4 py-3 rounded-lg text-sm text-white shadow-lg',
					toast.type === 'success' ? 'bg-green-700' : toast.type === 'error' ? 'bg-red-700' : 'bg-blue-700',
				)}>
					{toast.text}
				</div>
			{/each}
		</div>
	{/if}

	<!-- Tabs -->
	<nav class={cn('flex border-b border-gray-200 dark:border-gray-700 mb-5')}>
		<button
			onclick={() => (activeTab = 'installed')}
			class={cn(
				'px-5 py-2.5 text-sm font-medium border-b-2 inline-flex items-center gap-2 transition-colors',
				activeTab === 'installed'
					? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
					: 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
			)}
		>
			Installed
			<span class={cn(
				'text-xs px-2 py-0.5 rounded-full',
				activeTab === 'installed'
					? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
					: 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400',
			)}>{installed.length}</span>
		</button>
		<button
			onclick={() => (activeTab = 'browse')}
			class={cn(
				'px-5 py-2.5 text-sm font-medium border-b-2 inline-flex items-center gap-2 transition-colors',
				activeTab === 'browse'
					? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
					: 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
			)}
		>
			Browse
			<span class={cn(
				'text-xs px-2 py-0.5 rounded-full',
				activeTab === 'browse'
					? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
					: 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400',
			)}>{registryEntries.length}</span>
		</button>
		{#if isAuth}
			<button
				onclick={() => (activeTab = 'upload')}
				class={cn(
					'px-5 py-2.5 text-sm font-medium border-b-2 transition-colors',
					activeTab === 'upload'
						? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
						: 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
				)}
			>
				Upload
			</button>
		{/if}
	</nav>

	<!-- ═══ Installed Tab ═══ -->
	{#if activeTab === 'installed'}
		<div class={cn('bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5')}>
			{#if installedLoading}
				<p class={cn('text-sm text-gray-500 dark:text-gray-400 text-center py-12')}>Loading installed packages…</p>
			{:else if installedError}
				<div class={cn('p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300')}>
					{installedError}
				</div>
			{:else if installed.length === 0}
				<p class={cn('text-sm text-gray-500 dark:text-gray-400 text-center py-12')}>
					No packages installed yet. Browse a registry or upload files to install your first package.
				</p>
			{:else}
				<div class={cn('overflow-x-auto')}>
					<table class={cn('w-full text-sm')}>
						<thead>
							<tr class={cn('bg-gray-50 dark:bg-gray-700/50')}>
								<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Type</th>
								<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>ID</th>
								<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Installed</th>
								<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Latest</th>
								<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Status</th>
								<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Source</th>
								<th class={cn('px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Actions</th>
							</tr>
						</thead>
						<tbody class={cn('divide-y divide-gray-100 dark:divide-gray-700')}>
							{#each installed as item (rowKey(item.kind, item.id))}
								{@const st = statusFor(item)}
								{@const cat = findCatalogEntry(item)}
								{@const stBadge = statusBadge(st)}
								{@const rowBusy = busy[rowKey(item.kind, item.id)]}
								<tr class={cn('hover:bg-gray-50 dark:hover:bg-gray-700/30')}>
									<td class={cn('px-4 py-3')}>
										<span class={cn('inline-block text-xs font-medium px-2 py-0.5 rounded-full', kindBadge(item.kind))}>{item.kind}</span>
									</td>
									<td class={cn('px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300')}>{item.id}</td>
									<td class={cn('px-4 py-3 text-gray-700 dark:text-gray-300')}>{item.version || '—'}</td>
									<td class={cn('px-4 py-3 text-gray-700 dark:text-gray-300')}>{cat?.latest ?? '—'}</td>
									<td class={cn('px-4 py-3')}>
										<span class={cn('inline-block text-xs font-medium px-2 py-0.5 rounded-full', stBadge.cls)}>{stBadge.label}</span>
									</td>
									<td class={cn('px-4 py-3 font-mono text-xs text-gray-500 dark:text-gray-400')}>
										{item.source?.registry_canister_id ? shortId(item.source.registry_canister_id) : '—'}
									</td>
									<td class={cn('px-4 py-3 text-right whitespace-nowrap')}>
										{#if rowBusy}
											<span class={cn('inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400')}>
												{@html spinnerSvg} {rowBusy}
											</span>
										{:else}
											{#if st === 'outdated'}
												<button onclick={() => updateInstalled(item)}
													class={cn('text-xs font-medium px-3 py-1 rounded-lg bg-amber-600 text-white hover:bg-amber-700 mr-1.5')}>
													Update
												</button>
											{/if}
											{#if item.kind === 'codex'}
												<button onclick={() => reloadCodex(item)}
													class={cn('text-xs font-medium px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 mr-1.5')}>
													Reload
												</button>
											{/if}
											<button onclick={() => uninstall(item)}
												class={cn('text-xs font-medium px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700')}>
												Uninstall
											</button>
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</div>
	{/if}

	<!-- ═══ Browse Tab ═══ -->
	{#if activeTab === 'browse'}
		<div class={cn('bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5')}>
			{#if registriesLoading}
				<p class={cn('text-sm text-gray-500 dark:text-gray-400 text-center py-12')}>Loading realm info…</p>
			{:else if registriesError}
				<div class={cn('p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300 mb-4')}>
					Could not read realm.registries: {registriesError}
				</div>
			{:else if registries.length === 0 && !FILE_REGISTRY_FALLBACK}
				<p class={cn('text-sm text-gray-500 dark:text-gray-400 text-center py-12')}>
					No file registry configured for this realm. Set <code class={cn('bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs')}>file_registry_canister_id</code> via <code class={cn('bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs')}>set_canister_config</code> or add it to the deploy descriptor's <code class={cn('bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs')}>infra</code> section.
				</p>
			{:else}
				{#if registryErrors.length > 0}
					<div class={cn('space-y-2 mb-4')}>
						{#each registryErrors as err}
							<div class={cn('p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300')}>
								{err}
							</div>
						{/each}
					</div>
				{/if}

				{#if registryLoading}
					<p class={cn('text-sm text-gray-500 dark:text-gray-400 text-center py-12')}>Loading registry catalog…</p>
				{:else if registryEntries.length === 0}
					<p class={cn('text-sm text-gray-500 dark:text-gray-400 text-center py-12')}>This registry has no published packages.</p>
				{:else}
					<div class={cn('overflow-x-auto')}>
						<table class={cn('w-full text-sm')}>
							<thead>
								<tr class={cn('bg-gray-50 dark:bg-gray-700/50')}>
									<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Type</th>
									<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>ID</th>
									<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Latest</th>
									<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Registry</th>
									<th class={cn('px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Status</th>
									<th class={cn('px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide')}>Actions</th>
								</tr>
							</thead>
							<tbody class={cn('divide-y divide-gray-100 dark:divide-gray-700')}>
								{#each registryEntries as entry (rowKey(entry.kind, entry.id) + ':' + entry.registryCanisterId)}
									{@const installedItem = isInstalled(entry)}
									{@const installedVersion = installedItem?.version ?? ''}
									{@const isOutdated = installedItem && entry.latest && installedVersion && compareVersions(entry.latest, installedVersion) > 0}
									{@const rowBusy = busy[rowKey(entry.kind, entry.id)]}
									<tr class={cn('hover:bg-gray-50 dark:hover:bg-gray-700/30')}>
										<td class={cn('px-4 py-3')}>
											<span class={cn('inline-block text-xs font-medium px-2 py-0.5 rounded-full', kindBadge(entry.kind))}>{entry.kind}</span>
										</td>
										<td class={cn('px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300')}>{entry.id}</td>
										<td class={cn('px-4 py-3 text-gray-700 dark:text-gray-300')}>{entry.latest || '—'}</td>
										<td class={cn('px-4 py-3 font-mono text-xs text-gray-500 dark:text-gray-400')}>{shortId(entry.registryCanisterId)}</td>
										<td class={cn('px-4 py-3')}>
											{#if installedItem && isOutdated}
												<span class={cn('inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300')}>
													update available
												</span>
											{:else if installedItem}
												<span class={cn('inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300')}>
													installed
												</span>
											{:else}
												<span class={cn('inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400')}>
													not installed
												</span>
											{/if}
										</td>
										<td class={cn('px-4 py-3 text-right whitespace-nowrap')}>
											{#if rowBusy}
												<span class={cn('inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400')}>
													{@html spinnerSvg} {rowBusy}
												</span>
											{:else if !installedItem}
												<button
													onclick={() => installFromRegistry(entry, entry.latest)}
													disabled={!entry.latest}
													class={cn('text-xs font-medium px-3 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50')}
												>
													Install
												</button>
											{:else if isOutdated}
												<button
													onclick={() => installFromRegistry(entry, entry.latest)}
													class={cn('text-xs font-medium px-3 py-1 rounded-lg bg-amber-600 text-white hover:bg-amber-700')}
												>
													Update
												</button>
											{:else}
												<span class={cn('text-xs text-gray-400 dark:text-gray-500')}>v{installedVersion}</span>
											{/if}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			{/if}
		</div>
	{/if}

	<!-- ═══ Upload Tab ═══ -->
	{#if activeTab === 'upload' && isAuth}
		<div class={cn('bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 max-w-2xl')}>
			<!-- Kind selector -->
			<div class={cn('mb-4')}>
				<span class={cn('block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5')}>What are you installing?</span>
				<div class={cn('inline-flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden')}>
					<button
						onclick={() => (uploadKind = 'extension')}
						class={cn(
							'px-4 py-1.5 text-xs font-medium transition-colors',
							uploadKind === 'extension'
								? 'bg-indigo-600 text-white'
								: 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600',
						)}
					>extension</button>
					<button
						onclick={() => (uploadKind = 'codex')}
						class={cn(
							'px-4 py-1.5 text-xs font-medium transition-colors',
							uploadKind === 'codex'
								? 'bg-indigo-600 text-white'
								: 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600',
						)}
					>codex</button>
				</div>
			</div>

			<!-- ID -->
			<div class={cn('mb-4')}>
				<label for="pm-id" class={cn('block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5')}>
					{uploadKind === 'extension' ? 'Extension ID' : 'Codex ID'}
				</label>
				<input
					id="pm-id"
					type="text"
					bind:value={uploadId}
					placeholder="my_extension"
					class={cn('w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40')}
				/>
			</div>

			<!-- File picker -->
			<div class={cn('mb-4')}>
				<span class={cn('block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5')}>Files (pick a folder)</span>
				<input
					bind:this={fileInput}
					type="file"
					multiple
					webkitdirectory
					onchange={onFilesSelected}
					class={cn('block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 dark:file:bg-indigo-900/40 file:text-indigo-700 dark:file:text-indigo-300 hover:file:bg-indigo-100 dark:hover:file:bg-indigo-800/40')}
				/>
			</div>

			{#if uploadFiles.length > 0}
				<div class={cn('text-xs text-gray-500 dark:text-gray-400 mb-2')}>
					{uploadFiles.length} files selected · {fmtSize(uploadTotalBytes)}
					<button onclick={clearUpload} class={cn('ml-2 text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800')}>
						clear
					</button>
				</div>
				{#if uploadOverIngressLimit}
					<div class={cn('p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-300 mb-3')}>
						Total payload {fmtSize(uploadTotalBytes)} exceeds the ~1.8 MB ingress safe limit.
						The install call will likely be rejected; consider publishing through a file registry instead.
					</div>
				{/if}
				<ul class={cn('max-h-44 overflow-auto text-xs font-mono text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg p-2 mb-4 bg-gray-50 dark:bg-gray-900/30 list-none')}>
					{#each uploadFiles as f}
						<li class={cn('mb-0.5')}>{f.path} <span class={cn('text-gray-400 dark:text-gray-500')}>({fmtSize(f.size)})</span></li>
					{/each}
				</ul>
			{/if}

			{#if uploadKind === 'codex'}
				<label class={cn('flex items-center gap-2 mb-4 text-sm text-gray-700 dark:text-gray-300')}>
					<input type="checkbox" bind:checked={uploadRunInit}
						class={cn('w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500')} />
					Run <code class={cn('bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs')}>init.py</code> after install
				</label>
			{/if}

			<button
				onclick={performUpload}
				disabled={!uploadId || uploadFiles.length === 0 || uploadBusy}
				class={cn(
					'px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg',
					'hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2',
				)}
			>
				{#if uploadBusy}
					{@html spinnerSvg} Installing…
				{:else}
					Install
				{/if}
			</button>
		</div>
	{/if}
</div>
