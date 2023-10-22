<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';

	import { onMount } from 'svelte';

	let cardRefs: any[] = [];
	for (let index = 0; index < 3; index++) {
		cardRefs[index] = null;
	}

	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let textElement: any;
	const theText = $LL.home.projects.title();
	const placeholderText = new Array(theText.length).fill('\u00A0').join(''); // Using non-breaking spaces as placeholders

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
		cardRefs.forEach((ref, index) => {
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
				duration: 0.5,
				y: '100px',
				opacity: 0,
				delay: index * 0.2
			});
		});
	});
</script>

<section class="container px-3 mx-auto py-5 xl:py-12">
	<!-- title -->
	<div class="text-center py-5 md:py-8">
		<p
			bind:this={textElement}
			class="text-2xl uppercase sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 mb-8 xl:mb-16 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		>
			{placeholderText}
		</p>
	</div>
	<!-- cards -->
	<div class="grid gap-4 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
		<div class="card rounded-none bg-[#f6f6f9]" bind:this={cardRefs[0]}>
			<div class="max-md:flex">
				<!-- image -->
				<div class="max-md:w-1/2">
					<img
						src="images/home/projectsSection/project-2_500x300.webp"
						srcset="images/home/projectsSection/project-2_300x300.webp 390w, 
            images/home/projectsSection/project-2_400x280.webp 768w, 
            images/home/projectsSection/project-2_500x300.webp 2000w"
						alt="a working labor"
						class="w-full max-[390px]:h-full min-[390px]:aspect-[1/0.7] md:aspect-[1/0.6]"
					/>
				</div>
				<!-- text -->
				<div class="max-md:w-1/2">
					<div class="md:text-center">
						<h4
							class="text-primary-500 px-2 min-[480px]:px-4 md:px-0 pt-2 min-[480px]:pt-4 md:pt-6 xl:pt-8 2xl:pt-10 text-base sm:text-lg lg:text-xl xl:text-2xl font-bold"
						>
							LOREM IPSUM
						</h4>

						<p
							class="p-2 min-[480px]:p-4 md:p-6 2xl:py-6 2xl:px-16 text-sm sm:text-base md:text-lg xl:text-xl"
						>
							<span class="line-clamp-4">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nisi fugiat
								exercitationem? Lorem, m, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Deserunt, harum?
							</span>
						</p>
						<div class="md:h-2" />
					</div>
				</div>
			</div>
		</div>
		<div class="card rounded-none bg-[#f6f6f9]" bind:this={cardRefs[1]}>
			<div class="max-md:flex">
				<!-- image -->
				<div class="max-md:w-1/2">
					<img
						src="images/home/projectsSection/project-3_500x300.webp"
						srcset="images/home/projectsSection/project-3_300x300.webp 390w, 
          images/home/projectsSection/project-3_400x280.webp 768w, 
          images/home/projectsSection/project-3_500x300.webp 2000w"
						alt="a working labor"
						class="w-full max-[390px]:h-full min-[390px]:aspect-[1/0.7] md:aspect-[1/0.6]"
					/>
				</div>
				<!-- text -->
				<div class="max-md:w-1/2">
					<div class="md:text-center">
						<h4
							class="text-primary-500 px-2 min-[480px]:px-4 md:px-0 pt-2 min-[480px]:pt-4 md:pt-6 xl:pt-8 2xl:pt-10 text-base sm:text-lg lg:text-xl xl:text-2xl font-bold"
						>
							LOREM IPSUM
						</h4>

						<p
							class="p-2 min-[480px]:p-4 md:p-6 2xl:py-6 2xl:px-16 text-sm sm:text-base md:text-lg xl:text-xl"
						>
							<span class="line-clamp-4">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nisi fugiat
								exercitationem? Lorem, m, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Deserunt, harum?
							</span>
						</p>
						<div class="md:h-2" />
					</div>
				</div>
			</div>
		</div>
		<div class="card rounded-none bg-[#f6f6f9] md:hidden xl:block" bind:this={cardRefs[2]}>
			<div class="max-md:flex">
				<!-- image -->
				<div class="max-md:w-1/2">
					<img
						src="images/home/projectsSection/project-4_500x300.webp"
						srcset="images/home/projectsSection/project-4_300x300.webp 390w, 
          images/home/projectsSection/project-4_400x280.webp 768w, 
          images/home/projectsSection/project-4_500x300.webp 2000w"
						alt="a working labor"
						class="w-full max-[390px]:h-full min-[390px]:aspect-[1/0.7] md:aspect-[1/0.6]"
					/>
				</div>
				<!-- text -->
				<div class="max-md:w-1/2">
					<div class="md:text-center">
						<h4
							class="text-primary-500 px-2 min-[480px]:px-4 md:px-0 pt-2 min-[480px]:pt-4 md:pt-6 xl:pt-8 2xl:pt-10 text-base sm:text-lg lg:text-xl xl:text-2xl font-bold"
						>
							LOREM IPSUM
						</h4>

						<p
							class="p-2 min-[480px]:p-4 md:p-6 2xl:py-6 2xl:px-16 text-sm sm:text-base md:text-lg xl:text-xl"
						>
							<span class="line-clamp-4">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nisi fugiat
								exercitationem? Lorem, m, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Deserunt, harum?
							</span>
						</p>
						<div class="md:h-2" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- view more button -->
	<div class="text-center py-10 {$currentAppLang === 'ar' ? 'ar-font' : ''}">
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
</section>
