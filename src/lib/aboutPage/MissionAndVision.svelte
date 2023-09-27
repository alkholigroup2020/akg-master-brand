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
						src="/images/about/visionAndMission/asset-14_180x180.webp"
						srcset="
            /images/about/visionAndMission/asset-14_120x120.webp 1280w,
            /images/about/visionAndMission/asset-14_180x180.webp 2000w
            "
						class="w-[90px] h-[90px] md:w-28 md:h-28 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 aspect-[1/1]"
						alt="our mission"
					/>
					<p class="heading text-base sm:text-lg lg:text-xl xl:text-2xl py-5 xl:pt-8 xl:pb-3">
						MISSION
					</p>
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
						src="/images/about/visionAndMission/asset-15_180x180.webp"
						srcset="
            /images/about/visionAndMission/asset-15_120x120.webp 1280w,
            /images/about/visionAndMission/asset-15_180x180.webp 2000w
            "
						class="w-[90px] h-[90px] md:w-28 md:h-28 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 aspect-[1/1]"
						alt="our vision"
					/>
					<p class="heading text-base sm:text-lg lg:text-xl xl:text-2xl py-5 xl:pt-8 xl:pb-3">
						VISION
					</p>
					<p class="text-center text-sm sm:text-base md:text-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, exercitationem.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
