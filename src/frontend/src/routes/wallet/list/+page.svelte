<script lang="ts">
  import TokenModal from '$components/TokenModal.svelte';
  import { Token } from '$lib/domain/token';
  import { tokenService } from '$lib/services/tokenService';

  import { Grid, Row, html } from 'gridjs';

  export let data;
  let modalToken: Token | undefined = undefined;
  let showModal = false;

  let wrapper: HTMLElement;
  $: if (wrapper) {
    const grid = new Grid({
      search: true,
      columns: [
        {
          name: 'Id',
          hidden: true,
        },
        'Frame',
        'Name',
        'Created',
        'Received',
      ],
      data: data.tokens.map((tk) => {
        return {
          id: tk.id,
          frame: html(`
        <div class="position-relative" style="height: 32px; width: 100%;">
          <img src="/token-frame-${tk.frame}.png"
              class="position-absolute translate-middle start-50 top-50"
              style="max-height: 32px; max-width: 32px;"
              alt="Frame"
          />
          <img
            src="${tk.icon ? '/token-icon-' + tk.icon : '/placeholder'}.png"
            class="position-absolute translate-middle start-50 top-50"
            style="max-height: 32px; max-width: 32px;"
            alt="Type"
          />
        </div>`),
          name: tk.name,
          created: tk.creationDate.toLocaleDateString(),
          received: tk.receivedDate.toLocaleDateString(),
        };
      }),
    }).render(wrapper);
    grid.on('rowClick', (_, row) => onRowClick(row));
  }

  const onRowClick = (row: Row) => {
    const token = data.tokens.find((tk) => tk.id === row.cell(0).data)!;
    modalToken = new Token({ ...token });
    showModal = true;
  };

  const onCloseModal = (submit: boolean) => {
    if (submit) {
      tokenService.updateToken(modalToken!);
    }
    showModal = false;
  };
</script>

<svelte:head>
  <title>List</title>
  <meta name="description" content="Knowledge Token List" />
</svelte:head>

<h1>List ({data.tokens.length})</h1>
<div bind:this={wrapper} />
{#if modalToken}
  <TokenModal token={modalToken} open={showModal} onClosed={(data) => onCloseModal(data)} />
{/if}

<style global>
  @import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
