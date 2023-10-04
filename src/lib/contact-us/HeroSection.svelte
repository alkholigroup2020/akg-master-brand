<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import Menu from '$lib/generalComponents/Menu.svelte';
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

		<img
			alt="main hero section background"
			src="/images/contact-us/heroSection/banner-contact_2000x800.webp"
			srcset="/images/contact-us/heroSection/banner-contact_700x560.webp 640w, 
			/images/contact-us/heroSection/banner-contact_1200x720.webp 1024w, 
			/images/contact-us/heroSection/banner-contact_1600x800.webp 1536w, 
			/images/contact-us/heroSection/banner-contact_2000x800.webp 9000w"
			class="w-full aspect-[1/0.8] md:aspect-[1/0.6] lg:aspect-[1/0.5] 2xl:aspect-[1/0.4] 2xl:max-h-[1400px]"
		/>

		<div class="absolute inset-0 container mx-auto px-3">
			<!-- language switcher -->
			<div class="absolute right-0 top-0 m-3 min-[370px]:m-8 sm:hidden">
				<div>
					<!-- <LocaleSwitcher /> -->
				</div>
			</div>

			<!-- logo on xs -->
			<div class="sm:hidden my-3">
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

				<div>
					<div
						class="absolute right-0 bottom-0 uppercase p-10 min-[350px]:p-16 min-[450px]:p-24
						md:p-20 lg:p-36 xl:p-48 2xl:py-52 2xl:px-72 font-extrabold"
					>
						<div
							class="flex flex-col space-x-0 min-[380px]:space-x-2 space-y-2 min-[350px]:space-y-3 sm:space-y-8 2xl:space-y-12"
						>
							<div>
								<p
									class="text-white text-2xl min-[380px]:text-3xl min-[550px]:text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl"
								>
									Connect
								</p>
							</div>
							<div>
								<p
									class="text-white text-2xl min-[380px]:text-3xl min-[550px]:text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl"
								>
									With us
								</p>
							</div>
						</div>
					</div>
				</div>
			{:else}
				<!-- ARABIC -->

				<!-- <div>
					<div
						class="absolute right-0 bottom-0 space-y-10 sm:space-y-16 2xl:space-y-24 p-10 lg:p-16 xl:p-24 max-md:hidden"
					>
						<div class="flex space-x-12">
							<div>
								<p class="text-white h1 ml-5">{$LL.hero.build()}</p>
							</div>
							<div>
								<p class="text-white h1">{$LL.hero.optimize()}</p>
							</div>
						</div>

						<div>
							<p class="text-white h1">{$LL.hero.connect()}</p>
						</div>
						<div>
							<a
								href="/"
								class="btn !bg-transparent text-white border rounded-none text-sm sm:text-base md:text-lg px-5 py-3"
								>{$LL.hero.more()}</a
							>
						</div>
					</div>
				</div> -->
			{/if}
		</div>
	</div>
</section>
