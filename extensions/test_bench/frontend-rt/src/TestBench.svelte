<script lang="ts">
	let { backend, extensionId = 'test_bench', version = '', principal = '', isAuthenticated = true }: any = $props();

	let greetName = $state('Tester');
	let greetResult = $state('');
	let asyncResult = $state('');
	let universeData = $state('');
	let snapshots = $state('');
	let loading = $state<Record<string, boolean>>({});
	let error = $state('');

	async function callExt(fn: string, args: string = '') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function callExtAsync(fn: string, args: string = '') {
		const raw = await backend.extension_async_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function runTest(key: string, fn: () => Promise<void>) {
		loading = { ...loading, [key]: true };
		error = '';
		try {
			await fn();
		} catch (e: any) {
			error = `${key}: ${e?.message || String(e)}`;
		} finally {
			loading = { ...loading, [key]: false };
		}
	}

	async function doGreet() {
		await runTest('greet', async () => {
			const raw = await backend.greet(greetName);
			greetResult = typeof raw === 'string' ? raw : JSON.stringify(raw, null, 2);
		});
	}

	async function doAsync() {
		await runTest('async', async () => {
			const res = await callExtAsync('get_data', 'from frontend-rt');
			asyncResult = JSON.stringify(res, null, 2);
		});
	}

	async function doUniverse() {
		await runTest('universe', async () => {
			const raw = await backend.get_universe();
			const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
			universeData = JSON.stringify(parsed, null, 2);
		});
	}

	async function doSnapshots() {
		await runTest('snapshots', async () => {
			const raw = await backend.get_snapshots();
			const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
			snapshots = JSON.stringify(parsed, null, 2);
		});
	}
</script>

<div class="rt-tb">
	<div class="header">
		<h2>Test Bench</h2>
		<span class="badge">v{version}</span>
	</div>

	{#if error}
		<div class="error">{error}</div>
	{/if}

	<div class="card">
		<h3>Greet</h3>
		<div class="row">
			<input type="text" bind:value={greetName} placeholder="Name" />
			<button onclick={doGreet} disabled={loading.greet}>
				{loading.greet ? '…' : 'Greet'}
			</button>
		</div>
		{#if greetResult}<pre class="output">{greetResult}</pre>{/if}
	</div>

	<div class="card">
		<h3>Extension Async Call</h3>
		<button onclick={doAsync} disabled={loading.async}>
			{loading.async ? 'Running…' : 'Call get_data (async)'}
		</button>
		{#if asyncResult}<pre class="output">{asyncResult}</pre>{/if}
	</div>

	<div class="card">
		<h3>Universe</h3>
		<button onclick={doUniverse} disabled={loading.universe}>
			{loading.universe ? 'Loading…' : 'Get Universe'}
		</button>
		{#if universeData}<pre class="output">{universeData}</pre>{/if}
	</div>

	<div class="card">
		<h3>Snapshots</h3>
		<button onclick={doSnapshots} disabled={loading.snapshots}>
			{loading.snapshots ? 'Loading…' : 'Get Snapshots'}
		</button>
		{#if snapshots}<pre class="output">{snapshots}</pre>{/if}
	</div>

	<div class="card">
		<h3>Context</h3>
		<div class="kv"><span class="k">Extension ID</span><span class="v">{extensionId}</span></div>
		<div class="kv"><span class="k">Principal</span><span class="v mono">{principal || '(anonymous)'}</span></div>
		<div class="kv"><span class="k">Authenticated</span><span class="v">{isAuthenticated ? 'Yes' : 'No'}</span></div>
	</div>
</div>

<style>
	.rt-tb { font-family: system-ui, -apple-system, sans-serif; max-width: 640px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 1rem; }
	.card h3 { margin: 0 0 0.75rem; font-size: 1rem; }
	.row { display: flex; gap: 0.5rem; }
	input { flex: 1; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; }
	button { padding: 0.5rem 1rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; white-space: nowrap; }
	button:hover:not(:disabled) { background: #4338ca; }
	button:disabled { opacity: 0.5; cursor: not-allowed; }
	.output { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem; margin-top: 0.75rem; font-size: 0.75rem; font-family: ui-monospace, monospace; overflow-x: auto; white-space: pre-wrap; word-break: break-word; max-height: 300px; overflow-y: auto; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 0.875rem; }
	.kv { display: flex; justify-content: space-between; padding: 0.35rem 0; border-bottom: 1px solid #f3f4f6; font-size: 0.85rem; }
	.k { color: #6b7280; }
	.v { font-weight: 500; }
	.mono { font-family: ui-monospace, monospace; font-size: 0.75rem; }
</style>
