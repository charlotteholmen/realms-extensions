<script lang="ts">
	let { backend, extensionId = 'zone_selector', version = '', principal = '', isAuthenticated = true }: any = $props();

	let zones: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let addingZone = $state(false);
	let newZoneId = $state('');
	let successMsg = $state('');

	async function callExt(fn: string, args: string = '{}') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadZones() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_my_zones', '{}');
			zones = res?.data ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function addZone() {
		if (!newZoneId.trim()) return;
		addingZone = true;
		error = '';
		successMsg = '';
		try {
			await callExt('add_zone', JSON.stringify({ zone_id: newZoneId, h3_index: newZoneId }));
			successMsg = `Zone ${newZoneId} added!`;
			newZoneId = '';
			await loadZones();
		} catch (e: any) { error = e?.message || String(e); }
		finally { addingZone = false; }
	}

	async function removeZone(zoneId: string) {
		if (!confirm(`Remove zone ${zoneId}?`)) return;
		try {
			await callExt('remove_zone', JSON.stringify({ zone_id: zoneId }));
			await loadZones();
		} catch (e: any) { error = e?.message || String(e); }
	}

	$effect(() => { void loadZones(); });
</script>

<div class="rt-zs">
	<div class="header">
		<h2>Zone Selector</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadZones} disabled={loading}>↻</button>
	</div>

	{#if error}<div class="error">{error}</div>{/if}
	{#if successMsg}<div class="success">{successMsg}</div>{/if}

	<div class="card">
		<h3>Add Zone</h3>
		<div class="row">
			<input type="text" bind:value={newZoneId} placeholder="H3 index or zone ID" />
			<button class="primary" onclick={addZone} disabled={addingZone || !newZoneId.trim()}>
				{addingZone ? 'Adding…' : 'Add Zone'}
			</button>
		</div>
		<p class="hint">Enter an H3 hex index to select a geographic zone.</p>
	</div>

	<div class="section">
		<h3>My Zones ({zones.length})</h3>
		{#if loading}
			<div class="empty">Loading zones…</div>
		{:else if zones.length === 0}
			<div class="empty">No zones selected</div>
		{:else}
			<div class="zone-list">
				{#each zones as z (z.id || z.h3_index || z.zone_id)}
					<div class="zone-item">
						<div class="zone-info">
							<span class="zone-id mono">{z.h3_index || z.zone_id || z.id}</span>
							{#if z.name}<span class="zone-name">{z.name}</span>{/if}
						</div>
						<button class="remove" onclick={() => removeZone(z.id || z.zone_id || z.h3_index)}>Remove</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.rt-zs { font-family: system-ui, -apple-system, sans-serif; max-width: 640px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.success { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 1.5rem; }
	.card h3 { margin: 0 0 0.75rem; font-size: 1rem; }
	.row { display: flex; gap: 0.5rem; }
	input { flex: 1; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.85rem; font-family: ui-monospace, monospace; }
	.primary { padding: 0.5rem 1rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.85rem; white-space: nowrap; }
	.primary:hover:not(:disabled) { background: #4338ca; }
	.primary:disabled { opacity: 0.5; cursor: not-allowed; }
	.hint { margin: 0.5rem 0 0; font-size: 0.75rem; color: #9ca3af; }
	.section h3 { margin: 0 0 0.75rem; font-size: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 1.5rem; }
	.zone-list { display: flex; flex-direction: column; gap: 0.4rem; }
	.zone-item { display: flex; align-items: center; justify-content: space-between; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.6rem 0.75rem; }
	.zone-info { display: flex; flex-direction: column; gap: 0.15rem; }
	.zone-id { font-size: 0.8rem; }
	.zone-name { font-size: 0.75rem; color: #6b7280; }
	.mono { font-family: ui-monospace, monospace; }
	.remove { background: none; border: none; color: #dc2626; cursor: pointer; font-size: 0.8rem; }
	.remove:hover { text-decoration: underline; }
</style>
