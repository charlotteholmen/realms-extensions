import { mount, unmount } from 'svelte';
import ExtensionsManager from './ExtensionsManager.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(ExtensionsManager, { target, props: { ctx } });
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
