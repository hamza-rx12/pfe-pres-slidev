<div class="kicker">How it works <span class="op50">· Observability · 4 / 4</span></div>

## Every node, accounted for

<div class="mt-3 flex justify-center"
  v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }">
  <img src="../assets/screenshots/instances.png" class="shot console-shot" alt="control-plane instances view" />
</div>

<div class="mt-4 text-center text-sm op70">
  One control-plane API and its worker fleet — versions, <b>live heartbeats, and health</b> in a single view.
</div>

<style scoped>
.console-shot { max-height: 350px; width: auto; max-width: 92%; }
</style>

<!--
~0:30. The Instances page is the cluster's vital signs: the control-plane API and every connected
worker, each with its model, version, and a heartbeat — "all instances healthy" at the bottom.
This is what makes the fleet on the dashboard real machines you can point to, not an abstraction.
-->
