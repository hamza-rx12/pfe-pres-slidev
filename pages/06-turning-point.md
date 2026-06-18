<div class="kicker">The turning point</div>

## LLMs changed what's <i>possible</i> — not what's <i>required</i>

<div class="grid grid-cols-2 gap-4 mt-5">

<div v-click class="card-teal">
  <div class="flex items-center gap-2 mb-2"><carbon:idea class="text-teal-700 dark:text-teal-300" /><b class="text-teal-800 dark:text-teal-200">Newly possible</b></div>
  <div class="text-sm op85 leading-relaxed">
    A language model can now read an interface <b>by meaning</b>:<br />
    "the <span class="font-mono">Login</span> button" — whatever it looks like, wherever it moved.
    <div class="mt-3 text-xs op60">A general, instruction-driven browser agent is finally feasible.</div>
  </div>
</div>

<div v-click class="card-amber">
  <div class="flex items-center gap-2 mb-2"><carbon:warning-alt class="text-amber-700 dark:text-amber-300" /><b class="text-amber-800 dark:text-amber-200">Still required — a naive agent fails all four</b></div>
  <div class="text-sm space-y-2">
    <div class="flex items-start gap-2"><carbon:close class="text-red-600 dark:text-red-400 shrink-0 mt-1" /><span><b>not deterministic</b> — it takes a <i>different path</i> every run</span></div>
    <div class="flex items-start gap-2"><carbon:close class="text-red-600 dark:text-red-400 shrink-0 mt-1" /><span><b>not affordable</b> — it spends tokens on <i>every</i> click of <i>every</i> run</span></div>
    <div class="flex items-start gap-2"><carbon:close class="text-red-600 dark:text-red-400 shrink-0 mt-1" /><span><b>not fast</b> — a model round-trip per action</span></div>
    <div class="flex items-start gap-2"><carbon:close class="text-red-600 dark:text-red-400 shrink-0 mt-1" /><span><b>not auditable</b> — a chat log is not a trace</span></div>
  </div>
</div>

</div>

<div v-click class="mt-7 text-center">
  <span class="text-xl font-bold">Wiring an LLM to a browser is a one-day demo.<br />
  <span class="grad">Closing the gap to production is this project.</span></span>
</div>

<!--
~1 min. This is the thesis statement of the whole defense.
Left: the technological window that makes the migration possible *now*.
Right: what an enterprise still demands — and what a raw LLM agent cannot give.
"The contribution is not 'an LLM that browses'. It's the system around it."
-->
