<script lang="ts">
	let { backend, extensionId = 'hello_world', version = '', principal = '', isAuthenticated = true }: any = $props();

	let name = $state('World');
	let greeting = $state('');
	let loading = $state(false);
	let error = $state('');

	async function callExt(fn: string, args: string = '') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId,
			function_name: fn,
			args,
		}));
		return JSON.parse(raw);
	}

	async function sayHello() {
		loading = true;
		error = '';
		greeting = '';
		try {
			const res = await callExt('greet', name);
			greeting = res?.data ?? res?.message ?? JSON.stringify(res);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}
</script>

<div class="rt-hw">
	<div class="header">
		<h2>Hello World</h2>
		<span class="badge">v{version}</span>
	</div>

	<div class="card">
		<label>
			Your name
			<input type="text" bind:value={name} placeholder="Enter your name" />
		</label>
		<button onclick={sayHello} disabled={loading || !name.trim()}>
			{loading ? 'Sending…' : 'Say Hello'}
		</button>

		{#if greeting}
			<div class="result success">{greeting}</div>
		{/if}
		{#if error}
			<div class="result error">{error}</div>
		{/if}
	</div>
</div>

<style>
	.rt-hw { font-family: system-ui, -apple-system, sans-serif; max-width: 480px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.5rem; }
	label { display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
	input { display: block; width: 100%; margin-top: 0.25rem; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; box-sizing: border-box; }
	input:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 2px rgba(99,102,241,0.2); }
	button { margin-top: 1rem; padding: 0.5rem 1.25rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.875rem; }
	button:hover:not(:disabled) { background: #4338ca; }
	button:disabled { opacity: 0.5; cursor: not-allowed; }
	.result { margin-top: 1rem; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; }
	.success { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }
</style>
