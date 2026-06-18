<div class="kicker">What's next <span class="op50">· Limits &amp; roadmap</span></div>

## Honest limits, concrete next steps

<div class="grid grid-cols-2 gap-5 mt-5">

<div v-click>
  <div class="text-sm font-bold mb-2 text-amber-700 dark:text-amber-300">What it isn't (yet)</div>
  <div class="text-sm space-y-1.5 op85">
    <div><carbon:warning-alt class="inline text-amber-600 dark:text-amber-400 mr-1.5" />heavy redesigns still cost one agent re-learn run</div>
    <div><carbon:warning-alt class="inline text-amber-600 dark:text-amber-400 mr-1.5" />single LLM provider (Anthropic) — by scoped choice</div>
    <div><carbon:warning-alt class="inline text-amber-600 dark:text-amber-400 mr-1.5" />single trust boundary — no multi-tenant admin yet</div>
    <div><carbon:warning-alt class="inline text-amber-600 dark:text-amber-400 mr-1.5" />replay vocabulary: goto · act · extract — no wait/assert</div>
    <div><carbon:warning-alt class="inline text-amber-600 dark:text-amber-400 mr-1.5" />numbers are preliminary until the systematic benchmark</div>
  </div>
</div>

<div v-click>
  <div class="text-sm font-bold mb-2 text-teal-700 dark:text-teal-300">Next</div>
  <div class="text-sm space-y-1.5 op85">
    <div><carbon:arrow-right class="inline text-teal-700 dark:text-teal-300 mr-1.5" />operator retry workflow — the trace data is already in PostgreSQL</div>
    <div><carbon:arrow-right class="inline text-teal-700 dark:text-teal-300 mr-1.5" />cluster deployment — Helm, Argo CD, Terraform</div>
    <div><carbon:arrow-right class="inline text-teal-700 dark:text-teal-300 mr-1.5" />the p50/p95 benchmark on a fixed task set</div>
    <div class="op60 pt-1.5 border-t border-black/10 dark:border-white/10">then: provider abstraction · OpenTelemetry GenAI export · multi-tenant surface · human-demonstration skill authoring</div>
  </div>
</div>

</div>

<!--
~1 min. Naming the limits before the jury does is a strength move.
Each limit is bounded and has a planned answer. The near-term items are scoped within
the remaining engagement weeks; the four long-term directions are recorded as perspectives.
-->
