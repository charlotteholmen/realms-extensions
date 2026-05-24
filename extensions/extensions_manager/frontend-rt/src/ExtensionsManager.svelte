<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	const cn = ctx.theme?.cn ?? ((...classes: string[]) => classes.filter(Boolean).join(' '));

	interface ExtManifest {
		name: string;
		version: string;
		description?: string;
		icon?: string;
		categories?: string[];
	}

	let pkgInstalledCount: number | null = $state(null);
	let pkgUpdateCount = $state(0);
	let loading = $state(true);
	let error = $state('');

	let extensionCount = $state(0);
	let codexCount = $state(0);
	let extensionManifests: Record<string, ExtManifest> = $state({});
	let codexManifests: Record<string, ExtManifest> = $state({});

	function registryBaseUrl(canisterId: string): string | null {
		if (typeof window === 'undefined') return null;
		const host = window.location.host;
		const isLocal = host.includes('localhost') || host.includes('127.0.0.1');
		if (isLocal) {
			const port = host.split(':')[1] ?? '4943';
			return `http://${canisterId}.localhost:${port}`;
		}
		return `https://${canisterId}.icp0.io`;
	}

	function versionGreater(a: string, b: string): boolean {
		const pa = (a || '').split('-', 1)[0].split('.').map(n => parseInt(n, 10) || 0);
		const pb = (b || '').split('-', 1)[0].split('.').map(n => parseInt(n, 10) || 0);
		const len = Math.max(pa.length, pb.length);
		for (let i = 0; i < len; i++) {
			const x = pa[i] ?? 0;
			const y = pb[i] ?? 0;
			if (x !== y) return x > y;
		}
		return false;
	}

	async function loadPackages() {
		loading = true;
		error = '';
		try {
			const [extRaw, codexRaw, statusResp] = await Promise.all([
				ctx.backend.list_runtime_extensions().catch(() => '{}'),
				ctx.backend.list_codex_packages().catch(() => '{}'),
				ctx.backend.status().catch(() => null),
			]);

			const extParsed = typeof extRaw === 'string' ? JSON.parse(extRaw) : extRaw;
			const codexParsed = typeof codexRaw === 'string' ? JSON.parse(codexRaw) : codexRaw;
			const installedExt = extParsed?.success ? (extParsed.runtime_extensions ?? []) : [];
			const installedCodex = codexParsed?.success ? (codexParsed.codex_packages ?? []) : [];
			const extMfsts = extParsed?.success ? (extParsed.all_manifests ?? {}) : {};
			const codexMfsts = codexParsed?.success ? (codexParsed.manifests ?? {}) : {};
			extensionManifests = extMfsts;
			codexManifests = codexMfsts;
			extensionCount = Object.keys(extMfsts).length || installedExt.length;
			codexCount = Array.isArray(installedCodex) ? installedCodex.length : Object.keys(codexMfsts).length;
			pkgInstalledCount = extensionCount + codexCount;

			const registries = (statusResp?.success && statusResp?.data?.status?.registries) || [];
			let updates = 0;
			for (const reg of registries) {
				try {
					const base = registryBaseUrl(reg.canister_id);
					if (!base) continue;
					const [extResp, codexResp] = await Promise.all([
						fetch(`${base}/api/extensions`, { headers: { Accept: 'application/json' } }).then(r => r.ok ? r.json() : []).catch(() => []),
						fetch(`${base}/api/codices`, { headers: { Accept: 'application/json' } }).then(r => r.ok ? r.json() : []).catch(() => []),
					]);
					for (const e of extResp) {
						if (!installedExt.includes(e.ext_id)) continue;
						const installedVersion = extMfsts?.[e.ext_id]?.version;
						if (installedVersion && e.latest && versionGreater(e.latest, installedVersion)) updates++;
					}
					for (const c of codexResp) {
						if (!installedCodex.includes(c.codex_id)) continue;
						const installedVersion = codexMfsts?.[c.codex_id]?.version;
						if (installedVersion && c.latest && versionGreater(c.latest, installedVersion)) updates++;
					}
				} catch { /* unreachable registry */ }
			}
			pkgUpdateCount = updates;
		} catch (e: any) {
			error = e?.message ?? String(e);
		} finally {
			loading = false;
		}
	}

	$effect(() => {
		loadPackages();
	});
</script>

<div class="w-full px-4 max-w-none">
	<div class="flex justify-between items-center mb-6">
		<div>
			<h1 class="text-3xl font-bold text-gray-900">Extensions</h1>
			<p class="text-gray-600 mt-1">Installed extensions and codex packages</p>
		</div>
		<button
			onclick={loadPackages}
			disabled={loading}
			class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
			title="Refresh"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
			</svg>
		</button>
	</div>

	{#if error}
		<div class="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
			{error}
			<button onclick={() => error = ''} class="ml-2 text-red-600 hover:text-red-800 font-bold">&times;</button>
		</div>
	{/if}

	{#if loading}
		<div class="flex items-center justify-center py-10">
			<div class="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
		</div>
	{:else}
		<!-- Summary cards -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
			<div class="bg-white shadow-sm rounded-lg p-5 border border-gray-200">
				<div class="text-xs text-gray-500 uppercase tracking-wide font-medium">Extensions</div>
				<div class="text-3xl font-bold text-gray-900 mt-1">{extensionCount}</div>
			</div>
			<div class="bg-white shadow-sm rounded-lg p-5 border border-gray-200">
				<div class="text-xs text-gray-500 uppercase tracking-wide font-medium">Codexes</div>
				<div class="text-3xl font-bold text-gray-900 mt-1">{codexCount}</div>
			</div>
			<div class="bg-white shadow-sm rounded-lg p-5 border border-gray-200">
				<div class="text-xs text-gray-500 uppercase tracking-wide font-medium">Updates Available</div>
				<div class={cn('text-3xl font-bold mt-1', pkgUpdateCount > 0 ? 'text-yellow-600' : 'text-gray-900')}>
					{pkgUpdateCount}
				</div>
			</div>
		</div>

		<!-- Manage button -->
		<div class="mb-6">
			<button
				onclick={() => ctx.navigate?.('/extensions/package_manager')}
				class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
				</svg>
				Manage Packages
			</button>
		</div>

		<!-- Installed extensions list -->
		{#if Object.keys(extensionManifests).length > 0}
			<div class="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
				<div class="px-6 py-4 border-b border-gray-200">
					<h2 class="text-lg font-semibold text-gray-900">Installed Extensions</h2>
				</div>
				<div class="divide-y divide-gray-100">
					{#each Object.entries(extensionManifests) as [id, manifest]}
						<div class="px-6 py-3 flex items-center justify-between">
							<div class="flex items-center gap-3 min-w-0">
								<div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm shrink-0">
									{manifest.icon ? `ti-${manifest.icon}` : '📦'}
								</div>
								<div class="min-w-0">
									<div class="text-sm font-medium text-gray-900 truncate">{manifest.name || id}</div>
									{#if manifest.description}
										<div class="text-xs text-gray-500 truncate">{manifest.description}</div>
									{/if}
								</div>
							</div>
							<span class="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded shrink-0">
								v{manifest.version || '?'}
							</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Installed codexes list -->
		{#if Object.keys(codexManifests).length > 0}
			<div class="bg-white shadow-sm rounded-lg border border-gray-200">
				<div class="px-6 py-4 border-b border-gray-200">
					<h2 class="text-lg font-semibold text-gray-900">Installed Codexes</h2>
				</div>
				<div class="divide-y divide-gray-100">
					{#each Object.entries(codexManifests) as [id, manifest]}
						<div class="px-6 py-3 flex items-center justify-between">
							<div class="flex items-center gap-3 min-w-0">
								<div class="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center text-sm shrink-0">📜</div>
								<div class="min-w-0">
									<div class="text-sm font-medium text-gray-900 truncate">{manifest.name || id}</div>
									{#if manifest.description}
										<div class="text-xs text-gray-500 truncate">{manifest.description}</div>
									{/if}
								</div>
							</div>
							<span class="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded shrink-0">
								v{manifest.version || '?'}
							</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{/if}
</div>
