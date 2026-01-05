<script>
  import { onMount } from 'svelte';
  import extensionsData from '$lib/extensions.json';
  
  let extensions = [];
  let filteredExtensions = [];
  let selectedCategory = 'all';
  let searchQuery = '';
  
  let stats = {
    totalExtensions: 0,
    totalDevelopers: 0,
    totalPurchases: 0
  };
  
  let activeTab = 'browse';
  let loading = true;

  // Get unique categories
  $: categories = ['all', ...new Set(extensions.flatMap(e => e.categories))];
  
  // Filter extensions
  $: {
    filteredExtensions = extensions.filter(ext => {
      const matchesCategory = selectedCategory === 'all' || ext.categories.includes(selectedCategory);
      const matchesSearch = !searchQuery || 
        ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ext.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  // Get unique developers count
  $: uniqueDevelopers = new Set(extensions.map(e => e.author)).size;

  onMount(async () => {
    // Load extensions from generated JSON
    extensions = extensionsData.extensions || [];
    stats.totalExtensions = extensions.length;
    stats.totalDevelopers = uniqueDevelopers;
    loading = false;
  });
  
  function formatPrice(priceE8s) {
    if (priceE8s === 0) return 'Free';
    return `${(priceE8s / 100_000_000).toFixed(2)} ICP`;
  }
  
  function formatCategory(cat) {
    return cat.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
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
    <!-- Search and Filter -->
    <div class="flex flex-col md:flex-row gap-4 mb-6">
      <div class="flex-1">
        <input 
          type="text" 
          placeholder="Search extensions..." 
          bind:value={searchQuery}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div class="flex gap-2 flex-wrap">
        {#each categories as category}
          <button 
            class="px-3 py-1.5 rounded-full text-sm font-medium transition-colors {selectedCategory === category ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
            on:click={() => selectedCategory = category}
          >
            {formatCategory(category)}
          </button>
        {/each}
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
      <button 
        class="px-4 py-2 rounded-md transition-colors {activeTab === 'browse' ? 'bg-white text-gray-900 font-medium shadow-sm' : 'text-gray-600 hover:text-gray-900'}"
        on:click={() => activeTab = 'browse'}
      >
        Browse
      </button>
      <button 
        class="px-4 py-2 rounded-md transition-colors {activeTab === 'purchases' ? 'bg-white text-gray-900 font-medium shadow-sm' : 'text-gray-600 hover:text-gray-900'}"
        on:click={() => activeTab = 'purchases'}
      >
        My Purchases
      </button>
      <button 
        class="px-4 py-2 rounded-md transition-colors {activeTab === 'developer' ? 'bg-white text-gray-900 font-medium shadow-sm' : 'text-gray-600 hover:text-gray-900'}"
        on:click={() => activeTab = 'developer'}
      >
        Developer Dashboard
      </button>
    </div>

    {#if loading}
      <div class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span class="ml-3 text-gray-600">Loading...</span>
      </div>
    {:else if activeTab === 'browse'}
      <!-- Extensions Grid -->
      {#if filteredExtensions.length === 0}
        <div class="text-center py-12">
          <p class="text-gray-500">No extensions found matching your criteria.</p>
        </div>
      {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each filteredExtensions as ext}
            <div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">{ext.icon}</span>
                </div>
                <span class="px-2 py-1 text-xs font-medium {ext.price_e8s === 0 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} rounded-full">
                  {formatPrice(ext.price_e8s)}
                </span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">{ext.name}</h3>
              <p class="text-xs text-gray-500 mb-2">v{ext.version} by {ext.author}</p>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                {ext.description}
              </p>
              <div class="flex flex-wrap gap-1 mb-4">
                {#each ext.categories as cat}
                  <span class="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                    {formatCategory(cat)}
                  </span>
                {/each}
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{ext.downloads} downloads</span>
                <button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Install
                </button>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    {:else if activeTab === 'purchases'}
      <div class="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <p class="text-gray-500">Connect your wallet to view your purchases.</p>
      </div>
    {:else if activeTab === 'developer'}
      <div class="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <p class="text-gray-500">Connect your wallet and purchase a developer license to publish extensions.</p>
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
