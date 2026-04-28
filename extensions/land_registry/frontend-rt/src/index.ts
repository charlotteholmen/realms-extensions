import { mount, unmount } from 'svelte';
import LandRegistry from './LandRegistry.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(LandRegistry, { target, props: { ctx } });
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
