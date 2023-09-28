<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';

	let navOpen = false;
</script>

<div class="absolute z-50">
	<!-- hamburger -->
	<button
		aria-label="an open and close menu button"
		on:click={() => {
			navOpen = !navOpen;
		}}
	>
		<span>
			{#if !navOpen}
				<svg
					class="w-6 sm:w-10 h-6 sm:h-10"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="Menu / Hamburger_LG">
						<path
							id="Vector"
							d="M3 17H21M3 12H21M3 7H21"
							stroke="#FFF"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				</svg>
			{:else}
				<svg
					class="w-6 sm:w-10 h-6 sm:h-10"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
						stroke="#FFF"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
					<path
						d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
						stroke="#FFF"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
				</svg>
			{/if}
		</span>
	</button>

	<!-- hero nav list -->
	{#if navOpen}
		<nav class="list-nav bg-surface-50-900-token rounded-lg">
			<ul class="w-fit text-sm sm:text-base md:text-lg text-primary-500">
				<li class="border-b" style="margin-top: 0px !important;">
					<a href={`/`} style="border-radius:0px">
						<span class="flex-auto py-1 px-3 sm:py-2 sm:px-8 text-center">HOME</span>
					</a>
				</li>
				<li class="border-b" style="margin-top: 0px !important;">
					<a href={`/${$currentAppLang}/about`} style="border-radius:0px">
						<span class="flex-auto py-1 px-3 sm:py-2 sm:px-8 text-center">ABOUT US</span>
					</a>
				</li>
				<li class="border-b" style="margin-top: 0px !important;">
					<a href="/" style="border-radius:0px">
						<span class="flex-auto py-1 px-3 sm:py-2 sm:px-8 text-center">DIVISIONS</span>
					</a>
				</li>
				<li class="border-b" style="margin-top: 0px !important;">
					<a href="/" style="border-radius:0px">
						<span class="flex-auto py-1 px-3 sm:py-2 sm:px-8 text-center">COMPANIES</span>
					</a>
				</li>
				<li class="border-b" style="margin-top: 0px !important;">
					<a href="/" style="border-radius:0px">
						<span class="flex-auto py-1 px-3 sm:py-2 sm:px-8 text-center">PROJECTS</span>
					</a>
				</li>
				<li class="border-b" style="margin-top: 0px !important;">
					<a href="/" style="border-radius:0px">
						<span class="flex-auto py-1 px-3 sm:py-2 sm:px-8 text-center">PARTNERS</span>
					</a>
				</li>
				<li style="margin-top: 0px !important;">
					<a href="/" style="border-radius:0px">
						<span class="flex-auto py-1 px-3 sm:py-2 sm:px-8 text-center">CONTACT US</span>
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</div>
