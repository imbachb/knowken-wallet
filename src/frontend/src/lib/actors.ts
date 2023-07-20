import { createActor as backendCreateActor } from '../../../declarations/backend';
import { createActor as internetIdentityCreateActor } from '../../../declarations/internet_identity';

// We pass the host instead of using a proxy to support NodeJS >= v17 (ViteJS issue: https://github.com/vitejs/vite/issues/4794)
const host = import.meta.env.VITE_HOST;

// Canister IDs are automatically expanded to .env config - see vite.config.ts
const backendCanisterId = import.meta.env.VITE_BACKEND_CANISTER_ID;
export const backend = backendCreateActor(backendCanisterId, { agentOptions: { host } });

const internetIdentityCanisterId = import.meta.env.VITE_INTERNET_IDENTITY_CANISTER_ID;
export const internetIdentity = internetIdentityCreateActor(internetIdentityCanisterId, {
  agentOptions: { host },
});
