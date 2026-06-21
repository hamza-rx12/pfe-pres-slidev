<div class="kicker">The idea <span class="op50">· How I got there</span></div>

## Not the first idea — the right one

<div class="text-sm op70 mt-2 max-w-3xl" v-motion :initial="{ opacity: 0, y: 8 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }">
  A naive browser agent re-solves every task from scratch, every time. Getting from there to
  something affordable took two turns.
</div>

<div class="journey mt-8">
  <div class="jstep" v-click>
    <div class="jnum">01</div>
    <div class="jhead">Give the agent a method</div>
    <div class="jbody">Reusable <b>skills</b> that spell out <i>how</i> to tackle a task — steadier and clearer, but the model still drives every run.</div>
    <div class="jtag tag-amber">still all-agent</div>
  </div>
  <carbon:arrow-right class="jarrow" />
  <div class="jstep" v-click>
    <div class="jnum">02</div>
    <div class="jhead">Reclaim what RPA got right</div>
    <div class="jbody">For a task already solved, don't re-reason it — <b>record the steps and replay them</b>, like RPA. No model in the loop.</div>
    <div class="jtag tag-teal">cheaper · faster</div>
  </div>
  <carbon:arrow-right class="jarrow" />
  <div class="jstep jstep-hero" v-click>
    <div class="jnum">03</div>
    <div class="jhead"><span class="grad">Learn once, replay forever</span></div>
    <div class="jbody">The agent <b>learns</b> a task once; a recorded skill <b>replays</b> it forever. Adaptive when it's new, RPA-cheap when it's not.</div>
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
  padding: 1rem 1.05rem 0.95rem;
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
.jnum {
  position: absolute;
  top: 0.6rem;
  right: 0.8rem;
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 0.66rem;
  font-weight: 700;
  opacity: 0.32;
}
.jhead {
  font-weight: 700;
  font-size: 1.02rem;
  line-height: 1.15;
  margin-bottom: 0.45rem;
}
.jbody {
  font-size: 0.8rem;
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
~1.5 min. The honest story, not a clean invention. Beat 1: I first gave the agent reusable
skills — a written method for how to approach a task. Steadier, but the model still ran every
time. Beat 2: the realisation — for a task already solved, I could record the steps and replay
them deterministically, exactly what RPA did well, for almost nothing. Beat 3: combine them —
learn once with the agent, replay forever. Adaptability and determinism stop being a trade-off
and become a hand-off. The next slide shows the machinery.
-->
