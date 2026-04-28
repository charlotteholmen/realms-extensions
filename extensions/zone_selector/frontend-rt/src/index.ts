import { mount, unmount } from 'svelte';
import ZoneSelector from './ZoneSelector.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(ZoneSelector, { target, props: { ctx } });
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
