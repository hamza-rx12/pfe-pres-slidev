<div class="kicker">How it works <span class="op50">· Observability · 3 / 3</span></div>

## Every run, fully traced

<div class="mt-3 flex justify-center"
  v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }">
  <img src="../assets/screenshots/request-trace-detail.png" class="shot console-shot" alt="per-run trace detail" />
</div>

<div class="mt-4 flex flex-wrap gap-2 justify-center">
  <span class="chip">each tool call &amp; observation</span>
  <span class="chip">tokens</span>
  <span class="chip chip-amber">per-run cost</span>
  <span class="text-xs op55 ml-1">— open any past request to its complete, saved trace</span>
</div>

<style scoped>
.console-shot { max-height: 340px; width: auto; max-width: 90%; }
</style>

<!--
~0:30. Every run persists a full trace: the path, each tool call and observation, the
token usage, and a computed monetary cost. Open any past request and read exactly what it
did and what it cost — that is what makes the agent path auditable, the guarantee a raw
chat log can't give.
-->
