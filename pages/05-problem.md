<div class="kicker">The problem <span class="op50">· RPA's limits</span></div>

## Why the robots had to go

<div class="text-sm op70 mb-6">The UiPath estate works — until you need it to <i>change</i>. Its limits come in two families.</div>

<div class="grid grid-cols-2 gap-x-12">
  <div v-click>
    <div class="fam-head"><carbon:locked class="fam-ic" />Pinned to a machine</div>
    <div class="fam-root">each robot is licensed and certified to one physical host — it cannot move</div>
    <ul class="lim">
      <li>can't scale on demand — more load means buying and licensing more machines</li>
      <li>priced by capacity, not use — <b class="text-amber-700 dark:text-amber-300">$120–180k / year</b>, idle or busy</li>
      <li>that host fails → every process on it halts, with no failover</li>
    </ul>
  </div>
  <div v-click>
    <div class="fam-head"><carbon:cursor-1 class="fam-ic" />Pinned to a position</div>
    <div class="fam-root">scripts locate controls by where they sit on the screen</div>
    <ul class="lim">
      <li>a cosmetic redesign breaks a working robot</li>
      <li>every interface drift becomes a hand-written fix</li>
      <li>maintenance grows with the estate, not with its value</li>
    </ul>
  </div>
</div>

<div v-click class="mt-7 text-center text-lg font-bold">
  Rigid by construction — bound to a <span class="text-amber-600 dark:text-amber-400">machine</span>, and to a <span class="text-amber-600 dark:text-amber-400">pixel</span>.
  Change anything, and it breaks — or it can't keep up.
</div>

<style scoped>
.fam-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.08rem;
  margin-bottom: 0.5rem;
}
.fam-ic {
  font-size: 1.2rem;
  color: var(--brag-amber);
}
.fam-root {
  font-size: 0.85rem;
  font-style: italic;
  opacity: 0.62;
  padding-bottom: 0.7rem;
  margin-bottom: 0.7rem;
  border-bottom: 1px solid rgba(20, 40, 90, 0.1);
}
html.dark .fam-root { border-color: rgba(255, 255, 255, 0.1); }
.lim {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.lim li {
  position: relative;
  padding-left: 1.1rem;
  font-size: 0.88rem;
  opacity: 0.82;
  line-height: 1.35;
}
.lim li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 0.5rem;
  height: 1.5px;
  background: var(--brag-amber);
  opacity: 0.7;
}
</style>

<!--
~1 min. Two families of limits, one theme: rigidity. Family one — the robot↔licence↔machine
coupling: no on-demand scaling, capacity pricing, single points of failure. Family two —
position-based selectors: a redesign breaks it, every drift is a ticket. Land the closing
line: rigid by construction. That sets up the turning point — perception by meaning.
-->
