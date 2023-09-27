<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
</script>

<section>
	<div class="container mx-auto px-3 py-5 xl:py-12">
		<div class="sm:flex">
			<div
				class="sm:w-1/2 min-[400px]:px-12 min-[550px]:px-16 sm:px-5 md:px-8 xl:px-24 2xl:px-36 py-5"
			>
				<div class="flex flex-col items-center">
					<img
						src="/images/about/visionAndMission/asset-14.png"
						class="w-[90px] h-[90px] md:w-28 md:h-28 xl:w-36 xl:h-36 2xl:w-44 2xl:h-44"
						alt="our mission"
					/>
					<h4 class="heading text-base sm:text-lg lg:text-xl xl:text-2xl py-5 xl:pt-8 xl:pb-3">
						MISSION
					</h4>
					<p class="text-center text-sm sm:text-base md:text-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, exercitationem.
					</p>
				</div>
			</div>
			<div
				class="sm:w-1/2 min-[400px]:px-12 min-[550px]:px-16 sm:px-5 md:px-8 xl:px-24 2xl:px-36 py-5"
			>
				<div class="flex flex-col items-center">
					<img
						src="/images/about/visionAndMission/asset-15.png"
						class="w-[90px] h-[90px] md:w-28 md:h-28 xl:w-36 xl:h-36 2xl:w-44 2xl:h-44"
						alt="our mission"
					/>
					<h4 class="heading text-base sm:text-lg lg:text-xl xl:text-2xl py-5 xl:pt-8 xl:pb-3">
						VISION
					</h4>
					<p class="text-center text-sm sm:text-base md:text-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, exercitationem.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
