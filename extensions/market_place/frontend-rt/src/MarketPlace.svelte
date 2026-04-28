<script lang="ts">
	let { backend, extensionId = 'market_place', version = '', principal = '', isAuthenticated = true }: any = $props();

	let tab = $state<'browse' | 'purchased' | 'publish'>('browse');
	let items: any[] = $state([]);
	let purchased: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');

	async function callExt(fn: string, args: string = '{}') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function callExtAsync(fn: string, args: string = '{}') {
		const raw = await backend.extension_async_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadData() {
		loading = true;
		error = '';
		try {
			const [list, purch] = await Promise.all([
				callExt('list_extensions', '{}').catch(() => ({ data: [] })),
				callExt('get_my_purchases', '{}').catch(() => ({ data: [] })),
			]);
			items = list?.data ?? (Array.isArray(list) ? list : []);
			purchased = purch?.data ?? (Array.isArray(purch) ? purch : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function buyExtension(extId: string) {
		try {
			await callExtAsync('buy_extension', JSON.stringify({ extension_id: extId }));
			await loadData();
		} catch (e: any) { error = e?.message || String(e); }
	}

	$effect(() => { void loadData(); });

	let purchasedIds = $derived(new Set(purchased.map((p) => p.extension_id || p.id)));
</script>

<div class="rt-mp">
	<div class="header">
		<h2>Marketplace</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadData} disabled={loading}>↻</button>
	</div>

	{#if error}<div class="error">{error}</div>{/if}

	<div class="tabs">
		<button class:active={tab === 'browse'} onclick={() => tab = 'browse'}>Browse</button>
		<button class:active={tab === 'purchased'} onclick={() => tab = 'purchased'}>Purchased ({purchased.length})</button>
	</div>

	{#if loading}
		<div class="empty">Loading marketplace…</div>
	{:else if tab === 'browse'}
		{#if items.length === 0}
			<div class="empty">No extensions available</div>
		{:else}
			<div class="grid">
				{#each items as item (item.id || item.name)}
					<div class="card">
						<h4>{item.name || item.id}</h4>
						{#if item.description}<p class="desc">{item.description}</p>{/if}
						<div class="card-footer">
							{#if item.price !== undefined}<span class="price">{item.price}</span>{/if}
							{#if item.version}<span class="tag">{item.version}</span>{/if}
							{#if purchasedIds.has(item.id || item.name)}
								<span class="owned">Owned</span>
							{:else}
								<button class="buy-btn" onclick={() => buyExtension(item.id || item.name)}>Buy</button>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{:else if tab === 'purchased'}
		{#if purchased.length === 0}
			<div class="empty">No purchases yet</div>
		{:else}
			<div class="grid">
				{#each purchased as p (p.id || p.extension_id)}
					<div class="card">
						<h4>{p.name || p.extension_id || p.id}</h4>
						{#if p.purchased_at}<div class="meta">Purchased: {p.purchased_at}</div>{/if}
						{#if p.version}<span class="tag">{p.version}</span>{/if}
					</div>
				{/each}
			</div>
		{/if}
	{/if}
</div>

<style>
	.rt-mp { font-family: system-ui, -apple-system, sans-serif; max-width: 900px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.tabs { display: flex; border-bottom: 2px solid #e5e7eb; margin-bottom: 1rem; }
	.tabs button { padding: 0.5rem 1rem; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -2px; cursor: pointer; font-size: 0.875rem; color: #6b7280; }
	.tabs button.active { border-bottom-color: #4f46e5; color: #4f46e5; font-weight: 500; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; }
	.card h4 { margin: 0 0 0.35rem; font-size: 0.95rem; }
	.desc { margin: 0 0 0.5rem; color: #6b7280; font-size: 0.8rem; line-height: 1.4; }
	.card-footer { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem; }
	.price { font-weight: 600; font-size: 0.9rem; }
	.tag { background: #f0fdf4; color: #166534; padding: 0.1rem 0.4rem; border-radius: 0.25rem; font-size: 0.7rem; }
	.owned { color: #16a34a; font-size: 0.8rem; font-weight: 500; }
	.buy-btn { padding: 0.3rem 0.7rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.375rem; cursor: pointer; font-size: 0.8rem; margin-left: auto; }
	.buy-btn:hover { background: #4338ca; }
	.meta { font-size: 0.75rem; color: #9ca3af; }
</style>
