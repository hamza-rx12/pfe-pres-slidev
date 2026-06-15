<template>
  <footer
    v-if="$slidev.nav.currentPage > 1"
    class="absolute bottom-2.5 right-4 z-10 font-mono text-[0.55rem] text-black/40 dark:text-white/35 select-none pointer-events-none"
  >
    brag · {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
