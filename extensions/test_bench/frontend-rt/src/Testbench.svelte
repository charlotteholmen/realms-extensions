<script lang="ts">
	let { backend, extensionId, version } = $props<{
		backend: any;
		extensionId: string;
		version: string;
	}>();

	let inputArg = $state('hello from runtime-loaded test_bench UI');
	let resp = $state<string>('');
	let inflight = $state(false);
	let error = $state<string>('');

	async function callGetData() {
		inflight = true;
		error = '';
		resp = '';
		try {
			const r = await backend.extension_sync_call({
				extension_name: extensionId,
				function_name: 'get_data',
				args: inputArg,
			});
			resp = JSON.stringify(r, null, 2);
		} catch (e: any) {
			error = e?.message ?? String(e);
		} finally {
			inflight = false;
		}
	}

	async function callListExtensions() {
		inflight = true;
		error = '';
		resp = '';
		try {
			const r = await backend.list_runtime_extensions();
			resp = typeof r === 'string' ? r : JSON.stringify(r, null, 2);
		} catch (e: any) {
			error = e?.message ?? String(e);
		} finally {
			inflight = false;
		}
	}
</script>

<div class="rt-card">
	<header>
		<span class="badge">v{version}</span>
		<h2>{extensionId} <small>(runtime-loaded)</small></h2>
	</header>

	<p class="muted">
		This UI was compiled by <code>vite build --lib</code>, uploaded to the
		<code>file_registry</code> canister, and dynamic-imported by
		<code>realm_frontend</code> at runtime — no <code>realm_frontend</code> WASM rebuild required.
	</p>

	<label class="row">
		<span>args</span>
		<input bind:value={inputArg} placeholder="argument string" />
	</label>

	<div class="actions">
		<button onclick={callGetData} disabled={inflight}>
			{inflight ? 'calling…' : 'extension_sync_call → test_bench.get_data'}
		</button>
		<button class="secondary" onclick={callListExtensions} disabled={inflight}>
			list_runtime_extensions
		</button>
	</div>

	{#if error}
		<pre class="output error">ERROR: {error}</pre>
	{:else if resp}
		<pre class="output">{resp}</pre>
	{/if}
</div>

<style>
	.rt-card {
		font-family:
			system-ui,
			-apple-system,
			Segoe UI,
			Roboto,
			sans-serif;
		border: 2px solid #10b981;
		border-radius: 12px;
		padding: 18px 20px;
		background: linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%);
		max-width: 720px;
		color: #064e3b;
	}
	header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 6px;
	}
	header h2 {
		margin: 0;
		font-size: 18px;
	}
	header h2 small {
		font-weight: 400;
		opacity: 0.7;
		font-size: 0.7em;
	}
	.badge {
		background: #047857;
		color: white;
		padding: 2px 8px;
		border-radius: 10px;
		font-size: 12px;
	}
	.muted {
		font-size: 13px;
		opacity: 0.85;
	}
	code {
		background: rgba(0, 0, 0, 0.06);
		padding: 1px 5px;
		border-radius: 4px;
		font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
		font-size: 0.92em;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 8px;
		margin: 12px 0;
	}
	.row span {
		font-size: 13px;
		opacity: 0.8;
		min-width: 40px;
	}
	.row input {
		flex: 1;
		padding: 8px 10px;
		border: 1px solid #6ee7b7;
		border-radius: 6px;
		background: #fff;
		color: #064e3b;
		font-size: 14px;
	}
	.actions {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		margin-bottom: 12px;
	}
	button {
		padding: 8px 14px;
		border: 0;
		border-radius: 6px;
		background: #10b981;
		color: white;
		font-size: 14px;
		cursor: pointer;
		font-weight: 500;
	}
	button:hover:not(:disabled) {
		background: #059669;
	}
	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	button.secondary {
		background: transparent;
		color: #047857;
		border: 1px solid #10b981;
	}
	.output {
		background: #1f2937;
		color: #d1fae5;
		padding: 12px;
		border-radius: 6px;
		min-height: 48px;
		max-height: 300px;
		overflow: auto;
		white-space: pre-wrap;
		word-break: break-all;
		font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
		font-size: 12.5px;
		margin: 0;
	}
	.output.error {
		background: #7f1d1d;
		color: #fee2e2;
	}
</style>
