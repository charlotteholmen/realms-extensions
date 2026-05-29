<script lang="ts">
	let {
		backend,
		extensionId,
		version,
		principal = '',
		isAuthenticated = false,
	} = $props<{
		backend: any;
		extensionId: string;
		version: string;
		principal?: string;
		isAuthenticated?: boolean;
	}>();

	let pingResult = $state<string | null>(null);
	let pingError = $state<string | null>(null);
	let pinging = $state(false);

	async function ping() {
		pinging = true;
		pingError = null;
		pingResult = null;
		try {
			const r = await backend.extension_sync_call({
				extension_name: extensionId,
				function_name: 'health',
				args: '{}',
			});
			pingResult = JSON.stringify(r, null, 2);
		} catch (e: any) {
			pingError = e?.message ?? String(e);
		} finally {
			pinging = false;
		}
	}

	function shortPrincipal(p: string): string {
		if (!p) return '';
		if (p.length <= 14) return p;
		return p.slice(0, 6) + '…' + p.slice(-4);
	}
</script>

<div class="rt-root">
	<header class="hero">
		<span class="badge">v{version}</span>
		<h1>{extensionId} <small>(runtime-loaded)</small></h1>
		<p class="sub">
			This bundle was fetched from <code>file_registry</code> at runtime —
			no bundled extension code is shipped in the host realm WASM.
		</p>
	</header>

	<section class="card">
		<header class="card-head">
			<h2>Host context</h2>
		</header>
		<dl class="kv">
			<dt>Authenticated</dt>
			<dd>{isAuthenticated ? 'yes' : 'no'}</dd>
			<dt>Principal</dt>
			<dd class="mono">{shortPrincipal(principal) || '(anonymous)'}</dd>
			<dt>Bundle</dt>
			<dd class="mono">ext/{extensionId}/{version}/frontend/dist/index.js</dd>
		</dl>
	</section>

	<section class="card">
		<header class="card-head">
			<h2>Backend smoke test</h2>
		</header>
		<p class="sub">
			Calls <code>{`backend.extension_sync_call({ extension_name: '${extensionId}', function_name: 'health', args: '{}' })`}</code>.
			If this extension does not implement <code>health</code>, expect a
			<code>function_not_found</code> response — that still proves the call
			reached the runtime-installed extension.
		</p>
		<button class="btn" disabled={pinging} onclick={ping}>
			{pinging ? 'Pinging…' : 'Run health()'}
		</button>
		{#if pingError}
			<pre class="out err">{pingError}</pre>
		{/if}
		{#if pingResult}
			<pre class="out">{pingResult}</pre>
		{/if}
	</section>

	<footer class="rt-foot">
		Scaffolded by <code>scripts/scaffold_runtime_bundles.py</code> — replace
		<code>src/Placeholder.svelte</code> with the real UI and re-build.
	</footer>
</div>

<style>
	.rt-root {
		font-family:
			system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
		color: #0f172a;
		max-width: 960px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	.hero {
		border: 2px solid #3b82f6;
		border-radius: 12px;
		padding: 18px 20px;
		background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
		color: #1e3a8a;
	}
	.hero h1 {
		margin: 6px 0 4px;
		font-size: 22px;
	}
	.hero h1 small {
		font-size: 14px;
		font-weight: 500;
		color: #1e40af;
	}
	.sub {
		margin: 4px 0;
		font-size: 13px;
		opacity: 0.85;
	}
	.badge {
		display: inline-block;
		background: #1d4ed8;
		color: #fff;
		padding: 2px 8px;
		border-radius: 10px;
		font-size: 12px;
	}
	.card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		padding: 14px 16px;
	}
	.card-head h2 {
		margin: 0 0 8px;
		font-size: 16px;
	}
	.kv {
		display: grid;
		grid-template-columns: max-content 1fr;
		column-gap: 14px;
		row-gap: 4px;
		margin: 0;
	}
	.kv dt {
		font-size: 12px;
		color: #64748b;
	}
	.kv dd {
		margin: 0;
		font-size: 13px;
	}
	.mono {
		font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
	}
	.btn {
		background: #1d4ed8;
		color: #fff;
		border: 0;
		padding: 6px 14px;
		border-radius: 6px;
		cursor: pointer;
		font-size: 13px;
	}
	.btn:disabled {
		opacity: 0.6;
		cursor: progress;
	}
	.out {
		margin-top: 10px;
		background: #0f172a;
		color: #e2e8f0;
		padding: 10px;
		border-radius: 6px;
		font-size: 12px;
		overflow-x: auto;
	}
	.out.err {
		background: #7f1d1d;
		color: #fee2e2;
	}
	code {
		background: rgba(0, 0, 0, 0.06);
		padding: 1px 5px;
		border-radius: 4px;
		font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
		font-size: 0.92em;
	}
	.rt-foot {
		font-size: 11px;
		color: #94a3b8;
		text-align: center;
		padding-top: 4px;
	}
</style>
