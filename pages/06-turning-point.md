<div class="kicker">The problem <span class="op50">· The turning point</span></div>

## LLMs changed what's <i>possible</i> — not what's <i>required</i>

<div class="grid grid-cols-2 gap-4 mt-6">

<div v-click class="card-teal flex flex-col justify-center">
  <div class="flex items-center gap-2 mb-2"><carbon:idea class="text-teal-700 dark:text-teal-300" /><b class="text-teal-800 dark:text-teal-200">Now: reads meaning, not position</b></div>
  <div class="text-sm op85 leading-relaxed">
    An LLM finds <b>"the Login button"</b> by what it is — wherever a redesign moved it.
  </div>
  <div class="mt-3 text-xs op60">A real browser agent is finally possible.</div>
</div>

<div v-click class="card-amber">
  <div class="flex items-center gap-2 mb-3"><carbon:warning-alt class="text-amber-700 dark:text-amber-300" /><b class="text-amber-800 dark:text-amber-200">But on its own, an agent is —</b></div>
  <div class="grid grid-cols-2 gap-x-5 gap-y-3">
    <div><div class="flaw">Unpredictable</div><div class="why">a new path every run</div></div>
    <div><div class="flaw">Expensive</div><div class="why">the model on every click</div></div>
    <div><div class="flaw">Slow</div><div class="why">a round-trip per action</div></div>
    <div><div class="flaw">Opaque</div><div class="why">a chat log isn't a trace</div></div>
  </div>
</div>

</div>

<div v-click class="mt-7 text-center text-xl font-bold leading-snug">
  An LLM in a browser is a <span class="op60 font-normal">one-day demo</span>.<br />
  Making it <span class="grad">production-grade</span> is this project.
</div>

<style scoped>
.flaw {
  font-weight: 700;
  font-size: 1.02rem;
  color: #b45309;
}
html.dark .flaw { color: #fcd34d; }
.why {
  font-size: 0.74rem;
  opacity: 0.62;
  margin-top: 0.05rem;
}
</style>

<!--
~1 min. The thesis of the defense. Left: the window that just opened — an LLM reads a page
by meaning, the exact thing RPA couldn't, so a browser agent is finally feasible. Right: but
raw, it's unpredictable, expensive, slow, and opaque — the four things production won't accept.
Closing line: anyone can wire an LLM to a browser in a day; closing the gap to production is
the work.
-->
