import { tokenService } from '$lib/services/tokenService';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
  const tokenCategory = await tokenService.getTokenCategoryBySlug(params.slug);
  return {
    tokenCategory,
    tokens: tokenCategory
      ? await tokenService.getTokensByCategoryName(tokenCategory.name)
      : undefined,
  };
};
