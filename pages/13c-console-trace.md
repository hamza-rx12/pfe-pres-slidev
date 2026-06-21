<div class="kicker">How it works <span class="op50">· Observability · 3 / 3</span></div>

## Every run, fully traced

<div class="mt-3 flex justify-center"
  v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 120, duration: 500 } }">
  <img src="../assets/screenshots/request-trace-detail.png" class="shot console-shot" alt="per-run trace detail" />
</div>

<div class="mt-4 text-center text-sm op70">
  Open any past run to its full trace — <b>every step, the tokens, and the cost</b>. That's what makes it auditable.
</div>

<style scoped>
.console-shot { max-height: 350px; width: auto; max-width: 92%; }
</style>

<!--
~0:30. Every run persists a complete trace: the path, each tool call and observation, token
usage, and a computed cost. Open any request and read exactly what it did and what it cost —
the audit trail a raw chat log can't give.
-->
