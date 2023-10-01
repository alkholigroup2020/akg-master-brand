<script lang="ts">
	import Divisions from '$lib/divisions/Divisions.svelte';
	import HeroSection from '$lib/divisions/HeroSection.svelte';
	import MainFooter from '$lib/footers/MainFooter.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<HeroSection />

<Divisions sectionData={data.divisionsSectionData.data} />

<!-- <div class="h-96 w-full" /> -->

<MainFooter />
