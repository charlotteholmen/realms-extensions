import { mount, unmount } from 'svelte';
import MarketPlace from './MarketPlace.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(MarketPlace, { target, props: { ctx } });
	return {
		unmount() {
			try {
				unmount(component);
			} catch {
				/* already torn down */
			}
		},
	};
}
