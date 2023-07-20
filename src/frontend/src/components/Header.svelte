<script lang="ts">
  import { authStore } from '$lib/stores/auth.store';

  const OnToggleButtonClicked = () => {
    const collapsableContent = document.getElementById('navbarSupportedContent');
    collapsableContent?.classList.toggle('collapse');
  };
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/knowken-logo.png" alt="LOGO" width="30" height="30" class="d-inline-block" />
      Knowken<sup>&#174;</sup>
      <span class="text-light ms-3">-</span>
      <span class="navbar-brand wallet-font ms-3">Wallet</span>
    </a>

    <button
      style="border: none"
      class="navbar-toggler m-0 p-0"
      on:click={OnToggleButtonClicked}
      type="button"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse z-1" id="navbarSupportedContent">
      <!-- Right -->
      <div class="ms-auto">
        <ul class="navbar-nav">
          {#if $authStore.identity !== null}
            <li class="nav-item">
              <a class="nav-link" href="/"><i class="bi bi-house me-1" />Dashboard</a>
            </li>
            <li class="nav-item">
              <!-- TODO: Only text-danger if not empty -->
              <a class="nav-link text-danger" href="/alerts"
                ><i class="bi bi-chat me-1" />Incoming Tokens <!-- TODO: Add nr of incoming tokens --></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/account"><i class="bi bi-person me-1" />Account / ID</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/internet-computer">Internet Computer Test</a>
            </li>
          {/if}
          <li class="nav-item">
            {#if $authStore.identity !== null}
              <button class="btn nav-link" on:click={async () => authStore.signOut()}
                ><i class="bi bi-door-open me-1" />Logout</button
              >
            {:else}
              <button class="btn nav-link" on:click={async () => authStore.signIn({})}
                ><i class="bi bi-door-open me-1" />Login</button
              >
            {/if}
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
