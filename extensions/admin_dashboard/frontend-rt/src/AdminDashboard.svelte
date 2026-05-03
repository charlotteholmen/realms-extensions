<script lang="ts">
	import InvitationManager from './InvitationManager.svelte';

	let { ctx }: { ctx: any } = $props();

	const cn = ctx.theme?.cn ?? ((...classes: string[]) => classes.filter(Boolean).join(' '));

	type TabId = 'browse' | 'export' | 'import' | 'invitations';

	interface EntityType {
		value: string;
		label: string;
		className: string;
	}

	interface ImportPreview {
		valid: boolean;
		totalEntities: number;
		totalCodexes: number;
		typeCounts: Record<string, number>;
		entities: any[];
		codexes: any[];
		error?: string;
	}

	interface Toast {
		id: number;
		type: 'success' | 'error';
		text: string;
	}

	const entityIcons: Record<string, string> = {
		Balance: '💵', Call: '📞', Codex: '📚', Contract: '📝', Dispute: '⚖️',
		Human: '🧑', Identity: '🆔', Instrument: '💰', Invoice: '🧾', Land: '🏞️',
		License: '📃', Mandate: '📜', Member: '👥', Notification: '🔔',
		Organization: '🏢', PaymentAccount: '💳', Permission: '🔐', Proposal: '🗳️',
		Realm: '🏛️', Registry: '📋', Service: '⚙️', Task: '📋',
		TaskExecution: '▶️', TaskSchedule: '⏰', TaskStep: '📌', Token: '🪙',
		Trade: '🤝', Transfer: '🔄', Treasury: '🏦', User: '👤',
		UserProfile: '📋', Vote: '✅', Zone: '🗺️',
	};

	let entityTypes: EntityType[] = $state([]);
	let selectedType = $state('');
	let activeTab: TabId = $state('browse');
	let loading = $state(true);
	let error = $state('');
	let toasts: Toast[] = $state([]);
	let toastCounter = $state(0);

	// Browse
	let items: any[] = $state([]);
	let objLoading = $state(false);
	let expandedItem: number | null = $state(null);
	let currentPage = $state(0);
	let pageSize = 10;
	let totalItems = $state(0);
	let totalPages = $state(0);

	// Delete
	let deletingId: string | null = $state(null);
	let confirmDeleteItem: any | null = $state(null);

	// Export
	let exporting = $state(false);
	let exportResult: any | null = $state(null);

	// Import
	let importMode: 'file' | 'editor' = $state('file');
	let importText = $state('');
	let importFileName = $state('');
	let importPreview: ImportPreview | null = $state(null);
	let importing = $state(false);
	let importResult: any | null = $state(null);
	let fileInput: HTMLInputElement | undefined = $state();
	let dragOver = $state(false);

	// Packages widget
	let pkgInstalledCount: number | null = $state(null);
	let pkgUpdateCount = $state(0);
	let pkgWidgetLoading = $state(true);
	let pkgWidgetError = $state('');

	// Extensions / codex counts for sidebar
	let extensionCount = $state(0);
	let codexCount = $state(0);

	function addToast(message: string, type: 'success' | 'error' = 'success') {
		const id = ++toastCounter;
		toasts = [...toasts, { id, text: message, type }];
		setTimeout(() => {
			toasts = toasts.filter(t => t.id !== id);
		}, 4000);
	}

	function getIcon(className: string): string {
		return entityIcons[className] || '📊';
	}

	function formatLabel(className: string): string {
		return className.replace(/([A-Z])/g, ' $1').trim();
	}

	async function callExt(fn: string, args: Record<string, unknown> = {}) {
		return await ctx.callSync(fn, args);
	}

	function parseEntities(response: any): { objects: any[]; pagination: any } {
		if (response?.success && response?.data?.objectsListPaginated) {
			const paginated = response.data.objectsListPaginated;
			const objects = (paginated.objects || []).map((s: any) => {
				try { return typeof s === 'string' ? JSON.parse(s) : s; } catch { return s; }
			});
			return { objects, pagination: paginated.pagination };
		}
		if (response?.data && Array.isArray(response.data)) {
			return { objects: response.data, pagination: null };
		}
		return { objects: [], pagination: null };
	}

	async function loadEntityTypes() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_entity_types');
			const classes = res?.data ?? (Array.isArray(res) ? res : []);
			entityTypes = classes.map((className: string) => ({
				value: className,
				label: `${getIcon(className)} ${formatLabel(className)}`,
				className,
			}));
			if (entityTypes.length > 0 && !selectedType) {
				selectedType = entityTypes[0].value;
			}
		} catch (e: any) {
			error = e?.message || String(e);
			entityTypes = [{ value: 'User', label: '👤 User', className: 'User' }];
			if (!selectedType) selectedType = 'User';
		} finally {
			loading = false;
		}
	}

	async function loadPackagesWidget() {
		pkgWidgetLoading = true;
		pkgWidgetError = '';
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
			const extManifests = extParsed?.success ? (extParsed.all_manifests ?? {}) : {};
			const codexManifests = codexParsed?.success ? (codexParsed.manifests ?? {}) : {};
			extensionCount = Object.keys(extManifests).length || installedExt.length;
			codexCount = Array.isArray(installedCodex) ? installedCodex.length : Object.keys(codexManifests).length;
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
						const installedVersion = extManifests?.[e.ext_id]?.version;
						if (installedVersion && e.latest && versionGreater(e.latest, installedVersion)) updates++;
					}
					for (const c of codexResp) {
						if (!installedCodex.includes(c.codex_id)) continue;
						const installedVersion = codexManifests?.[c.codex_id]?.version;
						if (installedVersion && c.latest && versionGreater(c.latest, installedVersion)) updates++;
					}
				} catch { /* unreachable registry */ }
			}
			pkgUpdateCount = updates;
		} catch (e: any) {
			pkgWidgetError = e?.message ?? String(e);
		} finally {
			pkgWidgetLoading = false;
		}
	}

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

	// ── Browse ──

	async function loadData() {
		objLoading = true;
		expandedItem = null;
		try {
			const raw = await ctx.backend.get_objects_paginated(selectedType, currentPage, pageSize, 'desc');
			const resp = typeof raw === 'string' ? JSON.parse(raw) : raw;
			const { objects, pagination } = parseEntities(resp);
			items = objects;
			if (pagination) {
				totalItems = Number(pagination.total_items || 0);
				totalPages = Number(pagination.total_pages || 0);
			} else {
				totalItems = objects.length;
				totalPages = 1;
			}
		} catch (e: any) {
			error = e?.message || String(e);
			items = [];
		} finally {
			objLoading = false;
		}
	}

	function toggleExpand(index: number) {
		expandedItem = expandedItem === index ? null : index;
	}

	function copyJSON(item: any) {
		navigator.clipboard.writeText(JSON.stringify(item, null, 2));
		addToast('JSON copied to clipboard');
	}

	function goToPage(page: number) {
		currentPage = page;
		loadData();
	}

	// ── Delete ──

	function requestDelete(item: any) {
		confirmDeleteItem = item;
	}

	function cancelDelete() {
		confirmDeleteItem = null;
	}

	async function executeDelete() {
		if (!confirmDeleteItem) return;
		const item = confirmDeleteItem;
		const entityType = item._type || selectedType;
		const entityId = item._id || item.id;
		confirmDeleteItem = null;
		deletingId = String(entityId);

		try {
			const result = await callExt('delete_entity', {
				entity_type: entityType,
				entity_id: String(entityId),
			});
			if (result?.success) {
				items = items.filter(i => !((i._id || i.id) === entityId && (i._type || selectedType) === entityType));
				totalItems = Math.max(0, totalItems - 1);
				addToast(`Deleted ${entityType}#${entityId}`);
			} else {
				addToast(result?.error || 'Delete failed', 'error');
			}
		} catch (e: any) {
			addToast(`Delete error: ${e?.message}`, 'error');
		} finally {
			deletingId = null;
		}
	}

	// ── Export ──

	async function exportEntities(all = false) {
		exporting = true;
		exportResult = null;
		try {
			const exportArgs = all
				? { include_codexes: true }
				: { entity_types: [selectedType], include_codexes: true };
			const result = await callExt('export_data', exportArgs);
			if (result?.success && result?.data) {
				const exportData = typeof result.data === 'string' ? JSON.parse(result.data) : result.data;
				exportResult = exportData;
				const msg = all
					? `Exported ${exportData.total_entities ?? '?'} entities, ${exportData.total_codexes ?? 0} codexes`
					: `Exported ${exportData.total_entities ?? '?'} entities`;
				addToast(msg);
			} else {
				addToast(result?.error || 'Export failed', 'error');
			}
		} catch (e: any) {
			addToast(`Export error: ${e?.message}`, 'error');
		} finally {
			exporting = false;
		}
	}

	function downloadExport(all = false) {
		if (!exportResult) return;
		const json = JSON.stringify(exportResult, null, 2);
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
		a.download = all ? `export_all_${ts}.json` : `export_${selectedType}_${ts}.json`;
		a.click();
		URL.revokeObjectURL(url);
		addToast('Download started');
	}

	function copyExport() {
		if (!exportResult) return;
		navigator.clipboard.writeText(JSON.stringify(exportResult, null, 2));
		addToast('Copied to clipboard');
	}

	// ── Import ──

	function handleFileSelect(event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];
		if (file) readFile(file);
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		dragOver = false;
		const file = event.dataTransfer?.files?.[0];
		if (file) readFile(file);
	}

	function readFile(file: File) {
		importFileName = file.name;
		const reader = new FileReader();
		reader.onload = (e) => {
			importText = (e.target?.result as string) || '';
			parseImportPreview();
		};
		reader.readAsText(file);
	}

	function parseImportPreview() {
		importPreview = null;
		importResult = null;
		if (!importText.trim()) return;

		try {
			const parsed = JSON.parse(importText);
			let entities: any[] = [];
			let codexes: any[] = [];

			if (Array.isArray(parsed)) {
				entities = parsed;
			} else if (parsed.entities) {
				entities = parsed.entities || [];
				codexes = parsed.codexes || [];
			} else {
				entities = [parsed];
			}

			const typeCounts: Record<string, number> = {};
			for (const ent of entities) {
				const t = ent._type || 'unknown';
				typeCounts[t] = (typeCounts[t] || 0) + 1;
			}

			importPreview = {
				totalEntities: entities.length,
				totalCodexes: codexes.length,
				typeCounts,
				valid: true,
				entities,
				codexes,
			};
		} catch (e: any) {
			importPreview = { valid: false, error: e.message, totalEntities: 0, totalCodexes: 0, typeCounts: {}, entities: [], codexes: [] };
		}
	}

	async function executeImport() {
		if (!importPreview || !importPreview.valid) return;
		importing = true;
		importResult = null;

		try {
			const allRecords = [...importPreview.entities];
			for (const codex of importPreview.codexes) {
				allRecords.push({ ...codex, _type: 'Codex' });
			}

			const result = await callExt('import_data', {
				format: 'json',
				data: JSON.stringify(allRecords),
			});

			importResult = result;
			if (result?.success) {
				const d = result.data || {};
				addToast(`Imported ${d.successful || 0} of ${d.total_records || 0} records`);
			} else {
				addToast(result?.error || 'Import failed', 'error');
			}
		} catch (e: any) {
			importResult = { success: false, error: e.message };
			addToast(`Import error: ${e?.message}`, 'error');
		} finally {
			importing = false;
		}
	}

	function clearImport() {
		importText = '';
		importFileName = '';
		importPreview = null;
		importResult = null;
		if (fileInput) fileInput.value = '';
	}

	$effect(() => {
		loadEntityTypes();
		loadPackagesWidget();
	});

	const TABS: { id: TabId; label: string }[] = [
		{ id: 'browse', label: 'Browse' },
		{ id: 'export', label: 'Export' },
		{ id: 'import', label: 'Import' },
		{ id: 'invitations', label: 'Invitations' },
	];

	let exportJson = $derived(exportResult ? JSON.stringify(exportResult, null, 2) : '');
</script>

<!-- Toast notifications -->
{#if toasts.length > 0}
	<div class="fixed top-4 right-4 z-50 flex flex-col gap-2">
		{#each toasts as toast (toast.id)}
			<div class={cn(
				'px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all',
				toast.type === 'error' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
			)}>
				{toast.text}
			</div>
		{/each}
	</div>
{/if}

<!-- Delete confirmation modal -->
{#if confirmDeleteItem}
	<div class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
		<div class="bg-white rounded-xl shadow-xl p-6 max-w-md mx-4">
			<h3 class="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3>
			<p class="text-gray-600 mb-4">
				Are you sure you want to delete <strong>{confirmDeleteItem._type || selectedType}#{confirmDeleteItem._id || confirmDeleteItem.id}</strong>?
				{#if confirmDeleteItem.name}
					<br><span class="text-gray-500">({confirmDeleteItem.name})</span>
				{/if}
			</p>
			<p class="text-red-600 text-sm mb-4">This action cannot be undone.</p>
			<div class="flex justify-end gap-3">
				<button
					onclick={cancelDelete}
					class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
				>Cancel</button>
				<button
					onclick={executeDelete}
					class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
				>Delete</button>
			</div>
		</div>
	</div>
{/if}

<div class="w-full px-4 max-w-none">
	<!-- Header -->
	<div class="flex justify-between items-center mb-6">
		<div>
			<h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
			<p class="text-gray-600 mt-1">Manage realm entities</p>
		</div>
		<button
			onclick={() => { loadEntityTypes(); loadPackagesWidget(); }}
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

	<!-- Packages widget -->
	<button
		onclick={() => ctx.navigate?.('/extensions/package_manager')}
		class="block w-full mb-4 bg-white shadow-sm rounded-lg p-4 border border-gray-200 hover:border-blue-400 hover:shadow transition-all text-left cursor-pointer"
	>
		<div class="flex items-center justify-between gap-4">
			<div class="flex items-center gap-3">
				<div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl">📦</div>
				<div>
					<div class="text-sm font-medium text-gray-700">Packages</div>
					{#if pkgWidgetLoading}
						<div class="text-xs text-gray-400">Loading…</div>
					{:else if pkgWidgetError}
						<div class="text-xs text-red-500">{pkgWidgetError}</div>
					{:else}
						<div class="text-xs text-gray-500">
							{pkgInstalledCount ?? 0} installed
							{#if pkgUpdateCount > 0}
								<span class="mx-1">·</span>
								<span class="text-yellow-600 font-medium">{pkgUpdateCount} update{pkgUpdateCount === 1 ? '' : 's'} available</span>
							{/if}
						</div>
					{/if}
				</div>
			</div>
			<span class="text-blue-600 text-sm font-medium">Manage →</span>
		</div>
	</button>

	<!-- Overview stats -->
	{#if !loading}
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
			<div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
				<div class="text-xs text-gray-500 uppercase tracking-wide">Entity Types</div>
				<div class="text-2xl font-bold text-gray-900 mt-1">{entityTypes.length}</div>
			</div>
			<div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
				<div class="text-xs text-gray-500 uppercase tracking-wide">Extensions</div>
				<div class="text-2xl font-bold text-gray-900 mt-1">{extensionCount}</div>
			</div>
			<div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
				<div class="text-xs text-gray-500 uppercase tracking-wide">Codexes</div>
				<div class="text-2xl font-bold text-gray-900 mt-1">{codexCount}</div>
			</div>
			<div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
				<div class="text-xs text-gray-500 uppercase tracking-wide">Updates</div>
				<div class={cn('text-2xl font-bold mt-1', pkgUpdateCount > 0 ? 'text-yellow-600' : 'text-gray-900')}>
					{pkgWidgetLoading ? '…' : pkgUpdateCount}
				</div>
			</div>
		</div>
	{/if}

	<!-- Entity type selector -->
	<div class="mb-4 bg-white shadow-sm rounded-lg p-4">
		<div class="flex items-center gap-4 flex-wrap">
			<label for="entity-type-select" class="font-medium text-gray-700">Entity Type:</label>
			{#if loading}
				<div class="flex items-center gap-2 text-gray-400 text-sm">
					<div class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
					Loading types…
				</div>
			{:else}
				<select
					id="entity-type-select"
					bind:value={selectedType}
					class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
				>
					{#each entityTypes as type}
						<option value={type.value}>{type.label}</option>
					{/each}
				</select>
			{/if}
		</div>
	</div>

	<!-- Tab navigation -->
	<div class="mb-4 border-b border-gray-200">
		<nav class="flex gap-1" aria-label="Tabs">
			{#each TABS as tab}
				<button
					onclick={() => activeTab = tab.id}
					class={cn(
						'px-5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors',
						activeTab === tab.id
							? 'border-blue-600 text-blue-600 bg-blue-50'
							: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
					)}
				>{tab.label}</button>
			{/each}
		</nav>
	</div>

	<!-- ==================== BROWSE TAB ==================== -->
	{#if activeTab === 'browse'}
		<div class="mb-4 flex items-center gap-4">
			<button
				onclick={loadData}
				disabled={objLoading}
				class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"
			>{objLoading ? 'Loading…' : 'Load Data'}</button>
			<div class="ml-auto text-gray-600 text-sm">
				{#if items.length > 0}
					Showing {items.length} of {totalItems} items
				{/if}
			</div>
		</div>

		<div class="bg-white shadow-sm rounded-lg">
			{#if objLoading}
				<div class="text-center py-10 p-6">
					<div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
					<p class="mt-2 text-gray-600">Loading data…</p>
				</div>
			{:else if items.length === 0}
				<div class="text-center py-10 p-6">
					<p class="text-gray-500 text-lg">No items loaded. Select an entity type and click "Load Data".</p>
				</div>
			{:else}
				<div class="divide-y divide-gray-200">
					{#each items as item, index}
						<div class="p-4 hover:bg-gray-50 transition">
							<div class="flex items-center justify-between">
								<div class="flex-1 min-w-0">
									<div class="flex items-center gap-3">
										<button
											onclick={() => toggleExpand(index)}
											class="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
										>
											{expandedItem === index ? '▼' : '▶'}
											{item._type || selectedType} #{item._id || item.id || index + 1}
										</button>
										{#if item.name}
											<span class="text-gray-700 truncate">- {item.name}</span>
										{/if}
									</div>
								</div>

								<div class="flex items-center gap-1 ml-2 shrink-0">
									<button
										onclick={() => copyJSON(item)}
										class="p-1.5 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded transition-colors"
										title="Copy JSON"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
										</svg>
									</button>
									<button
										onclick={() => requestDelete(item)}
										disabled={deletingId === String(item._id || item.id)}
										class="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded transition-colors disabled:opacity-50"
										title="Delete entity"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
										</svg>
									</button>
								</div>
							</div>

							{#if expandedItem === index}
								<div class="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
									<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
										{#each Object.entries(item) as [key, value]}
											<div class="min-w-0">
												<span class="font-semibold text-gray-700">{key}:</span>
												<span class="text-gray-600 ml-2 break-all">
													{typeof value === 'object' ? JSON.stringify(value) : String(value)}
												</span>
											</div>
										{/each}
									</div>
									<div class="mt-3 pt-3 border-t border-gray-200">
										<details>
											<summary class="text-xs text-gray-500 cursor-pointer hover:text-gray-700">Raw JSON</summary>
											<pre class="mt-2 p-3 bg-white rounded border border-gray-200 text-xs font-mono overflow-auto max-h-64 whitespace-pre-wrap break-all">{JSON.stringify(item, null, 2)}</pre>
										</details>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Pagination Controls -->
				{#if totalPages > 1}
					<div class="border-t border-gray-200 p-4 flex items-center justify-between">
						<div class="flex items-center gap-2">
							<button
								onclick={() => goToPage(0)}
								disabled={currentPage === 0}
								class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
							>First</button>
							<button
								onclick={() => goToPage(currentPage - 1)}
								disabled={currentPage === 0}
								class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
							>Prev</button>
						</div>
						<span class="text-sm text-gray-600">Page {currentPage + 1} of {totalPages}</span>
						<div class="flex items-center gap-2">
							<button
								onclick={() => goToPage(currentPage + 1)}
								disabled={currentPage >= totalPages - 1}
								class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
							>Next</button>
							<button
								onclick={() => goToPage(totalPages - 1)}
								disabled={currentPage >= totalPages - 1}
								class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
							>Last</button>
						</div>
					</div>
				{/if}
			{/if}
		</div>

	<!-- ==================== EXPORT TAB ==================== -->
	{:else if activeTab === 'export'}
		<div class="bg-white shadow-sm rounded-lg p-6">
			<h2 class="text-lg font-semibold text-gray-900 mb-4">Export Entities</h2>
			<p class="text-gray-600 text-sm mb-6">
				Export entities as a JSON file. You can export a single entity type or all types at once.
			</p>

			<div class="flex gap-3 mb-6">
				<button
					onclick={() => exportEntities(false)}
					disabled={exporting}
					class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"
				>{exporting ? 'Exporting…' : `Export ${selectedType}`}</button>
				<button
					onclick={() => exportEntities(true)}
					disabled={exporting}
					class="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"
				>{exporting ? 'Exporting…' : 'Export All Types'}</button>
			</div>

			{#if exporting}
				<div class="flex items-center gap-3 text-gray-600">
					<div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
					Exporting…
				</div>
			{/if}

			{#if exportResult}
				<div class="border border-gray-200 rounded-lg overflow-hidden">
					<div class="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-wrap gap-2">
						<div class="text-sm text-gray-700">
							<strong>{exportResult.total_entities ?? '?'}</strong> entities
							{#if (exportResult.total_codexes ?? 0) > 0}
								, <strong>{exportResult.total_codexes}</strong> codexes
							{/if}
						</div>
						<div class="flex gap-2">
							<button
								onclick={() => downloadExport(false)}
								class="px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 font-medium transition-colors"
							>Download JSON</button>
							<button
								onclick={copyExport}
								class="px-4 py-1.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 font-medium transition-colors"
							>Copy to Clipboard</button>
						</div>
					</div>
					<div class="max-h-96 overflow-auto">
						<pre class="p-4 text-xs text-gray-800 font-mono whitespace-pre-wrap break-all">{exportJson}</pre>
					</div>
				</div>
			{/if}
		</div>

	<!-- ==================== IMPORT TAB ==================== -->
	{:else if activeTab === 'invitations'}
		<InvitationManager {ctx} />

	{:else if activeTab === 'import'}
		<div class="bg-white shadow-sm rounded-lg p-6">
			<h2 class="text-lg font-semibold text-gray-900 mb-4">Import Entities</h2>
			<p class="text-gray-600 text-sm mb-6">
				Import entities from a JSON file or paste JSON directly. Existing entities with the same type and ID will be updated (upsert).
			</p>

			<!-- Import mode toggle -->
			<div class="flex gap-2 mb-4">
				<button
					onclick={() => { importMode = 'file'; clearImport(); }}
					class={cn(
						'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
						importMode === 'file'
							? 'bg-blue-100 text-blue-700 border border-blue-300'
							: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
					)}
				>Upload File</button>
				<button
					onclick={() => { importMode = 'editor'; clearImport(); }}
					class={cn(
						'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
						importMode === 'editor'
							? 'bg-blue-100 text-blue-700 border border-blue-300'
							: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
					)}
				>JSON Editor</button>
			</div>

			{#if importMode === 'file'}
				<!-- File upload / drag-and-drop -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					ondrop={handleDrop}
					ondragover={(e: DragEvent) => { e.preventDefault(); dragOver = true; }}
					ondragleave={() => dragOver = false}
					onclick={() => fileInput?.click()}
					onkeydown={(e: KeyboardEvent) => e.key === 'Enter' && fileInput?.click()}
					role="button"
					tabindex="0"
					class={cn(
						'border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer',
						dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
					)}
				>
					<input
						bind:this={fileInput}
						type="file"
						accept=".json"
						onchange={handleFileSelect}
						class="hidden"
					/>
					{#if importFileName}
						<p class="text-blue-600 font-medium">{importFileName}</p>
						<p class="text-sm text-gray-500 mt-1">Click or drop to replace</p>
					{:else}
						<svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
						</svg>
						<p class="text-gray-600 font-medium">Drop a JSON file here or click to browse</p>
						<p class="text-sm text-gray-400 mt-1">Accepts .json files</p>
					{/if}
				</div>
			{:else}
				<!-- JSON text editor -->
				<div class="relative">
					<textarea
						bind:value={importText}
						oninput={parseImportPreview}
						placeholder={'Paste JSON here, e.g.\n[\n  {"_type": "User", "_id": "1", "name": "Alice"},\n  {"_type": "User", "_id": "2", "name": "Bob"}\n]'}
						class="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						spellcheck="false"
					></textarea>
					{#if importText}
						<button
							onclick={clearImport}
							class="absolute top-2 right-2 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded"
						>Clear</button>
					{/if}
				</div>
			{/if}

			<!-- Import preview -->
			{#if importPreview}
				<div class={cn('mt-4 border rounded-lg overflow-hidden', importPreview.valid ? 'border-green-200' : 'border-red-200')}>
					{#if importPreview.valid}
						<div class="bg-green-50 px-4 py-3 border-b border-green-200">
							<p class="text-sm font-medium text-green-800">
								Ready to import: {importPreview.totalEntities} entities
								{#if importPreview.totalCodexes > 0}, {importPreview.totalCodexes} codexes{/if}
							</p>
						</div>
						<div class="px-4 py-3">
							<div class="flex flex-wrap gap-2">
								{#each Object.entries(importPreview.typeCounts) as [type, count]}
									<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
										{getIcon(type)} {type}: {count}
									</span>
								{/each}
							</div>
							<div class="mt-4 flex gap-3">
								<button
									onclick={executeImport}
									disabled={importing}
									class="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"
								>{importing ? 'Importing…' : 'Confirm Import'}</button>
								<button
									onclick={clearImport}
									disabled={importing}
									class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium disabled:opacity-50 transition-colors"
								>Cancel</button>
							</div>
						</div>
					{:else}
						<div class="bg-red-50 px-4 py-3">
							<p class="text-sm font-medium text-red-800">Invalid JSON</p>
							<p class="text-sm text-red-600 mt-1">{importPreview.error}</p>
						</div>
					{/if}
				</div>
			{/if}

			<!-- Import result -->
			{#if importResult}
				<div class={cn('mt-4 border rounded-lg overflow-hidden', importResult.success ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50')}>
					<div class="px-4 py-3">
						{#if importResult.success}
							<p class="text-sm font-medium text-green-800">Import complete</p>
							{#if importResult.data}
								<div class="mt-2 text-sm text-green-700">
									<p>Total records: {importResult.data.total_records || 0}</p>
									<p>Successful: {importResult.data.successful || 0}</p>
									{#if (importResult.data.failed ?? 0) > 0}
										<p class="text-red-600">Failed: {importResult.data.failed}</p>
										{#if importResult.data.errors?.length}
											<ul class="mt-1 list-disc list-inside text-red-600">
												{#each importResult.data.errors as err}
													<li>{err}</li>
												{/each}
											</ul>
										{/if}
									{/if}
								</div>
							{/if}
						{:else}
							<p class="text-sm font-medium text-red-800">Import failed</p>
							<p class="text-sm text-red-600 mt-1">{importResult.error}</p>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
