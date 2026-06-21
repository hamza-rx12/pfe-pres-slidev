<div class="kicker">How it works <span class="op50">· The agent path</span></div>

## Six tools, four ceilings

<div class="loop-row mt-5">
  <span class="chip chip-amber">read the page</span>
  <carbon:arrow-right class="op40" />
  <span class="chip chip-amber">model picks a tool</span>
  <carbon:arrow-right class="op40" />
  <span class="chip chip-amber">browser acts</span>
  <span class="loop-back"><carbon:renew /> repeat until <span class="font-mono">done</span></span>
</div>

<div class="mt-6 text-center">
  <div class="grp-label">Six tools — the entire surface</div>
  <div class="flex flex-wrap gap-1.5 justify-center mt-2">
    <span class="chip font-mono">goto</span>
    <span class="chip font-mono">act</span>
    <span class="chip font-mono">snapshot</span>
    <span class="chip font-mono">extract</span>
    <span class="chip font-mono">propose_skill</span>
    <span class="chip font-mono">done</span>
  </div>
</div>

<div class="mt-6" v-click>
  <div class="grp-label text-center">Four ceilings — every run is capped</div>
  <div class="grid grid-cols-4 gap-3 mt-2.5">
    <div class="ccard">
      <div class="cic"><carbon:renew /></div>
      <div class="cval">≤ 40</div>
      <div class="clbl">steps</div>
    </div>
    <div class="ccard">
      <div class="cic"><carbon:time /></div>
      <div class="cval">≤ 300s</div>
      <div class="clbl">wall-clock</div>
    </div>
    <div class="ccard">
      <div class="cic"><carbon:document /></div>
      <div class="cval">≤ 700k</div>
      <div class="clbl">input tokens</div>
    </div>
    <div class="ccard">
      <div class="cic"><carbon:currency-dollar /></div>
      <div class="cval">≤ $0.80</div>
      <div class="clbl">cost</div>
    </div>
  </div>
  <div class="text-sm op65 mt-3.5 text-center">
    Checked before every step — hit one and it stops clean, with a full trace.
  </div>
</div>

<style scoped>
.loop-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.loop-back {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.78rem;
  opacity: 0.6;
  margin-left: 0.3rem;
}
.grp-label {
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.5;
}
.ccard {
  text-align: center;
  padding: 0.85rem 0.6rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(217, 119, 6, 0.3);
  background: rgba(217, 119, 6, 0.05);
}
html.dark .ccard {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.06);
}
.cic {
  width: 2.2rem;
  height: 2.2rem;
  margin: 0 auto 0.45rem;
  border-radius: 0.55rem;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  color: var(--brag-amber);
  background: rgba(217, 119, 6, 0.1);
}
html.dark .cic { background: rgba(245, 158, 11, 0.13); }
.cval {
  font-family: var(--slidev-code-font-family, monospace);
  font-weight: 800;
  font-size: 1.4rem;
  line-height: 1;
  color: #b45309;
}
html.dark .cval { color: #fcd34d; }
.clbl { font-size: 0.72rem; opacity: 0.6; margin-top: 0.3rem; }
</style>

<!--
~1 min. Two things, and the title says both. The loop: read the page, the model picks one of
six tools, the browser acts, repeat until done. Six tools is the whole surface — deliberately
tiny, so it's cheap and controllable. [click] And every run is sealed inside four hard
ceilings — steps, time, tokens, cost — checked before each step. Hit one and it stops cleanly
with a full trace. An enterprise signs off on a $0.80 cap, not "it'll probably stop".
-->
