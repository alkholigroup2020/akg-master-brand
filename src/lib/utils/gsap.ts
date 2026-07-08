type GsapLoaderOptions = {
	scrollTrigger?: boolean;
	textPlugin?: boolean;
};

export async function loadGsap(options: GsapLoaderOptions = {}) {
	const [{ gsap }, scrollTriggerModule, textPluginModule] = await Promise.all([
		import('gsap'),
		options.scrollTrigger ? import('gsap/dist/ScrollTrigger') : Promise.resolve(null),
		options.textPlugin ? import('gsap/dist/TextPlugin') : Promise.resolve(null)
	]);

	const plugins: object[] = [];
	if (scrollTriggerModule?.ScrollTrigger) plugins.push(scrollTriggerModule.ScrollTrigger);
	if (textPluginModule?.TextPlugin) plugins.push(textPluginModule.TextPlugin);

	if (plugins.length > 0) {
		gsap.registerPlugin(...plugins);
	}

	return { gsap };
}
