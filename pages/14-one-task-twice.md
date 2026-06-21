<div class="kicker">Results <span class="op50">· One task, twice</span></div>

## The same task — the first time, and every time after

<div class="flex justify-center mt-1 mb-5">
  <div class="pill-task">"list repos for user hamza-rx12" — submitted over A2A</div>
</div>

<div class="grid grid-cols-[1fr_auto_1fr] gap-3 items-stretch">

  <div v-click="1" class="card-amber flex flex-col">
    <div class="flex items-center gap-2 mb-1"><carbon:bot class="text-amber-600 dark:text-amber-400" /><b class="text-amber-700 dark:text-amber-300">First run — the agent works it out</b></div>
    <div class="stat-big text-amber-700 dark:text-amber-300">$<VCount :to="0.043" :decimals="3" :duration="1500" :at="1" /></div>
    <div class="text-sm op80 mt-2 space-y-1">
      <div><carbon:time class="inline mr-1 op60" /><b>20.5 s</b> · 2 tool calls</div>
      <div><carbon:bot class="inline mr-1 op60" />the model decides every step</div>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center px-1">
    <div v-click="2" class="text-center">
      <carbon:arrow-right class="text-3xl text-amber-500/70" />
      <div class="chip chip-amber mt-1 mx-auto">skill saved</div>
      <div class="text-[0.58rem] op50 mt-1 font-mono">propose_skill</div>
    </div>
  </div>

  <div v-click="3" class="card-teal flex flex-col">
    <div class="flex items-center gap-2 mb-1"><carbon:repeat class="text-teal-700 dark:text-teal-300" /><b class="text-teal-800 dark:text-teal-200">Every run after — just replay</b></div>
    <div class="stat-big text-teal-700 dark:text-teal-300">$<VCount :to="0.0078" :decimals="4" :duration="1500" :at="3" /></div>
    <div class="text-sm op80 mt-2 space-y-1">
      <div><carbon:time class="inline mr-1 op60" /><b>9.7 s</b> · the saved steps, in order</div>
      <div><carbon:checkmark class="inline mr-1 op60" /><b>0</b> model calls · identical 24 repos</div>
    </div>
  </div>

</div>

<div v-click="4" class="mt-5 text-center text-base">
  <b class="text-teal-700 dark:text-teal-300">÷5.6 the cost · ×2 the speed</b> — and a two-step task is replay's <b>worst case</b>.
  The 15-step checkout? <b class="text-teal-700 dark:text-teal-300">26× cheaper · 3.5× faster.</b>
</div>

<!--
~1.5 min. Real persisted rows, not a mock. [1] First run: the agent explores and succeeds —
4¢, 20 s, model in every step. [2] On success it writes the skill down. [3] Every later run
replays those exact steps — no model at all, a tenth the cost, same 24 repos. [4] And this is
the FLOOR: two steps leave replay little to remove. The longer the workflow, the bigger the
win — which the next slide generalises.
-->
