<div class="h-full flex flex-col">

<!-- institutional header -->
<div class="flex items-center justify-between gap-5" v-motion :initial="{ opacity: 0, y: -6 }" :enter="{ opacity: 1, y: 0 }">
  <img src="../assets/logos/school.png" class="h-12 logo-chip shrink-0" alt="ENSAH" />
  <div class="text-center leading-tight">
    <div class="text-[0.98rem] font-bold tracking-wide">Abdelmalek Essaâdi University</div>
    <div class="text-[0.84rem] font-bold op90 mt-0.5">National School of Applied Sciences of Al-Hoceima — ENSAH</div>
  </div>
  <img src="../assets/logos/uae.png" class="h-12 logo-chip shrink-0" alt="Abdelmalek Essaâdi University" />
</div>
<div class="header-rule mt-2"></div>

<!-- project framing + title + company -->
<div class="flex-1 flex flex-col items-center justify-center text-center" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 150 } }">

  <div class="text-[1.02rem] font-bold">Final-Year Project (PFE)</div>
  <div class="text-[0.82rem] op75 mt-1">In partial fulfilment of the State Engineering Degree</div>
  <div class="text-[0.82rem] op75">Major · Data Engineering</div>

  <div class="accent-rule mt-4"></div>
  <div class="px-4 py-3.5" style="max-width: 48rem;">
    <div class="cover-title">From UiPath RPA to Autonomous AI Agents</div>
    <div class="text-[0.85rem] op72 mt-1.5 leading-snug">
      Design and implementation of a containerised browser agent for enterprise workflow automation
    </div>
  </div>
  <div class="accent-rule"></div>

  <img src="../assets/logos/company.png" class="h-8 mt-4 mb-3 dark:hidden" alt="Neo Tech IT" />
  <img src="../assets/logos/logo_neotechit_white.svg" class="h-7 mt-4 mb-3 hidden dark:inline-block" alt="Neo Tech IT" />

</div>

<!-- presented · supervised · board of examiners -->
<div class="grid grid-cols-3 gap-6 text-[0.8rem]" v-motion :initial="{ opacity: 0, y: 8 }" :enter="{ opacity: 1, y: 0, transition: { delay: 450 } }">
  <div>
    <div class="people-label">Presented by</div>
    <div class="mt-1.5">Hamza ALAOUI MHAMDI</div>
  </div>
  <div>
    <div class="people-label">Supervised by</div>
    <div class="mt-1.5">Pr. Achraf BOUMHIDI <span class="op50">· ENSAH</span></div>
    <div class="mt-0.5">Mr. Fayçal BENHAYOUN <span class="op50">· Neo Tech IT</span></div>
  </div>
  <div>
    <div class="people-label">Board of examiners</div>
    <div class="mt-1.5">Pr. Achraf BOUMHIDI <span class="op50">· President</span></div>
    <div class="mt-0.5">Pr. Mohamed CHERRADI <span class="op50">· Examiner</span></div>
    <div class="mt-0.5">Pr. Nada TASSI <span class="op50">· Examiner</span></div>
  </div>
</div>

<div class="text-center mt-4 text-[0.74rem] italic op55" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 650 } }">
  Academic year 2025–2026
</div>

</div>

<style scoped>
/* full-width neutral rule under the header (the reference's black rule) */
.header-rule {
  height: 1.5px;
  border-radius: 2px;
  background: rgba(20, 40, 90, 0.26);
}
html.dark .header-rule { background: rgba(255, 255, 255, 0.22); }

/* the two rules framing the title — reference uses violet; here, the deck's amber→teal */
.accent-rule {
  width: min(44rem, 92%);
  height: 2px;
  border-radius: 2px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(90deg, rgba(217, 119, 6, 0.85), rgba(13, 148, 136, 0.85));
}
html.dark .accent-rule {
  background: linear-gradient(90deg, rgba(245, 158, 11, 0.9), rgba(45, 212, 191, 0.9));
}

.cover-title {
  font-size: 1.72rem;
  line-height: 1.18;
  font-weight: 800;
  letter-spacing: -0.015em;
  color: #101d38;
}
html.dark .cover-title { color: #f6f9ff; }

.people-label {
  font-weight: 700;
  font-size: 0.82rem;
  color: #101d38;
}
html.dark .people-label { color: #f6f9ff; }
</style>

<!--
Good morning. Thank the jury. One sentence: "I'm going to show you how we taught
a piece of software at Orange to stop memorising screens — and start understanding them."
Then move on quickly; the cover should take ~20 seconds.
-->
