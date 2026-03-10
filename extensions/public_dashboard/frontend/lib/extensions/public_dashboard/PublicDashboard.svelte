<script lang="ts">
	import ChartWidget from '../../../routes/utils/widgets/ChartWidget.svelte';
	import { onMount } from 'svelte';
	import ActivityList from '../../../routes/(sidebar)/dashboard/ActivityList.svelte';
	import OrganizationTable from '../../../routes/utils/dashboard/OrganizationTable.svelte';
	import { backend } from '$lib/canisters';
	import { writable } from 'svelte/store';
	import { _ } from 'svelte-i18n';
	import { Avatar, Badge, Card, Heading, Spinner } from 'flowbite-svelte';

	// --- State ---
	let statusData: any = null;
	let realmInfo: any = null;
	let codexes: any[] = [];
	let latestUsers: any[] = [];
	let loading = true;

	// Raw entity arrays (fetched once, charts rebuilt on range change)
	let allUsers: any[] = [];
	let allOrgs: any[] = [];
	let allTransfers: any[] = [];
	let selectedDays = 30;

	// Chart stores
	const userChartData = writable<[string[], number[]]>([[], []]);
	const orgChartData = writable<[string[], number[]]>([[], []]);
	const transferChartData = writable<[string[], number[]]>([[], []]);

	// Percent changes
	let userPctChange: number | null = null;
	let orgPctChange: number | null = null;
	let transferPctChange: number | null = null;

	// --- Helpers ---
	function parseEntities(response: any): any[] {
		if (response?.success && response?.data?.objectsListPaginated) {
			return (response.data.objectsListPaginated.objects || []).map((s: string) => JSON.parse(s));
		}
		return [];
	}

	function entityDate(entity: any): Date | null {
		const ts = entity.timestamp_created;
		if (!ts) return null;
		return new Date(ts.replace(' ', 'T'));
	}

	function buildCumulativeChartData(entities: any[], totalCount: number, days: number): [string[], number[]] {
		if (totalCount === 0) return [[], []];

		const now = new Date();
		const cutoff = new Date();
		cutoff.setDate(now.getDate() - days);
		cutoff.setHours(0, 0, 0, 0);

		// Count fetched entities before cutoff
		let fetchedBeforeCutoff = 0;
		const dateCounts: Record<string, number> = {};

		for (const entity of entities) {
			const d = entityDate(entity);
			if (!d) continue;
			if (d < cutoff) {
				fetchedBeforeCutoff++;
			} else {
				const dateStr = d.toISOString().split('T')[0];
				dateCounts[dateStr] = (dateCounts[dateStr] || 0) + 1;
			}
		}

		// Unfetched older entities + fetched ones before cutoff = baseline
		const unfetched = totalCount - entities.length;
		const baseline = Math.max(0, unfetched) + fetchedBeforeCutoff;

		// Generate date range
		const dates: string[] = [];
		const d = new Date(cutoff);
		while (d <= now) {
			dates.push(d.toISOString().split('T')[0]);
			d.setDate(d.getDate() + 1);
		}

		// Build cumulative series
		let cumulative = baseline;
		const labels: string[] = [];
		const values: number[] = [];

		for (const dateStr of dates) {
			cumulative += (dateCounts[dateStr] || 0);
			const dt = new Date(dateStr + 'T00:00:00');
			labels.push(dt.toLocaleDateString('en', { day: '2-digit', month: 'short' }));
			values.push(cumulative);
		}

		// Downsample to ~15 points if too dense
		if (labels.length > 15) {
			const step = Math.ceil(labels.length / 15);
			const sL: string[] = [];
			const sV: number[] = [];
			for (let i = 0; i < labels.length; i += step) {
				sL.push(labels[i]);
				sV.push(values[i]);
			}
			if (sL[sL.length - 1] !== labels[labels.length - 1]) {
				sL.push(labels[labels.length - 1]);
				sV.push(values[values.length - 1]);
			}
			return [sL, sV];
		}
		return [labels, values];
	}

	function calcPercentChange(entities: any[], days: number): number | null {
		if (!entities.length) return null;
		const now = new Date();
		const periodStart = new Date();
		periodStart.setDate(now.getDate() - days);
		const prevStart = new Date();
		prevStart.setDate(now.getDate() - days * 2);

		let current = 0;
		let previous = 0;
		for (const entity of entities) {
			const d = entityDate(entity);
			if (!d) continue;
			if (d >= periodStart) current++;
			else if (d >= prevStart) previous++;
		}
		if (previous === 0) return current > 0 ? 100 : null;
		return Math.round(((current - previous) / previous) * 100);
	}

	function updateCharts() {
		const userTotal = statusData ? Number(statusData.users_count) : allUsers.length;
		const orgTotal = statusData ? Number(statusData.organizations_count) : allOrgs.length;
		const transferTotal = statusData ? Number(statusData.transfers_count) : allTransfers.length;

		userChartData.set(buildCumulativeChartData(allUsers, userTotal, selectedDays));
		orgChartData.set(buildCumulativeChartData(allOrgs, orgTotal, selectedDays));
		transferChartData.set(buildCumulativeChartData(allTransfers, transferTotal, selectedDays));

		userPctChange = calcPercentChange(allUsers, selectedDays);
		orgPctChange = calcPercentChange(allOrgs, selectedDays);
		transferPctChange = calcPercentChange(allTransfers, selectedDays);
	}

	function handleRangeChange(event: CustomEvent<number>) {
		selectedDays = event.detail;
		updateCharts();
	}

	// --- Data loading ---
	async function loadData() {
		loading = true;
		try {
			// Parallel: status + entity lists + latest users
			const [statusResp, realmResp, codexResp, usersResp, orgsResp, transfersResp, latestResp] = await Promise.all([
				backend.status(),
				backend.get_objects_paginated("Realm", 0, 1, "asc"),
				backend.get_objects_paginated("Codex", 0, 50, "asc"),
				backend.get_objects_paginated("User", 0, 500, "asc"),
				backend.get_objects_paginated("Organization", 0, 500, "asc"),
				backend.get_objects_paginated("Transfer", 0, 500, "asc"),
				backend.get_objects_paginated("User", 0, 8, "desc"),
			]);

			if (statusResp?.success && statusResp?.data?.status) {
				statusData = statusResp.data.status;
			}

			// Realm info (first realm)
			const realms = parseEntities(realmResp);
			if (realms.length > 0) {
				realmInfo = realms[0];
			}

			// Codexes (filter out internal/temp ones starting with _)
			codexes = parseEntities(codexResp).filter((c: any) => c.name && !c.name.startsWith('_'));

			allUsers = parseEntities(usersResp);
			allOrgs = parseEntities(orgsResp);
			allTransfers = parseEntities(transfersResp);
			latestUsers = parseEntities(latestResp);

			updateCharts();
		} catch (e) {
			console.error('Error loading dashboard data:', e);
		}
		loading = false;
	}

	// --- KPI card definitions ---
	$: kpiCards = statusData ? [
		{ label: 'Users', value: Number(statusData.users_count), color: 'blue' },
		{ label: 'Organizations', value: Number(statusData.organizations_count), color: 'purple' },
		{ label: 'Proposals', value: Number(statusData.proposals_count), color: 'amber' },
		{ label: 'Votes', value: Number(statusData.votes_count), color: 'green' },
		{ label: 'Transfers', value: Number(statusData.transfers_count), color: 'rose' },
		{ label: 'Licenses', value: Number(statusData.licenses_count), color: 'cyan' },
	] : [];

	onMount(loadData);
</script>

<div class="mt-px space-y-4">
	<!-- KPI Stat Cards -->
	{#if loading}
		<div class="flex items-center justify-center py-12">
			<Spinner size="8" />
			<span class="ml-3 text-gray-500">Loading dashboard...</span>
		</div>
	{:else}
		<!-- Realm Hero Section -->
		{#if realmInfo}
			{@const welcomeExt = realmInfo.welcome_image ? (realmInfo.welcome_image.split('.').pop() || 'png') : ''}
			{@const bgImage = realmInfo.welcome_image ? `/images/welcome.${welcomeExt}` : ''}
			<Card size="xl" class="!p-0 overflow-hidden relative">
				{#if bgImage}
					<div
						class="absolute inset-0 bg-cover bg-center"
						style="background-image: url('{bgImage}');"
					></div>
					<div class="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
				{:else}
					<div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
				{/if}
				<div class="relative p-6 flex items-start gap-6">
					{#if realmInfo.logo}
						<img
							src={`/images/realm_logo.${realmInfo.logo.split('.').pop() || 'svg'}`}
							alt={realmInfo.name || 'Realm'}
							class="w-20 h-20 rounded-xl object-contain bg-white p-2 shadow-sm"
						/>
					{/if}
					<div class="flex-1">
						<h1 class="text-3xl font-bold text-gray-900 mb-2">{realmInfo.name || 'Realm'}</h1>
						{#if realmInfo.description}
							<p class="text-base text-gray-700 leading-relaxed mb-3">{realmInfo.description}</p>
						{/if}
						{#if realmInfo.welcome_message}
							<p class="text-sm text-gray-600 italic">{realmInfo.welcome_message}</p>
						{/if}
					</div>
				</div>
			</Card>
		{/if}

		{#if kpiCards.length > 0}
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
				{#each kpiCards as card}
					<Card class="!p-4">
						<p class="text-sm text-gray-500">{card.label}</p>
						<p class="text-2xl font-bold text-gray-900">{card.value.toLocaleString()}</p>
					</Card>
				{/each}
			</div>
		{/if}

		<ChartWidget
			title={$_('extensions.public_dashboard.users_chart.title')}
			description={$_('extensions.public_dashboard.users_chart.description')}
			dateValues={$userChartData}
			percentChange={userPctChange}
			seriesName="Users"
			on:rangeChange={handleRangeChange}
		/>

		<!-- Latest Users Joined Section -->
		{#if latestUsers.length > 0}
			<Card class="w-full">
				<div class="flex items-center justify-between mb-6">
					<Heading tag="h3" class="text-lg font-semibold">
						{$_('extensions.public_dashboard.latest_users.title')}
					</Heading>
				</div>
				<div class="flex flex-wrap gap-6 justify-start w-full">
					{#each latestUsers as user}
						<div class="flex flex-col items-center space-y-2 min-w-0">
							<Avatar 
								src={user.profile_picture_url || `https://api.dicebear.com/9.x/identicon/svg?seed=${user.id}`}
								class="w-16 h-16 ring-2 ring-gray-200 hover:ring-gray-300 transition-all duration-200"
								alt={user.name || user.id}
							/>
							<span class="text-xs text-gray-600 text-center max-w-[4rem] truncate" title={user.name || user.id}>
								{user.name || user.id.substring(0, 8)}
							</span>
						</div>
					{/each}
				</div>
			</Card>
		{/if}

		<ChartWidget
			title={$_('extensions.public_dashboard.organizations_chart.title')}
			description={$_('extensions.public_dashboard.organizations_chart.description')}
			dateValues={$orgChartData}
			percentChange={orgPctChange}
			seriesName="Organizations"
			color="#7C3AED"
			on:rangeChange={handleRangeChange}
		/>

		<ChartWidget
			title={$_('extensions.public_dashboard.assets_chart.title')}
			description={$_('extensions.public_dashboard.assets_chart.description')}
			dateValues={$transferChartData}
			percentChange={transferPctChange}
			seriesName="Transfers"
			color="#E11D48"
			on:rangeChange={handleRangeChange}
		/>

		<!-- Codex List -->
		{#if codexes.length > 0}
			<Card size="xl" class="!p-6">
				<Heading tag="h3" class="text-xl font-semibold mb-1">Codexes</Heading>
				<p class="text-sm text-gray-500 mb-4">Smart social contracts governing this realm</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{#each codexes as codex}
						<div class="flex items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition-colors">
							<div class="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
								<span class="text-indigo-600 font-bold text-sm">{(codex.name || '?')[0].toUpperCase()}</span>
							</div>
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-gray-900 truncate">{codex.name}</p>
								{#if codex.url}
									<a href={codex.url} target="_blank" rel="noopener" class="text-xs text-blue-500 hover:underline truncate block">View source</a>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</Card>
		{/if}

		<OrganizationTable />
		<div class="grid grid-cols-1 gap-4 xl:grid-cols-1">
			<ActivityList />
		</div>
	{/if}
</div>
