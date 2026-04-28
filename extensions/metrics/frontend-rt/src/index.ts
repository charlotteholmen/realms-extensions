import { mount, unmount } from 'svelte';
import Metrics from './Metrics.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(Metrics, { target, props: { ctx } });
	return {
		unmount() {
			try {
				unmount(component);
			} catch {}
		},
	};
}
