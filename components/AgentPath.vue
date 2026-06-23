<script setup lang="ts">
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'

// The agent's reasoning loop — three steps, clockwise from the top.
const steps = [
  { key: 'read', title: 'read the page', icon: 'i-carbon-view', angle: -90 },
  { key: 'pick', title: 'pick a tool', icon: 'i-carbon-branch', angle: 30 },
  { key: 'act', title: 'act in browser', icon: 'i-carbon-cursor-1', angle: 150 },
]

const cx = 50, cy = 50, r = 37
const rad = (d: number) => (d * Math.PI) / 180
const onRing = (deg: number) => ({ x: cx + r * Math.cos(rad(deg)), y: cy + r * Math.sin(rad(deg)) })
const nodes = computed(() => steps.map((s, i) => ({ ...s, n: i + 1, ...onRing(s.angle) })))

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

// The tour steps on each click (→ key / clicker):
// 1 read · 2 pick + tools · 3 act · 4 read + ceilings
const { $clicks } = useSlideContext()
const clicks = computed(() => (unref($clicks) as number) ?? 0)

const clickKey: Record<number, string> = { 1: 'read', 2: 'pick', 3: 'act', 4: 'read' }
const activeKey = computed(() => clickKey[clicks.value] ?? null)
const toolsShown = computed(() => clicks.value >= 2)
const ceilingsShown = computed(() => clicks.value >= 4)
</script>

<template>
  <div class="apath">
    <div class="ap-loopcol">
      <div class="grp-label mb-2">The loop — until it's done</div>
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
        <div v-for="node in nodes" :key="node.n" class="anode" :class="{ 'is-active': activeKey === node.key }"
          :style="{ left: node.x + '%', top: node.y + '%' }">
          <div :class="node.icon" class="anode-ic"></div>
          <div class="anode-title">{{ node.title }}</div>
        </div>
      </div>
    </div>

    <div class="ap-rightcol">
      <div class="ap-panel" :class="{ shown: toolsShown }">
        <div class="grp-label">Six tools — the entire surface</div>
        <div class="tools-list">
          <div class="tchips"><span class="chip font-mono">goto</span><span class="chip font-mono">act</span></div>
          <div class="tgloss">go to pages, act on them</div>
          <div class="tchips"><span class="chip font-mono">snapshot</span><span class="chip font-mono">extract</span></div>
          <div class="tgloss">read the page &amp; its data</div>
          <div class="tchips"><span class="chip font-mono">propose_skill</span><span class="chip font-mono">done</span></div>
          <div class="tgloss">save the skill, then stop</div>
        </div>
      </div>
      <div class="ap-panel ceil-panel" :class="{ shown: ceilingsShown }">
        <div class="grp-label">Four ceilings — every run is capped</div>
        <div class="ceil-grid">
          <div class="ccard"><div class="i-carbon-renew cic"></div><div><div class="cval">≤ 40</div><div class="clbl">steps</div></div></div>
          <div class="ccard"><div class="i-carbon-time cic"></div><div><div class="cval">≤ 300s</div><div class="clbl">wall-clock</div></div></div>
          <div class="ccard"><div class="i-carbon-document cic"></div><div><div class="cval">≤ 700k</div><div class="clbl">input tokens</div></div></div>
          <div class="ccard"><div class="i-carbon-currency-dollar cic"></div><div><div class="cval">≤ $0.80</div><div class="clbl">cost</div></div></div>
        </div>
        <div class="ceil-cap">Checked before every step — hit one and it stops clean, with a full trace.</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.apath {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
}
.ap-loopcol { text-align: center; }
.grp-label {
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.5;
}

/* ---- the ring ---- */
.aloop-stage { position: relative; width: 252px; height: 252px; margin: 0 auto; }
.aloop-svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.aloop-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.aloop-center-ic { font-size: 1.3rem; margin: 0 auto; color: var(--brag-amber); opacity: 0.8; }
.aloop-center-tx { font-size: 0.66rem; font-weight: 700; opacity: 0.55; line-height: 1.15; margin-top: 0.12rem; }
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
  cursor: default;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s, border-color 0.35s;
}
html.dark .anode {
  border-color: rgba(245, 158, 11, 0.36);
  background: rgba(17, 24, 39, 0.94);
  box-shadow: 0 8px 20px -12px rgba(0, 0, 0, 0.5);
}
.anode-ic { font-size: 1.1rem; margin: 0 auto 0.18rem; color: var(--brag-amber); }
.anode-title { font-weight: 700; font-size: 0.78rem; line-height: 1.12; }
.anode.is-active {
  transform: translate(-50%, -50%) scale(1.08);
  border-color: var(--brag-amber);
  box-shadow: 0 14px 30px -10px rgba(217, 119, 6, 0.5), 0 0 0 1.5px rgba(217, 119, 6, 0.55);
}

/* ---- the right column reveals ---- */
.ap-rightcol { align-self: center; }
.ap-panel {
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1), transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.45s;
}
.ap-panel.shown { opacity: 1; visibility: visible; transform: none; }
.ceil-panel { margin-top: 1.3rem; }

.tools-list {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.55rem 0.7rem;
  align-items: center;
  margin-top: 0.6rem;
}
.tchips { display: flex; gap: 0.4rem; }
.tgloss { font-size: 0.74rem; opacity: 0.62; }

.ceil-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-top: 0.6rem;
}
.ccard {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.7rem;
  border-radius: 0.7rem;
  border: 1px solid rgba(217, 119, 6, 0.3);
  background: rgba(217, 119, 6, 0.05);
}
html.dark .ccard {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.06);
}
.cic {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  color: var(--brag-amber);
  background: rgba(217, 119, 6, 0.1);
}
html.dark .cic { background: rgba(245, 158, 11, 0.13); }
.cval {
  font-family: var(--slidev-code-font-family, monospace);
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1;
  color: #b45309;
}
html.dark .cval { color: #fcd34d; }
.clbl { font-size: 0.7rem; opacity: 0.6; margin-top: 0.2rem; }
.ceil-cap { font-size: 0.74rem; opacity: 0.6; margin-top: 0.7rem; }
</style>
