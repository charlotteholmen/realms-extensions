import { mount, unmount } from 'svelte';
import Vault from './Vault.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(Vault, { target, props: { ctx } });
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
