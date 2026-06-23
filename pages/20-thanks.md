---
layout: center
transition: fade
---

<div class="text-center">
  <h1 class="!text-6xl font-extrabold tracking-tight">Thank you.</h1>
  <div class="accent-rule"></div>
  <div class="text-lg op80">I'm happy to take your questions.</div>
  <div v-click class="router-line mt-9 font-mono text-xs flex items-center justify-center gap-2 flex-wrap">
    <span class="op50">task</span>
    <span>"answer the jury's questions"</span>
    <span class="op40">→</span>
    <span class="op50">no saved skill</span>
    <span class="op40">→</span>
    <span class="text-amber-700 dark:text-amber-300 font-semibold">agent path</span>
  </div>
  <div class="sig mt-12">
    <div class="font-semibold tracking-tight">Alaoui Mhamdi Hamza</div>
    <div class="text-xs op55 mt-1">ENSAH · Data Engineering &nbsp;—&nbsp; Neo Tech IT</div>
    <div class="logos mt-4">
      <img src="../assets/logos/school.png" class="h-10" alt="ENSAH" />
      <img src="../assets/logos/company.png" class="h-6 dark:hidden" alt="Neo Tech IT" />
      <img src="../assets/logos/logo_neotechit_white.svg" class="h-5 hidden dark:inline-block" alt="Neo Tech IT" />
    </div>
  </div>
</div>

<style scoped>
.accent-rule {
  width: 130px;
  height: 3px;
  border-radius: 2px;
  margin: 1.4rem auto 1.2rem;
  background: linear-gradient(90deg, var(--brag-amber), var(--brag-teal));
}
.logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;
  opacity: 0.9;
}
</style>

<!--
Straight close on the slide: "Thank you — I'm happy to take your questions." The router trace is
behind a click — only reveal it if the room is warm. It lands the deck's own mechanic: answering
the jury is a task with no saved skill, so it takes the agent path and reasons it out live.
-->
