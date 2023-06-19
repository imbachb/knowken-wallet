import { tokenService } from '$lib/services/tokenService';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
  const tokenType = await tokenService.getTokenTypeBySlug(params.slug);
  return {
    tokenType,
    tokens: tokenType ? await tokenService.getTokensByType(tokenType.name) : [],
  };
};
