<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { _ } from 'svelte-i18n';
  import { backend } from '$lib/canisters';
  import { Button, Badge, Card, Spinner } from 'flowbite-svelte';

  interface CodexDetails {
    _id: string;
    name: string;
    description: string;
    code: string;
    created_at: number | null;
    updated_at: number | null;
  }

  let codexId: string;
  let codex: CodexDetails | null = null;
  let loading = true;
  let error = '';
  let copied = false;

  $: codexId = $page.params.codexId;

  onMount(() => {
    loadCodexDetails();
  });

  async function loadCodexDetails() {
    if (!codexId) return;
    loading = true;
    error = '';
    
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'codex_viewer',
        function_name: 'get_codex_details',
        args: JSON.stringify({ codex_id: codexId })
      });
      
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        if (data.success !== false) {
          codex = data.codex;
        } else {
          error = data.error || 'Failed to load codex details';
        }
      } else {
        error = response.error || 'Failed to load codex details';
      }
    } catch (e: any) {
      error = e.message || 'Error loading codex details';
    } finally {
      loading = false;
    }
  }

  async function copyCode() {
    if (!codex?.code) return;
    try {
      await navigator.clipboard.writeText(codex.code);
      copied = true;
      setTimeout(() => { copied = false; }, 2000);
    } catch (e) {
      console.error('Failed to copy:', e);
    }
  }

  function formatTimestamp(timestamp: number | null): string {
    if (!timestamp) return '-';
    return new Date(timestamp / 1000000).toLocaleString();
  }

  function countLines(code: string): number {
    return code ? code.split('\n').length : 0;
  }
</script>

<div class="p-6 max-w-6xl mx-auto">
  <!-- Header -->
  <div class="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
    <a href="/extensions/codex_viewer" class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
      <span>{$_('extensions.codex_viewer.back')}</span>
    </a>
    <div class="flex-1">
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          {codex?.name || 'Codex Details'}
        </h1>
        <Badge color="blue">Python</Badge>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">ID: {codexId}</p>
    </div>
    <div class="flex gap-2">
      <Button color="light" size="sm" on:click={copyCode}>
        {#if copied}
          <svg class="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          {$_('extensions.codex_viewer.copied')}
        {:else}
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
          {$_('extensions.codex_viewer.copy')}
        {/if}
      </Button>
    </div>
  </div>

  {#if loading}
    <div class="flex justify-center items-center py-20">
      <Spinner size="12" />
      <span class="ml-3 text-gray-600 dark:text-gray-400">Loading...</span>
    </div>
  {:else if error}
    <Card class="text-center py-8">
      <p class="text-red-600 dark:text-red-400 mb-4">{error}</p>
      <Button color="light" on:click={loadCodexDetails}>Try Again</Button>
    </Card>
  {:else if codex}
    <!-- Info Bar -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {#if codex.description}
        <div class="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <span class="text-sm text-gray-500 dark:text-gray-400">{$_('extensions.codex_viewer.codex_description')}</span>
          <p class="font-medium text-gray-900 dark:text-white mt-1">{codex.description}</p>
        </div>
      {/if}
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <span class="text-sm text-gray-500 dark:text-gray-400">{$_('extensions.codex_viewer.stats')}</span>
        <p class="font-medium text-gray-900 dark:text-white mt-1">
          {countLines(codex.code)} {$_('extensions.codex_viewer.lines')}
        </p>
      </div>
    </div>

    <!-- Code Display -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center gap-2">
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span class="text-sm text-gray-600 dark:text-gray-400 ml-2">{codex.name}.py</span>
        </div>
        <span class="text-xs text-gray-500 dark:text-gray-500">
          {$_('extensions.codex_viewer.updated')}: {formatTimestamp(codex.updated_at)}
        </span>
      </div>
      <div class="overflow-auto" style="max-height: 70vh;">
        <pre class="p-4 bg-gray-900 text-gray-100 font-mono text-sm leading-relaxed"><code>{codex.code || '# No code available'}</code></pre>
      </div>
    </div>
  {:else}
    <Card class="text-center py-8">
      <p class="text-gray-500 dark:text-gray-400">{$_('extensions.codex_viewer.not_found')}</p>
    </Card>
  {/if}
</div>
