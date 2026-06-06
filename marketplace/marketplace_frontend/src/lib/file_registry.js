/**
 * Thin client for the realms file_registry canister.
 *
 * The marketplace storefront is just a presentation layer over the
 * file_registry, which is the canonical on-chain store of extension
 * artifacts (manifest.json + backend/ + frontend/ files, versioned per
 * `ext/{ext_id}/{version}` namespace). We hit it over its CORS-enabled HTTP
 * endpoints rather than via @dfinity/agent so the frontend stays static and
 * doesn't need a candid agent shim. The IC boundary node transparently
 * follows the `upgrade: true` response from the registry's query handler
 * and re-runs as an update call so responses are certified.
 *
 * Endpoints used (all GET, JSON):
 *   /api/extensions          → [{ ext_id, versions, latest, manifest }]
 *   /{namespace}/manifest.json
 */
import { config } from './config.js';

const CATEGORY_ICONS = {
  public_services: '🏛️',
  finances: '💰',
  governance: '⚖️',
  oversight: '👁️',
  system: '🛠️',
  other: '📦',
};

const ICON_NAME_MAP = {
  wallet: '💰',
  brain: '🧠',
  chart: '📊',
  users: '👥',
  users_group: '👥',
  shield: '🛡️',
  globe: '🌐',
  bell: '🔔',
  document: '📄',
  gavel: '⚖️',
  map: '🗺️',
  home: '🏠',
  settings: '⚙️',
  code: '💻',
  eye: '👁️',
  layers: '📚',
};

const DEFAULT_ICON = '📦';

function resolveIcon(manifest) {
  if (!manifest) return DEFAULT_ICON;
  if (manifest.icon) {
    return ICON_NAME_MAP[manifest.icon] || DEFAULT_ICON;
  }
  const cats = manifest.categories || [];
  if (cats.length > 0) return CATEGORY_ICONS[cats[0]] || DEFAULT_ICON;
  return DEFAULT_ICON;
}

function prettyName(idOrName) {
  return String(idOrName || '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

/**
 * Map a {ext_id, latest, manifest} entry from the file_registry into the
 * shape the storefront cards expect. Skips hidden / internal extensions
 * (`url_path === null && show_in_sidebar === false`) the same way the old
 * generate_extensions.py script did.
 */
function manifestToListing(entry) {
  const manifest = entry.manifest || {};
  const id = manifest.name || entry.ext_id;

  const hidden =
    manifest.url_path === null && manifest.show_in_sidebar === false;
  if (hidden) return null;

  return {
    id,
    name: prettyName(id),
    description: manifest.description || 'No description available',
    version: manifest.version || entry.latest || '0.0.0',
    author: manifest.author || 'Realms Community',
    icon: resolveIcon(manifest),
    categories: manifest.categories || ['other'],
    price_e8s: Number(manifest.price_e8s || 0),
    downloads: 0,
    repository: manifest.repository || '',
    doc_url: manifest.doc_url || '',
    license: manifest.license || 'MIT',
    available_versions: entry.versions || [],
  };
}

/**
 * Fetch the list of extensions from the configured file_registry. Returns an
 * array of listings ready for the marketplace cards. Throws on network /
 * registry errors so callers can render a meaningful empty state.
 */
export async function fetchExtensions() {
  if (!config.fileRegistryBaseUrl) {
    throw new Error(
      'file_registry is not configured for this deployment ' +
        `(network=${config.network}). Set FILE_REGISTRY_CANISTER_ID at build time.`,
    );
  }
  const url = `${config.fileRegistryBaseUrl}/api/extensions`;
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) {
    throw new Error(`file_registry returned ${res.status} ${res.statusText}`);
  }
  const raw = await res.json();
  return raw.map(manifestToListing).filter(Boolean);
}

/** Fetch a single extension by its id (manifest "name"). */
export async function fetchExtension(id) {
  const all = await fetchExtensions();
  return all.find((e) => e.id === id) || null;
}
