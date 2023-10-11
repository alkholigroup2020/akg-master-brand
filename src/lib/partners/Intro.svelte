<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
</script>

<section class="container px-3 mx-auto pt-8 2xl:pt-20">
	<!-- title -->
	<div class="text-center xl:pt-5">
		<h2
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold uppercase text-primary-500 mb-3 xl:mb-12 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		>
			{$LL.partners.title()}
		</h2>
	</div>

	<div>
		<p
			class="text-sm sm:text-base md:text-lg xl:text-xl lg:px-8 2xl:px-24 leading-8 text-justify md:text-center pb-2 sm:pb-16"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, praesentium, inventore
			vel, aspernatur ab velit laborum rem dolorum rerum commodi facere sequi iusto tempora?
			Necessitatibus, architecto.
		</p>
	</div>
</section>
