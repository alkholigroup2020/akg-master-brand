<script lang="ts">
	import { currentAppLang, pageDirection } from '$lib/stores/store';
	import { onMount } from 'svelte';
	import LL from '$i18n/i18n-svelte';

	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let textElement: any;

	let theText: string;
	if ($currentAppLang === 'en') {
		theText = 'Chairman Message';
	} else {
		theText = 'رسالة رئيس مجلس الإدارة';
	}

	onMount(() => {
		gsap.to(textElement, {
			scrollTrigger: {
				trigger: textElement,
				start: 'top+=100 bottom-=100',
				toggleActions: 'play none none none',
				markers: false
			},
			text: theText,
			duration: 1.2
		});
	});
</script>

<section class="container mx-auto" dir={$pageDirection}>
	<!-- title -->
	<div
		class="text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[45px]
    font-semibold uppercase text-primary-500 py-8 xl:py-12
    {$currentAppLang === 'ar' ? 'ar-font' : ''}"
	>
		<p bind:this={textElement} />
	</div>
	<div class="px-3 xl:px-0 pb-12 xl:pb-16 space-y-5 {$currentAppLang === 'ar' ? 'ar-font' : ''}">
		<p class="text-justify text-sm sm:text-base md:text-lg xl:text-xl">
			{$LL.about.chairmanMsg.first()}
		</p>
		<p class="text-justify text-sm sm:text-base md:text-lg xl:text-xl">
			{$LL.about.chairmanMsg.second()}
		</p>
		<p class="text-justify text-sm sm:text-base md:text-lg xl:text-xl">
			{$LL.about.chairmanMsg.third()}
		</p>
	</div>
</section>
