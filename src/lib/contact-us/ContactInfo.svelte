<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
</script>

<section>
	<div class="container mx-auto px-3 uppercase">
		<div
			class="grid gap-4 sm:gap-2 md:gap-4 min-[420px]:grid-cols-2 sm:grid-cols-3 pt-8 md:pt-16 2xl:pt-20 max-[420px]:space-y-4"
		>
			<div class="flex space-x-2 lg:space-x-6">
				<div>
					<img
						src="/images/contact-us/info/asset-53.png"
						class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20"
						alt="phone"
					/>
				</div>
				<div>
					<div class="flex flex-col">
						<p class="pb-1 text-sm sm:text-base md:text-lg font-bold">Phone</p>
						<p class="text-xs sm:text-sm md:text-base">+2423423423423</p>
						<p class="text-xs sm:text-sm md:text-base">+2342934237878</p>
					</div>
				</div>
			</div>

			<div class="flex space-x-2 lg:space-x-6">
				<div>
					<img
						src="/images/contact-us/info/asset-54.png"
						class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20"
						alt="phone"
					/>
				</div>

				<div>
					<div class="flex flex-col capitalize">
						<p class="pb-1 text-sm sm:text-base md:text-lg font-bold uppercase">Location</p>
						<p class="text-xs sm:text-sm md:text-base">Address ...</p>
						<p class="text-xs sm:text-sm md:text-base">+2342934237878</p>
					</div>
				</div>
			</div>

			<div class="flex space-x-2 lg:space-x-6">
				<div>
					<img
						src="/images/contact-us/info/asset-55.png"
						class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20"
						alt="phone"
					/>
				</div>
				<div>
					<div class="flex flex-col">
						<p class="pb-1 text-sm sm:text-base md:text-lg font-bold uppercase">email</p>
						<p class="text-xs sm:text-sm md:text-base capitalize">info@alkholi.com</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
