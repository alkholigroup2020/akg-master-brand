<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import ProjectsGrid from '$lib/projects/ProjectsGrid.svelte';

	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

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

	let textElement: any;
	const theText = $LL.projects.title();

	onMount(() => {
		getProjectsData();
		gsap.to(textElement, {
			scrollTrigger: {
				trigger: textElement,
				start: 'top center',
				toggleActions: 'restart none none none'
			},
			text: theText,
			duration: 0.8
		});
	});

	let navOpen = false;

	let tabSet: string = 'All';
	$: btnText = `${$LL.projects.all()}`;
</script>

<section class="max-w-[1920px] mx-auto">
	<!-- title -->
	<!-- <div class="text-center">
		<p
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 py-12 xl:py-16 uppercase {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		>
			{$LL.projects.title()}
		</p>
	</div> -->

	<div class="text-center">
		<p
			bind:this={textElement}
			class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-primary-500 py-12 xl:py-16 uppercase {$currentAppLang ===
			'ar'
				? 'ar-font'
				: ''}"
		/>
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
				<span
					class="text-primary-500 text-sm sm:text-base md:text-lg {$currentAppLang === 'ar'
						? 'ar-font'
						: ''}">{btnText}</span
				>
			</button>

			{#if navOpen}
				<nav
					class="list-nav bg-surface-50-900-token rounded-lg {$currentAppLang === 'ar'
						? 'ar-font'
						: ''}"
				>
					<ul class="w-full text-sm sm:text-base md:text-lg text-primary-500">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'All';
								btnText = `${$LL.projects.all()}`;
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>{$LL.projects.all()}</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Education';
								btnText = `${$LL.projects.education()}`;
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>{$LL.projects.education()}</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Construction';
								btnText = `${$LL.projects.construction()}`;
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>{$LL.projects.construction()}</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Healthcare';
								btnText = `${$LL.projects.healthcare()}`;
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>{$LL.projects.healthcare()}</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Hospitality';
								btnText = `${$LL.projects.hospitality()}`;
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>{$LL.projects.hospitality()}</span>
							</div>
						</li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class="border-b hover:cursor-pointer"
							style="margin-top: 0px !important;"
							on:click={() => {
								tabSet = 'Government';
								btnText = `${$LL.projects.government()}`;
								navOpen = !navOpen;
							}}
						>
							<div style="border-radius:0px" class="py-3 text-center">
								<span>{$LL.projects.government()}</span>
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
	<div class="container mx-auto px-3 hidden sm:block" dir={$pageDirection}>
		<TabGroup justify="justify-center" regionList="border-b-0" active="bg-primary-500 text-white ">
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-3  md:px-10 text-sm sm:text-base md:text-lg"
				name="tab1"
				value={'All'}
				><span class={$currentAppLang === 'ar' ? 'ar-font' : ''}>{$LL.projects.all()}</span></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-4 lg:px-10 text-sm sm:text-base md:text-lg"
				name="tab2"
				value={'Education'}
				><span class={$currentAppLang === 'ar' ? 'ar-font' : ''}>{$LL.projects.education()}</span
				></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-3 lg:px-6 text-sm sm:text-base md:text-lg"
				name="tab3"
				value={'Construction'}
				><span class={$currentAppLang === 'ar' ? 'ar-font' : ''}>{$LL.projects.construction()}</span
				></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-3 lg:px-6 text-sm sm:text-base md:text-lg"
				name="tab4"
				value={'Healthcare'}
				><span class={$currentAppLang === 'ar' ? 'ar-font' : ''}>{$LL.projects.healthcare()}</span
				></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-3 lg:px-6 text-sm sm:text-base md:text-lg"
				name="tab5"
				value={'Hospitality'}
				><span class={$currentAppLang === 'ar' ? 'ar-font' : ''}>{$LL.projects.hospitality()}</span
				></Tab
			>
			<Tab
				bind:group={tabSet}
				rounded="rounded-none"
				class="py-2 sm:px-2 md:px-3 lg:px-6 text-sm sm:text-base md:text-lg"
				name="tab6"
				value={'Government'}
				><span class={$currentAppLang === 'ar' ? 'ar-font' : ''}>{$LL.projects.government()}</span
				></Tab
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

	<!-- view more button -->
	<div class="text-center pt-5 lg:pt-8 {$currentAppLang === 'ar' ? 'ar-font' : ''}">
		<div>
			<button
				class="btn !bg-transparent flex-col text-primary-500 border-0 text-xs sm:text-sm md:text-base font-semibold px-2 py-1"
			>
				<span>
					<p>{$LL.generals.more()}</p>
				</span>
				<span class="mt-2"
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
			</button>
		</div>
		<div />
	</div>
</section>
