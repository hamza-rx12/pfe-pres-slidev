<div class="kicker">How it works <span class="op50">· The agent path</span></div>

## Six tools, four ceilings

<div class="grid grid-cols-[1.15fr_1fr] gap-5 mt-4">

<div>
  <div class="card mb-3">
    <div class="text-sm font-bold mb-2">The loop</div>
    <div class="flex items-center gap-2 text-sm">
      <span class="chip chip-amber">snapshot page</span>
      <carbon:arrow-right class="op50" />
      <span class="chip chip-amber">model picks a tool</span>
      <carbon:arrow-right class="op50" />
      <span class="chip chip-amber">browser executes</span>
    </div>
    <div class="text-xs op60 mt-2">…repeat until <span class="font-mono">done</span> — or until a budget says stop.</div>
  </div>
  <div class="text-sm op80 mb-1.5">Six tools. That's the whole surface:</div>
  <div class="flex flex-wrap gap-1.5">
    <span class="chip font-mono">goto</span>
    <span class="chip font-mono">act</span>
    <span class="chip font-mono">snapshot</span>
    <span class="chip font-mono">extract</span>
    <span class="chip font-mono">propose_skill</span>
    <span class="chip font-mono">done</span>
  </div>
  <div class="text-xs op60 mt-2">a few hundred tokens of definitions — vs 25+ tools on a Playwright MCP server</div>
</div>

<div v-click class="card-amber">
  <div class="text-sm font-bold text-amber-800 dark:text-amber-200 mb-2.5">Every run inside a sealed envelope</div>
  <div class="text-sm space-y-1.5">
    <div class="flex justify-between"><span><carbon:renew class="inline mr-1 op60" />iterations</span><b class="font-mono">≤ 40</b></div>
    <div class="flex justify-between"><span><carbon:document class="inline mr-1 op60" />input tokens</span><b class="font-mono">≤ 700k</b></div>
    <div class="flex justify-between"><span><carbon:time class="inline mr-1 op60" />wall-clock</span><b class="font-mono">≤ 300 s</b></div>
    <div class="flex justify-between"><span><carbon:currency-dollar class="inline mr-1 op60" />cost</span><b class="font-mono">≤ $0.80</b></div>
  </div>
  <div class="text-xs op70 mt-3 border-t border-amber-600/40 dark:border-amber-400/30 pt-2">
    checked <b>before every tool dispatch</b> · hit a ceiling → clean stop + full trace
  </div>
</div>

</div>

<div v-click class="mt-4 text-sm op75 text-center">
  + layered prompt caching: the stable prompt is ~free — <b class="text-teal-700 dark:text-teal-300">50–93%</b> of context tokens served from cache on real runs
</div>

<!--
~1 min. Two messages: the surface is deliberately tiny (lean = cheap = controllable),
and nothing runs unbounded — cost is the primary cap, the rest are backstops.
Spoken metaphor: "think of it as an intern with a corporate card — and a hard limit."
On the MCP line, say: "MCP — Model Context Protocol, the open standard for describing
the tools an agent can call."
"An enterprise can't sign off on 'the AI will probably stop'. It signs off on a hard $0.80 ceiling."
-->
