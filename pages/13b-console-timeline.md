<div class="kicker">How it works <span class="op50">· Observability · 2 / 3</span></div>

## Watch any task, live

<div class="mt-3 flex justify-center"
  v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }">
  <img src="../assets/screenshots/send-live-timeline.png" class="shot console-shot" alt="live task timeline" />
</div>

<div class="mt-4 flex flex-wrap gap-2 justify-center">
  <span class="chip chip-teal"><carbon:view /> live event stream (SSE)</span>
  <span class="chip">every step as it happens</span>
  <span class="text-xs op55 ml-1">— submit a task and follow it, no log-tailing</span>
</div>

<style scoped>
.console-shot { max-height: 340px; width: auto; max-width: 90%; }
</style>

<!--
~0:30. Submit a task from the console and the timeline streams every step as it runs — the
path taken, each tool call, the live status — over Server-Sent Events. The same stream a
caller can hold open through the A2A interface.
-->
