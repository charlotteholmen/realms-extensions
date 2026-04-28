import { mount, unmount } from 'svelte';
import MemberDashboard from './MemberDashboard.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(MemberDashboard, { target, props: { ctx } });
	return {
		unmount() {
			try {
				unmount(component);
			} catch {}
		},
	};
}
