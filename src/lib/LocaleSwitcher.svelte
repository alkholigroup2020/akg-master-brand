<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	// import { locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '../utils';
	import { currentAppLang } from '$lib/stores/store.js';

	// let currentLang: string; // my addition

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		currentAppLang.set(newLocale);

		if (!newLocale || $locale === newLocale) return;

		// load new dictionary from server
		await loadLocaleAsync(newLocale);

		// select locale
		setLocale(newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}

		// run the `load` function again <=== This what is making hover over the btn changes the language!!
		// but also makes the title name not changing from lang to another!
		invalidateAll();

		// to solve the title lang issue above
		// location.reload();
	};

	// update `lang` attribute
	$: browser && document.querySelector('html').setAttribute('lang', $locale);

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	// update locale when page store changes
	$: if (browser) {
		// const lang = $page.params.lang as Locales;
		const lang = 'en' as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<!-- {#if $currentAppLang === 'en'}
	<button
		type="button"
		class="btn !bg-transparent px-0 pt-3 sm:pt-1 text-sm sm:text-lg xl:text-xl text-white ar-font"
	>
		<a href={`${replaceLocaleInUrl($page.url, 'ar')}`} aria-label="language switch link"
			>العــربية</a
		>
	</button>
{/if}

{#if $currentAppLang === 'ar'}
	<button
		type="button"
		class="btn !bg-transparent px-0 pt-5 md:pt-3 text-xs sm:text-sm md:text-base text-white uppercase"
	>
		<a href={`${replaceLocaleInUrl($page.url, 'en')}`} aria-label="language switch link">English</a>
	</button>
{/if} -->
