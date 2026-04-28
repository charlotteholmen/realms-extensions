import { mount, unmount } from 'svelte';
import LlmChat from './LlmChat.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(LlmChat, { target, props: { ctx } });
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
