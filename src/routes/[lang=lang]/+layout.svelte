<script lang="ts">
	import { navigating } from '$app/stores';

	import ScrollToTopButton from '$lib/generalComponents/ScrollToTopButton.svelte';

	import LoadingSpinner from '$lib/generalComponents/LoadingSpinner.svelte';
</script>

<ScrollToTopButton />

{#if $navigating}
	<LoadingSpinner />
{:else}
	<slot />
{/if}
