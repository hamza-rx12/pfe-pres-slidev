<div class="kicker">Self-extension · the Domain Skill Manifest (DSM)</div>

## After the win, it writes the playbook

````md magic-move
```json
// the agent's recorded trace — learn run on github.com ($0.043 · 20.5 s)
[
  { "tool": "goto",
    "args": { "url": "https://github.com/hamza-rx12?tab=repositories" } },

  { "tool": "extract",
    "args": { "query": "list all repository names for user hamza-rx12" } }
]
```
```json
// the skill it proposed — a Domain Skill Manifest: validated, stored, versioned
{
  "name": "list_github_user_repos",
  "inputSchema": { "required": ["username"] },
  "_brag": {
    "steps": [
      { "op": "goto",
        "url": "https://github.com/{username}?tab=repositories" },
      { "op": "extract", "query": "list all repository names for the user" }
    ],
    "intent_examples": [
      { "text": "list repos for user hamza-rx12" },
      { "text": "show all repositories for GitHub user octocat" }
    ]
  }
}
```
````

<div class="flex flex-wrap gap-2 mt-4">
  <span v-click class="chip chip-teal"><carbon:bot /> agent-authored — like Voyager's skill library</span>
  <span v-click class="chip chip-teal"><carbon:checkmark /> declarative &amp; schema-validated — shaped like an MCP tool</span>
  <span v-click class="chip chip-teal"><carbon:document /> data, not code → portable · reviewable · version-controlled</span>
</div>

<!--
~1:15. Name the artifact out loud: "it proposes a Domain Skill Manifest — a DSM —
the format every learned skill is stored in."
The magic-move is the moment: watch the literal username become a {username}
parameter, and the one-off trace become a reusable, typed skill with routing examples.
"It generalised its own experience. That's the difference between doing and learning."
Position vs research: Voyager (agent-authored) + MCP (declarative, validated) — the DSM is both.
Schema-checked before saving; a bad proposal is dropped silently — never hurts the caller.
-->
