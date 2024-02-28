<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import MoreClients from './MoreClients.svelte';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let cardRefs: any[] = [];

	let showMoreIsOn: any = false;

	let textElement: any;

	let theText: string;
	if ($currentAppLang === 'en') {
		theText = 'OUR Clients';
	} else {
		theText = 'عملاؤنا السابقون';
	}

	// title animation
	onMount(() => {
		gsap.to(textElement, {
			scrollTrigger: {
				trigger: textElement,
				start: 'top+=50 bottom-=50',
				toggleActions: 'play none none none',
				markers: false
			},
			text: theText,
			duration: 1.2
		});
	});

	// cards animation
	onMount(() => {
		cardRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					start: 'top bottom-=100',
					end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.5,
				y: '100px',
				opacity: 0,
				delay: index * 0.2
			});
		});
	});
</script>

<section class="container px-3 mx-auto py-8 md:py-16 xl:py-20">
	<!-- title -->
	<div class="text-center md:mt-5 xl:mt-8 mb-16 xl:mb-24">
		<p
			bind:this={textElement}
			class="text-2xl uppercase sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 mb-8 xl:mb-16 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		/>
	</div>

	<div class="flex flex-col">
		<div
			class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5
			gap-y-20 min-[450px]:gap-x-3 {showMoreIsOn ? 'mb-16 2xl:mb-20' : 'mb-8'}"
		>
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[0]}>
				<div>
					<img
						src="/images/home/clientsSection/SMSA_180x180.webp"
						srcset="/images/home/clientsSection/SMSA_120x120.webp 768w, 
          	/images/home/clientsSection/SMSA_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-20 h-20 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[1]}>
				<div>
					<img
						src="/images/home/clientsSection/Landmark_180x180.webp"
						srcset="/images/home/clientsSection/Landmark_120x120.webp 768w, 
          	/images/home/clientsSection/Landmark_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[2]}>
				<div>
					<img
						src="/images/home/clientsSection/Carrefour_180x180.webp"
						srcset="/images/home/clientsSection/Carrefour_120x120.webp 768w, 
          	/images/home/clientsSection/Carrefour_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[3]}>
				<div>
					<img
						src="/images/home/clientsSection/aujan-coca-cola_180x180.webp"
						srcset="/images/home/clientsSection/aujan-coca-cola_120x120.webp 768w, 
          	/images/home/clientsSection/aujan-coca-cola_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[4]}>
				<div>
					<img
						src="/images/home/clientsSection/aramco_180x180.webp"
						srcset="/images/home/clientsSection/aramco_120x120.webp 768w, 
          	/images/home/clientsSection/aramco_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-28 h-28 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[5]}>
				<div>
					<img
						src="/images/home/clientsSection/Americana_180x180.webp"
						srcset="/images/home/clientsSection/Americana_120x120.webp 768w, 
          	/images/home/clientsSection/Americana_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[6]}>
				<div>
					<img
						src="/images/home/clientsSection/Almajdouie_180x180.webp"
						srcset="/images/home/clientsSection/Almajdouie_120x120.webp 768w, 
          	/images/home/clientsSection/Almajdouie_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[7]}>
				<div>
					<img
						src="/images/home/clientsSection/souq_180x180.webp"
						srcset="/images/home/clientsSection/souq_120x120.webp 768w, 
          	/images/home/clientsSection/souq_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-20 h-20 lg:w-28 lg:h-28"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[8]}>
				<div>
					<img
						src="/images/home/clientsSection/almunajem_180x180.webp"
						srcset="/images/home/clientsSection/almunajem_120x120.webp 768w, 
          	/images/home/clientsSection/almunajem_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[9]}>
				<div>
					<img
						src="/images/home/clientsSection/al-othaim_180x180.webp"
						srcset="/images/home/clientsSection/al-othaim_120x120.webp 768w, 
          	/images/home/clientsSection/al-othaim_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>
		</div>
	</div>

	{#if showMoreIsOn}
		<MoreClients />
	{/if}

	<!-- view more button -->
	{#if !showMoreIsOn}
		<div class="text-center py-8 {$currentAppLang === 'ar' ? 'ar-font' : ''}">
			<div>
				<button
					on:click={() => {
						showMoreIsOn = true;
					}}
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
	{:else}
		<div class="text-center py-8 {$currentAppLang === 'ar' ? 'ar-font' : ''}">
			<div>
				<button
					on:click={() => {
						showMoreIsOn = false;
					}}
					class="btn !bg-transparent flex-col text-primary-500 border-0 text-xs sm:text-sm md:text-base font-semibold px-2 py-1"
				>
					<span class=" rotate-180"
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
					<span class="mt-2">
						<p>{$LL.generals.less()}</p>
					</span>
				</button>
			</div>
			<div />
		</div>
	{/if}
</section>
