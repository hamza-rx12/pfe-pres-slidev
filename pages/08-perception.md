<div class="kicker">Inside brag <span class="op50">· Perception</span></div>

## It reads what a screen reader reads

<div class="grid grid-cols-3 gap-3 mt-4">
  <div v-click class="card opacity-55">
    <div class="flex items-center gap-2 mb-1"><carbon:close class="text-red-600 dark:text-red-400" /><b>Screenshots</b></div>
    <div class="text-xs op75">thousands of image tokens per step · pixel-level guessing</div>
  </div>
  <div v-click class="card opacity-55">
    <div class="flex items-center gap-2 mb-1"><carbon:close class="text-red-600 dark:text-red-400" /><b>Raw DOM</b></div>
    <div class="text-xs op75">huge, deeply nested · churns on every cosmetic release</div>
  </div>
  <div v-click class="card-teal">
    <div class="flex items-center gap-2 mb-1"><carbon:checkmark class="text-teal-700 dark:text-teal-300" /><b>Accessibility tree</b></div>
    <div class="text-xs op85">only the controls, by <b>role + name</b> · <b class="text-teal-700 dark:text-teal-300">200–500 tokens</b> per page</div>
  </div>
</div>

<div v-click class="grid grid-cols-[1.1fr_1fr] gap-5 mt-5 items-center">

```txt
page snapshot — what the model actually sees
  - textbox "Username"          @e1
  - textbox "Password"          @e2
  - button  "Login"             @e3
  - link    "Forgot password?"  @e4
```

<div>
  <div class="text-base leading-relaxed">
    <span class="font-mono text-teal-700 dark:text-teal-300">act(@e3)</span> clicks <b>the Login button</b> —<br />
    wherever the redesign moved it.
  </div>
  <div class="text-sm op65 mt-3">
    The same structure assistive software relies on: semantic, stable under drift,
    cheap to serialise. A tool call is <b>one browser operation</b> — no hidden model hops.
  </div>
</div>

</div>

<!--
~1 min. Direct answer to UiPath's brittleness.
"UiPath stores: 'click at this position / this XPath'. brag stores: 'click the button named Login'."
The AX-tree is also the cost story: 200–500 tokens instead of thousands for a screenshot.
Playwright exposes it first-class — that's why it was chosen.
-->
