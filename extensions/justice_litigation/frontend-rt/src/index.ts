import { mount, unmount } from 'svelte';
import JusticeLitigation from './JusticeLitigation.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(JusticeLitigation, { target, props: { ctx } });
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
