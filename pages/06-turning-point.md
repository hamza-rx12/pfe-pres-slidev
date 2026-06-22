<div class="kicker">The problem <span class="op50">· The turning point</span></div>

## The technology is ready — a raw agent isn't

<div class="win mt-5" v-motion :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0, transition: { delay: 150 } }">
  <div class="win-ic"><carbon:idea /></div>
  <div class="win-tx">
    An LLM now reads a page <b>by meaning, not position</b> — "the Login button", wherever it sits.
    For the first time, an agent can drive a browser from plain English.
  </div>
</div>

<div v-click>
  <div class="text-sm op60 mt-6 mb-3 text-center">But on its own, that agent is still —</div>
  <div class="grid grid-cols-3 gap-3">
    <div class="fcard">
      <div class="fic"><carbon:shuffle /></div>
      <div class="fw">Unpredictable</div>
      <div class="fy">a different path each run</div>
    </div>
    <div class="fcard">
      <div class="fic"><carbon:currency-dollar /></div>
      <div class="fw">Expensive</div>
      <div class="fy">pays the model every click</div>
    </div>
    <div class="fcard">
      <div class="fic"><carbon:time /></div>
      <div class="fw">Slow</div>
      <div class="fy">one call per action</div>
    </div>
  </div>
</div>

<div v-click class="mt-7 text-center text-xl font-bold">
  Building the demo takes a day. <span class="grad">Making it production-ready is this project.</span>
</div>

<style scoped>
.win {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  padding: 1rem 1.3rem;
  border-radius: 0.9rem;
  border: 1px solid rgba(13, 148, 136, 0.4);
  background: linear-gradient(180deg, rgba(13, 148, 136, 0.09), rgba(13, 148, 136, 0.025));
}
html.dark .win {
  border-color: rgba(45, 212, 191, 0.4);
  background: linear-gradient(180deg, rgba(45, 212, 191, 0.12), rgba(45, 212, 191, 0.04));
}
.win-ic {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 0.7rem;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  color: var(--brag-teal);
  background: rgba(13, 148, 136, 0.12);
}
html.dark .win-ic { background: rgba(45, 212, 191, 0.14); }
.win-tx { font-size: 0.98rem; line-height: 1.45; }
.fcard {
  text-align: center;
  padding: 0.9rem 0.6rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(217, 119, 6, 0.3);
  background: rgba(217, 119, 6, 0.05);
}
html.dark .fcard {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.06);
}
.fic {
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 auto 0.5rem;
  border-radius: 0.6rem;
  display: grid;
  place-items: center;
  font-size: 1.3rem;
  color: var(--brag-amber);
  background: rgba(217, 119, 6, 0.1);
}
html.dark .fic { background: rgba(245, 158, 11, 0.12); }
.fw { font-weight: 700; font-size: 1rem; }
.fy { font-size: 0.72rem; opacity: 0.6; margin-top: 0.15rem; }
</style>

<!--
~1 min. The thesis of the defense, in three beats. Beat 1 (banner): an LLM finally reads a
page by meaning — the thing RPA never could — so a browser agent is possible at all. Beat 2
(click): but raw, it's unpredictable, expensive, and slow — what production won't accept.
Beat 3 (click): the demo is trivial; closing the gap to production is the work.
-->
