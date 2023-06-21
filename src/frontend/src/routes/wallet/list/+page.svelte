<script>
  import Grid from 'gridjs-svelte';

  export let data;
</script>

<svelte:head>
  <title>List</title>
  <meta name="description" content="Knowledge Token List" />
</svelte:head>

<h1>List ({data.tokens.length})</h1>
<Grid data={data.tokens} search sort />

<style global>
  @import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
