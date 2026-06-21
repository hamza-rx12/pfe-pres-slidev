<div class="kicker">The company <span class="op50">· The engagement</span></div>

## One layer of a three-layer migration

<div class="text-sm op70 mt-2 max-w-3xl" v-motion :initial="{ opacity: 0, y: 8 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }">
  Orange's UiPath estate, rebuilt as three autonomous agents — one engineer each.
</div>

<div class="stack mt-8 max-w-2xl mx-auto">
  <div class="spine" v-motion :initial="{ scaleY: 0 }" :enter="{ scaleY: 1, transition: { delay: 220, duration: 650, ease: 'easeInOut' } }"></div>

  <div class="layer"
    v-motion :initial="{ opacity: 0, x: -18 }" :enter="{ opacity: 1, x: 0, transition: { delay: 320, type: 'spring', stiffness: 120, damping: 20 } }">
    <span class="node"></span>
    <div class="layer-card">
      <carbon:email class="layer-icon" />
      <span class="layer-name">Business</span>
      <span class="layer-tag">error-email triage</span>
    </div>
  </div>

  <div class="layer layer-hero"
    v-motion :initial="{ opacity: 0, x: -18 }" :enter="{ opacity: 1, x: 0, transition: { delay: 540, type: 'spring', stiffness: 140, damping: 14 } }">
    <span class="node node-hero"></span>
    <div class="layer-card">
      <carbon:application-web class="layer-icon !text-amber-700 dark:!text-amber-300" />
      <span class="layer-name">App</span>
      <span class="layer-tag">browser execution engine</span>
      <span class="layer-mark">this project</span>
    </div>
  </div>

  <div class="layer"
    v-motion :initial="{ opacity: 0, x: -18 }" :enter="{ opacity: 1, x: 0, transition: { delay: 740, type: 'spring', stiffness: 120, damping: 20 } }">
    <span class="node"></span>
    <div class="layer-card">
      <carbon:terminal class="layer-icon" />
      <span class="layer-name">OS</span>
      <span class="layer-tag">Windows-level remediation</span>
    </div>
  </div>
</div>

<div class="mt-8 text-center text-sm op75" v-click>
  App Layer — <b class="text-amber-600 dark:text-amber-400">owned end-to-end</b>, architecture to prototype · Feb → Jul 2026
</div>

<style scoped>
.stack {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.spine {
  position: absolute;
  left: 7px;
  top: 16px;
  bottom: 16px;
  width: 2px;
  border-radius: 2px;
  transform-origin: top center;
  background: linear-gradient(180deg,
    rgba(20, 40, 90, 0.06),
    rgba(217, 119, 6, 0.45) 50%,
    rgba(20, 40, 90, 0.06));
}
html.dark .spine {
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.05),
    rgba(245, 158, 11, 0.5) 50%,
    rgba(255, 255, 255, 0.05));
}
.layer {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}
.node {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--brag-bg, #fff);
  border: 2px solid rgba(20, 40, 90, 0.25);
}
html.dark .node {
  background: #1a2233;
  border-color: rgba(255, 255, 255, 0.28);
}
.node-hero {
  border-color: #d97706;
  background: #d97706;
  box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.16);
}
html.dark .node-hero {
  border-color: #f59e0b;
  background: #f59e0b;
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.18);
}
.layer-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(20, 40, 90, 0.12);
  background: rgba(255, 255, 255, 0.55);
}
html.dark .layer-card {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}
.layer-hero .layer-card {
  transform: scale(1.025);
  border-color: rgba(217, 119, 6, 0.45);
  background: linear-gradient(180deg, rgba(217, 119, 6, 0.1), rgba(217, 119, 6, 0.03));
  box-shadow: 0 14px 30px -14px rgba(217, 119, 6, 0.45);
}
html.dark .layer-hero .layer-card {
  border-color: rgba(245, 158, 11, 0.42);
  background: linear-gradient(180deg, rgba(245, 158, 11, 0.13), rgba(245, 158, 11, 0.04));
}
.layer-icon {
  font-size: 1.25rem;
  opacity: 0.7;
}
.layer-name {
  font-weight: 700;
  font-size: 1.05rem;
  width: 5rem;
}
.layer-tag {
  font-size: 0.85rem;
  opacity: 0.62;
}
.layer-mark {
  margin-left: auto;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #b45309;
  border: 1px solid rgba(217, 119, 6, 0.5);
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
}
html.dark .layer-mark {
  color: #fcd34d;
  border-color: rgba(245, 158, 11, 0.5);
}
</style>

<!--
~1 min. One estate, three autonomous agents — one engineer each. The spine ties them
into a single system; the layers settle in top-to-bottom and the App layer lands as the
hero — the most direct UiPath replacement (web-driving execution). [click] "I owned the
App Layer end-to-end — the architecture and design decisions, not only the code."
Business and OS ran in parallel by colleagues.
-->
