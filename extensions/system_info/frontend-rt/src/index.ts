import { mount, unmount } from 'svelte';
import SystemInfo from './SystemInfo.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(SystemInfo, { target, props: { ctx } });
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
