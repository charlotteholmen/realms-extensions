import { mount, unmount } from 'svelte';
import CodexViewer from './CodexViewer.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(CodexViewer, { target, props: { ctx } });
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
