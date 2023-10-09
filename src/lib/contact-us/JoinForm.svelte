<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';
	import Toast from '$lib/generalComponents/Toast.svelte';

	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
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
				formSubmitMessage.message = 'Thank You!';
				formSubmitMessage.color = 'variant-filled-secondary';
			} else {
				formSubmitMessage.show = true;
				formSubmitMessage.message = 'Something Went Wrong!';
				formSubmitMessage.color = 'variant-filled-error';
			}
		}
	});
</script>

<section class="max-w-[1920px] mx-auto">
	<div class="bg-primary-500 text-white pb-36 px-3">
		<!-- title -->
		<div>
			<div class="text-center pt-20">
				<h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] uppercase">
					Want to join our team?
				</h2>
			</div>

			<div>
				<p
					class="text-sm sm:text-base md:text-lg lg:px-8 2xl:px-24 leading-8 text-center py-3 md:py-5 xl:py-8"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
		</div>
		<!-- form -->
		<div class="container mx-auto">
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
								placeholder="Full Name*"
								class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg bg-[#f6f6f9] border-none"
								aria-invalid={$errors.name ? 'true' : undefined}
								bind:value={$form.name}
								{...$constraints.name}
							/>
							{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
						</div>

						<!-- mobile number -->
						<div>
							<input
								bind:value={$form.mobile}
								class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg bg-[#f6f6f9] border-none"
								type="tel"
								title="Input (number)"
								name="mobile"
								placeholder="Mobile Number"
								{...$constraints.mobile}
							/>
							{#if $errors.mobile}<span class="invalid">{$errors.mobile}</span>{/if}
						</div>

						<!-- email -->
						<div>
							<input
								type="email"
								name="email"
								placeholder="Email*"
								class="w-full h-14 rounded-sm text-sm sm:text-base md:text-lg bg-[#f6f6f9] border-none"
								aria-invalid={$errors.email ? 'true' : undefined}
								bind:value={$form.email}
								{...$constraints.email}
							/>
							{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
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
								class="w-full h-14 text-sm sm:text-base md:text-lg bg-[#f6f6f9]"
								padding="py-1"
								accept=".pdf,.docx,.doc"
								maxSize={10 * 1024 * 1024}
							>
								<svelte:fragment slot="message">
									<span>Attach your CV ...</span>
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
								class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg bg-[#f6f6f9] border-none"
							>
								<option class="mb-3" value="">Select Position</option>
								<option class="mb-3" value="Sales Rep">Sales Rep</option>
								<option class="mb-3" value="Sales Engineer">Sales Engineer</option>
								<option class="mb-3" value="Technician">Technician</option>
								<option class="mb-3" value="Project Engineer">Project Engineer</option>
								<option class="mb-3" value="Accountant">Accountant</option>
								<option class="mb-3" value="HR">HR</option>
								<option class="mb-3" value="Labor">Labor</option>
							</select>
							{#if $errors.position}<span class="text-warning-600">{$errors.position}</span>{/if}
						</div>
						<!-- text area -->
						<div>
							<textarea
								class="w-full rounded-sm text-sm sm:text-base md:text-lg bg-[#f6f6f9] border-none p-[24px]"
								rows="4"
								{...$constraints.textArea}
								placeholder={$LL.form.textAreaPlaceholder()}
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
									<p class="text-white">I agree to the terms & conditions</p>
								</label>
							</div>
							<!-- submit btn -->
							<div>
								<button
									disabled={!isChecked}
									style="opacity: 1!important;"
									class="btn bg-success-500 rounded-sm px-12 py-3 text-white text-sm sm:text-base md:text-lg"
									>Submit</button
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
