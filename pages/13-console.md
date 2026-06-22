<div class="kicker">How it works <span class="op50">· Observability</span></div>

## Every run, at a glance

<div class="mt-3 flex justify-center"
  v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }">
  <img src="../assets/screenshots/dashboard-dark.png" class="shot console-shot" alt="brag-ui dashboard" />
</div>

<div class="mt-4 text-center text-sm op70">
  Volume, latency, success rate, and <b>real model spend</b> — plus a <b>live timeline</b> for any running task and the <b>full trace &amp; cost</b> of every past run.
</div>

<style scoped>
.console-shot { max-height: 350px; width: auto; max-width: 92%; }
</style>

<!--
~0:30. brag-ui, the operator console. "An agent you can't watch is an agent you can't trust in
production." The dashboard is the front door — volume, latency, success rate, real spend across
every worker, no database session.
-->
