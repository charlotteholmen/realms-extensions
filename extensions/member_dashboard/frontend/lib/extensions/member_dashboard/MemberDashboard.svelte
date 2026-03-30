<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Spinner, Alert, Button } from 'flowbite-svelte';
	import { BellOutline, TrashBinOutline, EnvelopeOpenOutline, EnvelopeOutline, EyeOutline, EyeSlashOutline, CheckCircleSolid, CloseCircleSolid } from 'flowbite-svelte-icons';
	import { backend } from '$lib/canisters';
	import { principal, isAuthenticated } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';
	import TaxInformation from './TaxInformation.svelte';
	import PaymentAccounts from './PaymentAccounts.svelte';
	
	// Component state
	let loading = true;
	let error = '';
	let summaryData = null;
	let notifications = [];
	let notificationsLoading = true;
	let citizenshipStatus = null;
	
	// Get greeting based on time of day
	function getGreeting(): string {
		const hour = new Date().getHours();
		if (hour < 12) return 'Good morning';
		if (hour < 18) return 'Good afternoon';
		return 'Good evening';
	}
	
	// Get dashboard summary data for the user
	async function getDashboardSummary() {
		try {
			const callParams = { user_id: $principal || 'demo-user' };
			const response = await backend.extension_sync_call({
				extension_name: "member_dashboard",
				function_name: "get_dashboard_summary",
				args: JSON.stringify(callParams)
			});
			
			if (response.success) {
				const data = JSON.parse(response.response);
				if (data.success) {
					summaryData = data.data;
				} else {
					error = `Failed to get dashboard summary: ${data.error || 'Unknown error'}`;
				}
			} else {
				error = `Failed to get dashboard summary: ${response.response}`;
			}
		} catch (err) {
			console.error('Error fetching dashboard summary:', err);
			error = `Error fetching dashboard summary: ${err.message || err}`;
		} finally {
			loading = false;
		}
	}
	
	// Fetch notifications for the user
	async function getNotifications() {
		try {
			const response = await backend.extension_sync_call({
				extension_name: "notifications",
				function_name: "get_notifications",
				args: JSON.stringify({ user_id: $principal || '' })
			});
			if (response.success) {
				const data = JSON.parse(response.response);
				if (data.notifications) {
					notifications = data.notifications;
				}
			}
		} catch (err) {
			console.error('[MemberDashboard] Error fetching notifications:', err);
		} finally {
			notificationsLoading = false;
		}
	}
	
	// Toggle read/unread status
	async function toggleRead(notif) {
		try {
			const newRead = !notif.read;
			const response = await backend.extension_sync_call({
				extension_name: "notifications",
				function_name: "mark_as_read",
				args: JSON.stringify({ id: notif.id, read: newRead })
			});
			if (response.success) {
				notifications = notifications.map(n =>
					n.id === notif.id ? { ...n, read: newRead } : n
				);
			}
		} catch (err) {
			console.error('[MemberDashboard] Error toggling notification:', err);
		}
	}
	
	// Delete a notification
	async function deleteNotification(notif) {
		try {
			const response = await backend.extension_sync_call({
				extension_name: "notifications",
				function_name: "delete_notification",
				args: JSON.stringify({ id: notif.id })
			});
			if (response.success) {
				notifications = notifications.filter(n => n.id !== notif.id);
			}
		} catch (err) {
			console.error('[MemberDashboard] Error deleting notification:', err);
		}
	}
	
	$: unreadCount = notifications.filter(n => !n.read).length;
	let expandedId = null;

	// Simple markdown to HTML converter
	function mdToHtml(text) {
		if (!text) return '';
		return text
			.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*(.+?)\*/g, '<em>$1</em>')
			.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener">$1</a>')
			.replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">$1</code>')
			.replace(/^\s*[-*]\s+(.+)$/gm, '<li class="ml-4">$1</li>')
			.replace(/(<li.*<\/li>\n?)+/g, (m) => '<ul class="list-disc ml-2 space-y-1">' + m + '</ul>')
			.replace(/\n{2,}/g, '</p><p class="mt-2">')
			.replace(/\n/g, '<br>')
			.replace(/^/, '<p>').replace(/$/, '</p>');
	}
	
	function formatRelativeTime(timestampMs) {
		if (!timestampMs) return '';
		const now = Date.now();
		const diffMs = now - timestampMs;
		if (diffMs < 0) return 'just now';
		const seconds = Math.floor(diffMs / 1000);
		if (seconds < 60) return 'just now';
		const minutes = Math.floor(seconds / 60);
		if (minutes < 60) return `${minutes}m ago`;
		const hours = Math.floor(minutes / 60);
		if (hours < 24) return `${hours}h ago`;
		const days = Math.floor(hours / 24);
		if (days < 30) return `${days}d ago`;
		const months = Math.floor(days / 30);
		if (months < 12) return `${months}mo ago`;
		const years = Math.floor(months / 12);
		return `${years}y ago`;
	}

	function formatFullDate(timestampMs) {
		if (!timestampMs) return '';
		const d = new Date(timestampMs);
		const pad = (n) => String(n).padStart(2, '0');
		return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
	}

	function toggleExpand(notif) {
		if (expandedId === notif.id) {
			expandedId = null;
		} else {
			expandedId = notif.id;
			if (!notif.read) {
				toggleRead(notif);
			}
		}
	}
	
	// Fetch citizenship status
	async function getCitizenshipStatus() {
		try {
			const response = await backend.extension_sync_call({
				extension_name: "member_dashboard",
				function_name: "get_citizenship_status",
				args: JSON.stringify({ user_id: $principal || '' })
			});
			if (response.success) {
				const data = JSON.parse(response.response);
				if (data.success) {
					citizenshipStatus = data.data;
				}
			}
		} catch (err) {
			console.error('[MemberDashboard] Error fetching citizenship status:', err);
		}
	}
	
	// Initialize component
	onMount(async () => {
		if (!$isAuthenticated) {
			loading = false;
			return;
		}
		await Promise.all([getDashboardSummary(), getNotifications(), getCitizenshipStatus()]);
	});
</script>

<div class="w-full max-w-none px-4 py-6 pt-20 space-y-8">
	{#if !$isAuthenticated}
		<div class="flex flex-col items-center justify-center py-20 px-6">
			<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-10 max-w-md w-full text-center space-y-5">
				<div class="mx-auto w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
					<BellOutline class="w-8 h-8 text-blue-500" />
				</div>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome to your Dashboard</h2>
				<p class="text-gray-500 dark:text-gray-400">Please log in to access your member dashboard, notifications, invoices, and more.</p>
				<Button color="primary" size="lg" class="w-full" on:click={() => goto('/join')}>Log In</Button>
			</div>
		</div>
	{:else}
	<!-- Header -->
	<div>
		<h1 class="text-3xl font-bold text-gray-900 dark:text-white">
			{getGreeting()}, <span class="text-gray-600 dark:text-gray-400">{summaryData?.user_name || 'Member'}</span>
		</h1>
	</div>
	
	{#if loading}
		<div class="flex flex-col justify-center items-center p-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
			<Spinner size="12" />
			<p class="mt-4 text-lg text-gray-500 dark:text-gray-400">{$_('extensions.member_dashboard.loading')}</p>
		</div>
	{:else if error}
		<Alert color="red" class="mb-4 rounded-xl">
			<span class="font-medium">{$_('common.error')}:</span> {error}
		</Alert>
	{:else if summaryData}
		<!-- Citizenship Status Card -->
		{#if citizenshipStatus}
			<section>
				<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
					<div class="flex items-center justify-between">
						<h2 class="text-xl font-bold text-gray-900 dark:text-white">Citizenship Status</h2>
						<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold
							{citizenshipStatus.status === 'active'
								? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
								: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'}">
							{#if citizenshipStatus.status === 'active'}
								<CheckCircleSolid class="w-4 h-4" />
							{:else}
								<CloseCircleSolid class="w-4 h-4" />
							{/if}
							{citizenshipStatus.status_label}
						</span>
					</div>
				</div>
			</section>
		{/if}

		<!-- Notifications Inbox -->
		<section>
			<div class="flex items-center justify-between mb-4">
				<div class="flex items-center gap-2">
					<h2 class="text-xl font-bold text-gray-900 dark:text-white">Notifications</h2>
					{#if unreadCount > 0}
						<span class="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full">{unreadCount}</span>
					{/if}
				</div>
			</div>
			{#if notificationsLoading}
				<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 flex justify-center">
					<Spinner size="8" />
				</div>
			{:else if notifications.length === 0}
				<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center text-gray-500 dark:text-gray-400">
					<BellOutline class="w-8 h-8 mx-auto mb-2 text-gray-300" />
					No notifications
				</div>
			{:else}
				<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
					<table class="w-full">
						<thead>
							<tr class="bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 uppercase tracking-wider">
								<th class="w-8 px-3 py-2"></th>
								<th class="text-left px-3 py-2">Subject</th>
								<th class="text-left px-3 py-2 whitespace-nowrap hidden md:table-cell">From</th>
								<th class="text-left px-3 py-2 whitespace-nowrap hidden lg:table-cell">To</th>
								<th class="text-left px-3 py-2 whitespace-nowrap hidden sm:table-cell">Date</th>
								<th class="w-20 px-3 py-2 text-right">Actions</th>
							</tr>
						</thead>
						<tbody>
							{#each notifications as notif (notif.id)}
								<tr
									class="border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer transition-colors {notif.read ? 'hover:bg-gray-50 dark:hover:bg-gray-750' : 'bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20'}"
									on:click={() => toggleExpand(notif)}
								>
									<td class="px-3 py-3 align-top">
										{#if !notif.read}
											<div class="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
										{/if}
									</td>
									<td class="px-3 py-3">
										<div class="truncate {notif.read ? 'text-sm text-gray-600 dark:text-gray-400' : 'text-sm font-semibold text-gray-900 dark:text-white'}">{notif.title}</div>
										{#if expandedId === notif.id}
											<div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 leading-relaxed prose prose-sm dark:prose-invert max-w-none">{@html mdToHtml(notif.message)}</div>
										{/if}
									</td>
									<td class="px-3 py-3 align-top text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap hidden md:table-cell">{notif.sender || '—'}</td>
									<td class="px-3 py-3 align-top text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap hidden lg:table-cell" title={notif.recipient || ''}>{notif.recipient ? notif.recipient.slice(0, 10) + '...' : '—'}</td>
									<td class="px-3 py-3 align-top text-xs text-gray-400 whitespace-nowrap hidden sm:table-cell" title={formatFullDate(notif.timestamp_ms)}>{formatRelativeTime(notif.timestamp_ms)}</td>
									<td class="px-3 py-3 align-top">
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<div class="flex justify-end gap-1" on:click|stopPropagation>
											<button
												on:click={() => toggleExpand(notif)}
												title={expandedId === notif.id ? 'Collapse' : 'Read message'}
												class="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 {expandedId === notif.id ? 'text-blue-500' : 'text-gray-400'} hover:text-gray-600 transition-colors"
											>
												{#if expandedId === notif.id}
													<EyeSlashOutline class="w-3.5 h-3.5" />
												{:else}
													<EyeOutline class="w-3.5 h-3.5" />
												{/if}
											</button>
											<button
												on:click={() => toggleRead(notif)}
												title={notif.read ? 'Mark as unread' : 'Mark as read'}
												class="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 hover:text-gray-600 transition-colors"
											>
												{#if notif.read}
													<EnvelopeOutline class="w-3.5 h-3.5" />
												{:else}
													<EnvelopeOpenOutline class="w-3.5 h-3.5" />
												{/if}
											</button>
											<button
												on:click={() => deleteNotification(notif)}
												title="Delete"
												class="p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors"
											>
												<TrashBinOutline class="w-3.5 h-3.5" />
											</button>
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</section>
		
		<!-- Invoices Section -->
		<section>
			<TaxInformation userId={$principal || 'demo-user'} />
		</section>
		
		<!-- Payment Accounts Section -->
		<section>
			<PaymentAccounts />
		</section>
	{:else}
		<Alert color="blue" class="mb-4 rounded-xl">
			{$_('extensions.member_dashboard.no_data')}
		</Alert>
	{/if}
	{/if}
</div>
