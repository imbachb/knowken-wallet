<script lang="ts">
  import Modal from '$components/Modal.svelte';
  import type { Token } from '$lib/domain/token';
  import TokenIcon from './TokenIcon.svelte';

  export let open = false;
  export let token: Token;
  // TODO: Get this from service
  export let tokenCategories = ['Music', 'Arts', 'Philosophy', 'Economy'];

  export let onClosed: (submit: boolean) => void;
</script>

<Modal {open} onClosed={(submit) => onClosed(submit)}>
  <div slot="header" class="justify-content-center w-100">
    <TokenIcon tokenFrame={token.frame} tokenIcon={token.icon} />
  </div>
  <div slot="body">
    <h5 class="text-center">{token.name}</h5>
    <p>{token.description}</p>
    <hr />

    <h5 class="text-center">Meta-Data</h5>

    <b>Issuer:</b>
    <span class="text-primary" style="font-size: 0.9rem">{token.creatorName}</span>
    <br />
    <b>Issue Date:</b>
    <span class="text-primary" style="font-size: 0.9rem"
      >{token.creationDate.toLocaleDateString()}</span
    >
    <br />
    <b>Work Value:</b>
    <span class="text-primary" style="font-size: 0.9rem">TOKEN_VALUE</span>
    <br />
    <b>Type:</b>
    <span class="text-primary" style="font-size: 0.9rem">{token.frame}</span>
    <br />
    <b>Owner:</b>
    <span class="text-primary" style="font-size: 0.9rem">USER_ID</span>
    <hr />

    <h5 class="text-center w-100">Categories</h5>

    <div class="d-flex flex-row flex-wrap">
      {#each tokenCategories as category}
        <input
          class="form-check-input"
          type="checkbox"
          bind:group={token.categories}
          name="categories"
          value={category}
          id="checkbox-{category}"
        />
        <label class="form-check-label ms-2 me-2" for="checkbox-{category}">{category}</label>
      {/each}
    </div>
  </div>
</Modal>
