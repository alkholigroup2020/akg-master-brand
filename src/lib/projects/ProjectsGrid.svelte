<script lang="ts">
	export let projectsData: any;
	import { currentAppLang } from '$lib/stores/store';

	export let tabSet: string;

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let cardRefs: any[] = [];

	// cards animation
	onMount(() => {
		cardRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					start: 'top bottom-=200',
					end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.6,
				y: '50px',
				opacity: 0,
				delay: index * 0.2
			});
		});
	});
</script>

<div>
	<div class="grid min-[350px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-12">
		{#each projectsData as project, index (project.id)}
			{#if tabSet === 'All' || tabSet === project.attributes.projectCategory}
				<div
					bind:this={cardRefs[index]}
					class="card bg-[#f6f6f9] hover:bg-primary-500 hover:p-1 md:hover:p-2 hover:cursor-pointer hover:text-white rounded-none"
				>
					<div>
						<img
							src={`https://cms.alkholi.com${project.attributes.projectImage_0x0.data.attributes.url}`}
							alt="screenshot from a project"
							class="aspect-[1/0.6]"
						/>
					</div>
					<div class="py-3 sm:py-5 text-center space-y-2 sm:space-y-3">
						<div>
							<p class="text-sm sm:text-base md:text-lg xl:text-xl font-semibold">
								{project.attributes.projectYear}
							</p>
						</div>
						<div>
							{#if $currentAppLang === 'en'}
								<p class="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold">
									{project.attributes.projectTitle}
								</p>
							{:else}
								<p class="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold">
									{project.attributes.localizations.data[0].attributes.projectTitle}
								</p>
							{/if}
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
