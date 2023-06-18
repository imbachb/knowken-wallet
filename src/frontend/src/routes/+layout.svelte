<script>
  import '../app.scss';
  import Header from '$components/Header.svelte';
</script>

<div>
  <Header />

  <main class="container-md">
    <slot />
  </main>

  <footer>
    <p>
      Footer content. Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer>
</div>

<style lang="scss">
</style>
