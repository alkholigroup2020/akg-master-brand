<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	let companies = [
		{
			imgURL: '/images/companies/logos/AKG-Trading_300x150.webp',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit nobis accusamus recusandae laborum reprehenderit voluptas. Ex iste architecto possimus, optio accusamus, fuga autem sed ad voluptatem, officiis facere voluptatum?',
			order: 1
		},
		{
			imgURL: '/images/companies/logos/AKG-Tech_300x150.webp',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit nobis accusamus recusandae laborum reprehenderit voluptas. Ex iste architecto possimus, optio accusamus, fuga autem sed ad voluptatem, officiis facere voluptatum?',
			order: 2
		},
		{
			imgURL: '/images/companies/logos/AKG-healthcare_300x150.webp',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit nobis accusamus recusandae laborum reprehenderit voluptas. Ex iste architecto possimus, optio accusamus, fuga autem sed ad voluptatem, officiis facere voluptatum?',
			order: 3
		},
		{
			imgURL: '/images/companies/logos/akstra_300x150.webp',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit nobis accusamus recusandae laborum reprehenderit voluptas. Ex iste architecto possimus, optio accusamus, fuga autem sed ad voluptatem, officiis facere voluptatum?',
			order: 4
		},
		{
			imgURL: '/images/companies/logos/aktek_300x150.webp',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit nobis accusamus recusandae laborum reprehenderit voluptas. Ex iste architecto possimus, optio accusamus, fuga autem sed ad voluptatem, officiis facere voluptatum?',
			order: 5
		},
		{
			imgURL: '/images/companies/logos/amos_300x150.webp',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit nobis accusamus recusandae laborum reprehenderit voluptas. Ex iste architecto possimus, optio accusamus, fuga autem sed ad voluptatem, officiis facere voluptatum?',
			order: 6
		},
		{
			imgURL: '/images/companies/logos/up_300x150.webp',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit nobis accusamus recusandae laborum reprehenderit voluptas. Ex iste architecto possimus, optio accusamus, fuga autem sed ad voluptatem, officiis facere voluptatum?',
			order: 7
		},
		{
			imgURL: '/images/companies/logos/btech_300x150.webp',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit nobis accusamus recusandae laborum reprehenderit voluptas. Ex iste architecto possimus, optio accusamus, fuga autem sed ad voluptatem, officiis facere voluptatum?',
			order: 8
		}
	];
</script>

<section class="container px-3 mx-auto pt-8 2xl:pt-20 pb-32">
	<!-- title -->
	<div class="text-center xl:pt-5">
		<h2
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold uppercase text-primary-500 mb-3 xl:mb-12"
		>
			Our Companies
		</h2>
	</div>

	<div>
		<p
			class="text-sm sm:text-base md:text-lg xl:text-xl lg:px-8 2xl:px-24 leading-8 text-justify md:text-center pb-2 sm:pb-16"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, praesentium, inventore
			vel, aspernatur ab velit laborum rem dolorum rerum commodi facere sequi iusto tempora?
			Necessitatibus, architecto. Quos hic atque totam similique perspiciatis impedit eum deleniti
			quas nemo, dolore assumenda ex soluta ipsam quam eligendi rem, dolor praesentium illum esse
			voluptatum velit voluptatibus illo, culpa ipsa.
		</p>
	</div>

	{#each companies as company}
		<div class="grid sm:grid-cols-2 gap-0">
			<div
				class="flex items-center justify-center py-8 sm:py-0 {company.order % 2 === 0
					? 'sm:order-last'
					: ''}"
			>
				<img
					src={company.imgURL}
					class="w-[150px] md:w-[200px] xl:w-[300px] aspect-[1/0.5]"
					alt="company logo"
				/>
			</div>
			<div
				class="flex items-center justify-center bg-primary-500 text-sm sm:text-base md:text-lg xl:text-xl"
			>
				<p
					class="px-3 min-[350px]:px-6 min-[500px]:px-8 py-5 min-[350px]:py-8 sm:p-5 md:p-8 lg:p-12 xl:px-12 xl:py-20 2xl:py-28 text-white"
				>
					{company.text}
				</p>
				<!-- <p class="h1 text-white">{company.order}</p> -->
			</div>
		</div>
	{/each}
</section>
