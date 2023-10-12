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

	// Second counter object
	let secondCounter = { value: 0 };
	let secondCounterStore = writable(secondCounter);

	// Third counter object
	let thirdCounter = { value: 0 };
	let thirdCounterStore = writable(thirdCounter);

	// Animate the first counter
	onMount(() => {
		gsap.to(counter, {
			value: 2100,
			duration: 1,
			round: 1,
			scrollTrigger: {
				trigger: '.animated-number',
				start: 'top bottom-=35%',
				markers: false
			},
			onUpdate: () => counterStore.set(counter)
		});
	});

	// Animate the second counter
	onMount(() => {
		gsap.to(secondCounter, {
			value: 21,
			duration: 1,
			round: 1,
			scrollTrigger: {
				trigger: '.animated-number-second',
				start: 'top bottom-=35%',
				markers: false
			},
			onUpdate: () => secondCounterStore.set(secondCounter)
		});
	});

	// Animate the third counter
	onMount(() => {
		gsap.to(thirdCounter, {
			value: 450,
			duration: 1,
			round: 1,
			scrollTrigger: {
				trigger: '.animated-number-third',
				start: 'top bottom-=35%',
				markers: false
			},
			onUpdate: () => thirdCounterStore.set(thirdCounter)
		});
	});
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="max-sm:hidden">
		<div class="relative">
			<div class="absolute inset-0 bg-black opacity-10" />
			<div>
				<img
					alt="labors working on a project"
					src="images/home/introSection/asset-10_2000x600.webp"
					srcset="images/home/introSection/asset-10_1200x480.webp 1024w,images/home/introSection/asset-10_2000x600.webp 2000w"
					class="w-full aspect-[1/0.4] lg:aspect-[1/0.3]"
				/>
			</div>
		</div>

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
						class="text-secondary-500 text-4xl lg:text-5xl 2xl:text-6xl my-1 lg:my-3 2xl:my-5 animated-number-second"
						style="font-family: 'Gotham-Bold';"
					>
						{Math.round($secondCounterStore.value)}
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
				<div
					class="flex flex-col items-center py-3 bg-tertiary-50-900-token w-full aspect-[1/1.38] md:aspect-[1/1] xl:aspect-[1/0.8]"
				>
					<!-- icon -->
					<img
						alt="a labors icon"
						src="images/home/introSection/asset-13_200x200.webp"
						class="w-24 h-24 lg:w-36 lg:h-36 2xl:w-48 2xl:h-48"
					/>
					<!-- number -->
					<p
						class="text-secondary-500 text-4xl lg:text-5xl 2xl:text-6xl my-1 lg:my-3 2xl:my-5 animated-number-third"
						style="font-family: 'Gotham-Bold';"
					>
						{Math.round($thirdCounterStore.value)}
					</p>
					<!-- text -->
					<p
						class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-primary-500 px-1 text-center {$currentAppLang ===
						'ar'
							? 'ar-font'
							: ''}"
					>
						{$LL.home.intro.saudiEmployees()}
					</p>
				</div>
			</div>
		</div>

		<!-- view more button -->
		<div class="text-center pt-10 {$currentAppLang === 'ar' ? 'ar-font' : ''}">
			<div>
				<button
					class="btn !bg-transparent flex-col text-primary-500 border-0 text-xs sm:text-sm md:text-base font-semibold px-2 py-1"
				>
					<span>
						<p>{$LL.generals.more()}</p>
					</span>
					<span class="mt-2"
						><svg
							viewBox="0 0 1024 1024"
							class="icon w-3 md:w-5 h-3 md:h-5"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
								fill="#000000"
							/></svg
						>
					</span>
				</button>
			</div>
			<div />
		</div>
	</div>

	<div class="sm:hidden">
		<div class="relative">
			<div class="absolute max-w-[80%] inset-0 bg-black opacity-10" />
			<div class="max-w-[80%]">
				<img
					alt="labors working on a project"
					src="images/home/introSection/asset-10_600x450.webp"
					class="w-full aspect-[1/0.75]"
				/>
			</div>

			<div class="absolute top-3 right-5 max-[380px]:hidden h-[90%]">
				<div class="flex flex-col justify-evenly h-full">
					<div class="flex items-center p-1 bg-tertiary-50-900-token w-full">
						<!-- icon -->
						<img
							alt="a labors icon"
							src="images/home/introSection/asset-11_100x100.webp"
							class="w-12 h-12"
						/>
						<div>
							<!-- number -->
							<p class="text-secondary-500 px-2 text-2xl" style="font-family: 'Gotham-Bold'">
								2100
							</p>
							<!-- text -->
							<p
								class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-primary-500 text-center {$currentAppLang ===
								'ar'
									? 'ar-font'
									: ''}"
							>
								{$LL.home.intro.manpower()}
							</p>
						</div>
					</div>
					<div class="flex items-center p-1 bg-tertiary-50-900-token w-full">
						<!-- icon -->
						<img
							alt="a labors icon"
							src="images/home/introSection/asset-12_100x100.webp"
							class="w-12 h-12"
						/>
						<div>
							<!-- number -->
							<p class="text-secondary-500 px-2 text-2xl" style="font-family: 'Gotham-Bold'">
								2100
							</p>
							<!-- text -->
							<p
								class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-primary-500 text-center {$currentAppLang ===
								'ar'
									? 'ar-font'
									: ''}"
							>
								{$LL.home.intro.founded()}
							</p>
						</div>
					</div>
					<div class="flex items-center p-1 bg-tertiary-50-900-token w-full">
						<!-- icon -->
						<img
							alt="a labors icon"
							src="images/home/introSection/asset-13_100x100.webp"
							class="w-12 h-12"
						/>
						<div>
							<!-- number -->
							<p class="text-secondary-500 px-2 text-2xl" style="font-family: 'Gotham-Bold'">
								2100
							</p>
							<!-- text -->
							<p
								class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-primary-500 text-center {$currentAppLang ===
								'ar'
									? 'ar-font'
									: ''}"
							>
								{$LL.home.intro.saudiEmployees()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
