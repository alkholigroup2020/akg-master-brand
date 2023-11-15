<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	$: companies = [
		{
			imgURL: '/images/companies/logos/AKG-Trading_300x150.webp',
			text: `${$LL.companies.trading()}`,
			order: 1
		},
		{
			imgURL: '/images/companies/logos/sbtmc.webp',
			text: `${$LL.companies.sbtmc()}`,
			order: 2
		},
		{
			imgURL: '/images/companies/logos/AKG-Tech_300x150.webp',
			text: `${$LL.companies.tech()}`,
			order: 3
		},
		{
			imgURL: '/images/companies/logos/AKG-healthcare_300x150.webp',
			text: `${$LL.companies.hcare()}`,
			order: 4
		},
		{
			imgURL: '/images/companies/logos/up_300x150.webp',
			text: `${$LL.companies.upmoc()}`,
			order: 5
		},

		{
			imgURL: '/images/companies/logos/btech_300x150.webp',
			text: `${$LL.companies.bteco()}`,
			url: 'https://www.buildingtec-elevators.com/',
			order: 6
		},
		{
			imgURL: '/images/companies/logos/amos_300x150.webp',
			text: `${$LL.companies.amos()}`,
			// url: 'https://www.amos-sa.com/',
			order: 7
		},
		{
			imgURL: '/images/companies/logos/akstra_300x150.webp',
			text: `${$LL.companies.akstra()}`,
			order: 8
		},

		{
			imgURL: '/images/companies/logos/aktek_300x150.webp',
			text: `${$LL.companies.aktek()}`,
			order: 9
		}
	];

	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let companiesRefs: any[] = [];
	// for (let index = 0; index < 1; index++) {
	// 	companiesRefs[index] = null;
	// }

	let textElement: any;
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
					start: 'top bottom-=150',
					end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			if (index % 2 === 0) {
				timeline.from(ref, {
					duration: 0.8,
					x: '80px',
					opacity: 0,
					delay: index * 0.1
				});
			} else {
				timeline.from(ref, {
					duration: 0.8,
					x: '-80px',
					opacity: 0,
					delay: index * 0.1
				});
			}
		});
	});
</script>

<section class="container px-3 mx-auto pt-8 2xl:pt-20 pb-32">
	<!-- title -->
	<div class="text-center xl:pt-5">
		<p
			bind:this={textElement}
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold uppercase text-primary-500 mb-3 xl:mb-12 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ' '}"
		/>
	</div>

	<div>
		<p
			class="text-sm sm:text-base md:text-lg xl:text-xl lg:px-8 2xl:px-24 leading-8 text-justify md:text-center pb-2 sm:pb-16 xl:pb-20"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, praesentium, inventore
			vel, aspernatur ab velit laborum rem dolorum rerum commodi facere sequi iusto tempora?
			Necessitatibus, architecto. Quos hic atque totam similique perspiciatis impedit eum deleniti
			quas nemo, dolore assumenda ex soluta ipsam quam.
		</p>
	</div>

	{#each companies as company, index (company.order)}
		<div
			class="grid sm:grid-cols-2 gap-0 {$currentAppLang === 'ar' ? 'ar-font' : ''}"
			dir={$pageDirection}
		>
			<!-- logo -->
			<div
				bind:this={companiesRefs[index]}
				class="min-h-[180px] md:min-h-[300px] flex items-center justify-center py-8 sm:py-0 {company.order %
					2 ===
				0
					? 'sm:order-last'
					: ''}"
			>
				{#if company.url}
					<a href={company.url} target="_blank" aria-label="the company webpage">
						<img
							src={company.imgURL}
							class="w-[150px] md:w-[200px] xl:w-[300px] aspect-[1/0.5]"
							alt="company logo"
						/>
					</a>
				{:else}
					<img
						src={company.imgURL}
						class="w-[150px] md:w-[200px] xl:w-[300px] aspect-[1/0.5]"
						alt="company logo"
					/>
				{/if}
			</div>

			<!-- text -->
			<div
				class="lg:min-h-[350px] flex items-center justify-center bg-primary-500 text-sm sm:text-base md:text-lg xl:text-xl"
			>
				<div
					class="px-3 min-[350px]:px-6 min-[500px]:px-8 py-5 min-[350px]:py-8 sm:p-5 md:p-8 lg:p-12 xl:px-12 xl:py-20 2xl:py-20 text-white"
				>
					<p>
						{company.text}
					</p>
					{#if company.url}
						<a href={company.url} target="_blank" aria-label="the company webpage">
							<div class="pt-8 {$currentAppLang === 'ar' ? 'ar-font' : ''}">
								<div>
									<button
										class=" btn !bg-transparent flex-col text-white border-none text-xs sm:text-sm md:text-base font-semibold px-2 py-1"
									>
										<div class="flex space-x-2 items-center">
											<span>
												<p>{$LL.generals.visit()}</p>
											</span>
											<span class={$currentAppLang === 'ar' ? 'rotate-180 px-2' : ''}>
												<svg
													viewBox="0 0 1024 1024"
													class="icon w-4 h-4"
													version="1.1"
													xmlns="http://www.w3.org/2000/svg"
													><path
														d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
														fill="#FFF"
													/></svg
												>
											</span>
										</div>
									</button>
								</div>
								<div />
							</div>
						</a>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</section>
