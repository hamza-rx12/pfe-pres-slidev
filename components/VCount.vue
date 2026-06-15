<script setup lang="ts">
import { computed, ref, unref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = withDefaults(defineProps<{
  to: number
  from?: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  separator?: boolean
  at?: number          // click index this counter is revealed at (matches its v-click gate)
}>(), {
  from: 0,
  duration: 1500,
  decimals: 0,
  prefix: '',
  suffix: '',
  separator: false,
  at: 0,
})

const { $page, $slidev, $clicks } = useSlideContext()
// Gate on the click state too: inside a v-click block the component is mounted
// (hidden via opacity) as soon as the slide activates — without this the
// animation would already be over by the time the element is revealed.
const active = computed(() =>
  $slidev?.nav?.currentPage === unref($page) && (unref($clicks) ?? 0) >= props.at,
)

// Start at the final value so print/export and overview render correctly;
// animate from `from` whenever the slide becomes the current one.
const display = ref(props.to)
let raf = 0

function fmt(n: number): string {
  const fixed = n.toFixed(props.decimals)
  if (!props.separator) return fixed
  const [int, dec] = fixed.split('.')
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return dec ? `${grouped}.${dec}` : grouped
}

function run() {
  if (typeof requestAnimationFrame === 'undefined') return
  cancelAnimationFrame(raf)
  const start = performance.now()
  const tick = (t: number) => {
    const p = Math.min(1, (t - start) / props.duration)
    const eased = 1 - Math.pow(1 - p, 3)
    display.value = props.from + (props.to - props.from) * eased
    if (p < 1) raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
}

watch(active, (a) => {
  if (a) run()
  else display.value = props.to
}, { immediate: true })
</script>

<template>
  <span class="tabular-nums">{{ prefix }}{{ fmt(display) }}{{ suffix }}</span>
</template>
