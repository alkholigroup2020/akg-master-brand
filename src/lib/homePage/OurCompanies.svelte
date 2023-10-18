<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
</script>

<section class="container px-3 mx-auto mb-32 xl:mb-40">
	<!-- title -->
	<div class="text-center">
		<h2
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold uppercase text-primary-500 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		>
			{$LL.home.companies.title()}
		</h2>
	</div>

	<!-- logos -->
	<div class="flex flex-col pt-5">
		<div
			class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 pt-6 md:pt-12 px-5 min-[400px]:px-12 min-[500px]:px-8 lg:px-24 2xl:px-40 gap-x-12 min-[400px]:gap-x-20 min-[500px]:gap-x-12 sm:gap-x-16 lg:gap-x-24 2xl:gap-x-36 gap-y-8 md:gap-y-12"
		>
			<div class="flex flex-col items-center justify-center">
				<div>
					<img
						src="/images/home/companiesSection/AKG-healthcare_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<div>
					<img
						src="/images/home/companiesSection/AKG-Tech_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<div>
					<img
						src="/images/home/companiesSection/AKG-Trading_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<div>
					<img
						src="/images/home/companiesSection/akstra_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<div>
					<img
						src="/images/home/companiesSection/aktek_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<div>
					<img
						src="/images/home/companiesSection/amos_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<a
					href="https://www.buildingtec-elevators.com/"
					target="_blank"
					aria-label="the company webpage"
				>
					<div>
						<img
							src="/images/home/companiesSection/btech_300x150.webp"
							alt="chairman"
							class="w-full aspect-[1/0.5]"
						/>
					</div>
				</a>
			</div>
			<div class="flex flex-col items-center justify-center">
				<div>
					<img
						src="/images/home/companiesSection/up_300x150.webp"
						alt="chairman"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
