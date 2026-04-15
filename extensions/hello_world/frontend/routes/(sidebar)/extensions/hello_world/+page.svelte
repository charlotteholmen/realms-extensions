<script lang="ts">
	import HelloWorld from '$lib/extensions/hello_world/HelloWorld.svelte';
	import { SITE_NAME } from '$lib/globals';
	import MetaTag from '../../../utils/MetaTag.svelte';

	const path: string = '/extensions/hello_world';
	const description: string = 'Hello World runtime extension demo';
	const title: string = SITE_NAME + ' - Hello World';
	const subtitle: string = 'Hello World';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="p-4">
	<div class="max-w-7xl mx-auto">
		<HelloWorld />
	</div>
</main>
