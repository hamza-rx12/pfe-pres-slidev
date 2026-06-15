<div class="kicker">Backup · budgets in practice</div>

## Ceilings are backstops, not brakes

<div class="mt-6 space-y-4 max-w-3xl">
  <div>
    <div class="flex justify-between text-sm mb-1"><span class="font-mono">wall-clock · ceiling 300 s</span><span class="op60">median 52 s · worst 200 s</span></div>
    <div class="bar-bg"><div class="bar-worst" style="width: 66.5%"></div><div class="bar-med" style="width: 17.3%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-sm mb-1"><span class="font-mono">iterations · ceiling 40</span><span class="op60">median 4 · worst 24</span></div>
    <div class="bar-bg"><div class="bar-worst" style="width: 60%"></div><div class="bar-med" style="width: 10%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-sm mb-1"><span class="font-mono">cost · ceiling $0.80</span><span class="op60">median $0.09 · worst $0.33</span></div>
    <div class="bar-bg"><div class="bar-worst" style="width: 41.7%"></div><div class="bar-med" style="width: 11.8%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-sm mb-1"><span class="font-mono">input tokens · ceiling 700k</span><span class="op60">median 10.5k · worst 47k</span></div>
    <div class="bar-bg"><div class="bar-worst" style="width: 6.7%"></div><div class="bar-med" style="width: 1.5%"></div></div>
  </div>
</div>

<div class="mt-5 text-sm op75">
  <span class="inline-block w-2.5 h-2.5 rounded-sm mr-1" style="background:rgba(45,212,191,.85)"></span>median run ·
  <span class="inline-block w-2.5 h-2.5 rounded-sm ml-3 mr-1" style="background:rgba(245,158,11,.4)"></span>worst run —
  no recorded run was ever cut off; the loop stops itself when the task is done.
</div>

<style>
.bar-bg { position: relative; height: 1rem; border-radius: 0.3rem; background: var(--track-bg); overflow: hidden; }
.bar-med, .bar-worst { position: absolute; top: 0; left: 0; height: 100%; border-radius: 0.3rem; }
.bar-worst { background: rgba(245,158,11,.4); }
.bar-med { background: rgba(45,212,191,.85); }
</style>

<!--
For: "what happens when a budget is hit / are the caps realistic?"
Teal = median run, amber = worst run, against each ceiling. The priciest run used under
half its cost cap. Cost is the primary cap; tokens stay as a backup that still fires
if a model's price is ever missing from the pricing table.
-->
