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
    <div class="col-sm-4 col-6 mb-4">
      <TokenCategory {tokenCategory} />
    </div>
  {/each}
  <div class="col-sm-4 col-6 mb-4">
    <TokenCategory />
  </div>
</div>
