<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		$page.url.hash && scrollToSection($page.url.hash);
	});

	function scrollToSection(hash: any) {
		const target = document.querySelector(hash);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	}

	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';

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
					start: 'top bottom-=300',
					end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.5,
				y: '100px',
				opacity: 0,
				delay: index * 0
			});
		});
	});
</script>

<section class="container px-3 mx-auto py-8 md:py-16 xl:py-20" id="our-clients">
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
			class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
			gap-y-20 min-[450px]:gap-x-3 {showMoreIsOn ? 'mb-16 2xl:mb-20' : 'mb-8'}"
		>
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[0]}>
				<div>
					<img
						src="/images/home/clientsSection/SMSA_180x180.webp"
						srcset="/images/home/clientsSection/SMSA_120x120.webp 768w, 
          	/images/home/clientsSection/SMSA_180x180.webp 2000w"
						alt="a client logo"
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
						alt="a client logo"
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
						alt="a client logo"
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
						alt="a client logo"
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
						alt="a client logo"
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
						alt="a client logo"
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
						alt="a client logo"
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
						alt="a client logo"
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
						alt="a client logo"
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
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[10]}>
				<div>
					<img
						src="/images/home/clientsSection/adidas_180x180.webp"
						srcset="/images/home/clientsSection/adidas_120x120.webp 768w, 
          	/images/home/clientsSection/adidas_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[11]}>
				<div>
					<img
						src="/images/home/clientsSection/AJEX_180x180.webp"
						srcset="/images/home/clientsSection/AJEX_120x120.webp 768w, 
          	/images/home/clientsSection/AJEX_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-16 h-16 lg:w-28 lg:h-28"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[12]}>
				<div>
					<img
						src="/images/home/clientsSection/Amazon_180x180.webp"
						srcset="/images/home/clientsSection/Amazon_120x120.webp 768w, 
          	/images/home/clientsSection/Amazon_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[13]}>
				<div>
					<img
						src="/images/home/clientsSection/BASAMH_180x180.webp"
						srcset="/images/home/clientsSection/BASAMH_120x120.webp 768w, 
          	/images/home/clientsSection/BASAMH_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-28 lg:h-28"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[14]}>
				<div>
					<img
						src="/images/home/clientsSection/BMW_180x180.webp"
						srcset="/images/home/clientsSection/BMW_120x120.webp 768w, 
          	/images/home/clientsSection/BMW_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-16 h-16 lg:w-24 lg:h-24"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[15]}>
				<div>
					<img
						src="/images/home/clientsSection/coca_180x180.webp"
						srcset="/images/home/clientsSection/coca_120x120.webp 768w, 
          	/images/home/clientsSection/coca_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<!-- DHL -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[16]}>
				<div>
					<img
						src="/images/home/clientsSection/DHL_180x90.webp"
						srcset="/images/home/clientsSection/DHL_120x60.webp 768w, 
          	/images/home/clientsSection/DHL_180x90.webp 2000w"
						alt="a client logo"
						class="aspect-[1/0.5] w-32 h-16 lg:w-40 lg:h-20"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[17]}>
				<div>
					<img
						src="/images/home/clientsSection/extra_180x180.webp"
						srcset="/images/home/clientsSection/extra_120x120.webp 768w, 
          	/images/home/clientsSection/extra_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-28 lg:h-28"
					/>
				</div>
			</div>

			<!-- ford -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[18]}>
				<div>
					<img
						src="/images/home/clientsSection/Ford_180x90.webp"
						srcset="/images/home/clientsSection/Ford_120x60.webp 768w, 
          	/images/home/clientsSection/Ford_180x90.webp 2000w"
						alt="a client logo"
						class="aspect-[1/0.5] w-32 h-16 lg:w-40 lg:h-20"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[19]}>
				<div>
					<img
						src="/images/home/clientsSection/ikea_180x180.webp"
						srcset="/images/home/clientsSection/ikea_120x120.webp 768w, 
          	/images/home/clientsSection/ikea_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-28 lg:h-28"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[20]}>
				<div>
					<img
						src="/images/home/clientsSection/jaguar_180x180.webp"
						srcset="/images/home/clientsSection/jaguar_120x120.webp 768w, 
          	/images/home/clientsSection/jaguar_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<!-- Lufthansa -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[21]}>
				<div>
					<img
						src="/images/home/clientsSection/Lufthansa_180x90.webp"
						srcset="/images/home/clientsSection/Lufthansa_120x60.webp 768w, 
          	/images/home/clientsSection/Lufthansa_180x90.webp 2000w"
						alt="a client logo"
						class="aspect-[1/0.5] w-28 h-14 lg:w-32 lg:h-16"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[22]}>
				<div>
					<img
						src="/images/home/clientsSection/mercedes_180x180.webp"
						srcset="/images/home/clientsSection/mercedes_120x120.webp 768w, 
          	/images/home/clientsSection/mercedes_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[23]}>
				<div>
					<img
						src="/images/home/clientsSection/nike_180x180.webp"
						srcset="/images/home/clientsSection/nike_120x120.webp 768w, 
          	/images/home/clientsSection/nike_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[24]}>
				<div>
					<img
						src="/images/home/clientsSection/P&G_180x180.webp"
						srcset="/images/home/clientsSection/P&G_120x120.webp 768w, 
          	/images/home/clientsSection/P&G_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-16 h-16 lg:w-20 lg:h-20"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[25]}>
				<div>
					<img
						src="/images/home/clientsSection/pepsico_180x180.webp"
						srcset="/images/home/clientsSection/pepsico_120x120.webp 768w, 
          	/images/home/clientsSection/pepsico_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-28 h-28 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[26]}>
				<div>
					<img
						src="/images/home/clientsSection/petromin_180x180.webp"
						srcset="/images/home/clientsSection/petromin_120x120.webp 768w, 
          	/images/home/clientsSection/petromin_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[27]}>
				<div>
					<img
						src="/images/home/clientsSection/saco_180x180.webp"
						srcset="/images/home/clientsSection/saco_120x120.webp 768w, 
          	/images/home/clientsSection/saco_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[28]}>
				<div>
					<img
						src="/images/home/clientsSection/SADAFCO_180x180.webp"
						srcset="/images/home/clientsSection/SADAFCO_120x120.webp 768w, 
          	/images/home/clientsSection/SADAFCO_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-28 h-28 lg:w-40 lg:h-40"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[29]}>
				<div>
					<img
						src="/images/home/clientsSection/Samsung_180x180.webp"
						srcset="/images/home/clientsSection/Samsung_120x120.webp 768w, 
          	/images/home/clientsSection/Samsung_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<!-- Tamer -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[30]}>
				<div>
					<img
						src="/images/home/clientsSection/Tamer_180x90.webp"
						srcset="/images/home/clientsSection/Tamer_120x60.webp 768w, 
          	/images/home/clientsSection/Tamer_180x90.webp 2000w"
						alt="a client logo"
						class="aspect-[1/0.5] w-28 h-14 lg:w-36 lg:h-18"
					/>
				</div>
			</div>

			<!-- tamer-logistics -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[31]}>
				<div>
					<img
						src="/images/home/clientsSection/tamer-logistics_180x90.webp"
						srcset="/images/home/clientsSection/tamer-logistics_120x60.webp 768w, 
          	/images/home/clientsSection/tamer-logistics_180x90.webp 2000w"
						alt="a client logo"
						class="aspect-[1/0.5] w-32 h-16 lg:w-40 lg:h-20"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[32]}>
				<div>
					<img
						src="/images/home/clientsSection/toyota_180x180.webp"
						srcset="/images/home/clientsSection/toyota_120x120.webp 768w, 
          	/images/home/clientsSection/toyota_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<!-- unilever -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[33]}>
				<div>
					<img
						src="/images/home/clientsSection/Unilever_180x180.webp"
						srcset="/images/home/clientsSection/Unilever_120x120.webp 768w, 
          	/images/home/clientsSection/Unilever_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<!-- the more clients logo is now moved here! -->
			<!-- all logos will be shown on the homepage at once as requested!! -->

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[34]}>
				<div>
					<img
						src="/images/home/clientsSection/Alsafi_Danone_180x180.webp"
						srcset="/images/home/clientsSection/Alsafi_Danone_120x120.webp 768w, 
						/images/home/clientsSection/Alsafi_Danone_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[35]}>
				<div>
					<img
						src="/images/home/clientsSection/almarai_180x180.webp"
						srcset="/images/home/clientsSection/almarai_120x120.webp 768w, 
						/images/home/clientsSection/almarai_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[36]}>
				<div>
					<img
						src="/images/home/clientsSection/_Supreme Judicial Council - Riyadh_180x180.webp"
						srcset="/images/home/clientsSection/_Supreme Judicial Council - Riyadh_120x120.webp 768w, 
					/images/home/clientsSection/_Supreme Judicial Council - Riyadh_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[37]}>
				<div>
					<img
						src="/images/home/clientsSection/Al-Baha University_180x180.webp"
						srcset="/images/home/clientsSection/Al-Baha University_120x120.webp 768w, 
					/images/home/clientsSection/Al-Baha University_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[38]}>
				<div>
					<!-- <a
					href="https://imamu.edu.sa/en/Pages/default.aspx"
					target="_blank"
					aria-label="a client website link"
				> -->
					<img
						src="/images/home/clientsSection/_Imam University_180x180.webp"
						srcset="/images/home/clientsSection/_Imam University_120x120.webp 768w, 
					/images/home/clientsSection/_Imam University_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-28 lg:h-28"
					/>
					<!-- </a> -->
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[39]}>
				<div>
					<img
						src="/images/home/clientsSection/Diplomatic district - Riyadh_180x180.webp"
						srcset="/images/home/clientsSection/Diplomatic district - Riyadh_120x120.webp 768w, 
					/images/home/clientsSection/Diplomatic district - Riyadh_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[40]}>
				<div>
					<img
						src="/images/home/clientsSection/Al-Jouf University_180x180.webp"
						srcset="/images/home/clientsSection/Al-Jouf University_120x120.webp 768w, 
					/images/home/clientsSection/Al-Jouf University_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[41]}>
				<div>
					<img
						src="/images/home/clientsSection/King Saud University_180x180.webp"
						srcset="/images/home/clientsSection/King Saud University_120x120.webp 768w, 
					/images/home/clientsSection/King Saud University_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[42]}>
				<div>
					<img
						src="/images/home/clientsSection/Egyptian embassy building in Riyadh_180x180.webp"
						srcset="/images/home/clientsSection/Egyptian embassy building in Riyadh_120x120.webp 768w, 
					/images/home/clientsSection/Egyptian embassy building in Riyadh_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[43]}>
				<div>
					<img
						src="/images/home/clientsSection/King Fahd National Library_180x180.webp"
						srcset="/images/home/clientsSection/King Fahd National Library_120x120.webp 768w, 
					/images/home/clientsSection/King Fahd National Library_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[44]}>
				<div>
					<img
						src="/images/home/clientsSection/Prince Sattam University_180x180.webp"
						srcset="/images/home/clientsSection/Prince Sattam University_120x120.webp 768w, 
					/images/home/clientsSection/Prince Sattam University_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-40 h-40 lg:w-52 lg:h-52"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[45]}>
				<div>
					<img
						src="/images/home/clientsSection/Al-Basateen_180x180.webp"
						srcset="/images/home/clientsSection/Al-Basateen_120x120.webp 768w, 
					/images/home/clientsSection/Al-Basateen_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-20 h-20 lg:w-28 lg:h-28"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- {#if showMoreIsOn}
		<MoreClients />
	{/if} -->

	<!-- view more button -->
	<!-- {#if !showMoreIsOn}
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
	{/if} -->
</section>
