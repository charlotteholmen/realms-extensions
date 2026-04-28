import { mount, unmount } from 'svelte';
import HelloWorld from './HelloWorld.svelte';

export interface RuntimeMountProps {
	backend: any;
	extensionId: string;
	version: string;
	principal?: string;
	isAuthenticated?: boolean;
}

export default function mountExt(target: HTMLElement, props: RuntimeMountProps) {
	const component = mount(HelloWorld, { target, props });
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
