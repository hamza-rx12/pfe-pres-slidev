<div class="kicker">The idea <span class="op50">· Two paths</span></div>

## <span class="brag">brag</span> — learn once, replay forever

<div class="mt-4 flex items-center justify-center gap-2.5">
  <div class="pill-task">"order 3 items and check out"</div>
  <carbon:arrow-right class="flow-arrow" />
  <div class="router"><carbon:branch /> <span>Seen this task before?</span></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-5">
  <div v-click class="card-amber">
    <div class="path-head"><carbon:bot class="text-amber-600 dark:text-amber-400" /> <b class="text-amber-700 dark:text-amber-300">Agent path</b> <span class="op50 text-sm font-normal">· new task</span></div>
    <div class="text-sm op85 mt-2">Figures it out step by step, under budget — then <b>writes down the recipe</b>.</div>
    <div class="ptag tag-amber">adaptive · learns once</div>
  </div>
  <div v-click class="card-teal">
    <div class="path-head"><carbon:repeat class="text-teal-700 dark:text-teal-300" /> <b class="text-teal-800 dark:text-teal-200">Replay path</b> <span class="op50 text-sm font-normal">· seen it before</span></div>
    <div class="text-sm op85 mt-2">Runs the saved steps — <b>no model in the loop</b>, same result every time.</div>
    <div class="ptag tag-teal">12× cheaper · 4× faster</div>
  </div>
</div>

<div v-click class="mt-5 text-center text-sm">
  <carbon:renew class="inline op60 mr-1" />
  Every success makes it <b class="text-teal-700 dark:text-teal-300">cheaper</b> · when a redesign breaks replay, it <b class="text-amber-700 dark:text-amber-300">re-learns on its own</b>.
</div>

<style scoped>
.router {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.42rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(20, 40, 90, 0.2);
  background: rgba(255, 255, 255, 0.7);
}
html.dark .router {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.05);
}
.path-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
}
.ptag {
  display: inline-block;
  margin-top: 0.7rem;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
}
.tag-amber { color: #b45309; border: 1px solid rgba(217, 119, 6, 0.5); }
html.dark .tag-amber { color: #fcd34d; border-color: rgba(245, 158, 11, 0.5); }
.tag-teal { color: #0f766e; border: 1px solid rgba(13, 148, 136, 0.5); }
html.dark .tag-teal { color: #7ff0e0; border-color: rgba(45, 212, 191, 0.5); }
</style>

<!--
THE slide. ~2 min. A task arrives; one cheap classifier call asks "seen this before?".
[click] No → the agent path: it reasons step by step under budget, and on success writes
the recipe down. [click] Yes → the replay path: the saved steps run with no model at all —
12× cheaper, 4× faster, identical every time. [click] So every success makes the system
cheaper, and when a redesign breaks a replay, it re-learns on its own. This one slide is the
whole thesis.
-->
