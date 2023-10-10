<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import LoadingSpinner from '$lib/generalComponents/LoadingSpinner.svelte';
	import { navigating } from '$app/stores';

	import { setLocale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';

	export let data;

	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);

	import LL from '$i18n/i18n-svelte';

	import WindowSize from '$lib/generalComponents/WindowSize.svelte';

	import Nav from '$lib/generalComponents/Nav.svelte';

	$: devOrProduction = process.env.NODE_ENV === 'development' ? true : false;
</script>

<svelte:head>
	<title>{$LL.title()}</title>
	<meta name="description" content="An Elevators Co." />
	<HeadHrefLangs />
</svelte:head>

{#if devOrProduction}
	<!-- <WindowSize /> -->
{/if}

{#if $navigating}
	<LoadingSpinner />
{:else}
	<div class="max-sm:hidden">
		<Nav />
	</div>

	<slot />
{/if}

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap'); */

	/* #f6f6f9 */

	/* h1: text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl */
	/* h2: text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] */
	/* h3: text-lg sm:text-2xl lg:text-2xl xl:text-3xl */
	/* h4: text-base sm:text-lg lg:text-xl xl:text-2xl */
	/* normal: text-sm sm:text-base md:text-lg ==> text-sm sm:text-base md:text-lg xl:text-xl */
	/* sub-normal: text-xs sm:text-sm md:text-base */
</style>
