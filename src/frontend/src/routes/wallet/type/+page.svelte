<script>
  import TokenType from '$components/TokenType.svelte';

  export let data;
</script>

<svelte:head>
  <title>Type</title>
  <meta name="description" content="Knowledge Token Type" />
</svelte:head>

<h1>Type</h1>
<div class="row">
  {#each data.tokenTypes as tokenType}
    <div class="col-sm-4 col-6 mb-4">
      <TokenType {tokenType} />
    </div>
  {/each}
</div>
