<script lang="ts">
	import { onMount, tick } from 'svelte';

	let { ctx }: { ctx: any } = $props();

	const EXTENSION_NAME = 'zone_selector';
	const H3_RESOLUTION = 6;

	let activeTab = $state<'map' | 'list'>('map');
	let zones: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let success = $state('');

	// Geolocation
	let geoLoading = $state(false);
	let geoError = $state('');
	let currentLocation: { lat: number; lng: number } | null = $state(null);

	// Map
	let mapContainer: HTMLDivElement | undefined = $state();
	let mapInstance: any = $state(null);
	let L: any = null;
	let h3: any = null;
	let markersLayer: any = null;
	let hexLayer: any = null;

	let userId = $derived(ctx.principal || null);

	async function callExt(fn: string, args: string = '{}') {
		const raw = await ctx.backend.extension_sync_call(
			JSON.stringify({ extension_name: EXTENSION_NAME, function_name: fn, args }),
		);
		return JSON.parse(raw);
	}

	async function loadMyZones() {
		if (!userId) return;
		loading = true;
		error = '';
		try {
			const res = await callExt('get_my_zones', JSON.stringify({ user_id: userId }));
			if (res?.success) {
				zones = res.data || [];
			} else {
				zones = res?.data ?? (Array.isArray(res) ? res : []);
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function addZoneAtLocation(lat: number, lng: number, name: string = 'My Zone') {
		if (!userId) { error = 'You must be logged in to add zones'; return; }
		loading = true; error = ''; success = '';
		try {
			const res = await callExt('add_zone', JSON.stringify({
				user_id: userId,
				latitude: lat,
				longitude: lng,
				name,
				description: `Zone of influence at ${lat.toFixed(4)}, ${lng.toFixed(4)}`,
				resolution: H3_RESOLUTION,
			}));
			if (res?.success) {
				success = 'Zone added successfully!';
				await loadMyZones();
			} else { error = res?.error || 'Failed to add zone'; }
		} catch (e: any) { error = e?.message || String(e); }
		finally { loading = false; }
	}

	async function removeZone(zoneId: string) {
		if (!userId) return;
		if (!confirm('Are you sure you want to remove this zone?')) return;
		loading = true; error = ''; success = '';
		try {
			const res = await callExt('remove_zone', JSON.stringify({ user_id: userId, zone_id: zoneId }));
			if (res?.success) {
				success = 'Zone removed successfully!';
				await loadMyZones();
			} else { error = res?.error || 'Failed to remove zone'; }
		} catch (e: any) { error = e?.message || String(e); }
		finally { loading = false; }
	}

	function requestGeolocation() {
		if (!navigator.geolocation) { geoError = 'Geolocation is not supported by your browser'; return; }
		geoLoading = true;
		geoError = '';
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				currentLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
				geoLoading = false;
				if (confirm(`Add your current location as a zone of influence?\n\nLatitude: ${currentLocation.lat.toFixed(4)}\nLongitude: ${currentLocation.lng.toFixed(4)}`)) {
					await addZoneAtLocation(currentLocation.lat, currentLocation.lng, 'My Location');
				}
			},
			(err) => {
				geoLoading = false;
				if (err.code === err.PERMISSION_DENIED) geoError = 'Location permission denied. You can still select zones manually on the map.';
				else if (err.code === err.POSITION_UNAVAILABLE) geoError = 'Location information unavailable.';
				else if (err.code === err.TIMEOUT) geoError = 'Location request timed out.';
				else geoError = 'An error occurred while getting your location.';
			},
			{ enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
		);
	}

	// ── Map ──

	async function initMap() {
		if (!mapContainer || mapInstance) return;

		L = await import(/* @vite-ignore */ 'https://esm.sh/leaflet@1.9.4');
		h3 = await import(/* @vite-ignore */ 'https://esm.sh/h3-js@4.2.1');

		if (!document.querySelector('link[href*="leaflet"]')) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
			document.head.appendChild(link);
			await new Promise((r) => setTimeout(r, 150));
		}

		mapInstance = L.map(mapContainer).setView([20, 0], 2);

		const cartoLayer = L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
			{ attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>', subdomains: 'abcd', maxZoom: 19 },
		);
		cartoLayer.on('tileerror', () => {
			if (!(mapInstance as any)._fb) {
				(mapInstance as any)._fb = true;
				mapInstance.removeLayer(cartoLayer);
				L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
					maxZoom: 19,
				}).addTo(mapInstance);
			}
		});
		cartoLayer.addTo(mapInstance);

		markersLayer = L.layerGroup().addTo(mapInstance);
		hexLayer = L.layerGroup().addTo(mapInstance);

		mapInstance.on('click', handleMapClick);
		renderZones();
	}

	function handleMapClick(e: any) {
		const { lat, lng } = e.latlng;
		if (h3) {
			hexLayer.clearLayers();
			const hexIndex = h3.latLngToCell(lat, lng, H3_RESOLUTION);
			const boundary = h3.cellToBoundary(hexIndex);
			const latLngs = boundary.map((c: number[]) => [c[0], c[1]]);
			L.polygon(latLngs, { color: '#3B82F6', fillColor: '#3B82F6', fillOpacity: 0.3, weight: 2, dashArray: '5, 5' }).addTo(hexLayer);
			renderZones();
		}
		const name = prompt('Enter a name for this zone:', 'My Zone');
		if (name !== null) addZoneAtLocation(lat, lng, name);
	}

	function renderZones() {
		if (!L || !mapInstance || !markersLayer) return;
		markersLayer.clearLayers();

		for (const zone of zones) {
			if (!zone.latitude || !zone.longitude) continue;
			const isMyZone = zone.user_id === userId;
			const zoneColor = isMyZone ? '#10B981' : '#6B7280';

			if (h3 && zone.h3_index && !zone.h3_index.startsWith('manual_')) {
				try {
					const boundary = h3.cellToBoundary(zone.h3_index);
					const latLngs = boundary.map((c: number[]) => [c[0], c[1]]);
					L.polygon(latLngs, {
						color: zoneColor, fillColor: zoneColor,
						fillOpacity: isMyZone ? 0.4 : 0.2,
						weight: isMyZone ? 2 : 1,
					}).addTo(markersLayer).bindPopup(`<b>${zone.name}</b><br>H3: ${zone.h3_index}`);
				} catch {}
			}

			L.circleMarker([zone.latitude, zone.longitude], {
				radius: 8, fillColor: zoneColor, color: '#fff', weight: 2, opacity: 1, fillOpacity: 0.8,
			}).addTo(markersLayer).bindPopup(
				`<div class="text-sm"><b>${zone.name}</b><br><span class="text-gray-500">${zone.latitude.toFixed(4)}, ${zone.longitude.toFixed(4)}</span>${zone.h3_index ? `<br><span class="text-xs font-mono">${zone.h3_index}</span>` : ''}</div>`,
			);
		}

		const valid = zones.filter((z: any) => z.latitude && z.longitude);
		if (valid.length > 0) {
			mapInstance.fitBounds(L.latLngBounds(valid.map((z: any) => [z.latitude, z.longitude])), { padding: [50, 50], maxZoom: 10 });
		}
	}

	$effect(() => {
		if (activeTab === 'map' && zones.length >= 0 && mapInstance) {
			renderZones();
		}
	});

	onMount(async () => {
		await loadMyZones();
		await tick();
		if (mapContainer) await initMap();
	});
</script>

<div class="max-w-3xl mx-auto p-4">
	<!-- Header -->
	<div class="mb-6">
		<h2 class="text-2xl font-bold text-gray-900">Zones of Influence</h2>
		<p class="text-gray-600 text-sm mt-1">Set your zones of influence to appear on the realm map</p>
	</div>

	{#if !userId}
		<div class="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg mb-4 text-sm">
			Please log in to manage your zones of influence
		</div>
	{:else}
		<!-- Geolocation -->
		<div class="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
			<h3 class="text-base font-semibold mb-1 text-gray-800">Quick Add</h3>
			<p class="text-xs text-gray-500 mb-3">Use your device's location to quickly add a zone (permission required)</p>
			<button
				onclick={requestGeolocation}
				disabled={geoLoading}
				class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
			>
				{#if geoLoading}
					<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
					<span>Getting location...</span>
				{:else}
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
					</svg>
					<span>Use My Location</span>
				{/if}
			</button>
			{#if geoError}
				<p class="mt-2 text-xs text-amber-600">{geoError}</p>
			{/if}
			{#if currentLocation}
				<p class="mt-2 text-xs text-green-600">Current location: {currentLocation.lat.toFixed(4)}, {currentLocation.lng.toFixed(4)}</p>
			{/if}
		</div>

		<!-- Alerts -->
		{#if error}
			<div class="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>
		{/if}
		{#if success}
			<div class="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-4 text-sm">{success}</div>
		{/if}

		<!-- Tabs -->
		<div class="border-b border-gray-200 mb-6">
			<nav class="-mb-px flex space-x-8">
				<button
					class="py-2 px-1 border-b-2 font-medium text-sm transition-colors {activeTab === 'map' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
					onclick={() => { activeTab = 'map'; tick().then(() => { if (mapContainer && !mapInstance) initMap(); else if (mapInstance) mapInstance.invalidateSize(); }); }}
				>Map Selection</button>
				<button
					class="py-2 px-1 border-b-2 font-medium text-sm transition-colors {activeTab === 'list' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
					onclick={() => activeTab = 'list'}
				>My Zones ({zones.length})</button>
			</nav>
		</div>

		<!-- Content -->
		{#if loading}
			<div class="flex items-center justify-center py-12">
				<svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
				<span class="ml-3 text-gray-500">Loading zones...</span>
			</div>

		{:else if activeTab === 'map'}
			<div>
				<p class="text-sm text-gray-500 mb-3">Click on the map to add a zone of influence at that location</p>
				<div bind:this={mapContainer} class="w-full rounded-lg border border-gray-200 relative z-0" style="height:400px;min-height:350px"></div>
				<div class="mt-3 flex items-center gap-4 text-xs text-gray-500">
					<div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded-full bg-green-500"></span><span>Your zones</span></div>
					<div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded-full bg-gray-500"></span><span>Other zones</span></div>
					<div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded border-2 border-blue-500 border-dashed"></span><span>Click preview</span></div>
				</div>
			</div>

		{:else if activeTab === 'list'}
			{#if zones.length === 0}
				<div class="text-center py-12 text-gray-500">
					<svg class="mx-auto h-12 w-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
					</svg>
					<p>You haven't added any zones yet</p>
				</div>
			{:else}
				<div class="space-y-3">
					{#each zones as zone}
						<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
							<div>
								<h4 class="font-medium text-gray-900">{zone.name}</h4>
								<p class="text-sm text-gray-500">{zone.latitude?.toFixed(4)}, {zone.longitude?.toFixed(4)}</p>
								{#if zone.h3_index}
									<p class="text-xs text-gray-400 font-mono">H3: {zone.h3_index}</p>
								{/if}
							</div>
							<button
								onclick={() => removeZone(zone.id)}
								class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
								title="Remove zone"
							>
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
								</svg>
							</button>
						</div>
					{/each}
				</div>
			{/if}
		{/if}
	{/if}
</div>
