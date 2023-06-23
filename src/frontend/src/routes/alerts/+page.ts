import { tokenService } from '$lib/services/tokenService';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
  const tokens = await tokenService.getTokens();
  return {
    tokens: tokens,
  };
};
