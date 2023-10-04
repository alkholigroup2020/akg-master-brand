<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
</script>

<section>
	<div class="container mx-auto px-3 uppercase">
		<div class="grid sm:grid-cols-3 py-16">
			<div class="flex items-center space-x-8">
				<div>
					<img
						src="/images/contact-us/info/asset-53.png"
						class="rounded-full w-24 h-24"
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

			<div class="flex items-center space-x-8">
				<div>
					<img
						src="/images/contact-us/info/asset-54.png"
						class="rounded-full w-24 h-24"
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

			<div class="flex items-center space-x-8">
				<div>
					<img
						src="/images/contact-us/info/asset-55.png"
						class="rounded-full w-24 h-24"
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
