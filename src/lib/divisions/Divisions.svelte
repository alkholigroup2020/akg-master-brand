<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';
	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];

	let divisionsData: any[] = [];

	const getDivisionsData = async () => {
		try {
			const response = await fetch('/api/divisions/');

			const cmsDivisionsData = await response.json();

			divisionsData = cmsDivisionsData.divisions.data.sort(
				(
					a: { attributes: { divisionOrder: number } },
					b: { attributes: { divisionOrder: number } }
				) => {
					return a.attributes.divisionOrder - b.attributes.divisionOrder;
				}
			);
			if (!response.ok) {
				throw new Error();
			}
		} catch (error) {
			console.error('🚀 Error:', error);
		}
	};

	onMount(() => {
		getDivisionsData();
	});

	let textElement: any;

	let theText: string;

	if ($currentAppLang === 'en') {
		theText = 'OUR DIVISIONS';
	} else {
		theText = 'أقسام المجموعة';
	}

	// title animation
	onMount(() => {
		gsap.to(textElement, {
			scrollTrigger: {
				trigger: textElement,
				start: 'top+=100 bottom-=100',
				toggleActions: 'play none none none',
				markers: false
			},
			text: theText,
			duration: 1.2
		});
	});

	// Declaring divisions array to bind to the division containers
	let divisions: any[] = [];
	let divisionsText: any[] = [];

	// images animation
	onMount(() => {
		// Wait for the divisionsData array to be updated
		const interval = setInterval(() => {
			if (divisionsData.length >= 1) {
				clearInterval(interval);
				divisions.forEach((ref, index) => {
					let timeline = gsap.timeline({
						scrollTrigger: {
							trigger: ref,
							markers: false,
							scrub: false
						}
					});

					timeline.from(ref, {
						duration: 0.5,
						y: '100px',
						opacity: 0,
						delay: index * 0.2
					});
				});
			}
		}, 250);
	});

	onMount(() => {
		const interval = setInterval(() => {
			if (divisionsData.length >= 1) {
				clearInterval(interval);
				divisionsText.forEach((ref, index) => {
					let timeline = gsap.timeline({
						scrollTrigger: {
							trigger: ref,
							markers: false,
							scrub: false
						}
					});

					timeline.from(ref, {
						duration: 0.5,
						x: '100px',
						opacity: 0,
						delay: index * 0.2
					});
				});
			}
		}, 250);
	});
</script>

<section class="max-w-[1920px] mx-auto min-h-screen">
	<div class="container mx-auto px-3 pb-5 lg:pb-12">
		<!-- title -->
		<div class="text-center">
			<p
				bind:this={textElement}
				class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 uppercase py-12 xl:py-20 {$currentAppLang ===
				'ar'
					? 'ar-font'
					: ''}"
			/>
		</div>

		<!-- divisions -->
		{#if !divisionsData}
			<div class="w-full h-[750px] flex justify-center items-top">
				<div class="mt-32">
					<ConicGradient stops={conicStops} width="w-8 md:w-16 2xl:w-20" spin />
				</div>
			</div>
		{:else}
			{#each divisionsData as division, index (division.id)}
				{#if $currentAppLang === 'en'}
					<div class="grid sm:grid-cols-2 xl:grid-cols-6 sm:gap-6 lg:gap-12 xl:gap-12 pb-12">
						<div
							class="xl:col-span-2 {division.attributes.divisionOrder % 2 === 0
								? 'sm:order-last'
								: ''}"
						>
							<div bind:this={divisions[index]}>
								<img
									src={`https://cms.alkholi.com${division.attributes.divisionImage_620x620.data.attributes.url}`}
									srcset={`https://cms.alkholi.com${division.attributes.divisionImage_620x310.data.attributes.url} 640w, https://cms.alkholi.com${division.attributes.divisionImage_620x620.data.attributes.url} 2000w`}
									alt="division"
									class="w-full aspect-[1/0.65] sm:aspect-[1/1]"
								/>
							</div>
						</div>
						<div
							style="overflow-x: hidden;"
							class="xl:col-span-4 {division.attributes.divisionOrder % 2 === 0
								? 'text-right'
								: ''}"
						>
							<div
								bind:this={divisionsText[index]}
								class="flex flex-col h-full justify-center pt-5 sm:pt-0 space-y-3 sm:space-y-5 lg:space-y-8"
							>
								<div>
									<p
										class=" sm:mt-0 text-primary-500 uppercase text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold"
									>
										{division.attributes.divisionTitle}
									</p>
								</div>
								<div>
									<p class=" text-sm sm:text-base md:text-lg xl:text-xl">
										{division.attributes.divisionParagraph}
									</p>
								</div>
								<!-- <div>
									<a
										href="/"
										class="btn bg-secondary-500 rounded-sm text-white text-sm sm:text-base md:text-lg xl:text-xl font-bold px-5 py-2 min-[450px]:px-5 min-[450px]:py-3 md:px-8">{$LL.hero.more()}</a
									>
								</div> -->
							</div>
						</div>
					</div>
				{:else}
					<!-- Arabic Language -->
					<div
						class="grid sm:grid-cols-2 xl:grid-cols-6 sm:gap-6 lg:gap-12 xl:gap-12 pb-12 ar-font"
						dir="rtl"
					>
						<div
							class="xl:col-span-2 {division.attributes.divisionOrder % 2 === 0
								? 'sm:order-last'
								: ''}"
						>
							<div bind:this={divisions[index]}>
								<img
									src={`https://cms.alkholi.com${division.attributes.divisionImage_620x620.data.attributes.url}`}
									srcset={`https://cms.alkholi.com${division.attributes.divisionImage_620x310.data.attributes.url} 640w, https://cms.alkholi.com${division.attributes.divisionImage_620x620.data.attributes.url} 2000w`}
									alt="division"
									class="w-full aspect-[1/0.65] sm:aspect-[1/1]"
								/>
							</div>
						</div>
						<div
							style="overflow-x: hidden;"
							class="xl:col-span-4 {division.attributes.divisionOrder % 2 === 0
								? 'text-right'
								: ''}"
						>
							<div
								bind:this={divisionsText[index]}
								class="flex flex-col h-full justify-center pt-5 sm:pt-0 space-y-3 sm:space-y-5 lg:space-y-8"
							>
								<div>
									<p
										class=" sm:mt-0 text-primary-500 uppercase text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold"
									>
										{division.attributes.localizations.data[0].attributes.divisionTitle}
									</p>
								</div>
								<div>
									<p class=" text-sm sm:text-base md:text-lg xl:text-xl">
										{division.attributes.localizations.data[0].attributes.divisionParagraph}
									</p>
								</div>
								<!-- <div>
									<a
										href="/"
										class="btn bg-secondary-500 rounded-sm text-white text-sm sm:text-base md:text-lg xl:text-xl font-bold px-5 py-2 min-[450px]:px-5 min-[450px]:py-3 md:px-8">{$LL.hero.more()}</a
									>
								</div> -->
							</div>
						</div>
					</div>
				{/if}
			{/each}
		{/if}
		<div class="pb-16" />
	</div>
</section>
