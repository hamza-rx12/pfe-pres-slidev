<div class="kicker">How it works <span class="op50">· Observability · 1 / 3</span></div>

## Every run, at a glance

<div class="mt-3 flex justify-center"
  v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }">
  <img src="../assets/screenshots/dashboard-dark.png" class="shot console-shot" alt="brag-ui dashboard" />
</div>

<div class="mt-4 flex flex-wrap gap-2 justify-center">
  <span class="chip">request volume</span>
  <span class="chip">latency</span>
  <span class="chip">success rate</span>
  <span class="chip">model spend</span>
  <span class="text-xs op55 ml-1">— across the whole worker fleet · <span class="font-mono">brag-ui</span></span>
</div>

<style scoped>
.console-shot { max-height: 340px; width: auto; max-width: 90%; }
</style>

<!--
~0:30. brag-ui, the operator console. "An agent you can't watch is an agent you can't trust
in production." The dashboard is the front door: volume, latency, success rate, and real
model spend across every worker — one screen, no database session.
-->
