<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
</script>

<section>
	<div class="md:container md:mx-auto md:px-3 py-20">
		<div class="flex flex-col lg:flex-row bg-primary-500">
			<!-- image -->
			<div class="lg:w-[50%]">
				<img
					src="images/home/servicesSection/asset-05_800x480.webp"
					srcset="images/home/servicesSection/asset-05_800x400.webp 1024w, images/home/servicesSection/asset-05_800x800.webp 1280w, images/home/servicesSection/asset-05_800x640.webp 1536w, images/home/servicesSection/asset-05_800x480.webp 2000w"
					alt="a working labor"
					class="w-full aspect-[1/0.5] lg:aspect-[1/1] xl:aspect-[1/0.8] 2xl:aspect-[1/0.6]"
				/>
			</div>
			<!-- text -->
			<div class="lg:w-[50%] p-3 sm:p-8 xl:p-12 space-y-3">
				<!-- title -->
				<p class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-secondary-500 xl:mb-5">
					OUR SERVICES
				</p>
				<!-- paragraph -->
				<p
					class="normal-thin text-sm sm:text-base md:text-lg xl:leading-8 font-extralight text-white"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit totam officia asperiores
					inventore voluptas consequuntur odit quia commodi quae maiores! Lorem, ipsum dolor.
				</p>
				<!-- list -->
				<ul class="space-y-1 xl:space-y-3 text-sm sm:text-base md:text-lg text-white">
					<li>1. Lorem, ipsum.</li>
					<li>2. Lorem, ipsum.</li>
					<li>3. Lorem, ipsum.</li>
				</ul>
			</div>
		</div>

		<div class="flex flex-col-reverse lg:flex-row bg-primary-500">
			<!-- text -->
			<div class="lg:w-[50%] p-3 sm:p-8 xl:p-12 space-y-3">
				<!-- title -->
				<p class="text-lg sm:text-2xl lg:text-2xl xl:text-3xl text-secondary-500 xl:mb-5">
					AT AL KHOLI GROUP
				</p>
				<!-- paragraph -->
				<p
					class="normal-thin text-sm sm:text-base md:text-lg xl:leading-8 font-extralight text-white"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit totam officia asperiores
					inventore voluptas consequuntur odit quia commodi quae maiores! Lorem, ipsum dolor. Lorem
					ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quo rerum modi dicta
					repudiandae repellat officiis soluta ratione fugiat quibusdam! Lorem ipsum dolor, sit amet
					consectetur adipisicing elit. A quia iste inventore ratione molestias tempora ipsam eos
					porro aperiam voluptatem!
				</p>
				<!-- more -->
				<div>
					<a href="/" class="btn !bg-transparent text-white text-xs sm:text-sm md:text-base px-0"
						>VIEW MORE
						<span class="mx-3">
							<svg
								viewBox="0 0 1024 1024"
								class="icon w-4 h-4"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
									fill="#FFF"
								/></svg
							>
						</span>
					</a>
				</div>
			</div>
			<!-- image -->
			<div class="lg:w-[50%]">
				<img
					src="images/home/servicesSection/asset-06_800x480.webp"
					srcset="images/home/servicesSection/asset-06_800x400.webp 1024w, images/home/servicesSection/asset-06_800x800.webp 1280w, images/home/servicesSection/asset-06_800x640.webp 1536w, images/home/servicesSection/asset-06_800x480.webp 2000w"
					alt="an IT person working in data center"
					class="w-full aspect-[1/0.5] lg:aspect-[1/1] xl:aspect-[1/0.8] 2xl:aspect-[1/0.6]"
				/>
			</div>
		</div>
	</div>
</section>
