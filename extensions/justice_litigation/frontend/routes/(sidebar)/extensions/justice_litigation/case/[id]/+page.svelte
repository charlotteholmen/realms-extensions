<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Badge, Button, Spinner, Alert } from 'flowbite-svelte';
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';
	import { backend } from '$lib/canisters';
	import { goto } from '$app/navigation';

	let caseId = $page.params.id;
	let loading = true;
	let error = '';
	let caseData: any = null;

	function getStatusColor(status: string) {
		switch (status) {
			case 'filed': return 'blue';
			case 'assigned': return 'indigo';
			case 'in_progress': return 'yellow';
			case 'verdict_issued': return 'purple';
			case 'closed': return 'green';
			case 'dismissed': return 'red';
			default: return 'gray';
		}
	}

	function formatDate(dateString: string) {
		if (!dateString) return '—';
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	async function loadCase() {
		loading = true;
		error = '';

		try {
			const response = await backend.extension_sync_call({
				extension_name: "justice_litigation",
				function_name: "get_case",
				args: JSON.stringify({ case_id: caseId })
			});

			if (response.success) {
				const data = JSON.parse(response.response);
				if (data.success) {
					caseData = data.data.case;
				} else {
					error = data.error || 'Failed to load case';
				}
			} else {
				error = response.response || 'Failed to load case';
			}
		} catch (err: any) {
			error = err.message || 'Error loading case';
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		loadCase();
	});
</script>

<svelte:head>
	<title>Case {caseId} - Justice Litigation</title>
</svelte:head>

<div class="w-full max-w-3xl mx-auto px-4 py-6">
	<Button color="light" size="xs" on:click={() => goto('/extensions/justice_litigation')} class="mb-6">
		<ArrowLeftOutline class="w-3 h-3 mr-1" />
		Back to Cases
	</Button>

	{#if loading}
		<div class="flex items-center justify-center py-12">
			<Spinner size="8" />
		</div>
	{:else if error}
		<Alert color="red" class="mb-4">
			<span class="font-medium">Error:</span> {error}
		</Alert>
	{:else if caseData}
		<!-- Header -->
		<div class="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
			<div class="flex items-center justify-between mb-1">
				<h1 class="text-xl font-semibold text-gray-900 dark:text-white">{caseData.title}</h1>
				<Badge color={getStatusColor(caseData.status)} class="text-xs">
					{caseData.status?.replace('_', ' ').toUpperCase()}
				</Badge>
			</div>
			<p class="text-sm text-gray-500 dark:text-gray-400 font-mono">{caseData.case_number}</p>
		</div>

		<!-- Case Information -->
		<dl class="divide-y divide-gray-100 dark:divide-gray-800">
			<div class="py-3 grid grid-cols-3 gap-4">
				<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Court</dt>
				<dd class="text-sm text-gray-900 dark:text-white col-span-2">{caseData.court?.name || '—'}</dd>
			</div>
			<div class="py-3 grid grid-cols-3 gap-4">
				<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Plaintiff</dt>
				<dd class="text-sm text-gray-900 dark:text-white col-span-2">{caseData.plaintiff?.name || caseData.plaintiff_id || '—'}</dd>
			</div>
			<div class="py-3 grid grid-cols-3 gap-4">
				<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Defendant</dt>
				<dd class="text-sm text-gray-900 dark:text-white col-span-2">{caseData.defendant?.name || caseData.defendant_id || '—'}</dd>
			</div>
			<div class="py-3 grid grid-cols-3 gap-4">
				<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Filed Date</dt>
				<dd class="text-sm text-gray-900 dark:text-white col-span-2">{formatDate(caseData.filed_date)}</dd>
			</div>
			{#if caseData.closed_date}
				<div class="py-3 grid grid-cols-3 gap-4">
					<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Closed Date</dt>
					<dd class="text-sm text-gray-900 dark:text-white col-span-2">{formatDate(caseData.closed_date)}</dd>
				</div>
			{/if}
			<div class="py-3 grid grid-cols-3 gap-4">
				<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Assigned Judges</dt>
				<dd class="text-sm text-gray-900 dark:text-white col-span-2">
					{#if caseData.judges && caseData.judges.length > 0}
						{caseData.judges.map(j => j.specialization || `Judge #${j.id}`).join(', ')}
					{:else}
						—
					{/if}
				</dd>
			</div>
			<div class="py-3 grid grid-cols-3 gap-4">
				<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Description</dt>
				<dd class="text-sm text-gray-900 dark:text-white col-span-2">{caseData.description || '—'}</dd>
			</div>
		</dl>

		<!-- Verdicts Section -->
		{#if caseData.verdicts && caseData.verdicts.length > 0}
			<div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
				<h2 class="text-base font-semibold text-gray-900 dark:text-white mb-4">Verdicts</h2>
				{#each caseData.verdicts as verdict, i}
					<dl class="divide-y divide-gray-100 dark:divide-gray-800 mb-4 {i > 0 ? 'border-t border-gray-100 dark:border-gray-800 pt-4' : ''}">
						<div class="py-2 grid grid-cols-3 gap-4">
							<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Decision</dt>
							<dd class="text-sm text-gray-900 dark:text-white col-span-2 font-medium">{verdict.decision}</dd>
						</div>
						<div class="py-2 grid grid-cols-3 gap-4">
							<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Date Issued</dt>
							<dd class="text-sm text-gray-900 dark:text-white col-span-2">{formatDate(verdict.issued_date)}</dd>
						</div>
						<div class="py-2 grid grid-cols-3 gap-4">
							<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Reasoning</dt>
							<dd class="text-sm text-gray-900 dark:text-white col-span-2">{verdict.reasoning || '—'}</dd>
						</div>
					</dl>
				{/each}
			</div>
		{/if}

		<!-- Penalties Section -->
		{#if caseData.penalties && caseData.penalties.length > 0}
			<div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
				<h2 class="text-base font-semibold text-gray-900 dark:text-white mb-4">Penalties</h2>
				{#each caseData.penalties as penalty, i}
					<dl class="divide-y divide-gray-100 dark:divide-gray-800 mb-4 {i > 0 ? 'border-t border-gray-100 dark:border-gray-800 pt-4' : ''}">
						<div class="py-2 grid grid-cols-3 gap-4">
							<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Type</dt>
							<dd class="text-sm text-gray-900 dark:text-white col-span-2 capitalize">{penalty.penalty_type}</dd>
						</div>
						<div class="py-2 grid grid-cols-3 gap-4">
							<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Amount</dt>
							<dd class="text-sm text-gray-900 dark:text-white col-span-2">{penalty.amount?.toLocaleString() || '—'} {penalty.currency || ''}</dd>
						</div>
						<div class="py-2 grid grid-cols-3 gap-4">
							<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
							<dd class="text-sm col-span-2">
								<Badge color={penalty.status === 'executed' ? 'green' : penalty.status === 'waived' ? 'yellow' : 'gray'} class="text-xs">
									{penalty.status}
								</Badge>
							</dd>
						</div>
						{#if penalty.description}
							<div class="py-2 grid grid-cols-3 gap-4">
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Description</dt>
								<dd class="text-sm text-gray-900 dark:text-white col-span-2">{penalty.description}</dd>
							</div>
						{/if}
					</dl>
				{/each}
			</div>
		{/if}

		<!-- Appeals Section -->
		{#if caseData.appeals && caseData.appeals.length > 0}
			<div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
				<h2 class="text-base font-semibold text-gray-900 dark:text-white mb-4">Appeals</h2>
				{#each caseData.appeals as appeal, i}
					<dl class="divide-y divide-gray-100 dark:divide-gray-800 mb-4 {i > 0 ? 'border-t border-gray-100 dark:border-gray-800 pt-4' : ''}">
						<div class="py-2 grid grid-cols-3 gap-4">
							<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
							<dd class="text-sm col-span-2">
								<Badge color={appeal.status === 'upheld' ? 'green' : appeal.status === 'overturned' ? 'red' : 'yellow'} class="text-xs">
									{appeal.status}
								</Badge>
							</dd>
						</div>
						<div class="py-2 grid grid-cols-3 gap-4">
							<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Filed Date</dt>
							<dd class="text-sm text-gray-900 dark:text-white col-span-2">{formatDate(appeal.filed_date)}</dd>
						</div>
						<div class="py-2 grid grid-cols-3 gap-4">
							<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Grounds</dt>
							<dd class="text-sm text-gray-900 dark:text-white col-span-2">{appeal.grounds}</dd>
						</div>
						{#if appeal.decision_reasoning}
							<div class="py-2 grid grid-cols-3 gap-4">
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Decision</dt>
								<dd class="text-sm text-gray-900 dark:text-white col-span-2">{appeal.decision_reasoning}</dd>
							</div>
						{/if}
					</dl>
				{/each}
			</div>
		{/if}
	{/if}
</div>
