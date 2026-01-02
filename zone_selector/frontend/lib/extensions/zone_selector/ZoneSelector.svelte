<script>
  import { onMount } from 'svelte';
  import { backend } from '$lib/canisters';
  import { principal } from '$lib/stores/auth';
  import { _ } from 'svelte-i18n';
  import SafeText from '$lib/components/SafeText.svelte';
  import ZoneMap from './ZoneMap.svelte';

  let zones = [];
  let loading = false;
  let error = null;
  let success = null;
  let activeTab = 'map';
  
  // Geolocation state
  let geoLoading = false;
  let geoError = null;
  let currentLocation = null;

  $: userId = $principal || null;

  async function loadMyZones() {
    if (!userId) return;
    
    try {
      loading = true;
      error = null;
      
      const result = await backend.extension_sync_call({
        extension_name: 'zone_selector',
        function_name: 'get_my_zones',
        args: JSON.stringify({ user_id: userId })
      });
      
      if (result && result.success && result.data) {
        const response = JSON.parse(result.data);
        if (response.success) {
          zones = response.data || [];
        } else {
          error = response.error || 'Failed to load zones';
        }
      } else {
        error = result?.error || 'Failed to load zones';
      }
    } catch (err) {
      error = `Error: ${err.message}`;
    } finally {
      loading = false;
    }
  }

  async function requestGeolocation() {
    if (!navigator.geolocation) {
      geoError = 'Geolocation is not supported by your browser';
      return;
    }

    geoLoading = true;
    geoError = null;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        geoLoading = false;
        
        // Ask user if they want to add this as a zone
        if (confirm(`Add your current location as a zone of influence?\n\nLatitude: ${currentLocation.lat.toFixed(4)}\nLongitude: ${currentLocation.lng.toFixed(4)}`)) {
          await addZoneAtLocation(currentLocation.lat, currentLocation.lng, 'My Location');
        }
      },
      (err) => {
        geoLoading = false;
        switch (err.code) {
          case err.PERMISSION_DENIED:
            geoError = 'Location permission denied. You can still select zones manually on the map.';
            break;
          case err.POSITION_UNAVAILABLE:
            geoError = 'Location information unavailable.';
            break;
          case err.TIMEOUT:
            geoError = 'Location request timed out.';
            break;
          default:
            geoError = 'An error occurred while getting your location.';
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }

  async function addZoneAtLocation(lat, lng, name = 'My Zone') {
    if (!userId) {
      error = 'You must be logged in to add zones';
      return;
    }

    try {
      loading = true;
      error = null;
      success = null;

      const result = await backend.extension_sync_call({
        extension_name: 'zone_selector',
        function_name: 'add_zone',
        args: JSON.stringify({
          user_id: userId,
          latitude: lat,
          longitude: lng,
          name: name,
          description: `Zone of influence at ${lat.toFixed(4)}, ${lng.toFixed(4)}`,
          resolution: 6
        })
      });

      if (result && result.success && result.data) {
        const response = JSON.parse(result.data);
        if (response.success) {
          success = 'Zone added successfully!';
          await loadMyZones();
        } else {
          error = response.error || 'Failed to add zone';
        }
      } else {
        error = result?.error || 'Failed to add zone';
      }
    } catch (err) {
      error = `Error: ${err.message}`;
    } finally {
      loading = false;
    }
  }

  async function removeZone(zoneId) {
    if (!userId) return;
    if (!confirm('Are you sure you want to remove this zone?')) return;

    try {
      loading = true;
      error = null;
      success = null;

      const result = await backend.extension_sync_call({
        extension_name: 'zone_selector',
        function_name: 'remove_zone',
        args: JSON.stringify({
          user_id: userId,
          zone_id: zoneId
        })
      });

      if (result && result.success && result.data) {
        const response = JSON.parse(result.data);
        if (response.success) {
          success = 'Zone removed successfully!';
          await loadMyZones();
        } else {
          error = response.error || 'Failed to remove zone';
        }
      } else {
        error = result?.error || 'Failed to remove zone';
      }
    } catch (err) {
      error = `Error: ${err.message}`;
    } finally {
      loading = false;
    }
  }

  function handleMapClick(event) {
    const { lat, lng } = event.detail;
    const name = prompt('Enter a name for this zone:', 'My Zone');
    if (name !== null) {
      addZoneAtLocation(lat, lng, name);
    }
  }

  onMount(() => {
    if (userId) {
      loadMyZones();
    }
  });

  $: if (userId) {
    loadMyZones();
  }
</script>

<div class="zone-selector p-4">
  <div class="header mb-6">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
      <SafeText key="extensions.zone_selector.title" fallback="Zones of Influence" spinnerSize="sm" />
    </h2>
    <p class="text-gray-600 dark:text-gray-400">
      <SafeText key="extensions.zone_selector.description" fallback="Set your zones of influence to appear on the realm map" spinnerSize="sm" />
    </p>
  </div>

  {#if !userId}
    <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
      <SafeText key="extensions.zone_selector.login_required" fallback="Please log in to manage your zones of influence" spinnerSize="sm" />
    </div>
  {:else}
    <!-- Geolocation Button -->
    <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        <SafeText key="extensions.zone_selector.quick_add" fallback="Quick Add" spinnerSize="sm" />
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <SafeText key="extensions.zone_selector.geolocation_hint" fallback="Use your device's location to quickly add a zone (permission required)" spinnerSize="sm" />
      </p>
      <button
        on:click={requestGeolocation}
        disabled={geoLoading}
        class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {#if geoLoading}
          <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Getting location...</span>
        {:else}
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <SafeText key="extensions.zone_selector.use_my_location" fallback="Use My Location" spinnerSize="sm" />
        {/if}
      </button>
      {#if geoError}
        <p class="mt-2 text-sm text-amber-600 dark:text-amber-400">{geoError}</p>
      {/if}
      {#if currentLocation}
        <p class="mt-2 text-sm text-green-600 dark:text-green-400">
          📍 Current location: {currentLocation.lat.toFixed(4)}, {currentLocation.lng.toFixed(4)}
        </p>
      {/if}
    </div>

    <!-- Alerts -->
    {#if error}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {error}
      </div>
    {/if}
    {#if success}
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
        {success}
      </div>
    {/if}

    <!-- Tabs -->
    <div class="border-b border-gray-200 dark:border-gray-700 mb-6">
      <nav class="-mb-px flex space-x-8">
        <button 
          class="py-2 px-1 border-b-2 font-medium text-sm transition-colors {activeTab === 'map' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
          on:click={() => activeTab = 'map'}
        >
          <SafeText key="extensions.zone_selector.map_view" fallback="Map Selection" spinnerSize="xs" />
        </button>
        <button 
          class="py-2 px-1 border-b-2 font-medium text-sm transition-colors {activeTab === 'list' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
          on:click={() => activeTab = 'list'}
        >
          <SafeText key="extensions.zone_selector.my_zones" fallback="My Zones ({zones.length})" spinnerSize="xs" />
        </button>
      </nav>
    </div>

    <!-- Content -->
    {#if loading}
      <div class="text-center py-8">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p class="mt-2 text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    {:else if activeTab === 'map'}
      <div class="mb-4">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <SafeText key="extensions.zone_selector.map_instructions" fallback="Click on the map to add a zone of influence at that location" spinnerSize="sm" />
        </p>
        <ZoneMap {zones} {userId} on:click={handleMapClick} />
      </div>
    {:else if activeTab === 'list'}
      {#if zones.length === 0}
        <div class="text-center py-8 text-gray-500 dark:text-gray-400">
          <svg class="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
          </svg>
          <SafeText key="extensions.zone_selector.no_zones" fallback="You haven't added any zones yet" spinnerSize="sm" />
        </div>
      {:else}
        <div class="space-y-3">
          {#each zones as zone}
            <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">{zone.name}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  📍 {zone.latitude?.toFixed(4)}, {zone.longitude?.toFixed(4)}
                </p>
                {#if zone.h3_index}
                  <p class="text-xs text-gray-400 dark:text-gray-500 font-mono">
                    H3: {zone.h3_index}
                  </p>
                {/if}
              </div>
              <button
                on:click={() => removeZone(zone.id)}
                class="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
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
