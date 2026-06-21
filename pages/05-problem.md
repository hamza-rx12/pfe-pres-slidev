<div class="kicker">The problem <span class="op50">· RPA's limits</span></div>

## Why the robots had to go

<div class="text-sm op70 mb-4">The UiPath estate works — until you need it to change.</div>

<div class="grid grid-cols-2 gap-3">
  <div v-click class="card">
    <div class="flex items-center gap-2 mb-1"><carbon:locked class="text-amber-600 dark:text-amber-400" /><b>One robot, one machine</b></div>
    <div class="text-sm op75">Each robot is licensed &amp; certified for a single physical machine. It cannot move. Ever.</div>
  </div>
  <div v-click class="card">
    <div class="flex items-center gap-2 mb-1"><carbon:currency-dollar class="text-amber-600 dark:text-amber-400" /><b>Priced by capacity, not by use</b></div>
    <div class="text-sm op75"><b class="text-amber-700 dark:text-amber-300">$120–180k / year</b> in licences — paid whether robots are busy or idle. More load = buy more machines.</div>
  </div>
  <div v-click class="card">
    <div class="flex items-center gap-2 mb-1"><carbon:warning-alt class="text-amber-600 dark:text-amber-400" /><b>Selectors pinned to positions</b></div>
    <div class="text-sm op75">Scripts find buttons by <i>where they sit</i>. A cosmetic redesign = a broken robot = a maintenance ticket.</div>
  </div>
  <div v-click class="card">
    <div class="flex items-center gap-2 mb-1"><carbon:flash class="text-amber-600 dark:text-amber-400" /><b>Single points of failure</b></div>
    <div class="text-sm op75">One machine fails → every process pinned to it halts. No other machine can reclaim the work.</div>
  </div>
</div>

<div v-click class="mt-5 text-center text-lg font-bold">
  Root cause: automation that memorises <span class="text-amber-600 dark:text-amber-400">where</span> things are —
  not <span class="text-teal-700 dark:text-teal-300">what they mean</span>.
</div>

<!--
~1 min. Four limits, one root cause: the rigid coupling robot↔licence↔machine,
plus position-based perception. Land the closing line hard — it sets up the whole
solution: semantic perception.
-->
