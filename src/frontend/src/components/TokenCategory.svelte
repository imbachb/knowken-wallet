<script lang="ts">
  import type { TokenCategory } from '$lib/domain/tokenCategory';
  import TokenIcon from '$components/TokenIcon.svelte';

  export let tokenCategory: TokenCategory | null = null;
</script>

{#if tokenCategory !== null}
  <a class="no-link" href="/wallet/collection/{tokenCategory.name.toLowerCase()}">
    <div class="card m-2 h-100 collection-border">
      <div class="mt-2">
        <TokenIcon tokenFrame={tokenCategory.frame} tokenIcon={tokenCategory.icon} />
      </div>
      <div class="card-body p-2 mb-0 pb-0">
        <p class="card-title text-center mb-0 pb-0">
          {tokenCategory.name} ({tokenCategory.nrTokens})
        </p>
      </div>
    </div>
  </a>
{:else}
  <!-- TODO: Open Modal to create new category-->
  <a class="no-link" href="#">
    <div class="card m-2 h-100 collection-border">
      <div class="mt-2">
        <TokenIcon tokenIcon="new" />
      </div>
      <div class="card-body p-2 mb-0 pb-0">
        <p class="card-title text-center mb-0 pb-0">Create category</p>
      </div>
    </div>
  </a>
{/if}
