<div class="kicker">Inside brag <span class="op50">· Architecture</span></div>

## Boring architecture, on purpose

<div class="mt-4 flex items-stretch justify-center gap-2 text-center">
  <div class="card !px-3 flex flex-col justify-center">
    <div class="text-xs font-bold">callers</div>
    <div class="text-[0.62rem] op60">Business-layer agent<br />any A2A client</div>
  </div>
  <carbon:arrow-right class="flow-arrow" />
  <div v-click class="card !px-3 flex flex-col justify-center">
    <div class="text-xs font-bold">brag-api</div>
    <div class="text-[0.62rem] op60">stateless<br />control plane</div>
  </div>
  <carbon:arrow-right class="flow-arrow" />
  <div v-click class="card !px-3 flex flex-col justify-center">
    <div class="text-xs font-bold">NATS JetStream</div>
    <div class="text-[0.62rem] op60">durable work queue<br />+ live event bus</div>
  </div>
  <carbon:arrow-right class="flow-arrow" />
  <div v-click class="card-amber !px-3 flex flex-col justify-center">
    <div class="text-xs font-bold text-amber-700 dark:text-amber-300">brag-worker × N</div>
    <div class="text-[0.62rem] op70">browser pool<br />both execution paths</div>
  </div>
  <div v-click class="flex flex-col justify-center gap-2 ml-1">
    <div class="card !py-1.5 !px-3"><div class="text-[0.65rem] font-bold">PostgreSQL</div><div class="text-[0.55rem] op60">tasks · traces · skills · pricing</div></div>
    <div class="card !py-1.5 !px-3"><div class="text-[0.65rem] font-bold">brag-ui</div><div class="text-[0.55rem] op60">operator console</div></div>
  </div>
</div>

<div class="grid grid-cols-3 gap-2.5 mt-5 text-xs">
  <div v-click class="card !py-2"><b class="text-teal-700 dark:text-teal-300">scale = add replicas.</b> workers hold no task state — capacity is <span class="font-mono">kubectl scale</span>, not a new licensed machine</div>
  <div v-click class="card !py-2"><b class="text-teal-700 dark:text-teal-300">no lost work.</b> atomic claim on every task · a crashed worker's task is simply redelivered</div>
  <div v-click class="card !py-2"><b class="text-teal-700 dark:text-teal-300">an agent among agents.</b> standard A2A (Agent-to-Agent) surface: AgentCard · JSON-RPC lifecycle · live progress stream (SSE)</div>
</div>

<div v-click class="mt-4 flex items-center justify-center gap-2 flex-wrap">
  <img src="../assets/logos/tools/python.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Python" />
  <img src="../assets/logos/tools/starlette.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Starlette" />
  <img src="../assets/logos/tools/postgresql.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="PostgreSQL" />
  <img src="../assets/logos/tools/nats.svg" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="NATS" />
  <img src="../assets/logos/tools/playwright.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Playwright" />
  <img src="../assets/logos/tools/anthropic.svg" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Anthropic" />
  <img src="../assets/logos/tools/pydantic.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Pydantic" />
  <img src="../assets/logos/tools/svelte.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="SvelteKit" />
  <img src="../assets/logos/tools/atlas.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Atlas" />
  <img src="../assets/logos/tools/docker.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Docker" />
  <img src="../assets/logos/tools/kubernetes.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Kubernetes" />
  <img src="../assets/logos/tools/argocd.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Argo CD" />
  <img src="../assets/logos/tools/terraform.png" class="h-5.5 bg-white/90 border border-black/10 dark:border-transparent rounded p-0.5" alt="Terraform" />
  <span class="text-[0.6rem] op50 ml-1">3 images: api · worker · migrator</span>
</div>

<!--
~1 min. Say A2A aloud at first mention: "A2A — Agent-to-Agent, the open protocol for
one agent to call another."
"Boring on purpose": the innovation budget went into the two-path model;
the infrastructure is proven patterns. The control plane runs nothing; workers own the
browsers; they only meet through the queue and the database — that's what makes scaling trivial.
The A2A point matters: brag isn't an app with a private API, it's an agent other agents
call — the Business Layer is just its first customer.
Stack: Python/Starlette/asyncpg · NATS · PostgreSQL+Atlas · Playwright · Anthropic SDK · SvelteKit.
-->
