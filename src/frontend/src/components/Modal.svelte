<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let open = false;
  export let showBackdrop = true;
  export let onClosed: (submit: boolean) => void;
  export let staticBackdrop = false;

  const modalClose = (submit: boolean) => {
    open = false;
    if (onClosed) {
      onClosed(submit);
    }
  };

  const handleBackdropClick = () => {
    if (!staticBackdrop) {
      modalClose(false);
    }
  };
</script>

{#if open}
  <div
    class="modal"
    tabindex="-1"
    on:click|self={handleBackdropClick}
    on:keydown|self={handleBackdropClick}
  >
    <div
      class="modal-dialog"
      in:fly={{ y: -50, duration: 300 }}
      out:fly={{ y: -50, duration: 300, easing: quintOut }}
    >
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header" />
          <div style="position: absolute; right: 1rem; top: 1rem">
            <button type="button" class="btn-close" on:click={() => modalClose(false)} />
          </div>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" on:click={() => modalClose(false)}>
            Close
          </button>
          <button type="button" class="btn btn-primary" on:click={() => modalClose(true)}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  {#if showBackdrop}
    <div class="modal-backdrop show" transition:fade={{ duration: 150 }} />
  {/if}
{/if}

<style>
  .modal {
    display: block;
  }
</style>
