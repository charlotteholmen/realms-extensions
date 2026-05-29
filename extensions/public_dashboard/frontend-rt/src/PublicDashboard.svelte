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
		const backend = ctx.backend;

		const [statusResp, realmResp, zonesResp, latestResp] = await Promise.all([
			backend.status().catch((e: any) => { console.warn('status() failed:', e); return null; }),
			backend.get_objects_paginated('Realm', 0, 1, 'asc').catch((e: any) => { console.warn('Realm fetch failed:', e); return null; }),
			backend.get_objects_paginated('Zone', 0, 200, 'asc').catch((e: any) => { console.warn('Zone fetch failed:', e); return null; }),
			backend.get_objects_paginated('User', 0, 50, 'desc').catch((e: any) => { console.warn('User fetch failed:', e); return null; }),
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

		loading = false;
	}

	const INFLUENCE_RINGS = 3;

	async function loadScript(url: string, globalName: string): Promise<any> {
		if ((window as any)[globalName]) return (window as any)[globalName];
		const resp = await fetch(url);
		const code = await resp.text();
		(0, eval)(code);
		return (window as any)[globalName];
	}

	async function initMap() {
		if (!mapContainer || zones.length === 0) return;

		if (!document.querySelector('link[href*="leaflet"]')) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
			document.head.appendChild(link);
			await new Promise((r) => { link.onload = r; link.onerror = r; });
		}

		const L = await loadScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', 'L');
		const h3 = await loadScript('https://unpkg.com/h3-js@4.2.1/dist/h3-js.umd.js', 'h3');
		const { cellToBoundary, gridDisk } = h3;

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
					{ label: 'Users', value: Number(statusData.users_count), color: '#3b82f6', icon: 'users' },
					{ label: 'Organizations', value: Number(statusData.organizations_count), color: '#8b5cf6', icon: 'org' },
					{ label: 'Proposals', value: Number(statusData.proposals_count), color: '#f59e0b', icon: 'proposal' },
					{ label: 'Votes', value: Number(statusData.votes_count), color: '#10b981', icon: 'vote' },
					{ label: 'Transfers', value: Number(statusData.transfers_count), color: '#f43f5e', icon: 'transfer' },
					{ label: 'Zones', value: zones.length, color: '#06b6d4', icon: 'zone' },
				]
			: [],
	);

	const STAGE_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
		alpha: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
		beta: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
		production: { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500' },
		deprecation: { bg: 'bg-orange-50', text: 'text-orange-700', dot: 'bg-orange-500' },
		terminated: { bg: 'bg-gray-100', text: 'text-gray-600', dot: 'bg-gray-400' },
	};
	const STAGE_LABELS: Record<string, string> = {
		alpha: 'Alpha',
		beta: 'Beta',
		production: 'Live',
		deprecation: 'Winding Down',
		terminated: 'Archived',
	};

	let realmStage = $derived(realmData?.status || 'alpha');
	let stageStyle = $derived(STAGE_COLORS[realmStage] || STAGE_COLORS.alpha);
	let stageLabel = $derived(STAGE_LABELS[realmStage] || realmStage);

	let kpiVisible = $state(false);
	let animatedValues: number[] = $state([]);

	function animateCountUp() {
		if (kpiCards.length === 0) return;
		animatedValues = kpiCards.map(() => 0);
		kpiVisible = true;
		const duration = 1200;
		const fps = 60;
		const totalFrames = Math.round(duration / (1000 / fps));
		let frame = 0;

		function step() {
			frame++;
			const progress = frame / totalFrames;
			const ease = 1 - Math.pow(1 - progress, 3);
			animatedValues = kpiCards.map((card) => Math.round(card.value * ease));
			if (frame < totalFrames) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}

	let showOverlay = $state(false);

	function fullBleed(node: HTMLElement) {
		function adjust() {
			node.style.marginLeft = '';
			node.style.marginRight = '';
			node.style.width = '';
			const rect = node.getBoundingClientRect();
			const left = rect.left;
			const right = window.innerWidth - rect.right;
			node.style.marginLeft = `-${left}px`;
			node.style.marginRight = `-${right}px`;
			node.style.width = `100vw`;
		}
		adjust();
		window.addEventListener('resize', adjust);
		return { destroy() { window.removeEventListener('resize', adjust); } };
	}

	onMount(async () => {
		await loadData();
		await tick();
		await initMap();
		setTimeout(() => { showOverlay = true; }, 2000);
		setTimeout(() => { animateCountUp(); }, 2800);
	});
</script>


<div>
	{#if loading}
		<div class="flex items-center justify-center py-12 mt-20">
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
		<!-- Hero: full-viewport background image with content inside -->
		{#if realmData}
			<div
				use:fullBleed
				style="height: 105vh; background: url('/custom/background.png') center/cover no-repeat; position: relative; display: flex; flex-direction: column; margin-top: -6rem; padding-top: 6rem;"
			>
				<!-- Gradient overlay that fades in -->
				<div
					style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 15%, rgba(255,255,255,0.4) 28%, transparent 40%); opacity: {showOverlay ? 1 : 0}; transition: opacity 3s cubic-bezier(0.25, 0.1, 0.25, 1); pointer-events: none;"
				></div>

				<!-- Top spacer: pushes content to the bottom -->
				<div style="flex: 1;"></div>

				<!-- Realm identity: fades in + slides up after 2s -->
				<div
					style="position: relative; padding: 0 24px; opacity: {showOverlay ? 1 : 0}; transform: translateY({showOverlay ? '0px' : '30px'}); transition: opacity 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.5s, transform 3s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;"
				>
					<div style="max-width: 700px; margin: 0 auto;">
						<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
							<img
								src="/custom/logo.png"
								alt={realmData.name || 'Realm'}
								style="width: 36px; height: 36px; object-fit: contain;"
								onerror={(e) => { e.currentTarget.src = '/images/logo_sphere_only.svg'; }}
							/>
							<h1 style="font-size: 2rem; font-weight: 700; color: #111827; margin: 0;">{realmData.name || 'Realm'}</h1>
							<span class="{stageStyle.bg} {stageStyle.text} inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold">
								<span class="{stageStyle.dot} w-1.5 h-1.5 rounded-full inline-block"></span>
								{stageLabel}
							</span>
						</div>
						{#if realmData.welcome_message}
							<p style="font-size: 0.95rem; color: #6b7280; font-style: italic; margin: 0;">
								{realmData.welcome_message}
							</p>
						{/if}
					</div>
				</div>

				<!-- Scroll indicator: animated chevron -->
				<div
					style="position: relative; display: flex; justify-content: center; padding: 20px 0; opacity: {showOverlay ? 1 : 0}; transition: opacity 1.5s ease 0.5s;"
				>
					<svg style="width: 28px; height: 28px; animation: bounceDown 2s ease-in-out infinite;" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M6 9l6 6 6-6" />
					</svg>
				</div>

				<!-- Bottom breathing room -->
				<div style="height: 24px; flex-shrink: 0;"></div>
			</div>

		<style>
			@keyframes bounceDown {
				0%, 100% { transform: translateY(0); }
				50% { transform: translateY(8px); }
			}
			.join-btn {
				display: inline-flex;
				align-items: center;
				gap: 10px;
				padding: 16px 48px;
				border-radius: 12px;
				background: #111827;
				color: #fff;
				font-size: 1.15rem;
				font-weight: 600;
				text-decoration: none;
				box-shadow: 0 4px 14px rgba(0,0,0,0.15);
				transition: background 0.2s, transform 0.2s;
				letter-spacing: 0.02em;
			}
			.join-btn:hover {
				background: #000;
				transform: translateY(-1px);
			}
			.kpi-card {
				background: #fff;
				border-radius: 12px;
				padding: 16px 18px;
				box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
				transition: box-shadow 0.2s ease, transform 0.2s ease;
			}
			.kpi-card:hover {
				box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06);
				transform: translateY(-2px);
			}
			.kpi-header {
				display: flex;
				align-items: center;
				gap: 8px;
				margin-bottom: 8px;
			}
			.kpi-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-shrink: 0;
			}
			.kpi-label {
				font-size: 0.8rem;
				font-weight: 500;
				color: #6b7280;
				letter-spacing: 0.01em;
			}
			.kpi-value {
				font-size: 1.85rem;
				font-weight: 700;
				color: #111827;
				margin: 0;
				line-height: 1.1;
				font-variant-numeric: tabular-nums;
			}
		</style>

			<!-- Manifesto -->
			{#if realmData.manifesto}
				<div style="max-width: 700px; margin: 0 auto; padding: 2.5rem 24px 0;">
					<p style="font-size: 1.1rem; color: #374151; line-height: 1.8; text-align: center;">
						{realmData.manifesto}
					</p>
				</div>
			{/if}

			<!-- Join button -->
			<div style="display: flex; justify-content: center; padding: 2.5rem 0;">
				<a
					href="/join"
					class="join-btn"
				>
					Join this Realm
					<svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</a>
			</div>

			<!-- KPI stats -->
			{#if kpiCards.length > 0}
				<div class="px-4 pb-6">
					<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
						{#each kpiCards as card, i}
							<div
								class="kpi-card"
								style="border-left: 3px solid {card.color}; opacity: {kpiVisible ? 1 : 0}; transform: translateY({kpiVisible ? '0px' : '16px'}); transition: opacity 0.5s ease {i * 0.08}s, transform 0.5s ease {i * 0.08}s;"
							>
								<div class="kpi-header">
									<div class="kpi-icon" style="color: {card.color};">
										{#if card.icon === 'users'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
										{:else if card.icon === 'org'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/><path d="M12 12v3"/><circle cx="12" cy="12" r="1"/></svg>
										{:else if card.icon === 'proposal'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
										{:else if card.icon === 'vote'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
										{:else if card.icon === 'transfer'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
										{:else if card.icon === 'zone'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
										{/if}
									</div>
									<span class="kpi-label">{card.label}</span>
								</div>
								<p class="kpi-value">
									{(animatedValues[i] ?? 0).toLocaleString()}
								</p>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/if}

		<div class="space-y-4 px-4 pb-8">
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
				<div class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));">
					{#each latestUsers as user}
						<div class="flex flex-col items-center">
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
		</div>
	{/if}
</div>
