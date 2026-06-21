<div class="kicker">Results <span class="op50">· Delivered</span></div>

## Four commitments — all kept

<div class="text-sm op70 mt-1 mb-5 max-w-3xl">
  Met by construction — each objective is what one build phase left behind, runnable end-to-end by mid-May.
</div>

<div class="flex flex-col gap-2 max-w-4xl">
  <div class="drow" v-motion :initial="{ opacity: 0, x: -16 }" :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }">
    <carbon:checkmark class="drow-ic" />
    <div class="drow-name">A2A task surface</div>
    <div class="drow-got">AgentCard · JSON-RPC lifecycle · SSE progress · bearer auth</div>
  </div>
  <div class="drow" v-motion :initial="{ opacity: 0, x: -16 }" :enter="{ opacity: 1, x: 0, transition: { delay: 320 } }">
    <carbon:checkmark class="drow-ic" />
    <div class="drow-name">Budgeted agent loop</div>
    <div class="drow-got">six tools · hard ceilings checked before every tool dispatch</div>
  </div>
  <div class="drow" v-motion :initial="{ opacity: 0, x: -16 }" :enter="{ opacity: 1, x: 0, transition: { delay: 440 } }">
    <carbon:checkmark class="drow-ic" />
    <div class="drow-name">Operator console</div>
    <div class="drow-got">live timeline · full per-run traces · skill catalogue · fleet health</div>
  </div>
  <div class="drow" v-motion :initial="{ opacity: 0, x: -16 }" :enter="{ opacity: 1, x: 0, transition: { delay: 560 } }">
    <carbon:checkmark class="drow-ic" />
    <div class="drow-name">Containerised deploy</div>
    <div class="drow-got">three images · idempotent migrations · Kubernetes-ready</div>
  </div>
</div>

<div class="hero-row mt-4" v-click>
  <carbon:idea class="hero-ic" />
  <div class="text-sm">
    <b class="grad">+ the part that wasn't on the list</b> — the two-path DSM system,
    <b>learn once, replay forever</b>, shipped and exercised end-to-end on live sites.
  </div>
</div>

<style scoped>
.drow {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(20, 40, 90, 0.08);
}
html.dark .drow { border-color: rgba(255, 255, 255, 0.08); }
.drow-ic { color: var(--brag-teal); font-size: 1.05rem; flex-shrink: 0; align-self: center; }
.drow-name { font-weight: 700; font-size: 0.95rem; width: 13rem; flex-shrink: 0; }
.drow-got { font-size: 0.82rem; opacity: 0.65; }
.hero-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  max-width: 56rem;
  padding: 0.75rem 1.1rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(217, 119, 6, 0.3);
  background: linear-gradient(120deg, rgba(217, 119, 6, 0.08), rgba(13, 148, 136, 0.07));
}
html.dark .hero-row {
  border-color: rgba(245, 158, 11, 0.3);
  background: linear-gradient(120deg, rgba(245, 158, 11, 0.1), rgba(45, 212, 191, 0.08));
}
.hero-ic { font-size: 1.4rem; color: var(--brag-amber); flex-shrink: 0; }
</style>

<!--
~1 min. The promise-kept beat. Four objectives were stated up front; all four shipped, each
one what a build phase left behind. Then the point I'm proudest of: the two-path DSM system
wasn't a requirement — it was my idea to reclaim RPA's determinism — and it shipped too. That
is what turns a working agent into an affordable one.
-->
