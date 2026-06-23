<script setup lang="ts">
import { computed } from 'vue'

// The agent's reasoning loop — three steps, clockwise from the top.
const steps = [
  { title: 'read the page', icon: 'i-carbon-view', angle: -90 },
  { title: 'model picks a tool', icon: 'i-carbon-branch', angle: 30 },
  { title: 'browser acts', icon: 'i-carbon-cursor-1', angle: 150 },
]

const cx = 50, cy = 50, r = 37
const rad = (d: number) => (d * Math.PI) / 180
const onRing = (deg: number) => ({ x: cx + r * Math.cos(rad(deg)), y: cy + r * Math.sin(rad(deg)) })
const nodes = computed(() => steps.map((s, i) => ({ ...s, n: i + 1, ...onRing(s.angle) })))

// arrowheads sit on the ring between the nodes, pointing clockwise
const arrows = computed(() =>
  [-30, 90, 210].map((deg) => {
    const p = onRing(deg)
    const dx = -Math.sin(rad(deg)), dy = Math.cos(rad(deg)) // clockwise tangent
    const px = -dy, py = dx
    const L = 4.8, W = 3.1
    const tip = `${p.x + dx * L},${p.y + dy * L}`
    const b1 = `${p.x - dx * L * 0.5 + px * W},${p.y - dy * L * 0.5 + py * W}`
    const b2 = `${p.x - dx * L * 0.5 - px * W},${p.y - dy * L * 0.5 - py * W}`
    return `${tip} ${b1} ${b2}`
  })
)
</script>

<template>
  <div class="aloop-stage">
    <svg class="aloop-svg" viewBox="0 0 100 100">
      <circle :cx="cx" :cy="cy" :r="r" fill="none" stroke="var(--brag-amber)"
        stroke-width="0.7" stroke-dasharray="1.3 2.4" stroke-linecap="round" opacity="0.55" />
      <polygon v-for="(pts, i) in arrows" :key="i" :points="pts" fill="var(--brag-amber)" opacity="0.85" />
    </svg>
    <div class="aloop-center">
      <div class="i-carbon-renew aloop-center-ic"></div>
      <div class="aloop-center-tx">repeat<br />until <span class="font-mono">done</span></div>
    </div>
    <div v-for="node in nodes" :key="node.n" class="anode" :style="{ left: node.x + '%', top: node.y + '%' }">
      <div :class="node.icon" class="anode-ic"></div>
      <div class="anode-title">{{ node.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.aloop-stage {
  position: relative;
  width: 252px;
  height: 252px;
  margin: 0 auto;
}
.aloop-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.aloop-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.aloop-center-ic {
  font-size: 1.3rem;
  margin: 0 auto;
  color: var(--brag-amber);
  opacity: 0.8;
}
.aloop-center-tx {
  font-size: 0.66rem;
  font-weight: 700;
  opacity: 0.55;
  line-height: 1.15;
  margin-top: 0.12rem;
}
.anode {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 104px;
  text-align: center;
  padding: 0.5rem 0.4rem 0.55rem;
  border-radius: 0.7rem;
  border: 1px solid rgba(217, 119, 6, 0.42);
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 8px 20px -12px rgba(20, 40, 90, 0.3);
}
html.dark .anode {
  border-color: rgba(245, 158, 11, 0.36);
  background: rgba(17, 24, 39, 0.94);
  box-shadow: 0 8px 20px -12px rgba(0, 0, 0, 0.5);
}
.anode-ic {
  font-size: 1.1rem;
  margin: 0 auto 0.18rem;
  color: var(--brag-amber);
}
.anode-title {
  font-weight: 700;
  font-size: 0.78rem;
  line-height: 1.12;
}
</style>
