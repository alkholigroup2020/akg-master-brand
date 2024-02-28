<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let cardRefs: any[] = [];

	// cards animation
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
				y: '100px',
				opacity: 0,
				delay: index * 0.2
			});
		});
	});
</script>

<div class="flex flex-col">
	<div
		class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5
    gap-y-20 min-[450px]:gap-x-3"
	>
		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[0]}>
			<div>
				<img
					src="/images/home/clientsSection/Alsafi_Danone_180x180.webp"
					srcset="/images/home/clientsSection/Alsafi_Danone_120x120.webp 768w, 
          /images/home/clientsSection/Alsafi_Danone_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[1]}>
			<div>
				<img
					src="/images/home/clientsSection/almarai_180x180.webp"
					srcset="/images/home/clientsSection/almarai_120x120.webp 768w, 
          /images/home/clientsSection/almarai_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[2]}>
			<div>
				<img
					src="/images/home/clientsSection/_Supreme Judicial Council - Riyadh_180x180.webp"
					srcset="/images/home/clientsSection/_Supreme Judicial Council - Riyadh_120x120.webp 768w, 
        /images/home/clientsSection/_Supreme Judicial Council - Riyadh_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[3]}>
			<div>
				<img
					src="/images/home/clientsSection/Al-Baha University_180x180.webp"
					srcset="/images/home/clientsSection/Al-Baha University_120x120.webp 768w, 
        /images/home/clientsSection/Al-Baha University_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[4]}>
			<div>
				<!-- <a
        href="https://imamu.edu.sa/en/Pages/default.aspx"
        target="_blank"
        aria-label="a client website link"
      > -->
				<img
					src="/images/home/clientsSection/_Imam University_180x180.webp"
					srcset="/images/home/clientsSection/_Imam University_120x120.webp 768w, 
        /images/home/clientsSection/_Imam University_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-20 h-20 lg:w-28 lg:h-28"
				/>
				<!-- </a> -->
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[5]}>
			<div>
				<img
					src="/images/home/clientsSection/Diplomatic district - Riyadh_180x180.webp"
					srcset="/images/home/clientsSection/Diplomatic district - Riyadh_120x120.webp 768w, 
        /images/home/clientsSection/Diplomatic district - Riyadh_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[6]}>
			<div>
				<img
					src="/images/home/clientsSection/Al-Jouf University_180x180.webp"
					srcset="/images/home/clientsSection/Al-Jouf University_120x120.webp 768w, 
        /images/home/clientsSection/Al-Jouf University_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[7]}>
			<div>
				<img
					src="/images/home/clientsSection/King Saud University_180x180.webp"
					srcset="/images/home/clientsSection/King Saud University_120x120.webp 768w, 
        /images/home/clientsSection/King Saud University_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-24 h-24 lg:w-36 lg:h-36"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[8]}>
			<div>
				<img
					src="/images/home/clientsSection/Egyptian embassy building in Riyadh_180x180.webp"
					srcset="/images/home/clientsSection/Egyptian embassy building in Riyadh_120x120.webp 768w, 
        /images/home/clientsSection/Egyptian embassy building in Riyadh_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[9]}>
			<div>
				<img
					src="/images/home/clientsSection/King Fahd National Library_180x180.webp"
					srcset="/images/home/clientsSection/King Fahd National Library_120x120.webp 768w, 
        /images/home/clientsSection/King Fahd National Library_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-24 h-24 lg:w-32 lg:h-32"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[10]}>
			<div>
				<img
					src="/images/home/clientsSection/Prince Sattam University_180x180.webp"
					srcset="/images/home/clientsSection/Prince Sattam University_120x120.webp 768w, 
        /images/home/clientsSection/Prince Sattam University_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-40 h-40 lg:w-52 lg:h-52"
				/>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center" bind:this={cardRefs[11]}>
			<div>
				<img
					src="/images/home/clientsSection/Al-Basateen_180x180.webp"
					srcset="/images/home/clientsSection/Al-Basateen_120x120.webp 768w, 
        /images/home/clientsSection/Al-Basateen_180x180.webp 2000w"
					alt="chairman"
					class="aspect-[1/1] w-20 h-20 lg:w-28 lg:h-28"
				/>
			</div>
		</div>
	</div>
</div>
