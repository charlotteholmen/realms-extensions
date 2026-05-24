import { mount, unmount } from 'svelte';
import RealmSettings from './RealmSettings.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(RealmSettings, { target, props: { ctx } });
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
