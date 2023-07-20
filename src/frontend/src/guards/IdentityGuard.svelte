<script lang="ts">
  import { authStore } from '$lib/stores/auth.store';
</script>

{#if $authStore.identity === null}
  <p>You are currently not logged in.</p>
  <button
    class="btn btn-primary"
    type="button"
    id="loginButton"
    on:click={async () => authStore.signIn({})}>Log in</button
  >
{:else}
  <slot />
{/if}
