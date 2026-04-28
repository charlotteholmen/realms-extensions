import { mount, unmount } from 'svelte';
import PassportVerification from './PassportVerification.svelte';

export default function mountExt(target: HTMLElement, ctx: Record<string, any>) {
	const component = mount(PassportVerification, { target, props: { ctx } });
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
