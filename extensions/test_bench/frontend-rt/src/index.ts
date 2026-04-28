import { mount, unmount } from 'svelte';
import TestBench from './TestBench.svelte';

export interface RuntimeMountProps {
	backend: any;
	extensionId: string;
	version: string;
	principal?: string;
	isAuthenticated?: boolean;
}

export default function mountExt(target: HTMLElement, props: RuntimeMountProps) {
	const component = mount(TestBench, { target, props });
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
