<div class="kicker">Results <span class="op50">· One task, twice</span></div>

## The same task, twice

<div class="flex justify-center mt-2 mb-4">
  <div class="pill-task">"list repos for user hamza-rx12" — submitted over A2A, twice</div>
</div>

<div class="grid grid-cols-[1fr_auto_1fr] gap-4 items-stretch">

<div v-click="1" class="card-amber">
  <div class="flex items-center gap-2 mb-2"><carbon:bot class="text-amber-600 dark:text-amber-400" /><b class="text-amber-700 dark:text-amber-300">Run 1 — agent learns</b></div>
  <div class="stat-big text-amber-700 dark:text-amber-300">$<VCount :to="0.043" :decimals="3" :duration="1600" :at="1" /></div>
  <div class="text-sm op80 mt-2 space-y-1">
    <div><carbon:time class="inline mr-1 op60" /><b>20.5 s</b> · 2 tool calls</div>
    <div><carbon:bot class="inline mr-1 op60" />model decides each step</div>
    <div class="text-teal-700 dark:text-teal-300"><carbon:document class="inline mr-1" />+ 1 skill authored</div>
  </div>
</div>

<div class="flex flex-col items-center justify-center gap-2">
  <div v-click="3" class="chip chip-teal text-base !font-extrabold">÷ 5.6 cost</div>
  <div v-click="3" class="chip chip-teal text-base !font-extrabold">× 2 speed</div>
</div>

<div v-click="2" class="card-teal">
  <div class="flex items-center gap-2 mb-2"><carbon:repeat class="text-teal-700 dark:text-teal-300" /><b class="text-teal-800 dark:text-teal-200">Run 2 — replay remembers</b></div>
  <div class="stat-big text-teal-700 dark:text-teal-300">$<VCount :to="0.0078" :decimals="4" :duration="1600" :at="2" /></div>
  <div class="text-sm op80 mt-2 space-y-1">
    <div><carbon:time class="inline mr-1 op60" /><b>9.7 s</b> · fixed steps</div>
    <div><carbon:checkmark class="inline mr-1 op60" /><b>0</b> model calls in navigation</div>
    <div><carbon:checkmark class="inline mr-1 op60" />identical result — 24 repos</div>
  </div>
</div>

</div>

<div v-click="4" class="mt-5 text-center text-base">
  And a two-step task is replay's <b>worst case</b>. The 15-step checkout?
  <b class="text-teal-700 dark:text-teal-300">26× cheaper · 3.5× faster.</b>
</div>

<!--
~1.5 min. Real persisted artifacts, not a mock — every number is quoted from database rows.
[click] Learn run: explores, succeeds, proposes the skill.
[click] Replay: routed by the classifier, parameters derived, steps walked. Same 24 repos.
[click] 5.6× / 2× — and crucially this is the FLOOR: two steps leave replay little to remove.
[click] The longer the workflow, the bigger the saving → next slide generalises.
-->
