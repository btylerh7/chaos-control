declare module "astro:actions" {
	type Actions = typeof import("/Users/e202171406/Documents/dev/personal/js/chaos-control/src/actions")["server"];

	export const actions: Actions;
}