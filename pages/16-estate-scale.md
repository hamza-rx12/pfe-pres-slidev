<div class="kicker">Results <span class="op50">· At estate scale</span></div>

## From a dollar a run… to a cent

<div class="text-sm op70 mt-1 text-center max-w-3xl mx-auto">
  On live sites, replay ran <b class="text-teal-700 dark:text-teal-300">×12 cheaper</b> · <b class="text-teal-700 dark:text-teal-300">×4 faster</b> · <b>16 / 16 succeeded</b>. At estate scale, that compounds:
</div>

<div class="grid grid-cols-2 gap-5 mt-4 text-center">
  <div class="card-amber !py-5">
    <div class="text-sm op70 mb-1">today — UiPath licensing, per run</div>
    <div class="stat-big text-amber-700 dark:text-amber-300">≈ $1</div>
    <div class="text-xs op60 mt-2">8 robots + orchestrator · $120–180k / yr — paid busy or idle</div>
  </div>
  <div v-click class="card-teal !py-5">
    <div class="text-sm op70 mb-1"><span class="brag">brag</span> — replayed run, model spend</div>
    <div class="stat-big text-teal-700 dark:text-teal-300">≈ 1¢</div>
    <div class="text-xs op60 mt-2">pay per run, not per machine — cost follows use</div>
  </div>
</div>

<div v-click class="mt-5">
  <div class="text-sm op70 mb-2 text-center">a year of estate traffic — ≈ <b><VCount :to="146000" separator :duration="1200" :at="2" /></b> runs</div>
  <div class="grid grid-cols-3 gap-3 text-center text-sm">
    <div class="card !py-3"><div class="text-xl font-extrabold">$120–180k</div><div class="text-xs op60 mt-1">current licensing</div></div>
    <div class="card !py-3"><div class="text-xl font-extrabold text-amber-700 dark:text-amber-300">≈ $<VCount :to="13900" separator :duration="1600" :at="2" /></div><div class="text-xs op60 mt-1">worst case: agent on <i>every</i> run → already ÷10</div></div>
    <div class="card !py-3"><div class="text-xl font-extrabold text-teal-700 dark:text-teal-300">≈ $<VCount :to="1500" separator :duration="1600" :at="2" /></div><div class="text-xs op60 mt-1">steady state: 95–98% replay → <b class="whitespace-nowrap">÷50–100</b></div></div>
  </div>
</div>

<div v-click class="footnote mt-4 text-center">
  model spend only, projected from measured medians · machines excluded on both sides — but brag's are ordinary replicas, not certified licensed hosts.
</div>

<!--
~1.5 min. The slide a jury remembers. Land the per-run contrast first: a dollar vs a cent.
Then the year: even the absolute worst case — every run on the agent path, replay never
used — is about a tenth of the licensing bill. Steady state is 50–100× below it.
And it's a different KIND of cost: per-use, not per-capacity. Close with the honest caveats.
-->
