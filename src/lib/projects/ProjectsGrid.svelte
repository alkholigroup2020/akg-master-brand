<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import type { Script } from 'svelte/types/compiler/interfaces';

	export let projectsData: any;
	export let tabSet: string;
</script>

<div>
	<div class="grid min-[350px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-12">
		{#each projectsData as project}
			{#if tabSet === 'All' || tabSet === project.attributes.projectCategory}
				<div
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
							<p class="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold">
								{project.attributes.projectTitle}
							</p>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<!-- <pre>{tabSet}</pre>
	{#each projectsData as project}
		<pre>{project.attributes.projectYear}</pre>
	{/each} -->
</div>
