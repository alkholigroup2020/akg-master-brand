<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import { fly } from 'svelte/transition';

	// Define a reactive variable to track the currently selected section.
	// Let's initialize it with 'about' as default.
	let selected = 'about';

	export let sectionData: any;
</script>

<section class="max-w-[1920px] mx-auto">
	<div
		class="grid sm:grid-cols-3 lg:grid-cols-4 py-8 sm:py-16 {$currentAppLang === 'ar'
			? 'ar-font'
			: ''}"
	>
		{#if $currentAppLang === 'en'}
			<!-- Buttons Section before sm -->
			<div class="w-screen flex sm:hidden text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-white">
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

			<!-- Buttons Section sm and up -->
			<div
				class="sm:pr-5 lg:pr-8 py-2 text-white text-lg sm:text-2xl lg:text-2xl xl:text-3xl max-sm:hidden"
			>
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
			<div class="sm:col-span-2 lg:col-span-3 pt-3 sm:pt-4">
				{#if selected === 'about'}
					<div in:fly={{ duration: 800, y: 200 }}>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.aboutTitle}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8 text-justify"
						>
							{sectionData.data.attributes.aboutParagraph}
						</p>
					</div>
				{:else if selected === 'vision'}
					<div in:fly={{ duration: 800, y: 200 }}>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.visionTitle}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8 text-justify"
						>
							{sectionData.data.attributes.visionParagraph}
						</p>
					</div>
				{:else if selected === 'mission'}
					<div in:fly={{ duration: 800, y: 200 }}>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.missionTitle}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8 text-justify"
						>
							{sectionData.data.attributes.missionParagraph}
						</p>
					</div>
				{/if}
			</div>
		{:else}
			<!-- Buttons Section before sm -->
			<div class="w-screen flex sm:hidden text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-white">
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
			<div
				class="sm:pr-5 lg:pr-8 py-2 text-white text-lg sm:text-2xl lg:text-2xl xl:text-3xl max-sm:hidden"
			>
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
					<div>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.aboutTitle}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8 text-justify"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.aboutParagraph}
						</p>
					</div>
				{:else if selected === 'vision'}
					<div>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.visionTitle}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8 text-justify"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.visionParagraph}
						</p>
					</div>
				{:else if selected === 'mission'}
					<div>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.missionTitle}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8 text-justify"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.missionParagraph}
						</p>
					</div>
				{/if}
			</div>
		{/if}
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
