<script>
  import TokenCategory from '$components/TokenCategory.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Collection</title>
  <meta name="description" content="Knowledge Token Collection" />
</svelte:head>

<h1>Collection ({data.tokenCategories.length})</h1>

<div class="row">
  {#each data.tokenCategories as tokenCategory}
    <TokenCategory {tokenCategory} />
  {/each}
  <TokenCategory />
</div>
