<div class="kicker">Results <span class="op50">· Measured on live sites</span></div>

## Replay vs agent — on live sites

<div class="grid grid-cols-[1.5fr_1fr] gap-6 mt-4">

<div class="space-y-3">
  <DuelBar label="github.com" :a="0.050" :b="0.008" :max="0.15" aLabel="$0.050" bLabel="$0.008" mult="×6 cheaper" :delay="0" />
  <DuelBar label="crates.io" :a="0.048" :b="0.006" :max="0.15" aLabel="$0.048" bLabel="$0.006" mult="×8 cheaper" :delay="200" />
  <DuelBar label="bbc.com" :a="0.095" :b="0.010" :max="0.15" aLabel="$0.095" bLabel="$0.010" mult="×10 cheaper" :delay="400" />
  <DuelBar label="saucedemo · 15-step checkout" :a="0.140" :b="0.005" :max="0.15" aLabel="$0.140" bLabel="$0.005" mult="×26 cheaper" :delay="600" />
  <div class="flex gap-4 text-[0.65rem] op60 mt-1">
    <span><span class="inline-block w-2.5 h-2.5 rounded-sm mr-1" style="background:rgba(245,158,11,.85)"></span>agent path (median $/run)</span>
    <span><span class="inline-block w-2.5 h-2.5 rounded-sm mr-1" style="background:rgba(45,212,191,.85)"></span>replay path (median $/run)</span>
  </div>
</div>

<div class="flex flex-col justify-center gap-4">
  <div>
    <div class="stat-big text-teal-700 dark:text-teal-300">×<VCount :to="12" :duration="1400" /></div>
    <div class="text-sm op70">cheaper at the median</div>
  </div>
  <div>
    <div class="stat-big text-teal-700 dark:text-teal-300">×<VCount :to="4" :duration="1400" /></div>
    <div class="text-sm op70">faster at the median</div>
  </div>
  <div>
    <div class="stat-big text-teal-700 dark:text-teal-300"><VCount :to="16" :duration="1400" />/16</div>
    <div class="text-sm op70">replays succeeded — zero failures</div>
  </div>
</div>

</div>

<div v-click class="footnote mt-4 pr-16">
  31 successful runs recorded against live sites during development (15 agent + 16 replays; 5 exploratory agent-path runs failed) — preliminary; the systematic p50/p95 benchmark is scoped and the system is fully instrumented for it.
  Budgets never bound: the worst run used ⅔ of its time ceiling. The saving grows with workflow length — exactly the profile of an RPA estate.
</div>

<!--
~1.5 min. Let the bars race — pause two seconds before speaking.
Key sentence: "the longer the workflow, the more navigation replay removes" —
saucedemo's 15-step checkout is the most RPA-like task in the set, and it's the 26× one.
Be honest about sample size (the footnote) — it builds trust with the jury, and the
instrumentation for the full benchmark already ships in every trace row.
-->
