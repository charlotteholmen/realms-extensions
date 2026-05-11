<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	interface Stats {
		users: number;
		organizations: number;
		proposals: number;
		transfers: number;
		disputes: number;
	}

	interface Status {
		running: boolean;
		interval_seconds: number;
		batch_size: number;
		max_entities: number | null;
		batch_number: number;
		seed: number;
		stats: Stats;
		demo_mode_active: boolean;
	}

	let status: Status | null = $state(null);
	let loading = $state(true);
	let toggling = $state(false);
	let saving = $state(false);
	let runningOnce = $state(false);
	let error = $state('');

	let editInterval = $state(60);
	let editBatchSize = $state(3);
	let editMaxEntities = $state('');
	let editSeed = $state('');

	let totalEntities = $derived(
		status
			? status.stats.users +
				status.stats.organizations +
				status.stats.proposals +
				status.stats.transfers +
				status.stats.disputes
			: 0
	);

	let progressPercent = $derived(
		status && status.max_entities
			? Math.min(100, Math.round((totalEntities / status.max_entities) * 100))
			: 0
	);

	async function fetchStatus() {
		try {
			const raw = await ctx.callSync('get_status', {});
			const data = typeof raw === 'string' ? JSON.parse(raw) : raw;
			if (data.success) {
				status = data;
				editInterval = data.interval_seconds;
				editBatchSize = data.batch_size;
				editMaxEntities = data.max_entities != null ? String(data.max_entities) : '';
				editSeed = String(data.seed ?? '');
			} else {
				error = data.error || 'Failed to fetch status';
			}
		} catch (e: any) {
			error = e?.message ?? String(e);
		} finally {
			loading = false;
		}
	}

	async function handleToggle() {
		if (!status) return;
		toggling = true;
		error = '';
		try {
			const raw = await ctx.callSync('toggle', { enabled: !status.running });
			const data = typeof raw === 'string' ? JSON.parse(raw) : raw;
			if (data.success) {
				await fetchStatus();
			} else {
				error = data.error || 'Toggle failed';
			}
		} catch (e: any) {
			error = e?.message ?? String(e);
		} finally {
			toggling = false;
		}
	}

	async function saveConfig() {
		saving = true;
		error = '';
		try {
			const maxVal = editMaxEntities.toString().trim();
			const config: Record<string, any> = {
				interval_seconds: editInterval,
				batch_size: editBatchSize,
				max_entities: maxVal ? parseInt(maxVal, 10) : null,
			};
			if (editSeed.trim()) {
				config.seed = parseInt(editSeed, 10);
			}
			const raw = await ctx.callSync('update_config', config);
			const data = typeof raw === 'string' ? JSON.parse(raw) : raw;
			if (data.success) {
				await fetchStatus();
			} else {
				error = data.error || 'Save failed';
			}
		} catch (e: any) {
			error = e?.message ?? String(e);
		} finally {
			saving = false;
		}
	}

	async function runOnce() {
		runningOnce = true;
		error = '';
		try {
			const raw = await ctx.callSync('run_once', {});
			const data = typeof raw === 'string' ? JSON.parse(raw) : raw;
			await fetchStatus();
			if (data.error) error = data.error;
		} catch (e: any) {
			error = e?.message ?? String(e);
		} finally {
			runningOnce = false;
		}
	}

	async function handleReset() {
		error = '';
		try {
			const raw = await ctx.callSync('reset', {});
			const data = typeof raw === 'string' ? JSON.parse(raw) : raw;
			if (data.success) {
				await fetchStatus();
			} else {
				error = data.error || 'Reset failed';
			}
		} catch (e: any) {
			error = e?.message ?? String(e);
		}
	}

	$effect(() => {
		fetchStatus();
		const interval = setInterval(fetchStatus, 10000);
		return () => clearInterval(interval);
	});
</script>

<div class="max-w-2xl mx-auto p-6">
	<div class="flex items-center justify-between mb-6">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Demo Simulator</h2>
		{#if status}
			<span
				class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full
					{status.running
					? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
					: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}"
			>
				<span
					class="w-2 h-2 rounded-full {status.running ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}"
				></span>
				{status.running ? 'Running' : 'Stopped'}
			</span>
		{/if}
	</div>

	{#if loading}
		<div class="text-center py-12 text-gray-500 dark:text-gray-400">Loading...</div>
	{:else if status}
		<!-- Demo mode warning -->
		{#if !status.demo_mode_active}
			<div
				class="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg"
			>
				<p class="text-sm text-amber-800 dark:text-amber-300">
					<strong>Note:</strong> TEST_MODE and TEST_MODE_DEMO_DATA are not both enabled in backend
					config. The simulator will not auto-activate on canister start, but can still be toggled
					manually.
				</p>
			</div>
		{/if}

		<!-- Stats grid -->
		<div class="ds-stats-grid mb-4">
			<div class="ds-stat"><span class="ds-stat-val" style="color:#4f46e5">{status.stats.users}</span><span class="ds-stat-lbl">Users</span></div>
			<div class="ds-stat"><span class="ds-stat-val" style="color:#059669">{status.stats.organizations}</span><span class="ds-stat-lbl">Orgs</span></div>
			<div class="ds-stat"><span class="ds-stat-val" style="color:#7c3aed">{status.stats.proposals}</span><span class="ds-stat-lbl">Proposals</span></div>
			<div class="ds-stat"><span class="ds-stat-val" style="color:#0891b2">{status.stats.transfers}</span><span class="ds-stat-lbl">Transfers</span></div>
			<div class="ds-stat"><span class="ds-stat-val" style="color:#e11d48">{status.stats.disputes}</span><span class="ds-stat-lbl">Disputes</span></div>
			<div class="ds-stat"><span class="ds-stat-val" style="color:#4f46e5">{status.stats.votes ?? 0}</span><span class="ds-stat-lbl">Votes</span></div>
			<div class="ds-stat"><span class="ds-stat-val" style="color:#059669">{status.stats.lands ?? 0}</span><span class="ds-stat-lbl">Lands</span></div>
			<div class="ds-stat"><span class="ds-stat-val" style="color:#d97706">{status.stats.courts ?? 0}</span><span class="ds-stat-lbl">Courts</span></div>
			<div class="ds-stat"><span class="ds-stat-val" style="color:#dc2626">{status.stats.cases ?? 0}</span><span class="ds-stat-lbl">Cases</span></div>
			<div class="ds-stat"><span class="ds-stat-val" style="color:#374151">{status.batch_number}</span><span class="ds-stat-lbl">Batches</span></div>
		</div>

		<!-- Progress bar -->
		<div class="mb-6">
			{#if status.max_entities}
				<div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
					<span>{totalEntities} / {status.max_entities} entities</span>
					<span>{progressPercent}%</span>
				</div>
				<div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
					<div
						class="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-500"
						style="width: {progressPercent}%"
					></div>
				</div>
			{:else}
				<div class="text-xs text-gray-500 dark:text-gray-400">
					{totalEntities} entities (unlimited)
				</div>
			{/if}
		</div>

		<!-- Controls -->
		<div
			class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mb-4"
		>
			<div class="flex items-center gap-3 mb-5">
				<button onclick={handleToggle} disabled={toggling} class="ds-btn ds-btn-primary flex-1">
					{#if toggling}
						<svg class="inline-block w-4 h-4 mr-1.5 animate-spin" viewBox="0 0 24 24" fill="none">
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							/>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
							/>
						</svg>
					{/if}
					{status.running ? 'Stop Simulator' : 'Start Simulator'}
				</button>
				<button onclick={runOnce} disabled={runningOnce} class="ds-btn ds-btn-secondary">
					{runningOnce ? 'Running...' : 'Run Once'}
				</button>
			</div>

			<h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Configuration</h3>
			<div class="grid grid-cols-2 gap-3">
				<div>
					<label
						for="ds-interval"
						class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Interval (s)</label
					>
					<input
						id="ds-interval"
						type="number"
						min="10"
						max="3600"
						bind:value={editInterval}
						class="ds-input"
					/>
				</div>
				<div>
					<label
						for="ds-batch"
						class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Batch size</label
					>
					<input
						id="ds-batch"
						type="number"
						min="1"
						max="20"
						bind:value={editBatchSize}
						class="ds-input"
					/>
				</div>
				<div>
					<label
						for="ds-max"
						class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Max entities</label
					>
					<input
						id="ds-max"
						type="text"
						placeholder="unlimited"
						bind:value={editMaxEntities}
						class="ds-input"
					/>
				</div>
				<div>
					<label
						for="ds-seed"
						class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Seed (deterministic)</label
					>
					<input
						id="ds-seed"
						type="text"
						placeholder="random"
						bind:value={editSeed}
						class="ds-input"
					/>
				</div>
			</div>
			<div class="flex gap-3 mt-4">
				<button onclick={saveConfig} disabled={saving} class="ds-btn ds-btn-secondary flex-1">
					{saving ? 'Saving...' : 'Save Config'}
				</button>
				<button onclick={handleReset} class="ds-btn ds-btn-danger"> Reset Counters </button>
			</div>
		</div>

		{#if error}
			<div
				class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
			>
				<p class="text-sm text-red-800 dark:text-red-300">{error}</p>
			</div>
		{/if}
	{/if}
</div>

<style>
	.ds-stats-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.375rem;
	}
	.ds-stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.375rem 0.25rem;
		border: 1px solid #e5e7eb;
		border-radius: 0.375rem;
		background: #fff;
	}
	:global(.dark) .ds-stat {
		background: #1f2937;
		border-color: #374151;
	}
	.ds-stat-val {
		font-size: 1.125rem;
		font-weight: 700;
		line-height: 1.2;
	}
	.ds-stat-lbl {
		font-size: 0.625rem;
		color: #6b7280;
		margin-top: 0.125rem;
	}
	:global(.dark) .ds-stat-lbl {
		color: #9ca3af;
	}
	.ds-btn {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 150ms;
		border: none;
	}
	.ds-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.ds-btn-primary {
		color: #fff !important;
		background-color: #4f46e5 !important;
	}
	.ds-btn-primary:hover:not(:disabled) {
		background-color: #4338ca !important;
	}
	.ds-btn-secondary {
		color: #374151 !important;
		background-color: #f3f4f6 !important;
		border: 1px solid #d1d5db !important;
	}
	.ds-btn-secondary:hover:not(:disabled) {
		background-color: #e5e7eb !important;
	}
	:global(.dark) .ds-btn-secondary {
		color: #d1d5db !important;
		background-color: #374151 !important;
		border-color: #4b5563 !important;
	}
	:global(.dark) .ds-btn-secondary:hover:not(:disabled) {
		background-color: #4b5563 !important;
	}
	.ds-btn-danger {
		color: #dc2626 !important;
		background-color: transparent !important;
		border: 1px solid #fca5a5 !important;
	}
	.ds-btn-danger:hover:not(:disabled) {
		background-color: #fef2f2 !important;
	}
	:global(.dark) .ds-btn-danger {
		color: #f87171 !important;
		border-color: #7f1d1d !important;
	}
	:global(.dark) .ds-btn-danger:hover:not(:disabled) {
		background-color: #7f1d1d33 !important;
	}
	.ds-input {
		width: 100%;
		padding: 0.375rem 0.625rem;
		font-size: 0.875rem;
		border: 1px solid #d1d5db;
		border-radius: 0.375rem;
		background: #fff;
		color: #111827;
		transition: border-color 150ms;
	}
	.ds-input:focus {
		outline: none;
		border-color: #6366f1;
		box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
	}
	:global(.dark) .ds-input {
		background: #1f2937;
		border-color: #4b5563;
		color: #f3f4f6;
	}
</style>
