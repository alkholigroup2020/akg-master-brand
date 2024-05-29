<script lang="ts">
	import { onMount } from 'svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let textElement: any;
	let theText: string;
	if ($currentAppLang === 'en') {
		theText = 'Executives Members';
	} else {
		theText = 'الأعضاء التنفيذيين';
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

	let imageRefs: any[] = [];
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
	<div class="text-primary-500 text-center flex flex-col pt-8 xl:pt-12 pb-16 xl:pb-24 uppercase">
		<!-- title -->
		<div class="py-5 xl:py-8">
			<p
				bind:this={textElement}
				class="text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold {$currentAppLang ===
				'ar'
					? 'ar-font '
					: ''}"
			/>
		</div>
		<!-- team members -->
		<div
			class="min-[380px]:flex justify-around sm:justify-center items-center py-8 md:py-12 xl:py-20 max-[380px]:space-y-8
			 sm:space-x-10 md:space-x-20 xl:space-x-40"
		>
			<div class="flex flex-col items-center" bind:this={imageRefs[0]}>
				<div class="border-2 rounded-full">
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

			<div class="flex flex-col items-center" bind:this={imageRefs[1]}>
				<div class="border-2 rounded-full">
					<img
						src="/images/about/team/alsafty_180x180.webp"
						srcset="/images/about/team/alsafty_120x120.webp 768w, /images/about/team/alsafty_180x180.webp 2000w"
						alt="a team member"
						class="rounded-full aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Mohamed ElSafty</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">Group CFO</p>
			</div>
		</div>

		<div
			class="bg-primary-500 text-white grid grid-cols-1 min-[380px]:grid-cols-2 xl:grid-cols-4
			gap-y-12 md:gap-y-16 xl:gap-y-24 py-16 md:py-20 xl:py-28 sm:px-16 md:px-24 lg:px-44 xl:px-20"
		>
			<div class="flex flex-col items-center" bind:this={imageRefs[2]}>
				<div class="border-2 rounded-full">
					<img
						src="/images/about/team/asset-22_180x180.webp"
						srcset="/images/about/team/asset-22_120x120.webp 768w, /images/about/team/asset-22_180x180.webp 2000w"
						alt="a team member"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Nasser Al-Dowsary</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">
					Managing Director O&M
				</p>
			</div>

			<div class="flex flex-col items-center" bind:this={imageRefs[3]}>
				<div class="border-2 rounded-full">
					<img
						src="/images/about/team/asset-19_180x180.webp"
						srcset="/images/about/team/asset-19_120x120.webp 768w, /images/about/team/asset-19_180x180.webp 2000w"
						alt="a team member"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Ayman Elgabbar</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize px-8">
					General Manager for
				</p>
				<p class="pt-0 text-sm sm:text-base md:text-lg xl:text-xl capitalize px-8">
					Contracting and MEP
				</p>
			</div>

			<div class="flex flex-col items-center" bind:this={imageRefs[4]}>
				<div class="border-2 rounded-full">
					<img
						src="/images/about/team/asset-24_180x180.webp"
						srcset="/images/about/team/asset-24_120x120.webp 768w, /images/about/team/asset-24_180x180.webp 2000w"
						alt="a team member"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Waleed Jaafar</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">
					Managing Director For
				</p>
				<p class="pt-0 text-sm sm:text-base md:text-lg xl:text-xl capitalize">Aramco Projects</p>
			</div>

			<div class="flex flex-col items-center" bind:this={imageRefs[5]}>
				<div>
					<img
						src="/images/about/team/asset-27_180x180.webp"
						srcset="/images/about/team/asset-27_120x120.webp 768w, /images/about/team/asset-27_180x180.webp 2000w"
						alt="a team member"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">George Flamouropoulos</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">General Manager</p>
			</div>
		</div>

		<div
			class="grid grid-cols-1 min-[380px]:grid-cols-2 xl:grid-cols-3
			gap-y-12 md:gap-y-16 xl:gap-y-24 py-16 md:py-20 xl:py-28 sm:px-16 md:px-24 lg:px-40 xl:px-48 2xl:px-56"
		>
			<div class="flex flex-col items-center" bind:this={imageRefs[6]}>
				<div class="border-2 rounded-full">
					<img
						src="/images/about/team/Saeed_180x180.webp"
						srcset="/images/about/team/Saeed_120x120.webp 768w, /images/about/team/Saeed_180x180.webp 2000w"
						alt="a team member"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 rounded-full"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Saeed Alghamdi</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">
					Business Dev. Director
				</p>
			</div>

			<!-- <div class="flex flex-col items-center" bind:this={imageRefs[7]}>
				<div>
					<img
						src="/images/about/team/samer_180x180.webp"
						srcset="/images/about/team/samer_120x120.webp 768w, /images/about/team/samer_180x180.webp 2000w"
						alt="a team member"
						class="rounded-full aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Samer Alkilani</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">
					Business Dev. Director
				</p>
			</div> -->

			<div class="flex flex-col items-center" bind:this={imageRefs[7]}>
				<div class="border-2 rounded-full">
					<img
						src="/images/about/team/asset-26_180x180.webp"
						srcset="/images/about/team/asset-26_120x120.webp 768w, /images/about/team/asset-26_180x180.webp 2000w"
						alt="a team member"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Amr Bahi ElDeen</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">IT Director</p>
			</div>

			<!-- <div class="flex flex-col items-center" bind:this={imageRefs[9]}>
				<div>
					<img
						src="/images/about/team/alhossam_180x180.webp"
						srcset="/images/about/team/alhossam_120x120.webp 768w, /images/about/team/alhossam_180x180.webp 2000w"
						alt="a team member"
						class="rounded-full aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Alhosam Alghamdi</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">
					HR & Admin Director
				</p>
			</div> -->

			<div class="flex flex-col items-center" bind:this={imageRefs[8]}>
				<div class="rounded-full border-2 aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36">
					<img
						src="/images/about/team/mostafa_180x180.webp"
						srcset="/images/about/team/mostafa_120x120.webp 768w, /images/about/team/mostafa_180x180.webp 2000w"
						alt="a team member"
						class="rounded-full aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg xl:text-xl">Mostafa Helmy</p>
				<p class="pt-2 text-sm sm:text-base md:text-lg xl:text-xl capitalize">
					Special Projects Director
				</p>
			</div>
		</div>
	</div>
</section>
