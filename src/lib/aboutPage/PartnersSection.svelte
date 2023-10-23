<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let companiesRefs: any[] = [];
	// for (let index = 0; index < 3; index++) {
	// 	companiesRefs[index] = null;
	// }

	let textElement: any;
	const theText = $LL.about.partners.title();

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

	// companies animation
	onMount(() => {
		companiesRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					start: 'top bottom-=400',
					end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.8,
				// y: '100px',
				opacity: 0,
				delay: index * 0.2
			});
		});
	});
</script>

<section class="container px-3 mx-auto pt-5 pb-10 2xl:pt-12 2xl:pb-20">
	<!-- title -->
	<div class="text-center">
		<p
			bind:this={textElement}
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] pt-5 xl:pt-8 font-semibold text-primary-500 mb-8 xl:mb-12 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		/>
	</div>

	<div dir={$pageDirection}>
		<p
			class="text-sm sm:text-base md:text-lg xl:text-xl lg:px-8 2xl:px-24 leading-8 text-justify md:text-center {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		>
			{$LL.about.partners.p1()}
		</p>
	</div>

	<div class="flex flex-col pt-8 pb-16">
		<div
			class="grid grid-cols-2 gap-y-5 md:flex justify-center
      md:space-x-6 lg:space-x-16 xl:space-x-20 2xl:space-x-24
      py-8 min-[400px]:px-8 min-[550px]:px-24 min-[650px]:px-12 md:px-0"
		>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[0]}>
				<div>
					<img
						src="/images/about/partners/image-1_180x180.webp"
						srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[1]}>
				<div>
					<img
						src="/images/about/partners/image-2_180x180.webp"
						srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[2]}>
				<div>
					<img
						src="/images/about/partners/image-3_180x180.webp"
						srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[3]}>
				<div>
					<img
						src="/images/about/partners/image-4_180x180.webp"
						srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[4]}>
				<div>
					<img
						src="/images/about/partners/image-5_180x180.webp"
						srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
