import { mount, unmount } from 'svelte';
import DemoSimulator from './DemoSimulator.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(DemoSimulator, { target, props: { ctx } });
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
