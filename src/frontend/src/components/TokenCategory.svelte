<script lang="ts">
  import type { TokenCategory } from '$lib/domain/tokenCategory';

  export let tokenCategory: TokenCategory | null = null;
</script>

{#if tokenCategory !== null}
  <div class="col-4 m-0 p-0 pb-4">
    <a class="no-link" href="/wallet/collection/{tokenCategory.name.toLowerCase()}">
      <div class="card m-2 h-100 collection-border">
        <div class="mt-2 container-fluid custom-image-container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-6">
              <img src="/token-frame-{tokenCategory.frame}.png" class="img-fluid" alt="Frame" />
            </div>
            <div class="col-md-6 custom-image custom-image-centered">
              <img
                src="{tokenCategory.icon
                  ? '/token-icon-' + tokenCategory.icon
                  : '/placeholder'}.png"
                class="img-fluid"
                alt="Type"
              />
            </div>
          </div>
        </div>
        <div class="card-body p-2 mb-0 pb-0">
          <p class="card-title text-center mb-0 pb-0">
            {tokenCategory.name} ({tokenCategory.nrTokens})
          </p>
        </div>
      </div>
    </a>
  </div>
{:else}
  <div class="col-4 m-0 p-0 pb-4">
    <!-- TODO: Add modal to create new category (or dedicated create page...) -->
    <!-- Modal component example https://svelte.dev/examples/modal -->
    <!-- Modal component example https://svelte.dev/repl/514f1335749a4eae9d34ad74dc277f20?version=3.37.0 -->
    <a class="no-link" href="#" data-bs-toggle="modal" data-bs-target="#new_category_modal">
      <div class="card m-2 h-100 collection-border">
        <div class="container-fluid custom-image-container mt-2">
          <div class="row d-flex justify-content-center">
            <div class="col-md-6">
              <img src="/token-icon-new.png" class="img-fluid" alt="Create category" />
            </div>
          </div>
        </div>
        <div class="card-body p-2 mb-0 pb-0">
          <p class="card-title text-center mb-0 pb-0">Create category</p>
        </div>
      </div>
    </a>
  </div>
{/if}
