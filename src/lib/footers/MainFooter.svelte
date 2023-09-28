<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="relative">
		<div class="absolute w-full h-[300px] md:h-[250px] lg:h-[300px] 2xl:h-[350px] bg-tertiary-50" />
		<div class="  absolute w-full -mt-16">
			<div
				class="bg-primary-500 max-w-[92%] md:max-w-[97%] lg:max-w-[85%] xl:max-w-[90%] sm:w-full h-[300px] md:h-[250px] lg:h-[300px] 2xl:h-[350px]
				container mx-auto px-3"
			>
				<!-- mobile size only -->
				<div class="flex flex-col gap-2 text-white md:hidden">
					<div>
						<div class="flex flex-col items-center pt-5">
							<div>
								<img
									loading="lazy"
									src="/images/nav/white_140x50.webp"
									srcset="/images/nav/white_80x35.webp 1024w, /images/nav/white_140x50.webp 8000w"
									alt="company's logo"
									class="w-[80px] h-[35px] lg:w-[140px] lg:h-[50px] aspect-[16/7] lg:aspect-[14/5]"
								/>
							</div>
						</div>
					</div>

					<div class="grid grid-cols-2 mt-3 mb-5 min-[400px]:px-8 min-[550px]:px-20">
						<div class="flex justify-center">
							<div class="space-y-4 text-xs sm:text-sm md:text-base">
								<p>About Us</p>
								<p>Career</p>
								<p>Contact Us</p>
							</div>
						</div>
						<div class="flex justify-center">
							<div class="space-y-4 text-xs sm:text-sm md:text-base">
								<p>Privacy Policy</p>
								<p>Terms of Use</p>
								<p>About</p>
							</div>
						</div>
					</div>

					<div class="py-2">
						<div class="flex justify-center space-x-2 text-xs sm:text-sm md:text-base">
							<div class="flex flex-col items-center space-y-2 space-x-1">
								<div>
									<span>
										<svg
											class="w-4 h-4"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
												stroke="#FFF"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</div>
								<div>
									<p>+00000000000</p>
								</div>
							</div>
							<div class="flex flex-col items-center space-y-2 space-x-1">
								<div>
									<span>
										<svg
											fill="#FFF"
											class="w-4 h-4"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
											><path
												d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"
											/><path
												d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"
											/></svg
										>
									</span>
								</div>
								<div>
									<p>+00000000000</p>
								</div>
							</div>
							<div class="flex flex-col items-center space-y-2 space-x-1">
								<div>
									<span>
										<svg
											class="w-4 h-4"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
												stroke="#FFF"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<rect
												x="3"
												y="5"
												width="18"
												height="14"
												rx="2"
												stroke="#FFF"
												stroke-width="2"
												stroke-linecap="round"
											/>
										</svg>
									</span>
								</div>
								<div>
									<p>info@alkholi.com</p>
								</div>
							</div>
						</div>
						<div>
							<p class="text-xs sm:text-sm md:text-base normal-thin text-center pt-5">
								&copy; Alkholi Group. All rights reserved.
							</p>
						</div>
					</div>
				</div>

				<!-- tablet and desktop -->
				<div
					class="grid grid-cols-12 gap-0 h-full items-center px-2 min-[850px]:px-8 lg:px-16 xl:px-24 2xl:px-52
					text-white text-xs sm:text-sm md:text-base normal-thin max-md:hidden"
				>
					<div class="col-span-2">
						<div class="space-y-4">
							<p>About Us</p>
							<p>Career</p>
							<p>Contact Us</p>
						</div>
					</div>
					<div class="col-span-3">
						<div class="flex flex-col space-y-4">
							<div class="flex items-center space-x-2">
								<div>
									<span>
										<svg
											class="w-4 h-4"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
												stroke="#FFF"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</div>

								<div>
									<p class="p-0 m-0">+00000000000</p>
								</div>
							</div>
							<div class="flex items-center space-x-2">
								<div>
									<span>
										<svg
											fill="#FFF"
											class="w-4 h-4"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
											><path
												d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"
											/><path
												d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"
											/></svg
										>
									</span>
								</div>
								<div>
									<p>+00000000000</p>
								</div>
							</div>
							<div class="flex items-center space-x-2">
								<div>
									<span>
										<svg
											class="w-4 h-4"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
												stroke="#FFF"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<rect
												x="3"
												y="5"
												width="18"
												height="14"
												rx="2"
												stroke="#FFF"
												stroke-width="2"
												stroke-linecap="round"
											/>
										</svg>
									</span>
								</div>
								<div>
									<p>info@alkholi.com</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-span-2">
						<div class="space-y-4">
							<p>Privacy Policy</p>
							<p>Terms of Use</p>
							<p>About</p>
						</div>
					</div>
					<div class="col-span-5">
						<div class="flex flex-col items-end space-y-3">
							<div>
								<img
									loading="lazy"
									src="/images/nav/white_140x50.webp"
									srcset="/images/nav/white_80x35.webp 1024w, /images/nav/white_140x50.webp 8000w"
									alt="company's logo"
									class="w-[80px] h-[35px] lg:w-[140px] lg:h-[50px] aspect-[16/7] lg:aspect-[14/5]"
								/>
							</div>
							<div>
								<p>&copy; Alkholi Group. All rights reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
