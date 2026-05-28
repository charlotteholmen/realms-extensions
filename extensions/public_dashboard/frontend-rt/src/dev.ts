import { mount } from 'svelte';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './realm_backend.did.js';
import PublicDashboard from './PublicDashboard.svelte';

const CANISTER_ID = 'rnghe-haaaa-aaaak-qyxyq-cai';
const IC_HOST = 'https://icp0.io';

async function main() {
	const agent = new HttpAgent({ host: IC_HOST, verifyQuerySignatures: false });
	const backend = Actor.createActor(idlFactory, { agent, canisterId: CANISTER_ID });

	const ctx = {
		backend,
		canisterId: CANISTER_ID,
	};

	const target = document.getElementById('ext-mount')!;
	mount(PublicDashboard, { target, props: { ctx } });
}

main().catch(console.error);
