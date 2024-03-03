<script lang="ts">
	import { onMount } from 'svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let textElement: any;
	let theText: string;
	if ($currentAppLang === 'en') {
		theText = 'Board Members';
	} else {
		theText = 'أعضاء مجلس الإدارة';
	}

	let imageRefs: any[] = [];
	// for (let index = 0; index < 3; index++) {
	// 	imageRefs[index] = null;
	// }

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

	// cards animation
	onMount(() => {
		imageRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					start: 'top bottom-=100',
					// end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.5,
				y: '25px',
				opacity: 0,
				delay: index * 0.2
			});
		});
	});
</script>

<section class="max-w-[1920px] mx-auto">
	<div
		class="text-white text-center bg-primary-500 flex flex-col pt-8 xl:pt-12 pb-12 xl:pb-24 uppercase"
	>
		<!-- title -->
		<div class="py-5 md:py-8">
			<p
				bind:this={textElement}
				class="text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold {$currentAppLang ===
				'ar'
					? 'ar-font '
					: ''}"
			/>
		</div>

		<!-- chairman level -->
		<!-- <div class="sm:flex justify-center py-10 gap-8 md:gap-24"> -->
		<div class="flex flex-col items-center" bind:this={imageRefs[0]}>
			<div>
				<img
					src="/images/about/team/asset-16_180x180.webp"
					srcset="/images/about/team/asset-16_120x120.webp 768w, /images/about/team/asset-16_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-28 h-28 md:w-36 md:h-36 xl:w-48 xl:h-48"
				/>
			</div>
			<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl capitalize">
				Dr. HAMZA AL KHOLI
			</p>
			<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">Chairman</p>
		</div>

		<div class="flex flex-col items-center mt-8 md:mt-12" bind:this={imageRefs[1]}>
			<div>
				<img
					src="/images/about/team/faisal_180x180.webp"
					srcset="/images/about/team/faisal_120x120.webp 768w, /images/about/team/faisal_180x180.webp 2000w"
					alt="Vice chairman"
					class="aspect-[1/1] w-28 h-28 md:w-36 md:h-36 xl:w-44 xl:h-44 rounded-full"
				/>
			</div>
			<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl capitalize">
				FAISAL AL KHOLI
			</p>
			<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">Vice Chairman</p>
		</div>
		<!-- </div> -->

		<!-- board level -->
		<!-- <div
			class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-center md:space-x-6 lg:space-x-16 xl:space-x-20 2xl:space-x-24
			gap-8 xl:gap-8
			min-[400px]:px-10 min-[550px]:px-24 min-[650px]:px-32 md:px-0 xl:px-16 2xl:px-48"
		>
			<div class="flex flex-col items-center" bind:this={imageRefs[1]}>
				<div>
					<img
						src="/images/about/team/asset-17_180x180.webp"
						srcset="/images/about/team/asset-17_120x120.webp 768w, /images/about/team/asset-17_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">FAISAL AL KHOLI</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">Vice Chairman</p>
			</div>

			<div class="flex flex-col items-center" bind:this={imageRefs[2]}>
				<div>
					<img
						src="/images/about/team/asset-18_180x180.webp"
						srcset="/images/about/team/asset-18_120x120.webp 768w, /images/about/team/asset-18_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">DARKO MACURA</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">Group CEO</p>
			</div>

			<div class="flex flex-col items-center" bind:this={imageRefs[3]}>
				<div>
					<img
						src="/images/about/team/malkholi_180x180.webp"
						srcset="/images/about/team/malkholi_120x120.webp 768w, /images/about/team/malkholi_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] rounded-full w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Mohamed Alkholi</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">Board Member</p>
			</div>

			<div class="flex flex-col items-center" bind:this={imageRefs[4]}>
				<div>
					<img
						src="/images/about/team/nagui_180x180.webp"
						srcset="/images/about/team/nagui_120x120.webp 768w, /images/about/team/nagui_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] rounded-full w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Nagui Zaki</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">Board Member</p>
			</div>
			
			<div class="flex flex-col items-center" bind:this={imageRefs[5]}>
				<div>
					<img
						src="/images/about/team/saud_180x180.webp"
						srcset="/images/about/team/saud_120x120.webp 768w, /images/about/team/saud_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] rounded-full w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Saud ALTASSAN</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">Board Member</p>
			</div>
		</div> -->
	</div>
</section>
