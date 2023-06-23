<script>
  import '../app.scss';
  import Header from '$components/Header.svelte';
</script>

<div>
  <Header />

  <main class="container-md">
    <slot />
  </main>

  <footer />
</div>

<style lang="scss">
</style>
