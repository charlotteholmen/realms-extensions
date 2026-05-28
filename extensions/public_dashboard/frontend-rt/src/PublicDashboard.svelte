<script lang="ts">
	import { onMount, tick } from 'svelte';

	let { ctx }: { ctx: any } = $props();

	let statusData: any = $state(null);
	let realmData: any = $state(null);
	let zones: any[] = $state([]);
	let latestUsers: any[] = $state([]);
	let loading = $state(true);
	let mapContainer: HTMLDivElement | undefined = $state();

	function parseEntities(response: any): any[] {
		if (response?.success && response?.data?.objectsListPaginated) {
			return (response.data.objectsListPaginated.objects || []).map((s: string) => JSON.parse(s));
		}
		return [];
	}

	async function loadData() {
		loading = true;
		try {
			const backend = ctx.backend;
			const [statusResp, realmResp, zonesResp, latestResp] = await Promise.all([
				backend.status(),
				backend.get_objects_paginated('Realm', 0, 1, 'asc'),
				backend.get_objects_paginated('Zone', 0, 200, 'asc'),
				backend.get_objects_paginated('User', 0, 50, 'desc'),
			]);

			if (statusResp?.success && statusResp?.data?.status) {
				statusData = statusResp.data.status;
			}

			const realms = parseEntities(realmResp);
			if (realms.length > 0) {
				realmData = realms[0];
			}

			const allZones = parseEntities(zonesResp);
			zones = allZones.filter((z: any) => z.h3_index || (z.latitude && z.longitude));
			latestUsers = parseEntities(latestResp);
		} catch (e) {
			console.error('Error loading dashboard data:', e);
		}
		loading = false;
	}

	const INFLUENCE_RINGS = 3;

	async function initMap() {
		if (!mapContainer || zones.length === 0) return;

		const leafletModule = await import(/* @vite-ignore */ 'https://esm.sh/leaflet@1.9.4');
		const L = leafletModule.default || leafletModule;
		const h3Module = await import(/* @vite-ignore */ 'https://esm.sh/h3-js@4.2.1');
		const cellToBoundary = h3Module.cellToBoundary;
		const gridDisk = h3Module.gridDisk;

		const map = L.map(mapContainer).setView([20, 0], 2);

		const cartoLayer = L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
			{
				attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
				subdomains: 'abcd',
				maxZoom: 19,
			},
		);
		cartoLayer.on('tileerror', function () {
			if (!(map as any)._fallbackTiles) {
				(map as any)._fallbackTiles = true;
				map.removeLayer(cartoLayer);
				L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
					maxZoom: 19,
				}).addTo(map);
			}
		});
		cartoLayer.addTo(map);

		const allLatLngs: [number, number][] = [];
		const renderedHexes = new Set<string>();

		for (const zone of zones) {
			if (zone.h3_index) {
				try {
					const disk = gridDisk(zone.h3_index, INFLUENCE_RINGS);
					for (const hexIndex of disk) {
						if (renderedHexes.has(hexIndex)) continue;
						renderedHexes.add(hexIndex);

						const boundary = cellToBoundary(hexIndex);
						const latLngs: [number, number][] = boundary.map(
							(c: number[]) => [c[0], c[1]] as [number, number],
						);

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
							latLngs.forEach((c) => allLatLngs.push(c));
						}
					}
				} catch {
					if (zone.latitude && zone.longitude) {
						allLatLngs.push([Number(zone.latitude), Number(zone.longitude)]);
					}
				}
			}

			if (zone.latitude && zone.longitude) {
				const lat = Number(zone.latitude);
				const lng = Number(zone.longitude);
				L.circleMarker([lat, lng], {
					radius: 14,
					fillColor: '#6366f1',
					color: '#6366f1',
					weight: 0,
					fillOpacity: 0.25,
				}).addTo(map);
				const marker = L.circleMarker([lat, lng], {
					radius: 8,
					fillColor: '#6366f1',
					color: '#fff',
					weight: 2,
					fillOpacity: 0.9,
				}).addTo(map);

				const name = zone.name || zone.h3_index || '';
				const desc = zone.description || '';
				marker.bindPopup(`<strong>${name}</strong>${desc ? '<br/>' + desc : ''}`);

				if (!allLatLngs.some((c) => c[0] === lat && c[1] === lng)) {
					allLatLngs.push([lat, lng]);
				}
			}
		}

		if (allLatLngs.length > 0) {
			map.fitBounds(L.latLngBounds(allLatLngs), { padding: [40, 40], maxZoom: 5 });
		}
	}

	let kpiCards = $derived(
		statusData
			? [
					{ label: 'Users', value: Number(statusData.users_count), color: 'blue' },
					{
						label: 'Organizations',
						value: Number(statusData.organizations_count),
						color: 'purple',
					},
					{ label: 'Proposals', value: Number(statusData.proposals_count), color: 'amber' },
					{ label: 'Votes', value: Number(statusData.votes_count), color: 'green' },
					{ label: 'Transfers', value: Number(statusData.transfers_count), color: 'rose' },
					{ label: 'Licenses', value: Number(statusData.licenses_count), color: 'cyan' },
				]
			: [],
	);

	onMount(async () => {
		await loadData();
		await tick();
		await initMap();
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
		crossorigin=""
	/>
</svelte:head>

<div class="mt-px pt-20 space-y-4">
	{#if loading}
		<div class="flex items-center justify-center py-12">
			<svg
				class="animate-spin h-8 w-8 text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
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
			<span class="ml-3 text-gray-500">Loading dashboard...</span>
		</div>
	{:else}
		<!-- Realm Hero Section -->
		{#if realmData}
			{@const bgImage = '/images/background.png'}
			<div
				class="rounded-lg border border-gray-200 shadow-md relative"
				style="background: linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('{bgImage}') center/cover no-repeat;"
			>
				<div class="p-8">
					<div class="flex items-center gap-3 mb-3">
						<img
							src="/images/logo.png"
							alt={realmData.name || 'Realm'}
							class="w-12 h-12 object-contain"
							onerror={(e) => { e.currentTarget.src = '/images/logo_sphere_only.svg'; }}
						/>
						<h1 class="text-3xl font-bold text-gray-900">{realmData.name || 'Realm'}</h1>
					</div>
					{#if realmData.description}
						<p class="text-base text-gray-700 leading-relaxed mb-2 max-w-3xl">
							{realmData.description}
						</p>
					{/if}
					{#if realmData.welcome_message}
						<p class="text-sm text-gray-600 italic mb-6 max-w-3xl">
							{realmData.welcome_message}
						</p>
					{/if}

					{#if kpiCards.length > 0}
						<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
							{#each kpiCards as card}
								<div
									class="rounded-lg bg-white/60 backdrop-blur-sm border border-white/80 p-3"
								>
									<p class="text-xs text-gray-500 font-medium">{card.label}</p>
									<p class="text-2xl font-bold text-gray-900">
										{card.value.toLocaleString()}
									</p>
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
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</a>
				</div>
			</div>
		{/if}

		<!-- Zones Map -->
		{#if zones.length > 0}
			<div class="rounded-lg border border-gray-200 shadow-md bg-white p-6">
				<h3 class="text-xl font-semibold text-gray-900 mb-1">Realm Zones</h3>
				<p class="text-sm text-gray-500 mb-4">
					{zones.length} zone{zones.length !== 1 ? 's' : ''} in this realm
				</p>
				<div
					bind:this={mapContainer}
					style="width: 100%; height: 320px; position: relative; z-index: 0;"
					class="rounded-lg overflow-hidden border border-gray-200"
				></div>
			</div>
		{/if}

		<!-- Latest Users -->
		{#if latestUsers.length > 0}
			<div class="rounded-lg border border-gray-200 shadow-md bg-white p-6">
				<h3 class="text-lg font-semibold text-gray-900 mb-4">Latest Members</h3>
				<div class="flex flex-wrap gap-4">
					{#each latestUsers as user}
						<div class="flex flex-col items-center" style="width: 72px;">
							<img
								src={`https://api.dicebear.com/9.x/glass/svg?seed=${user.name || user.id}`}
								alt={user.name || user.id}
								width="48"
								height="48"
								style="width: 48px; height: 48px; border-radius: 9999px;"
								class="ring-2 ring-gray-200 hover:ring-gray-300 transition-all duration-200"
							/>
							<span
								class="text-xs text-gray-600 text-center truncate w-full mt-1"
								title={user.name || user.id}
							>
								{user.name || user.id.substring(0, 8)}
							</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{/if}
</div>
