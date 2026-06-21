<div class="kicker">How it works <span class="op50">· Architecture</span></div>

## Two roles that never call each other

<div class="arch max-w-4xl mx-auto mt-3">

  <div class="grid grid-cols-[1.7fr_1fr] gap-3 items-stretch"
    v-motion :initial="{ opacity: 0, y: -6 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }">
    <div class="anode">
      <div class="anode-tag">Control plane <span class="op50">· callers come in over A2A</span></div>
      <div class="anode-h">brag-api</div>
      <div class="anode-s">stateless — takes work, runs nothing itself</div>
    </div>
    <div class="anode anode-ui">
      <div class="anode-tag">Observability</div>
      <div class="anode-h">brag-ui</div>
      <div class="anode-s">operator console</div>
    </div>
  </div>

  <div class="aflow">work ↓ <span class="op30">·</span> ↑ events</div>

  <div class="backbone"
    v-motion :initial="{ opacity: 0, scale: 0.97 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 380 } }">
    <div class="bb-label">the only thing both sides touch</div>
    <div class="bb-row"><b>NATS JetStream</b><span>work queue + live events</span></div>
    <div class="bb-row"><b>PostgreSQL</b><span>the single source of truth — tasks, traces, skills</span></div>
  </div>

  <div class="aflow">pull ↓ <span class="op30">·</span> ↑ results</div>

  <div v-motion :initial="{ opacity: 0, y: 6 }" :enter="{ opacity: 1, y: 0, transition: { delay: 560 } }">
    <div class="anode anode-worker">
      <div class="anode-tag">The tier that scales</div>
      <div class="anode-h">brag-worker <span class="op60 font-normal">× N</span></div>
      <div class="anode-s">browser + agent loop · runs both paths</div>
    </div>
  </div>
</div>

<div class="text-center text-sm mt-4" v-click>
  Workers hold no state — add capacity with <span class="font-mono">kubectl scale</span>, never a licensed machine.
</div>

<div class="flex items-center justify-center gap-1.5 flex-wrap mt-3" v-click>
  <img src="../assets/logos/tools/python.png" class="tlogo" alt="Python" />
  <img src="../assets/logos/tools/starlette.png" class="tlogo" alt="Starlette" />
  <img src="../assets/logos/tools/playwright.png" class="tlogo" alt="Playwright" />
  <img src="../assets/logos/tools/anthropic.svg" class="tlogo" alt="Anthropic" />
  <img src="../assets/logos/tools/nats.svg" class="tlogo" alt="NATS" />
  <img src="../assets/logos/tools/postgresql.png" class="tlogo" alt="PostgreSQL" />
  <img src="../assets/logos/tools/pydantic.png" class="tlogo" alt="Pydantic" />
  <img src="../assets/logos/tools/svelte.png" class="tlogo" alt="SvelteKit" />
  <img src="../assets/logos/tools/docker.png" class="tlogo" alt="Docker" />
  <img src="../assets/logos/tools/kubernetes.png" class="tlogo" alt="Kubernetes" />
  <span class="text-[0.6rem] op50 ml-1">3 images · api · worker · migrator</span>
</div>

<style scoped>
.anode {
  border-radius: 0.75rem;
  border: 1px solid rgba(20, 40, 90, 0.14);
  background: rgba(255, 255, 255, 0.55);
  padding: 0.6rem 0.85rem;
}
html.dark .anode { border-color: rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.04); }
.anode-tag {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 0.2rem;
}
.anode-h { font-weight: 800; font-size: 1rem; line-height: 1.1; }
.anode-s { font-size: 0.74rem; opacity: 0.62; margin-top: 0.15rem; }
.anode-ui { border-color: rgba(13, 148, 136, 0.4); background: linear-gradient(180deg, rgba(13,148,136,0.07), rgba(13,148,136,0.02)); }
html.dark .anode-ui { border-color: rgba(45, 212, 191, 0.36); }
.anode-worker {
  border-color: transparent;
  background: linear-gradient(120deg, rgba(217, 119, 6, 0.1), rgba(13, 148, 136, 0.09));
  box-shadow: inset 0 0 0 1px rgba(217, 119, 6, 0.32), 0 12px 30px -16px rgba(217, 119, 6, 0.4);
}
html.dark .anode-worker {
  background: linear-gradient(120deg, rgba(245, 158, 11, 0.13), rgba(45, 212, 191, 0.11));
  box-shadow: inset 0 0 0 1px rgba(245, 158, 11, 0.3), 0 12px 30px -16px rgba(245, 158, 11, 0.4);
}
.aflow {
  text-align: center;
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 0.66rem;
  font-weight: 600;
  opacity: 0.5;
  padding: 0.32rem 0;
}
.backbone {
  border-radius: 0.8rem;
  padding: 0.65rem 0.95rem 0.75rem;
  position: relative;
  border: 1px solid rgba(217, 119, 6, 0.3);
  background: linear-gradient(120deg, rgba(217, 119, 6, 0.07), rgba(13, 148, 136, 0.06));
}
html.dark .backbone {
  border-color: rgba(245, 158, 11, 0.3);
  background: linear-gradient(120deg, rgba(245, 158, 11, 0.09), rgba(45, 212, 191, 0.08));
}
.bb-label {
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.55;
  text-align: center;
  margin-bottom: 0.35rem;
}
.bb-row {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-size: 0.82rem;
  padding: 0.12rem 0;
}
.bb-row b { min-width: 8.5rem; }
.bb-row span { font-size: 0.72rem; opacity: 0.62; }
.tlogo {
  height: 1.35rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(20, 40, 90, 0.1);
  border-radius: 0.3rem;
  padding: 0.1rem;
}
html.dark .tlogo { border-color: transparent; }
</style>

<!--
~1 min. The one architectural idea worth defending: the control plane and the worker tier
never talk to each other. They meet only at the backbone — NATS for work and events,
PostgreSQL as the single source of truth. That decoupling is exactly what lets the worker
tier scale to N identical copies: capacity is kubectl scale, not a new licensed machine — the
thing UiPath couldn't do. Stack is proven on purpose; the innovation went into the two paths.
-->
