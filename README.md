# PFE Defense — brag: from RPA robots to autonomous browser agents

Slidev deck for the thesis defense (ENSAH · Data Engineering · 24 June 2026).

## Run

```bash
bun install
bun run dev      # live at http://localhost:3030 — press P for presenter mode (speaker notes + timer)
bun run build    # static build in dist/
bun run export   # PDF export (installs playwright-chromium on first use)
```

## Structure

- `slides.md` — manifest only (deck config + one `src:` entry per slide). **Edit slides in `pages/`.**
- `pages/01–20` — the main deck (~18–20 min)
- `pages/21–27` — appendix + backup slides for jury Q&A (replay cost anatomy, budget
  utilisation, prompt-cache shares, reliability code, engineering discipline, SOTA positioning)
- `components/VCount.vue` — count-up number, animates when its slide (and click) is reached
- `components/DuelBar.vue` — agent-vs-replay animated comparison bars
- `style.css` — global theme: deep-navy base, **amber = agent path**, **teal = replay path**
- `assets/` — logos and brag-ui screenshots reused from the report (`~/Git/pfe-typst`)

Every slide carries speaker notes (the HTML comment at the bottom of each page file)
with delivery cues and per-slide timing — visible in presenter mode.
