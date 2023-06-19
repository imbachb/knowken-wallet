import { tokenService } from '$lib/services/tokenService';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
  const tokenTypes = await tokenService.getTokenTypes();
  return {
    tokenTypes,
  };
};
