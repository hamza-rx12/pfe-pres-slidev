<div class="kicker">How it works <span class="op50">· Observability · 2 / 4</span></div>

## Watch any task, live

<div class="mt-3 flex justify-center"
  v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }">
  <img src="../assets/screenshots/send-live-timeline.png" class="shot console-shot" alt="live task timeline" />
</div>

<div class="mt-4 text-center text-sm op70">
  Submit a task and follow <b>every step as it happens</b> — over a live event stream, no log-tailing.
</div>

<style scoped>
.console-shot { max-height: 350px; width: auto; max-width: 92%; }
</style>

<!--
~0:30. Submit from the console and the timeline streams every step live over Server-Sent Events
— the same stream a caller can hold open through the A2A interface.
-->
