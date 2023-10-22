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
					src="images/home/servicesSection/asset-05_800x480.webp"
					srcset="images/home/servicesSection/asset-05_800x400.webp 1024w, images/home/servicesSection/asset-05_800x800.webp 1280w, images/home/servicesSection/asset-05_800x640.webp 1536w, images/home/servicesSection/asset-05_800x480.webp 2000w"
					alt="a working labor"
					class="w-full aspect-[1/0.5] lg:aspect-[1/1] xl:aspect-[1/0.8] 2xl:aspect-[1/0.6]"
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
				<div class="text-white {$currentAppLang === 'ar' ? 'ar-font' : 'normal-thin'}">
					<Accordion autocollapse>
						<AccordionItem regionControl={$currentAppLang === 'ar' ? 'text-right' : ''}>
							<svelte:fragment slot="summary"
								><span class="font-bold">{$LL.home.services.li1()}</span></svelte:fragment
							>
							<svelte:fragment slot="content">
								<span transition:fade={{ duration: 1000 }}>{$LL.home.services.p1()}</span>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem regionControl={$currentAppLang === 'ar' ? 'text-right' : ''}>
							<svelte:fragment slot="summary"
								><span class="font-bold">{$LL.home.services.li2()}</span></svelte:fragment
							>
							<svelte:fragment slot="content">
								<span transition:fade={{ duration: 1000 }}>
									{$LL.home.services.p2()}
								</span>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem regionControl={$currentAppLang === 'ar' ? 'text-right' : ''}>
							<svelte:fragment slot="summary"
								><span class="font-bold">{$LL.home.services.li3()}</span></svelte:fragment
							>
							<svelte:fragment slot="content">
								<span transition:fade={{ duration: 1000 }}>
									{$LL.home.services.p3()}
								</span>
							</svelte:fragment>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>

		<div class="flex flex-col-reverse lg:flex-row bg-primary-500">
			<!-- text -->
			<div class="lg:w-[50%] px-3 py-8 sm:p-8 xl:p-12 space-y-5" dir={$pageDirection}>
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
						: ''}"
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
						? 'lg:pt-16 xl:pt-14'
						: ''} {$currentAppLang === 'ar' ? 'ar-font' : ''}"
				>
					{$LL.home.atAlkholi.p2()}
				</p>

				<!-- more btn -->
				{#if !showMore}
					<div>
						<button
							on:click={() => {
								showMore = true;
							}}
							class="btn !bg-transparent text-white text-xs sm:text-sm md:text-base px-0 uppercase {$currentAppLang ===
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
					src="images/home/servicesSection/asset-06_800x480.webp"
					srcset="images/home/servicesSection/asset-06_800x400.webp 1024w, images/home/servicesSection/asset-06_800x800.webp 1280w, images/home/servicesSection/asset-06_800x640.webp 1536w, images/home/servicesSection/asset-06_800x480.webp 2000w"
					alt="an IT person working in data center"
					class="w-full aspect-[1/0.5] lg:aspect-[1/1] xl:aspect-[1/0.8] 2xl:aspect-[1/0.6]"
				/>
			</div>
		</div>

		<!-- the view more result -->
		{#if showMore}
			<div
				class="bg-primary-500 grid lg:grid-cols-2 gap-5 xl:gap-8 px-3 sm:px-8 xl:px-12 lg:pt-8 xl:pt-12 2xl:pt-16 pb-5 xl:pb-12"
				dir={$pageDirection}
			>
				<p
					in:fade={{ duration: 800, delay: 100 }}
					class="normal-thin text-sm sm:text-base md:text-lg xl:text-xl xl:leading-8 text-white {$currentAppLang ===
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
