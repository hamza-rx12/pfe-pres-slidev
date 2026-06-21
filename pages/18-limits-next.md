<div class="kicker">What's next <span class="op50">· Limits &amp; roadmap</span></div>

## Honest limits, concrete next steps

<div class="grid grid-cols-2 gap-8 mt-6">
  <div v-click>
    <div class="col-head head-amber"><carbon:warning-alt /> What it isn't — yet</div>
    <ul class="rlist rlist-amber">
      <li>a heavy redesign costs one re-learn run</li>
      <li>one LLM provider — Anthropic, by choice</li>
      <li>single tenant — no multi-tenant admin</li>
      <li>replay verbs: goto · act · extract — no wait / assert</li>
      <li>numbers preliminary until the full benchmark</li>
    </ul>
  </div>
  <div v-click>
    <div class="col-head head-teal"><carbon:arrow-right /> What's next</div>
    <ul class="rlist rlist-teal">
      <li>operator retry workflow — the data's already in Postgres</li>
      <li>real cluster deploy — Helm · Argo CD · Terraform</li>
      <li>the p50 / p95 benchmark on a fixed task set</li>
    </ul>
    <div class="later">later — provider abstraction · OpenTelemetry · multi-tenant · demo-to-skill</div>
  </div>
</div>

<style scoped>
.col-head {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.7rem;
}
.head-amber { color: #b45309; }
html.dark .head-amber { color: #fcd34d; }
.head-teal { color: #0f766e; }
html.dark .head-teal { color: #5eead4; }
.rlist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.rlist li {
  position: relative;
  padding-left: 1rem;
  font-size: 0.88rem;
  opacity: 0.85;
  line-height: 1.3;
}
.rlist li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 0.5rem;
  height: 1.5px;
  border-radius: 2px;
}
.rlist-amber li::before { background: var(--brag-amber); opacity: 0.75; }
.rlist-teal li::before { background: var(--brag-teal); opacity: 0.8; }
.later {
  font-size: 0.76rem;
  opacity: 0.58;
  margin-top: 0.8rem;
  padding-top: 0.65rem;
  border-top: 1px solid rgba(20, 40, 90, 0.1);
}
html.dark .later { border-color: rgba(255, 255, 255, 0.1); }
</style>

<!--
~1 min. Naming the limits before the jury does is a strength. Each is bounded and has a planned
answer. Near-term items fit the remaining weeks; the "later" line is recorded as perspectives.
-->
