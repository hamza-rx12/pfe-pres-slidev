<div class="kicker">What's next <span class="op50">· In closing</span></div>

## What this work shows

<div class="mt-6 flex flex-col gap-3 max-w-3xl mx-auto">
  <div v-click class="ccard">
    <div class="cnum">1</div>
    <div>
      <div class="ch">The gap can be engineered closed</div>
      <div class="cs">budgets, schemas, traces, stateless replicas — not a research demo</div>
    </div>
  </div>
  <div v-click class="ccard">
    <div class="cnum">2</div>
    <div>
      <div class="ch">Cheap and deterministic — yet adaptive</div>
      <div class="cs">the two paths reconcile them, and it improves itself with use</div>
    </div>
  </div>
  <div v-click class="ccard">
    <div class="cnum">3</div>
    <div>
      <div class="ch">It shipped, end to end</div>
      <div class="cs">by mid-engagement, on live sites, instrumented for proof</div>
    </div>
  </div>
</div>

<div v-click class="mt-7 text-center text-lg op85">
  The model is a tenth of the system.<br />
  <b class="grad">The other nine tenths are engineering — and that's what I'm defending today.</b>
</div>

<style scoped>
.ccard {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.8rem 1.1rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(20, 40, 90, 0.12);
  background: rgba(255, 255, 255, 0.5);
}
html.dark .ccard {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}
.cnum {
  flex-shrink: 0;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: var(--slidev-code-font-family, monospace);
  font-weight: 800;
  font-size: 0.85rem;
  color: #fff;
  background: var(--brag-teal);
}
.ch { font-weight: 700; font-size: 1.05rem; line-height: 1.15; }
.cs { font-size: 0.82rem; opacity: 0.65; margin-top: 0.1rem; }
</style>

<!--
~1 min. Slow, deliberate. Three claims, then the personal line. Also a career statement:
LLM reasoning plus deterministic execution under production constraints — that's the
intersection where I want to work.
-->
