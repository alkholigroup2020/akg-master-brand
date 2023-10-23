<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { onMount } from 'svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let numbersRefs: any[] = [];
	// for (let index = 0; index < 3; index++) {
	// 	numbersRefs[index] = null;
	// }

	// numbers animation
	onMount(() => {
		numbersRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					// start: 'top bottom-=400',
					// end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.2,
				y: '50px',
				opacity: 0,
				delay: index * 0.1
			});
		});
	});
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="relative">
		<div class="absolute inset-0 bg-black opacity-10" />

		<img
			alt="a section background"
			src="/images/about/timeLine/asset-03_2000x800.webp"
			srcset="/images/about/timeLine/asset-03_500x450.webp 450w,
			/images/about/timeLine/asset-03_700x560.webp 640w,
			/images/about/timeLine/asset-03_800x560.webp 768w,
			/images/about/timeLine/asset-03_1100x660.webp 1024w,
			/images/about/timeLine/asset-03_1400x700.webp 1280w,
			/images/about/timeLine/asset-03_1800x810.webp 1536w,
			/images/about/timeLine/asset-03_2000x800.webp 2000w"
			class="w-full aspect-[1/1.1] min-[330px]:aspect-[1/0.9] min-[450px]:aspect-[1/0.8] min-[500px]:aspect-[1/0.7] sm:aspect-[1/0.7] md:aspect-[1/0.6] lg:aspect-[1/0.5] xl:aspect-[1/0.45] 2xl:aspect-[1/0.4]"
		/>

		<div class=" absolute inset-0 w-[100%] flex" dir="ltr">
			<div class="w-[80%] h-full">
				<div
					class="flex flex-col justify-center text-right w-full h-full pr-2 min-[450px]:pr-8 xl:pr-24 2xl:pr-36 text-primary-500"
				>
					<div
						class="heading text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
					>
						<p class="min-[350px]:mb-3 md:mb-7 2xl:mb-5">
							20<span class="text-success-500">21</span>
						</p>
					</div>
					<div
						class="heading text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
					>
						<p class="md:mb-2 2xl:mb-3">Founded</p>
					</div>
					<div
						class="heading text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
					>
						<p class="mb-2 min-[350px]:mb-3 md:mb-5 lg:mb-8 2xl:mb-12">AlKholi Group</p>
					</div>
					<div
						class="hidden min-[300px]:block pl-3 min-[450px]:pl-[10%] lg:pl-[25%] 2xl:pl-[30%]
						text-xs sm:text-base md:text-lg xl:text-xl"
					>
						<p class=" {$currentAppLang === 'ar' ? 'ar-font' : ''}">
							{$LL.about.timeline.p1()}
						</p>
					</div>
				</div>
			</div>

			<div class="w-[1%] h-full border-l-2 border-surface-300" />

			<div class="w-[19%] h-full flex items-center pl-3 min-[550px]:pl-5 md:pl-8 lg:pl-12">
				<ul
					class="space-y-3 min-[380px]:space-y-5 min-[550px]:space-y-7 xl:space-y-10 2xl:space-y-12
					text-base min-[400px]:text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-semibold text-primary-500 hidden min-[300px]:block"
				>
					<li bind:this={numbersRefs[0]}>
						<span>
							<span class="flex justify-center rotate-180">
								<svg
									viewBox="0 0 1024 1024"
									class="icon w-3 sm:w-5 md:w-8 h-3 sm:h-5 md:h-8"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
										fill="#000000"
									/></svg
								>
							</span>
						</span>
					</li>
					<li bind:this={numbersRefs[1]}>1992</li>
					<li bind:this={numbersRefs[2]}>2013</li>
					<li bind:this={numbersRefs[3]}>2016</li>
					<li bind:this={numbersRefs[4]}>2017</li>
					<li bind:this={numbersRefs[5]}>2019</li>
					<li bind:this={numbersRefs[6]}>
						<div
							class="flex items-center -ml-[18px] min-[400px]:-ml-[19px] min-[510px]:-ml-[20px] min-[550px]:-ml-[28px] min-[600px]:-ml-[29px]
							sm:-ml-[33px] md:-ml-[47px] lg:-ml-[65px] xl:-ml-[68px] 2xl:-ml-[70px] min-[1700px]:-ml-[73px]"
						>
							<div class="pr-2 min-[550px]:pr-5 md:pr-8 lg:pr-12 2xl:pr-14">
								<div class="w-2 sm:w-4 h-2 sm:h-4 bg-success-500 rounded-full" />
							</div>
							<p class="heading">2021</p>
						</div>
					</li>
					<li bind:this={numbersRefs[7]}>
						<span class=" flex justify-center">
							<svg
								viewBox="0 0 1024 1024"
								class="icon w-3 sm:w-5 md:w-8 h-3 sm:h-5 md:h-8"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
									fill="#000000"
								/></svg
							>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
