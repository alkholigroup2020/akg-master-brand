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
	import AlOuthaimLogo from '$lib/generalComponents/AlOuthaimLogo.svelte';
	import NiceLogo from '$lib/generalComponents/NiceLogo.svelte';
	import PrinceSattamUni from '$lib/generalComponents/PrinceSattamUni.svelte';
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

<section class="container px-3 mx-auto py-8 md:py-8 xl:py-16" id="our-clients">
	<!-- title -->
	<div class="text-center md:mt-5 xl:mt-8 mb-5 md:mb-8 xl:mb-12">
		<p
			bind:this={textElement}
			class="text-2xl uppercase sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 mb-3 xl:mb-8 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		/>
	</div>

	<div class="flex flex-col">
		<div
			class="grid grid-cols-2 min-[300px]:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7
			min-[300px]:gap-x-3 py-3 {showMoreIsOn ? 'mb-16 2xl:mb-20' : ''}"
		>
			<!-- aramco -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[0]}>
				<div class="w-full p-[8%] sm:p-[5%]">
					<img
						src="/images/home/clientsSection/aramco_400x200.webp"
						srcset="/images/home/clientsSection/aramco_300x150.webp 768w, 
					/images/home/clientsSection/aramco_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- neom -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[1]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/neom_400x400.webp"
						srcset="/images/home/clientsSection/neom_250x250.webp 1024w, 
					/images/home/clientsSection/neom_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- sports -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[2]}>
				<div class="w-full p-[22%]">
					<img
						src="/images/home/clientsSection/sports_180x180.webp"
						srcset="/images/home/clientsSection/sports_120x120.webp 768w, 
					/images/home/clientsSection/sports_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-full"
					/>
				</div>
			</div>

			<!-- Imam University -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[3]}>
				<div class="w-full p-[30%]">
					<img
						src="/images/home/clientsSection/_Imam University_180x180.webp"
						srcset="/images/home/clientsSection/_Imam University_120x120.webp 768w, 
							/images/home/clientsSection/_Imam University_180x180.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- Satco -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[4]}>
				<div class="w-full p-[15%]">
					<img
						src="/images/home/clientsSection/_Satco_400x200.webp"
						srcset="/images/home/clientsSection/_Satco_300x150.webp 1024w, 
					/images/home/clientsSection/_Satco_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- Al-Basateen -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[5]}>
				<div class="w-full p-[25%]">
					<img
						src="/images/home/clientsSection/Al-Basateen_180x180.webp"
						srcset="/images/home/clientsSection/Al-Basateen_120x120.webp 768w, 
						/images/home/clientsSection/Al-Basateen_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-full"
					/>
				</div>
			</div>

			<!-- Supreme Judicial Council -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[6]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/_Supreme Judicial Council - Riyadh_180x180.webp"
						srcset="/images/home/clientsSection/_Supreme Judicial Council - Riyadh_120x120.webp 768w, 
						/images/home/clientsSection/_Supreme Judicial Council - Riyadh_180x180.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- Al-Baha University -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[7]}>
				<div class="w-full p-[25%]">
					<img
						src="/images/home/clientsSection/albaha_180x180.webp"
						srcset="/images/home/clientsSection/albaha_120x120.webp 768w, 
						/images/home/clientsSection/albaha_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-full"
					/>
				</div>
			</div>

			<!-- Diplomatic district -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[8]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/Diplomatic district - Riyadh_180x180.webp"
						srcset="/images/home/clientsSection/Diplomatic district - Riyadh_120x120.webp 768w, 
						/images/home/clientsSection/Diplomatic district - Riyadh_180x180.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- Al-Jouf University -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[9]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/Al-Jouf University_180x180.webp"
						srcset="/images/home/clientsSection/Al-Jouf University_120x120.webp 768w, 
						/images/home/clientsSection/Al-Jouf University_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-full"
					/>
				</div>
			</div>

			<!-- King Saud University -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[10]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/King Saud University_180x180.webp"
						srcset="/images/home/clientsSection/King Saud University_120x120.webp 768w, 
						/images/home/clientsSection/King Saud University_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-full"
					/>
				</div>
			</div>

			<!-- Egyptian embassy -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[11]}>
				<div class="w-full p-[25%]">
					<img
						src="/images/home/clientsSection/Egyptian embassy building in Riyadh_180x180.webp"
						srcset="/images/home/clientsSection/Egyptian embassy building in Riyadh_120x120.webp 768w, 
						/images/home/clientsSection/Egyptian embassy building in Riyadh_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-full"
					/>
				</div>
			</div>

			<!-- King Fahd National Library -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[12]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/King Fahd National Library_180x180.webp"
						srcset="/images/home/clientsSection/King Fahd National Library_120x120.webp 768w, 
						/images/home/clientsSection/King Fahd National Library_180x180.webp 2000w"
						alt="a client logo"
						class="aspect-[1/1] w-full"
					/>
				</div>
			</div>

			<!-- Prince Sattam University -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[13]}>
				<div class="w-full p-[15%]">
					<PrinceSattamUni />
				</div>
			</div>

			<!-- smsa -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[14]}>
				<!-- p-4 min-[350px]:p-5 md:p-9 xl:p-12 -->
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/smsa_400x200.webp"
						srcset="/images/home/clientsSection/smsa_300x150.webp 768w, 
          	/images/home/clientsSection/smsa_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- souq -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[15]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/souq_400x200.webp"
						srcset="/images/home/clientsSection/souq_300x150.webp 768w, 
          	/images/home/clientsSection/souq_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- Americana -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[16]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/Americana_400x200.webp"
						srcset="/images/home/clientsSection/Americana_300x150.webp 1024w, /images/home/clientsSection/Americana_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- almajdouie -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[17]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/almajdouie_400x200.webp"
						srcset="/images/home/clientsSection/almajdouie_300x150.webp 1024w, /images/home/clientsSection/almajdouie_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- almunajem -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[18]}>
				<div class="w-full p-[25%]">
					<img
						src="/images/home/clientsSection/almunajem_400x400.webp"
						srcset="/images/home/clientsSection/almunajem_250x250.webp 768w, 
          	/images/home/clientsSection/almunajem_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- Al-outhaim -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[19]}>
				<div class="w-full p-[30%]">
					<span>
						<AlOuthaimLogo />
					</span>
				</div>
			</div>

			<!-- nice -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[20]}>
				<div class="w-full p-[15%] md:p-[10%] xl:p-[15%]">
					<NiceLogo />
				</div>
			</div>

			<!-- adidas -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[21]}>
				<div class="w-full p-[30%]">
					<img
						src="/images/home/clientsSection/adidas_400x400.webp"
						srcset="/images/home/clientsSection/adidas_250x250.webp 768w, 
					/images/home/clientsSection/adidas_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- ajex -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[22]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/AJEX_400x200.webp"
						srcset="/images/home/clientsSection/AJEX_400x200.webp 1024w, /images/home/clientsSection/AJEX_300x150.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- amazon -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[23]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/Amazon_400x200.webp"
						srcset="/images/home/clientsSection/Amazon_300x150.webp 1024w, /images/home/clientsSection/Amazon_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- BASAMH -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[24]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/BASAMH_400x200.webp"
						srcset="/images/home/clientsSection/BASAMH_300x150.webp 1024w, /images/home/clientsSection/BASAMH_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- Almarai -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[25]}>
				<div class="w-full p-[30%]">
					<img
						src="/images/home/clientsSection/Almarai_400x400.webp"
						srcset="/images/home/clientsSection/Almarai_250x250.webp 1024w, /images/home/clientsSection/Almarai_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- landmarks -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[26]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/landmarks_400x400.webp"
						srcset="/images/home/clientsSection/landmarks_250x250.webp 768w, 
          	/images/home/clientsSection/landmarks_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- carrefour -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[27]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/carrefour_400x200.webp"
						srcset="/images/home/clientsSection/carrefour_300x150.webp 768w, 
          	/images/home/clientsSection/carrefour_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- aujan -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[28]}>
				<div class="w-full p-[30%]">
					<img
						src="/images/home/clientsSection/aujan_400x400.webp"
						srcset="/images/home/clientsSection/aujan_250x250.webp 768w, 
          	/images/home/clientsSection/aujan_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- BMW -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[29]}>
				<div class="w-full p-[28%]">
					<img
						src="/images/home/clientsSection/BMW_400x400.webp"
						srcset="/images/home/clientsSection/BMW_250x250.webp 768w, 
						/images/home/clientsSection/BMW_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- coca -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[30]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/coca_400x200.webp"
						srcset="/images/home/clientsSection/coca_300x150.webp 1024w, /images/home/clientsSection/coca_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- dhl -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[31]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/DHL_400x200.webp"
						srcset="/images/home/clientsSection/DHL_300x150.webp 1024w, /images/home/clientsSection/DHL_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- extra -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[32]}>
				<div class="w-full p-[30%]">
					<img
						src="/images/home/clientsSection/extra_400x400.webp"
						srcset="/images/home/clientsSection/extra_250x250.webp 768w, 
						/images/home/clientsSection/extra_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- Ford -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[33]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/Ford_400x200.webp"
						srcset="/images/home/clientsSection/Ford_300x150.webp 1024w, /images/home/clientsSection/Ford_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- jaguar -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[34]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/jaguar_400x200.webp"
						srcset="/images/home/clientsSection/jaguar_300x150.webp 1024w, /images/home/clientsSection/jaguar_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- ikea -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[35]}>
				<div class="w-full p-[22%]">
					<img
						src="/images/home/clientsSection/ikea_400x200.webp"
						srcset="/images/home/clientsSection/ikea_300x150.webp 1024w, /images/home/clientsSection/ikea_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- Lufthansa -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[36]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/Lufthansa_400x200.webp"
						srcset="/images/home/clientsSection/Lufthansa_300x150.webp 1024w, /images/home/clientsSection/Lufthansa_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- mercedes -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[37]}>
				<div class="w-full p-[25%]">
					<img
						src="/images/home/clientsSection/mercedes_400x400.webp"
						srcset="/images/home/clientsSection/mercedes_250x250.webp 768w, 
							/images/home/clientsSection/mercedes_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- nike -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[38]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/nike_400x200.webp"
						srcset="/images/home/clientsSection/nike_300x150.webp 1024w, /images/home/clientsSection/nike_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- P&G -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[39]}>
				<div class="w-full p-[30%]">
					<img
						src="/images/home/clientsSection/P&G_400x200.webp"
						srcset="/images/home/clientsSection/P&G_300x150.webp 1024w, /images/home/clientsSection/P&G_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- pepsico -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[40]}>
				<div class="w-full p-[18%]">
					<img
						src="/images/home/clientsSection/pepsico_400x200.webp"
						srcset="/images/home/clientsSection/pepsico_300x150.webp 1024w, /images/home/clientsSection/pepsico_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- petromin -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[41]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/petromin_400x200.webp"
						srcset="/images/home/clientsSection/petromin_300x150.webp 1024w, /images/home/clientsSection/petromin_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- saco -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[42]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/saco_400x200.webp"
						srcset="/images/home/clientsSection/saco_300x150.webp 1024w, /images/home/clientsSection/saco_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- SADAFCO -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[43]}>
				<div class="w-full p-[15%] xl:p-[8%]">
					<img
						src="/images/home/clientsSection/SADAFCO_400x200.webp"
						srcset="/images/home/clientsSection/SADAFCO_300x150.webp 1024w, /images/home/clientsSection/SADAFCO_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- Samsung -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[44]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/Samsung_400x200.webp"
						srcset="/images/home/clientsSection/Samsung_300x150.webp 1024w, /images/home/clientsSection/Samsung_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- agility -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[45]}>
				<div class="w-full p-[15%]">
					<img
						src="/images/home/clientsSection/agility_180x180.webp"
						srcset="/images/home/clientsSection/agility_120x120.webp 1024w, /images/home/clientsSection/agility_180x180.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- Tamer -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[46]}>
				<div class="w-full p-[25%]">
					<img
						src="/images/home/clientsSection/Tamer_400x200.webp"
						srcset="/images/home/clientsSection/Tamer_300x150.webp 1024w, /images/home/clientsSection/Tamer_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- toyota -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[47]}>
				<div class="w-full p-[30%]">
					<img
						src="/images/home/clientsSection/toyota_400x400.webp"
						srcset="/images/home/clientsSection/toyota_250x250.webp 768w, 
							/images/home/clientsSection/toyota_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- tamer-logistics -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[48]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/tamer-logistics_400x200.webp"
						srcset="/images/home/clientsSection/tamer-logistics_300x150.webp 1024w, /images/home/clientsSection/tamer-logistics_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<!-- Unilever -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[49]}>
				<div class="w-full p-[30%]">
					<img
						src="/images/home/clientsSection/Unilever_400x400.webp"
						srcset="/images/home/clientsSection/Unilever_250x250.webp 768w, 
							/images/home/clientsSection/Unilever_400x400.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/1]"
					/>
				</div>
			</div>

			<!-- alsafi -->
			<div class="flex flex-col items-center justify-center" bind:this={cardRefs[50]}>
				<div class="w-full p-[20%]">
					<img
						src="/images/home/clientsSection/alsafi_400x200.webp"
						srcset="/images/home/clientsSection/alsafi_300x150.webp 1024w, /images/home/clientsSection/alsafi_400x200.webp 2000w"
						alt="a client logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- the more clients logo is now moved here! -->
	<!-- all logos will be shown on the homepage at once as requested!! -->

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
