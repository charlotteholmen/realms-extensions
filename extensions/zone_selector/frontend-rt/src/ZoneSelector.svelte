<script lang="ts">
	import { onMount, tick } from 'svelte';
	import * as L from 'leaflet';
	import * as h3 from 'h3-js';

	let { ctx }: { ctx: any } = $props();

	let zones: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');

	let mapContainer: HTMLDivElement | undefined = $state();
	let mapInstance: any = $state(null);
	let markersLayer: any = null;

	const H3_RESOLUTION = 6;
	const INFLUENCE_RINGS = 3;

	async function loadAllZones() {
		loading = true;
		error = '';
		try {
			const raw = await ctx.backend.get_zones(BigInt(H3_RESOLUTION));
			const res = typeof raw === 'string' ? JSON.parse(raw) : raw;
			if (res?.success && res.zones) {
				zones = res.zones.map((z: any) => ({
					latitude: z.center_lat,
					longitude: z.center_lng,
					name: z.location_name || 'Zone',
					h3_index: z.h3_index,
					user_count: z.user_count,
				}));
			} else {
				zones = [];
				if (res?.error) error = res.error;
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function initMap() {
		if (!mapContainer || mapInstance) return;

		if (!document.querySelector('link[href*="leaflet"]')) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
			document.head.appendChild(link);
			await new Promise((r) => setTimeout(r, 200));
		}

		mapInstance = L.map(mapContainer, { zoomControl: true }).setView([20, 0], 2);

		const cartoLayer = L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
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

		L.control.scale({ metric: true, imperial: false, position: 'bottomright' }).addTo(mapInstance);

		markersLayer = L.layerGroup().addTo(mapInstance);
		renderZones();
	}

	function renderZones() {
		if (!L || !mapInstance || !markersLayer) return;
		markersLayer.clearLayers();

		const color = '#3B82F6';

		if (h3) {
			const hexData: Record<string, { users: number; distance: number; names: string[] }> = {};

			for (const zone of zones) {
				if (!zone.latitude || !zone.longitude) continue;

				let centerHex: string;
				try {
					centerHex = h3.latLngToCell(zone.latitude, zone.longitude, H3_RESOLUTION);
				} catch {
					continue;
				}

				let influenceHexes: string[];
				try {
					influenceHexes = h3.gridDisk(centerHex, INFLUENCE_RINGS);
				} catch {
					influenceHexes = [centerHex];
				}

				for (const hexIndex of influenceHexes) {
					let distance: number;
					try {
						distance = h3.gridDistance(centerHex, hexIndex);
					} catch {
						distance = hexIndex === centerHex ? 0 : 1;
					}

					if (!hexData[hexIndex]) {
						hexData[hexIndex] = { users: 0, distance, names: [] };
					}

					if (distance < hexData[hexIndex].distance) {
						hexData[hexIndex].distance = distance;
					}
					if (distance === 0) {
						hexData[hexIndex].users += 1;
						if (zone.name) hexData[hexIndex].names.push(zone.name);
					}
				}
			}

			for (const [hexIndex, data] of Object.entries(hexData)) {
				let latLngs: number[][];
				try {
					const boundary = h3.cellToBoundary(hexIndex);
					latLngs = boundary.map((c: number[]) => [c[0], c[1]]);
				} catch {
					continue;
				}

				const isCenter = data.distance === 0;
				const distanceFactor = 1 - (data.distance / (INFLUENCE_RINGS + 1)) * 0.7;
				const opacity = isCenter
					? Math.min(0.35 + data.users * 0.1, 0.65)
					: Math.max(0.06, 0.12 + distanceFactor * 0.2);

				const hex = L.polygon(latLngs, {
					color: color,
					weight: isCenter ? 2 : (data.distance <= 1 ? 1 : 0.6),
					fillColor: color,
					fillOpacity: opacity,
					dashArray: isCenter ? null : (data.distance >= 2 ? '3, 3' : null),
				}).addTo(markersLayer);

				if (isCenter && data.names.length > 0) {
					hex.bindPopup(
						`<div style="font-family:Inter,sans-serif;min-width:140px">` +
						`<strong style="font-size:13px">${data.names.join(', ')}</strong>` +
						`</div>`,
					);
				}
			}
		}

		for (const zone of zones) {
			if (!zone.latitude || !zone.longitude) continue;

			L.circleMarker([zone.latitude, zone.longitude], {
				radius: 16,
				fillColor: color,
				color: color,
				weight: 0,
				fillOpacity: 0.2,
			}).addTo(markersLayer);

			const marker = L.circleMarker([zone.latitude, zone.longitude], {
				radius: 10,
				fillColor: color,
				color: '#FFFFFF',
				weight: 3,
				opacity: 1,
				fillOpacity: 0.9,
			}).addTo(markersLayer);

			if (zone.name) {
				marker.bindTooltip(zone.name, {
					permanent: false,
					direction: 'top',
					className: 'zone-tooltip',
				});
			}
		}

		const valid = zones.filter((z: any) => z.latitude && z.longitude);
		if (valid.length > 0) {
			mapInstance.fitBounds(
				L.latLngBounds(valid.map((z: any) => [z.latitude, z.longitude])),
				{ padding: [50, 50], maxZoom: 6 },
			);
		}
	}

	$effect(() => {
		if (zones.length >= 0 && mapInstance) {
			renderZones();
		}
	});

	onMount(async () => {
		await loadAllZones();
		await tick();
		if (mapContainer) await initMap();
	});
</script>

<div class="zone-display">
	<div class="zone-header">
		<h2>Zones</h2>
		<p>Locations where this realm is operative</p>
	</div>

	{#if loading}
		<div class="zone-loading">
			<svg class="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle class="spinner-track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="spinner-fill" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
			<span>Loading zones...</span>
		</div>
	{:else if error}
		<div class="zone-error">{error}</div>
	{:else if zones.length === 0}
		<div class="zone-empty">
			<svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
			</svg>
			<p>No zones have been set for this realm yet</p>
		</div>
	{:else}
		<div bind:this={mapContainer} class="zone-map"></div>
		<div class="zone-count">{zones.length} zone{zones.length !== 1 ? 's' : ''}</div>
	{/if}
</div>

<style>
	.zone-display {
		max-width: 900px;
		margin: 0 auto;
		padding: 1.5rem;
	}

	.zone-header {
		margin-bottom: 1.25rem;
	}

	.zone-header h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #171717;
		margin: 0 0 0.25rem;
	}

	.zone-header p {
		font-size: 0.875rem;
		color: #737373;
		margin: 0;
	}

	.zone-map {
		width: 100%;
		height: 480px;
		min-height: 350px;
		border-radius: 0.75rem;
		border: 1px solid #E5E5E5;
		position: relative;
		z-index: 0;
	}

	.zone-count {
		margin-top: 0.75rem;
		text-align: center;
		font-size: 0.8rem;
		color: #A3A3A3;
	}

	.zone-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem 0;
		gap: 0.75rem;
		color: #737373;
		font-size: 0.875rem;
	}

	.spinner {
		width: 1.5rem;
		height: 1.5rem;
		animation: spin 1s linear infinite;
	}

	.spinner-track {
		opacity: 0.25;
	}

	.spinner-fill {
		opacity: 0.75;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	.zone-error {
		background: #FEF2F2;
		border: 1px solid #FECACA;
		color: #991B1B;
		padding: 0.875rem 1rem;
		border-radius: 0.5rem;
		font-size: 0.875rem;
	}

	.zone-empty {
		text-align: center;
		padding: 4rem 0;
		color: #A3A3A3;
	}

	.empty-icon {
		width: 3rem;
		height: 3rem;
		margin: 0 auto 1rem;
		color: #D4D4D4;
	}

	.zone-empty p {
		margin: 0;
		font-size: 0.875rem;
	}

	:global(.zone-tooltip) {
		background: rgba(23, 23, 23, 0.9) !important;
		border: none !important;
		border-radius: 6px !important;
		color: white !important;
		font-family: Inter, system-ui, sans-serif !important;
		font-size: 12px !important;
		font-weight: 500 !important;
		padding: 6px 10px !important;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
	}

	:global(.zone-tooltip::before) {
		border-top-color: rgba(23, 23, 23, 0.9) !important;
	}
</style>
