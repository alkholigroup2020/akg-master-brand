<script lang="ts">
	import { navigating } from '$app/stores';

	import ScrollToTopButton from '$lib/generalComponents/ScrollToTopButton.svelte';

	import LoadingSpinner from '$lib/generalComponents/LoadingSpinner.svelte';
	import WindowSize from '$lib/generalComponents/WindowSize.svelte';
</script>

<WindowSize />

<ScrollToTopButton />

{#if $navigating}
	<LoadingSpinner />
{:else}
	<slot />
{/if}
