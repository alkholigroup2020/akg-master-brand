<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';

	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let companiesRefs: any[] = [];
	// for (let index = 0; index < 10; index++) {
	// 	companiesRefs[index] = null;
	// }

	let textElement: any;
	// const theText = $LL.home.companies.title();

	let theText: string;
	if ($currentAppLang === 'en') {
		theText = 'OUR COMPANIES';
	} else {
		theText = 'شـــركاتنا';
	}

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

<section class="container px-3 mx-auto mb-32 xl:mb-40">
	<!-- title -->
	<div class="text-center py-5 md:py-8">
		<p
			bind:this={textElement}
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold uppercase text-primary-500 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		/>
	</div>

	<!-- logos -->
	<div class="flex flex-col pt-5">
		<div
			class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 pt-6 md:pt-12 px-5 min-[400px]:px-12
			min-[500px]:px-8 lg:px-24 2xl:px-40 gap-x-12 min-[400px]:gap-x-20 min-[500px]:gap-x-12 sm:gap-x-16
			lg:gap-x-24 2xl:gap-x-36 gap-y-8 md:gap-y-12"
		>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[0]}>
				<div>
					<img
						src="/images/home/companiesSection/AKG-healthcare_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[1]}>
				<div>
					<img
						src="/images/home/companiesSection/AKG-Tech_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[2]}>
				<div>
					<img
						src="/images/home/companiesSection/AKG-Trading_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[3]}>
				<div>
					<img
						src="/images/home/companiesSection/akstra_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[4]}>
				<div class="p-2 xl:p-5">
					<img
						src="/images/home/companiesSection/aktek_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[5]}>
				<div class="p-1 xl:p-3">
					<img
						src="/images/home/companiesSection/amos_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[6]}>
				<a
					href="https://www.buildingtec-elevators.com/"
					target="_blank"
					aria-label="the company webpage"
				>
					<div>
						<img
							src="/images/home/companiesSection/btech_300x150.webp"
							alt="chairman"
							class="w-full aspect-[1/0.5]"
						/>
					</div>
				</a>
			</div>
			<div class="flex flex-col items-center justify-center" bind:this={companiesRefs[7]}>
				<div class="p-2 xl:p-5">
					<img
						src="/images/home/companiesSection/up_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
