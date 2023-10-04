<script lang="ts">
	import LL from '$i18n/i18n-svelte';
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

		<img
			alt="main hero section background"
			src="/images/partners/heroSection/asset_2_1920x768.webp"
			srcset="/images/partners/heroSection/asset_2_700x560.webp 640w, 	 
			/images/partners/heroSection/asset_2_1200x720.webp 1024w, 
			/images/partners/heroSection/asset_2_1600x800.webp 1536w, 
			/images/partners/heroSection/asset_2_1920x768.webp 9000w"
			class="w-full aspect-[1/0.8] md:aspect-[1/0.6] lg:aspect-[1/0.5] 2xl:aspect-[1/0.4] 2xl:max-h-[1400px]"
		/>

		<!-- logo on xs -->
		<div class="absolute inset-0 sm:hidden bg-primary-500 h-12">
			<img
				loading="lazy"
				src="/images/nav/white_80x35.webp"
				alt="company's logo"
				class="mx-3 min-[370px]:mx-5 mt-1 w-[80px] h-[35px] aspect-[16/7]"
			/>
		</div>

		<div class="absolute inset-0 container mx-auto px-3">
			<!-- hamburger & logo -->
			<div class="absolute left-0 top-12 sm:top-0 m-3 min-[370px]:m-5 sm:m-3 sm:mt-10" dir="ltr">
				<Menu {outsideClicked} on:message={handleMessage} />
			</div>
		</div>
	</div>
</section>
