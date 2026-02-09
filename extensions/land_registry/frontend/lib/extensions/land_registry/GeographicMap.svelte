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
  let zoneLayer = null;
  let mapInitialized = false;
  
  const LAND_COLORS = {
    'residential': '#4ade80',
    'agricultural': '#fbbf24',
    'industrial': '#6b7280',
    'commercial': '#3b82f6',
    'unassigned': '#e5e7eb'
  };
  
  const ZONE_COLOR = '#f59e0b';
  const INFLUENCE_RINGS = 2;
  
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
    zoneLayer = L.layerGroup().addTo(map);     // Realm H3 zones
    
    // Handle zoom to show/hide appropriate layers
    map.on('zoomend', updateLayerVisibility);
    updateLayerVisibility();
    
    // Render lands and zones
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
  
  function renderZonesFromLands() {
    if (!L || !map || !h3 || !zoneLayer) return;
    
    zoneLayer.clearLayers();
    
    // Extract unique parent_zone H3 indices from land metadata
    const parentZones = new Map(); // h3_index -> { landCount, landTypes }
    
    lands.forEach(land => {
      let parentZone = null;
      
      // Try to get parent_zone from metadata
      if (land.metadata) {
        try {
          const meta = typeof land.metadata === 'string' ? JSON.parse(land.metadata) : land.metadata;
          parentZone = meta.parent_zone;
        } catch (e) {}
      }
      
      if (!parentZone) return;
      
      if (!parentZones.has(parentZone)) {
        parentZones.set(parentZone, { landCount: 0, landTypes: {} });
      }
      const zoneData = parentZones.get(parentZone);
      zoneData.landCount++;
      zoneData.landTypes[land.land_type] = (zoneData.landTypes[land.land_type] || 0) + 1;
    });
    
    if (parentZones.size === 0) return;
    
    // Collect all hex cells with influence rings (like the realm registry map)
    const hexData = {};
    
    parentZones.forEach((zoneInfo, centerHexIndex) => {
      let influenceHexes;
      try {
        influenceHexes = h3.gridDisk(centerHexIndex, INFLUENCE_RINGS);
      } catch (e) {
        influenceHexes = h3.kRing ? h3.kRing(centerHexIndex, INFLUENCE_RINGS) : [centerHexIndex];
      }
      
      influenceHexes.forEach(hexIndex => {
        let distance;
        try {
          distance = h3.gridDistance(centerHexIndex, hexIndex);
        } catch (e) {
          distance = hexIndex === centerHexIndex ? 0 : 1;
        }
        
        if (!hexData[hexIndex]) {
          hexData[hexIndex] = { minDistance: distance, landCount: 0, landTypes: {} };
        } else {
          hexData[hexIndex].minDistance = Math.min(hexData[hexIndex].minDistance, distance);
        }
        
        if (distance === 0) {
          hexData[hexIndex].landCount += zoneInfo.landCount;
          hexData[hexIndex].landTypes = zoneInfo.landTypes;
        }
      });
    });
    
    // Render all hex cells
    const allLatLngs = [];
    Object.entries(hexData).forEach(([hexIndex, data]) => {
      try {
        const boundary = h3.cellToBoundary(hexIndex);
        const latLngs = boundary.map(coord => [coord[0], coord[1]]);
        
        const distanceOpacity = 1 - (data.minDistance / (INFLUENCE_RINGS + 1)) * 0.7;
        const baseOpacity = data.minDistance === 0 ? 0.5 : 0.25;
        const fillOpacity = baseOpacity * distanceOpacity;
        
        const polygon = L.polygon(latLngs, {
          color: ZONE_COLOR,
          fillColor: ZONE_COLOR,
          fillOpacity: fillOpacity,
          weight: data.minDistance === 0 ? 2 : 1,
          opacity: data.minDistance === 0 ? 0.8 : 0.4,
          dashArray: data.minDistance > 0 ? '4 4' : null
        });
        
        if (data.minDistance === 0) {
          const typeInfo = Object.entries(data.landTypes).map(([t, c]) => `${t}: ${c}`).join(', ');
          polygon.bindPopup(`
            <div style="padding: 4px;">
              <strong>Land Zone</strong><br>
              Parcels: ${data.landCount}<br>
              ${typeInfo ? `Types: ${typeInfo}<br>` : ''}
              <span style="font-size: 10px; color: #9ca3af;">H3: ${hexIndex}</span>
            </div>
          `);
        }
        
        polygon.addTo(zoneLayer);
        allLatLngs.push(...latLngs);
      } catch (e) {
        console.warn('Invalid H3 index for zone:', hexIndex);
      }
    });
    
    // Fit bounds to show all zones
    if (allLatLngs.length > 0) {
      const bounds = L.latLngBounds(allLatLngs);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
    }
  }
  
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
  
  function getParentZone(land) {
    if (land.metadata) {
      try {
        const meta = typeof land.metadata === 'string' ? JSON.parse(land.metadata) : land.metadata;
        return meta.parent_zone || null;
      } catch (e) {}
    }
    return null;
  }
  
  function renderLands() {
    if (!L || !map || !landLayer || !circleLayer) return;
    
    landLayer.clearLayers();
    circleLayer.clearLayers();
    
    // Also render zone hexagons from land metadata
    renderZonesFromLands();
    
    // For individual land markers, derive coordinates from h3_index or parent_zone
    const allLatLngs = [];
    
    lands.forEach(land => {
      const color = LAND_COLORS[land.land_type] || LAND_COLORS.unassigned;
      const isOwned = land.owner_user_id || land.owner_organization_id;
      const popupContent = buildPopupContent(land, color);
      
      // Get coordinates: from land directly, from h3_index, or from parent_zone
      let lat, lng;
      let h3Index = land.h3_index;
      
      if (land.latitude && land.longitude) {
        lat = land.latitude;
        lng = land.longitude;
      } else if (h3 && h3Index && !h3Index.includes('manual')) {
        try {
          const center = h3.cellToLatLng(h3Index);
          lat = center[0];
          lng = center[1];
        } catch (e) {
          h3Index = null;
        }
      }
      
      // Fallback: use parent_zone center if no direct coordinates
      if (lat == null && h3) {
        const parentZone = getParentZone(land);
        if (parentZone) {
          try {
            const center = h3.cellToLatLng(parentZone);
            lat = center[0];
            lng = center[1];
            h3Index = parentZone;
          } catch (e) {}
        }
      }
      
      if (lat == null || lng == null) return;
      
      allLatLngs.push([lat, lng]);
      
      // Large circle marker for zoomed-out view
      const circle = L.circleMarker([lat, lng], {
        radius: 18,
        fillColor: color,
        color: isOwned ? '#1f2937' : '#22c55e',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.85
      });
      circle.bindPopup(popupContent);
      circle.on('click', () => goto(`/extensions/land_registry/land/${land.id}`));
      circle.addTo(circleLayer);
      
      // H3 hexagon for detailed view
      if (h3 && h3Index && !h3Index.includes('manual')) {
        try {
          const boundary = h3.cellToBoundary(h3Index);
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
          // Skip invalid H3
        }
      }
    });
    
    // Fit bounds — zones already handle fitBounds, but if no zones, fit to lands
    if (allLatLngs.length > 0 && zoneLayer.getLayers().length === 0) {
      const bounds = L.latLngBounds(allLatLngs);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
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
