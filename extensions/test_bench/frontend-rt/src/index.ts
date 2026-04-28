import { mount, unmount } from 'svelte';
import TestBench from './TestBench.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(TestBench, { target, props: { ctx } });
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
