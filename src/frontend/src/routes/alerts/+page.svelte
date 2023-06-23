<script lang="ts">
  import type { Token } from '$lib/domain/token';

  import TokenModal from '$components/TokenModal.svelte';

  export let data;
  let modalToken: Token;

  let showModal = false;
  const onShowModal = (tokenId: number) => {
    modalToken = data.tokens.find((tk) => tk.id === tokenId)!;
    showModal = true;
  };

  const onCloseModal = (data: any) => {
    showModal = false;
  };
</script>

<svelte:head>
  <title>Alerts</title>
  <meta name="description" content="Knowledge Token Alerts" />
</svelte:head>

<div>Hello Alerts!</div>
{#each data.tokens as token}
  <button type="button" class="btn btn-primary" on:click={() => onShowModal(token.id)}>
    Show Popup
  </button>
{/each}
<button type="button" class="btn btn-primary" on:click={() => onShowModal(2)}> Show Modal </button>
<TokenModal token={modalToken} open={showModal} onClosed={(data) => onCloseModal(data)} />
