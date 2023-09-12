import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { setLocale } from '$i18n/i18n-svelte';

import { currentAppLang } from '$lib/stores/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const load = async (data: any) => {
	// load dictionary into memory
	await loadLocaleAsync(data.data.locale);

	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(data.data.locale);

	const locale = data.data.locale;
	currentAppLang.set(locale);

	return { locale };
};
