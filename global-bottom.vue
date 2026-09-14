<template>
  <div class="page-no">{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}</div>
</template>

<style>
.page-no {
  position: absolute;
  right: 1.35rem;
  bottom: 1rem;
  font-size: 0.85rem;
  color: rgba(166, 173, 200, 0.75);
  font-variant-numeric: tabular-nums;
  z-index: 10;
  pointer-events: none;
}
</style>
