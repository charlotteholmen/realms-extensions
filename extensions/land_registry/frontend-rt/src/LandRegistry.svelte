<script lang="ts">
	let { backend, extensionId = 'land_registry', version = '', principal = '', isAuthenticated = true }: any = $props();

	let tab = $state<'list' | 'create'>('list');
	let lands: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let selectedLand: any = $state(null);

	let formName = $state('');
	let formDescription = $state('');
	let formLocation = $state('');
	let formArea = $state('');
	let submitting = $state(false);
	let submitMsg = $state('');

	async function callExt(fn: string, args: string = '{}') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadLands() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_lands', '{}');
			lands = res?.data ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function createLand() {
		if (!formName.trim()) return;
		submitting = true;
		submitMsg = '';
		error = '';
		try {
			await callExt('create_land', JSON.stringify({
				name: formName,
				description: formDescription || undefined,
				location: formLocation || undefined,
				area: formArea ? Number(formArea) : undefined,
			}));
			submitMsg = 'Land parcel created!';
			formName = '';
			formDescription = '';
			formLocation = '';
			formArea = '';
			await loadLands();
		} catch (e: any) { error = e?.message || String(e); }
		finally { submitting = false; }
	}

	function viewLand(land: any) { selectedLand = land; }
	function goBack() { selectedLand = null; }

	$effect(() => { void loadLands(); });
</script>

<div class="rt-lr">
	<div class="header">
		<h2>Land Registry</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadLands} disabled={loading}>↻</button>
	</div>

	{#if error}<div class="error">{error}</div>{/if}
	{#if submitMsg}<div class="success">{submitMsg}</div>{/if}

	{#if selectedLand}
		<button class="back" onclick={goBack}>← Back</button>
		<div class="card">
			<h3>{selectedLand.name || selectedLand.id}</h3>
			{#if selectedLand.description}<p class="desc">{selectedLand.description}</p>{/if}
			<div class="details">
				{#if selectedLand.location}<div class="kv"><span>Location</span><span>{selectedLand.location}</span></div>{/if}
				{#if selectedLand.area}<div class="kv"><span>Area</span><span>{selectedLand.area}</span></div>{/if}
				{#if selectedLand.owner}<div class="kv"><span>Owner</span><span class="mono">{selectedLand.owner}</span></div>{/if}
				{#if selectedLand.h3_index}<div class="kv"><span>H3 Index</span><span class="mono">{selectedLand.h3_index}</span></div>{/if}
				{#if selectedLand.nft_token_id}<div class="kv"><span>NFT Token</span><span>{selectedLand.nft_token_id}</span></div>{/if}
				{#if selectedLand.status}<div class="kv"><span>Status</span><span>{selectedLand.status}</span></div>{/if}
			</div>
			<pre class="output">{JSON.stringify(selectedLand, null, 2)}</pre>
		</div>
	{:else}
		<div class="tabs">
			<button class:active={tab === 'list'} onclick={() => tab = 'list'}>Parcels ({lands.length})</button>
			<button class:active={tab === 'create'} onclick={() => tab = 'create'}>Register Land</button>
		</div>

		{#if tab === 'list'}
			{#if loading}
				<div class="empty">Loading land parcels…</div>
			{:else if lands.length === 0}
				<div class="empty">No land parcels registered</div>
			{:else}
				<div class="table-wrap">
					<table>
						<thead><tr><th>Name</th><th>Location</th><th>Area</th><th>Owner</th><th></th></tr></thead>
						<tbody>
							{#each lands as l (l.id || l.name)}
								<tr>
									<td class="fw">{l.name || l.id}</td>
									<td>{l.location || '—'}</td>
									<td>{l.area || '—'}</td>
									<td class="mono">{(l.owner || '').slice(0, 12)}{l.owner ? '…' : '—'}</td>
									<td><button class="link" onclick={() => viewLand(l)}>View</button></td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		{:else}
			<div class="card">
				<label>Name <input type="text" bind:value={formName} placeholder="Parcel name" /></label>
				<label>Description <textarea bind:value={formDescription} rows="2" placeholder="Description"></textarea></label>
				<label>Location <input type="text" bind:value={formLocation} placeholder="Location or coordinates" /></label>
				<label>Area <input type="text" bind:value={formArea} placeholder="Area (sq m)" /></label>
				<button class="primary" onclick={createLand} disabled={submitting || !formName.trim()}>
					{submitting ? 'Registering…' : 'Register Land'}
				</button>
			</div>
		{/if}
	{/if}
</div>

<style>
	.rt-lr { font-family: system-ui, -apple-system, sans-serif; max-width: 800px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.tabs { display: flex; border-bottom: 2px solid #e5e7eb; margin-bottom: 1rem; }
	.tabs button { padding: 0.5rem 1rem; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -2px; cursor: pointer; font-size: 0.875rem; color: #6b7280; }
	.tabs button.active { border-bottom-color: #4f46e5; color: #4f46e5; font-weight: 500; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.success { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.table-wrap { overflow-x: auto; }
	table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
	th { text-align: left; padding: 0.5rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 500; }
	td { padding: 0.4rem 0.5rem; border-bottom: 1px solid #f3f4f6; }
	.fw { font-weight: 500; }
	.mono { font-family: ui-monospace, monospace; font-size: 0.75rem; }
	.link { background: none; border: none; color: #4f46e5; cursor: pointer; font-size: 0.8rem; padding: 0; }
	.link:hover { text-decoration: underline; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.25rem; }
	.card h3 { margin: 0 0 0.5rem; }
	.desc { color: #4b5563; font-size: 0.85rem; margin: 0 0 0.75rem; }
	.details { margin-bottom: 0.75rem; }
	.kv { display: flex; justify-content: space-between; padding: 0.3rem 0; border-bottom: 1px solid #f3f4f6; font-size: 0.85rem; }
	.back { background: none; border: none; color: #4f46e5; cursor: pointer; font-size: 0.85rem; padding: 0; margin-bottom: 1rem; }
	.back:hover { text-decoration: underline; }
	label { display: block; font-size: 0.8rem; font-weight: 500; color: #374151; margin-bottom: 0.75rem; }
	input, textarea { display: block; width: 100%; margin-top: 0.25rem; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.85rem; box-sizing: border-box; font-family: inherit; }
	.primary { padding: 0.5rem 1.25rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.85rem; }
	.primary:hover:not(:disabled) { background: #4338ca; }
	.primary:disabled { opacity: 0.5; cursor: not-allowed; }
	.output { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem; font-size: 0.7rem; font-family: ui-monospace, monospace; overflow-x: auto; white-space: pre-wrap; max-height: 300px; overflow-y: auto; }
</style>
