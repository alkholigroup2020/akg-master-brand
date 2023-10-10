<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import Toast from '$lib/generalComponents/Toast.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { pageDirection } from '$lib/stores/store';

	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	$: isChecked = false;

	export let formData;

	let formSubmitMessage = {
		show: false,
		message: '',
		color: ''
	};

	// Client API:
	const { form, errors, constraints, enhance } = superForm(formData, {
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
			project: (value) => {
				if (value === undefined) {
					// as a project is optional and if not filled in
					return null;
				}
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

<section class="container px-3 mx-auto">
	<!-- <SuperDebug data={$form} /> -->

	<form method="POST" action="?/form" use:enhance class="py-8 md:py-16 2xl:py-20">
		<div class="grid lg:grid-cols-2 gap-8 xl:gap-12 text-primary-500 font-bold">
			<!-- left -->
			<div class="space-y-8">
				<!-- name -->
				<div>
					<!-- <label for="name">Name</label> -->
					<input
						type="text"
						name="name"
						placeholder="Full Name*"
						class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
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
						class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
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
						class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
						aria-invalid={$errors.email ? 'true' : undefined}
						bind:value={$form.email}
						{...$constraints.email}
					/>
					{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
				</div>

				<!-- type of project -->
				<div>
					<input
						type="text"
						name="project"
						placeholder="Type of Project"
						aria-invalid={$errors.project ? 'true' : undefined}
						class="w-full h-16 rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none"
						bind:value={$form.project}
						{...$constraints.project}
					/>
					{#if $errors.project}<span class="invalid">{$errors.project}</span>{/if}
				</div>
			</div>

			<!-- right -->
			<div>
				<!-- text area -->
				<div>
					<textarea
						class="w-full rounded-sm text-sm sm:text-base md:text-lg xl:text-xl bg-[#f6f6f9] border-none p-5"
						rows="11"
						{...$constraints.textArea}
						placeholder={$LL.form.textAreaPlaceholder()}
						bind:value={$form.textArea}
						title="textarea"
						name="textArea"
					/>
					{#if $errors.textArea}<span class="text-warning-600">{$errors.textArea}</span>{/if}
				</div>
			</div>
		</div>

		<div class="sm:flex lg:grid grid-cols-2 gap-8 xl:gap-12 pt-8">
			<div class="w-full">
				<!-- agree check mark -->
				<div class="h-full flex items-center">
					<label class="flex items-center space-x-2">
						<input
							class="checkbox bg-white"
							type="checkbox"
							checked={isChecked}
							on:click={() => {
								isChecked = !isChecked;
							}}
						/>
						<p>I agree to the terms & conditions</p>
					</label>
				</div>
			</div>
			<div class="w-full max-lg:flex sm:justify-end mt-7 sm:mt-0">
				<!-- submit btn -->
				<div>
					<button
						disabled={!isChecked}
						style="opacity: 1!important;"
						class="btn bg-primary-500 rounded-sm px-12 py-3 text-white text-sm sm:text-base md:text-lg xl:text-xl"
						>Submit</button
					>
				</div>
			</div>
		</div>
	</form>

	{#if formSubmitMessage.show}
		<Toast msg={formSubmitMessage.message} color={formSubmitMessage.color} />
	{/if}
</section>

<style>
	.invalid {
		color: red;
	}
</style>
