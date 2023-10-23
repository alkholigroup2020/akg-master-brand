<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let cardRefs: any[] = [];

	onMount(() => {
		cardRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					start: 'top bottom-=100',
					end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.5,
				// y: '100px',
				opacity: 0,
				delay: index * 0.1
			});
		});
	});
</script>

<section dir={$pageDirection}>
	<div class="container px-3 mx-auto">
		<div>
			<p
				class="uppercase pt-8 text-primary-500 font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl"
			>
				{$LL.partners.t1()}
			</p>
		</div>
		<div class="flex flex-col">
			<!-- justify-center -->
			<div
				class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-5 min-[450px]:gap-x-3 pt-12 pb-20"
			>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[0]}>
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[1]}>
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[2]}>
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[3]}>
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[4]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[5]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[6]}>
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[7]}>
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[8]}>
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[9]}>
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[10]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[11]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[12]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section dir={$pageDirection}>
	<div class="container px-3 mx-auto">
		<div>
			<p
				class="uppercase pt-8 text-primary-500 font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl"
			>
				{$LL.partners.t2()}
			</p>
		</div>
		<div class="flex flex-col pb-16">
			<!-- justify-center -->
			<div
				class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-5 min-[450px]:gap-x-3 pt-12 pb-20"
			>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[13]}>
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[14]}>
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[15]}>
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[16]}>
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[17]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[18]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[19]}>
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[20]}>
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[21]}>
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[22]}>
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[23]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[24]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
