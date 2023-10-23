<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { onMount } from 'svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let textElement: any;
	const theText = $LL.about.team.title();

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
	<div class="text-white text-center bg-primary-500 flex flex-col py-8 xl:py-12 uppercase">
		<!-- title -->
		<div class="py-5 md:py-8">
			<p
				bind:this={textElement}
				class="text-center text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-semibold {$currentAppLang ===
				'ar'
					? 'ar-font '
					: ''}"
			/>
		</div>

		<!-- chairman level -->
		<div class="flex justify-center py-12">
			<div class="flex flex-col items-center" bind:this={imageRefs[0]}>
				<div>
					<img
						src="/images/about/team/asset-16_180x180.webp"
						srcset="/images/about/team/asset-16_120x120.webp 768w, /images/about/team/asset-16_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-28 h-28 md:w-36 md:h-36 xl:w-40 xl:h-40"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">DR. HAMZA AL KHOLI</p>
			</div>
		</div>

		<!-- board level -->
		<div
			class="grid grid-cols-2 md:flex justify-center md:space-x-6 lg:space-x-16 xl:space-x-20 2xl:space-x-24 py-3 min-[400px]:px-10 min-[550px]:px-24 min-[650px]:px-32 md:px-0"
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
			</div>
		</div>

		<!-- directors level #1 -->
		<div
			class="grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-16 py-10 md:py-16 min-[400px]:px-10 min-[550px]:px-24 min-[650px]:px-32 md:px-12 lg:px-36 xl:px-52 2xl:px-96"
		>
			<!-- <div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-20_180x180.webp"
						srcset="/images/about/team/asset-20_120x120.webp 768w, /images/about/team/asset-20_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Mohamed Ghoniem</p>
			</div> -->
			<!-- <div class="flex flex-col items-center">
				<div>
					<img
						src="/images/profile.png"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 rounded-full"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Unknown</p>
			</div> -->
			<div class="flex flex-col items-center" bind:this={imageRefs[3]}>
				<div>
					<img
						src="/images/about/team/asset-22_180x180.webp"
						srcset="/images/about/team/asset-22_120x120.webp 768w, /images/about/team/asset-22_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Nasser Al-Dowsary</p>
			</div>
			<div class="flex flex-col items-center" bind:this={imageRefs[4]}>
				<div>
					<img
						src="/images/about/team/asset-26_180x180.webp"
						srcset="/images/about/team/asset-26_120x120.webp 768w, /images/about/team/asset-26_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Amr Bahi ElDeen</p>
			</div>
			<div class="flex flex-col items-center" bind:this={imageRefs[5]}>
				<div>
					<img
						src="/images/about/team/asset-19_180x180.webp"
						srcset="/images/about/team/asset-19_120x120.webp 768w, /images/about/team/asset-19_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Ayman Elgabbar</p>
			</div>

			<div class="flex flex-col items-center" bind:this={imageRefs[6]}>
				<div>
					<img
						src="/images/about/team/asset-24_180x180.webp"
						srcset="/images/about/team/asset-24_120x120.webp 768w, /images/about/team/asset-24_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Waleed Jaafar</p>
			</div>

			<div class="flex flex-col items-center" bind:this={imageRefs[7]}>
				<div>
					<img
						src="/images/about/team/asset-23_180x180.webp"
						srcset="/images/about/team/asset-23_120x120.webp 768w, /images/about/team/asset-23_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Saeed Al-Ghamdy</p>
			</div>
			<div class="flex flex-col items-center" bind:this={imageRefs[8]}>
				<div>
					<img
						src="/images/about/team/asset-27_180x180.webp"
						srcset="/images/about/team/asset-27_120x120.webp 768w, /images/about/team/asset-27_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">George</p>
			</div>
		</div>

		<!-- directors level #2 -->
		<!-- <div
			class="grid grid-cols-2 gap-y-10 md:flex justify-center md:space-x-6 lg:space-x-16 xl:space-x-20 2xl:space-x-24 py-8 min-[400px]:px-10 min-[550px]:px-24 min-[650px]:px-32 md:px-0"
		>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/profile.png"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 rounded-full"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Unknown</p>
			</div>
		</div> -->

		<!-- directors level #3 -->
		<!-- <div
			class="grid grid-cols-2 gap-y-10 md:flex justify-center md:space-x-6 lg:space-x-16 xl:space-x-20 2xl:space-x-24 py-8 min-[400px]:px-10 min-[550px]:px-24 min-[650px]:px-32 md:px-0"
		>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/profile.png"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 rounded-full"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Unknown</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/profile.png"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 rounded-full"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Unknown</p>
			</div>
		</div> -->
	</div>
</section>
