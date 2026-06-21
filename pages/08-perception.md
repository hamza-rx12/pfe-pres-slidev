<div class="kicker">How it works <span class="op50">· Perception</span></div>

## It reads what a screen reader reads

<div class="grid grid-cols-3 gap-3 mt-4">
  <div v-click class="pcard pcard-dim">
    <div class="pic pic-bad"><carbon:image /></div>
    <div class="pt">Screenshots</div>
    <div class="ps">1000s of tokens · guesses from pixels</div>
  </div>
  <div v-click class="pcard pcard-dim">
    <div class="pic pic-bad"><carbon:code /></div>
    <div class="pt">Raw DOM</div>
    <div class="ps">huge &amp; noisy · breaks on restyles</div>
  </div>
  <div v-click class="pcard pcard-win">
    <div class="pic pic-good"><carbon:accessibility /></div>
    <div class="pt">Accessibility tree <span class="winbadge">brag</span></div>
    <div class="ps"><b class="text-teal-700 dark:text-teal-300">200–500 tokens</b> · controls by <b>meaning</b></div>
  </div>
</div>

<div v-click class="grid grid-cols-[1.05fr_0.95fr] gap-6 mt-6 items-center">

```txt
what the model actually sees
  textbox  "Username"          @e1
  textbox  "Password"          @e2
  button   "Login"             @e3
  link     "Forgot password?"  @e4
```

<div>
  <div class="text-base leading-relaxed">
    <span class="font-mono text-teal-700 dark:text-teal-300">act(@e3)</span> clicks <b>the Login button</b> — wherever a redesign moved it.
  </div>
  <div class="text-sm op65 mt-3">
    Found by <b>meaning, not position</b> — one snapshot, one action, no hidden model calls.
  </div>
</div>

</div>

<style scoped>
.pcard {
  text-align: center;
  padding: 0.9rem 0.7rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(20, 40, 90, 0.12);
  background: rgba(255, 255, 255, 0.5);
}
html.dark .pcard { border-color: rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.04); }
.pcard-dim { opacity: 0.6; }
.pcard-win {
  border-color: rgba(13, 148, 136, 0.45);
  background: linear-gradient(180deg, rgba(13, 148, 136, 0.1), rgba(13, 148, 136, 0.03));
  box-shadow: 0 12px 30px -14px rgba(13, 148, 136, 0.4);
}
html.dark .pcard-win {
  border-color: rgba(45, 212, 191, 0.42);
  background: linear-gradient(180deg, rgba(45, 212, 191, 0.13), rgba(45, 212, 191, 0.04));
}
.pic {
  width: 2.3rem;
  height: 2.3rem;
  margin: 0 auto 0.5rem;
  border-radius: 0.6rem;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
}
.pic-bad { color: #9aa3b2; background: rgba(20, 40, 90, 0.06); }
html.dark .pic-bad { color: #94a3b8; background: rgba(255, 255, 255, 0.06); }
.pic-good { color: var(--brag-teal); background: rgba(13, 148, 136, 0.12); }
html.dark .pic-good { background: rgba(45, 212, 191, 0.14); }
.pt { font-weight: 700; font-size: 0.98rem; }
.ps { font-size: 0.74rem; opacity: 0.7; margin-top: 0.25rem; line-height: 1.3; }
.winbadge {
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 0.56rem;
  font-weight: 700;
  color: #0f766e;
  border: 1px solid rgba(13, 148, 136, 0.5);
  border-radius: 999px;
  padding: 0.05rem 0.4rem;
  vertical-align: middle;
}
html.dark .winbadge { color: #7ff0e0; border-color: rgba(45, 212, 191, 0.5); }
</style>

<!--
~1 min. Direct answer to RPA's brittleness. Three ways to see a page; two are wrong. Screenshots
cost thousands of tokens and guess from pixels; raw DOM is huge and breaks on every restyle.
brag reads the accessibility tree — the same thing a screen reader uses — 200–500 tokens, every
control by role and name. So act(@e3) clicks "Login" by meaning, wherever a redesign moved it.
-->
