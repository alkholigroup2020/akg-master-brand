<script lang="ts">
	import { writable } from 'svelte/store';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
	import { onMount } from 'svelte';

	// Register the ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	// Counter object
	let counter = { value: 0 };
	let counterStore = writable(counter);

	// Animate the counter
	onMount(() => {
		gsap.to(counter, {
			value: 2100,
			duration: 1,
			round: 1,
			scrollTrigger: {
				trigger: '.animated-number',
				start: 'top bottom-=40%',
				markers: true
			},
			onUpdate: () => counterStore.set(counter)
		});
	});
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="max-sm:hidden">
		<!-- cards -->
		<div class="relative container mx-auto px-3 -mt-24 xl:-mt-40">
			<div class="grid grid-cols-3 gap-4">
				<div
					class="flex flex-col items-center py-3 bg-tertiary-50-900-token w-full aspect-[1/1.38] md:aspect-[1/1] xl:aspect-[1/0.8]"
				>
					<!-- icon -->
					<img
						alt="a labors icon"
						src="images/home/introSection/asset-11_200x200.webp"
						class="w-24 h-24 lg:w-36 lg:h-36 2xl:w-48 2xl:h-48"
					/>
					<!-- number -->
					<p
						class="text-secondary-500 text-4xl lg:text-5xl 2xl:text-6xl my-1 lg:my-3 2xl:my-5 animated-number"
						style="font-family: 'Gotham-Bold';"
					>
						{Math.round($counterStore.value)}
					</p>
					<!-- text -->
					<p
						class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-primary-500 px-1 text-center {$currentAppLang ===
						'ar'
							? 'ar-font'
							: ''}"
					>
						{$LL.home.intro.manpower()}
					</p>
				</div>
				<div
					class="flex flex-col items-center py-3 bg-tertiary-50-900-token w-full aspect-[1/1.38] md:aspect-[1/1] xl:aspect-[1/0.8]"
				>
					<!-- icon -->
					<img
						alt="a labors icon"
						src="images/home/introSection/asset-12_200x200.webp"
						class="w-24 h-24 lg:w-36 lg:h-36 2xl:w-48 2xl:h-48"
					/>
					<!-- number -->
					<p
						class="text-secondary-500 text-4xl lg:text-5xl 2xl:text-6xl my-1 lg:my-3 2xl:my-5"
						style="font-family: 'Gotham-Bold';"
					>
						21
					</p>
					<!-- text -->
					<p
						class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-center text-primary-500 px-1 {$currentAppLang ===
						'ar'
							? 'ar-font'
							: ''}"
					>
						{$LL.home.intro.founded()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
