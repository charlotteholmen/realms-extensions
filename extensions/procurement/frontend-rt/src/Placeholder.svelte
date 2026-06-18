<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	let healthResult = $state<string | null>(null);
	let healthError = $state<string | null>(null);
	let loading = $state(false);

	async function ping() {
		loading = true;
		healthError = null;
		healthResult = null;
		try {
			const raw = await ctx.callSync('health', {});
			const res = typeof raw === 'string' ? JSON.parse(raw) : raw;
			healthResult = JSON.stringify(res, null, 2);
		} catch (e: any) {
			healthError = e?.message ?? String(e);
		} finally {
			loading = false;
		}
	}
</script>

<div class="rt-root">
	<header class="hero">
		<h1>Procurement</h1>
		<p class="sub">
			Backend-only v1 — structured bid storage pending vetKeys. <strong>Bids are not
			confidential in v1.</strong>
		</p>
	</header>

	<section class="card">
		<h2>Backend health</h2>
		<button class="btn" disabled={loading} onclick={ping}>
			{loading ? 'Checking…' : 'Run health()'}
		</button>
		{#if healthError}
			<pre class="out err">{healthError}</pre>
		{/if}
		{#if healthResult}
			<pre class="out">{healthResult}</pre>
		{/if}
	</section>

	<footer class="rt-foot">
		Replace this placeholder with the full procurement UI (issue #12).
	</footer>
</div>

<style>
	.rt-root {
		font-family: system-ui, sans-serif;
		color: #0f172a;
		max-width: 960px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.hero {
		border: 2px solid #3b82f6;
		border-radius: 12px;
		padding: 16px 18px;
		background: #eff6ff;
	}
	.hero h1 {
		margin: 0 0 6px;
		font-size: 22px;
	}
	.sub {
		margin: 0;
		font-size: 13px;
		color: #1e40af;
	}
	.card {
		background: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		padding: 14px 16px;
	}
	.card h2 {
		margin: 0 0 10px;
		font-size: 16px;
	}
	.btn {
		background: #1d4ed8;
		color: #fff;
		border: 0;
		padding: 6px 14px;
		border-radius: 6px;
		cursor: pointer;
	}
	.btn:disabled {
		opacity: 0.6;
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
	.rt-foot {
		font-size: 11px;
		color: #94a3b8;
	}
</style>
