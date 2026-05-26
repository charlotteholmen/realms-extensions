import { mount, unmount } from 'svelte';
import MundusExplorer from './MundusExplorer.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(MundusExplorer, { target, props: { ctx } });
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
