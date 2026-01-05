<script lang="ts">
  import { onMount } from 'svelte';
  
  let stats = {
    totalExtensions: 0,
    totalDevelopers: 0,
    totalPurchases: 0
  };
  
  let myLicense = null;
  let myPurchases = [];
  let myExtensions = [];
  let loading = true;

  onMount(async () => {
    // TODO: Connect to marketplace_backend canister
    loading = false;
  });
</script>

<div class="min-h-screen bg-gray-50">
  <!-- Header -->
  <header class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Realms Marketplace</h1>
          <p class="text-gray-600 mt-1">Discover, purchase, and publish extensions for Realms</p>
        </div>
        <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          Connect Wallet
        </button>
      </div>
    </div>
  </header>

  <!-- Stats Bar -->
  <div class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <div class="grid grid-cols-3 gap-8">
        <div class="text-center">
          <p class="text-3xl font-bold text-gray-900">{stats.totalExtensions}</p>
          <p class="text-sm text-gray-500">Extensions</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-gray-900">{stats.totalDevelopers}</p>
          <p class="text-sm text-gray-500">Developers</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-gray-900">{stats.totalPurchases}</p>
          <p class="text-sm text-gray-500">Purchases</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <main class="max-w-7xl mx-auto px-4 py-8">
    <!-- Navigation Tabs -->
    <div class="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
      <button class="px-4 py-2 rounded-md bg-white text-gray-900 font-medium shadow-sm">
        Browse
      </button>
      <button class="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">
        My Purchases
      </button>
      <button class="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">
        Developer Dashboard
      </button>
    </div>

    {#if loading}
      <div class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span class="ml-3 text-gray-600">Loading...</span>
      </div>
    {:else}
      <!-- Extensions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Placeholder cards -->
        {#each Array(6) as _, i}
          <div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <span class="text-2xl">📦</span>
              </div>
              <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                Free
              </span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Example Extension {i + 1}</h3>
            <p class="text-gray-600 text-sm mb-4">
              A sample extension description. Connect to the marketplace backend to see real data.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">0 downloads</span>
              <button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Install
              </button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </main>

  <!-- Footer -->
  <footer class="bg-white border-t border-gray-200 mt-auto">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <p class="text-center text-gray-500 text-sm">
        Realms Marketplace - Powered by the Internet Computer
      </p>
    </div>
  </footer>
</div>

<style>
  .bg-primary-100 { background-color: #e0f2fe; }
  .bg-primary-600 { background-color: #0284c7; }
  .bg-primary-700 { background-color: #0369a1; }
  .hover\:bg-primary-700:hover { background-color: #0369a1; }
  .text-primary-600 { color: #0284c7; }
  .border-primary-600 { border-color: #0284c7; }
</style>
