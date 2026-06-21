<script setup lang="ts">
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'

// One entry per stop. Icon strings are literal `i-carbon-*` so UnoCSS picks them up.
const stops = [
  { icon: 'i-carbon-enterprise', title: 'The company', sub: 'Neo Tech IT',
    stat: '60+ engineers · est. 2015',
    detail: 'Who I worked with, and the part of the migration I owned.' },
  { icon: 'i-carbon-warning-alt', title: 'The problem', sub: 'why UiPath had to go',
    stat: '$120–180k / year',
    detail: 'Why the old rule-based automation had to be replaced.' },
  { icon: 'i-carbon-idea', title: 'The idea', sub: 'learn once, replay forever',
    stat: 'learn once · replay ∞',
    detail: 'The single insight the whole design turns on.' },
  { icon: 'i-carbon-bot', title: 'How it works', sub: 'perception · agent · skills',
    stat: '6 tools · hard budget',
    detail: 'A look under the hood at how the system runs.' },
  { icon: 'i-carbon-chart-line-data', title: 'Results', sub: 'what it does, what it saves',
    stat: '×12 cheaper · $1 → 1¢',
    detail: 'What it does in practice — and what it saves.' },
  { icon: 'i-carbon-rocket', title: "What's next", sub: 'limits & roadmap',
    stat: 'benchmark · cluster · scale',
    detail: 'The honest limits, and where it goes next.' },
]

const { $clicks } = useSlideContext()
const active = computed(() => Math.min(stops.length, Math.max(0, unref($clicks) ?? 0)))
const current = computed(() => (active.value >= 1 ? stops[active.value - 1] : null))

function state(i: number) {
  if (active.value === 0) return 'idle'
  if (active.value === i + 1) return 'current'
  if (active.value > i + 1) return 'visited'
  return 'future'
}
</script>

<template>
  <div>
    <!-- the six stops -->
    <div class="grid grid-cols-6 gap-3 mt-7">
      <div v-for="(s, i) in stops" :key="i" class="stop" :class="`stop-${state(i)}`">
        <div class="stop-num">{{ String(i + 1).padStart(2, '0') }}</div>
        <div :class="s.icon" class="stop-icon"></div>
        <div class="stop-title">{{ s.title }}</div>
        <div class="stop-sub">{{ s.sub }}</div>
      </div>
    </div>

    <!-- progress -->
    <div class="progress mt-6">
      <div class="progress-fill" :style="{ width: `${(active / stops.length) * 100}%` }"></div>
    </div>

    <!-- detail panel -->
    <div class="detail-wrap mt-5">
      <Transition name="swap" mode="out-in">
        <div v-if="current" :key="active" class="detail">
          <div class="detail-stat grad">{{ current.stat }}</div>
          <div class="detail-text">{{ current.detail }}</div>
        </div>
        <div v-else key="intro" class="detail-intro">
          A 20-minute walk through six stops.
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.stop {
  position: relative;
  border-radius: 0.85rem;
  padding: 1.15rem 0.5rem 0.95rem;
  text-align: center;
  border: 1px solid rgba(20, 40, 90, 0.12);
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
html.dark .stop {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}
.stop-num {
  position: absolute;
  top: 0.45rem;
  right: 0.6rem;
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 0.58rem;
  font-weight: 700;
  opacity: 0.3;
}
.stop-icon {
  font-size: 1.55rem;
  margin: 0 auto 0.5rem;
}
.stop-title {
  font-size: 0.85rem;
  font-weight: 700;
}
.stop-sub {
  font-size: 0.64rem;
  opacity: 0.6;
  margin-top: 0.15rem;
  line-height: 1.2;
}

/* states */
.stop-future {
  opacity: 0.38;
}
.stop-visited {
  opacity: 0.9;
  border-color: rgba(13, 148, 136, 0.4);
}
.stop-visited .stop-icon {
  color: var(--brag-teal);
}
.stop-current {
  transform: translateY(-7px) scale(1.06);
  border-color: transparent;
  background: linear-gradient(180deg, rgba(245, 158, 11, 0.14), rgba(45, 212, 191, 0.08));
  box-shadow: 0 16px 36px -12px rgba(245, 158, 11, 0.5), 0 0 0 1.5px rgba(245, 158, 11, 0.6);
}
.stop-current .stop-icon {
  color: var(--brag-amber);
}
.stop-current .stop-num {
  opacity: 0.6;
}

.progress {
  height: 3px;
  border-radius: 3px;
  background: rgba(20, 40, 90, 0.1);
  overflow: hidden;
}
html.dark .progress {
  background: rgba(255, 255, 255, 0.08);
}
.progress-fill {
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, #d97706, #0d9488);
  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.detail-wrap {
  min-height: 4.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.detail-stat {
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
.detail-text {
  font-size: 0.95rem;
  opacity: 0.8;
  margin: 0.4rem auto 0;
  max-width: 44rem;
}
.detail-intro {
  font-size: 1.05rem;
  font-weight: 600;
}

.swap-enter-active,
.swap-leave-active {
  transition: all 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}
.swap-enter-from {
  opacity: 0;
  transform: translateY(9px);
}
.swap-leave-to {
  opacity: 0;
  transform: translateY(-9px);
}
</style>
