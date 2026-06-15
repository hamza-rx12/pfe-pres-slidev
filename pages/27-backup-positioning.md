<div class="kicker">Backup · state of the art</div>

## Where <span class="brag">brag</span> sits — and what it deliberately avoids

<div class="grid grid-cols-2 gap-5 mt-5">

<div>
  <div class="text-sm font-bold mb-2">Three families of LLM browser agents</div>
  <div class="space-y-2 text-sm">
    <div class="card !py-2 opacity-60">
      <b>Vision-only</b> — screenshots → mouse/keyboard
      <div class="text-xs op70 mt-0.5">Anthropic Computer Use, OpenAI Operator · token-heavy, pixel-imprecise</div>
    </div>
    <div class="card !py-2 opacity-60">
      <b>DOM-only</b> — raw HTML as text
      <div class="text-xs op70 mt-0.5">no widely deployed system · brittle, unwieldy</div>
    </div>
    <div class="card-teal !py-2">
      <b class="text-teal-800 dark:text-teal-200">AX-tree + small tool set</b> — semantic &amp; cheap
      <div class="text-xs op85 mt-0.5">browser-use, <span class="brag">brag</span> · stable under drift — and brag adds <b>learn-once / replay-forever</b>, which none of these have</div>
    </div>
  </div>
</div>

<div>
  <div class="text-sm font-bold mb-2">Deliberate exclusions</div>
  <div class="text-sm space-y-1.5 op85">
    <div><carbon:close class="inline text-amber-600 dark:text-amber-400 mr-1.5" /><b>No Claude Agent SDK</b> — direct Anthropic SDK loop; no per-request subprocess</div>
    <div><carbon:close class="inline text-amber-600 dark:text-amber-400 mr-1.5" /><b>No Playwright MCP server</b> — 25+ token-heavy tool definitions vs brag's six</div>
    <div><carbon:close class="inline text-amber-600 dark:text-amber-400 mr-1.5" /><b>No LangChain / orchestration framework</b> — the loop is ~plain Python, fully inspectable</div>
    <div><carbon:close class="inline text-amber-600 dark:text-amber-400 mr-1.5" /><b>No vector database</b> — a skill is found by exact lookup on (domain, intent), not similarity search</div>
  </div>
  <div class="text-xs op60 mt-3 border-t border-black/10 dark:border-white/10 pt-2">
    Each building block exists in isolation in the literature (ReAct loop, Voyager-style skill
    library, MCP-shaped manifests, A2A, GenAI observability) — the contribution is their
    integration into one production-shape system.
  </div>
</div>

</div>

<!--
For: "why didn't you use browser-use / Operator / LangChain?" — the answer is the right
column: every exclusion bought either tokens, determinism, or debuggability. And the
positioning line at the bottom is the thesis's contribution claim — integration, not invention.
-->
