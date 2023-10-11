<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import { Ratings } from '@skeletonlabs/skeleton';
	import { icons } from './icons';

	const clientsTestimonials = [
		{
			title: 'Client Name',
			testimonial:
				'Lorem10 m ipsum dolor, sit amet consectetur adipisicing elit. Earum nisi fugiat exercitationem? Lorem, m, ipsum. Lorem ipsum dolor sit.',
			stars: 4
		},
		{
			title: 'Client Name',
			testimonial:
				'Lorem10 m ipsum dolor, sit amet consectetur adipisicing elit. Earum nisi fugiat exercitationem? Lorem, m, ipsum. Lorem ipsum dolor sit.',
			stars: 3.5
		},
		{
			title: 'Client Name',
			testimonial:
				'Lorem10 m ipsum dolor, sit amet consectetur adipisicing elit. Earum nisi fugiat exercitationem? Lorem, m, ipsum. Lorem ipsum dolor sit.',
			stars: 3
		},
		{
			title: 'Client Name',
			testimonial:
				'Lorem10 m ipsum dolor, sit amet consectetur adipisicing elit. Earum nisi fugiat exercitationem? Lorem, m, ipsum. Lorem ipsum dolor sit.',
			stars: 3
		}
	];

	let elemTestimonials: HTMLDivElement;

	function multiColumnLeft(): void {
		let x = elemTestimonials.scrollWidth;
		if (elemTestimonials.scrollLeft !== 0)
			x = elemTestimonials.scrollLeft - elemTestimonials.clientWidth;
		elemTestimonials.scroll(x, 0);
	}

	function multiColumnRight(): void {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (
			elemTestimonials.scrollLeft <
			elemTestimonials.scrollWidth - elemTestimonials.clientWidth - 1
		)
			x = elemTestimonials.scrollLeft + elemTestimonials.clientWidth;
		elemTestimonials.scroll(x, 0);
	}
</script>

<section class="container px-3 mx-auto py-5 xl:py-12">
	<!-- title -->
	<div class="text-center">
		<h2
			class="uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 mb-3 xl:mb-10 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		>
			{$LL.home.testimonials.title()}
		</h2>
	</div>

	<!-- Carousel -->
	<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
		<!-- Button: Left -->
		<button type="button" class="btn-icon variant-filled" on:click={multiColumnLeft}>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"
					><path
						d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
					/></svg
				>
			</span>
		</button>

		<!-- cards -->
		<div
			bind:this={elemTestimonials}
			class="snap-x snap-mandatory scroll-smooth flex gap-4 xl:gap-8 pb-2 overflow-x-auto"
		>
			{#each clientsTestimonials as testimonial}
				<div class="w-full sm:w-[49.5%] lg:w-[32%] shrink-0 snap-start">
					<div class="text-center p-8">
						<p
							class="text-base sm:text-lg lg:text-xl xl:text-2xl text-primary-500 font-semibold pb-1"
						>
							{testimonial.title}
						</p>
						<p class="line-clamp-3 my-3 2xl:px-5 text-xs sm:text-sm md:text-base">
							{testimonial.testimonial}
						</p>

						<div class="pt-3 pb-12">
							<Ratings value={testimonial.stars} max={5}>
								<svelte:fragment slot="empty">
									{@html icons.starEmpty}
								</svelte:fragment>
								<svelte:fragment slot="half">
									{@html icons.starHalf}
								</svelte:fragment>
								<svelte:fragment slot="full">
									{@html icons.starFull}
								</svelte:fragment>
							</Ratings>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Button-Right -->
		<button type="button" class="btn-icon variant-filled" on:click={multiColumnRight}>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"
					><path
						d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
					/></svg
				>
			</span>
		</button>
	</div>
</section>
