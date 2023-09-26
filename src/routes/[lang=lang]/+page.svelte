<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import MainFooter from '$lib/footers/MainFooter.svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import AboutUs from '$lib/homePage/AboutUs.svelte';
	import ClientsTestimonials from '$lib/homePage/ClientsTestimonials.svelte';
	import HeroSection from '$lib/homePage/HeroSection.svelte';
	import IntroSection from '$lib/homePage/IntroSection.svelte';
	import ProjectsSection from '$lib/homePage/ProjectsSection.svelte';
	import ServicesSection from '$lib/homePage/ServicesSection.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	import { LightSwitch } from '@skeletonlabs/skeleton';

	export let data;
</script>

<HeroSection />
<AboutUs sectionData={data.data.aboutSectionData} />
<IntroSection />
<ServicesSection />
<ProjectsSection />
<ClientsTestimonials />
<MainFooter />

<!-- <div class="h-96 w-full" /> -->

<!-- <div class="p-12">
	<div class="w-full flex justify-between">
		<div>
			<LocaleSwitcher />
		</div>
		<div>
			<div dir="ltr">
				<LightSwitch width="w-10" height="h-5" />
			</div>
		</div>
	</div>
</div>
-->

<!-- 
<div dir={$pageDirection} class="h-[2000px]">
	<SectionSize />
	<p class="heading-{$currentAppLang}-1 p-12 text-surface-900-50-token text-center">
		{$LL.title()}
	</p>
</div> -->
