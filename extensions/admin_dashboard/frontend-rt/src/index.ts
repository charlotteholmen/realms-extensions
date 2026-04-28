import { mount, unmount } from 'svelte';
import AdminDashboard from './AdminDashboard.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(AdminDashboard, { target, props: { ctx } });
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
