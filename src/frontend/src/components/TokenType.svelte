<script lang="ts">
  import type { TokenType } from '$lib/domain/tokenType';
  import TokenIcon from './TokenIcon.svelte';

  export let tokenType: TokenType;
</script>

<!-- TODO: Open modal, or go to token detail page -->
<a class="no-link" href="/wallet/type/{tokenType.name.toLowerCase()}">
  <div class="card m-2 h-100 collection-border">
    <div class="mt-2">
      <TokenIcon tokenFrame={tokenType.name} />
    </div>
    <div class="card-body p-2 mb-0 pb-0">
      <p class="card-title text-center mb-0 pb-0">
        {tokenType.name} ({tokenType.nrTokens})
      </p>
    </div>
  </div>
</a>
