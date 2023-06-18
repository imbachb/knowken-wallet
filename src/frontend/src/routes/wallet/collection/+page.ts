import { tokenService } from '$lib/services/tokenService';

/** @type {import('./$types').PageLoad} */
export async function load() {
  return {
    tokenCategories: await tokenService.getTokenCategories(),
  };
}
