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
			<div class="w-screen flex sm:hidden text-base sm:text-2xl lg:text-2xl xl:text-3xl text-white">
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
			<div class="sm:col-span-2 lg:col-span-3 pt-3 sm:pt-0">
				{#if selected === 'about'}
					<!-- in:fly={{ duration: 1200, y: 200 }} -->
					<div>
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
				{:else if selected === 'vision'}
					<!-- in:fly={{ duration: 1200, y: 200 }} -->
					<div>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.visionTitle}
						</p>
						<p class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8">
							{sectionData.data.attributes.visionParagraph}
						</p>
					</div>
				{:else if selected === 'mission'}
					<!-- in:fly={{ duration: 1200, y: 200 }} -->
					<div>
						<p
							class="heading-en-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.missionTitle}
						</p>
						<p class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8">
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
			<div class="sm:col-span-2 lg:col-span-3 pt-3 sm:pt-0" dir={$pageDirection}>
				{#if selected === 'about'}
					<!-- in:fly={{ duration: 1200, y: 200 }} -->
					<div>
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
				{:else if selected === 'vision'}
					<!-- in:fly={{ duration: 1200, y: 200 }} -->
					<div>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.visionTitle}
						</p>
						<p class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8">
							{sectionData.data.attributes.localizations.data[0].attributes.visionParagraph}
						</p>
					</div>
				{:else if selected === 'mission'}
					<!-- in:fly={{ duration: 1200, y: 200 }} -->
					<div>
						<p
							class="heading-ar-2 px-3 lg:px-8 2xl:px-16 my-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-bold"
						>
							{sectionData.data.attributes.localizations.data[0].attributes.missionTitle}
						</p>
						<p class="text-sm sm:text-base md:text-lg xl:text-xl px-3 lg:px-8 2xl:px-16 leading-8">
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
