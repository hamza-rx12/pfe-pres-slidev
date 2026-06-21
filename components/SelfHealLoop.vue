<script setup lang="ts">
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'

// Four states of the self-healing cycle, placed clockwise from the top.
const steps = [
  { title: 'Replay', sub: 'the skill runs — deterministic, no model', tone: 'teal', icon: 'i-carbon-repeat', angle: -90 },
  { title: 'Drift · 3 strikes', sub: 'the site changes, replay fails ×3', tone: 'amber', icon: 'i-carbon-warning-alt', angle: 0 },
  { title: 'Back to the agent', sub: 'disabled — the next request re-solves it', tone: 'amber', icon: 'i-carbon-bot', angle: 90 },
  { title: 'New version', sub: 'it authors skill v2 — active again', tone: 'teal', icon: 'i-carbon-renew', angle: 180 },
]

const cx = 50, cy = 50, r = 38
const rad = (d: number) => (d * Math.PI) / 180
const onRing = (deg: number) => ({ x: cx + r * Math.cos(rad(deg)), y: cy + r * Math.sin(rad(deg)) })

const nodes = computed(() => steps.map((s, i) => ({ ...s, n: i + 1, ...onRing(s.angle) })))

// arrowheads sit between the nodes (the diagonals) and point clockwise
const arrows = computed(() =>
  [-45, 45, 135, 225].map((deg) => {
    const p = onRing(deg)
    const dx = -Math.sin(rad(deg)), dy = Math.cos(rad(deg)) // clockwise tangent
    const px = -dy, py = dx // perpendicular
    const L = 4.4, W = 2.9
    const tip = `${p.x + dx * L},${p.y + dy * L}`
    const b1 = `${p.x - dx * L * 0.5 + px * W},${p.y - dy * L * 0.5 + py * W}`
    const b2 = `${p.x - dx * L * 0.5 - px * W},${p.y - dy * L * 0.5 - py * W}`
    return `${tip} ${b1} ${b2}`
  })
)

const { $clicks } = useSlideContext()
// a highlight that travels around the ring; wraps back to Replay to show the cycle closing
const active = computed(() => {
  const c = unref($clicks) ?? 0
  return c <= 0 ? 0 : ((c - 1) % 4) + 1
})
</script>

<template>
  <div class="loop-stage">
    <svg class="ring-svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="shl-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#d97706" />
          <stop offset="100%" stop-color="#0d9488" />
        </linearGradient>
      </defs>
      <circle :cx="cx" :cy="cy" :r="r" fill="none" stroke="url(#shl-grad)"
        stroke-width="0.7" stroke-dasharray="1.3 2.4" stroke-linecap="round" opacity="0.5" />
      <polygon v-for="(pts, i) in arrows" :key="i" :points="pts" fill="url(#shl-grad)" opacity="0.8" />
    </svg>

    <div class="loop-center">
      <div class="i-carbon-renew loop-center-ic"></div>
      <div class="loop-center-tx">self-healing</div>
    </div>

    <div v-for="node in nodes" :key="node.n"
      class="lnode" :class="[`tone-${node.tone}`, { 'is-active': active === node.n }]"
      :style="{ left: node.x + '%', top: node.y + '%' }">
      <div class="lnode-badge">{{ node.n }}</div>
      <div :class="node.icon" class="lnode-ic"></div>
      <div class="lnode-title">{{ node.title }}</div>
      <div class="lnode-sub">{{ node.sub }}</div>
    </div>
  </div>
</template>

<style scoped>
.loop-stage {
  position: relative;
  width: 330px;
  height: 330px;
  margin: 0.4rem auto 0;
}
.ring-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.loop-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.loop-center-ic {
  font-size: 1.5rem;
  margin: 0 auto;
  color: var(--brag-amber);
  opacity: 0.85;
}
.loop-center-tx {
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
  margin-top: 0.15rem;
}
.loop-center-sub {
  font-size: 0.62rem;
  opacity: 0.5;
  margin-top: 0.1rem;
}

.lnode {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 142px;
  text-align: center;
  padding: 0.55rem 0.6rem 0.6rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(20, 40, 90, 0.14);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 22px -12px rgba(20, 40, 90, 0.3);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
html.dark .lnode {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(17, 24, 39, 0.92);
  box-shadow: 0 8px 22px -12px rgba(0, 0, 0, 0.5);
}
.lnode-badge {
  position: absolute;
  top: -0.55rem;
  left: 50%;
  transform: translateX(-50%);
  width: 1.15rem;
  height: 1.15rem;
  line-height: 1.15rem;
  border-radius: 50%;
  font-size: 0.6rem;
  font-weight: 800;
  font-family: var(--slidev-code-font-family, monospace);
  color: #fff;
  background: #94a3b8;
}
.lnode-ic {
  font-size: 1.15rem;
  margin: 0.1rem auto 0.2rem;
  opacity: 0.7;
}
.lnode-title {
  font-weight: 700;
  font-size: 0.82rem;
  line-height: 1.1;
}
.lnode-sub {
  font-size: 0.64rem;
  opacity: 0.6;
  line-height: 1.2;
  margin-top: 0.15rem;
}

.tone-teal { border-color: rgba(13, 148, 136, 0.4); }
html.dark .tone-teal { border-color: rgba(45, 212, 191, 0.36); }
.tone-teal .lnode-ic { color: var(--brag-teal); }
.tone-amber { border-color: rgba(217, 119, 6, 0.4); }
html.dark .tone-amber { border-color: rgba(245, 158, 11, 0.36); }
.tone-amber .lnode-ic { color: var(--brag-amber); }

.lnode.is-active {
  transform: translate(-50%, -50%) scale(1.07);
}
.tone-teal.is-active {
  border-color: var(--brag-teal);
  box-shadow: 0 14px 30px -10px rgba(13, 148, 136, 0.5), 0 0 0 1.5px rgba(13, 148, 136, 0.55);
}
.tone-teal.is-active .lnode-badge { background: #0d9488; }
.tone-amber.is-active {
  border-color: var(--brag-amber);
  box-shadow: 0 14px 30px -10px rgba(217, 119, 6, 0.5), 0 0 0 1.5px rgba(217, 119, 6, 0.55);
}
.tone-amber.is-active .lnode-badge { background: #d97706; }
</style>
