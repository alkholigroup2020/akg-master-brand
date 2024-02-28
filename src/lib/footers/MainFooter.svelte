<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="relative">
		<div class="absolute w-full h-[340px] md:h-[250px] lg:h-[300px] 2xl:h-[350px] bg-tertiary-50" />
		<div class="absolute w-full -mt-16">
			<div
				class="bg-primary-500 max-w-[92%] md:max-w-[97%] lg:max-w-[85%] xl:max-w-[90%] sm:w-full
				h-[340px] md:h-[250px] lg:h-[300px] 2xl:h-[350px] container mx-auto px-3"
			>
				<!-- mobile size only -->
				<div class="flex flex-col gap-2 text-white md:hidden">
					<div>
						<div class="flex flex-col items-center align-middle pt-5">
							<div class="flex justify-center">
								<!-- <img
									loading="lazy"
									src="/images/nav/white_140x50.webp"
									srcset="/images/nav/white_80x35.webp 1024w, /images/nav/white_140x50.webp 8000w"
									alt="company's logo"
									class="w-[80px] h-[35px] lg:w-[140px] lg:h-[50px] aspect-[16/7] lg:aspect-[14/5]"
								/> -->

								<img
									loading="lazy"
									src="/images/nav/white_450x200.webp"
									alt="company's logo"
									class="w-1/4 h-full aspect-auto"
								/>
							</div>
						</div>
					</div>

					<div class="grid grid-cols-2 mt-3 mb-5 min-[400px]:px-8 min-[550px]:px-20">
						<div class="flex justify-center">
							<div class="space-y-4 text-xs sm:text-sm md:text-base">
								<div>
									<a href={`/${$currentAppLang}/`}>Home</a>
								</div>
								<div>
									<a href={`/${$currentAppLang}/about`}>About Us</a>
								</div>
								<div>
									<a href={`/${$currentAppLang}/contact-us/#career-section`}>Career</a>
								</div>
								<div>
									<a href={`/${$currentAppLang}/contact-us`}>Contact Us</a>
								</div>
							</div>
						</div>
						<div class="flex justify-center">
							<div class="space-y-4 text-xs sm:text-sm md:text-base">
								<div>
									<a href={`/${$currentAppLang}/divisions`}>Divisions</a>
								</div>
								<div>
									<a href={`/${$currentAppLang}/companies`}>Companies</a>
								</div>
								<!-- <div>
									<a href={`/${$currentAppLang}/projects`}>Projects</a>
								</div> -->
								<div>
									<a href={`/${$currentAppLang}/partners`}>Partners</a>
								</div>
							</div>
						</div>
					</div>

					<div class="py-2">
						<div class="flex justify-center space-x-2 text-xs sm:text-sm md:text-base">
							<a type="button" href="tel:00966114041919" aria-label="Riyadh branch mobile number">
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
										<p class="p-0 m-0">+114041919</p>
									</div>
								</div>
							</a>
							<!-- linkedIn -->
							<a
								type="button"
								href="https://www.linkedin.com/company/alkholi-group-of-companies"
								target="_blank"
								aria-label="linkedin link"
							>
								<div class="flex flex-col items-center space-y-2 space-x-1">
									<div>
										<span>
											<svg
												class="w-4 h-4"
												viewBox="0 0 20 20"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
											>
												<title>linkedin [#161]</title>
												<desc>Created with Sketch.</desc>
												<defs />
												<g
													id="Page-1"
													stroke="none"
													stroke-width="1"
													fill="none"
													fill-rule="evenodd"
												>
													<g
														id="Dribbble-Light-Preview"
														transform="translate(-180.000000, -7479.000000)"
														fill="#FFF"
													>
														<g id="icons" transform="translate(56.000000, 160.000000)">
															<path
																d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
																id="linkedin-[#161]"
															/>
														</g>
													</g>
												</g>
											</svg>
										</span>
									</div>
									<div>
										<p>LinkedIn</p>
									</div>
								</div>
							</a>
							<!-- email -->
							<a href="mailto:sales@alkholi.com" aria-label="a mail link">
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
										<p>sales@alkholi.com</p>
									</div>
								</div>
							</a>
						</div>
						<div>
							<p class="text-xs sm:text-sm md:text-base normal-thin text-center pt-5 sm:pt-2">
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
							<div>
								<a href={`/${$currentAppLang}/companies`}>Companies</a>
							</div>
							<div>
								<a href={`/${$currentAppLang}/divisions`}>Divisions</a>
							</div>
							<!-- <div>
								<a href={`/${$currentAppLang}/projects`}>Projects</a>
							</div> -->
							<div>
								<a href={`/${$currentAppLang}/partners`}>Partners</a>
							</div>
						</div>
					</div>

					<div class="col-span-2">
						<div class="space-y-4">
							<div>
								<a href={`/${$currentAppLang}/about`}>About Us</a>
							</div>
							<div>
								<a href={`/${$currentAppLang}/contact-us/#career-section`}>Career</a>
							</div>
							<div>
								<a href={`/${$currentAppLang}/contact-us`}>Contact Us</a>
							</div>
							<div>
								<a href="mailto:sales@alkholi.com" aria-label="an email link">Sales</a>
							</div>
						</div>
					</div>

					<div class="col-span-3">
						<div class="flex flex-col space-y-4">
							<a type="button" href="tel:00966114041919" aria-label="Riyadh branch mobile number">
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
										<p class="p-0 m-0">+966 11 404 1919</p>
									</div>
								</div>
							</a>
							<!-- linkedIn -->
							<a
								type="button"
								href="https://www.linkedin.com/company/alkholi-group-of-companies"
								target="_blank"
								aria-label="linkedin link"
							>
								<div class="flex items-center space-x-2">
									<div>
										<span>
											<svg
												class="w-4 h-4"
												viewBox="0 0 20 20"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
											>
												<title>linkedin [#161]</title>
												<desc>Created with Sketch.</desc>
												<defs />
												<g
													id="Page-1"
													stroke="none"
													stroke-width="1"
													fill="none"
													fill-rule="evenodd"
												>
													<g
														id="Dribbble-Light-Preview"
														transform="translate(-180.000000, -7479.000000)"
														fill="#FFF"
													>
														<g id="icons" transform="translate(56.000000, 160.000000)">
															<path
																d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
																id="linkedin-[#161]"
															/>
														</g>
													</g>
												</g>
											</svg>
										</span>
									</div>
									<div>
										<p class="pt-1">LinkedIn</p>
									</div>
								</div>
							</a>

							<a href="mailto:info@alkholi.com" aria-label="a mail link">
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
										<div>
											<p>info@alkholi.com</p>
										</div>
									</div>
								</div>
							</a>

							<a href="mailto:sales@alkholi.com" aria-label="an email link">
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
										<div>
											<p>sales@alkholi.com</p>
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div class="col-span-5">
						<div class="flex flex-col items-end space-y-3">
							<div>
								<!-- <img
									loading="lazy"
									src="/images/nav/white_140x50.webp"
									srcset="/images/nav/white_80x35.webp 1024w, /images/nav/white_140x50.webp 8000w"
									alt="company's logo"
									class="w-[80px] h-[35px] lg:w-[140px] lg:h-[50px] aspect-[16/7] lg:aspect-[14/5]"
								/> -->
								<img
									loading="lazy"
									src="/images/nav/white_450x200.webp"
									alt="company's logo"
									class="w-[150px] h-full aspect-auto"
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
