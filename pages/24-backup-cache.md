<div class="kicker">Backup · prompt caching</div>

## The stable prompt is almost free

<div class="mt-6 space-y-2.5 max-w-3xl">
  <div class="flex items-center gap-3 text-sm"><span class="font-mono w-28">parabank</span><div class="cache-bg flex-1"><div class="cache-bar" style="width: 93%">93%</div></div></div>
  <div class="flex items-center gap-3 text-sm"><span class="font-mono w-28">saucedemo</span><div class="cache-bg flex-1"><div class="cache-bar" style="width: 90%">90%</div></div></div>
  <div class="flex items-center gap-3 text-sm"><span class="font-mono w-28">crates.io</span><div class="cache-bg flex-1"><div class="cache-bar" style="width: 77%">77%</div></div></div>
  <div class="flex items-center gap-3 text-sm"><span class="font-mono w-28">github.com</span><div class="cache-bg flex-1"><div class="cache-bar" style="width: 58%">58%</div></div></div>
  <div class="flex items-center gap-3 text-sm"><span class="font-mono w-28">cnn.com</span><div class="cache-bg flex-1"><div class="cache-bar" style="width: 55%">55%</div></div></div>
  <div class="flex items-center gap-3 text-sm"><span class="font-mono w-28">bbc.com</span><div class="cache-bg flex-1"><div class="cache-bar" style="width: 50%">50%</div></div></div>
</div>

<div class="mt-5 text-sm op75 max-w-3xl">
  Median share of an agent run's context tokens served <b>from cache</b> instead of billed fresh.
  Two layers: system prompt + tool definitions (1 h TTL) · per-domain skill context (5 min TTL).
  Highest exactly where it matters — long multi-step workflows that resend the prompt every iteration.
</div>

<style>
.cache-bg { height: 1.15rem; border-radius: 0.3rem; background: var(--track-bg); overflow: hidden; }
.cache-bar { height: 100%; border-radius: 0.3rem; background: linear-gradient(90deg, rgba(45,212,191,.3), rgba(45,212,191,.85)); display: flex; align-items: center; justify-content: flex-end; padding-right: .4rem; font-size: .62rem; font-weight: 700; color: #0b1020; }
</style>

<!--
For: "isn't resending the prompt each iteration expensive?"
The never-changing layer (system + tools) sits on a 1-hour cache; the rarely-changing
layer (per-domain skills) on 5 minutes. On the learn run shown earlier: 10,759 tokens
read from cache vs 7,917 billed fresh.
-->
