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
		REALM_CANISTER_ID = ctx.config?.canisterId || '';
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
					.extension_sync_call({
						extension_name: 'codex_viewer',
						function_name: 'get_codex_details',
						args: JSON.stringify({ codex_id: objId }),
					})
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

		messages = [...messages, { text: newMessage, isUser: true }];
		const messageToSend = newMessage;
		newMessage = '';
		isLoading = true;
		error = '';

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

	function renderMarkdown(text: string): string {
		return text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*(.+?)\*/g, '<em>$1</em>')
			.replace(/`(.+?)`/g, '<code>$1</code>')
			.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 underline">$1</a>')
			.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
			.replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold mt-4 mb-2">$1</h2>')
			.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
			.replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
			.replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal">$2</li>')
			.replace(/\n{2,}/g, '</p><p class="my-2">')
			.replace(/\n/g, '<br/>')
			.replace(/^/, '<p class="my-2">')
			.replace(/$/, '</p>');
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

<div class="w-full flex flex-col max-w-none" style="height: calc(100vh - 80px);">
	<h2 class="text-2xl font-bold text-gray-900 mb-6 flex-shrink-0">AI Chat</h2>

	<div class="w-full flex flex-col flex-grow min-h-0">
		<!-- Assistant Selector -->
		{#if availableAssistants.length > 1}
			<div
				class="flex gap-2 px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex-shrink-0"
			>
				{#each availableAssistants as assistant}
					<button
						class="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-200
							{selectedAssistant?.id === assistant.id
							? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
							: 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'}"
						onclick={() => selectAssistant(assistant)}
						title={assistant.description}
					>
						<span class="text-lg">{assistant.emoji}</span>
						<span class="text-sm font-medium">{assistant.name}</span>
					</button>
				{/each}
			</div>
		{/if}

		<!-- Messages Container -->
		<div
			class="w-full flex-grow flex flex-col m-0 p-0 rounded-none border border-gray-200 bg-white max-w-none min-h-0"
		>
			<div
				bind:this={messagesContainer}
				class="flex-grow overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800"
				style="min-height: 300px;"
			>
				{#if messages.length === 0 && !isExplainMode}
					<div class="flex justify-start mb-6 mt-8">
						<div class="flex items-start space-x-4 max-w-[85%]">
							<div
								class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-lg flex items-center justify-center bg-white dark:bg-gray-700"
							>
								{#if selectedAssistant}
									<span class="text-2xl">{selectedAssistant.emoji}</span>
								{:else}
									<span class="text-2xl">🤖</span>
								{/if}
							</div>
							<div class="flex-1">
								<div
									class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-md px-6 py-5 shadow-lg"
								>
									<div
										class="text-sm text-gray-600 dark:text-gray-400 space-y-3 leading-relaxed"
									>
										{#if isAuthenticated}
											<p>
												Welcome back! I'm your AI assistant. Ask me anything about this realm
												— governance, proposals, codices, or general questions.
											</p>
										{:else}
											<p>
												Hello! I'm the realm's AI assistant. Feel free to ask me about this
												realm, its governance structure, or anything you'd like to know.
											</p>
										{/if}
									</div>
								</div>
							</div>
						</div>
					</div>
				{:else}
					{#each messages as message}
						<div class="mb-6 {message.isUser ? 'flex justify-end' : 'flex justify-start'}">
							<div class="flex items-start space-x-4 max-w-[85%]">
								{#if !message.isUser}
									<div
										class="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-md flex items-center justify-center bg-white dark:bg-gray-700"
									>
										{#if selectedAssistant}
											<span class="text-xl">{selectedAssistant.emoji}</span>
										{:else}
											<span class="text-xl">🤖</span>
										{/if}
									</div>
								{/if}
								<div class="flex-1">
									{#if message.isUser}
										<div
											class="bg-indigo-600 text-white rounded-2xl rounded-br-md px-5 py-4 shadow-lg"
										>
											<div
												class="text-sm leading-relaxed whitespace-pre-wrap font-sans m-0"
											>
												{message.text}
											</div>
										</div>
									{:else}
										<div
											class="markdown-content prose prose-sm max-w-none dark:prose-invert"
										>
											{@html renderMarkdown(message.text)}
										</div>
									{/if}
								</div>
							</div>
						</div>
					{/each}

					{#if isLoading}
						<div class="mb-6 flex justify-start">
							<div class="flex items-start space-x-4 max-w-[85%]">
								<div
									class="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-md flex items-center justify-center bg-white dark:bg-gray-700"
								>
									{#if selectedAssistant}
										<span class="text-xl">{selectedAssistant.emoji}</span>
									{:else}
										<span class="text-xl">🤖</span>
									{/if}
								</div>
								<div class="flex-1">
									<div
										class="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
									>
										<div class="typing-animation">
											<span></span>
											<span></span>
											<span></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/if}

					{#if error}
						<div class="mb-4">
							<div
								class="inline-block rounded-lg px-4 py-2 bg-red-50 border border-red-200 text-red-800"
							>
								{error}
							</div>
						</div>
					{/if}
				{/if}
			</div>
		</div>

		<!-- Input section -->
		<div
			class="flex-shrink-0 flex flex-col p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
		>
			<!-- Suggestions -->
			<div class="mb-3 px-1">
				<div class="flex flex-wrap gap-2 justify-center">
					{#if isLoadingSuggestions}
						<div class="flex items-center gap-2 text-gray-500 dark:text-gray-400">
							<svg
								class="animate-spin h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
								></path>
							</svg>
							<span class="text-xs">Loading suggestions...</span>
						</div>
					{:else if suggestions.length > 0}
						{#each suggestions as suggestion}
							<button
								class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
								onclick={() => handleSuggestionClick(suggestion)}
							>
								{suggestion}
							</button>
						{/each}
					{/if}
				</div>
			</div>

			<!-- Message input -->
			<div class="flex gap-2">
				<textarea
					bind:this={textareaElement}
					class="flex-grow resize-none px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					placeholder="Type a message..."
					rows="1"
					bind:value={newMessage}
					onkeydown={handleKeydown}
					oninput={() => autoResizeTextarea()}
					style="min-height: 40px; max-height: 120px; overflow-y: auto; height: 40px;"
				></textarea>
				<button
					class="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center min-w-[50px]"
					disabled={isLoading || !newMessage.trim()}
					onclick={() => sendMessage()}
					title="Send message (Enter)"
				>
					{#if isLoading}
						<svg
							class="animate-spin h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
							></path>
						</svg>
					{:else}
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.typing-animation {
		display: flex;
		align-items: center;
		gap: 2px;
	}

	.typing-animation span {
		width: 6px;
		height: 6px;
		background-color: #9ca3af;
		border-radius: 50%;
		animation: typing 1.4s infinite ease-in-out;
	}

	.typing-animation span:nth-child(1) {
		animation-delay: 0s;
	}

	.typing-animation span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.typing-animation span:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes typing {
		0%,
		60%,
		100% {
			transform: translateY(0);
			opacity: 0.4;
		}
		30% {
			transform: translateY(-10px);
			opacity: 1;
		}
	}
</style>
