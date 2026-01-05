<script>
  import { page } from '$app/stores';
  import extensionsData from '$lib/extensions.json';
  
  let extension = null;
  let loading = true;
  
  $: {
    const id = $page.params.id;
    extension = extensionsData.extensions?.find(e => e.id === id) || null;
    loading = false;
  }
  
  function formatPrice(priceE8s) {
    if (priceE8s === 0) return 'Free';
    return `${(priceE8s / 100_000_000).toFixed(2)} ICP`;
  }
  
  function formatCategory(cat) {
    return cat.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
</script>

<div class="container">
  <nav class="breadcrumb">
    <a href="/">← Back to Marketplace</a>
  </nav>
  
  {#if loading}
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading extension...</p>
    </div>
  {:else if !extension}
    <div class="not-found">
      <h2>Extension Not Found</h2>
      <p>The extension you're looking for doesn't exist.</p>
      <a href="/" class="btn btn-primary">Back to Marketplace</a>
    </div>
  {:else}
    <div class="extension-detail">
      <div class="extension-hero">
        <div class="extension-icon-large">
          <span>{extension.icon}</span>
        </div>
        <div class="extension-info">
          <h1>{extension.name}</h1>
          <p class="extension-author">by {extension.author}</p>
          <div class="extension-badges">
            <span class="version-badge">v{extension.version}</span>
            <span class="price-badge" class:free={extension.price_e8s === 0}>
              {formatPrice(extension.price_e8s)}
            </span>
            <span class="license-badge">{extension.license || 'MIT'}</span>
          </div>
        </div>
        <div class="extension-cta">
          <button class="btn btn-primary btn-large">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Install Extension
          </button>
          <p class="download-stats">{extension.downloads} downloads</p>
        </div>
      </div>
      
      <div class="extension-body">
        <div class="main-content">
          <section class="description-section">
            <h2>About</h2>
            <p>{extension.description}</p>
          </section>
          
          <section class="categories-section">
            <h2>Categories</h2>
            <div class="categories-list">
              {#each extension.categories as cat}
                <span class="category-tag">{formatCategory(cat)}</span>
              {/each}
            </div>
          </section>
          
          {#if extension.repository}
            <section class="links-section">
              <h2>Links</h2>
              <div class="links-list">
                {#if extension.repository}
                  <a href={extension.repository} target="_blank" rel="noopener noreferrer" class="link-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                {/if}
                {#if extension.doc_url}
                  <a href={extension.doc_url} target="_blank" rel="noopener noreferrer" class="link-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Documentation
                  </a>
                {/if}
              </div>
            </section>
          {/if}
        </div>
        
        <aside class="sidebar">
          <div class="sidebar-card">
            <h3>Extension Details</h3>
            <dl class="details-list">
              <dt>Version</dt>
              <dd>{extension.version}</dd>
              <dt>Author</dt>
              <dd>{extension.author}</dd>
              <dt>License</dt>
              <dd>{extension.license || 'MIT'}</dd>
              <dt>Downloads</dt>
              <dd>{extension.downloads}</dd>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  {/if}
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: #FAFAFA;
    min-height: 100vh;
    color: #171717;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
  }

  .breadcrumb {
    margin-bottom: 2rem;
  }

  .breadcrumb a {
    color: #525252;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;
  }

  .breadcrumb a:hover {
    color: #171717;
  }

  .loading, .not-found {
    text-align: center;
    padding: 4rem;
    background: #FFFFFF;
    border-radius: 0.75rem;
    border: 1px solid #E5E5E5;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #F5F5F5;
    border-top: 4px solid #525252;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .not-found h2 {
    margin: 0 0 0.5rem;
    color: #171717;
  }

  .not-found p {
    color: #525252;
    margin: 0 0 1.5rem;
  }

  .extension-detail {
    background: #FFFFFF;
    border-radius: 0.75rem;
    border: 1px solid #E5E5E5;
    overflow: hidden;
  }

  .extension-hero {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    border-bottom: 1px solid #E5E5E5;
    background: linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%);
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .extension-icon-large {
    width: 96px;
    height: 96px;
    border-radius: 1rem;
    background: linear-gradient(135deg, #525252 0%, #737373 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  .extension-info {
    flex: 1;
    min-width: 200px;
  }

  .extension-info h1 {
    margin: 0 0 0.25rem;
    font-size: 1.75rem;
    font-weight: 700;
    color: #171717;
  }

  .extension-author {
    margin: 0 0 1rem;
    color: #737373;
    font-size: 0.9rem;
  }

  .extension-badges {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .version-badge, .price-badge, .license-badge {
    padding: 0.35rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .version-badge {
    background: #F5F5F5;
    color: #525252;
  }

  .price-badge {
    background: #F5F5F5;
    color: #525252;
  }

  .price-badge.free {
    background: #DCFCE7;
    color: #166534;
  }

  .license-badge {
    background: #E0E7FF;
    color: #3730A3;
  }

  .extension-cta {
    text-align: center;
  }

  .btn {
    padding: 0.65rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    font-weight: 500;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
  }

  .btn-large {
    padding: 0.85rem 1.75rem;
    font-size: 1rem;
  }

  .btn-primary {
    background: #171717;
    color: #FFFFFF;
    border-color: #171717;
  }

  .btn-primary:hover {
    background: #262626;
    border-color: #262626;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.12);
  }

  .download-stats {
    margin: 0.75rem 0 0;
    color: #737373;
    font-size: 0.8rem;
  }

  .extension-body {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
    padding: 2rem;
  }

  .main-content section {
    margin-bottom: 2rem;
  }

  .main-content section:last-child {
    margin-bottom: 0;
  }

  .main-content h2 {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #171717;
  }

  .main-content p {
    color: #525252;
    line-height: 1.7;
    margin: 0;
  }

  .categories-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .category-tag {
    padding: 0.35rem 0.75rem;
    background: #F5F5F5;
    color: #525252;
    font-size: 0.8rem;
    border-radius: 0.375rem;
    font-weight: 500;
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .link-item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #525252;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;
  }

  .link-item:hover {
    color: #171717;
  }

  .sidebar-card {
    background: #FAFAFA;
    border: 1px solid #E5E5E5;
    border-radius: 0.75rem;
    padding: 1.5rem;
  }

  .sidebar-card h3 {
    margin: 0 0 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #171717;
  }

  .details-list {
    margin: 0;
  }

  .details-list dt {
    font-size: 0.75rem;
    color: #737373;
    margin-bottom: 0.25rem;
  }

  .details-list dd {
    margin: 0 0 1rem;
    color: #171717;
    font-size: 0.9rem;
  }

  .details-list dd:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }

    .extension-hero {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .extension-badges {
      justify-content: center;
    }

    .extension-body {
      grid-template-columns: 1fr;
    }
  }
</style>
