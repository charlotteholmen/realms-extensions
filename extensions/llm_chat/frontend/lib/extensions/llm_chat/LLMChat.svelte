<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { Card, Button, Textarea, Spinner, Toggle } from 'flowbite-svelte';
	import { PaperPlaneSolid, MessagesSolid, DatabaseSolid } from 'flowbite-svelte-icons';
	import SvelteMarkdown from 'svelte-markdown';
	// @ts-ignore
	import { backend } from '$lib/canisters';
	// @ts-ignore
	import { canisterId as backendCanisterId } from '$lib/declarations/realm_backend';
	import { principal, isAuthenticated } from '$lib/stores/auth';
	import { _ } from 'svelte-i18n';
	import SafeText from '$lib/components/SafeText.svelte';
	import { styles, cn } from '../../theme/utilities';

	// Define message interface to fix TypeScript errors
	interface ChatMessage {
		text: string;
		isUser: boolean;
	}

	// Interface for the payload sent to the LLM API
	interface LLMPayload {
		message: string;
		max_tokens: number;
		realm_data?: any;
	}

	// Interface for assistant personas fetched from Geister API
	interface AssistantPersona {
		id: string;
		name: string;
		emoji: string;
		description: string;
		type: string;
	}

	 
	// State variables
	let messages: ChatMessage[] = [];
	let newMessage = '';
	let isLoading = false;
	let error = '';
	let messagesContainer: HTMLElement;
	let includeRealmData = true;
	let realmData: any = null;
	let isLoadingRealmData = false;
	let userPrincipal = $principal || '';
	let suggestions: string[] = [];
	let isLoadingSuggestions = false;
	let textareaElement: HTMLTextAreaElement;

	// Assistant persona state
	let availableAssistants: AssistantPersona[] = [];
	let selectedAssistant: AssistantPersona | null = null;
	let isLoadingAssistants = false;
	
	// LLM API configuration

	// const isLocalhost = window.location.hostname === 'localhost' || 
	// 		window.location.hostname === '127.0.0.1' ||
	// 		window.location.hostname.includes('.localhost');

	const isLocalhost = false;
	console.log("isLocalhost", isLocalhost);
	
	// Production API host via Cloudflare Tunnel
	const PRODUCTION_API_HOST = 'https://geister-api.realmsgos.dev/';
	
	// Determine API URL based on environment
	let API_URL = '';
	let SUGGESTIONS_API_URL = '';
	let ASSISTANTS_API_URL = '';
	
	// Initialize API URL
	const initializeApiUrl = () => {
		if (isLocalhost) {
			API_URL = "http://localhost:5000/api/ask";
			SUGGESTIONS_API_URL = "http://localhost:5000/suggestions";
			ASSISTANTS_API_URL = "http://localhost:5000/api/personas/assistants";
		} else {
			API_URL = `${PRODUCTION_API_HOST}api/ask`;
			SUGGESTIONS_API_URL = `${PRODUCTION_API_HOST}suggestions`;
			ASSISTANTS_API_URL = `${PRODUCTION_API_HOST}api/personas/assistants`;
		}
		console.log("API_URL set to:", API_URL);
		console.log("SUGGESTIONS_API_URL set to:", SUGGESTIONS_API_URL);
	};
	
	// Get the canister ID dynamically
	let REALM_CANISTER_ID = "";
	
	onMount(async () => {
		try {
			// Try to get canister ID from direct import
			REALM_CANISTER_ID = backendCanisterId.toString();
			console.log("Got canister ID from direct import:", REALM_CANISTER_ID);
		} catch (err) {
			console.error("Error getting canister ID from direct import:", err);
		}
		
		// Initialize API URL
		initializeApiUrl();
		
		// Fetch available assistant personas
		await fetchAssistants();
		
		// Fetch initial suggestions
		await fetchSuggestions();
		
		// Initialize textarea auto-resize
		setTimeout(() => {
			if (textareaElement) {
				autoResizeTextarea();
			}
		}, 100);
	});

	// Auto-scroll to bottom of messages when content changes
	afterUpdate(() => {
		scrollToBottom();
	});

	// Watch for message changes to trigger scroll
	$: {
		messages;
		setTimeout(scrollToBottom, 100); // Delay slightly to ensure rendering is complete
	}

	// Function to scroll to bottom of messages container
	function scrollToBottom() {
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}
	}

	// Function to fetch available assistant personas from Geister API
	async function fetchAssistants(): Promise<void> {
		if (isLoadingAssistants || !ASSISTANTS_API_URL) return;
		isLoadingAssistants = true;
		try {
			const response = await fetch(ASSISTANTS_API_URL, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const data = await response.json();
			if (data.assistants && Array.isArray(data.assistants)) {
				availableAssistants = data.assistants;
				if (availableAssistants.length > 0 && !selectedAssistant) {
					selectedAssistant = availableAssistants[0];
				}
				console.log("Fetched assistants:", availableAssistants);
			}
		} catch (err) {
			console.error("Error fetching assistants:", err);
		} finally {
			isLoadingAssistants = false;
		}
	}

	// Function to fetch suggestions from API
	async function fetchSuggestions(): Promise<void> {
		if (isLoadingSuggestions || !SUGGESTIONS_API_URL) return;
		
		isLoadingSuggestions = true;
		try {
			// Build URL with query parameters for contextual suggestions
			const params = new URLSearchParams({
				user_principal: userPrincipal || '',
				realm_principal: REALM_CANISTER_ID || '',
				persona: selectedAssistant?.id || 'ashoka'
			});
			const urlWithParams = `${SUGGESTIONS_API_URL}?${params.toString()}`;
			
			console.log("Fetching suggestions from:", urlWithParams);
			const response = await fetch(urlWithParams, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			
			const data = await response.json();
			if (data.suggestions && Array.isArray(data.suggestions)) {
				suggestions = data.suggestions;
				console.log("Fetched contextual suggestions:", suggestions);
			} else {
				console.warn("Invalid suggestions response format:", data);
			}
		} catch (err) {
			console.error("Error fetching suggestions:", err);
			// Keep existing suggestions on error
		} finally {
			isLoadingSuggestions = false;
		}
	}

	// Function to fetch realm data
	async function fetchRealmData(): Promise<void> {
		if (isLoadingRealmData) return;
		
		isLoadingRealmData = true;
		try {
			// Call the backend extension to get realm data
			const response = await backend.extension_async_call({
				extension_name: "llm_chat",
				function_name: "get_realm_data",
				args: ""
			});
			
			realmData = response;
			console.log("Realm data fetched:", realmData);
		} catch (err) {
			console.error("Error fetching realm data:", err);
			// Don't show error for realm data fetch - it's not critical
		} finally {
			isLoadingRealmData = false;
		}
	}

	// Function to send a message to the LLM
	async function sendMessage(): Promise<void> {
		if (!newMessage.trim()) return;
		
		// Add user message to the chat
		messages = [...messages, { text: newMessage, isUser: true }];
		
		// Clear input and show loading state
		const messageToSend = newMessage;
		newMessage = '';
		isLoading = true;
		error = '';
		
		// We'll add the AI message when we start receiving content
		
		try {
			const payload = {
				question: messageToSend,
				realm_principal: REALM_CANISTER_ID,
				user_principal: userPrincipal,
				stream: true,
				persona: selectedAssistant?.id || 'ashoka'
			};

			console.log("Sending payload to LLM API:", payload);
			
			// Make streaming HTTP request to the LLM API
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'text/event-stream'
				},
				body: JSON.stringify(payload)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			// Handle streaming response
			const reader = response.body?.getReader();
			if (!reader) {
				throw new Error('Response body is not readable');
			}

			const decoder = new TextDecoder();
			let accumulatedText = '';

			try {
				while (true) {
					const { done, value } = await reader.read();
					
					if (done) {
						break;
					}

        // Decode the chunk
        const chunk = decoder.decode(value, { stream: true });
        console.log('Received chunk:', chunk);
        
        // Since your server sends plain text, just accumulate it directly
        accumulatedText += chunk;
        
        // Add or update the AI message
        if (messages.length === 0 || messages[messages.length - 1].isUser) {
          // Add new AI message if the last message is from user or no messages
          messages = [...messages, { text: accumulatedText, isUser: false }];
        } else {
          // Update the last AI message
          messages = messages.map((msg, index) => 
            index === messages.length - 1 && !msg.isUser
              ? { ...msg, text: accumulatedText }
              : msg
          );
        }
      }
    } finally {
      reader.releaseLock();
    }

			// Ensure we have some response
			if (!accumulatedText.trim()) {
				if (messages.length > 0 && !messages[messages.length - 1].isUser) {
					messages = messages.map((msg, index) => 
						index === messages.length - 1
							? { ...msg, text: "No response from LLM" }
							: msg
					);
				} else {
					messages = [...messages, { text: "No response from LLM", isUser: false }];
				}
			}
			
			// Clear loading state immediately after response is complete
			isLoading = false;
			
			// Fetch new suggestions after successful response (this can happen in background)
			await fetchSuggestions();

		} catch (err) {
			console.error("Error calling LLM:", err);

			// Determine the type of error and show appropriate i18n message
			if (err instanceof TypeError || (err instanceof Error && err.message.includes('fetch'))) {
				error = $_('extensions.llm_chat.error_connection');
			} else if (err instanceof Error && err.message.includes('HTTP error')) {
				error = $_('extensions.llm_chat.error_server');
			} else {
				error = $_('extensions.llm_chat.error_response');
			}
			
			// Remove the AI message if there was an error and it exists
			if (messages.length > 0 && !messages[messages.length - 1].isUser) {
				messages = messages.slice(0, -1);
			}
		} finally {
			isLoading = false;
		}
	}

	// Auto-resize textarea function
	function autoResizeTextarea(): void {
		if (textareaElement) {
			// Reset height to auto to get correct scrollHeight
			textareaElement.style.height = 'auto';
			// Set height based on content, with min and max constraints
			const newHeight = Math.max(40, Math.min(textareaElement.scrollHeight, 120));
			textareaElement.style.height = newHeight + 'px';
			console.log('Auto-resize triggered, new height:', newHeight);
		}
	}

	// Handle Enter key in textarea
	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
		// Auto-resize after key input
		setTimeout(autoResizeTextarea, 0);
	}

	// Handle input changes for auto-resize
	function handleInput(): void {
		console.log('Input event triggered');
		autoResizeTextarea();
	}

	// Watch for newMessage changes to trigger auto-resize
	$: {
		if (newMessage && textareaElement) {
			setTimeout(autoResizeTextarea, 0);
		}
	}

	// Handle suggestion click
	function handleSuggestionClick(suggestion: string): void {
		newMessage = suggestion;
		sendMessage();
	}
</script>

<div class="w-full flex flex-col max-w-none" style="height: calc(100vh - 80px);">
	<h2 class="text-2xl font-bold text-gray-900 mb-6 flex-shrink-0">
		<SafeText key="extensions.llm_chat.title" spinnerSize="sm" />
	</h2>
	
	<div class="w-full flex flex-col flex-grow min-h-0">
		<!-- Assistant Selector -->
		{#if availableAssistants.length > 1}
			<div class="flex gap-2 px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
				{#each availableAssistants as assistant}
					<button
						class="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-200
							{selectedAssistant?.id === assistant.id 
								? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
								: 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'}"
						on:click={() => { selectedAssistant = assistant; messages = []; fetchSuggestions(); }}
						title={assistant.description}
					>
						<span class="text-lg">{assistant.emoji}</span>
						<span class="text-sm font-medium">{assistant.name}</span>
					</button>
				{/each}
			</div>
		{/if}

		<!-- Messages Container -->
		<Card class="w-full flex-grow flex flex-col m-0 p-0 rounded-none border-0 max-w-none min-h-0">
			<div 
				bind:this={messagesContainer}
				class="flex-grow overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800"
				style="min-height: 300px;"
			>
				{#if messages.length === 0}
					<!-- Welcome message with assistant avatar -->
					<div class="flex justify-start mb-6 mt-8">
						<div class="flex items-start space-x-4 max-w-[85%]">
							<!-- Assistant Avatar -->
							<div class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-lg flex items-center justify-center bg-white dark:bg-gray-700">
								{#if selectedAssistant}
									<span class="text-2xl">{selectedAssistant.emoji}</span>
								{:else}
									<img src="/extensions/llm_chat/photos/ashoka.png" alt="AI Assistant" class="w-full h-full object-cover" />
								{/if}
							</div>
							
							<!-- Welcome Chat Bubble -->
							<div class="flex-1">
								<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-md px-6 py-5 shadow-lg">
									{#if $isAuthenticated}
										<div class="text-sm text-gray-600 dark:text-gray-400 space-y-3 leading-relaxed">
											<p><SafeText key="extensions.llm_chat.welcome_authenticated" spinnerSize="xs" /></p>
										</div>
									{:else}
										<div class="text-sm text-gray-600 dark:text-gray-400 space-y-3 leading-relaxed">
											<p><SafeText key="extensions.llm_chat.welcome_visitor" spinnerSize="xs" /></p>
										</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{:else}
					{#each messages as message}
						<div class="mb-6 {message.isUser ? 'flex justify-end' : 'flex justify-start'}">
							<div class="flex items-start space-x-4 max-w-[85%]">
								{#if !message.isUser}
								<!-- AI Assistant Avatar -->
								<div class="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-md flex items-center justify-center bg-white dark:bg-gray-700">
									{#if selectedAssistant}
										<span class="text-xl">{selectedAssistant.emoji}</span>
									{:else}
										<img src="/extensions/llm_chat/photos/ashoka.png" alt="AI Assistant" class="w-full h-full object-cover" />
									{/if}
								</div>
							{/if}
								
								<div class="flex-1">
									{#if message.isUser}
										<!-- User Message -->
										<div class={cn(styles.button.primary(), "rounded-2xl rounded-br-md px-5 py-4 shadow-lg")}>
											<pre class="text-sm leading-relaxed whitespace-pre-wrap font-sans m-0">{message.text}</pre>
										</div>
									{:else}
										<!-- Ashoka AI Message (no bubble, just content) -->
										<div class="markdown-content prose prose-sm max-w-none dark:prose-invert">
											<SvelteMarkdown source={message.text} />
										</div>
									{/if}
								</div>
							</div>
						</div>
					{/each}
					
					{#if isLoading}
						<div class="mb-6 flex justify-start">
							<div class="flex items-start space-x-4 max-w-[85%]">
								<!-- AI Assistant Avatar -->
								<div class="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-md flex items-center justify-center bg-white dark:bg-gray-700">
									{#if selectedAssistant}
										<span class="text-xl">{selectedAssistant.emoji}</span>
									{:else}
										<img src="/extensions/llm_chat/photos/ashoka.png" alt="AI Assistant" class="w-full h-full object-cover" />
									{/if}
								</div>
								<div class="flex-1">
									<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
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
							<div class={cn(styles.alert.error(), "inline-block rounded-lg px-4 py-2")}>
								{error}
							</div>
						</div>
					{/if}
				{/if}
			</div>
		</Card>
		
		<!-- Input section - Fixed at bottom -->
		<div class="flex-shrink-0 flex flex-col p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
				<!-- Question Suggestions -->
				<div class="mb-3 px-1">
					<!-- Mobile: Horizontal scrollable carousel -->
					<div class="md:hidden overflow-x-auto">
						<div class="flex gap-2 pb-2" style="min-width: max-content;">
							{#if isLoadingSuggestions}
								<div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 px-2">
									<Spinner size="4" />
									<span class="text-xs whitespace-nowrap">Loading suggestions...</span>
								</div>
							{:else if suggestions.length > 0}
								{#each suggestions as suggestion}
									<button
										class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
										on:click={() => handleSuggestionClick(suggestion)}
									>
										{suggestion}
									</button>
								{/each}
							{:else}
								<button
									class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
									on:click={() => handleSuggestionClick($_('extensions.llm_chat.suggestion_1'))}
								>
									<SafeText key="extensions.llm_chat.suggestion_1" spinnerSize="xs" />
								</button>
								<button
									class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
									on:click={() => handleSuggestionClick($_('extensions.llm_chat.suggestion_2'))}
								>
									<SafeText key="extensions.llm_chat.suggestion_2" spinnerSize="xs" />
								</button>
								<button
									class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
									on:click={() => handleSuggestionClick($_('extensions.llm_chat.suggestion_3'))}
								>
									<SafeText key="extensions.llm_chat.suggestion_3" spinnerSize="xs" />
								</button>
							{/if}
						</div>
					</div>
					<!-- Desktop: Wrapped layout -->
					<div class="hidden md:flex flex-wrap gap-2 justify-center">
						{#if isLoadingSuggestions}
							<div class="flex items-center gap-2 text-gray-500 dark:text-gray-400">
								<Spinner size="4" />
								<span class="text-xs">Loading suggestions...</span>
							</div>
						{:else if suggestions.length > 0}
							{#each suggestions as suggestion}
								<button
									class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
									on:click={() => handleSuggestionClick(suggestion)}
								>
									{suggestion}
								</button>
							{/each}
						{:else}
							<button
								class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
								on:click={() => handleSuggestionClick($_('extensions.llm_chat.suggestion_1'))}
							>
								<SafeText key="extensions.llm_chat.suggestion_1" spinnerSize="xs" />
							</button>
							<button
								class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
								on:click={() => handleSuggestionClick($_('extensions.llm_chat.suggestion_2'))}
							>
								<SafeText key="extensions.llm_chat.suggestion_2" spinnerSize="xs" />
							</button>
							<button
								class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
								on:click={() => handleSuggestionClick($_('extensions.llm_chat.suggestion_3'))}
							>
								<SafeText key="extensions.llm_chat.suggestion_3" spinnerSize="xs" />
							</button>
						{/if}
					</div>
				</div>
				
				<!-- Message input -->
				<div class="flex gap-2">
					<textarea
						bind:this={textareaElement}
						class={cn(styles.input.default(), "flex-grow resize-none px-4 py-3 rounded-lg")}
						placeholder={$_('extensions.llm_chat.message_placeholder')}
						rows="1"
						bind:value={newMessage}
						on:keydown={handleKeydown}
						on:input={handleInput}
						style="min-height: 40px; max-height: 120px; overflow-y: auto; height: 40px;"
					></textarea>
					<Button 
						color="primary" 
						class={cn(styles.button.primary(), "px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center min-w-[50px]")}
						disabled={isLoading || !newMessage.trim()}
						on:click={sendMessage}
						title="Send message (Enter)"
					>
						{#if isLoading}
							<Spinner class="w-4 h-4" />
						{:else}
							<PaperPlaneSolid class="w-4 h-4" />
						{/if}
					</Button>
				</div>
		</div>
	</div>
</div> 

<style>
	/* Enhanced markdown styling for AI responses */
	.markdown-content :global(p) {
		margin: 0.75rem 0;
		line-height: 1.6;
		color: inherit;
	}
	
	.markdown-content :global(p:first-child) {
		margin-top: 0;
	}
	
	.markdown-content :global(p:last-child) {
		margin-bottom: 0;
	}
	
	.markdown-content :global(h1) {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 1.5rem 0 0.75rem 0;
		color: inherit;
		border-bottom: 2px solid #e5e7eb;
		padding-bottom: 0.5rem;
	}
	
	.markdown-content :global(h2) {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 1.25rem 0 0.5rem 0;
		color: inherit;
	}
	
	.markdown-content :global(h3) {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 1rem 0 0.5rem 0;
		color: inherit;
	}
	
	.markdown-content :global(ul), .markdown-content :global(ol) {
		margin: 0.75rem 0;
		padding-left: 1.5rem;
	}
	
	.markdown-content :global(li) {
		margin: 0.25rem 0;
		line-height: 1.5;
	}
	
	.markdown-content :global(code) {
		background-color: #f3f4f6;
		color: #374151;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
	}
	
	.dark .markdown-content :global(code) {
		background-color: #374151;
		color: #f3f4f6;
	}
	
	.markdown-content :global(pre) {
		background-color: #f8fafc;
		border: 1px solid #e2e8f0;
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 1rem 0;
		overflow-x: auto;
	}
	
	.dark .markdown-content :global(pre) {
		background-color: #1f2937;
		border-color: #374151;
	}
	
	.markdown-content :global(blockquote) {
		border-left: 4px solid #3b82f6;
		padding-left: 1rem;
		margin: 1rem 0;
		font-style: italic;
		color: #6b7280;
	}
	
	.dark .markdown-content :global(blockquote) {
		color: #9ca3af;
	}
	
	.markdown-content :global(strong) {
		font-weight: 600;
	}
	
	.markdown-content :global(em) {
		font-style: italic;
	}
	
	/* Typing animation */
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
		0%, 60%, 100% {
			transform: translateY(0);
			opacity: 0.4;
		}
		30% {
			transform: translateY(-10px);
			opacity: 1;
		}
	}
	
	.markdown-content :global(ul) {
		list-style-type: disc !important;
		margin: 0.5rem 0 !important;
		padding-left: 2rem !important;
	}
	
	.markdown-content :global(ol) {
		list-style-type: decimal !important;
		margin: 0.5rem 0 !important;
		padding-left: 2rem !important;
	}
	
	.markdown-content :global(li) {
		display: list-item !important;
		margin: 0.25rem 0 !important;
	}
	
	.markdown-content :global(p) {
		margin: 0.5rem 0 !important;
	}
	
	.markdown-content :global(code) {
		font-family: monospace;
		background-color: rgba(0, 0, 0, 0.1);
		padding: 0.1rem 0.2rem;
		border-radius: 0.2rem;
	}
	
	.markdown-content :global(pre) {
		background-color: rgba(0, 0, 0, 0.1);
		padding: 0.5rem;
		border-radius: 0.3rem;
		overflow-x: auto;
		margin: 0.5rem 0;
	}
	
	.markdown-content :global(blockquote) {
		border-left: 3px solid #ccc;
		padding-left: 0.8rem;
		margin: 0.5rem 0 0.5rem 0.5rem;
		color: #555;
	}
</style>                                        