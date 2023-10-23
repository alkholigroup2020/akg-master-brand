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

<section>
	<div class="container mx-auto px-3 py-5 xl:py-12 {$currentAppLang === 'ar' ? 'ar-font' : ''}">
		<div class="sm:flex">
			<div
				bind:this={itemsRefs[0]}
				class="sm:w-1/2 min-[400px]:px-12 min-[550px]:px-16 sm:px-5 md:px-8 xl:px-24 2xl:px-36 py-5"
			>
				<div class="flex flex-col items-center">
					<img
						src="/images/about/visionAndMission/asset-14_180x180.webp"
						srcset="
            /images/about/visionAndMission/asset-14_120x120.webp 1280w,
            /images/about/visionAndMission/asset-14_180x180.webp 2000w
            "
						class="w-[90px] h-[90px] md:w-28 md:h-28 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 aspect-[1/1]"
						alt="our mission"
					/>
					<p
						class="heading text-base sm:text-lg lg:text-xl xl:text-2xl py-5 xl:pt-8 xl:pb-3 {$currentAppLang ===
						'ar'
							? 'ar-font font-bold'
							: ''}"
					>
						{$LL.about.missionVision.missionT()}
					</p>
					<p class="text-center text-sm sm:text-base md:text-lg xl:text-xl">
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
						src="/images/about/visionAndMission/asset-15_180x180.webp"
						srcset="
            /images/about/visionAndMission/asset-15_120x120.webp 1280w,
            /images/about/visionAndMission/asset-15_180x180.webp 2000w
            "
						class="w-[90px] h-[90px] md:w-28 md:h-28 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 aspect-[1/1]"
						alt="our vision"
					/>
					<p
						class="heading text-base sm:text-lg lg:text-xl xl:text-2xl py-5 xl:pt-8 xl:pb-3 {$currentAppLang ===
						'ar'
							? 'ar-font font-bold'
							: ''}"
					>
						{$LL.about.missionVision.visionT()}
					</p>
					<p class="text-center text-sm sm:text-base md:text-lg xl:text-xl">
						{$LL.about.missionVision.visionP()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
