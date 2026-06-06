import { mount, unmount } from 'svelte';
import ManagedServices from './ManagedServices.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(ManagedServices, { target, props: { ctx } });
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
