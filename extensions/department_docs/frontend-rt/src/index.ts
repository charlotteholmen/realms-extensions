import { mount, unmount } from 'svelte';
import DepartmentDocs from './DepartmentDocs.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(DepartmentDocs, { target, props: { ctx } });
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
