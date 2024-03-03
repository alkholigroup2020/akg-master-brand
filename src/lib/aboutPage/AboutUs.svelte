<script lang="ts">
	let selected = 'about';
	import LL from '$i18n/i18n-svelte';
	import { pageDirection } from '$lib/stores/store';
	import { currentAppLang } from '$lib/stores/store';
	import { fly } from 'svelte/transition';
	export let sectionData: any;
</script>

<!-- <pre>{sectionData.data.attributes.aboutTitle}</pre>
<pre>{sectionData.data.attributes.localizations.data}</pre> -->

<section class="max-w-[1920px] mx-auto">
	<div class="grid sm:grid-cols-3 lg:grid-cols-4 py-8 sm:py-16">
		{#if $currentAppLang === 'en'}
			<!-- Buttons Section before sm -->
			<div class="w-screen flex sm:hidden text-base sm:text-2xl lg:text-2xl xl:text-3xl text-white">
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
			<div>
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
			</div>

			<!-- Text Section -->
			<div class="sm:col-span-2 lg:col-span-3 pt-3 sm:pt-0">
				{#if selected === 'about'}
					<div in:fly={{ duration: 1200, y: 200 }}>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.aboutTitle}
						</p>
						<p class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8">
							{sectionData.data.attributes.aboutParagraph}
						</p>
						<!-- profile link -->
						<div class="mx-3 lg:mx-8 2xl:mx-16 my-5 w-fit">
							<a
								class="w-fit"
								role="button"
								href="/profiles/AKG-Company-Profile.pdf"
								download="Alkholi Group Profile"
							>
								<div class="flex items-center">
									<p
										class="text-sm sm:text-base md:text-lg xl:text-xl font-semibold text-primary-500"
									>
										Download Group Profile
									</p>

									<div class="mx-3">
										<span>
											<svg
												class="w-5 h-5"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
													stroke="#000"
													stroke-width="1.5"
													stroke-linecap="round"
												/>
												<path
													d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
													stroke="#000"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				{:else if selected === 'story'}
					<div in:fly={{ duration: 1200, y: 200 }}>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.storyTitle}
						</p>
						<p class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8">
							{sectionData.data.attributes.storyParagraph[0].paragraphText}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8 pt-3 lg:pt-5"
						>
							{sectionData.data.attributes.storyParagraph[1].paragraphText}
						</p>
					</div>
				{:else if selected === 'values'}
					<div in:fly={{ duration: 1200, y: 200 }}>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.valuesTitle}
						</p>
						<div class="space-y-2">
							<p
								class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8"
							>
								<span class="font-bold"
									>{sectionData.data.attributes.valuesParagraphs[0].paragraphTitle}</span
								>
								<span>{sectionData.data.attributes.valuesParagraphs[0].paragraphText}</span>
							</p>
							<p
								class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8"
							>
								<span class="font-bold"
									>{sectionData.data.attributes.valuesParagraphs[1].paragraphTitle}</span
								>
								<span>{sectionData.data.attributes.valuesParagraphs[1].paragraphText}</span>
							</p>
							<p
								class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8"
							>
								<span class="font-bold"
									>{sectionData.data.attributes.valuesParagraphs[2].paragraphTitle}</span
								>
								<span>{sectionData.data.attributes.valuesParagraphs[2].paragraphText}</span>
							</p>
							<p
								class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8"
							>
								<span class="font-bold"
									>{sectionData.data.attributes.valuesParagraphs[3].paragraphTitle}</span
								>
								<span>{sectionData.data.attributes.valuesParagraphs[3].paragraphText}</span>
							</p>
						</div>
					</div>
				{/if}
			</div>
		{:else}
			<!-- Arabic -->
			<!-- Buttons Section before sm -->
			<div
				class="w-screen flex sm:hidden text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-white ar-font"
			>
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
				class="sm:pr-5 lg:pr-8 py-2 text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-white max-sm:hidden ar-font"
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
			<div class="sm:col-span-2 lg:col-span-3 pt-3 sm:pt-0 ar-font" dir={$pageDirection}>
				{#if selected === 'about'}
					<div in:fly={{ duration: 1200, y: 200 }}>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.aboutTitle}
						</p>
						<p class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8">
							{sectionData.data.attributes.localizations.data[0].attributes.aboutParagraph}
						</p>
						<!-- profile link -->
						<div class="mx-3 lg:mx-8 2xl:mx-16 my-5 w-fit">
							<a
								class="w-fit"
								role="button"
								href="/profiles/AKG-Company-Profile.pdf"
								download="Alkholi Group Profile"
							>
								<div class="flex items-center">
									<p
										class="text-sm sm:text-base md:text-lg xl:text-xl font-semibold text-primary-500"
									>
										الملف التعريفي للمجموعة
									</p>

									<div class="mx-3">
										<span>
											<svg
												class="w-5 h-5"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
													stroke="#000"
													stroke-width="1.5"
													stroke-linecap="round"
												/>
												<path
													d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
													stroke="#000"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				{:else if selected === 'story'}
					<div in:fly={{ duration: 1200, y: 200 }}>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.storyTitle}
						</p>
						<p class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8">
							{sectionData.data.attributes.localizations.data[0].attributes.storyParagraph[0]
								.paragraphText}
						</p>
						<p
							class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8 pt-3 xl:pt-5"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.storyParagraph[1]
								.paragraphText}
						</p>
					</div>
				{:else if selected === 'values'}
					<div in:fly={{ duration: 1200, y: 200 }}>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.valuesTitle}
						</p>
						<div class="space-y-2">
							<p
								class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8"
							>
								<span class="font-bold"
									>{sectionData.data.attributes.localizations.data[0].attributes.valuesParagraphs[0]
										.paragraphTitle}</span
								>
								<span
									>{sectionData.data.attributes.localizations.data[0].attributes.valuesParagraphs[0]
										.paragraphText}</span
								>
							</p>
							<p
								class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8"
							>
								<span class="font-bold"
									>{sectionData.data.attributes.localizations.data[0].attributes.valuesParagraphs[1]
										.paragraphTitle}</span
								>
								<span
									>{sectionData.data.attributes.localizations.data[0].attributes.valuesParagraphs[1]
										.paragraphText}</span
								>
							</p>
							<p
								class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8"
							>
								<span class="font-bold"
									>{sectionData.data.attributes.localizations.data[0].attributes.valuesParagraphs[2]
										.paragraphTitle}</span
								>
								<span
									>{sectionData.data.attributes.localizations.data[0].attributes.valuesParagraphs[2]
										.paragraphText}</span
								>
							</p>
							<p
								class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8"
							>
								<span class="font-bold"
									>{sectionData.data.attributes.localizations.data[0].attributes.valuesParagraphs[3]
										.paragraphTitle}</span
								>
								<span
									>{sectionData.data.attributes.localizations.data[0].attributes.valuesParagraphs[3]
										.paragraphText}</span
								>
							</p>
						</div>
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
