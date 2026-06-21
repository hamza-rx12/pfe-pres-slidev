<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

// Measured medians (report §6.4 / fig-amort): agent $0.095 every run; replay learns
// once at $0.095 then $0.008 thereafter. Cumulative over 20 requests for one task.
const reqs = [1, 5, 10, 15, 20]
const AGENT = 0.095, REPLAY = 0.008
const agentCum = reqs.map((n) => AGENT * n)
const replayCum = reqs.map((n) => AGENT + (n - 1) * REPLAY)

const xL = 46, xR = 330, yT = 22, yB = 148, yMax = 2
const X = (n: number) => xL + ((n - 1) / 19) * (xR - xL)
const Y = (c: number) => yB - (c / yMax) * (yB - yT)

const toPts = (vals: number[]) => reqs.map((n, i) => `${X(n).toFixed(1)},${Y(vals[i]).toFixed(1)}`).join(' ')
const agentPts = toPts(agentCum)
const replayPts = toPts(replayCum)

const lineLen = (pts: string) => {
  const a = pts.split(' ').map((p) => p.split(',').map(Number))
  let L = 0
  for (let i = 1; i < a.length; i++) L += Math.hypot(a[i][0] - a[i - 1][0], a[i][1] - a[i - 1][1])
  return Math.ceil(L)
}
const agentLen = lineLen(agentPts)
const replayLen = lineLen(replayPts)

const yTicks = [0, 0.5, 1, 1.5, 2]
const dots = computed(() =>
  reqs.map((n, i) => ({ x: X(n), ay: Y(agentCum[i]), ry: Y(replayCum[i]) }))
)

const { isPrintMode } = useNav()
</script>

<template>
  <svg class="cc" :class="{ 'cc-anim': !isPrintMode }" viewBox="0 0 380 184">
    <!-- y grid + labels -->
    <g class="cc-grid">
      <line v-for="t in yTicks" :key="'g' + t" :x1="xL" :x2="xR" :y1="Y(t)" :y2="Y(t)" />
    </g>
    <g class="cc-ylab">
      <text v-for="t in yTicks" :key="'y' + t" :x="xL - 6" :y="Y(t) + 3" text-anchor="end">${{ t.toFixed(t === 0 || t === 1 || t === 2 ? 0 : 2) }}</text>
    </g>
    <!-- axes -->
    <line class="cc-axis" :x1="xL" :y1="yT" :x2="xL" :y2="yB" />
    <line class="cc-axis" :x1="xL" :y1="yB" :x2="xR" :y2="yB" />
    <!-- x ticks -->
    <g class="cc-xlab">
      <text v-for="n in reqs" :key="'x' + n" :x="X(n)" :y="yB + 13" text-anchor="middle">{{ n }}</text>
    </g>
    <text class="cc-axis-title" :x="(xL + xR) / 2" :y="yB + 28" text-anchor="middle">requests for the same task</text>

    <!-- lines -->
    <polyline class="cc-line cc-agent" :points="agentPts" :style="{ '--len': agentLen }" />
    <polyline class="cc-line cc-replay" :points="replayPts" :style="{ '--len': replayLen }" />

    <!-- dots -->
    <g class="cc-dots">
      <circle v-for="(d, i) in dots" :key="'a' + i" :cx="d.x" :cy="d.ay" r="2.4" class="dot-agent" />
      <circle v-for="(d, i) in dots" :key="'r' + i" :cx="d.x" :cy="d.ry" r="2.4" class="dot-replay" />
    </g>

    <!-- end labels -->
    <g class="cc-end cc-end-agent" text-anchor="end">
      <text :x="xR - 4" :y="Y(1.9) - 9" class="cc-end-val">$1.90</text>
      <text :x="xR - 4" :y="Y(1.9) - 0">agent every request</text>
    </g>
    <g class="cc-end cc-end-replay" text-anchor="end">
      <text :x="xR - 4" :y="Y(0.247) - 13" class="cc-end-val">$0.25</text>
      <text :x="xR - 4" :y="Y(0.247) - 4">learn once, then replay</text>
    </g>
  </svg>
</template>

<style scoped>
.cc { width: 100%; max-width: 660px; display: block; margin: 0 auto; }
.cc-grid line { stroke: rgba(20, 40, 90, 0.09); stroke-width: 0.6; }
html.dark .cc-grid line { stroke: rgba(255, 255, 255, 0.08); }
.cc-axis { stroke: rgba(20, 40, 90, 0.3); stroke-width: 0.8; }
html.dark .cc-axis { stroke: rgba(255, 255, 255, 0.25); }
.cc-ylab text, .cc-xlab text { font-size: 7px; fill: currentColor; opacity: 0.5; font-family: var(--slidev-code-font-family, monospace); }
.cc-axis-title { font-size: 7.5px; fill: currentColor; opacity: 0.55; }

.cc-line { fill: none; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
.cc-agent { stroke: #d97706; }
.cc-replay { stroke: #0d9488; }
html.dark .cc-agent { stroke: #f59e0b; }
html.dark .cc-replay { stroke: #2dd4bf; }

.dot-agent { fill: #d97706; }
.dot-replay { fill: #0d9488; }
html.dark .dot-agent { fill: #f59e0b; }
html.dark .dot-replay { fill: #2dd4bf; }

.cc-end text { font-size: 8.5px; fill: currentColor; }
.cc-end-val { font-weight: 800; font-size: 10px; }
.cc-end-agent .cc-end-val, .cc-end-agent text { fill: #b45309; }
.cc-end-replay .cc-end-val, .cc-end-replay text { fill: #0f766e; }
html.dark .cc-end-agent .cc-end-val, html.dark .cc-end-agent text { fill: #fbbf24; }
html.dark .cc-end-replay .cc-end-val, html.dark .cc-end-replay text { fill: #5eead4; }

/* draw-in animation (live deck only; print shows fully drawn) */
.cc-anim .cc-line { stroke-dasharray: var(--len); animation: cc-draw 1.2s cubic-bezier(0.6, 0, 0.2, 1) both; }
.cc-anim .cc-agent { animation-delay: 0.25s; }
.cc-anim .cc-replay { animation-delay: 0.5s; }
.cc-anim .cc-dots, .cc-anim .cc-end { animation: cc-fade 0.5s ease 1.3s both; }
@keyframes cc-draw { from { stroke-dashoffset: var(--len); } to { stroke-dashoffset: 0; } }
@keyframes cc-fade { from { opacity: 0; } to { opacity: 1; } }
</style>
