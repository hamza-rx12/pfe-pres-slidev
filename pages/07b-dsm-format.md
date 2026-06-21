<div class="kicker">The idea <span class="op50">· The skill format</span></div>

## A skill is data you can carry

<div class="text-sm op70 mt-2 max-w-3xl" v-motion :initial="{ opacity: 0, y: 8 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }">
  I shaped the <b>Domain Skill Manifest</b> after <b>MCP</b> — the open standard for describing an AI tool —
  and stored it as plain data, not code.
</div>

<div class="grid grid-cols-2 gap-7 mt-6 items-start">

  <div v-motion :initial="{ opacity: 0, x: -16 }" :enter="{ opacity: 1, x: 0, transition: { delay: 250 } }">
    <div class="grp-label">Shaped like an MCP tool</div>
    <div class="dsm-card mt-2.5">
      <div class="dsm-layer">
        <div class="dsm-tag tag-teal-tx">MCP surface — any client already understands it</div>
        <div class="dsm-fields">
          <span>name</span><span>description</span><span>inputSchema</span><span>outputSchema</span>
        </div>
      </div>
      <div class="dsm-layer dsm-brag">
        <div class="dsm-tag tag-amber-tx"><span class="font-mono">_brag</span> — how to run it</div>
        <div class="dsm-fields">
          <span>intent examples</span><span>steps · goto / act / extract</span><span>guards</span>
        </div>
      </div>
    </div>
  </div>

  <div v-motion :initial="{ opacity: 0, x: 16 }" :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }">
    <div class="grp-label">Data, not code — so it travels</div>
    <ul class="port mt-3">
      <li><carbon:document-export class="port-ic" /><span><b>Import &amp; export</b> — one click in the console</span></li>
      <li><carbon:version class="port-ic" /><span>version-controlled &amp; human-reviewable</span></li>
      <li><carbon:migrate class="port-ic" /><span>moves between instances — no redeploy</span></li>
      <li><carbon:checkmark class="port-ic" /><span>one schema validates it — written <i>or</i> imported</span></li>
    </ul>
  </div>

</div>

<div v-click class="mt-6 text-center text-base font-bold">
  A hand-written RPA script can do <span class="text-amber-600 dark:text-amber-400">none</span> of this.
</div>

<style scoped>
.grp-label {
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.5;
}
.dsm-card {
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid rgba(20, 40, 90, 0.14);
}
html.dark .dsm-card { border-color: rgba(255, 255, 255, 0.12); }
.dsm-layer { padding: 0.75rem 0.9rem; background: rgba(255, 255, 255, 0.5); }
html.dark .dsm-layer { background: rgba(255, 255, 255, 0.04); }
.dsm-brag {
  border-top: 1px dashed rgba(20, 40, 90, 0.18);
  background: rgba(217, 119, 6, 0.04);
}
html.dark .dsm-brag { border-top-color: rgba(255, 255, 255, 0.14); background: rgba(245, 158, 11, 0.05); }
.dsm-tag {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-bottom: 0.5rem;
}
.tag-teal-tx { color: #0f766e; }
html.dark .tag-teal-tx { color: #5eead4; }
.tag-amber-tx { color: #b45309; }
html.dark .tag-amber-tx { color: #fcd34d; }
.dsm-fields { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.dsm-fields span {
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 0.72rem;
  border: 1px solid rgba(20, 40, 90, 0.15);
  border-radius: 0.4rem;
  padding: 0.12rem 0.5rem;
  background: rgba(255, 255, 255, 0.6);
}
html.dark .dsm-fields span { border-color: rgba(255, 255, 255, 0.14); background: rgba(255, 255, 255, 0.05); }
.port { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.7rem; }
.port li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; opacity: 0.88; line-height: 1.3; }
.port-ic { color: var(--brag-teal); font-size: 1.15rem; flex-shrink: 0; margin-top: 0.05rem; }
</style>

<!--
~1 min, a design-decision beat. The recipe the agent writes down isn't ad-hoc — I shaped it
after MCP, the open standard for describing an AI tool: name, description, inputSchema, and an
optional outputSchema, with a _brag block for how to run it. Because it's data, not code, a
skill can be exported, version-controlled, reviewed, and carried between instances — and the
console does import/export in one click. A hand-written RPA script can do none of that.
-->
