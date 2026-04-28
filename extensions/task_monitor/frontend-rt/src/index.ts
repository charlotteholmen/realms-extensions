import { mount, unmount } from 'svelte';
import TaskMonitor from './TaskMonitor.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(TaskMonitor, { target, props: { ctx } });
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
