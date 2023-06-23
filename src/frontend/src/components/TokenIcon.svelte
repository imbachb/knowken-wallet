<script lang="ts">
  export let tokenFrame: string | undefined = undefined;
  export let tokenIcon: string | undefined = undefined;
  export let xSize = 128;
  export let ySize = 128;
</script>

<div class="position-relative" style="height: {ySize}px; width: 100%;">
  {#if tokenFrame}
    <img
      src="/token-frame-{tokenFrame}.png"
      class="position-absolute translate-middle start-50 top-50"
      style="height: {ySize}px; width: {xSize}px;"
      alt="Frame"
    />
  {/if}
  {#if tokenIcon}
    <img
      src="{tokenIcon ? '/token-icon-' + tokenIcon : '/placeholder'}.png"
      class="position-absolute translate-middle start-50 top-50"
      style="height: {ySize}px; width: {xSize}px;"
      alt="Type"
    />
  {/if}
</div>
