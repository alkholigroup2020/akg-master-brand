<script lang="ts">
	let selected = 'about';
	import LL from '$i18n/i18n-svelte';
	import { pageDirection } from '$lib/stores/store';
	import { currentAppLang } from '$lib/stores/store';
	export let sectionData: any;
</script>

<!-- <pre>{sectionData.data.attributes.aboutTitle}</pre>
<pre>{sectionData.data.attributes.localizations.data}</pre> -->

<section class="max-w-[1920px] mx-auto">
	<div class="grid sm:grid-cols-3 lg:grid-cols-4 py-8 sm:py-16">
		{#if $currentAppLang === 'en'}
			<!-- Buttons Section before sm -->
			<div class="w-screen flex sm:hidden text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-white">
				<button
					class="path-small w-1/3 h-16 mx-2 hover:cursor-pointer {selected === 'about'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'about')}
				>
					<p>{$LL.about.aboutSection.about()}</p>
				</button>
				<button
					class="path-small w-1/3 h-16 mx-2 hover:cursor-pointer {selected === 'story'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'story')}
				>
					<p>{$LL.about.aboutSection.story()}</p>
				</button>
				<button
					class="path-small w-1/3 h-16 mx-2 hover:cursor-pointer {selected === 'values'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'values')}
				>
					<p>{$LL.about.aboutSection.values()}</p>
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
					<p>{$LL.about.aboutSection.about()}</p>
				</button>
				<button
					class="path w-full h-24 my-1 hover:cursor-pointer {selected === 'story'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'story')}
				>
					<p>{$LL.about.aboutSection.story()}</p>
				</button>
				<button
					class="path w-full h-24 my-1 hover:cursor-pointer {selected === 'values'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'values')}
				>
					<p>{$LL.about.aboutSection.values()}</p>
				</button>
			</div>

			<!-- Text Section -->
			<div class="sm:col-span-2 lg:col-span-3 pt-3 sm:pt-4">
				{#if selected === 'about'}
					<div>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.aboutTitle}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg px-3 lg:px-8 2xl:px-16 leading-8 text-justify"
						>
							{sectionData.data.attributes.aboutParagraph}
						</p>
					</div>
				{:else if selected === 'story'}
					<div>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.storyTitle}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg px-3 lg:px-8 2xl:px-16 leading-8 text-justify"
						>
							{sectionData.data.attributes.storyParagraph}
						</p>
					</div>
				{:else if selected === 'values'}
					<div>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.valuesTitle}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg px-3 lg:px-8 2xl:px-16 leading-8 text-justify"
						>
							{sectionData.data.attributes.valuesParagraph}
						</p>
					</div>
				{/if}
			</div>
		{:else}
			<!-- Buttons Section before sm -->
			<div class="w-screen flex sm:hidden main-ar-text text-white">
				<button
					class="path-small w-1/3 h-16 mx-2 hover:cursor-pointer {selected === 'about'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'about')}
				>
					<p>{$LL.about.aboutSection.about()}</p>
				</button>
				<button
					class="path-small w-1/3 h-16 mx-2 hover:cursor-pointer {selected === 'story'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'story')}
				>
					<p>{$LL.about.aboutSection.story()}</p>
				</button>
				<button
					class="path-small w-1/3 h-16 mx-2 hover:cursor-pointer {selected === 'values'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'values')}
				>
					<p>{$LL.about.aboutSection.values()}</p>
				</button>
			</div>

			<!-- Buttons Section after sm -->
			<div class="sm:pr-5 lg:pr-8 py-2 text-white max-sm:hidden">
				<button
					class="path w-full h-24 my-1 hover:cursor-pointer {selected === 'about'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'about')}
				>
					<p>{$LL.about.aboutSection.about()}</p>
				</button>
				<button
					class="path w-full h-24 my-1 hover:cursor-pointer {selected === 'story'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'story')}
				>
					<p>{$LL.about.aboutSection.story()}</p>
				</button>
				<button
					class="path w-full h-24 my-1 hover:cursor-pointer {selected === 'values'
						? 'bg-success-500'
						: 'bg-primary-500'}"
					on:click={() => (selected = 'values')}
				>
					<p>{$LL.about.aboutSection.values()}</p>
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
						<p class="main-ar-text px-3 lg:px-8 2xl:px-16 leading-8 text-justify">
							{sectionData.data.attributes.localizations.data[0].attributes.aboutParagraph}
						</p>
					</div>
				{:else if selected === 'story'}
					<div>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.storyTitle}
						</p>
						<p class="main-ar-text px-3 lg:px-8 2xl:px-16 leading-8 text-justify">
							{sectionData.data.attributes.localizations.data[0].attributes.storyParagraph}
						</p>
					</div>
				{:else if selected === 'values'}
					<div>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.valuesTitle}
						</p>
						<p class="main-ar-text px-3 lg:px-8 2xl:px-16 leading-8 text-justify">
							{sectionData.data.attributes.localizations.data[0].attributes.valuesParagraph}
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
