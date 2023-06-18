<script lang="ts">
  import type { Token } from '$lib/domain/token';

  export let token: Token;
</script>

<!-- TODO: Open modal, or go to token detail page -->
<div class="col-4 m-0 p-0 pb-4">
  <a class="no-link" href="#">
    <div class="card m-2 h-100 collection-border">
      <div class="mt-2 container-fluid custom-image-container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <img src="/token-frame-{token.frame}.png" class="img-fluid" alt="Frame" />
          </div>
          <div class="col-md-6 custom-image custom-image-centered">
            <img
              src="{token.icon ? '/token-icon-' + token.icon : '/placeholder'}.png"
              class="img-fluid"
              alt="Type"
            />
          </div>
        </div>
      </div>
      <div class="card-body p-2 mb-0 pb-0">
        <p class="card-title text-center mb-0 pb-0">
          {token.name}
        </p>
      </div>
    </div>
  </a>
</div>
