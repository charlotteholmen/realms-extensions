<script lang="ts">
	let { backend, extensionId = 'llm_chat', version = '', principal = '', isAuthenticated = true }: any = $props();

	interface Message { role: 'user' | 'assistant' | 'system'; content: string; }

	let messages: Message[] = $state([]);
	let input = $state('');
	let loading = $state(false);
	let error = $state('');
	let useRealmData = $state(false);
	let realmData: any = $state(null);

	async function callExtAsync(fn: string, args: string = '{}') {
		const raw = await backend.extension_async_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function callExtSync(fn: string, args: string = '{}', ext = extensionId) {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: ext, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadRealmData() {
		try {
			const res = await callExtAsync('get_realm_data', '{}');
			realmData = res?.data ?? res;
		} catch {}
	}

	async function sendMessage() {
		const text = input.trim();
		if (!text || loading) return;

		messages = [...messages, { role: 'user', content: text }];
		input = '';
		loading = true;
		error = '';

		try {
			if (useRealmData && !realmData) {
				await loadRealmData();
			}

			const context = useRealmData && realmData ? JSON.stringify(realmData) : '';
			const res = await callExtAsync('chat', JSON.stringify({
				message: text,
				history: messages.slice(0, -1).map((m) => ({ role: m.role, content: m.content })),
				realm_context: context || undefined,
			}));

			const reply = res?.data?.response ?? res?.response ?? res?.data ?? JSON.stringify(res);
			messages = [...messages, { role: 'assistant', content: typeof reply === 'string' ? reply : JSON.stringify(reply) }];
		} catch (e: any) {
			error = e?.message || String(e);
			messages = [...messages, { role: 'assistant', content: `Error: ${error}` }];
		} finally {
			loading = false;
		}
	}

	function clearChat() {
		messages = [];
		error = '';
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	}
</script>

<div class="rt-chat">
	<div class="header">
		<h2>LLM Chat</h2>
		<span class="badge">v{version}</span>
		<label class="toggle">
			<input type="checkbox" bind:checked={useRealmData} />
			<span>Include realm context</span>
		</label>
		<button class="clear" onclick={clearChat}>Clear</button>
	</div>

	<div class="messages">
		{#if messages.length === 0}
			<div class="empty">Start a conversation…</div>
		{:else}
			{#each messages as msg, i (i)}
				<div class="msg" class:user={msg.role === 'user'} class:assistant={msg.role === 'assistant'}>
					<span class="role">{msg.role === 'user' ? 'You' : 'Assistant'}</span>
					<div class="content">{msg.content}</div>
				</div>
			{/each}
			{#if loading}
				<div class="msg assistant">
					<span class="role">Assistant</span>
					<div class="content typing">Thinking…</div>
				</div>
			{/if}
		{/if}
	</div>

	<div class="input-row">
		<textarea
			bind:value={input}
			onkeydown={handleKeydown}
			placeholder="Type a message… (Enter to send)"
			rows="2"
			disabled={loading}
		></textarea>
		<button class="send" onclick={sendMessage} disabled={loading || !input.trim()}>
			{loading ? '…' : 'Send'}
		</button>
	</div>
</div>

<style>
	.rt-chat { font-family: system-ui, -apple-system, sans-serif; max-width: 720px; margin: 0 auto; padding: 1.5rem; display: flex; flex-direction: column; height: 100%; min-height: 400px; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.toggle { display: flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; color: #6b7280; cursor: pointer; margin-left: auto; }
	.toggle input { accent-color: #4f46e5; }
	.clear { padding: 0.25rem 0.5rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; font-size: 0.75rem; }
	.messages { flex: 1; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; margin-bottom: 1rem; background: #fafafa; min-height: 200px; max-height: 500px; }
	.empty { color: #9ca3af; text-align: center; padding: 3rem; }
	.msg { margin-bottom: 0.75rem; }
	.msg.user { text-align: right; }
	.role { font-size: 0.7rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; }
	.content { display: inline-block; max-width: 80%; padding: 0.5rem 0.75rem; border-radius: 0.75rem; font-size: 0.85rem; line-height: 1.5; text-align: left; white-space: pre-wrap; word-break: break-word; }
	.user .content { background: #4f46e5; color: #fff; border-bottom-right-radius: 0.25rem; }
	.assistant .content { background: #fff; border: 1px solid #e5e7eb; border-bottom-left-radius: 0.25rem; }
	.typing { color: #9ca3af; font-style: italic; }
	.input-row { display: flex; gap: 0.5rem; }
	textarea { flex: 1; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.85rem; font-family: inherit; resize: none; }
	textarea:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 2px rgba(99,102,241,0.2); }
	.send { padding: 0.5rem 1rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.85rem; white-space: nowrap; align-self: flex-end; }
	.send:hover:not(:disabled) { background: #4338ca; }
	.send:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
