<script lang="ts">
	import { navigating } from '$app/stores';

	import ScrollToTopButton from '$lib/generalComponents/ScrollToTopButton.svelte';

	import LoadingSpinner from '$lib/generalComponents/LoadingSpinner.svelte';
	import { onMount } from 'svelte';
	import Nav from '$lib/generalComponents/Nav.svelte';

	// We declare 'customDelay' with a type of 'boolean' to indicate its purpose.
	let customDelay: boolean = true;

	onMount(() => {
		// Generate a random number between 300 and 700.
		// Math.random() gives us a number between 0 and 1. We multiply it by (700 - 300) to get a range.
		// Then we add 300 to ensure the minimum value is 300.
		const randomDelay: number = Math.floor(Math.random() * (700 - 300 + 1)) + 300;

		// We use the random number as the delay for setTimeout.
		setTimeout(() => {
			customDelay = false;
		}, randomDelay);
	});
</script>

<ScrollToTopButton />

{#if $navigating}
	<LoadingSpinner />
{:else if customDelay}
	<LoadingSpinner />
{:else}
	<div class="max-sm:hidden">
		<Nav />
	</div>
	<slot />
{/if}
