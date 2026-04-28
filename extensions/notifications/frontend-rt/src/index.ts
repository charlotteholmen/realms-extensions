import { mount, unmount } from 'svelte';
import Notifications from './Notifications.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(Notifications, { target, props: { ctx } });
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
