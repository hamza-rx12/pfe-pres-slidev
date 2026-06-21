<div class="kicker">The company <span class="op50">· How we worked</span></div>

## How we worked

<div class="text-sm op70 mt-2 max-w-3xl" v-motion :initial="{ opacity: 0, y: 8 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }">
  <b>Scrum</b> — two-week sprints, each leaving the system runnable and demoed. The requirements
  sharpened as the migration met production, so short cycles beat a fixed plan.
</div>

<div class="tl mt-8">
  <div class="tl-track">
    <div class="ph ph-soft" style="flex: 17 1 0"
      v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 250 } }">
      <div class="ph-when">Feb</div>
      <div class="ph-name">Discovery</div>
      <div class="ph-sub">RPA estate · first throwaway agent</div>
    </div>
    <div class="ph ph-build" style="flex: 25 1 0"
      v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }">
      <div class="ph-when">Mar – Apr</div>
      <div class="ph-name">Foundations · Ph 0–4</div>
      <div class="ph-sub">A2A · perception · budgeted loop · first replay</div>
    </div>
    <div class="ph ph-build2" style="flex: 18 1 0"
      v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 550 } }">
      <div class="ph-when">Apr – May</div>
      <div class="ph-name">Skills · DSM A–D</div>
      <div class="ph-sub">learn &amp; replay, as data</div>
    </div>
    <div class="ph ph-soft" style="flex: 40 1 0"
      v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 700 } }">
      <div class="ph-when">May – Jul</div>
      <div class="ph-name">Production &amp; evaluation</div>
      <div class="ph-sub">cluster · benchmark · hardening</div>
    </div>
  </div>
</div>

<div class="mt-5 text-center text-sm op75" v-click>
  By mid-May — an end-to-end prototype running <b class="text-amber-600 dark:text-amber-400">both paths</b> against live sites.
</div>

<div class="team mt-7">
  <span><b>One engineer per layer</b> — the App Layer owned end-to-end</span>
  <span class="team-dot">·</span>
  <span>Product Owner &amp; Scrum Master — Fayçal Benhayoun</span>
  <span class="team-dot">·</span>
  <span>Academic supervisor — Pr. Achraf Boumhidi</span>
</div>

<style scoped>
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
  font-size: 0.92rem;
  margin-top: 0.25rem;
  line-height: 1.15;
}
.ph-sub {
  font-size: 0.72rem;
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
~45 s. We ran Scrum — two-week sprints, each demoed and runnable. Discovery in February,
then the build through to mid-May where the prototype already ran both execution paths on
live sites, then consolidation and evaluation. A small team: one engineer per layer; I
owned the App Layer end to end. Fayçal Benhayoun was Product Owner and Scrum Master,
Pr. Boumhidi supervised academically.
-->
