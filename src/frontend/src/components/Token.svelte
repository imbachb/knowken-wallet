<script lang="ts">
  import { Token } from '$lib/domain/token';
  import TokenModal from '$components/TokenModal.svelte';
  import TokenIcon from './TokenIcon.svelte';
  import { tokenService } from '$lib/services/tokenService';

  export let token: Token;
  let modalToken: Token;

  let showModal = false;
  const onShowPopup = () => {
    modalToken = new Token({ ...token });
    showModal = true;
  };

  const onCloseModal = (submit: boolean) => {
    if (submit) {
      token = modalToken;
      tokenService.updateToken(modalToken);
    }
    showModal = false;
  };
</script>

<!-- TODO: Open modal, or go to token detail page -->
<div
  class="card m-2 h-100 collection-border"
  style="cursor: pointer;"
  on:click={onShowPopup}
  on:keydown={onShowPopup}
>
  <div class="mt-2">
    <TokenIcon tokenFrame={token.frame} tokenIcon={token.icon} />
  </div>
  <div class="card-body p-2 mb-0 pb-0">
    <p class="card-title text-center mb-0 pb-0">
      {token.name}
    </p>
  </div>
</div>
<TokenModal token={modalToken} open={showModal} onClosed={(data) => onCloseModal(data)} />
