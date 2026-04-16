import { mount, unmount } from 'svelte';
import MemberDashboard from './MemberDashboard.svelte';

/**
 * Entry point conforming to the runtime-extension contract used by
 * realm_frontend's extension-loader (src/lib/extension-loader.ts).
 *
 *   default export: mount(target, props) => { unmount() }
 *
 * Host injects an authenticated `backend` actor plus the current
 * user's `principal` — the bundle MUST NOT reach into host-specific
 * stores; everything it needs flows through `props`.
 */
export interface RuntimeMountProps {
	backend: any;
	extensionId: string;
	version: string;
	principal?: string;
	isAuthenticated?: boolean;
}

export default function mountExt(target: HTMLElement, props: RuntimeMountProps) {
	const component = mount(MemberDashboard, { target, props });
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
