<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import AboutUs from '$lib/aboutPage/AboutUs.svelte';
	import HeroSection from '$lib/aboutPage/HeroSection.svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	export let data;
</script>

<HeroSection />

<AboutUs sectionData={data.aboutSectionData} />
