<script lang="ts">
  import type { TokenType } from '$lib/domain/tokenType';

  export let tokenType: TokenType;
</script>

<!-- TODO: Open modal, or go to token detail page -->
<div class="col-4 m-0 p-0 pb-4">
  <a class="no-link" href="/wallet/type/{tokenType.name.toLowerCase()}">
    <div class="card m-2 h-100 collection-border">
      <div class="mt-2 container-fluid custom-image-container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <img src="/token-frame-{tokenType.name}.png" class="img-fluid" alt="Frame" />
          </div>
        </div>
      </div>
      <div class="card-body p-2 mb-0 pb-0">
        <p class="card-title text-center mb-0 pb-0">
          {tokenType.name} ({tokenType.nrTokens})
        </p>
      </div>
    </div>
  </a>
</div>
