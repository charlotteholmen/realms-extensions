<script lang="ts">
	let { backend, extensionId = 'welcome', version = '', principal = '', isAuthenticated = true }: any = $props();

	let realmName = $state('');
	let realmDescription = $state('');
	let welcomeMessage = $state('');
	let loading = $state(true);

	async function loadRealmInfo() {
		loading = true;
		try {
			const raw = await backend.status();
			const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
			const s = parsed?.data?.status ?? parsed;
			realmName = s?.realm_name || 'Realm';
			realmDescription = s?.realm_description || '';
			welcomeMessage = s?.realm_welcome_message || '';
		} catch {
			realmName = 'Realm';
		} finally {
			loading = false;
		}
	}

	$effect(() => { void loadRealmInfo(); });
</script>

<div class="rt-welcome">
	{#if loading}
		<div class="loading">Loading…</div>
	{:else}
		<div class="hero">
			<h1>{realmName}</h1>
			{#if realmDescription}
				<p class="desc">{realmDescription}</p>
			{/if}
			{#if welcomeMessage}
				<p class="msg">{welcomeMessage}</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	.rt-welcome { font-family: system-ui, -apple-system, sans-serif; min-height: 300px; display: flex; align-items: center; justify-content: center; padding: 2rem; }
	.loading { color: #6b7280; }
	.hero { text-align: center; max-width: 640px; }
	.hero h1 { font-size: 2.5rem; margin: 0 0 1rem; color: #1f2937; }
	.desc { font-size: 1.125rem; color: #4b5563; line-height: 1.6; margin: 0 0 1rem; }
	.msg { font-size: 1rem; color: #6b7280; font-style: italic; margin: 0; }
</style>
