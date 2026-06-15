<div class="kicker">Self-healing</div>

## UI drift is not an incident

<div class="mt-8 flex items-center justify-center gap-2 text-sm">
  <div class="card-teal !py-2 !px-4 text-center">
    <div class="font-bold text-teal-800 dark:text-teal-200">skill v1 · active</div>
    <div class="text-[0.65rem] op60">replaying happily</div>
  </div>
  <carbon:arrow-right class="flow-arrow" />
  <div v-click class="card !py-2 !px-4 text-center">
    <div class="font-bold">site redesign</div>
    <div class="text-[0.65rem] op60">replay fails ×1 ×2 <b class="text-amber-700 dark:text-amber-300">×3</b></div>
  </div>
  <carbon:arrow-right class="flow-arrow" />
  <div v-click class="card !py-2 !px-4 text-center opacity-70">
    <div class="font-bold">disabled</div>
    <div class="text-[0.65rem] op60">automatically · v1 kept</div>
  </div>
  <carbon:arrow-right class="flow-arrow" />
  <div v-click class="card-amber !py-2 !px-4 text-center">
    <div class="font-bold text-amber-700 dark:text-amber-300">agent path</div>
    <div class="text-[0.65rem] op60">next request re-learns</div>
  </div>
  <carbon:arrow-right class="flow-arrow" />
  <div v-click class="card-teal !py-2 !px-4 text-center">
    <div class="font-bold text-teal-800 dark:text-teal-200">skill v2 · active</div>
    <div class="text-[0.65rem] op60">replaying again</div>
  </div>
</div>

<div v-click class="mt-10 text-center text-xl font-bold leading-snug">
  Cost of a site redesign: <span class="text-amber-600 dark:text-amber-400">one agent-path run.</span><br />
  <span class="text-base op70 font-normal">≈ ten cents — instead of a ticket, an engineer, and an afternoon.</span>
</div>

<!--
~1 min. The punchline to UiPath's biggest pain. Walk the chain once.
"Three strikes — the skill retires itself. The next request falls back to the agent,
which re-authors a fresh version. No human in the loop."
Versioning is additive: v1 is kept as superseded, because a replacement isn't guaranteed better.
-->
