<div class="kicker">The idea <span class="op50">· How I got there</span></div>

## Not the first idea — the right one

<div class="text-sm op70 mt-2 max-w-3xl" v-motion :initial="{ opacity: 0, y: 8 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }">
  A plain browser agent re-solves every task from scratch — slow and costly. The fix came in three steps:
</div>

<div class="journey mt-8">
  <div class="jstep" v-click>
    <div class="jic jic-amber"><carbon:list /></div>
    <div class="jhead">Give the agent a method</div>
    <div class="jbody">A written recipe for how to tackle a task — but the model still ran every time.</div>
    <div class="jtag tag-amber">still all-agent</div>
  </div>
  <carbon:arrow-right class="jarrow" />
  <div class="jstep" v-click>
    <div class="jic jic-teal"><carbon:repeat /></div>
    <div class="jhead">Reclaim what RPA got right</div>
    <div class="jbody">A solved task is just steps — record them once and replay, with no model.</div>
    <div class="jtag tag-teal">cheap &amp; deterministic</div>
  </div>
  <carbon:arrow-right class="jarrow" />
  <div class="jstep jstep-hero" v-click>
    <div class="jic jic-grad"><carbon:idea /></div>
    <div class="jhead"><span class="grad">Learn once, replay forever</span></div>
    <div class="jbody">Learn it once with the agent; replay the recording forever after.</div>
    <div class="jtag tag-grad">this is brag</div>
  </div>
</div>

<div class="mt-7 text-center text-lg font-bold" v-click>
  Adaptability and determinism — not a trade-off, a <span class="grad">hand-off</span>.
</div>

<style scoped>
.journey {
  display: flex;
  align-items: stretch;
  gap: 0.4rem;
}
.jstep {
  flex: 1;
  position: relative;
  border-radius: 0.8rem;
  padding: 1.05rem 1.05rem 0.95rem;
  border: 1px solid rgba(20, 40, 90, 0.12);
  background: rgba(255, 255, 255, 0.5);
  min-width: 0;
}
html.dark .jstep {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}
.jstep-hero {
  border-color: transparent;
  background: linear-gradient(150deg, rgba(217, 119, 6, 0.12), rgba(13, 148, 136, 0.1));
  box-shadow: 0 14px 34px -14px rgba(217, 119, 6, 0.4), inset 0 0 0 1px rgba(217, 119, 6, 0.35);
}
html.dark .jstep-hero {
  background: linear-gradient(150deg, rgba(245, 158, 11, 0.15), rgba(45, 212, 191, 0.12));
  box-shadow: 0 14px 34px -14px rgba(245, 158, 11, 0.4), inset 0 0 0 1px rgba(245, 158, 11, 0.32);
}
.jic {
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 0.6rem;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  margin-bottom: 0.55rem;
}
.jic-amber { color: var(--brag-amber); background: rgba(217, 119, 6, 0.1); }
html.dark .jic-amber { background: rgba(245, 158, 11, 0.13); }
.jic-teal { color: var(--brag-teal); background: rgba(13, 148, 136, 0.1); }
html.dark .jic-teal { background: rgba(45, 212, 191, 0.13); }
.jic-grad { color: var(--brag-amber); background: linear-gradient(135deg, rgba(217,119,6,0.16), rgba(13,148,136,0.14)); }
html.dark .jic-grad { color: #fbbf24; background: linear-gradient(135deg, rgba(245,158,11,0.18), rgba(45,212,191,0.16)); }
.jhead {
  font-weight: 700;
  font-size: 1.02rem;
  line-height: 1.15;
  margin-bottom: 0.4rem;
}
.jbody {
  font-size: 0.82rem;
  opacity: 0.78;
  line-height: 1.35;
}
.jtag {
  display: inline-block;
  margin-top: 0.7rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
}
.tag-amber {
  color: #b45309;
  border: 1px solid rgba(217, 119, 6, 0.5);
}
html.dark .tag-amber { color: #fcd34d; border-color: rgba(245, 158, 11, 0.5); }
.tag-teal {
  color: #0f766e;
  border: 1px solid rgba(13, 148, 136, 0.5);
}
html.dark .tag-teal { color: #7ff0e0; border-color: rgba(45, 212, 191, 0.5); }
.tag-grad {
  font-weight: 800;
  color: #b45309;
  border: 1px solid rgba(217, 119, 6, 0.4);
  background: linear-gradient(90deg, rgba(217,119,6,0.1), rgba(13,148,136,0.1));
}
html.dark .tag-grad { color: #fcd34d; border-color: rgba(245, 158, 11, 0.4); }
.jarrow {
  align-self: center;
  font-size: 1.4rem;
  opacity: 0.4;
  flex-shrink: 0;
}
</style>

<!--
~1 min. The honest story. Step 1: I gave the agent a written method for tackling a task —
clearer, but the model still ran every time. Step 2: the turn — a task already solved is just
a list of steps; record them once and replay, no model, like RPA. Step 3: combine them — learn
once with the agent, replay the recording forever. Adaptability and determinism become a
hand-off, not a trade-off. Next slide: the machinery.
-->
