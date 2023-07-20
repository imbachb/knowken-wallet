<script lang="ts">
  import '../app.scss';
  import { authStore } from '$lib/stores/auth.store';
  import Header from '$components/Header.svelte';
  import IdentityGuard from '../guards/IdentityGuard.svelte';

  const init = async () => await Promise.all([syncAuthStore()]);

  const syncAuthStore = async () => {
    try {
      await authStore.sync();
    } catch (err: unknown) {
      console.error(err);
    }
  };
</script>

<svelte:window on:storage={syncAuthStore} />

{#await init()}
  <p>Loading...</p>
{:then _}
  <div>
    <Header />

    <main class="container-md">
      <IdentityGuard>
        <slot />
      </IdentityGuard>
    </main>

    <footer />
  </div>
{/await}

<style lang="scss">
</style>
