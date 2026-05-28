<script lang="ts">
	import { onMount, tick } from 'svelte';

	let { ctx }: { ctx: any } = $props();

	interface ChatMessage {
		text: string;
		isUser: boolean;
	}

	interface AssistantPersona {
		id: string;
		name: string;
		emoji: string;
		description: string;
		type: string;
	}

	let messages: ChatMessage[] = $state([]);
	let newMessage = $state('');
	let isLoading = $state(false);
	let error = $state('');
	let accessDeniedOp = $state('');
	let messagesContainer: HTMLElement | undefined = $state();
	let suggestions: string[] = $state([]);
	let isLoadingSuggestions = $state(false);
	let textareaElement: HTMLTextAreaElement | undefined = $state();

	let availableAssistants: AssistantPersona[] = $state([]);
	let selectedAssistant: AssistantPersona | null = $state(null);
	let isLoadingAssistants = $state(false);

	let pendingExplainCodexId: string | null = $state(null);
	let isExplainMode = $state(false);

	const PRODUCTION_API_HOST = 'https://geister-api.realmsgos.dev/';
	let API_URL = `${PRODUCTION_API_HOST}api/ask`;
	let SUGGESTIONS_API_URL = `${PRODUCTION_API_HOST}suggestions`;
	let ASSISTANTS_API_URL = `${PRODUCTION_API_HOST}api/personas/assistants`;

	let REALM_CANISTER_ID = '';
	let userPrincipal = '';

	let unsubPrincipal: (() => void) | undefined;
	let unsubAuth: (() => void) | undefined;
	let isAuthenticated = $state(false);

	onMount(async () => {
		REALM_CANISTER_ID =
			ctx.config?.canisterId ||
			(globalThis as any).__CANISTER_IDS?.realm_backend ||
			'';
		unsubPrincipal = ctx.principal?.subscribe?.((v: string) => {
			userPrincipal = v || '';
		});
		unsubAuth = ctx.isAuthenticated?.subscribe?.((v: boolean) => {
			isAuthenticated = v;
		});

		handleExplainParam();
		await fetchAssistants();
		if (!isExplainMode) {
			await fetchSuggestions();
		}
	});

	function handleExplainParam() {
		try {
			const params = new URLSearchParams(window.location.search);
			const explain = params.get('explain');
			if (!explain) return;

			const [objType, objId] = explain.split(':');
			if (objType === 'codex' && objId) {
				isExplainMode = true;
			ctx.backend
				.extension_sync_call('codex_viewer', 'get_codex_details', JSON.stringify({ codex_id: objId }))
					.then((response: any) => {
						if (response.success) {
							const data =
								typeof response.response === 'string'
									? JSON.parse(response.response)
									: response.response;
							const codexName = data.codex?.name || `codex_${objId}`;
							const codexLink = `/extensions/codex_viewer/${objId}`;
							pendingExplainCodexId = objId;
							newMessage = `Please explain this codex: [${codexName}](${codexLink})`;
							setTimeout(() => sendMessage(), 300);
						}
					})
					.catch((err: any) => {
						console.error('Failed to fetch codex for explanation:', err);
						isExplainMode = false;
					});
			} else if (objType === 'financial_statements') {
				isExplainMode = true;
				const context = params.get('context') || '';
				newMessage = `Please explain the following financial statements of this realm in plain language. Highlight key insights, any concerns, and the overall financial health:\n\n${context}`;
				setTimeout(() => sendMessage(), 300);
			}
		} catch (err) {
			console.error('Error handling explain param:', err);
		}
	}

	$effect(() => {
		messages;
		tick().then(scrollToBottom);
	});

	function scrollToBottom() {
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}
	}

	async function fetchAssistants(): Promise<void> {
		if (isLoadingAssistants) return;
		isLoadingAssistants = true;
		try {
			const response = await fetch(ASSISTANTS_API_URL, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const data = await response.json();
			if (data.assistants && Array.isArray(data.assistants)) {
				availableAssistants = data.assistants;
				if (availableAssistants.length > 0 && !selectedAssistant) {
					selectedAssistant = availableAssistants[0];
				}
			}
		} catch (err) {
			console.error('Error fetching assistants:', err);
		} finally {
			isLoadingAssistants = false;
		}
	}

	async function fetchSuggestions(): Promise<void> {
		if (isLoadingSuggestions) return;
		isLoadingSuggestions = true;
		try {
			const params = new URLSearchParams({
				user_principal: userPrincipal || '',
				realm_principal: REALM_CANISTER_ID || '',
				persona: selectedAssistant?.id || 'ashoka',
			});
			const response = await fetch(`${SUGGESTIONS_API_URL}?${params.toString()}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const data = await response.json();
			if (data.suggestions && Array.isArray(data.suggestions)) {
				suggestions = data.suggestions;
			}
		} catch (err) {
			console.error('Error fetching suggestions:', err);
		} finally {
			isLoadingSuggestions = false;
		}
	}

	async function sendMessage(): Promise<void> {
		if (!newMessage.trim()) return;

		error = '';
		accessDeniedOp = '';
		messages = [...messages, { text: newMessage, isUser: true }];
		const messageToSend = newMessage;
		newMessage = '';
		isLoading = true;

		try {
			const payload: Record<string, any> = {
				question: messageToSend,
				realm_principal: REALM_CANISTER_ID,
				user_principal: userPrincipal,
				stream: true,
				persona: selectedAssistant?.id || 'ashoka',
			};

			if (pendingExplainCodexId) {
				payload.explain_codex_id = pendingExplainCodexId;
				pendingExplainCodexId = null;
			}

			const response = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
				body: JSON.stringify(payload),
			});

			if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

			const reader = response.body?.getReader();
			if (!reader) throw new Error('Response body is not readable');

			const decoder = new TextDecoder();
			let accumulatedText = '';

			try {
				while (true) {
					const { done, value } = await reader.read();
					if (done) break;

					const chunk = decoder.decode(value, { stream: true });
					const lines = chunk.split('\n');
					for (const line of lines) {
						if (line.startsWith('data: ')) {
							const pl = line.slice(6);
							if (pl === '[DONE]') continue;
							try {
								const parsed = JSON.parse(pl);
								if (parsed.text) accumulatedText += parsed.text;
							} catch {
								accumulatedText += pl;
							}
						} else if (line.trim() && !line.startsWith(':')) {
							accumulatedText += line;
						}
					}

					if (
						accumulatedText &&
						(messages.length === 0 || messages[messages.length - 1].isUser)
					) {
						messages = [...messages, { text: accumulatedText, isUser: false }];
					} else if (accumulatedText) {
						messages = messages.map((msg, index) =>
							index === messages.length - 1 && !msg.isUser
								? { ...msg, text: accumulatedText }
								: msg,
						);
					}
				}
			} finally {
				reader.releaseLock();
			}

			if (!accumulatedText.trim()) {
				if (messages.length > 0 && !messages[messages.length - 1].isUser) {
					messages = messages.map((msg, index) =>
						index === messages.length - 1
							? { ...msg, text: 'No response from LLM' }
							: msg,
					);
				} else {
					messages = [...messages, { text: 'No response from LLM', isUser: false }];
				}
			}

			isLoading = false;
			await fetchSuggestions();
		} catch (err: any) {
			console.error('Error calling LLM:', err);
			if (err instanceof TypeError || (err instanceof Error && err.message.includes('fetch'))) {
				error = 'Connection error. Please check your network and try again.';
			} else if (err instanceof Error && err.message.includes('HTTP error')) {
				error = 'Server error. Please try again later.';
			} else {
				error = 'Failed to get a response. Please try again.';
			}
			if (messages.length > 0 && !messages[messages.length - 1].isUser) {
				messages = messages.slice(0, -1);
			}
		} finally {
			isLoading = false;
		}
	}

	function dismissError() {
		error = '';
		accessDeniedOp = '';
	}

	function renderMarkdown(text: string): string {
		let html = text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

		html = html
			.replace(/```([^`]*?)```/gs, '<pre class="bg-gray-100 dark:bg-gray-900 rounded-md p-3 my-2 overflow-x-auto text-xs font-mono"><code>$1</code></pre>')
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*(.+?)\*/g, '<em>$1</em>')
			.replace(/`(.+?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>')
			.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800">$1</a>')
			.replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-3 mb-1">$1</h3>')
			.replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold mt-3 mb-1">$1</h2>')
			.replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold mt-3 mb-1">$1</h1>')
			.replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
			.replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal">$2</li>')
			.replace(/\n{2,}/g, '<br/><br/>')
			.replace(/\n/g, '<br/>');

		return html;
	}

	function autoResizeTextarea(): void {
		if (textareaElement) {
			textareaElement.style.height = 'auto';
			const newHeight = Math.max(40, Math.min(textareaElement.scrollHeight, 120));
			textareaElement.style.height = newHeight + 'px';
		}
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
		setTimeout(autoResizeTextarea, 0);
	}

	function handleSuggestionClick(suggestion: string): void {
		newMessage = suggestion;
		sendMessage();
	}

	function selectAssistant(assistant: AssistantPersona) {
		selectedAssistant = assistant;
		messages = [];
		fetchSuggestions();
	}

	$effect(() => {
		return () => {
			unsubPrincipal?.();
			unsubAuth?.();
		};
	});
</script>

<div class="llm-chat-root">
	<!-- Assistant Selector -->
	{#if availableAssistants.length > 1}
		<div class="assistant-selector">
			{#each availableAssistants as assistant}
				<button
					class="assistant-btn {selectedAssistant?.id === assistant.id ? 'active' : ''}"
					onclick={() => selectAssistant(assistant)}
					title={assistant.description}
				>
					<span class="text-lg">{assistant.emoji}</span>
					<span class="text-sm font-medium">{assistant.name}</span>
				</button>
			{/each}
		</div>
	{/if}

	<!-- Messages area (scrollable) -->
	<div
		bind:this={messagesContainer}
		class="messages-area"
	>
		{#if messages.length === 0 && !isExplainMode}
			<div class="welcome-message">
				<div class="bubble assistant-bubble">
					{#if isAuthenticated}
						<p>Welcome back! I'm your AI assistant. Ask me anything about this realm — governance, proposals, codices, or general questions.</p>
					{:else}
						<p>Hello! I'm the realm's AI assistant. Feel free to ask me about this realm, its governance structure, or anything you'd like to know.</p>
					{/if}
				</div>
			</div>
		{:else}
			{#each messages as message}
				{#if message.isUser}
					<div class="message-row user-row">
						<div class="bubble user-bubble">
							{message.text}
						</div>
					</div>
				{:else}
					<div class="message-row assistant-row">
						<div class="bubble assistant-bubble markdown-content">
							{@html renderMarkdown(message.text)}
						</div>
					</div>
				{/if}
			{/each}

			{#if isLoading}
				<div class="message-row assistant-row">
					<div class="bubble assistant-bubble">
						<div class="typing-animation">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			{/if}

			{#if accessDeniedOp}
				{#if ctx.ui?.AccessDenied}
					<svelte:component this={ctx.ui.AccessDenied} operation={accessDeniedOp} />
				{:else}
					<p class="text-sm text-gray-500">You need additional permissions to view this page.</p>
				{/if}
			{:else if error}
				<div class="error-banner">
					<span>{error}</span>
					<button class="error-dismiss" onclick={dismissError} title="Dismiss">&times;</button>
				</div>
			{/if}
		{/if}
	</div>

	<!-- Input section (always visible at bottom) -->
	<div class="input-section">
		{#if suggestions.length > 0 || isLoadingSuggestions}
			<div class="suggestions">
				{#if isLoadingSuggestions}
					<span class="suggestion-loading">Loading suggestions...</span>
				{:else}
					{#each suggestions as suggestion}
						<button
							class="suggestion-chip"
							onclick={() => handleSuggestionClick(suggestion)}
						>
							{suggestion}
						</button>
					{/each}
				{/if}
			</div>
		{/if}

		<div class="input-row">
			<textarea
				bind:this={textareaElement}
				class="chat-input"
				placeholder="Type a message..."
				rows="1"
				bind:value={newMessage}
				onkeydown={handleKeydown}
				oninput={() => autoResizeTextarea()}
			></textarea>
			<button
				class="send-btn"
				disabled={isLoading || !newMessage.trim()}
				onclick={() => sendMessage()}
				title="Send message (Enter)"
			>
				{#if isLoading}
					<svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
					</svg>
				{:else}
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
						<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
</div>

<style>
	.llm-chat-root {
		display: flex;
		flex-direction: column;
		height: calc(100dvh - 102px);
		max-height: calc(100dvh - 102px);
		min-height: 300px;
		overflow: hidden;
		background: transparent;
	}

	/* Assistant selector */
	.assistant-selector {
		display: flex;
		gap: 8px;
		padding: 10px 0;
		border-bottom: 1px solid #e5e7eb;
		flex-shrink: 0;
		overflow-x: auto;
	}

	.assistant-btn {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 6px 12px;
		border-radius: 8px;
		border: 1px solid #e5e7eb;
		background: #fff;
		cursor: pointer;
		transition: all 0.15s ease;
		white-space: nowrap;
	}

	.assistant-btn:hover {
		background: #f3f4f6;
		border-color: #d1d5db;
	}

	.assistant-btn.active {
		border-color: #6366f1;
		background: #eef2ff;
		color: #4338ca;
	}

	/* Messages area */
	.messages-area {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		padding: 16px 0;
		background: transparent;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	/* Welcome message */
	.welcome-message {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		margin-top: 20px;
	}

	/* Message rows */
	.message-row {
		display: flex;
		gap: 10px;
		max-width: 100%;
	}

	.user-row {
		justify-content: flex-end;
	}

	.assistant-row {
		justify-content: flex-start;
		align-items: flex-start;
	}

	/* Avatar */
	.avatar {
		flex-shrink: 0;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #fff;
		border: 2px solid #e5e7eb;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
	}

	.avatar.small {
		width: 32px;
		height: 32px;
		font-size: 16px;
	}

	/* Bubbles */
	.bubble {
		padding: 12px 16px;
		border-radius: 16px;
		line-height: 1.5;
		font-size: 14px;
		max-width: 80%;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	.user-bubble {
		background: #4f46e5;
		color: #fff;
		border-bottom-right-radius: 4px;
		box-shadow: 0 1px 3px rgba(79, 70, 229, 0.3);
		white-space: pre-wrap;
	}

	.assistant-bubble {
		background: #fff;
		color: #1f2937;
		border: 1px solid #e5e7eb;
		border-bottom-left-radius: 4px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}

	/* Markdown content inside assistant bubbles */
	.markdown-content :global(h1),
	.markdown-content :global(h2),
	.markdown-content :global(h3) {
		margin-top: 12px;
		margin-bottom: 4px;
		font-weight: 600;
	}
	.markdown-content :global(h1) { font-size: 1.125rem; }
	.markdown-content :global(h2) { font-size: 1rem; }
	.markdown-content :global(h3) { font-size: 0.9375rem; }

	.markdown-content :global(li) {
		margin-left: 16px;
		margin-bottom: 2px;
	}

	.markdown-content :global(pre) {
		margin: 8px 0;
		border-radius: 6px;
	}

	.markdown-content :global(strong) {
		font-weight: 600;
	}

	.markdown-content :global(a) {
		color: #4f46e5;
		text-decoration: underline;
	}

	/* Error banner */
	.error-banner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 8px 14px;
		border-radius: 8px;
		background: #fef2f2;
		border: 1px solid #fecaca;
		color: #991b1b;
		font-size: 13px;
	}

	.error-dismiss {
		background: none;
		border: none;
		font-size: 18px;
		cursor: pointer;
		color: #991b1b;
		padding: 0 4px;
		line-height: 1;
		opacity: 0.7;
	}

	.error-dismiss:hover {
		opacity: 1;
	}

	/* Typing animation */
	.typing-animation {
		display: flex;
		align-items: center;
		gap: 4px;
		padding: 4px 0;
	}

	.typing-animation span {
		width: 7px;
		height: 7px;
		background-color: #9ca3af;
		border-radius: 50%;
		animation: typing 1.4s infinite ease-in-out;
	}

	.typing-animation span:nth-child(1) { animation-delay: 0s; }
	.typing-animation span:nth-child(2) { animation-delay: 0.2s; }
	.typing-animation span:nth-child(3) { animation-delay: 0.4s; }

	@keyframes typing {
		0%, 60%, 100% {
			transform: translateY(0);
			opacity: 0.4;
		}
		30% {
			transform: translateY(-6px);
			opacity: 1;
		}
	}

	/* Input section */
	.input-section {
		flex-shrink: 0;
		padding: 12px 0;
		border-top: 1px solid #e5e7eb;
		background: transparent;
	}

	.suggestions {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 10px;
		justify-content: center;
	}

	.suggestion-loading {
		font-size: 12px;
		color: #9ca3af;
	}

	.suggestion-chip {
		padding: 5px 12px;
		font-size: 12px;
		border-radius: 16px;
		border: 1px solid #e5e7eb;
		background: #f9fafb;
		color: #4b5563;
		cursor: pointer;
		transition: all 0.15s ease;
		white-space: nowrap;
	}

	.suggestion-chip:hover {
		background: #eef2ff;
		border-color: #c7d2fe;
		color: #4338ca;
	}

	.input-row {
		display: flex;
		gap: 8px;
		align-items: flex-end;
	}

	.chat-input {
		flex: 1;
		resize: none;
		padding: 10px 14px;
		border-radius: 12px;
		border: 1px solid #d1d5db;
		font-size: 14px;
		line-height: 1.4;
		min-height: 42px;
		max-height: 120px;
		overflow-y: auto;
		transition: border-color 0.15s ease, box-shadow 0.15s ease;
		outline: none;
	}

	.chat-input:focus {
		border-color: #6366f1;
		box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
	}

	.chat-input::placeholder {
		color: #9ca3af;
	}

	.send-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: 12px;
		border: none;
		background: #4f46e5;
		color: #fff;
		cursor: pointer;
		transition: background 0.15s ease, opacity 0.15s ease;
		flex-shrink: 0;
	}

	.send-btn:hover:not(:disabled) {
		background: #4338ca;
	}

	.send-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
</style>
