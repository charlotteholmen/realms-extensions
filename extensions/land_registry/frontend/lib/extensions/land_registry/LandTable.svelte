<script>
  import { goto } from '$app/navigation';
  
  export let lands = [];
  
  // Pagination state
  let currentPage = 0;
  const pageSize = 20;
  
  $: totalPages = Math.ceil(lands.length / pageSize);
  $: paginatedLands = lands.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  
  function goToPage(page) {
    if (page >= 0 && page < totalPages) {
      currentPage = page;
    }
  }
  
  function handleRowClick(land) {
    goto(`/extensions/land_registry/land/${land.id}`);
  }
  
  function getTypeColor(type) {
    const colors = {
      'residential': 'bg-green-100 text-green-800',
      'agricultural': 'bg-yellow-100 text-yellow-800',
      'industrial': 'bg-gray-100 text-gray-800',
      'commercial': 'bg-blue-100 text-blue-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-600';
  }
</script>

<div class="land-table">
  <div class="mb-4">
    <h3 class="text-lg font-semibold">Land Registry Table</h3>
    <p class="text-gray-600">All registered land parcels with zone information</p>
    <p class="text-sm text-gray-500 mt-1">Showing {paginatedLands.length} of {lands.length} parcels</p>
  </div>
  
  {#if lands.length > 0}
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          {#each paginatedLands as land}
            <tr 
              class="hover:bg-blue-50 cursor-pointer transition-colors"
              on:click={() => handleRowClick(land)}
            >
              <td class="px-4 py-3 text-sm font-medium text-gray-900">{land.id}</td>
              <td class="px-4 py-3 text-sm">
                <span class="px-2 py-1 rounded-full text-xs font-medium {getTypeColor(land.land_type)}">
                  {land.land_type}
                </span>
              </td>
              <td class="px-4 py-3 text-sm text-gray-600">
                {#if land.latitude && land.longitude}
                  {land.latitude.toFixed(4)}, {land.longitude.toFixed(4)}
                {:else}
                  <span class="text-gray-400">-</span>
                {/if}
              </td>
              <td class="px-4 py-3 text-sm text-gray-600">
                {land.owner_user_id || land.owner_organization_id || '-'}
              </td>
              <td class="px-4 py-3 text-sm">
                {#if land.for_sale}
                  <span class="text-green-600 font-medium">For Sale</span>
                {:else if land.owner_user_id || land.owner_organization_id}
                  <span class="text-gray-600">Owned</span>
                {:else}
                  <span class="text-blue-600">Available</span>
                {/if}
              </td>
              <td class="px-4 py-3 text-sm">
                {#if land.for_sale && land.price_realm_tokens}
                  <span class="text-green-700 font-semibold">{land.price_realm_tokens} REALM</span>
                {:else}
                  <span class="text-gray-400">-</span>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    
    <!-- Pagination Controls -->
    {#if totalPages > 1}
      <div class="flex justify-center items-center mt-4 space-x-2">
        <button 
          class="px-3 py-1 rounded border {currentPage > 0 ? 'bg-blue-100 hover:bg-blue-200 text-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}" 
          disabled={currentPage === 0}
          on:click={() => goToPage(currentPage - 1)}
        >
          Previous
        </button>
        
        <div class="flex space-x-1">
          {#each Array(Math.min(totalPages, 7)) as _, i}
            {@const pageNum = totalPages <= 7 ? i : 
              currentPage < 3 ? i : 
              currentPage > totalPages - 4 ? totalPages - 7 + i : 
              currentPage - 3 + i}
            {#if pageNum >= 0 && pageNum < totalPages}
              <button 
                class="w-8 h-8 rounded-full text-sm {currentPage === pageNum ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}"
                on:click={() => goToPage(pageNum)}
              >
                {pageNum + 1}
              </button>
            {/if}
          {/each}
        </div>
        
        <button 
          class="px-3 py-1 rounded border {currentPage < totalPages - 1 ? 'bg-blue-100 hover:bg-blue-200 text-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}" 
          disabled={currentPage >= totalPages - 1}
          on:click={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <div class="text-xs text-gray-500 mt-2 text-center">
        Page {currentPage + 1} of {totalPages}
      </div>
    {/if}
  {:else}
    <div class="text-center py-8 text-gray-500">
      No land parcels registered yet.
    </div>
  {/if}
</div>
