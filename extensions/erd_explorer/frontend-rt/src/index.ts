import { mount, unmount } from 'svelte';
import ERDExplorer from './ERDExplorer.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(ERDExplorer, { target, props: { ctx } });
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
