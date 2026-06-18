<div class="kicker">The problem <span class="op50">· The engagement</span></div>

## One layer of a three-layer migration

<div class="text-sm op80 mt-4 max-w-4xl">
  Orange runs <b>50+ business processes</b> on UiPath. Neo Tech IT's answer isn't to patch it —
  it's to replace it with autonomous AI agents, split across <b>three layers</b>, one engineer owning each.
</div>

<div class="grid grid-cols-3 gap-4 mt-6 items-stretch">
  <div v-click class="card opacity-70 flex flex-col">
    <div class="font-mono text-xs op55 mb-1.5">Business layer</div>
    <div class="text-sm">an agent that triages &amp; resolves business- and technical-error e-mails</div>
  </div>
  <div v-click class="card-amber flex flex-col">
    <div class="font-mono text-xs text-amber-700 dark:text-amber-300 mb-1.5">App layer · this project</div>
    <div class="text-sm"><b>the browser-driving execution engine</b> — the direct replacement for UiPath</div>
  </div>
  <div v-click class="card opacity-70 flex flex-col">
    <div class="font-mono text-xs op55 mb-1.5">OS layer</div>
    <div class="text-sm">a system agent for Windows-level remediation</div>
  </div>
</div>

<div v-click class="mt-6 text-center text-base">
  I owned the <b class="text-amber-600 dark:text-amber-400">App Layer</b> end-to-end —
  <span class="op80">architecture through to a working prototype, Feb → Jul 2026.</span>
</div>

<!--
~1 min. The migration was deliberately NOT one monolith — three layers, each its own
agent, each owned by one engineer. Mine is the App Layer: the most direct UiPath
replacement (web-driving execution). "End-to-end means I made the design decisions,
not just the code." Business and OS ran in parallel by colleagues; they only bound my
scope (the Business Layer is an upstream caller that hands work to mine).
-->
