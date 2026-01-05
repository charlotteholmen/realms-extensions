<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  
  export let zones = [];
  export let userId = null;
  
  const dispatch = createEventDispatcher();
  
  let mapContainer;
  let map = null;
  let L = null;
  let h3 = null;
  let markersLayer = null;
  let hexLayer = null;
  
  const H3_RESOLUTION = 6;
  
  onMount(async () => {
    if (typeof window === 'undefined') return;
    
    // Dynamically import Leaflet and h3-js
    const [leaflet, h3js] = await Promise.all([
      import('leaflet'),
      import('h3-js')
    ]);
    
    L = leaflet.default;
    h3 = h3js;
    
    // Import Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
    
    // Wait for CSS to load
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Initialize map
    map = L.map(mapContainer).setView([20, 0], 2);
    
    // Add tile layer (minimalist style)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);
    
    // Create layers
    markersLayer = L.layerGroup().addTo(map);
    hexLayer = L.layerGroup().addTo(map);
    
    // Handle map clicks
    map.on('click', handleMapClick);
    
    // Render existing zones
    renderZones();
  });
  
  onDestroy(() => {
    if (map) {
      map.remove();
      map = null;
    }
  });
  
  function handleMapClick(e) {
    const { lat, lng } = e.latlng;
    
    // Show hex preview on click
    if (h3) {
      const hexIndex = h3.latLngToCell(lat, lng, H3_RESOLUTION);
      showHexPreview(hexIndex);
    }
    
    // Dispatch click event with coordinates
    dispatch('click', { lat, lng });
  }
  
  function showHexPreview(hexIndex) {
    if (!h3 || !L || !map) return;
    
    // Remove existing preview
    hexLayer.clearLayers();
    
    // Get hex boundary
    const boundary = h3.cellToBoundary(hexIndex);
    const latLngs = boundary.map(coord => [coord[0], coord[1]]);
    
    // Draw hex preview
    L.polygon(latLngs, {
      color: '#3B82F6',
      fillColor: '#3B82F6',
      fillOpacity: 0.3,
      weight: 2,
      dashArray: '5, 5'
    }).addTo(hexLayer);
    
    // Re-render existing zones
    renderZones();
  }
  
  function renderZones() {
    if (!L || !map || !markersLayer) return;
    
    markersLayer.clearLayers();
    
    zones.forEach((zone, index) => {
      if (zone.latitude && zone.longitude) {
        // Add hex polygon if h3 available
        if (h3 && zone.h3_index && !zone.h3_index.startsWith('manual_')) {
          try {
            const boundary = h3.cellToBoundary(zone.h3_index);
            const latLngs = boundary.map(coord => [coord[0], coord[1]]);
            
            const isMyZone = zone.user_id === userId;
            
            L.polygon(latLngs, {
              color: isMyZone ? '#10B981' : '#6B7280',
              fillColor: isMyZone ? '#10B981' : '#6B7280',
              fillOpacity: isMyZone ? 0.4 : 0.2,
              weight: isMyZone ? 2 : 1
            }).addTo(markersLayer)
              .bindPopup(`<b>${zone.name}</b><br>H3: ${zone.h3_index}`);
          } catch (e) {
            console.warn('Invalid h3 index:', zone.h3_index);
          }
        }
        
        // Add marker
        const isMyZone = zone.user_id === userId;
        const markerColor = isMyZone ? '#10B981' : '#6B7280';
        
        const marker = L.circleMarker([zone.latitude, zone.longitude], {
          radius: 8,
          fillColor: markerColor,
          color: '#fff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8
        }).addTo(markersLayer);
        
        marker.bindPopup(`
          <div class="text-sm">
            <b>${zone.name}</b><br>
            <span class="text-gray-500">${zone.latitude.toFixed(4)}, ${zone.longitude.toFixed(4)}</span>
            ${zone.h3_index ? `<br><span class="text-xs font-mono">${zone.h3_index}</span>` : ''}
          </div>
        `);
      }
    });
    
    // Fit bounds if we have zones
    if (zones.length > 0) {
      const validZones = zones.filter(z => z.latitude && z.longitude);
      if (validZones.length > 0) {
        const bounds = L.latLngBounds(validZones.map(z => [z.latitude, z.longitude]));
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
      }
    }
  }
  
  // Re-render when zones change
  $: if (map && zones) {
    renderZones();
  }
</script>

<div class="zone-map-container">
  <div 
    bind:this={mapContainer} 
    class="w-full h-96 rounded-lg border border-gray-200 dark:border-gray-700"
    style="min-height: 400px;"
  ></div>
  
  <div class="mt-3 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
    <div class="flex items-center gap-1">
      <span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>
      <span>Your zones</span>
    </div>
    <div class="flex items-center gap-1">
      <span class="inline-block w-3 h-3 rounded-full bg-gray-500"></span>
      <span>Other zones</span>
    </div>
    <div class="flex items-center gap-1">
      <span class="inline-block w-3 h-3 rounded border-2 border-blue-500 border-dashed"></span>
      <span>Click preview</span>
    </div>
  </div>
</div>

<style>
  :global(.leaflet-container) {
    font-family: inherit;
  }
</style>
