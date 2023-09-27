<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="text-white bg-primary-500 flex flex-col py-8 xl:py-12">
		<!-- title -->
		<div class="py-3">
			<p class="text-center text-lg sm:text-2xl lg:text-2xl xl:text-3xl">MEET THE TEAM</p>
		</div>

		<!-- chairman level -->
		<div class="flex justify-center py-12">
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-16_180x180.webp"
						srcset="/images/about/team/asset-16_120x120.webp 768w, /images/about/team/asset-16_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-28 h-28 md:w-36 md:h-36 xl:w-40 xl:h-40"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DR. HAMZA AL KHOLI</p>
			</div>
		</div>

		<!-- board level -->
		<div
			class="grid grid-cols-2 md:flex justify-center md:space-x-6 lg:space-x-16 xl:space-x-20 2xl:space-x-24 py-3 min-[400px]:px-10 min-[550px]:px-24 min-[650px]:px-32 md:px-0"
		>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-17_180x180.webp"
						srcset="/images/about/team/asset-17_120x120.webp 768w, /images/about/team/asset-17_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">FAISAL AL KHOLI</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-18_180x180.webp"
						srcset="/images/about/team/asset-18_120x120.webp 768w, /images/about/team/asset-18_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DARKO MACURA</p>
			</div>
		</div>

		<!-- directors level #1 -->
		<div
			class="grid grid-cols-2 gap-y-10 md:flex justify-center md:space-x-6 lg:space-x-16 xl:space-x-20 2xl:space-x-24 py-8 min-[400px]:px-10 min-[550px]:px-24 min-[650px]:px-32 md:px-0"
		>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-20_180x180.webp"
						srcset="/images/about/team/asset-20_120x120.webp 768w, /images/about/team/asset-20_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DARKO MACURA</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-21_180x180.webp"
						srcset="/images/about/team/asset-21_120x120.webp 768w, /images/about/team/asset-21_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DARKO MACURA</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-22_180x180.webp"
						srcset="/images/about/team/asset-22_120x120.webp 768w, /images/about/team/asset-22_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DARKO MACURA</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-23_180x180.webp"
						srcset="/images/about/team/asset-23_120x120.webp 768w, /images/about/team/asset-23_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">FAISAL AL KHOLI</p>
			</div>
		</div>

		<!-- directors level #2 -->
		<div
			class="grid grid-cols-2 gap-y-10 md:flex justify-center md:space-x-6 lg:space-x-16 xl:space-x-20 2xl:space-x-24 py-8 min-[400px]:px-10 min-[550px]:px-24 min-[650px]:px-32 md:px-0"
		>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-24_180x180.webp"
						srcset="/images/about/team/asset-24_120x120.webp 768w, /images/about/team/asset-24_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DARKO MACURA</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-25_180x180.webp"
						srcset="/images/about/team/asset-25_120x120.webp 768w, /images/about/team/asset-25_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DARKO MACURA</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-26_180x180.webp"
						srcset="/images/about/team/asset-26_120x120.webp 768w, /images/about/team/asset-26_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DARKO MACURA</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-27_180x180.webp"
						srcset="/images/about/team/asset-27_120x120.webp 768w, /images/about/team/asset-27_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">FAISAL AL KHOLI</p>
			</div>
		</div>

		<!-- directors level #3 -->
		<div
			class="grid grid-cols-2 gap-y-10 md:flex justify-center md:space-x-6 lg:space-x-16 xl:space-x-20 2xl:space-x-24 py-8 min-[400px]:px-10 min-[550px]:px-24 min-[650px]:px-32 md:px-0"
		>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-19_180x180.webp"
						srcset="/images/about/team/asset-19_120x120.webp 768w, /images/about/team/asset-19_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DARKO MACURA</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-28_180x180.webp"
						srcset="/images/about/team/asset-28_120x120.webp 768w, /images/about/team/asset-28_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">DARKO MACURA</p>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<img
						src="/images/about/team/asset-29_180x180.webp"
						srcset="/images/about/team/asset-29_120x120.webp 768w, /images/about/team/asset-29_180x180.webp 2000w"
						alt="chairman"
						class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
					/>
				</div>
				<p class="pt-5 heading text-sm sm:text-base md:text-lg">FAISAL AL KHOLI</p>
			</div>
		</div>
	</div>
</section>
