import { mount, unmount } from 'svelte';
import Testbench from './Testbench.svelte';

/**
 * Entry point conforming to the runtime-extension contract used by
 * realm_frontend's extension-loader (see realms/src/realm_frontend/src/lib/extension-loader.ts).
 *
 *   default export: mount(target, props) => { unmount() }
 *
 * `props.backend` is the authenticated realm_backend actor injected by the host.
 * `props.extensionId` and `props.version` are passed for display.
 */
export interface RuntimeMountProps {
	backend: any;
	extensionId: string;
	version: string;
}

export default function mountExt(target: HTMLElement, props: RuntimeMountProps) {
	const component = mount(Testbench, { target, props });
	return {
		unmount() {
			try {
				unmount(component);
			} catch {
				/* component already torn down */
			}
		},
	};
}
