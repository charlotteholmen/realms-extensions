import { mount, unmount } from 'svelte';
import Welcome from './Welcome.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(Welcome, { target, props: { ctx } });
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
