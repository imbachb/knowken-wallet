<script>
  import Token from '$components/Token.svelte';

  export let data;
</script>

<svelte:head>
  <title>Type</title>
  <meta name="description" content="Knowledge Token Type" />
</svelte:head>

{#if data.tokenType !== undefined}
  <h1><a href="/wallet/type">Type</a> / {data.tokenType.name}</h1>

  <div class="row">
    {#each data.tokens as token}
      <div class="col-sm-4 col-6 mb-4">
        <Token {token} />
      </div>
    {/each}
  </div>
{/if}
