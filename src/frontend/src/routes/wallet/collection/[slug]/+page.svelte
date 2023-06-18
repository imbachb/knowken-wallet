<script>
  import Token from '$components/Token.svelte';

  export let data;
</script>

<svelte:head>
  <title>Collection</title>
  <meta name="description" content="Knowledge Token Collection" />
</svelte:head>

{#if data.tokenCategory !== undefined}
  <h1><a href="/wallet/collection">Collection</a> / {data.tokenCategory.name}</h1>

  <div class="row">
    {#each data.tokens as token}
      <Token {token} />
    {/each}
  </div>
{/if}
