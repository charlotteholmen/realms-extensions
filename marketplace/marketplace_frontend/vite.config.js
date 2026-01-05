import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const DFX_PORT = process.env.DFX_PORT || 8000;
const DFX_NETWORK = process.env.DFX_NETWORK || 'local';

let canisterIds;
try {
  canisterIds =
    DFX_NETWORK === 'ic'
      ? require('./.dfx/ic/canister_ids.json')
      : require('./.dfx/local/canister_ids.json');
} catch (e) {
  canisterIds = {};
}

const MARKETPLACE_BACKEND_CANISTER_ID =
  canisterIds.marketplace_backend?.[DFX_NETWORK] || '';
const INTERNET_IDENTITY_CANISTER_ID =
  canisterIds.internet_identity?.[DFX_NETWORK] || '';

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: `http://127.0.0.1:${DFX_PORT}`,
        changeOrigin: true,
      },
    },
    host: '0.0.0.0',
  },
  plugins: [
    sveltekit(),
    environment({
      DFX_NETWORK,
      MARKETPLACE_BACKEND_CANISTER_ID,
      INTERNET_IDENTITY_CANISTER_ID,
    }),
  ],
});
