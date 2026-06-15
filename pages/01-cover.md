<div class="h-full flex flex-col">

<!-- institutional header -->
<div class="flex items-center justify-between gap-6" v-motion :initial="{ opacity: 0, y: -8 }" :enter="{ opacity: 1, y: 0 }">
  <img src="../assets/logos/school.png" class="h-13 logo-chip" alt="ENSAH" />
  <div class="text-center text-[0.74rem] leading-relaxed op85">
    <b>Abdelmalek Essaâdi University</b><br />
    National School of Applied Sciences of Al-Hoceima — ENSAH<br />
    <span class="op75">Data Engineering · Academic year 2025 / 2026</span>
  </div>
  <img src="../assets/logos/uae.png" class="h-13 logo-chip" alt="UAE" />
</div>

<!-- title block -->
<div class="flex-1 flex flex-col items-center justify-center text-center">
  <div class="kicker" v-motion :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { delay: 150 } }">
    End-of-studies project defense
  </div>
  <h1 style="font-size: 3.1rem; line-height: 1.12; font-weight: 800;" v-motion :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }">
    From RPA robots to<br /><span class="grad">autonomous browser agents</span>
  </h1>
  <p class="mt-3 text-base op80 max-w-2xl" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 500 } }">
    <span class="brag">brag</span> — a containerised, self-learning browser agent for enterprise
    workflow automation. The App Layer of Orange's RPA migration.
  </p>
</div>

<!-- people -->
<div class="card !py-3.5 grid grid-cols-[1fr_1.15fr_1.15fr] gap-6 text-left text-xs" v-motion :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0, transition: { delay: 650 } }">
  <div>
    <div class="op50 uppercase tracking-wider text-[0.6rem] mb-1.5">Presented by</div>
    <div class="text-sm"><b>Alaoui Mhamdi Hamza</b></div>
    <div class="op70 mt-1">Data Engineering — ENSAH</div>
  </div>
  <div class="border-l border-black/10 dark:border-white/10 pl-6">
    <div class="op50 uppercase tracking-wider text-[0.6rem] mb-1.5">Supervised by</div>
    <div><b>Pr. Achraf Boumhidi</b> <span class="op60">— ENSAH</span></div>
    <div class="mt-1"><b>Mr. Fayçal Benhayoun</b> <span class="op60">— Neo Tech IT</span></div>
  </div>
  <div class="border-l border-black/10 dark:border-white/10 pl-6">
    <div class="op50 uppercase tracking-wider text-[0.6rem] mb-1.5">Jury</div>
    <div><b>Pr. Achraf Boumhidi</b> <span class="op60">· supervisor</span></div>
    <div><b>Pr. Mohamed Cherradi</b> <span class="op60">· examiner</span></div>
    <div><b>Pr. Nada Tassi</b> <span class="op60">· examiner</span></div>
  </div>
</div>

<!-- bottom strip -->
<div class="flex items-center justify-between mt-3 text-[0.68rem] op70" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 800 } }">
  <span>Defended on <b>24 June 2026</b></span>
  <span>Internship · 2 February → 30 July 2026</span>
  <span class="flex items-center gap-2">Host company
    <img src="../assets/logos/company.png" class="h-6 dark:hidden" alt="Neo Tech IT" />
    <img src="../assets/logos/logo_neotechit_white.svg" class="h-5 hidden dark:inline-block" alt="Neo Tech IT" />
  </span>
</div>

</div>

<!--
Good morning. Thank the jury. One sentence: "I'm going to show you how we taught
a piece of software at Orange to stop memorising screens — and start understanding them."
Then move on quickly; the cover should take ~20 seconds.
-->
