<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import AboutUs from '$lib/aboutPage/AboutUs.svelte';
	import BoardMembers from '$lib/aboutPage/BoardMembers.svelte';
	import ChairmanMessage from '$lib/aboutPage/ChairmanMessage.svelte';
	import HeroSection from '$lib/aboutPage/HeroSection.svelte';
	import MissionAndVision from '$lib/aboutPage/MissionAndVision.svelte';
	import PartnersSection from '$lib/aboutPage/PartnersSection.svelte';
	import TeamMembers from '$lib/aboutPage/TeamMembers.svelte';
	import Timeline from '$lib/aboutPage/Timeline.svelte';
	import TimelineImage from '$lib/aboutPage/TimelineImage.svelte';
	import MainFooter from '$lib/footers/MainFooter.svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	export let data;
</script>

<HeroSection />

<AboutUs sectionData={data.aboutSectionData} />

<!-- <Timeline /> -->

<!-- <TimelineImage /> -->

<MissionAndVision />

<ChairmanMessage />

<BoardMembers />

<TeamMembers />

<!-- <PartnersSection /> -->

<MainFooter />
