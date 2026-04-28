import { mount, unmount } from 'svelte';
import PackageManager from './PackageManager.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(PackageManager, { target, props: { ctx } });
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
