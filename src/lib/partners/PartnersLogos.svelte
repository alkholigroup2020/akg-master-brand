<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let cardRefs: any[] = [];

	onMount(() => {
		cardRefs.forEach((ref, index) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: ref,
					start: 'top bottom-=100',
					end: 'bottom top',
					markers: false,
					scrub: false
				}
			});

			timeline.from(ref, {
				duration: 0.5,
				// y: '100px',
				opacity: 0,
				delay: index * 0.1
			});
		});
	});
</script>

<section dir={$pageDirection}>
	<div class="container px-3 mx-auto">
		<!-- <div>
			<p
				class="uppercase pt-8 text-primary-500 font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl"
			>
				{$LL.partners.t1()}
			</p>
		</div> -->
		<div class="flex flex-col">
			<div
				class="grid grid-cols-2 min-[450px]:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-y-12 px-3 sm:px-0 pt-12 pb-32 2xl:pb-48"
			>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[1]}>
					<div>
						<a
							href="https://www.josephgallagher.co.uk/"
							aria-label="a partner link"
							target="_blank"
						>
							<span>
								<svg
									viewBox="0 0 361 43"
									class="aspect-[1/0.5] w-40 md:w-64 xl:w-80 h-20 md:h-32 xl:h-40 sm:mx-3 md:mx-0"
									xmlns="http://www.w3.org/2000/svg"
									xml:space="preserve"
									style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
									><path
										d="M66.042 25.892c0 4.487-2.012 8.051-6.876 8.051-.922 0-2.138-.168-3.019-.504v-2.557c.755.377 1.887.545 2.726.545 3.228 0 4.276-2.558 4.276-5.451V4.173h2.893v21.719Zm15.136 5.786c4.612 0 7.086-3.983 7.086-8.93 0-4.948-2.474-8.931-7.086-8.931s-7.086 3.983-7.086 8.931c0 4.947 2.474 8.93 7.086 8.93m0-20.125c6.918 0 9.979 5.367 9.979 11.195s-3.061 11.195-9.979 11.195c-6.918 0-9.979-5.367-9.979-11.195s3.061-11.195 9.979-11.195m13.334 18.784c1.593.796 3.521 1.342 5.576 1.342 2.516 0 4.738-1.384 4.738-3.816 0-5.073-10.273-4.276-10.273-10.482 0-4.235 3.439-5.828 6.961-5.828 1.132 0 3.396.252 5.283.964l-.252 2.306c-1.384-.629-3.27-1.006-4.738-1.006-2.725 0-4.612.838-4.612 3.564 0 3.983 10.524 3.48 10.524 10.482 0 4.528-4.235 6.08-7.463 6.08-2.055 0-4.109-.252-5.996-1.007l.252-2.599Zm30.985-9.099c0-3.731-1.51-7.421-5.451-7.421-3.9 0-6.289 3.9-6.289 7.421h11.74Zm1.299 11.531c-1.844.754-4.235 1.173-6.205 1.173-7.086 0-9.727-4.779-9.727-11.194 0-6.541 3.605-11.195 9.014-11.195 6.038 0 8.512 4.863 8.512 10.607v1.342h-14.633c0 4.529 2.431 8.177 7.044 8.177 1.928 0 4.737-.797 5.995-1.594v2.684Zm15.346-18.952c-4.696 0-6.331 5.031-6.331 8.931 0 3.899 1.635 8.931 6.331 8.931 5.032 0 6.331-4.78 6.331-8.931 0-4.151-1.299-8.931-6.331-8.931m-8.973-1.761h2.642l-.168 3.899h.084c.671-1.174 2.306-4.402 6.834-4.402 6.289 0 8.805 4.696 8.805 11.195 0 6.331-2.935 11.195-8.805 11.195-3.354 0-5.367-1.384-6.666-4.151h-.084v12.452h-2.642V12.056Zm23.565-10.063h2.641v13.669h.084c1.132-2.348 3.522-4.109 6.667-4.109 5.744 0 7.295 3.815 7.295 9.098v12.788h-2.642V20.693c0-3.69-.712-6.876-5.073-6.876-4.696 0-6.331 4.444-6.331 8.176v11.446h-2.641V1.993Zm55.303 18.113h-6.792v-2.515h9.685V32.14c-2.977 1.299-5.87 1.803-9.098 1.803-9.224 0-14.759-6.08-14.759-15.137 0-8.889 5.702-15.136 14.759-15.136 2.222 0 5.87.377 7.841 1.384l-.336 2.683c-2.264-1.258-4.948-1.551-7.505-1.551-7.589 0-11.866 5.367-11.866 12.62 0 7.38 4.151 12.621 11.866 12.621 1.803 0 4.821-.21 6.205-1.048V20.106Zm21.97 2.558h-.755c-4.57 0-10.02.461-10.02 5.157 0 2.809 2.012 3.857 4.444 3.857 6.205 0 6.331-5.408 6.331-7.715v-1.299Zm.252 7.337h-.084c-1.174 2.558-4.151 3.942-6.793 3.942-6.079 0-7.044-4.109-7.044-6.038 0-7.17 7.632-7.505 13.166-7.505h.503v-1.091c0-3.647-1.299-5.492-4.863-5.492-2.223 0-4.319.503-6.29 1.761V13.02c1.635-.797 4.403-1.467 6.29-1.467 5.283 0 7.505 2.389 7.505 7.966v9.434c0 1.719 0 3.019.21 4.487h-2.6v-3.439Z"
										style="fill:#db1419;fill-rule:nonzero"
									/><path
										style="fill:#db1419"
										d="M242.939 1.993h2.641v31.446h-2.641zm9.307 0h2.642v31.446h-2.642z"
									/><path
										d="M273.587 22.664h-.755c-4.57 0-10.021.461-10.021 5.157 0 2.809 2.013 3.857 4.445 3.857 6.205 0 6.331-5.408 6.331-7.715v-1.299Zm.252 7.337h-.084c-1.174 2.558-4.151 3.942-6.793 3.942-6.079 0-7.044-4.109-7.044-6.038 0-7.17 7.631-7.505 13.166-7.505h.503v-1.091c0-3.647-1.3-5.492-4.864-5.492-2.222 0-4.318.503-6.289 1.761V13.02c1.636-.797 4.403-1.467 6.289-1.467 5.283 0 7.505 2.389 7.505 7.966v9.434c0 1.719 0 3.019.21 4.487h-2.599v-3.439Zm16.477 1.174c4.781 0 6.5-4.528 6.5-8.427 0-5.158-1.51-8.931-6.332-8.931-5.031 0-6.331 4.78-6.331 8.931 0 4.193 1.677 8.427 6.163 8.427m9.141.503c0 5.954-2.683 10.818-10.021 10.818-2.809 0-5.367-.797-6.457-1.132l.21-2.641c1.635.838 3.983 1.509 6.289 1.509 6.793 0 7.379-4.948 7.379-10.985h-.083c-1.426 3.102-3.774 4.193-6.499 4.193-6.835 0-9.015-5.954-9.015-10.692 0-6.499 2.515-11.195 8.805-11.195 2.851 0 4.696.377 6.667 2.935h.084v-2.432h2.641v19.622Zm6.373-29.685h2.641v13.669h.084c1.132-2.348 3.522-4.109 6.667-4.109 5.744 0 7.295 3.815 7.295 9.098v12.788h-2.641V20.693c0-3.69-.713-6.876-5.073-6.876-4.697 0-6.332 4.444-6.332 8.176v11.446h-2.641V1.993Zm36.352 19.245c0-3.731-1.509-7.421-5.451-7.421-3.899 0-6.289 3.9-6.289 7.421h11.74Zm1.3 11.531c-1.845.754-4.235 1.173-6.206 1.173-7.086 0-9.727-4.779-9.727-11.194 0-6.541 3.606-11.195 9.014-11.195 6.038 0 8.512 4.863 8.512 10.607v1.342h-14.633c0 4.529 2.432 8.177 7.044 8.177 1.929 0 4.738-.797 5.996-1.594v2.684Zm6.625-15.933c0-2.348 0-3.229-.168-4.78h2.641v4.109h.084c.965-2.39 2.768-4.612 5.493-4.612.629 0 1.384.126 1.845.251v2.768c-.545-.168-1.258-.252-1.929-.252-4.192 0-5.325 4.696-5.325 8.554V33.44h-2.641V16.836Z"
										style="fill:#db1419;fill-rule:nonzero"
									/><path style="fill:#fff" d="M0 0h41.7v41.7H0z" /><path
										style="fill:#f4b6a2"
										d="M14.035.144h13.6v13.6h-13.6z"
									/><path
										style="fill:#db1419"
										d="M27.922.144h13.6v13.599h-13.6zM.146 14.032h13.6v13.6H.146z"
									/><path
										style="fill:#f4b6a2"
										d="M27.921 14.032h13.6v13.6h-13.6zM.146 27.92h13.6v13.6H.146z"
									/><path style="fill:#db1419" d="M14.035 27.92h13.6v13.6h-13.6z" /></svg
								>
							</span>
							<!-- <img
								src="/images/partners/joseph_180x180.webp"
								srcset="/images/partners/joseph_120x120.webp 768w, /images/partners/joseph_180x180.webp 2000w"
								alt="chairman"
								class="aspect-[1/1] w-24 md:w-28 xl:w-40 h-24 md:h-28 xl:h-40"
							/> -->
						</a>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[0]}>
					<div>
						<a
							href="https://balad.com.sa/en/index.html"
							aria-label="a partner link"
							target="_blank"
						>
							<img
								src="/images/partners/albalad_180x180.webp"
								srcset="/images/partners/albalad_120x120.webp 768w, /images/partners/albalad_180x180.webp 2000w"
								alt="chairman"
								class="aspect-[1/1] w-20 md:w-24 xl:w-32 h-20 md:h-24 xl:h-32"
							/>
						</a>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[2]}>
					<div class="mt-3">
						<a href="https://www.linkmisr.com/" aria-label="a partner link" target="_blank">
							<img
								src="/images/partners/link-misr_180x90.webp"
								srcset="/images/partners/link-misr_120x60.webp 768w, /images/partners/link-misr_180x90.webp 2000w"
								alt="chairman"
								class="aspect-[1/0.5] w-28 md:w-40 xl:w-56 h-14 md:h-20 xl:h-28"
							/>
						</a>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[3]}>
					<div>
						<a href="https://mindmaze.com/" aria-label="a partner link" target="_blank">
							<img
								src="/images/partners/mindMaze_180x90.webp"
								srcset="/images/partners/mindMaze_120x60.webp 768w, /images/partners/mindMaze_180x90.webp 2000w"
								alt="chairman"
								class="aspect-[1/0.5] w-28 md:w-40 xl:w-56 h-14 md:h-20 xl:h-28"
							/>
						</a>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[4]}>
					<div>
						<a href="https://orascom.com/" aria-label="a partner link" target="_blank">
							<img
								src="/images/partners/orascom_180x90.webp"
								srcset="/images/partners/orascom_120x60.webp 768w, /images/partners/orascom_180x90.webp 2000w"
								alt="chairman"
								class="aspect-[1/0.5] w-28 md:w-40 xl:w-56 h-14 md:h-20 xl:h-28"
							/>
						</a>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[5]}>
					<div>
						<a href="https://rikaz.com/" aria-label="a partner link" target="_blank">
							<img
								src="/images/partners/rikaz_180x180.webp"
								srcset="/images/partners/rikaz_120x120.webp 768w, /images/partners/rikaz_180x180.webp 2000w"
								alt="chairman"
								class="aspect-[1/1] w-20 md:w-24 xl:w-36 h-20 md:h-24 xl:h-36"
							/>
						</a>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[6]}>
					<div>
						<a href="https://smartlog-group.com/" aria-label="a partner link" target="_blank">
							<img
								src="/images/partners/smartLog_180x90.webp"
								srcset="/images/partners/smartLog_120x60.webp 768w, /images/partners/smartLog_180x90.webp 2000w"
								alt="chairman"
								class="aspect-[1/0.5] w-32 md:w-48 xl:w-64 h-16 md:h-24 xl:h-32"
							/>
						</a>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[7]}>
					<div>
						<a href="https://uccholding.com/" aria-label="a partner link" target="_blank">
							<img
								src="/images/partners/urbancon_180x90.webp"
								srcset="/images/partners/urbancon_120x60.webp 768w, /images/partners/urbancon_180x90.webp 2000w"
								alt="chairman"
								class="aspect-[1/0.5] w-24 md:w-32 xl:w-40 h-12 md:h-16 xl:h-20"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <section dir={$pageDirection}>
	<div class="container px-3 mx-auto">
		<div>
			<p
				class="uppercase pt-8 text-primary-500 font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl"
			>
				{$LL.partners.t2()}
			</p>
		</div>
		<div class="flex flex-col pb-16">
			<div
				class="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-5 min-[450px]:gap-x-3 pt-12 pb-20"
			>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[13]}>
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[14]}>
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[15]}>
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[16]}>
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[17]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[18]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[19]}>
					<div>
						<img
							src="/images/about/partners/image-1_180x180.webp"
							srcset="/images/about/partners/image-1_120x120.webp 768w, /images/about/partners/image-1_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[20]}>
					<div>
						<img
							src="/images/about/partners/image-2_180x180.webp"
							srcset="/images/about/partners/image-2_120x120.webp 768w, /images/about/partners/image-2_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[21]}>
					<div>
						<img
							src="/images/about/partners/image-3_180x180.webp"
							srcset="/images/about/partners/image-3_120x120.webp 768w, /images/about/partners/image-3_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[22]}>
					<div>
						<img
							src="/images/about/partners/image-4_180x180.webp"
							srcset="/images/about/partners/image-4_120x120.webp 768w, /images/about/partners/image-4_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[23]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center" bind:this={cardRefs[24]}>
					<div>
						<img
							src="/images/about/partners/image-5_180x180.webp"
							srcset="/images/about/partners/image-5_120x120.webp 768w, /images/about/partners/image-5_180x180.webp 2000w"
							alt="chairman"
							class="aspect-[1/1] w-24 h-20 md:w-32 md:h-24 xl:w-36 xl:h-28"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->
