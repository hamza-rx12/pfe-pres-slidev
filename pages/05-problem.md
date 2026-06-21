<div class="kicker">The problem <span class="op50">· RPA's limits</span></div>

## Why the robots had to go

<div class="text-sm op70 mb-6">It works — until you need it to change.</div>

<div class="grid grid-cols-2 gap-4">
  <div v-click class="lcard">
    <div class="lic"><carbon:locked /></div>
    <div>
      <div class="lt">Can't move</div>
      <div class="ls">one robot, licensed to one machine</div>
    </div>
  </div>
  <div v-click class="lcard">
    <div class="lic"><carbon:currency-dollar /></div>
    <div>
      <div class="lt">$120–180k / year</div>
      <div class="ls">paid whether busy or idle</div>
    </div>
  </div>
  <div v-click class="lcard">
    <div class="lic"><carbon:cursor-1 /></div>
    <div>
      <div class="lt">Breaks on a redesign</div>
      <div class="ls">finds buttons by where they sit</div>
    </div>
  </div>
  <div v-click class="lcard">
    <div class="lic"><carbon:flash /></div>
    <div>
      <div class="lt">One fails, all stop</div>
      <div class="ls">no machine to reclaim the work</div>
    </div>
  </div>
</div>

<div v-click class="mt-7 text-center text-xl font-bold">
  It memorises <span class="text-amber-600 dark:text-amber-400">where</span> things are —
  never <span class="text-teal-700 dark:text-teal-300">what they mean</span>.
</div>

<style scoped>
.lcard {
  display: flex;
  align-items: center;
  gap: 0.95rem;
  padding: 1rem 1.2rem;
  border-radius: 0.9rem;
  border: 1px solid rgba(20, 40, 90, 0.12);
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 10px 26px -16px rgba(20, 40, 90, 0.35);
}
html.dark .lcard {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 10px 26px -16px rgba(0, 0, 0, 0.5);
}
.lic {
  flex-shrink: 0;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 0.7rem;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  color: var(--brag-amber);
  background: rgba(217, 119, 6, 0.1);
  border: 1px solid rgba(217, 119, 6, 0.22);
}
html.dark .lic {
  background: rgba(245, 158, 11, 0.12);
  border-color: rgba(245, 158, 11, 0.25);
}
.lt {
  font-weight: 700;
  font-size: 1.12rem;
  line-height: 1.1;
}
.ls {
  font-size: 0.8rem;
  opacity: 0.58;
  margin-top: 0.2rem;
}
</style>

<!--
~1 min. Four limits, one root cause. Don't read the cards — point at each: can't move,
paid by capacity, breaks on a redesign, single point of failure. Then land the line:
it memorises where, not what. That one idea sets up the whole solution — semantic perception.
-->
