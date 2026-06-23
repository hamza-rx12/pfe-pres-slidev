<div class="kicker">How it works <span class="op50">· The agent path</span></div>

## Six tools, four ceilings

<div class="grid grid-cols-[0.9fr_1.1fr] gap-8 mt-4 items-center">
  <div class="text-center">
    <div class="grp-label mb-2">The loop — until it's done</div>
    <AgentLoop />
  </div>
  <div class="rcol">
    <div class="grp-label">Six tools — the entire surface</div>
    <div class="tools-list mt-2.5">
      <div class="tchips"><span class="chip font-mono">goto</span><span class="chip font-mono">act</span></div>
      <div class="tgloss">go to pages, act on them</div>
      <div class="tchips"><span class="chip font-mono">snapshot</span><span class="chip font-mono">extract</span></div>
      <div class="tgloss">read the page &amp; its data</div>
      <div class="tchips"><span class="chip font-mono">propose_skill</span><span class="chip font-mono">done</span></div>
      <div class="tgloss">save the skill, then stop</div>
    </div>
    <div v-click>
      <div class="grp-label mt-5">Four ceilings — every run is capped</div>
      <div class="ceil-grid mt-2.5">
        <div class="ccard"><div class="cic"><carbon:renew /></div><div class="ctext"><div class="cval">≤ 40</div><div class="clbl">steps</div></div></div>
        <div class="ccard"><div class="cic"><carbon:time /></div><div class="ctext"><div class="cval">≤ 300s</div><div class="clbl">wall-clock</div></div></div>
        <div class="ccard"><div class="cic"><carbon:document /></div><div class="ctext"><div class="cval">≤ 700k</div><div class="clbl">input tokens</div></div></div>
        <div class="ccard"><div class="cic"><carbon:currency-dollar /></div><div class="ctext"><div class="cval">≤ $0.80</div><div class="clbl">cost</div></div></div>
      </div>
      <div class="text-xs op60 mt-2.5">Checked before every step — hit one and it stops clean, with a full trace.</div>
    </div>
  </div>
</div>

<style scoped>
.grp-label {
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.5;
}
.tools-list {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.55rem 0.7rem;
  align-items: center;
}
.tchips { display: flex; gap: 0.4rem; }
.tgloss { font-size: 0.74rem; opacity: 0.62; }
.ceil-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}
.ccard {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.7rem;
  border-radius: 0.7rem;
  border: 1px solid rgba(217, 119, 6, 0.3);
  background: rgba(217, 119, 6, 0.05);
}
html.dark .ccard {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.06);
}
.cic {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  color: var(--brag-amber);
  background: rgba(217, 119, 6, 0.1);
}
html.dark .cic { background: rgba(245, 158, 11, 0.13); }
.cval {
  font-family: var(--slidev-code-font-family, monospace);
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1;
  color: #b45309;
}
html.dark .cval { color: #fcd34d; }
.clbl { font-size: 0.7rem; opacity: 0.6; margin-top: 0.2rem; }
</style>

<!--
~1 min. Two things, and the title says both. The loop (left): read the page, the model picks one
of six tools, the browser acts — repeat until done. Six tools is the whole surface: go, look, do,
learn, stop — deliberately tiny, so it's cheap and controllable. [click] And every run is sealed
inside four hard ceilings — steps, time, tokens, cost — checked before each step. Hit one and it
stops cleanly with a full trace. An enterprise signs off on a $0.80 cap, not "it'll probably stop".
-->
