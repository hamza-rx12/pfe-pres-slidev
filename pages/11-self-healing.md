<div class="kicker">How it works <span class="op50">· Self-healing</span></div>

## UI drift is not an incident — it's the next request

<SelfHealLoop />

<div class="text-center text-base font-bold mt-2" v-click="5">
  Cost of a site redesign: <span class="text-amber-600 dark:text-amber-400">one agent-path run</span> — about ten cents,
  <span class="op70 font-normal">not a ticket, an engineer, and an afternoon.</span>
</div>

<!--
~1 min. Walk the ring once, clockwise. Replay runs the skill deterministically. The site
gets redesigned — replay fails three times and the skill retires itself (v1 kept, not
overwritten). The next request falls back to the agent path, which solves it fresh and
authors v2. Replay resumes. The loop closes with no human in it. [click 5] So a redesign —
UiPath's worst day — costs one agent run here.
-->
