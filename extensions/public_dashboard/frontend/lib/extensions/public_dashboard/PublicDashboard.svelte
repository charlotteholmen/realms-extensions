<script lang="ts">
	import { onMount, tick } from 'svelte';
	import ActivityList from '../../../routes/(sidebar)/dashboard/ActivityList.svelte';
	import { backend } from '$lib/canisters';
	import { _ } from 'svelte-i18n';
	import { Avatar, Badge, Card, Heading, Spinner } from 'flowbite-svelte';
	import { cellToBoundary, gridDisk } from 'h3-js';

	// --- State ---
	let statusData: any = null;
	let realmInfo: any = null;
	let codexes: any[] = [];
	let zones: any[] = [];
	let latestUsers: any[] = [];
	let latestOrgs: any[] = [];
	let loading = true;
	let mapContainer: HTMLDivElement;
	let askText = '';


	// --- Helpers ---
	function parseEntities(response: any): any[] {
		if (response?.success && response?.data?.objectsListPaginated) {
			return (response.data.objectsListPaginated.objects || []).map((s: string) => JSON.parse(s));
		}
		return [];
	}


	// --- Data loading ---
	async function loadData() {
		loading = true;
		try {
			const [statusResp, realmResp, codexResp, zonesResp, latestResp, latestOrgsResp] = await Promise.all([
				backend.status(),
				backend.get_objects_paginated("Realm", 0, 1, "asc"),
				backend.get_objects_paginated("Codex", 0, 50, "desc"),
				backend.get_objects_paginated("Zone", 0, 200, "asc"),
				backend.get_objects_paginated("User", 0, 8, "desc"),
				backend.get_objects_paginated("Organization", 0, 8, "desc"),
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
			const allCodexes = parseEntities(codexResp);
			console.log('All codexes:', allCodexes.length, allCodexes.map((c: any) => c.name));
			codexes = allCodexes.filter((c: any) => c.name && !c.name.startsWith('_'));
			console.log('Filtered codexes:', codexes.length);

			// Zones with valid H3 indexes or coordinates
			const allZones = parseEntities(zonesResp);
			console.log('Zone data sample:', allZones.length > 0 ? JSON.stringify(allZones[0]) : 'no zones');
			zones = allZones.filter((z: any) => z.h3_index || (z.latitude && z.longitude));
			console.log('Filtered zones with data:', zones.length);

			latestUsers = parseEntities(latestResp);
			latestOrgs = parseEntities(latestOrgsResp);
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

	const INFLUENCE_RINGS = 3;

	async function initMap() {
		if (!mapContainer || zones.length === 0) return;

		const L = await import('leaflet');

		const map = L.map(mapContainer).setView([20, 0], 2);

		// CartoDB Positron tiles (same as registry) with OSM fallback
		const cartoLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
			attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: 'abcd',
			maxZoom: 19,
		});
		cartoLayer.on('tileerror', function () {
			if (!(map as any)._fallbackTiles) {
				(map as any)._fallbackTiles = true;
				map.removeLayer(cartoLayer);
				L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
					maxZoom: 19,
				}).addTo(map);
			}
		});
		cartoLayer.addTo(map);

		const allLatLngs: [number, number][] = [];
		const renderedHexes = new Set<string>();

		// Expand each zone into an influence area using gridDisk, then render all hexes
		for (const zone of zones) {
			if (zone.h3_index) {
				try {
					const disk = gridDisk(zone.h3_index, INFLUENCE_RINGS);
					for (const hexIndex of disk) {
						if (renderedHexes.has(hexIndex)) continue;
						renderedHexes.add(hexIndex);

						const boundary = cellToBoundary(hexIndex);
						const latLngs: [number, number][] = boundary.map((c: number[]) => [c[0], c[1]] as [number, number]);

						// Fade opacity based on distance from center
						const isCenter = hexIndex === zone.h3_index;
						const opacity = isCenter ? 0.45 : 0.15;
						const weight = isCenter ? 2 : 0.8;

						L.polygon(latLngs, {
							color: '#4338ca',
							weight,
							fillColor: '#6366f1',
							fillOpacity: opacity,
						}).addTo(map);

						if (isCenter) {
							latLngs.forEach(c => allLatLngs.push(c));
						}
					}
				} catch (e) {
					// fallback if H3 conversion fails
					if (zone.latitude && zone.longitude) {
						const lat = Number(zone.latitude), lng = Number(zone.longitude);
						allLatLngs.push([lat, lng]);
					}
				}
			}

			// Add circle marker at zone center for zoomed-out visibility
			if (zone.latitude && zone.longitude) {
				const lat = Number(zone.latitude), lng = Number(zone.longitude);
				// Outer glow
				L.circleMarker([lat, lng], {
					radius: 14, fillColor: '#6366f1', color: '#6366f1',
					weight: 0, fillOpacity: 0.25,
				}).addTo(map);
				// Inner dot
				const marker = L.circleMarker([lat, lng], {
					radius: 8, fillColor: '#6366f1', color: '#fff',
					weight: 2, fillOpacity: 0.9,
				}).addTo(map);

				const name = zone.name || zone.h3_index || '';
				const desc = zone.description || '';
				marker.bindPopup(`<strong>${name}</strong>${desc ? '<br/>' + desc : ''}`);

				if (!allLatLngs.some(c => c[0] === lat && c[1] === lng)) {
					allLatLngs.push([lat, lng]);
				}
			}
		}

		if (allLatLngs.length > 0) {
			map.fitBounds(L.latLngBounds(allLatLngs), { padding: [40, 40], maxZoom: 5 });
		}
	}

	function askAI() {
		if (askText.trim()) {
			window.location.href = `/extensions/llm_chat?q=${encodeURIComponent(askText.trim())}`;
		}
	}

	async function loadAndInit() {
		await loadData();
		await tick();
		await initMap();
	}

	onMount(loadAndInit);
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
</svelte:head>

<div class="mt-px space-y-4">
	<!-- KPI Stat Cards -->
	{#if loading}
		<div class="flex items-center justify-center py-12">
			<Spinner size="8" />
			<span class="ml-3 text-gray-500">Loading dashboard...</span>
		</div>
	{:else}
		<!-- Realm Hero Section with Stats -->
		{#if realmInfo}
			{@const welcomeExt = realmInfo.welcome_image ? (realmInfo.welcome_image.split('.').pop() || 'png') : ''}
			{@const bgImage = realmInfo.welcome_image ? `/images/welcome.${welcomeExt}` : '/images/default_welcome.jpg'}
			<Card size="xl" class="!p-0 overflow-hidden relative">
				<div
					class="absolute inset-0 bg-cover bg-center"
					style="background-image: url('{bgImage}');"
				></div>
				<div class="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
				<div class="relative p-8">
					<div class="flex items-center gap-3 mb-3">
						<img
							src={realmInfo.logo ? `/images/realm_logo.${realmInfo.logo.split('.').pop() || 'svg'}` : '/images/logo_sphere_only.svg'}
							alt={realmInfo.name || 'Realm'}
							class="w-12 h-12 object-contain"
						/>
						<h1 class="text-3xl font-bold text-gray-900">{realmInfo.name || 'Realm'}</h1>
					</div>
					{#if realmInfo.description}
						<p class="text-base text-gray-700 leading-relaxed mb-2 max-w-3xl">{realmInfo.description}</p>
					{/if}
					{#if realmInfo.welcome_message}
						<p class="text-sm text-gray-600 italic mb-6 max-w-3xl">{realmInfo.welcome_message}</p>
					{/if}

					{#if kpiCards.length > 0}
						<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
							{#each kpiCards as card}
								<div class="rounded-lg bg-white/60 backdrop-blur-sm border border-white/80 p-3">
									<p class="text-xs text-gray-500 font-medium">{card.label}</p>
									<p class="text-2xl font-bold text-gray-900">{card.value.toLocaleString()}</p>
								</div>
							{/each}
						</div>
					{/if}

					<a
						href="/join"
						class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black transition-colors shadow-md"
					>
						Join this Realm
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</a>
				</div>
			</Card>
		{/if}

		<!-- AI Assistant -->
		<Card size="xl" class="!p-5">
			<div class="flex items-center gap-3 mb-3">
				<div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
					<svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
					</svg>
				</div>
				<div>
					<Heading tag="h3" class="text-lg font-semibold">Ask the AI Assistant</Heading>
					<p class="text-xs text-gray-500">Get answers about this realm, its governance, and services</p>
				</div>
			</div>
			<form on:submit|preventDefault={askAI} class="flex gap-2">
				<input
					type="text"
					bind:value={askText}
					placeholder="Ask anything about this realm..."
					class="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
				/>
				<button
					type="submit"
					disabled={!askText.trim()}
					class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
					</svg>
					Ask
				</button>
			</form>
		</Card>

		<!-- Zones Map -->
		{#if zones.length > 0}
			<Card size="xl" class="!p-6">
				<Heading tag="h3" class="text-xl font-semibold mb-1">Realm Zones</Heading>
				<p class="text-sm text-gray-500 mb-4">{zones.length} zone{zones.length !== 1 ? 's' : ''} in this realm</p>
				<div bind:this={mapContainer} class="w-full h-80 rounded-lg overflow-hidden border border-gray-200 relative z-0"></div>
			</Card>
		{/if}

		<!-- Latest Users Joined Section -->
		{#if latestUsers.length > 0}
			<Card size="xl" class="!p-6">
				<Heading tag="h3" class="text-lg font-semibold mb-4">
					{$_('extensions.public_dashboard.latest_users.title')}
				</Heading>
				<div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
					{#each latestUsers as user}
						<div class="flex flex-col items-center space-y-2">
							<Avatar 
								src={`https://api.dicebear.com/9.x/glass/svg?seed=${user.name || user.id}`}
								class="w-14 h-14 ring-2 ring-gray-200 hover:ring-gray-300 transition-all duration-200"
								alt={user.name || user.id}
							/>
							<span class="text-xs text-gray-600 text-center truncate w-full" title={user.name || user.id}>
								{user.name || user.id.substring(0, 8)}
							</span>
						</div>
					{/each}
				</div>
			</Card>
		{/if}

		<!-- Latest Organizations Section -->
		{#if latestOrgs.length > 0}
			<Card size="xl" class="!p-6">
				<Heading tag="h3" class="text-lg font-semibold mb-4">Latest Organizations</Heading>
				<div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
					{#each latestOrgs as org}
						<div class="flex flex-col items-center space-y-2">
							<div class="w-14 h-14 rounded-full bg-purple-100 ring-2 ring-gray-200 hover:ring-gray-300 transition-all duration-200 flex items-center justify-center">
								<span class="text-purple-600 font-bold text-lg">{(org.name || '?')[0].toUpperCase()}</span>
							</div>
							<span class="text-xs text-gray-600 text-center truncate w-full" title={org.name || org.id}>
								{org.name || org.id?.substring(0, 8)}
							</span>
						</div>
					{/each}
				</div>
			</Card>
		{/if}

		<!-- Codex List -->
		{#if codexes.length > 0}
			<Card size="xl" class="!p-6">
				<Heading tag="h3" class="text-xl font-semibold mb-1">Codexes</Heading>
				<p class="text-sm text-gray-500 mb-4">
					Codexes are smart social contracts — auditable Python packages that define the rules, governance, and logic of this realm.
					Each codex is open-source and verifiable via its SHA-256 checksum.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{#each codexes as codex}
						{@const codexLink = codex.url || `https://pypi.org/project/${codex.name}/`}
						{@const createdDate = codex.timestamp_created ? new Date(codex.timestamp_created.replace(' ', 'T')) : null}
						<div class="rounded-lg border border-gray-200 p-4 hover:border-indigo-200 transition-colors">
							<div class="flex items-start gap-3">
								<div class="flex-shrink-0 w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center">
									<span class="text-indigo-600 font-bold text-lg">{(codex.name || '?')[0].toUpperCase()}</span>
								</div>
								<div class="flex-1 min-w-0">
									<p class="text-base font-semibold text-gray-900 truncate">{codex.name}</p>
									{#if createdDate && !isNaN(createdDate.getTime())}
										<p class="text-xs text-gray-400 mt-0.5">
											Enacted {createdDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
										</p>
									{/if}
								</div>
							</div>
							{#if codex.checksum}
								<div class="mt-3 flex items-center gap-2 bg-gray-50 rounded-md px-3 py-1.5">
									<svg class="w-3.5 h-3.5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
									<span class="text-xs text-gray-500 font-mono truncate" title={codex.checksum}>
										SHA-256: {codex.checksum.substring(0, 16)}…
									</span>
								</div>
							{/if}
							<div class="mt-3 flex items-center gap-2">
								<a
									href={codexLink}
									target="_blank"
									rel="noopener"
									class="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-800 no-underline"
								>
									<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
									View source on PyPI
								</a>
							</div>
						</div>
					{/each}
				</div>
			</Card>
		{/if}

		<ActivityList />
	{/if}
</div>
