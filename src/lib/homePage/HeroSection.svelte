<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import Menu from '$lib/generalComponents/Menu.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	// let titleElement: gsap.TweenTarget;

	onMount(() => {
		const words = document.querySelectorAll('.wordAnimation');
		let observer = new IntersectionObserver(function (entries, self) {
			let targets = entries.map((entry) => {
				if (entry.isIntersecting) {
					self.unobserve(entry.target);
					return entry.target;
				}
			});
			gsap.from(targets, {
				duration: 0.8,
				y: 300,
				opacity: 0.2,
				// ease: 'sine',
				stagger: {
					each: 0.8
				}
			});
		});
		words.forEach((word) => {
			observer.observe(word);
		});
		// arabic animation
		const wordsAr = document.querySelectorAll('.ar-wordAnimation');
		let observerAr = new IntersectionObserver(function (entries, self) {
			let targets = entries.map((entry) => {
				if (entry.isIntersecting) {
					self.unobserve(entry.target);
					return entry.target;
				}
			});
			gsap.from(targets, {
				duration: 1.2,
				y: 300,
				opacity: 0.2,
				// ease: 'sine',
				stagger: {
					each: 0.8
				}
			});
		});
		wordsAr.forEach((word) => {
			observerAr.observe(word);
		});
	});

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
			<div class="sm:hidden my-3 w-[90px]" dir="ltr">
				<img
					loading="lazy"
					src="/images/nav/white_450x225.webp"
					alt="company's logo"
					class="w-full aspect-[1/0.5]"
				/>
			</div>

			<!-- hamburger & logo -->
			<div class="absolute left-0 top-14 sm:top-0 m-3 min-[370px]:m-5 sm:m-3 sm:mt-10" dir="ltr">
				<Menu {outsideClicked} on:message={handleMessage} />
			</div>

			{#if $currentAppLang === 'en'}
				<!-- English -->
				<!-- 
						in:fly={{ x: 200, delay: 200, duration: 2000 }}
						in:fly={{ x: 200, delay: 1000, duration: 2000 }}
						in:fly={{ x: 200, delay: 1800, duration: 2000 }}
					-->
				<div>
					<div
						style="overflow-x: hidden; overflow-y: hidden"
						class="absolute right-3 bottom-3 min-[350px]:right-9 min-[350px]:bottom-9 min-[450px]:right-12 min-[450px]:bottom-12
							sm:right-16 sm:bottom-16 md:right-20 md:bottom-20 2xl:right-32 2xl:bottom-32 space-y-2 min-[350px]:space-y-3
							min-[450px]:space-y-5 sm:space-y-8 xl:space-y-12"
					>
						<div class="flex space-x-0 min-[380px]:space-x-2">
							<div>
								<p
									class="text-white heading md:mr-2 text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl wordAnimation"
								>
									{$LL.hero.build()}
								</p>
							</div>
							<div>
								<p
									class="text-white heading text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl wordAnimation"
								>
									{$LL.hero.optimize()}
								</p>
							</div>
						</div>

						<div>
							<p
								class="text-white heading 2xl:pb-3 text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl wordAnimation"
							>
								{$LL.hero.connect()}
							</p>
						</div>
					</div>
				</div>
			{:else}
				<!-- ARABIC -->
				<!-- 
						in:fly={{ x: -200, delay: 200, duration: 2000 }}
						in:fly={{ x: -200, delay: 1000, duration: 2000 }}
						in:fly={{ x: -200, delay: 1800, duration: 2000 }}
					-->
				<div>
					<div
						style="overflow-x: hidden; overflow-y: hidden"
						class="absolute right-3 bottom-5 min-[350px]:right-10 min-[350px]:bottom-12 min-[450px]:right-10 min-[450px]:bottom-12
							sm:right-12 sm:bottom-16 md:right-16 md:bottom-20 2xl:right-32 2xl:bottom-32 space-y-5 sm:space-y-12 2xl:space-y-20"
					>
						<div class="flex space-x-12">
							<div>
								<p
									class="text-white font-extrabold text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ml-3 xl:ml-5 ar-font ar-wordAnimation"
								>
									{$LL.hero.build()}
								</p>
							</div>
							<div>
								<p
									class="text-white font-extrabold text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ar-font ar-wordAnimation"
								>
									{$LL.hero.optimize()}
								</p>
							</div>
						</div>

						<div>
							<p
								class="text-white font-extrabold text-xl min-[380px]:text-2xl min-[550px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ar-font ar-wordAnimation"
							>
								{$LL.hero.connect()}
							</p>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
