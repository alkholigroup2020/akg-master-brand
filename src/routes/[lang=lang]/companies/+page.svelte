<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import HeroSection from '$lib/companies/HeroSection.svelte';
	import OurCompanies from '$lib/companies/OurCompanies.svelte';
	import MainFooter from '$lib/footers/MainFooter.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
</script>

<HeroSection />

<OurCompanies />

<MainFooter />
