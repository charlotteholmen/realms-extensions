<script lang="ts">
	/**
	 * Package Manager — admin UI for installing, updating, and uninstalling
	 * runtime extensions and codex packages on this realm.
	 *
	 * Runtime-bundle version (Issue #168 Layer 2). Everything host-specific
	 * arrives via props; nothing is imported from the host's $lib/* modules.
	 *
	 * Backend contract (already implemented in src/realm_backend/main.py):
	 *   - install_extension({ extension_id, files })
	 *   - install_extension_from_registry({ registry_canister_id, ext_id, version? })
	 *   - uninstall_extension({ extension_id })
	 *   - list_runtime_extensions()
	 *   - install_codex({ codex_id, files, run_init? })
	 *   - install_codex_from_registry({ registry_canister_id, codex_id, version?, run_init? })
	 *   - uninstall_codex({ codex_id })
	 *   - reload_codex({ codex_id, run_init? })
	 *   - list_codex_packages()
	 *   - status() (used here only to read realm.registries)
	 *
	 * Each mutating method is gated by EXTENSION_INSTALL / CODEX_INSTALL on
	 * the backend, granted to the admin profile by default — so this whole
	 * extension is sidebar-visible only to admins (see manifest.json).
	 */

	let {
		backend,
		extensionId,
		version,
		principal: principalProp = '',
		isAuthenticated = true,
	} = $props<{
		backend: any;
		extensionId: string;
		version: string;
		principal?: string;
		isAuthenticated?: boolean;
	}>();

	// --------------------------------------------------------------
	// Types
	// --------------------------------------------------------------

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

	// --------------------------------------------------------------
	// HTTP client for file_registry — bundled inline so the runtime
	// bundle does not depend on $lib/file-registry-client.ts in the
	// host.
	// --------------------------------------------------------------

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
		if (!resp.ok) {
			throw new Error(`HTTP ${resp.status} from ${url}: ${await resp.text().catch(() => '')}`);
		}
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

	// --------------------------------------------------------------
	// State
	// --------------------------------------------------------------

	let activeTab = $state<TabId>('installed');

	let registries = $state<Registry[]>([]);
	let registriesLoading = $state(true);
	let registriesError = $state('');

	let installed = $state<InstalledItem[]>([]);
	let installedLoading = $state(true);
	let installedError = $state('');

	let registryEntries = $state<CatalogEntry[]>([]);
	let registryLoading = $state(false);
	let registryErrors = $state<string[]>([]);

	// Per-row busy state, keyed by `${kind}:${id}`.
	let busy = $state<Record<string, string>>({});

	let toasts = $state<Toast[]>([]);
	let toastCounter = 0;

	// Upload tab state.
	let uploadKind = $state<Kind>('extension');
	let uploadId = $state('');
	let uploadFiles = $state<{ path: string; size: number; content: string }[]>([]);
	let uploadRunInit = $state(true);
	let uploadBusy = $state(false);
	let fileInput = $state<HTMLInputElement | null>(null);

	// --------------------------------------------------------------
	// Helpers
	// --------------------------------------------------------------

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

	function shortId(s: string, n = 5): string {
		return s.length > n ? `${s.slice(0, n)}…` : s;
	}

	function notifySidebarRefresh() {
		// Sidebar.svelte (host) listens for this and re-runs
		// get_sidebar_manifests() so the new entry appears immediately.
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('realms:extensions-changed'));
		}
	}

	// --------------------------------------------------------------
	// Loading
	// --------------------------------------------------------------

	async function loadRegistriesFromBackend() {
		registriesLoading = true;
		registriesError = '';
		try {
			const resp = await backend.status();
			if (resp?.success && resp.data?.status) {
				registries = (resp.data.status.registries ?? []) as Registry[];
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
				backend.list_runtime_extensions(),
				backend.list_codex_packages(),
			]);

			const items: InstalledItem[] = [];

			const extParsed = JSON.parse(extRaw);
			if (extParsed?.success) {
				const ids: string[] = extParsed.runtime_extensions ?? [];
				const manifests: Record<string, any> = extParsed.all_manifests ?? {};
				const sources: Record<string, any> = extParsed.sources ?? {};
				for (const id of ids) {
					const m = manifests?.[id] ?? {};
					items.push({
						kind: 'extension',
						id,
						version: m?.version ?? '',
						source: sources?.[id] ?? null,
						manifest: m,
					});
				}
			}

			const codexParsed = JSON.parse(codexRaw);
			if (codexParsed?.success) {
				const ids: string[] = codexParsed.codex_packages ?? [];
				const manifests: Record<string, any> = codexParsed.manifests ?? {};
				for (const id of ids) {
					const m = manifests?.[id] ?? {};
					items.push({
						kind: 'codex',
						id,
						version: m?.version ?? '',
						source: null,
						manifest: m,
					});
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

		for (const reg of registries) {
			try {
				const [exts, codices] = await Promise.all([
					listRegistryExtensions(reg.canister_id),
					listRegistryCodices(reg.canister_id),
				]);
				for (const e of exts) {
					out.push({
						kind: 'extension',
						id: e.ext_id,
						versions: e.versions,
						latest: e.latest,
						manifest: e.manifest as any,
						registryCanisterId: reg.canister_id,
					});
				}
				for (const c of codices) {
					out.push({
						kind: 'codex',
						id: c.codex_id,
						versions: c.versions,
						latest: c.latest,
						manifest: null,
						registryCanisterId: reg.canister_id,
					});
				}
			} catch (e: any) {
				registryErrors = [
					...registryErrors,
					`Failed to load packages from registry ${shortId(reg.canister_id)}: ${e?.message ?? String(e)}`,
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

	// --------------------------------------------------------------
	// Mutations — installed tab
	// --------------------------------------------------------------

	async function uninstall(item: InstalledItem) {
		const ok = confirm(
			`Uninstall ${item.id}? Any data the package wrote to the canister will remain, ` +
				`but the package itself will be removed.`,
		);
		if (!ok) return;

		setBusy(item.kind, item.id, `Uninstalling ${item.id}…`);
		try {
			const args = JSON.stringify(
				item.kind === 'extension' ? { extension_id: item.id } : { codex_id: item.id },
			);
			const raw =
				item.kind === 'extension'
					? await backend.uninstall_extension(args)
					: await backend.uninstall_codex(args);
			const parsed = JSON.parse(raw);
			if (!parsed?.success) {
				throw new Error(parsed?.error ?? 'Unknown error');
			}
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
			const raw = await backend.reload_codex(
				JSON.stringify({ codex_id: item.id, run_init: false }),
			);
			const parsed = JSON.parse(raw);
			if (!parsed?.success) {
				throw new Error(parsed?.error ?? 'Unknown error');
			}
			if (parsed.init_warning) {
				pushToast('info', `Init warning: ${parsed.init_warning}`);
			}
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

		const ok = confirm(
			`Update ${item.id} from v${item.version || '?'} to v${candidate.latest}?`,
		);
		if (!ok) return;

		await installFromRegistry(candidate, candidate.latest);
	}

	// --------------------------------------------------------------
	// Mutations — browse tab
	// --------------------------------------------------------------

	async function installFromRegistry(entry: CatalogEntry, ver: string) {
		setBusy(entry.kind, entry.id, `Installing ${entry.id}…`);
		try {
			let raw: string;
			if (entry.kind === 'extension') {
				raw = await backend.install_extension_from_registry(
					JSON.stringify({
						registry_canister_id: entry.registryCanisterId,
						ext_id: entry.id,
						version: ver,
					}),
				);
			} else {
				raw = await backend.install_codex_from_registry(
					JSON.stringify({
						registry_canister_id: entry.registryCanisterId,
						codex_id: entry.id,
						version: ver,
						run_init: true,
					}),
				);
			}
			const parsed = JSON.parse(raw);
			if (!parsed?.success) {
				throw new Error(parsed?.error ?? 'Unknown error');
			}
			if (parsed.init_warning) {
				pushToast('info', `Init warning: ${parsed.init_warning}`);
			}
			pushToast('success', `Installed ${entry.id} (v${ver})`);
			notifySidebarRefresh();
			await loadInstalled();
		} catch (e: any) {
			pushToast('error', e?.message ?? String(e));
		} finally {
			clearBusy(entry.kind, entry.id);
		}
	}

	// --------------------------------------------------------------
	// Upload tab
	// --------------------------------------------------------------

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

	let uploadTotalBytes = $derived(uploadFiles.reduce((acc, f) => acc + f.size, 0));
	let uploadOverIngressLimit = $derived(uploadTotalBytes > 1.8 * 1024 * 1024);

	async function performUpload() {
		if (!uploadId || uploadFiles.length === 0) return;
		uploadBusy = true;
		try {
			const filesMap: Record<string, string> = {};
			for (const f of uploadFiles) filesMap[f.path] = f.content;

			let raw: string;
			if (uploadKind === 'extension') {
				raw = await backend.install_extension(
					JSON.stringify({ extension_id: uploadId, files: filesMap }),
				);
			} else {
				raw = await backend.install_codex(
					JSON.stringify({ codex_id: uploadId, files: filesMap, run_init: uploadRunInit }),
				);
			}
			const parsed = JSON.parse(raw);
			if (!parsed?.success) {
				throw new Error(parsed?.error ?? 'Unknown error');
			}
			if (parsed.init_warning) {
				pushToast('info', `Init warning: ${parsed.init_warning}`);
			}
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

	// --------------------------------------------------------------
	// Derived data
	// --------------------------------------------------------------

	function findCatalogEntry(item: InstalledItem): CatalogEntry | undefined {
		return registryEntries.find((c) => c.kind === item.kind && c.id === item.id);
	}

	function statusFor(item: InstalledItem): 'installed' | 'outdated' | 'unknown' {
		const c = findCatalogEntry(item);
		if (!c || !c.latest) return 'unknown';
		if (!item.version) return 'unknown';
		return compareVersions(c.latest, item.version) > 0 ? 'outdated' : 'installed';
	}

	function isInstalled(entry: CatalogEntry): InstalledItem | undefined {
		return installed.find((i) => i.kind === entry.kind && i.id === entry.id);
	}

	// --------------------------------------------------------------
	// Lifecycle
	// --------------------------------------------------------------

	$effect(() => {
		// Run once on mount.
		void refreshAll();
	});
</script>

<div class="rt-pkg">
	<header class="hero">
		<div>
			<h1>Package Manager <small>v{version}</small></h1>
			<p class="sub">
				Install, update, and uninstall extensions and codex packages from the
				file registries this realm is connected to.
			</p>
		</div>
		<button class="btn ghost" onclick={refreshAll}
			disabled={installedLoading || registryLoading || registriesLoading}>
			Refresh
		</button>
	</header>

	{#if toasts.length > 0}
		<div class="toasts">
			{#each toasts as toast (toast.id)}
				<div class="toast toast-{toast.type}">{toast.text}</div>
			{/each}
		</div>
	{/if}

	<nav class="tabs">
		<button class:active={activeTab === 'installed'} onclick={() => (activeTab = 'installed')}>
			Installed
			<span class="count">{installed.length}</span>
		</button>
		<button class:active={activeTab === 'browse'} onclick={() => (activeTab = 'browse')}>
			Browse
			<span class="count">{registryEntries.length}</span>
		</button>
		{#if isAuthenticated}
			<button class:active={activeTab === 'upload'} onclick={() => (activeTab = 'upload')}>
				Upload
			</button>
		{/if}
	</nav>

	<!-- ============== Installed tab ============== -->
	{#if activeTab === 'installed'}
		<section class="tab-panel">
			{#if installedLoading}
				<p class="muted">Loading installed packages…</p>
			{:else if installedError}
				<div class="alert err">{installedError}</div>
			{:else if installed.length === 0}
				<p class="muted">
					No packages installed yet. Browse a registry or upload files to install your first
					package.
				</p>
			{:else}
				<div class="table-wrap">
					<table>
						<thead>
							<tr>
								<th>Type</th>
								<th>ID</th>
								<th>Installed</th>
								<th>Latest</th>
								<th>Status</th>
								<th>Source</th>
								<th class="ar">Actions</th>
							</tr>
						</thead>
						<tbody>
							{#each installed as item (rowKey(item.kind, item.id))}
								{@const st = statusFor(item)}
								{@const cat = findCatalogEntry(item)}
								{@const rowBusy = busy[rowKey(item.kind, item.id)]}
								<tr>
									<td>
										<span class="badge {item.kind}">{item.kind}</span>
									</td>
									<td class="mono">{item.id}</td>
									<td>{item.version || '—'}</td>
									<td>{cat?.latest ?? '—'}</td>
									<td>
										{#if st === 'outdated'}
											<span class="badge yellow">update available</span>
										{:else if st === 'installed'}
											<span class="badge green">installed</span>
										{:else}
											<span class="badge gray">unknown</span>
										{/if}
									</td>
									<td class="mono small">
										{item.source?.registry_canister_id
											? shortId(item.source.registry_canister_id)
											: '—'}
									</td>
									<td class="ar">
										{#if rowBusy}
											<span class="muted small">{rowBusy}</span>
										{:else}
											{#if st === 'outdated'}
												<button class="btn yellow" onclick={() => updateInstalled(item)}>
													Update
												</button>
											{/if}
											{#if item.kind === 'codex'}
												<button class="btn ghost" onclick={() => reloadCodex(item)}>
													Reload
												</button>
											{/if}
											<button class="btn red" onclick={() => uninstall(item)}>
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
		</section>
	{/if}

	<!-- ============== Browse tab ============== -->
	{#if activeTab === 'browse'}
		<section class="tab-panel">
			{#if registriesLoading}
				<p class="muted">Loading realm info…</p>
			{:else if registriesError}
				<div class="alert err">Could not read realm.registries: {registriesError}</div>
			{:else if registries.length === 0}
				<p class="muted">
					No file registries are linked to this realm. Connect one from the
					realm's settings before browsing.
				</p>
			{:else}
				{#if registryErrors.length > 0}
					<div class="alerts">
						{#each registryErrors as err}
							<div class="alert err">{err}</div>
						{/each}
					</div>
				{/if}

				{#if registryLoading}
					<p class="muted">Loading registry catalog…</p>
				{:else if registryEntries.length === 0}
					<p class="muted">This registry has no published packages.</p>
				{:else}
					<div class="table-wrap">
						<table>
							<thead>
								<tr>
									<th>Type</th>
									<th>ID</th>
									<th>Latest</th>
									<th>Registry</th>
									<th>Status</th>
									<th class="ar">Actions</th>
								</tr>
							</thead>
							<tbody>
								{#each registryEntries as entry (rowKey(entry.kind, entry.id) + ':' + entry.registryCanisterId)}
									{@const installedItem = isInstalled(entry)}
									{@const installedVersion = installedItem?.version ?? ''}
									{@const isOutdated =
										installedItem &&
										entry.latest &&
										installedVersion &&
										compareVersions(entry.latest, installedVersion) > 0}
									{@const rowBusy = busy[rowKey(entry.kind, entry.id)]}
									<tr>
										<td>
											<span class="badge {entry.kind}">{entry.kind}</span>
										</td>
										<td class="mono">{entry.id}</td>
										<td>{entry.latest || '—'}</td>
										<td class="mono small">{shortId(entry.registryCanisterId)}</td>
										<td>
											{#if installedItem && isOutdated}
												<span class="badge yellow">update available</span>
											{:else if installedItem}
												<span class="badge green">installed</span>
											{:else}
												<span class="badge gray">not installed</span>
											{/if}
										</td>
										<td class="ar">
											{#if rowBusy}
												<span class="muted small">{rowBusy}</span>
											{:else if !installedItem}
												<button
													class="btn green"
													onclick={() => installFromRegistry(entry, entry.latest)}
													disabled={!entry.latest}
												>
													Install
												</button>
											{:else if isOutdated}
												<button
													class="btn yellow"
													onclick={() => installFromRegistry(entry, entry.latest)}
												>
													Update
												</button>
											{:else}
												<span class="muted small">v{installedVersion}</span>
											{/if}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			{/if}
		</section>
	{/if}

	<!-- ============== Upload tab ============== -->
	{#if activeTab === 'upload' && isAuthenticated}
		<section class="tab-panel narrow">
			<label class="field">
				<span class="lbl">What are you installing?</span>
				<div class="seg">
					<button
						class:active={uploadKind === 'extension'}
						onclick={() => (uploadKind = 'extension')}
					>extension</button>
					<button
						class:active={uploadKind === 'codex'}
						onclick={() => (uploadKind = 'codex')}
					>codex</button>
				</div>
			</label>

			<label class="field">
				<span class="lbl">{uploadKind === 'extension' ? 'Extension ID' : 'Codex ID'}</span>
				<input bind:value={uploadId} placeholder="my_extension" />
			</label>

			<label class="field">
				<span class="lbl">Files (pick a folder)</span>
				<input
					bind:this={fileInput}
					type="file"
					multiple
					webkitdirectory
					onchange={onFilesSelected}
				/>
			</label>

			{#if uploadFiles.length > 0}
				<div class="muted small">
					{uploadFiles.length} files selected · {fmtSize(uploadTotalBytes)}
					<button class="linklike" onclick={clearUpload}>clear</button>
				</div>
				{#if uploadOverIngressLimit}
					<div class="alert warn">
						Total payload {fmtSize(uploadTotalBytes)} exceeds the ~1.8 MB ingress safe
						limit. The install call will likely be rejected; consider publishing
						through a file registry instead.
					</div>
				{/if}
				<ul class="filelist">
					{#each uploadFiles as f}
						<li><span class="mono">{f.path}</span> <span class="muted small">({fmtSize(f.size)})</span></li>
					{/each}
				</ul>
			{/if}

			{#if uploadKind === 'codex'}
				<label class="field row-field">
					<input type="checkbox" bind:checked={uploadRunInit} />
					<span>Run <code>init.py</code> after install (codex only)</span>
				</label>
			{/if}

			<div>
				<button
					class="btn green"
					onclick={performUpload}
					disabled={!uploadId || uploadFiles.length === 0 || uploadBusy}
				>
					{uploadBusy ? 'Installing…' : 'Install'}
				</button>
			</div>
		</section>
	{/if}
</div>

<style>
	.rt-pkg {
		font-family:
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			sans-serif;
		color: #0f172a;
		max-width: 1100px;
		margin: 0;
		padding: 0;
	}
	.hero {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		border: 2px solid #6366f1;
		border-radius: 12px;
		padding: 16px 20px;
		background: linear-gradient(180deg, #eef2ff 0%, #e0e7ff 100%);
		color: #312e81;
		margin-bottom: 14px;
	}
	.hero h1 {
		margin: 0 0 4px;
		font-size: 22px;
	}
	.hero h1 small {
		font-size: 12px;
		font-weight: 400;
		opacity: 0.7;
		margin-left: 6px;
	}
	.sub {
		margin: 0;
		font-size: 13px;
		opacity: 0.85;
	}

	.toasts {
		position: fixed;
		top: 18px;
		right: 18px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		z-index: 50;
	}
	.toast {
		padding: 10px 14px;
		border-radius: 8px;
		color: #fff;
		min-width: 240px;
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
		font-size: 13px;
	}
	.toast-success {
		background: #047857;
	}
	.toast-error {
		background: #b91c1c;
	}
	.toast-info {
		background: #1d4ed8;
	}

	.tabs {
		display: flex;
		gap: 0;
		border-bottom: 1px solid #cbd5e1;
		margin-bottom: 14px;
	}
	.tabs button {
		background: transparent;
		border: 0;
		padding: 10px 18px;
		cursor: pointer;
		font-size: 14px;
		color: #475569;
		border-bottom: 2px solid transparent;
		display: inline-flex;
		gap: 6px;
		align-items: center;
	}
	.tabs button.active {
		color: #1e3a8a;
		border-bottom-color: #1d4ed8;
		font-weight: 600;
	}
	.tabs button .count {
		font-size: 11px;
		background: #e2e8f0;
		color: #475569;
		padding: 1px 7px;
		border-radius: 10px;
	}
	.tabs button.active .count {
		background: #c7d2fe;
		color: #1e3a8a;
	}

	.tab-panel {
		background: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		padding: 16px;
	}
	.tab-panel.narrow {
		max-width: 640px;
	}

	.muted {
		color: #64748b;
		font-size: 13px;
	}
	.small {
		font-size: 12px;
	}
	.alert {
		padding: 10px 14px;
		border-radius: 8px;
		font-size: 13px;
		margin-bottom: 10px;
	}
	.alert.err {
		background: #fef2f2;
		color: #991b1b;
		border: 1px solid #fecaca;
	}
	.alert.warn {
		background: #fffbeb;
		color: #92400e;
		border: 1px solid #fde68a;
	}
	.alerts {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 10px;
	}

	.table-wrap {
		overflow-x: auto;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 13px;
	}
	th,
	td {
		padding: 8px 12px;
		border-bottom: 1px solid #e2e8f0;
		text-align: left;
		vertical-align: middle;
	}
	th {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #475569;
		background: #f8fafc;
	}
	td.ar,
	th.ar {
		text-align: right;
	}
	.mono {
		font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
	}

	.badge {
		display: inline-block;
		font-size: 11px;
		padding: 2px 8px;
		border-radius: 10px;
		background: #e2e8f0;
		color: #475569;
		font-weight: 500;
	}
	.badge.extension {
		background: #c7d2fe;
		color: #312e81;
	}
	.badge.codex {
		background: #ddd6fe;
		color: #5b21b6;
	}
	.badge.green {
		background: #d1fae5;
		color: #047857;
	}
	.badge.yellow {
		background: #fef3c7;
		color: #92400e;
	}
	.badge.gray {
		background: #e5e7eb;
		color: #4b5563;
	}

	.btn {
		font-size: 12px;
		padding: 5px 12px;
		margin-left: 6px;
		border: 0;
		border-radius: 6px;
		cursor: pointer;
		background: #1d4ed8;
		color: #fff;
		font-weight: 500;
	}
	.btn:hover:not(:disabled) {
		filter: brightness(1.05);
	}
	.btn:disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}
	.btn.green {
		background: #047857;
	}
	.btn.yellow {
		background: #b45309;
	}
	.btn.red {
		background: #b91c1c;
	}
	.btn.ghost {
		background: transparent;
		color: #1e3a8a;
		border: 1px solid #c7d2fe;
		margin-left: 0;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 14px;
	}
	.field .lbl {
		font-size: 12px;
		color: #475569;
		font-weight: 500;
	}
	.field input[type='text'],
	.field input:not([type]) {
		padding: 8px 10px;
		border: 1px solid #cbd5e1;
		border-radius: 6px;
		font-size: 13px;
	}
	.field.row-field {
		flex-direction: row;
		align-items: center;
		gap: 8px;
	}
	.field.row-field span {
		font-size: 13px;
	}

	.seg {
		display: inline-flex;
		gap: 0;
		border: 1px solid #cbd5e1;
		border-radius: 6px;
		overflow: hidden;
		width: fit-content;
	}
	.seg button {
		background: #fff;
		color: #475569;
		border: 0;
		padding: 6px 14px;
		font-size: 12px;
		cursor: pointer;
	}
	.seg button.active {
		background: #1d4ed8;
		color: #fff;
	}

	.linklike {
		background: transparent;
		border: 0;
		padding: 0;
		margin-left: 6px;
		color: #1d4ed8;
		text-decoration: underline;
		cursor: pointer;
		font-size: 12px;
	}

	.filelist {
		max-height: 180px;
		overflow: auto;
		font-size: 12px;
		border: 1px solid #e2e8f0;
		border-radius: 6px;
		padding: 8px 10px;
		margin-top: 8px;
		background: #f8fafc;
		list-style: none;
	}
	.filelist li {
		margin-bottom: 2px;
	}

	code {
		background: rgba(0, 0, 0, 0.06);
		padding: 1px 5px;
		border-radius: 4px;
		font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
		font-size: 0.92em;
	}
</style>
