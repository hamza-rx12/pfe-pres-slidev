<div class="kicker">The company <span class="op50">· How we worked</span></div>

## How we worked

<div class="text-sm op70 mt-2 max-w-2xl" v-motion :initial="{ opacity: 0, y: 8 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }">
  <b>Scrum</b> — two-week sprints, every one shippable and demoed. Six months, four stretches:
</div>

<div class="tl mt-7">
  <div class="tl-axis"></div>
  <div class="tl-track">
    <div class="ph ph-soft" style="flex: 17 1 0"
      v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 250 } }">
      <div class="ph-when">Feb</div>
      <div class="ph-name">Discover</div>
      <div class="ph-sub">the RPA estate, hands-on</div>
    </div>
    <div class="ph ph-build" style="flex: 25 1 0"
      v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }">
      <div class="ph-when">Mar – Apr</div>
      <div class="ph-name">Build the agent</div>
      <div class="ph-sub">perceive · act · stay in budget</div>
    </div>
    <div class="ph ph-build2" style="flex: 18 1 0"
      v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 550 } }">
      <div class="ph-when">Apr – May</div>
      <div class="ph-name">Teach it to replay</div>
      <div class="ph-sub">learn once, reuse forever</div>
    </div>
    <div class="ph ph-soft" style="flex: 40 1 0"
      v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 700 } }">
      <div class="ph-when">May – Jul</div>
      <div class="ph-name">Deploy &amp; measure</div>
      <div class="ph-sub">cluster · benchmark · harden</div>
    </div>
  </div>
</div>

<div class="mt-5 text-center text-sm op75" v-click>
  Working end-to-end by <b class="text-amber-600 dark:text-amber-400">mid-May</b> — both paths, on live sites.
</div>

<div class="team mt-7">
  <span><b>One engineer per layer</b> — I owned the App Layer end-to-end</span>
  <span class="team-dot">·</span>
  <span>PO &amp; Scrum Master: Fayçal Benhayoun</span>
  <span class="team-dot">·</span>
  <span>Supervisor: Pr. Achraf Boumhidi</span>
</div>

<style scoped>
.tl-axis {
  height: 2px;
  border-radius: 2px;
  margin-bottom: 0.7rem;
  background: linear-gradient(90deg, #d97706, #0d9488);
  opacity: 0.45;
}
html.dark .tl-axis { background: linear-gradient(90deg, #fbbf24, #2dd4bf); opacity: 0.5; }
.tl-track {
  display: flex;
  gap: 0.6rem;
  align-items: stretch;
}
.ph {
  border-radius: 0.7rem;
  padding: 0.7rem 0.85rem;
  border: 1px solid rgba(20, 40, 90, 0.12);
  background: rgba(255, 255, 255, 0.5);
  min-width: 0;
}
html.dark .ph {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}
.ph-build {
  border-color: rgba(217, 119, 6, 0.4);
  background: linear-gradient(180deg, rgba(217, 119, 6, 0.1), rgba(217, 119, 6, 0.03));
}
html.dark .ph-build {
  border-color: rgba(245, 158, 11, 0.38);
  background: linear-gradient(180deg, rgba(245, 158, 11, 0.12), rgba(245, 158, 11, 0.04));
}
.ph-build2 {
  border-color: rgba(13, 148, 136, 0.4);
  background: linear-gradient(180deg, rgba(13, 148, 136, 0.09), rgba(13, 148, 136, 0.025));
}
html.dark .ph-build2 {
  border-color: rgba(45, 212, 191, 0.38);
  background: linear-gradient(180deg, rgba(45, 212, 191, 0.11), rgba(45, 212, 191, 0.035));
}
.ph-when {
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  opacity: 0.5;
}
.ph-name {
  font-weight: 700;
  font-size: 0.98rem;
  margin-top: 0.25rem;
  line-height: 1.15;
}
.ph-sub {
  font-size: 0.74rem;
  opacity: 0.6;
  margin-top: 0.2rem;
  line-height: 1.25;
}
.team {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.3rem 0.9rem;
  font-size: 0.78rem;
  opacity: 0.72;
}
.team-dot { opacity: 0.4; }
</style>

<!--
~40 s. Scrum, two-week sprints, always shippable. Four stretches across six months:
discover the estate, build the agent, teach it to learn-and-replay, then deploy and measure.
The proof point: it ran end-to-end on live sites by mid-May. One engineer per layer — I owned
the App Layer end to end; Fayçal Benhayoun was PO and Scrum Master.
-->
