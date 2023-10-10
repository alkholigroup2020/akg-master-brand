<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
</script>

<section class="container px-3 mx-auto pt-5 pb-10 2xl:pt-8 2xl:pb-16" dir={$pageDirection}>
	<!-- title -->
	<div class="text-center">
		<h2
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 mb-8 xl:mb-12 uppercase {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		>
			{$LL.about.timeline.title()}
		</h2>
	</div>

	<div>
		<p
			class="text-sm sm:text-base md:text-lg xl:text-xl lg:px-8 2xl:px-24 leading-8 text-justify md:text-center {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		>
			{$LL.about.timeline.p1()}
		</p>
	</div>
</section>
