<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	$: companies = [
		{
			imgURL: '/images/companies/logos/sbtmc_300x150.webp',
			text: `${$LL.companies.sbtmc()}`,
			profilePath: '',
			fileName: 'Saudi Building Technic - Company Profile',
			order: 1
		},
		{
			imgURL: '/images/companies/logos/amos_300x150.webp',
			text: `${$LL.companies.amos()}`,
			profilePath: '/profiles/AMOS-Profile.pdf',
			fileName: 'AMOS - Company Profile',
			order: 2
		},
		{
			imgURL: '/images/companies/logos/AKG-Trading_300x150.webp',
			text: `${$LL.companies.trading()}`,
			profilePath: '/profiles/AlKholi-Trading-Profile.pdf',
			fileName: 'AlKholi Trading - Company Profile',
			order: 3
		},
		{
			imgURL: '/images/companies/logos/up_300x150.webp',
			text: `${$LL.companies.upmoc()}`,
			profilePath: '/profiles/UP-Profile.pdf',
			fileName: 'UP - Company Profile',
			order: 4
		},
		{
			imgURL: '/images/companies/logos/btech_300x150.webp',
			text: `${$LL.companies.bteco()}`,
			profilePath: `${
				$currentAppLang === 'en' ? '/profiles/BTECO-Profile-en.pdf' : '/profiles/BTECO-Profile.pdf'
			}`,
			fileName: 'BTECO - Company Profile',
			url: 'https://www.buildingtec-elevators.com/',
			order: 5
		},
		{
			imgURL: '/images/companies/logos/aktek_300x150.webp',
			profilePath: '/profiles/AKTEK-Profile.pdf',
			fileName: 'AKTEK - Company Profile',
			text: `${$LL.companies.aktek()}`,
			order: 6
		}
		// {
		// 	imgURL: '/images/companies/logos/AKG-Tech_300x150.webp',
		// 	profilePath: '',
		// 	fileName: '',
		// 	text: `${$LL.companies.tech()}`,
		// 	order: 7
		// },
		// {
		// 	imgURL: '/images/companies/logos/AKG-healthcare_300x150.webp',
		// 	text: `${$LL.companies.hcare()}`,
		// 	profilePath: '',
		// 	fileName: '',
		// 	order: 8
		// },
		// {
		// 	imgURL: '/images/companies/logos/akstra_300x150.webp',
		// 	text: `${$LL.companies.akstra()}`,
		// 	profilePath: '',
		// 	fileName: '',
		// 	order: 9
		// }
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

<section class="container px-3 mx-auto pt-8 md:pt-20 pb-32 min-h-screen overflow-hidden">
	<!-- title -->
	<div class="text-center xl:pt-5">
		<p
			bind:this={textElement}
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold
			uppercase text-primary-500 mb-5 md:mb-24 {$currentAppLang === 'ar' ? 'ar-font' : ' '}"
		/>
	</div>

	<!-- <div>
		<p
			class="text-sm sm:text-base md:text-lg xl:text-xl lg:px-8 2xl:px-24 leading-8 text-justify md:text-center pb-2 sm:pb-16 xl:pb-20"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, praesentium, inventore
			vel, aspernatur ab velit laborum rem dolorum rerum commodi facere sequi iusto tempora?
			Necessitatibus, architecto. Quos hic atque totam similique perspiciatis impedit eum deleniti
			quas nemo, dolore assumenda ex soluta ipsam quam.
		</p>
	</div> -->

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

					<!-- lg:space-x-2 xl:space-x-3 2xl:space-x-8 -->
					<div
						dir="ltr"
						class="pt-5 lg:pt-8 xl:flex space-y-5 md:space-y-8 xl:space-y-0 space-x-0 xl:space-x-5 2xl:space-x-6"
					>
						<!-- contact us link -->
						<div>
							<a
								href={`/${$currentAppLang}/contact-us/#contact-form`}
								aria-label="a link to contact us page"
								class="btn bg-primary-400 flex-col text-white rounded-md text-xs sm:text-sm md:text-base font-semibold px-0 py-1"
							>
								<div class="flex space-x-2 items-center py-[1px] px-2 md:px-3">
									<span>
										<p>{$LL.companies.contact()}</p>
									</span>
									<!-- <span class={$currentAppLang === 'ar' ? 'rotate-180 px-2' : ''}>
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
									</span> -->
								</div>
							</a>
						</div>

						<!-- download company profile -->
						{#if company.order === 1}
							<div class="lg:flex max-lg:space-y-5 lg:space-x-5">
								<div>
									<a
										role="button"
										href="/profiles/SBTMC-Profile-FM.pdf"
										download="Saudi Building Technic - Facility Management"
										class=" btn bg-primary-400 flex-col text-white rounded-md text-xs sm:text-sm md:text-base font-semibold px-0 py-1"
									>
										<div class="flex space-x-2 items-center py-[1px] px-2 md:px-3">
											<span>
												<p>FM Profile</p>
											</span>
											<span>
												<svg
													class="w-5 h-5"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
														stroke="#FFF"
														stroke-width="1.5"
														stroke-linecap="round"
													/>
													<path
														d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
														stroke="#FFF"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</span>
										</div>
									</a>
								</div>

								<div>
									<a
										role="button"
										href="/profiles/SBTMC-Profile-Const.pdf"
										download="Saudi Building Technic - Construction"
										class=" btn bg-primary-400 flex-col text-white rounded-md text-xs sm:text-sm md:text-base font-semibold px-0 py-1"
									>
										<div class="flex space-x-2 items-center py-[1px] px-2 md:px-3">
											<span>
												<p>Construction Profile</p>
											</span>
											<span>
												<svg
													class="w-5 h-5"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
														stroke="#FFF"
														stroke-width="1.5"
														stroke-linecap="round"
													/>
													<path
														d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
														stroke="#FFF"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</span>
										</div>
									</a>
								</div>
							</div>
						{:else}
							<div>
								<a
									role="button"
									href={company.profilePath}
									download={company.fileName}
									class=" btn bg-primary-400 flex-col text-white rounded-md text-xs sm:text-sm md:text-base font-semibold px-0 py-1"
								>
									<div class="flex space-x-2 items-center py-[1px] px-2 md:px-3">
										<span>
											<p>{$LL.companies.profile()}</p>
										</span>
										<span>
											<svg
												class="w-5 h-5"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
													stroke="#FFF"
													stroke-width="1.5"
													stroke-linecap="round"
												/>
												<path
													d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
													stroke="#FFF"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</span>
									</div>
								</a>
							</div>
						{/if}

						<!-- website link if any -->
						{#if company.url}
							<div>
								<a href={company.url} target="_blank" aria-label="the company webpage">
									<div class={$currentAppLang === 'ar' ? 'ar-font' : ''}>
										<div>
											<button
												class="btn bg-primary-400 flex-col text-white rounded-md text-xs sm:text-sm md:text-base font-semibold px-0 py-1"
											>
												<div class="flex space-x-2 items-center py-[1px] px-2 md:px-3">
													<span>
														<p>{$LL.generals.visit()}</p>
													</span>
													<!-- class={$currentAppLang === 'ar' ? 'rotate-180 px-2' : ''} -->
													<span>
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
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/each}
</section>
