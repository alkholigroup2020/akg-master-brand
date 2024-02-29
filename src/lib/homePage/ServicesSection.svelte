<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	let showMore = false;
</script>

<section>
	<div class="md:container md:mx-auto md:px-3 pt-12 xl:pt-20 pb-8">
		<div class="flex flex-col lg:flex-row bg-primary-500">
			<!-- image -->
			<div class="lg:w-[50%]">
				<img
					src="images/home/servicesSection/labor_800x560.png"
					srcset="images/home/servicesSection/labor_800x480.webp 1024w, 
					images/home/servicesSection/labor_800x640.webp 1280w, 
					images/home/servicesSection/labor_800x560.webp 2000w"
					alt="a working labor"
					class="w-full aspect-[1/0.6] lg:aspect-[1/0.8] xl:aspect-[1/0.7]"
				/>
			</div>
			<!-- text -->
			<div class="lg:w-[50%] px-3 py-8 sm:p-8 xl:p-12 space-y-3" dir={$pageDirection}>
				<!-- title -->
				<p
					class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-secondary-500 xl:mb-5 {$currentAppLang ===
					'ar'
						? 'ar-font'
						: ''}"
				>
					{$LL.home.services.title()}
				</p>
				<!-- paragraph -->
				<p
					class="{$currentAppLang === 'ar'
						? 'ar-font'
						: 'normal-thin'} text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white"
				>
					{$LL.home.services.p0()}
				</p>
				<!-- accordion -->
				<div
					class="text-white text-sm md:text-base xl:text-xl {$currentAppLang === 'ar'
						? 'ar-font'
						: ''}"
				>
					<Accordion autocollapse>
						<AccordionItem regionControl={$currentAppLang === 'ar' ? 'text-right' : ''}>
							<svelte:fragment slot="summary"
								><span class="font-medium">{$LL.home.services.li1()}</span></svelte:fragment
							>
							<svelte:fragment slot="content">
								<span
									class="normal-thin {$currentAppLang === 'ar' ? 'ar-font font-thin' : ''}"
									transition:fade={{ duration: 1000 }}>{$LL.home.services.p1()}</span
								>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem regionControl={$currentAppLang === 'ar' ? 'text-right' : ''}>
							<svelte:fragment slot="summary"
								><span class="font-medium">{$LL.home.services.li2()}</span></svelte:fragment
							>
							<svelte:fragment slot="content">
								<span
									class="normal-thin {$currentAppLang === 'ar' ? 'ar-font font-thin' : ''}"
									transition:fade={{ duration: 1000 }}
								>
									{$LL.home.services.p2()}
								</span>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem regionControl={$currentAppLang === 'ar' ? 'text-right' : ''}>
							<svelte:fragment slot="summary"
								><span class="font-medium">{$LL.home.services.li3()}</span></svelte:fragment
							>
							<svelte:fragment slot="content">
								<span
									class="normal-thin {$currentAppLang === 'ar' ? 'ar-font font-thin' : ''}"
									transition:fade={{ duration: 1000 }}
								>
									{$LL.home.services.p3()}
								</span>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem regionControl={$currentAppLang === 'ar' ? 'text-right' : ''}>
							<svelte:fragment slot="summary"
								><span class="font-medium">{$LL.home.services.li4()}</span></svelte:fragment
							>
							<svelte:fragment slot="content">
								<span
									class="normal-thin {$currentAppLang === 'ar' ? 'ar-font font-thin' : ''}"
									transition:fade={{ duration: 1000 }}
								>
									{$LL.home.services.p4()}
								</span>
							</svelte:fragment>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>

		<div class="flex flex-col-reverse lg:flex-row bg-primary-500">
			<!-- text -->
			<div
				class="lg:w-[50%] px-3 py-8 sm:p-8 md:p-6 2xl:p-9 space-y-5 lg:space-y-1 xl:space-y-4 2xl:space-y-6"
				dir={$pageDirection}
			>
				<!-- title -->
				<p
					class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-secondary-500 xl:mb-5 {$currentAppLang ===
					'ar'
						? 'ar-font'
						: ''}"
				>
					{$LL.home.atAlkholi.title()}
				</p>
				<!-- paragraph -->
				<p
					class="normal-thin text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white {$currentAppLang ===
					'ar'
						? 'ar-font'
						: ''} {showMore ? 'lg:py-3 xl:py-5' : ''}"
				>
					{$LL.home.atAlkholi.q1()}
				</p>
				<p
					class="normal-thin text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white {$currentAppLang ===
					'ar'
						? 'ar-font'
						: ''}"
				>
					{$LL.home.atAlkholi.p1()}
				</p>

				<p
					class="normal-thin text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white {showMore
						? 'lg:pt-14 xl:pt-12'
						: ''} {$currentAppLang === 'ar' ? 'ar-font' : ''}"
				>
					{$LL.home.atAlkholi.p2()}
				</p>

				<!-- in:fade={{ duration: 800, delay: 100 }} -->
				<p
					class="hidden 2xl:block normal-thin text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white {$currentAppLang ===
					'ar'
						? 'ar-font'
						: ''} {showMore ? 'lg:pt-14 xl:pt-12' : ''}"
				>
					{$LL.home.atAlkholi.p3()}
				</p>

				<!-- more btn -->
				{#if !showMore}
					<div>
						<button
							on:click={() => {
								showMore = true;
							}}
							class="btn !bg-transparent text-white text-xs sm:text-sm md:text-base px-0 pt-2 2xl:pt-5 uppercase {$currentAppLang ===
							'ar'
								? 'ar-font'
								: ''}"
							>{$LL.generals.more()}
							<span class="mx-3 {$currentAppLang === 'ar' ? 'rotate-180' : ''} ">
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
						</button>
					</div>
				{/if}
			</div>

			<!-- image -->
			<div class="lg:w-[50%]">
				<img
					src="images/home/servicesSection/hero_800x640.webp"
					srcset="images/home/servicesSection/hero_800x560.webp 1024w, 
					images/home/servicesSection/hero_800x520.webp 1280w, 
					images/home/servicesSection/hero_800x640.webp 2000w"
					alt="an employee working in the office"
					class="w-full aspect-[1/0.7] md:aspect-[1/0.65] lg:aspect-[1/0.8]"
				/>
			</div>
		</div>

		<!-- the view more result -->
		{#if showMore}
			<div
				class="bg-primary-500 grid lg:grid-cols-2 gap-5 xl:gap-8 px-3 sm:px-8 md:px-6 2xl:px-8 lg:pt-8 xl:pt-12 2xl:pt-16 pb-5 xl:pb-12"
				dir={$pageDirection}
			>
				<p
					in:fade={{ duration: 800, delay: 100 }}
					class="2xl:hidden normal-thin text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white {$currentAppLang ===
					'ar'
						? 'ar-font'
						: ''}"
				>
					{$LL.home.atAlkholi.p3()}
				</p>

				<p
					in:fade={{ duration: 1000, delay: 600 }}
					class="normal-thin text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white {$currentAppLang ===
					'ar'
						? 'ar-font'
						: ''}"
				>
					{$LL.home.atAlkholi.p4()}
				</p>

				<p
					in:fade={{ duration: 1000, delay: 900 }}
					class="normal-thin text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white {$currentAppLang ===
					'ar'
						? 'ar-font'
						: ''}"
				>
					{$LL.home.atAlkholi.p5()}
				</p>

				<p
					in:fade={{ duration: 1000, delay: 1200 }}
					class="normal-thin text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white {$currentAppLang ===
					'ar'
						? 'ar-font'
						: ''}"
				>
					{$LL.home.atAlkholi.p6()}
				</p>
			</div>

			<!-- less btn -->
			{#if showMore}
				<div class="bg-primary-500 px-3 sm:px-8 xl:px-12 pb-8 xl:pb-12" dir={$pageDirection}>
					<button
						on:click={() => {
							showMore = false;
						}}
						class="btn !bg-transparent text-white text-xs sm:text-sm md:text-base px-0 uppercase {$currentAppLang ===
						'ar'
							? 'ar-font'
							: ''}"
						>{$LL.generals.less()}
						<span class="mx-3 {$currentAppLang === 'ar' ? 'rotate-180' : ''} ">
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
					</button>
				</div>
			{/if}
		{/if}
	</div>
</section>
