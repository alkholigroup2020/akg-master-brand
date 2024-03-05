<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		$page.url.hash && scrollToSection($page.url.hash);
	});

	function scrollToSection(hash: any) {
		const target = document.querySelector(hash);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	}

	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import Toast from '$lib/generalComponents/Toast.svelte';

	import { superForm } from 'sveltekit-superforms/client';

	$: isChecked = false;

	import { FileDropzone } from '@skeletonlabs/skeleton';

	export let joinUsForm;

	$: resumeFileTypeError = `File type is not acceptable`;
	let showResumeFileTypeError: boolean = false;

	$: resumeFileSizeError = `File is too large!`;
	let showResumeFileSizeError: boolean = false;

	let resumeFileName: string;

	let resumeFileValid: boolean = false;

	function onChangeHandler(e: Event): void {
		// First, we need to make sure to type cast the event target as an HTMLInputElement
		// This is because the 'files' property does not exist on the base EventTarget type
		const files = (e.target as HTMLInputElement).files;

		// This check is to make sure that we don't have any TypeScript errors
		// If files does not exist on the event target, or if there are no files, we return early
		if (!files || files.length === 0) {
			return;
		}

		// Get the first file from the list of uploaded files
		const file = files[0];

		// Check if the file is a PDF or Word document
		// The type property of the File API returns a MIME type, which we can use to check the file type
		if (
			!(
				file.type === 'application/pdf' ||
				file.type === 'application/msword' ||
				file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
			)
		) {
			// if the following error was already shown -> then hide it.
			showResumeFileSizeError = false;

			showResumeFileTypeError = true;
			resumeFileName = '';
			return;
		}

		// Check if the file size is less than 10MB
		// The size property of the File API returns the size in bytes, so we convert MB to bytes by multiplying by 1e+6 (1MB = 1e+6 bytes)
		if (file.size > 10 * 1e6) {
			// if the following error was already shown -> then hide it.
			showResumeFileTypeError = false;

			showResumeFileSizeError = true;
			resumeFileName = '';
			return;
		}

		showResumeFileTypeError = false;
		showResumeFileSizeError = false;
		resumeFileValid = true;

		// If the file passes all the checks, we can then assign the resumeFileName value
		resumeFileName = file.name;
	}

	let formSubmitMessage = {
		show: false,
		message: '',
		color: ''
	};

	const { form, errors, constraints, enhance } = superForm(joinUsForm, {
		validators: {
			name: (value) => {
				const nameFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/; // Regex for a string containing only English and Arabic alphabets and spaces
				if (value.length < 3) {
					return `${$LL.form.fullNameError()}`;
				} else if (value.length > 60) {
					return `${$LL.form.fullNameLengthError()}`;
				} else if (!nameFormat.test(value)) {
					return `${$LL.form.fullNameNumericError()}`;
				} else {
					return null;
				}
			},
			email: (value) => {
				// if (value === undefined) {
				// 	// as email is optional and if not filled in
				// 	return null;
				// }
				const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				return !emailFormat.test(value) ? `${$LL.form.emailError()}` : null;
			},
			mobile: (value) => {
				if (value === undefined) {
					// If mobile is optional and not filled in
					return null;
				}
				const nameFormat = /^[0-9]{10}$/;
				return !nameFormat.test(value) ? `${$LL.form.mobileError()}` : null;
			},
			textArea: (value) =>
				value.length < 3
					? `${$LL.form.textAreaError1()}`
					: null || value.length > 500
					? `${$LL.form.textAreaError2()}`
					: null
		},
		onSubmit: ({ cancel }) => {
			if (!isChecked) {
				cancel();
			}
		},
		onResult: ({ result }) => {
			if (result.status === 200) {
				resumeFileName = '';
				isChecked = false;
				formSubmitMessage.show = true;
				formSubmitMessage.message = `${$LL.joinUsForm.successFeedback()}`;
				formSubmitMessage.color = 'variant-filled-secondary';
			} else {
				formSubmitMessage.show = true;
				formSubmitMessage.message = `${$LL.joinUsForm.errorFeedback()}`;
				formSubmitMessage.color = 'variant-filled-error';
			}
		}
	});
</script>

<section class="max-w-[1920px] mx-auto" id="career-section">
	<div
		class="bg-primary-500 text-white pb-36 px-3 {$currentAppLang === 'ar'
			? 'ar-font font-medium'
			: ''}"
	>
		<!-- title -->
		<div>
			<div class="text-center pt-14 lg:pt-20">
				<h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] uppercase">
					{$LL.joinUsForm.title()}
				</h2>
			</div>

			<div class="flex justify-center lg:px-8 2xl:px-24 leading-8 py-3 md:py-5 xl:py-8">
				<a
					href="https://www.linkedin.com/company/alkholi-group-of-companies"
					aria-label="a linkedIn link"
					target="_blank"
				>
					<div class=" w-fit flex items-center space-x-3">
						<p class="text-sm sm:text-base md:text-xl xl:text-2xl">{$LL.joinUsForm.subTitle()}</p>
						<span>
							<svg
								class="w-3 h-3 md:w-5 md:h-5"
								viewBox="0 0 20 20"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
							>
								<title>linkedin [#161]</title>
								<desc>Created with Sketch.</desc>
								<defs />
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
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
				</a>
			</div>
		</div>
		<!-- form -->
		<div class="container mx-auto" dir={$pageDirection}>
			<!-- <div>
				<SuperDebug data={$form} />
			</div> -->
			<form
				method="POST"
				action="?/joinUsForm"
				use:enhance
				class="py-5 md:py-8 2xl:py-12 text-primary-500 font-bold"
			>
				<div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
					<!-- left -->
					<div class="space-y-8">
						<!-- name -->
						<div>
							<input
								type="text"
								name="name"
								placeholder={$LL.joinUsForm.fullName()}
								class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
								aria-invalid={$errors.name ? 'true' : undefined}
								bind:value={$form.name}
								{...$constraints.name}
							/>
							{#if $errors.name}<span class="invalid text-warning-500">{$errors.name}</span>{/if}
						</div>

						<!-- mobile number -->
						<div>
							<input
								dir={$pageDirection}
								bind:value={$form.mobile}
								class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
								type="tel"
								title="Input (number)"
								name="mobile"
								placeholder={$LL.joinUsForm.mobilePlaceholder()}
								{...$constraints.mobile}
							/>
							{#if $errors.mobile}<span class="invalid text-warning-500">{$errors.mobile}</span
								>{/if}
						</div>

						<!-- email -->
						<div>
							<input
								type="email"
								name="email"
								placeholder={$LL.joinUsForm.emailPlaceholder()}
								class="w-full h-14 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
								aria-invalid={$errors.email ? 'true' : undefined}
								bind:value={$form.email}
								{...$constraints.email}
							/>
							{#if $errors.email}<span class="invalid text-warning-500">{$errors.email}</span>{/if}
						</div>

						<!-- resume attachment -->
						<div>
							<!-- bind:files={cvFile} -->
							<FileDropzone
								on:change={onChangeHandler}
								name="employeeCV"
								required
								rounded="rounded-sm"
								border="border-none"
								class="w-full h-14 text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9]"
								padding="py-1"
								accept=".pdf,.docx,.doc"
								maxSize={10 * 1024 * 1024}
							>
								<svelte:fragment slot="message">
									<span>{$LL.joinUsForm.resumeAttachment()}</span>
								</svelte:fragment>
							</FileDropzone>

							<div>
								{#if resumeFileName}
									<span class="text-success-500 text-xs sm:text-sm md:text-base px-2"
										>{resumeFileName}</span
									>
								{/if}
							</div>

							{#if showResumeFileTypeError}<span class="text-warning-600"
									>{resumeFileTypeError}</span
								>{/if}
							{#if showResumeFileSizeError}<span class="text-warning-600"
									>{resumeFileSizeError}</span
								>{/if}
							{#if $errors.employeeCV}<span class="text-warning-600">{$errors.employeeCV}</span
								>{/if}
						</div>
					</div>
					<!-- right -->
					<div class="space-y-8">
						<!-- position -->
						<div>
							<select
								required
								name="position"
								bind:value={$form.position}
								class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
							>
								<option class="mb-3" value="">{$LL.joinUsForm.positionPlaceholder()}</option>
								<option class="mb-3" value={$LL.joinUsForm.position1()}
									>{$LL.joinUsForm.position1()}</option
								>
								<option class="mb-3" value={$LL.joinUsForm.position2()}
									>{$LL.joinUsForm.position2()}</option
								>
								<option class="mb-3" value={$LL.joinUsForm.position3()}
									>{$LL.joinUsForm.position3()}</option
								>
								<option class="mb-3" value={$LL.joinUsForm.position4()}
									>{$LL.joinUsForm.position4()}</option
								>
								<option class="mb-3" value={$LL.joinUsForm.position5()}
									>{$LL.joinUsForm.position5()}</option
								>
								<option class="mb-3" value={$LL.joinUsForm.position6()}
									>{$LL.joinUsForm.position6()}</option
								>
								<option class="mb-3" value={$LL.joinUsForm.position7()}
									>{$LL.joinUsForm.position7()}</option
								>
								<option class="mb-3" value={$LL.joinUsForm.position8()}
									>{$LL.joinUsForm.position8()}</option
								>
							</select>
							{#if $errors.position}<span class="text-warning-500">{$errors.position}</span>{/if}
						</div>
						<!-- text area -->
						<div>
							<textarea
								class="w-full rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none p-[24px]"
								rows="4"
								{...$constraints.textArea}
								placeholder={$LL.joinUsForm.textAreaPlaceholder()}
								bind:value={$form.textArea}
								title="textarea"
								name="textArea"
							/>
							{#if $errors.textArea}<span class="text-warning-600">{$errors.textArea}</span>{/if}
						</div>
						<!-- agreement -->
						<div class="lg:flex justify-between items-center">
							<div class="mb-5 lg:mb-0">
								<label class="flex items-center space-x-2">
									<input
										class="checkbox bg-white"
										type="checkbox"
										checked={isChecked}
										on:click={() => {
											isChecked = !isChecked;
										}}
									/>
									<p class="text-white {$pageDirection === 'rtl' ? 'px-3' : 'px-1'}">
										{$LL.joinUsForm.conditions()}
									</p>
								</label>
							</div>
							<!-- submit btn -->
							<div class="mt-8 sm:mt-0">
								<button
									disabled={!isChecked}
									style="opacity: 1!important;"
									class="btn bg-success-500 rounded-sm px-12 py-3 text-white text-sm sm:text-base md:text-lg xl:text-xl font-medium"
									>{$LL.joinUsForm.submit()}</button
								>
							</div>
						</div>
					</div>
				</div>
			</form>
			{#if formSubmitMessage.show}
				<Toast msg={formSubmitMessage.message} color={formSubmitMessage.color} />
			{/if}
		</div>
	</div>
</section>
