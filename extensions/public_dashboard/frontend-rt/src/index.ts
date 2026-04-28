import { mount, unmount } from 'svelte';
import PublicDashboard from './PublicDashboard.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(PublicDashboard, { target, props: { ctx } });
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
