<script setup lang="ts">
defineProps<{ n: number; title: string; sub?: string }>()
const total = 6
const dots = Array.from({ length: total }, (_, i) => i + 1)
</script>

<template>
  <div class="text-center">
    <div class="sec-num">{{ String(n).padStart(2, '0') }} <span class="op40">/ {{ String(total).padStart(2, '0') }}</span></div>
    <div class="sec-title">{{ title }}</div>
    <div class="sec-rule"></div>
    <div v-if="sub" class="sec-sub">{{ sub }}</div>
    <div class="dots">
      <span v-for="d in dots" :key="d" class="dot" :class="{ on: d === n, done: d < n }"></span>
    </div>
  </div>
</template>

<style scoped>
.sec-num {
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.32em;
  color: var(--brag-amber);
  margin-bottom: 0.9rem;
}
.sec-title {
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: #101d38;
}
html.dark .sec-title { color: #f6f9ff; }
.sec-rule {
  width: 3.6rem;
  height: 3px;
  border-radius: 2px;
  margin: 1.1rem auto;
  background: linear-gradient(90deg, #d97706, #0d9488);
}
html.dark .sec-rule { background: linear-gradient(90deg, #fbbf24, #2dd4bf); }
.sec-sub {
  font-size: 1.05rem;
  opacity: 0.6;
}
.dots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 2.4rem;
}
.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: rgba(20, 40, 90, 0.2);
  transition: all 0.3s ease;
}
html.dark .dot { background: rgba(255, 255, 255, 0.2); }
.dot.done { background: var(--brag-teal); }
.dot.on {
  width: 1.7rem;
  background: linear-gradient(90deg, #d97706, #0d9488);
}
html.dark .dot.on { background: linear-gradient(90deg, #fbbf24, #2dd4bf); }
</style>
