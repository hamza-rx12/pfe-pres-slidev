<div class="kicker">Backup · replay cost anatomy</div>

## Where the $0.0078 goes

<div class="mt-5 max-w-3xl">

| role of the call | model | tokens in / out | cost |
| --- | --- | --- | --- |
| route the request to a skill | Sonnet | 905 / 71 | $0.0038 |
| extract the page's data | Haiku | 2,403 / 166 | $0.0032 |
| validate result against the query | Haiku | 515 / 54 | $0.0008 |
| **total** | | **3,823 / 291** | **$0.0078** |

</div>

<div class="mt-5 text-base">
  Three small calls — routing, extraction, validation. <b class="text-teal-700 dark:text-teal-300">None of them drives navigation.</b><br />
  <span class="text-sm op70">The browser walks the recorded steps; the model never chooses where to click.</span>
</div>

<!--
For: "so replay isn't really LLM-free?" — correct, and deliberate: NAVIGATION is LLM-free
(that's where non-determinism and cost live); routing/extraction/validation are cheap,
bounded, auditable calls. The output-validation guard is forced ON for every learned skill.
-->
