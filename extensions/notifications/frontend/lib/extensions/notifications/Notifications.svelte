<script lang="ts">
    import { onMount } from 'svelte';
    import { Card, Button, Badge, Spinner, Toggle } from 'flowbite-svelte';
    import { CheckOutline, EyeSolid, LinkOutline, ClockOutline, CalendarMonthOutline } from 'flowbite-svelte-icons';
    import { notifications, unreadCount, loadNotifications, markAsRead, type NotificationItem } from '$lib/stores/notifications';
    import { getIcon } from '$lib/utils/iconMap';
    import { goto } from '$app/navigation';
    import { _ } from 'svelte-i18n';

    let loading = true;
    let selectedTab = 'all';

    // Compute unread count locally to ensure reactivity
    $: localUnreadCount = $notifications.filter(n => !n.read).length;

    onMount(async () => {
        await loadNotifications();
        loading = false;
    });

    $: filteredNotifications = $notifications.filter(notification => {
        if (selectedTab === 'unread') return !notification.read;
        return true;
    });

    async function handleGoToLink(notification: NotificationItem) {
        if (notification.href) {
            goto(notification.href);
        }
    }

    async function handleToggleRead(event: Event, notification: NotificationItem) {
        event.stopPropagation();
        await markAsRead(notification.id, !notification.read);
    }

    async function markAllAsRead() {
        const unreadNotifications = $notifications.filter(n => !n.read);
        for (const notification of unreadNotifications) {
            await markAsRead(notification.id);
        }
    }

    function getColorClass(color?: string) {
        switch (color) {
            case 'green': return 'text-green-600 bg-green-100 dark:bg-green-800 dark:text-green-200';
            case 'blue': return 'text-blue-600 bg-blue-100 dark:bg-blue-800 dark:text-blue-200';
            case 'purple': return 'text-purple-600 bg-purple-100 dark:bg-purple-800 dark:text-purple-200';
            case 'red': return 'text-red-600 bg-red-100 dark:bg-red-800 dark:text-red-200';
            default: return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-200';
        }
    }

    function formatDateTime(timestamp: string): { date: string; time: string } {
        if (!timestamp) return { date: '', time: '' };
        const parts = timestamp.split(' ');
        return {
            date: parts[0] || '',
            time: parts[1]?.substring(0, 8) || ''
        };
    }
</script>

<div class="p-6 w-full">
    <div class="flex justify-between items-center mb-6">
        <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{$_('extensions.notifications.title')}</h1>
            <p class="text-gray-600 dark:text-gray-400">
                {localUnreadCount > 0 ? `${localUnreadCount} unread notification${localUnreadCount > 1 ? 's' : ''}` : 'No unread notifications'}
            </p>
        </div>
        {#if localUnreadCount > 0}
            <Button color="alternative" on:click={markAllAsRead}>
                <CheckOutline class="w-4 h-4 mr-2" />
                {$_('extensions.notifications.mark_all_read')}
            </Button>
        {/if}
    </div>

    <div class="flex space-x-4 mb-6">
        <Button 
            color={selectedTab === 'all' ? 'primary' : 'alternative'}
            on:click={() => selectedTab = 'all'}
        >
            All ({$notifications.length})
        </Button>
        <Button 
            color={selectedTab === 'unread' ? 'primary' : 'alternative'}
            on:click={() => selectedTab = 'unread'}
        >
            Unread ({localUnreadCount})
        </Button>
    </div>

    {#if loading}
        <div class="flex justify-center items-center py-12">
            <Spinner size="8" />
        </div>
    {:else if filteredNotifications.length === 0}
        <Card class="text-center py-12">
            <EyeSolid class="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {selectedTab === 'unread' ? $_('extensions.notifications.empty_states.no_unread') : $_('extensions.notifications.empty_states.no_notifications')}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
                {selectedTab === 'unread' 
                    ? $_('extensions.notifications.empty_states.all_caught_up') 
                    : $_('extensions.notifications.empty_states.none_available')}
            </p>
        </Card>
    {:else}
        <div class="space-y-4">
            {#each filteredNotifications as notification (notification.id)}
                {@const dt = formatDateTime(notification.timestamp)}
                <Card 
                    class="w-full transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 {!notification.read ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-transparent'}"
                >
                    <div class="flex items-start space-x-4">
                        <!-- Icon -->
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center {getColorClass(notification.color)}">
                                <svelte:component 
                                    this={getIcon(notification.icon || 'bell')} 
                                    class="w-6 h-6" 
                                />
                            </div>
                        </div>
                        
                        <!-- Content -->
                        <div class="flex-1 min-w-0">
                            <!-- Header -->
                            <div class="flex items-start justify-between mb-2">
                                <div class="flex items-center space-x-2">
                                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                                        {notification.title}
                                    </h4>
                                    {#if !notification.read}
                                        <Badge color="blue">{$_('extensions.notifications.badge_new')}</Badge>
                                    {/if}
                                </div>
                            </div>
                            
                            <!-- Date and Time -->
                            <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                {#if dt.date}
                                    <span class="flex items-center">
                                        <CalendarMonthOutline class="w-4 h-4 mr-1" />
                                        {dt.date}
                                    </span>
                                {/if}
                                {#if dt.time}
                                    <span class="flex items-center">
                                        <ClockOutline class="w-4 h-4 mr-1" />
                                        {dt.time}
                                    </span>
                                {/if}
                            </div>
                            
                            <!-- Message -->
                            <p class="text-base text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-wrap">
                                {notification.message}
                            </p>
                            
                            <!-- Attachments Section -->
                            {#if notification.href}
                                <div class="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                                    <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Attachments</h5>
                                    <Button 
                                        color="light" 
                                        size="sm"
                                        on:click={() => handleGoToLink(notification)}
                                    >
                                        <LinkOutline class="w-4 h-4 mr-2" />
                                        {notification.href}
                                    </Button>
                                </div>
                            {/if}
                            
                            <!-- Actions -->
                            <div class="flex items-center justify-end space-x-3 mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                                <span class="text-sm text-gray-500 dark:text-gray-400">
                                    {notification.read ? 'Read' : 'Unread'}
                                </span>
                                <Toggle 
                                    checked={notification.read}
                                    on:change={(e) => handleToggleRead(e, notification)}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            {/each}
        </div>
    {/if}
</div>
