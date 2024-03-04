<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { pageDirection } from '$lib/stores/store';
	import { onMount } from 'svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let itemsRefs: any[] = [];
	// for (let index = 0; index < 3; index++) {
	// 	itemsRefs[index] = null;
	// }

	// items animation
	onMount(() => {
		itemsRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					start: 'top bottom-=200',
					end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 1,
				y: '50px',
				opacity: 0,
				delay: index * 0.4
			});
		});
	});
</script>

<section class="max-w-[1920px] mx-auto bg-primary-500 text-white">
	<div class="container mx-auto px-3 py-5 xl:py-12 {$currentAppLang === 'ar' ? 'ar-font' : ''}">
		<div class="sm:flex">
			<div
				bind:this={itemsRefs[0]}
				class="sm:w-1/2 min-[400px]:px-12 min-[550px]:px-16 sm:px-5 md:px-8 xl:px-24 2xl:px-36 py-5"
			>
				<div class="flex flex-col items-center">
					<img
						src="/images/about/visionAndMission/target_300x300.webp"
						srcset="
            /images/about/visionAndMission/target_200x200.webp 1280w,
            /images/about/visionAndMission/target_300x300.webp 2000w
            "
						class="aspect-[1/1] w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 2xl:w-44 2xl:h-44"
						alt="our mission"
					/>
					<p
						class="heading text-lg sm:text-xl lg:text-2xl xl:text-3xl py-5 xl:pt-8 xl:pb-3 {$currentAppLang ===
						'ar'
							? 'ar-font font-bold'
							: ''}"
					>
						{$LL.about.missionVision.missionT()}
					</p>
					<p class="text-center font-thin text-sm sm:text-base md:text-lg xl:text-xl py-1">
						{$LL.about.missionVision.missionP()}
					</p>
				</div>
			</div>

			<div
				bind:this={itemsRefs[1]}
				class="sm:w-1/2 min-[400px]:px-12 min-[550px]:px-16 sm:px-5 md:px-8 xl:px-24 2xl:px-36 py-5"
			>
				<div class="flex flex-col items-center">
					<img
						src="/images/about/visionAndMission/idea_180x180.webp"
						srcset="
            /images/about/visionAndMission/idea_120x120.webp 1280w,
            /images/about/visionAndMission/idea_180x180.webp 2000w
            "
						class="aspect-[1/1] w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 2xl:w-44 2xl:h-44"
						alt="our vision"
					/>
					<p
						class="heading text-lg sm:text-xl lg:text-2xl xl:text-3xl py-5 xl:pt-8 xl:pb-3 {$currentAppLang ===
						'ar'
							? 'ar-font font-bold'
							: ''}"
					>
						{$LL.about.missionVision.visionT()}
					</p>
					<p class="text-center font-thin text-sm sm:text-base md:text-lg xl:text-xl py-1">
						{$LL.about.missionVision.visionP()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
