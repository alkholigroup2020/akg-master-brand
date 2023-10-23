<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let cardRefs: any[] = [];
	// cards animation
	onMount(() => {
		cardRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					start: 'top bottom-=200',
					end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.5,
				y: '50px',
				opacity: 0,
				delay: index * 0.2
			});
		});
	});
</script>

<section>
	<div class="container mx-auto px-3">
		<div
			dir={$pageDirection}
			class="grid gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-16 2xl:pt-20 max-[520px]:space-y-4"
		>
			<div class="flex space-x-2 lg:space-x-6" bind:this={cardRefs[0]}>
				<div>
					<img
						src="/images/contact-us/info/asset-53.png"
						class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20"
						alt="phone"
					/>
				</div>
				<div class={$pageDirection === 'rtl' ? 'pr-5' : ''}>
					<div class="flex flex-col">
						<p
							class="pb-1 text-sm sm:text-base md:text-lg xl:text-xl font-bold uppercase {$currentAppLang ===
							'ar'
								? 'ar-font'
								: ''}"
						>
							{$LL.contact.phone()}
						</p>
						<a type="button" href="tel:00966114041919" aria-label="Riyadh branch phone number">
							<p class="text-xs sm:text-sm md:text-base">{$LL.contact.phone1()}</p>
						</a>
						<a type="button" href="tel:00966114022426" aria-label="Riyadh branch phone number">
							<p class="text-xs sm:text-sm md:text-base">{$LL.contact.phone2()}</p>
						</a>
					</div>
				</div>
			</div>

			<div class="flex space-x-2 lg:space-x-6" bind:this={cardRefs[1]}>
				<div>
					<img
						src="/images/contact-us/info/asset-54.png"
						class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20"
						alt="phone"
					/>
				</div>

				<div class={$pageDirection === 'rtl' ? 'pr-5' : ''}>
					<div class="flex flex-col">
						<p
							class="pb-1 text-sm sm:text-base md:text-lg xl:text-xl font-bold uppercase {$currentAppLang ===
							'ar'
								? 'ar-font'
								: ''}"
						>
							{$LL.contact.location()}
						</p>
						<p class="text-xs sm:text-sm md:text-base {$currentAppLang === 'ar' ? 'ar-font' : ''}">
							{$LL.contact.addressPart1()}
						</p>
						<p class="text-xs sm:text-sm md:text-base {$currentAppLang === 'ar' ? 'ar-font' : ''}">
							{$LL.contact.addressPart2()}
						</p>
					</div>
				</div>
			</div>

			<div class="flex space-x-2 lg:space-x-6" bind:this={cardRefs[2]}>
				<div>
					<img
						src="/images/contact-us/info/asset-55.png"
						class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20"
						alt="phone"
					/>
				</div>
				<div class={$pageDirection === 'rtl' ? 'pr-5' : ''}>
					<div class="flex flex-col">
						<p
							class="pb-1 text-sm sm:text-base md:text-lg xl:text-xl font-bold uppercase {$currentAppLang ===
							'ar'
								? 'ar-font'
								: ''}"
						>
							{$LL.contact.email()}
						</p>
						<a href="mailto:info@alkholi.com" aria-label="a mail link">
							<p class="text-xs sm:text-sm md:text-base">{$LL.contact.emailAddress()}</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
