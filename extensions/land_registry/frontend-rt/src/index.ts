import { mount, unmount } from 'svelte';
import LandRegistry from './LandRegistry.svelte';

export interface RuntimeMountProps {
	backend: any;
	extensionId: string;
	version: string;
	principal?: string;
	isAuthenticated?: boolean;
}

export default function mountExt(target: HTMLElement, props: RuntimeMountProps) {
	const component = mount(LandRegistry, { target, props });
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
