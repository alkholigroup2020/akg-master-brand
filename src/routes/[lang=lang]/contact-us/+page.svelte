<script lang="ts">
	import ConnectForm from '$lib/contact-us/ConnectForm.svelte';
	import ContactInfo from '$lib/contact-us/ContactInfo.svelte';
	import HeroSection from '$lib/contact-us/HeroSection.svelte';
	import JoinForm from '$lib/contact-us/JoinForm.svelte';
	import Map from '$lib/contact-us/Map.svelte';
	import MainFooter from '$lib/footers/MainFooter.svelte';

	export let data;

	let formData = data.form;
	let joinUsForm = data.joinUsForm;
</script>

<HeroSection />

<ContactInfo />

<ConnectForm {formData} />

<Map />

<JoinForm {joinUsForm} />

<MainFooter />
