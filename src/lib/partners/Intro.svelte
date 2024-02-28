<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let textElement: any;

	let theText: string;
	if ($currentAppLang === 'en') {
		theText = 'OUR KEY PARTNERS';
	} else {
		theText = 'شركاء النجاح';
	}

	// title animation
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

<section class="container px-3 mx-auto pt-12 md:pt-20 2xl:pt-24">
	<!-- title -->
	<div class="text-center xl:pt-5">
		<p
			bind:this={textElement}
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold uppercase text-primary-500 mb-3 xl:mb-12 {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		/>
	</div>

	<!-- <div>
		<p
			class="text-sm sm:text-base md:text-lg xl:text-xl lg:px-8 2xl:px-24 leading-8 text-justify md:text-center pb-2 sm:pb-16"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, praesentium, inventore
			vel, aspernatur ab velit laborum rem dolorum rerum commodi facere sequi iusto tempora?
			Necessitatibus, architecto.
		</p>
	</div> -->
</section>
