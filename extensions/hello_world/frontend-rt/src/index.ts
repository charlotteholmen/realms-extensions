import { mount, unmount } from 'svelte';
import HelloWorld from './HelloWorld.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(HelloWorld, { target, props: { ctx } });
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
