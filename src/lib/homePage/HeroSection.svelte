<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	let navOpen = false;
</script>

<section>
	<div class="relative" dir={$pageDirection}>
		<!-- <div class="absolute inset-0 bg-black opacity-0" /> -->

		<!-- <div class="absolute w-full h-full">
			<SectionSize />
		</div> -->

		<img
			alt="main hero section background"
			src="/images/home/heroSection/asset-01_2000x800.webp"
			srcset="/images/home/heroSection/asset-01_700x560.webp 640w, 
			/images/home/heroSection/asset-01_800x560.webp 768w, 
			/images/home/heroSection/asset-01_1200x720.webp 1024w, 
			/images/home/heroSection/asset-01_1600x800.webp 1536w, 
			/images/home/heroSection/asset-01_2000x800.webp 9000w"
			class="w-full aspect-[1/0.8] sm:aspect-[1/0.7] md:aspect-[1/0.6] lg:aspect-[1/0.5] 2xl:aspect-[1/0.4] 2xl:max-h-[1400px]"
		/>

		<div class="absolute inset-0 container mx-auto px-3">
			<!-- language switcher -->
			<div class="absolute right-0 top-0 m-3 min-[370px]:m-8 sm:hidden">
				<div>
					<LocaleSwitcher />
				</div>
			</div>

			<!-- hamburger & logo -->
			<div class="absolute left-0 top-0 m-3 min-[370px]:m-5 sm:m-3 sm:mt-10" dir="ltr">
				<!-- logo on xs -->
				<div class="sm:hidden my-3">
					<img
						loading="lazy"
						src="/images/nav/white_80x35.webp"
						alt="company's logo"
						class="w-[80px] h-[35px] aspect-[16/7]"
					/>
				</div>
				<!-- hamburger -->
				<button
					on:click={() => {
						navOpen = !navOpen;
					}}
				>
					<span>
						{#if !navOpen}
							<svg
								class="w-6 sm:w-10 h-6 sm:h-10"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="Menu / Hamburger_LG">
									<path
										id="Vector"
										d="M3 17H21M3 12H21M3 7H21"
										stroke="#FFF"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
							</svg>
						{:else}
							<svg
								class="w-6 sm:w-10 h-6 sm:h-10"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
									stroke="#FFF"
									stroke-width="1.5"
									stroke-linecap="round"
								/>
								<path
									d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
									stroke="#FFF"
									stroke-width="1.5"
									stroke-linecap="round"
								/>
							</svg>
						{/if}
					</span>
				</button>

				<!-- hero nav list -->
				{#if navOpen}
					<nav class="list-nav bg-surface-50-900-token rounded-sm">
						<ul class="w-[120px]">
							<li>
								<a href="/elements/lists" style="border-radius:0px">
									<span class="flex-auto">Skeleton</span>
								</a>
							</li>
							<li>
								<a href="/elements/lists" style="border-radius:0px">
									<span class="flex-auto">Skeleton</span>
								</a>
							</li>
							<li>
								<a href="/elements/lists" style="border-radius:0px">
									<span class="flex-auto">Skeleton</span>
								</a>
							</li>
						</ul>
					</nav>
				{/if}
			</div>

			<!-- main title on xs & sm -->
			<div
				class="absolute right-0 bottom-0 space-y-2 min-[300px]:space-y-4 p-6 min-[300px]:p-10 min-[550px]:p-20 sm:p-20 sm:space-y-8 md:hidden"
			>
				<div
					class="space-y-2 min-[300px]:space-y-4 min-[400px]:space-y-0 min-[400px]:flex min-[400px]:space-x-3"
				>
					<div>
						<p class="text-white font-bold heading-{$currentAppLang}-3">{$LL.hero.build()}</p>
					</div>
					<div>
						<p class="text-white font-bold heading-{$currentAppLang}-3">{$LL.hero.optimize()}</p>
					</div>
				</div>

				<div>
					<p class="text-white font-bold heading-{$currentAppLang}-3">{$LL.hero.connect()}</p>
				</div>
				<div>
					<a
						href="/"
						class="btn !bg-transparent text-white border rounded-none font-bold sub-main-{$currentAppLang}-text px-3 py-1"
						>{$LL.hero.more()}</a
					>
				</div>
			</div>

			<!-- main title on md to 2xl -->
			<div
				class="absolute right-0 bottom-0 space-y-10 xl:space-y-16 2xl:space-y-24 p-10 lg:p-16 xl:p-24 max-md:hidden"
			>
				<div class="flex space-x-5">
					<div>
						<p class="text-white font-bold heading-{$currentAppLang}-1">{$LL.hero.build()}</p>
					</div>
					<div>
						<p class="text-white font-bold heading-{$currentAppLang}-1">{$LL.hero.optimize()}</p>
					</div>
				</div>

				<div>
					<p class="text-white font-bold heading-{$currentAppLang}-1">{$LL.hero.connect()}</p>
				</div>
				<div>
					<a
						href="/"
						class="btn !bg-transparent text-white border rounded-none font-bold main-{$currentAppLang}-text px-5 py-3"
						>{$LL.hero.more()}</a
					>
				</div>
			</div>
		</div>
	</div>
</section>
