<script>
  import { onMount, tick } from 'svelte';
  import { page } from '$app/stores';
  import { backend } from '$lib/canisters';
  import { goto } from '$app/navigation';
  import { userProfiles } from '$lib/stores/profiles';
  
  let landId = $page.params.id;
  let land = null;
  let loading = true;
  let error = null;
  let mapContainer;
  let map = null;
  let L = null;
  let h3 = null;
  
  // Admin functionality
  let showTransferModal = false;
  let newOwnerId = '';
  let transferring = false;
  let transferError = null;
  
  $: isAdmin = $userProfiles.includes('admin');
  
  const LAND_COLORS = {
    'residential': '#4ade80',
    'agricultural': '#fbbf24',
    'industrial': '#6b7280',
    'commercial': '#3b82f6',
    'unassigned': '#e5e7eb'
  };
  
  async function loadLand() {
    loading = true;
    error = null;
    
    try {
      // Use get_lands which includes zone data (h3_index, lat/lng)
      const result = await backend.extension_sync_call({
        extension_name: 'land_registry',
        function_name: 'get_lands',
        args: JSON.stringify({})
      });
      
      if (result && result.success && result.response) {
        const response = JSON.parse(result.response);
        if (response.success && response.data) {
          // Find the specific land by ID
          const foundLand = response.data.find(l => l.id === landId);
          if (foundLand) {
            land = foundLand;
          } else {
            error = 'Land not found';
          }
        } else {
          error = response.error || 'Failed to load lands';
        }
      } else {
        error = result?.error || 'Failed to load land';
      }
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }
  
  async function initMap() {
    if (!mapContainer || !land) return;
    
    const [leaflet, h3js] = await Promise.all([
      import('leaflet'),
      import('h3-js')
    ]);
    
    L = leaflet.default;
    h3 = h3js;
    
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Get center coordinates
    let lat, lng;
    if (land.latitude && land.longitude) {
      lat = land.latitude;
      lng = land.longitude;
    } else if (land.h3_index && !land.h3_index.includes('manual')) {
      try {
        const center = h3.cellToLatLng(land.h3_index);
        lat = center[0];
        lng = center[1];
      } catch (e) {
        lat = 51.5;
        lng = -0.1;
      }
    } else {
      lat = 51.5;
      lng = -0.1;
    }
    
    map = L.map(mapContainer).setView([lat, lng], 14);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);
    
    const color = LAND_COLORS[land.land_type] || LAND_COLORS.unassigned;
    const isOwned = land.owner_user_id || land.owner_organization_id;
    
    // Render H3 hexagon if available
    if (h3 && land.h3_index && !land.h3_index.includes('manual')) {
      try {
        const boundary = h3.cellToBoundary(land.h3_index);
        const latLngs = boundary.map(coord => [coord[0], coord[1]]);
        
        L.polygon(latLngs, {
          color: isOwned ? '#1f2937' : '#22c55e',
          fillColor: color,
          fillOpacity: 0.6,
          weight: 3
        }).addTo(map);
        
        // Fit bounds to hexagon
        map.fitBounds(latLngs, { padding: [30, 30] });
      } catch (e) {
        // Fallback to circle marker
        L.circleMarker([lat, lng], {
          radius: 30,
          fillColor: color,
          color: isOwned ? '#1f2937' : '#22c55e',
          weight: 3,
          fillOpacity: 0.6
        }).addTo(map);
      }
    } else {
      L.circleMarker([lat, lng], {
        radius: 30,
        fillColor: color,
        color: isOwned ? '#1f2937' : '#22c55e',
        weight: 3,
        fillOpacity: 0.6
      }).addTo(map);
    }
  }
  
  async function transferOwnership() {
    if (!newOwnerId.trim()) {
      transferError = 'Please enter a user ID';
      return;
    }
    
    transferring = true;
    transferError = null;
    
    try {
      const result = await backend.extension_sync_call({
        extension_name: 'land_registry',
        function_name: 'update_land_ownership',
        args: JSON.stringify({
          land_id: landId,
          new_owner_user_id: newOwnerId.trim()
        })
      });
      
      if (result && result.success && result.response) {
        const response = JSON.parse(result.response);
        if (response.success) {
          showTransferModal = false;
          newOwnerId = '';
          await loadLand();
        } else {
          transferError = response.error || 'Transfer failed';
        }
      } else {
        transferError = result?.error || 'Transfer failed';
      }
    } catch (err) {
      transferError = err.message;
    } finally {
      transferring = false;
    }
  }
  
  onMount(async () => {
    await loadLand();
    await tick();
    if (land) {
      initMap();
    }
  });
  
  $: if (land && mapContainer && !map) {
    initMap();
  }
</script>

<svelte:head>
  <title>{land?.id || 'Land'} - Land Registry</title>
</svelte:head>

<div class="p-4 max-w-4xl mx-auto">
  <!-- Back button -->
  <button 
    class="mb-4 flex items-center text-blue-600 hover:text-blue-800"
    on:click={() => goto('/extensions/land_registry')}
  >
    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
    Back to Land Registry
  </button>
  
  {#if loading}
    <div class="text-center py-12">
      <div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      <p class="mt-2 text-gray-600">Loading land details...</p>
    </div>
  {:else if error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {error}
    </div>
  {:else if land}
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Header -->
      <div class="bg-gray-800 text-white px-6 py-4">
        <h1 class="text-2xl font-bold">{land.id}</h1>
        <p class="text-gray-300 capitalize">{land.land_type} Land</p>
      </div>
      
      <!-- Map -->
      <div 
        bind:this={mapContainer}
        class="w-full h-64 bg-gray-200"
      ></div>
      
      <!-- Details -->
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Left column -->
          <div class="space-y-4">
            <h2 class="text-lg font-semibold border-b pb-2">Land Information</h2>
            
            <div class="flex justify-between">
              <span class="text-gray-600">Type:</span>
              <span class="font-medium capitalize" style="color: {LAND_COLORS[land.land_type] || '#666'}">
                {land.land_type}
              </span>
            </div>
            
            {#if land.latitude && land.longitude}
              <div class="flex justify-between">
                <span class="text-gray-600">Coordinates:</span>
                <span class="font-medium">{land.latitude.toFixed(6)}, {land.longitude.toFixed(6)}</span>
              </div>
            {/if}
            
            {#if land.h3_index}
              <div class="flex justify-between">
                <span class="text-gray-600">H3 Index:</span>
                <span class="font-mono text-sm">{land.h3_index}</span>
              </div>
            {/if}
            
            <div class="flex justify-between">
              <span class="text-gray-600">Size:</span>
              <span class="font-medium">{land.size_width} x {land.size_height}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="text-gray-600">Status:</span>
              <span class="font-medium">{land.status}</span>
            </div>
          </div>
          
          <!-- Right column -->
          <div class="space-y-4">
            <h2 class="text-lg font-semibold border-b pb-2">Ownership & Sale</h2>
            
            <div class="flex justify-between">
              <span class="text-gray-600">Owner:</span>
              <span class="font-medium">
                {#if land.owner_user_id}
                  User {land.owner_user_id}
                {:else if land.owner_organization_id}
                  Org {land.owner_organization_id}
                {:else}
                  <span class="text-blue-600">Unowned</span>
                {/if}
              </span>
            </div>
            
            <div class="flex justify-between">
              <span class="text-gray-600">For Sale:</span>
              <span class="font-medium {land.for_sale ? 'text-green-600' : 'text-gray-600'}">
                {land.for_sale ? 'Yes' : 'No'}
              </span>
            </div>
            
            {#if land.for_sale && land.price_realm_tokens}
              <div class="flex justify-between">
                <span class="text-gray-600">Price:</span>
                <span class="font-bold text-green-700 text-lg">{land.price_realm_tokens} REALM</span>
              </div>
            {/if}
            
            {#if land.registered_by}
              <div class="flex justify-between">
                <span class="text-gray-600">Registered By:</span>
                <span class="font-medium">{land.registered_by}</span>
              </div>
            {/if}
            
            {#if land.nft_token_id}
              <div class="flex justify-between">
                <span class="text-gray-600">NFT Token:</span>
                <span class="font-mono text-sm">{land.nft_token_id}</span>
              </div>
            {/if}
          </div>
        </div>
        
        <!-- Action buttons -->
        <div class="mt-6 pt-6 border-t flex flex-wrap gap-3">
          {#if land.for_sale}
            <button class="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Purchase Land
            </button>
          {/if}
          
          {#if isAdmin}
            <button 
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              on:click={() => showTransferModal = true}
            >
              Transfer Ownership
            </button>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>

<!-- Transfer Modal -->
{#if showTransferModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
      <h3 class="text-xl font-bold mb-4">Transfer Ownership</h3>
      
      <p class="text-gray-600 mb-4">
        Transfer ownership of <strong>{land?.id}</strong> to a new user.
      </p>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">New Owner User ID</label>
        <input 
          type="text"
          bind:value={newOwnerId}
          placeholder="Enter user ID"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {#if transferError}
        <div class="mb-4 text-red-600 text-sm">{transferError}</div>
      {/if}
      
      <div class="flex gap-3">
        <button 
          class="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
          on:click={() => { showTransferModal = false; transferError = null; }}
          disabled={transferring}
        >
          Cancel
        </button>
        <button 
          class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          on:click={transferOwnership}
          disabled={transferring}
        >
          {transferring ? 'Transferring...' : 'Transfer'}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  :global(.leaflet-container) {
    font-family: inherit;
  }
</style>
