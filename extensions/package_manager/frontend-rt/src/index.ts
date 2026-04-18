import { mount, unmount } from 'svelte';
import PackageManager from './PackageManager.svelte';

/**
 * Entry point conforming to the runtime-extension contract used by
 * realm_frontend's extension-loader (see realms/src/realm_frontend/src/lib/extension-loader.ts).
 *
 *   default export: mount(target, props) => { unmount() }
 *
 * `props.backend` is the authenticated realm_backend actor injected by
 * the host realm_frontend. The bundle MUST get every host-specific
 * value through props — it cannot reach into host stores like
 * `$lib/canisters` or `$lib/stores/realmInfo` because those don't
 * exist in this isolated bundle.
 */
export interface RuntimeMountProps {
	backend: any;
	extensionId: string;
	version: string;
	principal?: string;
	isAuthenticated?: boolean;
}

export default function mountExt(target: HTMLElement, props: RuntimeMountProps) {
	const component = mount(PackageManager, { target, props });
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
