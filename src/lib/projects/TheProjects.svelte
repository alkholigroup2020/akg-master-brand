<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import ProjectsGrid from '$lib/projects/ProjectsGrid.svelte';

	import { onMount } from 'svelte';

	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';
	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];

	let projects: any;

	const getProjectsData = async () => {
		try {
			const response = await fetch('/api/projects/');

			const projectsData = await response.json();

			projects = projectsData.projects.data.sort(
				(
					a: { attributes: { divisionOrder: number } },
					b: { attributes: { divisionOrder: number } }
				) => {
					return a.attributes.divisionOrder - b.attributes.divisionOrder;
				}
			);

			if (!response.ok) {
				throw new Error();
			}
		} catch (error) {
			console.error('🚀 Error:', error);
		}
	};

	onMount(() => {
		getProjectsData();
	});

	let navOpen = false;

	let tabSet: string = 'All';
</script>

<section class="max-w-[1920px] mx-auto">
	<!-- title -->
	<div class="text-center">
		<p
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 py-12 xl:py-16"
		>
			OUR PROJECTS
		</p>
	</div>

	<!-- tabs bar on xs -->
	<div class="container mx-auto px-3 min-[450px]:px-8 sm:hidden">
		<!-- menu btn -->
		<div>
			<button
				class="btn variant-ringed-primary rounded-md py-2 px-8 min-[450px]:px-12"
				type="button"
				on:click={() => {
					navOpen = !navOpen;
				}}
			>
				<span class="text-primary-500 text-sm sm:text-base md:text-lg">{tabSet}</span>
			</button>

			{#if navOpen}
				<nav class="list-nav bg-surface-50-900-token rounded-lg">
					<ul class="w-full text-sm sm:text-base md:text-lg text-primary-500">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'All';
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>All</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Education';
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>Education</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Construction';
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>Construction</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Healthcare';
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>Healthcare</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Hospitality';
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>Hospitality</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Government';
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>Government</span>
							</div>
						</li>
					</ul>
				</nav>
			{/if}
		</div>
		<!-- projects grid -->
		<div>
			{#if !projects}
				<div class="w-full h-[750px] flex justify-center items-top">
					<div class="mt-32">
						<ConicGradient stops={conicStops} width="w-8 md:w-16 2xl:w-20" spin />
					</div>
				</div>
			{:else}
				<div class="py-12">
					<ProjectsGrid projectsData={projects} {tabSet} />
				</div>
			{/if}
		</div>
	</div>

	<!-- tabs bar on sm sizes and above -->
	<div class="container mx-auto px-3 hidden sm:block">
		<TabGroup justify="justify-center" regionList="border-b-0" active="bg-primary-500 text-white ">
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-3  md:px-10 text-sm sm:text-base md:text-lg"
				name="tab1"
				value={'All'}><span>All</span></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-4 lg:px-10 text-sm sm:text-base md:text-lg"
				name="tab2"
				value={'Education'}><span>Education</span></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-3 lg:px-6 text-sm sm:text-base md:text-lg"
				name="tab3"
				value={'Construction'}><span>Construction</span></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-3 lg:px-6 text-sm sm:text-base md:text-lg"
				name="tab4"
				value={'Healthcare'}><span>Healthcare</span></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-3 lg:px-6 text-sm sm:text-base md:text-lg"
				name="tab5"
				value={'Hospitality'}><span>Hospitality</span></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-3 lg:px-6 text-sm sm:text-base md:text-lg"
				name="tab6"
				value={'Government'}><span>Government</span></Tab
			>

			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if !projects}
					<div class="w-full h-[750px] flex justify-center items-top">
						<div class="mt-32">
							<ConicGradient stops={conicStops} width="w-8 md:w-16 2xl:w-20" spin />
						</div>
					</div>
				{:else}
					<div class="py-12">
						<ProjectsGrid projectsData={projects} {tabSet} />
					</div>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>

	<!-- view more -->
	<div class="text-center pt-8">
		<div>
			<a
				href="/"
				class="btn !bg-transparent flex-col text-primary-500 border-0 text-xs sm:text-sm md:text-base font-semibold px-2 py-1"
			>
				<span>
					<p>VIEW MORE</p>
				</span>
				<span class="mt-1"
					><svg
						viewBox="0 0 1024 1024"
						class="icon w-3 md:w-5 h-3 md:h-5"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
							fill="#000000"
						/></svg
					>
				</span>
			</a>
		</div>
		<div />
	</div>
</section>
