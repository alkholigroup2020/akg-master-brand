<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
</script>

<section>
	<div class="container px-3 mx-auto">
		<div>
			<p
				class="uppercase pt-8 text-primary-500 font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl"
			>
				government
			</p>
		</div>
		<div class="flex flex-col">
			<!-- justify-center -->
			<div
				class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-5 min-[450px]:gap-x-3 pt-12 pb-20"
			>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
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

<section>
	<div class="container px-3 mx-auto">
		<div>
			<p
				class="uppercase pt-8 text-primary-500 font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl"
			>
				government
			</p>
		</div>
		<div class="flex flex-col pb-16">
			<!-- justify-center -->
			<div
				class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-5 min-[450px]:gap-x-3 pt-12 pb-20"
			>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
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
