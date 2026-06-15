<div class="kicker">Observability</div>

## Every run, watchable live

<div class="grid grid-cols-[1.5fr_1fr] gap-3 mt-3">
  <img src="../assets/screenshots/dashboard-dark.png" class="shot w-full self-start" alt="brag-ui dashboard" />
  <div class="flex flex-col gap-3">
    <img src="../assets/screenshots/send-live-timeline.png" class="shot w-full max-h-36 object-cover object-top" alt="live task timeline" />
    <img src="../assets/screenshots/skill-detail.png" class="shot w-full max-h-36 object-cover object-top" alt="skill catalogue detail" />
  </div>
</div>

<div class="flex flex-wrap gap-2 mt-3 justify-center">
  <span class="chip"><carbon:view /> live SSE timeline per task</span>
  <span class="chip"><carbon:document /> full trace &amp; cost for any past run</span>
  <span class="chip"><carbon:close /> one-click skill disable</span>
  <span class="chip"><carbon:meter /> worker fleet via heartbeats</span>
</div>

<!--
~0:40. brag-ui, SvelteKit. "An agent you can't watch is an agent you can't trust in production."
Dashboard: volume, success rate, latency, spend. Live timeline: every step as it happens.
Skill catalogue: import/export, one-click disable. The admin token never reaches the
browser — the console's server proxies everything. Keyed to brag's own concepts:
skills, budgets, execution paths — not generic logging.
-->
