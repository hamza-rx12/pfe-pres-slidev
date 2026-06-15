<script setup lang="ts">
import { computed, unref } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'

const props = withDefaults(defineProps<{
  label: string
  a: number          // agent-path value
  b: number          // replay-path value
  max: number        // scale maximum (shared across rows)
  aLabel: string
  bLabel: string
  mult: string       // the "×N" chip
  delay?: number     // stagger, in ms
}>(), { delay: 0 })

const { $page, $slidev } = useSlideContext()
const { isPrintMode } = useNav()
// isPrintMode keeps the bars full in PDF export / print, where the
// currentPage-based activation never fires.
const active = computed(() => isPrintMode.value || $slidev?.nav?.currentPage === unref($page))

const aPct = computed(() => Math.max(2.5, (props.a / props.max) * 100))
const bPct = computed(() => Math.max(2.5, (props.b / props.max) * 100))
</script>

<template>
  <div class="duel-row">
    <div class="flex items-baseline justify-between mb-1">
      <span class="font-mono text-sm duel-label">{{ label }}</span>
      <span class="mult-chip" :style="{ opacity: active ? 1 : 0, transitionDelay: `${delay + 900}ms` }">{{ mult }}</span>
    </div>
    <div class="flex items-center gap-2 mb-1">
      <div class="bar-track">
        <div class="bar bar-a" :style="{ width: active ? `${aPct}%` : '0%', transitionDelay: `${delay}ms` }" />
      </div>
      <span class="bar-val val-a" :style="{ opacity: active ? 1 : 0, transitionDelay: `${delay + 500}ms` }">{{ aLabel }}</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="bar-track">
        <div class="bar bar-b" :style="{ width: active ? `${bPct}%` : '0%', transitionDelay: `${delay + 250}ms` }" />
      </div>
      <span class="bar-val val-b" :style="{ opacity: active ? 1 : 0, transitionDelay: `${delay + 750}ms` }">{{ bLabel }}</span>
    </div>
  </div>
</template>

<style scoped>
.duel-label {
  color: var(--duel-label);
}
.bar-track {
  flex: 1;
  height: 1.05rem;
  border-radius: 0.35rem;
  background: var(--track-bg);
  overflow: hidden;
}
.bar {
  height: 100%;
  border-radius: 0.35rem;
  transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.bar-a { background: linear-gradient(90deg, rgba(245, 158, 11, 0.45), rgba(245, 158, 11, 0.95)); }
.bar-b { background: linear-gradient(90deg, rgba(20, 184, 166, 0.45), rgba(20, 184, 166, 0.95)); }
.bar-val {
  width: 3.4rem;
  flex-shrink: 0;
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 0.72rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--duel-val-a);
  transition: opacity 0.4s ease;
}
.val-a { color: var(--duel-val-a); }
.val-b { color: var(--duel-val-b); }
.mult-chip {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--duel-mult);
  border: 1px solid var(--duel-mult-border);
  border-radius: 999px;
  padding: 0.05rem 0.5rem;
  transition: opacity 0.4s ease;
}
</style>
