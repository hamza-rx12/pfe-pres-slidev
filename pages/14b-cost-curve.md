<div class="kicker">Results <span class="op50">· The economics</span></div>

## The gap compounds with every repeat

<div class="text-sm op70 mt-1 mb-3 max-w-3xl">
  The same task, run again and again — cumulative model spend. A naive agent pays the full price
  every time; <span class="brag">brag</span> pays it <b>once</b>, to learn, then almost nothing.
</div>

<CostCurve />

<div class="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm">
  <span><b class="text-amber-700 dark:text-amber-300">$0.095</b> <span class="op60">per run, agent</span></span>
  <span class="op30">→</span>
  <span><b class="text-teal-700 dark:text-teal-300">$0.008</b> <span class="op60">per run, replay</span></span>
  <span class="op30">·</span>
  <span class="op70">at 20 runs: <b>$1.90</b> vs <b class="text-teal-700 dark:text-teal-300">$0.25</b> — and it keeps widening</span>
</div>

<!--
~45 s. This is the whole economic argument in one picture. Both paths pay the same first run —
that's the agent learning the skill. After that the agent keeps paying $0.095 every time, while
replay drops to $0.008. The more a task recurs — exactly the profile of an RPA estate — the
closer the average cost falls to the replay floor. Projected from the measured medians.
-->
