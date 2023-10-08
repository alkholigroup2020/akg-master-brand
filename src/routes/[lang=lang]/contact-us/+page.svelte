<script lang="ts">
	import ConnectForm from '$lib/contact-us/ConnectForm.svelte';
	import ContactInfo from '$lib/contact-us/ContactInfo.svelte';
	import HeroSection from '$lib/contact-us/HeroSection.svelte';
	import Map from '$lib/contact-us/Map.svelte';
	import MainFooter from '$lib/footers/MainFooter.svelte';
	import Intro from '$lib/partners/Intro.svelte';
	import PartnersLogos from '$lib/partners/PartnersLogos.svelte';

	export let data;

	let formData = data;
</script>

<HeroSection />

<ContactInfo />

<ConnectForm {formData} />

<Map />

<div class="h-96 w-full" />

<MainFooter />
