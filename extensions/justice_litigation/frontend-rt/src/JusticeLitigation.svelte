<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	type Tab = 'list' | 'create' | 'stats';

	let tab = $state<Tab>('list');
	let litigations: any[] = $state([]);
	let totalCount = $state(0);
	let userProfile = $state('member');
	let loading = $state(true);
	let error = $state('');

	let principal = $state('');
	$effect(() => {
		const p = ctx.principal;
		if (typeof p === 'string') {
			principal = p;
		} else if (p && typeof p.subscribe === 'function') {
			const unsub = p.subscribe((v: string) => (principal = v || ''));
			return unsub;
		}
	});

	// Create form
	let formTitle = $state('');
	let formDescription = $state('');
	let formDefendant = $state('');
	let creating = $state(false);
	let createError = $state('');
	let createSuccess = $state(false);

	// Verdict modal
	let showVerdict = $state(false);
	let verdictCase: any = $state(null);
	let verdictCode = $state('');
	let executingVerdict = $state(false);
	let verdictError = $state('');
	let verdictSuccess = $state(false);

	// Derived statistics
	let pendingCount = $derived(litigations.filter((l) => l.status === 'pending').length);
	let inReviewCount = $derived(
		litigations.filter((l) => l.status === 'in_review').length,
	);
	let resolvedCount = $derived(litigations.filter((l) => l.status === 'resolved').length);

	async function callExt(fn: string, args: string = '{}') {
		const raw = await ctx.backend.extension_sync_call(
			JSON.stringify({
				extension_name: 'justice_litigation',
				function_name: fn,
				args,
			}),
		);
		const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
		if (parsed?.success === false) throw new Error(parsed.error || 'Request failed');
		return parsed;
	}

	async function loadLitigations() {
		loading = true;
		error = '';
		try {
			const res = await callExt(
				'get_litigations',
				JSON.stringify({
					user_principal: principal,
					user_profile: userProfile,
				}),
			);
			const data = res?.data ?? res;
			litigations = data?.litigations ?? (Array.isArray(data) ? data : []);
			totalCount = data?.total_count ?? litigations.length;
			if (data?.user_profile) userProfile = data.user_profile;
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function createLitigation() {
		if (!formTitle.trim() || !formDescription.trim() || !formDefendant.trim()) {
			createError = 'All fields are required';
			return;
		}
		creating = true;
		createError = '';
		createSuccess = false;
		try {
			await callExt(
				'create_litigation',
				JSON.stringify({
					requester_principal: principal,
					defendant_principal: formDefendant.trim(),
					case_title: formTitle.trim(),
					description: formDescription.trim(),
				}),
			);
			createSuccess = true;
			formTitle = '';
			formDescription = '';
			formDefendant = '';
			await loadLitigations();
			setTimeout(() => {
				createSuccess = false;
				tab = 'list';
			}, 1500);
		} catch (e: any) {
			createError = e?.message || String(e);
		} finally {
			creating = false;
		}
	}

	function openVerdict(litigation: any) {
		verdictCase = litigation;
		verdictCode = `transfer("${litigation.defendant_principal || ''}", "${litigation.requester_principal || ''}", 1000, "Compensation for ${litigation.case_title || ''}")`;
		verdictError = '';
		verdictSuccess = false;
		showVerdict = true;
	}

	function closeVerdict() {
		showVerdict = false;
		verdictCase = null;
		verdictCode = '';
		verdictError = '';
		verdictSuccess = false;
	}

	async function executeVerdict() {
		if (!verdictCase || !verdictCode.trim()) {
			verdictError = 'Verdict code is required';
			return;
		}
		executingVerdict = true;
		verdictError = '';
		verdictSuccess = false;
		try {
			await callExt(
				'execute_verdict',
				JSON.stringify({
					litigation_id: verdictCase.id,
					verdict_code: verdictCode.trim(),
					executor_principal: principal,
				}),
			);
			verdictSuccess = true;
			await loadLitigations();
			setTimeout(closeVerdict, 1500);
		} catch (e: any) {
			verdictError = e?.message || String(e);
		} finally {
			executingVerdict = false;
		}
	}

	function resetForm() {
		formTitle = '';
		formDescription = '';
		formDefendant = '';
		createError = '';
		createSuccess = false;
	}

	function statusColor(status: string) {
		switch (status) {
			case 'pending':
				return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300';
			case 'in_review':
				return 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300';
			case 'resolved':
				return 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300';
			default:
				return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
		}
	}

	function formatDate(dateString: string) {
		if (!dateString) return '';
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		});
	}

	function truncatePrincipal(p: string) {
		if (!p) return 'Unknown';
		return p.length > 16 ? `${p.slice(0, 8)}…${p.slice(-4)}` : p;
	}

	$effect(() => {
		if (principal) {
			void loadLitigations();
		} else {
			loading = false;
			error = 'User not authenticated';
		}
	});
</script>

<div class="w-full max-w-5xl mx-auto px-4 py-6">
	<!-- Header -->
	<div class="flex items-center gap-3 mb-6">
		<div
			class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center"
		>
			<svg
				class="w-5 h-5 text-indigo-600 dark:text-indigo-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
				/>
			</svg>
		</div>
		<div class="flex-1">
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white">
				Justice & Litigation
			</h1>
		</div>
		<button
			class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
			onclick={loadLitigations}
			disabled={loading}
		>
			{#if loading}
				<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				Loading…
			{:else}
				↻ Refresh
			{/if}
		</button>
	</div>

	{#if error && !loading}
		<div
			class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"
		>
			<span class="font-medium">Error:</span>
			{error}
		</div>
	{/if}

	{#if loading}
		<div class="flex flex-col items-center justify-center py-16">
			<svg class="animate-spin h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24">
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
			<p class="mt-4 text-gray-500 dark:text-gray-400 animate-pulse">Loading cases…</p>
		</div>
	{:else}
		<!-- Info bar -->
		<div class="mb-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
			<span>
				Profile: <span class="font-semibold capitalize">{userProfile}</span>
			</span>
			<span>
				Total cases: <span class="font-semibold">{totalCount}</span>
			</span>
		</div>

		<!-- Tabs -->
		<div class="flex border-b-2 border-gray-200 dark:border-gray-700 mb-6">
			<button
				class="flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors {tab ===
				'list'
					? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
					: 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}"
				onclick={() => (tab = 'list')}
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
					/>
				</svg>
				{userProfile === 'admin' ? 'All Litigations' : 'My Litigations'}
			</button>
			<button
				class="flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors {tab ===
				'create'
					? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
					: 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}"
				onclick={() => (tab = 'create')}
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 4v16m8-8H4"
					/>
				</svg>
				Create Litigation
			</button>
			<button
				class="flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors {tab ===
				'stats'
					? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
					: 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}"
				onclick={() => (tab = 'stats')}
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
				Statistics
			</button>
		</div>

		<!-- Tab Content -->
		<div
			class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
		>
			<!-- LIST TAB -->
			{#if tab === 'list'}
				{#if litigations.length === 0}
					<div class="text-center py-12">
						<svg
							class="w-12 h-12 mx-auto text-gray-400 mb-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
						<p class="text-gray-500 dark:text-gray-400">
							{userProfile === 'admin'
								? 'No litigations found in the system.'
								: 'You have no litigation cases.'}
						</p>
					</div>
				{:else}
					<div class="overflow-x-auto">
						<table class="w-full text-sm text-left">
							<thead
								class="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-700"
							>
								<tr>
									<th class="px-4 py-3 rounded-tl-lg">Case ID</th>
									<th class="px-4 py-3">Title</th>
									<th class="px-4 py-3">Status</th>
									<th class="px-4 py-3">Requester</th>
									{#if userProfile === 'admin'}
										<th class="px-4 py-3">Defendant</th>
									{/if}
									<th class="px-4 py-3">Date</th>
									{#if userProfile === 'admin'}
										<th class="px-4 py-3 rounded-tr-lg">Actions</th>
									{:else}
										<th class="px-4 py-3 rounded-tr-lg"></th>
									{/if}
								</tr>
							</thead>
							<tbody>
								{#each litigations as lit (lit.id)}
									<tr
										class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
									>
										<td class="px-4 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">
											{lit.id}
										</td>
										<td class="px-4 py-3">
											<div class="font-medium text-gray-900 dark:text-white">
												{lit.case_title}
											</div>
											{#if lit.description}
												<div
													class="text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs"
												>
													{lit.description}
												</div>
											{/if}
										</td>
										<td class="px-4 py-3">
											<span
												class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium {statusColor(lit.status)}"
											>
												{lit.status?.replace('_', ' ') || 'unknown'}
											</span>
										</td>
										<td class="px-4 py-3 font-mono text-xs text-gray-600 dark:text-gray-400">
											{truncatePrincipal(lit.requester_principal)}
										</td>
										{#if userProfile === 'admin'}
											<td
												class="px-4 py-3 font-mono text-xs text-gray-600 dark:text-gray-400"
											>
												{truncatePrincipal(lit.defendant_principal)}
											</td>
										{/if}
										<td class="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">
											{formatDate(lit.requested_at)}
										</td>
										<td class="px-4 py-3">
											{#if userProfile === 'admin' && lit.status !== 'resolved'}
												<button
													class="px-3 py-1 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
													onclick={(e) => {
														e.stopPropagation();
														openVerdict(lit);
													}}
												>
													Execute Verdict
												</button>
											{:else if lit.status === 'resolved'}
												<span class="text-xs text-gray-400">Resolved</span>
											{/if}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}

			<!-- CREATE TAB -->
			{:else if tab === 'create'}
				<div
					class="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
				>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Create New Litigation Case
					</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
						Submit a new litigation request. All fields are required.
					</p>

					<div class="space-y-4">
						<div>
							<label
								for="jl-defendant"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							>
								Defendant Principal ID
							</label>
							<input
								id="jl-defendant"
								type="text"
								bind:value={formDefendant}
								placeholder="Enter defendant's principal ID"
								disabled={creating}
								class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50"
							/>
						</div>

						<div>
							<label
								for="jl-title"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							>
								Case Title
							</label>
							<input
								id="jl-title"
								type="text"
								bind:value={formTitle}
								placeholder="Enter case title"
								disabled={creating}
								class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50"
							/>
						</div>

						<div>
							<label
								for="jl-desc"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							>
								Case Description
							</label>
							<textarea
								id="jl-desc"
								bind:value={formDescription}
								placeholder="Provide detailed description of the dispute…"
								rows="4"
								disabled={creating}
								class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50 resize-y"
							></textarea>
						</div>
					</div>

					{#if createError}
						<div
							class="mt-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"
						>
							<span class="font-medium">Error:</span>
							{createError}
						</div>
					{/if}

					{#if createSuccess}
						<div
							class="mt-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg text-sm"
						>
							<span class="font-medium">Success:</span> Litigation case created!
						</div>
					{/if}

					<div class="flex justify-end gap-3 mt-6">
						<button
							class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
							onclick={resetForm}
							disabled={creating}
						>
							Reset
						</button>
						<button
							class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
							onclick={createLitigation}
							disabled={creating ||
								!formTitle.trim() ||
								!formDescription.trim() ||
								!formDefendant.trim()}
						>
							{#if creating}
								<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Creating…
							{:else}
								Create Litigation
							{/if}
						</button>
					</div>
				</div>

			<!-- STATS TAB -->
			{:else if tab === 'stats'}
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<div
						class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"
					>
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
							Total Cases
						</p>
						<p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
							{totalCount}
						</p>
					</div>
					<div
						class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"
					>
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
							Pending
						</p>
						<p class="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
							{pendingCount}
						</p>
					</div>
					<div
						class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"
					>
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
							In Review
						</p>
						<p class="text-3xl font-bold text-blue-600 dark:text-blue-400">
							{inReviewCount}
						</p>
					</div>
					<div
						class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"
					>
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
							Resolved
						</p>
						<p class="text-3xl font-bold text-green-600 dark:text-green-400">
							{resolvedCount}
						</p>
					</div>
				</div>
			{/if}
		</div>
	{/if}

	<!-- Verdict Modal Backdrop -->
	{#if showVerdict}
		<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
			<!-- Backdrop -->
			<button
				class="absolute inset-0 bg-black/50"
				onclick={closeVerdict}
				aria-label="Close"
			></button>

			<!-- Modal -->
			<div
				class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg max-h-[90vh] overflow-y-auto"
			>
				<div class="p-6">
					<div class="flex items-center gap-2 mb-4">
						<svg
							class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
							/>
						</svg>
						<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
							Execute Verdict
						</h3>
					</div>

					{#if verdictCase}
						<div
							class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4 text-sm space-y-1"
						>
							<div>
								<span class="font-medium text-gray-700 dark:text-gray-300">ID:</span>
								<span class="text-gray-600 dark:text-gray-400">{verdictCase.id}</span>
							</div>
							<div>
								<span class="font-medium text-gray-700 dark:text-gray-300">Title:</span>
								<span class="text-gray-600 dark:text-gray-400"
									>{verdictCase.case_title}</span
								>
							</div>
							{#if verdictCase.description}
								<div>
									<span class="font-medium text-gray-700 dark:text-gray-300"
										>Description:</span
									>
									<span class="text-gray-600 dark:text-gray-400"
										>{verdictCase.description}</span
									>
								</div>
							{/if}
						</div>

						<div class="mb-4">
							<label
								for="jl-verdict-code"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							>
								Verdict Code (Python/Codex)
							</label>
							<textarea
								id="jl-verdict-code"
								bind:value={verdictCode}
								rows="4"
								disabled={executingVerdict}
								placeholder="Enter Python code for the verdict execution…"
								class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50 resize-y"
							></textarea>
							<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
								Example: transfer("from_principal", "to_principal", amount, "memo")
							</p>
						</div>

						{#if verdictError}
							<div
								class="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"
							>
								<span class="font-medium">Error:</span>
								{verdictError}
							</div>
						{/if}

						{#if verdictSuccess}
							<div
								class="mb-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg text-sm"
							>
								<span class="font-medium">Success:</span> Verdict executed!
							</div>
						{/if}

						<div class="flex justify-end gap-3">
							<button
								class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
								onclick={closeVerdict}
								disabled={executingVerdict}
							>
								Cancel
							</button>
							<button
								class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
								onclick={executeVerdict}
								disabled={executingVerdict || !verdictCode.trim()}
							>
								{#if executingVerdict}
									<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											class="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Executing…
								{:else}
									Execute Verdict
								{/if}
							</button>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
