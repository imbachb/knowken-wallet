<script>
  import { page } from '$app/stores';
</script>

<div class="bg-light position-fixed z-1" style="top: 60px; right: 0px; left: 0px;">
  <div class="row">
    <div class="col pe-0">
      <!-- TODO: Apply btn-outline-info when selected -->
      <a
        href="/wallet/collection"
        class:btn-outline-info={$page.url.pathname.includes('/wallet/collection')}
        class:btn-info={!$page.url.pathname.includes('/wallet/collection')}
        class="btn btn-sm w-100">Collection</a
      >
    </div>
    <div class="col ps-1 pe-1">
      <a
        href="/wallet/list"
        class:btn-outline-info={$page.url.pathname.includes('/wallet/list')}
        class:btn-info={!$page.url.pathname.includes('/wallet/list')}
        class="btn btn-sm w-100">List</a
      >
    </div>
    <div class="col ps-0">
      <a
        href="/wallet/type"
        class:btn-outline-info={$page.url.pathname.includes('/wallet/type')}
        class:btn-info={!$page.url.pathname.includes('/wallet/type')}
        class="btn btn-sm w-100">Type</a
      >
    </div>
  </div>
</div>
<div style="padding-top: 35px;">
  <slot />
</div>
