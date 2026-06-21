<div class="kicker">The idea <span class="op50">· Two paths</span></div>

## <span class="brag">brag</span> — learn once, replay forever

<div class="mt-3 flex items-center justify-center gap-3">
  <div class="pill-task">web.task · "order 3 items and check out on the store"</div>
  <carbon:arrow-right class="flow-arrow" />
  <div class="card text-center !py-2 !px-4">
    <div class="text-sm font-bold">intent router</div>
    <div class="text-[0.65rem] op60">one cheap classifier call</div>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">
  <div v-click class="card-amber">
    <div class="flex items-center gap-2 mb-1.5">
      <carbon:bot class="text-amber-600 dark:text-amber-400" />
      <b class="text-amber-700 dark:text-amber-300">no skill matches → AGENT PATH</b>
    </div>
    <div class="text-sm op85 leading-relaxed">
      An LLM tool-loop: <b>perceive → decide → act</b>, under hard budgets.<br />
      Solves the task like a smart intern — <b>once</b>.
    </div>
    <div v-click class="mt-2.5 text-sm border-t border-amber-600/40 dark:border-amber-400/30 pt-2">
      on success → <span class="font-mono text-amber-700 dark:text-amber-300">propose_skill</span> —
      it <b>writes down the recipe</b> it just discovered
    </div>
  </div>
  <div v-click class="card-teal">
    <div class="flex items-center gap-2 mb-1.5">
      <carbon:repeat class="text-teal-700 dark:text-teal-300" />
      <b class="text-teal-800 dark:text-teal-200">skill matches → REPLAY PATH</b>
    </div>
    <div class="text-sm op85 leading-relaxed">
      Execute the recorded steps. <b>Zero LLM calls in the navigation loop.</b><br />
      Deterministic, auditable — same steps, every time.
    </div>
    <div class="mt-2.5 text-sm border-t border-teal-600/40 dark:border-teal-400/30 pt-2">
      ~<b class="text-teal-700 dark:text-teal-300">12× cheaper</b> · <b class="text-teal-700 dark:text-teal-300">4× faster</b> than the agent path
    </div>
  </div>
</div>

<div v-click class="mt-4 card !py-2.5 text-center text-sm">
  <carbon:renew class="inline text-teal-700 dark:text-teal-300 mr-1" />
  Every agent success makes the system <b class="text-teal-700 dark:text-teal-300">cheaper</b> ·
  every replay failure (3 strikes) sends it <b class="text-amber-700 dark:text-amber-300">back to school</b>
</div>

<!--
THE slide. ~2 min. Tell it as a story:
"A task arrives in natural language. One cheap call asks: have we seen this kind of task before?"
[click] "Never seen → the agent path. The LLM explores like an intern would."
[click] "And when it succeeds, it does what a good intern does: writes the procedure down."
[click] "Seen before → replay. No model in the loop. RPA-grade determinism — but the recipe wrote itself."
[click] "The system gets cheaper with use, and when a site changes, it re-learns on its own."
This one slide carries the whole thesis.
-->
