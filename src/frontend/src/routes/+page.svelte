<script lang="ts">
  import { backend } from '$lib/actors';

  let input = '';
  let disabled = false;
  let greeting = '';

  const handleOnSubmit = async () => {
    disabled = true;

    try {
      // Call the IC
      greeting = await backend.greet(input);
    } catch (err: unknown) {
      console.error(err);
    }

    disabled = false;
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <img src="logo2.svg" alt="DFINITY logo" />
  <br />
  <br />

  <form on:submit|preventDefault={handleOnSubmit}>
    <label for="name">Enter your name: &nbsp;</label>
    <input id="name" alt="Name" type="text" bind:value={input} {disabled} />
    <button class="btn btn-primary" type="submit">Click Me!</button>
  </form>

  <section id="greeting">
    {greeting}
  </section>
</div>
