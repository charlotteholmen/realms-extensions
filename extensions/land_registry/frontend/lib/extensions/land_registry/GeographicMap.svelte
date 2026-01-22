<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import { goto } from '$app/navigation';
  
  export let lands = [];
  
  let mapContainer;
  let map = null;
  let L = null;
  let h3 = null;
  let landLayer = null;
  let circleLayer = null;
  let mapInitialized = false;
  
  const LAND_COLORS = {
    'residential': '#4ade80',
    'agricultural': '#fbbf24',
    'industrial': '#6b7280',
    'commercial': '#3b82f6',
    'unassigned': '#e5e7eb'
  };
  
  async function initializeMap() {
    if (mapInitialized || !mapContainer || typeof window === 'undefined') return;
    mapInitialized = true;
    
    // Dynamically import Leaflet and h3-js
    const [leaflet, h3js] = await Promise.all([
      import('leaflet'),
      import('h3-js')
    ]);
    
    L = leaflet.default;
    h3 = h3js;
    
    // Import Leaflet CSS if not already present
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Initialize map with world view
    map = L.map(mapContainer).setView([20, 0], 2);
    
    // Add tile layer - using OpenStreetMap which has better CSP compatibility
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);
    
    // Create layers for land parcels
    circleLayer = L.layerGroup().addTo(map);  // Large circles for zoomed-out view
    landLayer = L.layerGroup().addTo(map);     // H3 hexagons for detailed view
    
    // Handle zoom to show/hide appropriate layers
    map.on('zoomend', updateLayerVisibility);
    updateLayerVisibility();
    
    // Render lands
    renderLands();
  }
  
  onMount(async () => {
    await tick();
    if (mapContainer) {
      initializeMap();
    }
  });
  
  // Reactive: Initialize map when container becomes available
  $: if (mapContainer && !mapInitialized) {
    initializeMap();
  }
  
  onDestroy(() => {
    if (map) {
      map.remove();
      map = null;
    }
  });
  
  function updateLayerVisibility() {
    if (!map || !circleLayer || !landLayer) return;
    const zoom = map.getZoom();
    // Show circles at low zoom, hexagons at high zoom
    if (zoom < 10) {
      circleLayer.addTo(map);
      map.removeLayer(landLayer);
    } else {
      landLayer.addTo(map);
      map.removeLayer(circleLayer);
    }
  }
  
  function buildPopupContent(land, color) {
    const priceInfo = land.for_sale && land.price_realm_tokens 
      ? `<br><span style="color: #16a34a; font-weight: 600;">💰 ${land.price_realm_tokens} REALM</span>` 
      : '';
    const ownerInfo = land.owner_user_id 
      ? `<br>Owner: User ${land.owner_user_id}` 
      : land.owner_organization_id 
        ? `<br>Owner: Org ${land.owner_organization_id}` 
        : '<br><span style="color: #2563eb;">Available for purchase</span>';
    
    return `
      <div style="padding: 4px;">
        <strong>${land.id}</strong><br>
        Type: <span style="color: ${color}">${land.land_type}</span>
        ${ownerInfo}
        ${priceInfo}
        ${land.h3_index ? `<br><span style="font-size: 10px; color: #9ca3af;">H3: ${land.h3_index}</span>` : ''}
      </div>
    `;
  }
  
  function renderLands() {
    console.log('=== renderLands called ===');
    
    if (!L || !map || !landLayer || !circleLayer) {
      console.log('Missing dependencies, returning early');
      return;
    }
    
    landLayer.clearLayers();
    circleLayer.clearLayers();
    
    const validLands = lands.filter(land => land.h3_index || (land.latitude && land.longitude));
    console.log('Valid lands count:', validLands.length);
    
    validLands.forEach(land => {
      const color = LAND_COLORS[land.land_type] || LAND_COLORS.unassigned;
      const isOwned = land.owner_user_id || land.owner_organization_id;
      const popupContent = buildPopupContent(land, color);
      
      // Get coordinates
      let lat, lng;
      if (land.latitude && land.longitude) {
        lat = land.latitude;
        lng = land.longitude;
      } else if (h3 && land.h3_index && !land.h3_index.includes('manual')) {
        try {
          const center = h3.cellToLatLng(land.h3_index);
          lat = center[0];
          lng = center[1];
        } catch (e) {
          return; // Skip invalid H3
        }
      } else {
        return; // No valid coordinates
      }
      
      // Large circle marker for zoomed-out view (like demo.realmsgos.org)
      const circle = L.circleMarker([lat, lng], {
        radius: 18,
        fillColor: color,
        color: isOwned ? '#1f2937' : '#22c55e',  // Green border like demo
        weight: 3,
        opacity: 1,
        fillOpacity: 0.85
      });
      circle.bindPopup(popupContent);
      circle.on('click', () => goto(`/extensions/land_registry/land/${land.id}`));
      circle.addTo(circleLayer);
      
      // H3 hexagon for detailed view
      if (h3 && land.h3_index && !land.h3_index.includes('manual')) {
        try {
          const boundary = h3.cellToBoundary(land.h3_index);
          const latLngs = boundary.map(coord => [coord[0], coord[1]]);
          
          const polygon = L.polygon(latLngs, {
            color: isOwned ? '#1f2937' : '#9ca3af',
            fillColor: color,
            fillOpacity: isOwned ? 0.7 : 0.5,
            weight: isOwned ? 2 : 1
          });
          polygon.bindPopup(popupContent);
          polygon.on('click', () => goto(`/extensions/land_registry/land/${land.id}`));
          polygon.addTo(landLayer);
        } catch (e) {
          console.warn('Invalid H3 index for land:', land.id, land.h3_index);
        }
      }
    });
    
    // Fit bounds if we have lands with coordinates
    if (validLands.length > 0) {
      const coordLands = validLands.filter(l => l.latitude && l.longitude);
      if (coordLands.length > 0) {
        const bounds = L.latLngBounds(coordLands.map(l => [l.latitude, l.longitude]));
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
      }
    }
    
    updateLayerVisibility();
  }
  
  // Re-render when lands change
  $: if (map && lands && lands.length > 0) {
    console.log('Reactive: lands changed, calling renderLands');
    renderLands();
  }
</script>

<div class="geographic-map">
  <div class="mb-4">
    <h3 class="text-lg font-semibold mb-2">Land Registry Map</h3>
    <p class="text-sm text-gray-600 mb-2">
      Land parcels displayed as H3 hexagonal zones
    </p>
    <div class="flex flex-wrap gap-4 text-sm">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded" style="background-color: {LAND_COLORS.residential}"></div>
        <span>Residential</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded" style="background-color: {LAND_COLORS.agricultural}"></div>
        <span>Agricultural</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded" style="background-color: {LAND_COLORS.industrial}"></div>
        <span>Industrial</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded" style="background-color: {LAND_COLORS.commercial}"></div>
        <span>Commercial</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded" style="background-color: {LAND_COLORS.unassigned}"></div>
        <span>Unassigned</span>
      </div>
    </div>
  </div>
  
  <div 
    bind:this={mapContainer} 
    class="w-full rounded-lg border border-gray-300"
    style="height: 500px; min-height: 400px;"
  ></div>
  
  <div class="mt-3 flex items-center gap-4 text-sm text-gray-600">
    <div class="flex items-center gap-1">
      <span class="inline-block w-3 h-3 rounded border-2 border-gray-800"></span>
      <span>Owned</span>
    </div>
    <div class="flex items-center gap-1">
      <span class="inline-block w-3 h-3 rounded border border-gray-400"></span>
      <span>Available</span>
    </div>
  </div>
</div>

<style>
  :global(.leaflet-container) {
    font-family: inherit;
  }
</style>
