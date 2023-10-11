<script lang="ts">
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	export let msg;
	export let color;

	// Provide the toast settings
	const t: ToastSettings = {
		message: msg,
		hideDismiss: true,
		hoverable: true,
		classes: 'py-3 px-12 text-white',
		background: color,
		timeout: 3000
	};

	// Trigger the toast:
	toastStore.trigger(t);
</script>

<!-- position="bl" -->
<Toast />
