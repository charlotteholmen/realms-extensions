import { mount, unmount } from 'svelte';
import MemberManager from './MemberManager.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(MemberManager, { target, props: { ctx } });
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
