<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import Menu from '$lib/generalComponents/Menu.svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	function handleMessage(event: { detail: any }) {
		// Log or use the data sent from the child component
		if (event.detail === 'Menu Closed') {
			outsideClicked = false;
		}
	}
	let outsideClicked = false;
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="relative" dir={$pageDirection}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="absolute inset-0 z-50 bg-black opacity-0"
			on:click={() => {
				outsideClicked = true;
			}}
		/>

		<!-- <div class="absolute w-full h-full">
			<SectionSize />
		</div> -->

		<img
			alt="main hero section background"
			src="/images/home/heroSection/asset-01_2000x800.webp"
			srcset="/images/home/heroSection/asset-01_700x560.webp 640w, 
			/images/home/heroSection/asset-01_1200x720.webp 1024w, 
			/images/home/heroSection/asset-01_1600x800.webp 1536w, 
			/images/home/heroSection/asset-01_2000x800.webp 9000w"
			class="w-full aspect-[1/0.8] md:aspect-[1/0.6] lg:aspect-[1/0.5] 2xl:aspect-[1/0.4] 2xl:max-h-[1400px]"
		/>

		<div class="absolute inset-0 container mx-auto px-3">
			<!-- language switcher -->
			<div class="absolute right-0 top-0 m-3 min-[370px]:m-8 sm:hidden z-50">
				<div>
					<LocaleSwitcher />
				</div>
			</div>

			<!-- logo on xs -->
			<div class="sm:hidden my-3" dir="ltr">
				<img
					loading="lazy"
					src="/images/nav/white_80x35.webp"
					alt="company's logo"
					class="w-[80px] h-[35px] aspect-[16/7]"
				/>
			</div>

			<!-- hamburger & logo -->
			<div class="absolute left-0 top-12 sm:top-0 m-3 min-[370px]:m-5 sm:m-3 sm:mt-10" dir="ltr">
				<Menu {outsideClicked} on:message={handleMessage} />
			</div>

			{#if $currentAppLang === 'en'}
				<!-- English -->

				<!-- main title on xs & sm -->

				<!-- main title on md to 2xl -->
				<!-- max-md:hidden -->
				<div>
					<!-- p-5 min-[350px]:p-6 min-[450px]:p-8 min-[550px]:p-12 md:p-20 xl:p-28 2xl:p-36 -->
					<div
						class="absolute right-3 bottom-3 min-[350px]:right-7 min-[350px]:bottom-7
						min-[450px]:right-12 min-[450px]:bottom-12
						sm:right-16 sm:bottom-16
						md:right-20 md:bottom-20
						2xl:right-32 2xl:bottom-32
						
						space-y-2 min-[350px]:space-y-3 min-[450px]:space-y-5 sm:space-y-8 xl:space-y-12"
					>
						<div class="flex space-x-0 min-[380px]:space-x-2">
							<div>
								<p
									class="text-white heading text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
								>
									{$LL.hero.build()}
								</p>
							</div>
							<div>
								<p
									class="text-white heading text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
								>
									{$LL.hero.optimize()}
								</p>
							</div>
						</div>

						<div>
							<p
								class="text-white heading 2xl:pb-3 text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
							>
								{$LL.hero.connect()}
							</p>
						</div>

						<!-- <div>
							<a
								href="/"
								class="btn !bg-transparent rounded-md text-white border text-sm sm:text-base md:text-lg xl:text-xl font-semibold px-2 py-1
								min-[450px]:px-3 min-[450px]:py-2 md:px-8 md:py-4">{$LL.hero.more()}</a
							>
						</div> -->
					</div>
				</div>
			{:else}
				<!-- ARABIC -->

				<!-- main title on xs & sm -->

				<!-- main title on md to 2xl -->
				<div>
					<div
						class="absolute right-3 bottom-5 min-[350px]:right-7 min-[350px]:bottom-7
						min-[450px]:right-10 min-[450px]:bottom-12
						sm:right-12 sm:bottom-16
						md:right-16 md:bottom-20
						2xl:right-32 2xl:bottom-32 space-y-5 sm:space-y-12 2xl:space-y-20"
					>
						<div class="flex space-x-12">
							<div>
								<p
									class="text-white font-extrabold text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ml-3 xl:ml-5 ar-font"
								>
									{$LL.hero.build()}
								</p>
							</div>
							<div>
								<p
									class="text-white font-extrabold text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ar-font"
								>
									{$LL.hero.optimize()}
								</p>
							</div>
						</div>

						<div>
							<p
								class="text-white font-extrabold text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ar-font"
							>
								{$LL.hero.connect()}
							</p>
						</div>
						<!-- <div>
							<a
								href="/"
								class="btn !bg-transparent text-white border rounded-none text-sm sm:text-base md:text-lg xl:text-xl px-5 py-3"
								>{$LL.hero.more()}</a
							>
						</div> -->
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
