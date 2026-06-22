<div class="kicker">How it works <span class="op50">· Self-extension (DSM)</span></div>

## After the win, it writes the playbook

````md magic-move
```json
// 1 · what the agent just did — one recorded run ($0.043)
[
  { "tool": "goto",    "url": "github.com/hamza-rx12?tab=repositories" },
  { "tool": "extract", "query": "all repository names for hamza-rx12" }
]
```
```json
// 2 · what it saves — a reusable skill  (hamza-rx12 → {username})
{
  "name": "list_github_user_repos",
  "inputSchema": { "required": ["username"] },
  "_brag": {
    "steps": [
      { "op": "goto",    "url": "github.com/{username}?tab=repositories" },
      { "op": "extract", "query": "all repository names for the user" }
    ],
    "intent_examples": [ "list repos for user octocat" ]
  }
}
```
````

<div v-click class="mt-4 text-center text-base">
  The literal <span class="font-mono">hamza-rx12</span> becomes <span class="font-mono text-teal-700 dark:text-teal-300">{username}</span> —
  one run is now a skill that works for <b>anyone</b>.
</div>

<div class="flex flex-wrap gap-2 mt-4 justify-center">
  <span v-click class="chip chip-teal"><carbon:bot /> agent-written, schema-checked</span>
  <span v-click class="chip chip-teal"><carbon:document /> data, not code — versioned &amp; reviewable</span>
  <span v-click class="chip chip-teal"><carbon:document-export /> MCP-shaped · import / export anywhere</span>
</div>

<!--
~1:15. Name the artifact: "a Domain Skill Manifest — a DSM." Watch the magic-move: the literal
username becomes a {username} parameter, and a one-off trace becomes a typed, reusable skill
with examples the classifier matches on. "It generalised its own experience — that's the
difference between doing and learning." Positioning for questions: agent-authored like Voyager,
declarative and validated like an MCP tool; the DSM is both. A bad proposal is dropped silently
— it never hurts the caller.
-->
