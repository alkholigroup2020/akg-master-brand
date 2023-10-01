<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	export let sectionData: any;

	const sortedData = [...sectionData].sort((a, b) => {
		if (a.attributes.divisionOrder < b.attributes.divisionOrder) {
			return -1;
		}
		if (a.attributes.divisionOrder > b.attributes.divisionOrder) {
			return 1;
		}
		return 0;
	});
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="container mx-auto px-3 pb-8 lg:pb-12">
		<!-- title -->
		<div class="text-center">
			<p
				class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 py-12 xl:py-16"
			>
				OUR DIVISIONS
			</p>
		</div>

		<!-- divisions -->
		<div class="pb-16">
			{#each sortedData as division}
				<div class="grid sm:grid-cols-2 xl:grid-cols-6 sm:gap-6 lg:gap-12 xl:gap-12 pb-12">
					<div
						class="xl:col-span-2 {division.attributes.divisionOrder % 2 === 0
							? 'sm:order-last'
							: ''}"
					>
						<div>
							<img
								src={`https://cms.alkholi.com${division.attributes.divisionImage_620x620.data.attributes.url}`}
								srcset={`https://cms.alkholi.com${division.attributes.divisionImage_620x310.data.attributes.url} 640w,
              https://cms.alkholi.com${division.attributes.divisionImage_620x620.data.attributes.url} 2000w`}
								alt="division"
								class="w-full aspect-[1/0.5] sm:aspect-[1/1]"
							/>
						</div>
					</div>
					<div
						class="xl:col-span-4 {division.attributes.divisionOrder % 2 === 0 ? 'text-right' : ''}"
					>
						<div
							class="flex flex-col h-full justify-center pt-5 sm:pt-0 space-y-3 sm:space-y-5 lg:space-y-8"
						>
							<div>
								<p
									class=" sm:mt-0 text-primary-500 text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold"
								>
									{division.attributes.divisionTitle}
								</p>
							</div>
							<div>
								<p class=" text-sm sm:text-base md:text-lg line-clamp-5 sm:line-clamp-4">
									{division.attributes.divisionParagraph}
								</p>
							</div>
							<div>
								<a
									href="/"
									class="btn bg-secondary-500 rounded-sm text-white text-sm sm:text-base md:text-lg font-bold
                px-5 py-2 min-[450px]:px-5 min-[450px]:py-3 md:px-8">{$LL.hero.more()}</a
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
