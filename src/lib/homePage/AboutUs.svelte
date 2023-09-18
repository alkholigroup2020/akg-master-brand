<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	// Define a reactive variable to track the currently selected section.
	// Let's initialize it with 'about' as default.
	let selected = 'about';

	// Import the fade function from svelte/transition.
	import { slide } from 'svelte/transition';

	export let sectionData: any;

	let theSectionData = {
		aboutTitle: '',
		aboutParagraph: '',
		visionTitle: '',
		visionParagraph: '',
		missionTitle: '',
		missionParagraph: ''
	};

	if ($currentAppLang === 'en') {
		theSectionData.aboutTitle = sectionData.data.attributes.aboutTitle;
		theSectionData.aboutParagraph = sectionData.data.attributes.aboutParagraph;

		theSectionData.visionTitle = sectionData.data.attributes.visionTitle;
		theSectionData.visionParagraph = sectionData.data.attributes.visionParagraph;

		theSectionData.missionTitle = sectionData.data.attributes.missionTitle;
		theSectionData.missionParagraph = sectionData.data.attributes.missionParagraph;
	} else {
		theSectionData.aboutTitle =
			sectionData.data.attributes.localizations.data[0].attributes.aboutTitle;
		theSectionData.aboutParagraph =
			sectionData.data.attributes.localizations.data[0].attributes.aboutParagraph;

		theSectionData.visionTitle =
			sectionData.data.attributes.localizations.data[0].attributes.visionTitle;
		theSectionData.visionParagraph =
			sectionData.data.attributes.localizations.data[0].attributes.visionParagraph;

		theSectionData.missionTitle =
			sectionData.data.attributes.localizations.data[0].attributes.missionTitle;
		theSectionData.missionParagraph =
			sectionData.data.attributes.localizations.data[0].attributes.missionParagraph;
	}
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="grid sm:grid-cols-3 lg:grid-cols-4 py-5 sm:py-10">
		<!-- Buttons Section before sm -->
		<div class="w-screen flex sm:hidden text-white">
			<button
				class="path-small w-1/3 h-16 mx-2 hover:cursor-pointer {selected === 'about'
					? 'bg-success-500'
					: 'bg-primary-500'}"
				on:click={() => (selected = 'about')}
			>
				<p>{$LL.home.aboutSection.about()}</p>
			</button>
			<button
				class="path-small w-1/3 h-16 mx-2 hover:cursor-pointer {selected === 'vision'
					? 'bg-success-500'
					: 'bg-primary-500'}"
				on:click={() => (selected = 'vision')}
			>
				<p>{$LL.home.aboutSection.vision()}</p>
			</button>
			<button
				class="path-small w-1/3 h-16 mx-2 hover:cursor-pointer {selected === 'mission'
					? 'bg-success-500'
					: 'bg-primary-500'}"
				on:click={() => (selected = 'mission')}
			>
				<p>{$LL.home.aboutSection.mission()}</p>
			</button>
		</div>

		<!-- Buttons Section after sm -->
		<div class="sm:pr-5 lg:pr-8 py-2 text-white heading-{$currentAppLang}-3 max-sm:hidden">
			<button
				class="path w-full h-24 my-1 hover:cursor-pointer {selected === 'about'
					? 'bg-success-500'
					: 'bg-primary-500'}"
				on:click={() => (selected = 'about')}
			>
				<p>{$LL.home.aboutSection.about()}</p>
			</button>
			<button
				class="path w-full h-24 my-1 hover:cursor-pointer {selected === 'vision'
					? 'bg-success-500'
					: 'bg-primary-500'}"
				on:click={() => (selected = 'vision')}
			>
				<p>{$LL.home.aboutSection.vision()}</p>
			</button>
			<button
				class="path w-full h-24 my-1 hover:cursor-pointer {selected === 'mission'
					? 'bg-success-500'
					: 'bg-primary-500'}"
				on:click={() => (selected = 'mission')}
			>
				<p>{$LL.home.aboutSection.mission()}</p>
			</button>
		</div>

		<!-- Text Section -->
		<div class="sm:col-span-2 lg:col-span-3 pt-3 sm:pt-4" dir={$pageDirection}>
			{#if selected === 'about'}
				<div transition:slide>
					<p
						class="heading-{$currentAppLang}-2 px-3 lg:px-8 2xl:px-16 my-8 text-primary-500 font-bold"
					>
						{theSectionData.aboutTitle}
					</p>
					<p class="main-{$currentAppLang}-text px-3 lg:px-8 2xl:px-16 leading-8 text-justify">
						{theSectionData.aboutParagraph}
					</p>
				</div>
			{:else if selected === 'vision'}
				<div transition:slide>
					<p
						class="heading-{$currentAppLang}-2 px-3 lg:px-8 2xl:px-16 my-8 text-primary-500 font-bold"
					>
						{theSectionData.visionTitle}
					</p>
					<p class="main-{$currentAppLang}-text px-3 lg:px-8 2xl:px-16 leading-8 text-justify">
						{theSectionData.visionParagraph}
					</p>
				</div>
			{:else if selected === 'mission'}
				<div transition:slide>
					<p
						class="heading-{$currentAppLang}-2 px-3 lg:px-8 2xl:px-16 my-8 text-primary-500 font-bold"
					>
						{theSectionData.missionTitle}
					</p>
					<p class="main-{$currentAppLang}-text px-3 lg:px-8 2xl:px-16 leading-8 text-justify">
						{theSectionData.missionParagraph}
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.path {
		clip-path: polygon(0% 0%, 93% 0, 100% 50%, 93% 100%, 0% 100%);
	}
	.path-small {
		clip-path: polygon(0% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%);
	}
</style>
