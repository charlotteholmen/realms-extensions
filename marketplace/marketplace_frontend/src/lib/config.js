/**
 * Runtime configuration for the marketplace frontend.
 *
 * Each marketplace deployment (staging, demo, local) is bound to a single
 * file_registry canister that is the authoritative source for the list of
 * extensions shown in the storefront. The file_registry canister id and IC
 * gateway host are baked in at build time via vite-plugin-environment from
 * the values in `canister_ids.json` and the `DFX_NETWORK` env var.
 *
 * The marketplace itself ships in two flavours:
 *   - staging  → marketplace_frontend/_backend on the staging subnet
 *   - demo     → marketplace_frontend/_backend on the demo subnet
 *
 * Both can point at the same file_registry, or at independent registries —
 * the wiring is orthogonal to the marketplace canisters.
 */

// Injected by vite-plugin-environment in vite.config.js.
const NETWORK = (typeof process !== 'undefined' && process.env && process.env.DFX_NETWORK) || 'local';
const FILE_REGISTRY_CANISTER_ID =
  (typeof process !== 'undefined' && process.env && process.env.FILE_REGISTRY_CANISTER_ID) || '';

/**
 * Return the IC gateway host appropriate for the current network. For local
 * dfx replicas the canister is reached via the dfx port on localhost; for
 * persistent IC subnets we go through the boundary nodes at icp0.io.
 */
function gatewayHost(network) {
  if (network === 'local') {
    if (typeof window !== 'undefined') {
      return `${window.location.protocol}//${window.location.hostname}:${window.location.port || 8000}`;
    }
    return 'http://127.0.0.1:8000';
  }
  return 'https://icp0.io';
}

/**
 * Build the canister-rooted base URL for the file_registry, e.g.
 *   https://iebdk-kqaaa-aaaau-agoxq-cai.icp0.io
 *   http://<id>.localhost:8000     (for local dfx)
 */
function fileRegistryBaseUrl(network, canisterId) {
  if (!canisterId) return '';
  if (network === 'local') {
    if (typeof window !== 'undefined') {
      return `${window.location.protocol}//${canisterId}.localhost:${window.location.port || 8000}`;
    }
    return `http://${canisterId}.localhost:8000`;
  }
  return `https://${canisterId}.icp0.io`;
}

export const config = {
  network: NETWORK,
  fileRegistryCanisterId: FILE_REGISTRY_CANISTER_ID,
  fileRegistryBaseUrl: fileRegistryBaseUrl(NETWORK, FILE_REGISTRY_CANISTER_ID),
  gatewayHost: gatewayHost(NETWORK),
};
