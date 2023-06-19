<script>
  import Token from '$components/Token.svelte';

  export let data;
</script>

<svelte:head>
  <title>List</title>
  <meta name="description" content="Knowledge Token List" />
</svelte:head>

<h1>List ({data.tokens.length})</h1>
<div class="row">
  {#each data.tokens as token}
    <Token {token} />
  {/each}
</div>
