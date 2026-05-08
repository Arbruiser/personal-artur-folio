# Terminal-vibe redesign

Going for a tasteful **terminal / hacker** aesthetic — think a researcher's CLI, not a Halloween green-on-black hacker movie. We keep your LUMI dark palette (purple/blue/magenta) but layer in mono accents, command prompts, and subtle animation. Editorial serif stays for headings so it still feels like *you*, not a generic dev portfolio.

## 1. Visual language

- Add **JetBrains Mono** as a third font for accents (prompts, tags, kbd-style chips).
- Section headers get a `~/portfolio $ cat about.md` style prefix in mono, muted — small, above the existing serif title.
- Skill chips restyled as `[ skill ]` mono tokens.
- Replace the "GitHub / Course project" right-side tag with a small `→ repo.git` mono label.
- Subtle scanline/noise overlay (very low opacity) over the background — adds texture without being loud.

## 2. Hero — animated name

- Above your name, a typing line: `$ whoami` → pause → output appears.
- **Name reveal**: "Artúr Vojt-Antal" types in character-by-character with a blinking caret, ~40ms/char. After completion, caret keeps blinking at the end for ~2s, then fades.
- The role line ("AI Specialist · LUMI Supercomputer") stays static but gets a mono prompt prefix.
- Runs once per page load; respects `prefers-reduced-motion` (instant render fallback).

## 3. Interactive RAG demo card (thesis spotlight)

New section **"Thesis · Phonological RAG"** placed *above* "Earlier projects". A self-contained card showing the pipeline from your thesis:

```text
[ query ] ──► [ retriever ] ──► [ top-k chunks ] ──► [ GPT-4o ] ──► [ answer ]
```

Behavior:
- 3 preset phonology questions as clickable mono chips (real examples paraphrased from the thesis, e.g. *"What is a syllable nucleus?"*).
- Click one → animated dots travel along the pipeline arrows, each stage lights up in sequence (purple → blue → magenta).
- "Retrieved chunks" panel reveals 2–3 short fake snippet cards.
- "Answer" panel types out a canned response.
- Below the diagram, a one-line stat pulled from your abstract: **"+16–56% accuracy over non-RAG baseline · 93–96% on self-made questions"** and a link to the PDF + Helda page.
- 100% client-side, no API calls — purely a visual storyteller.

## 4. Scroll-reveal sections

- Each `<Section>` fades + translates up 12px when it enters the viewport (IntersectionObserver, once).
- Stagger child items (project list rows, skill chips) by ~40ms for a cascade.
- Disabled under `prefers-reduced-motion`.

## 5. Magnetic links

- Apply to: GitHub project links, thesis link, LinkedIn CTA, contact button.
- On hover, the element translates ~6px toward the cursor with a spring ease; resets on leave.
- Touch devices: no-op.

## 6. Custom cursor accent

- A small **magenta dot** (8px) follows the cursor with slight lag (~80ms spring).
- Over interactive elements (`a`, `button`, `[role=button]`), it expands to a 32px ring with reduced opacity.
- Hidden on touch / coarse pointers and under `prefers-reduced-motion`.
- Native cursor stays visible (we *augment*, not replace — better accessibility).

## 7. Small terminal flourishes

- Footer: `> end of transmission` in mono, with a blinking caret.
- Section dividers: thin dashed line `─ ─ ─` instead of nothing.
- Hover on project links: title gets a `>` prefix that slides in from the left.

## Technical notes

- **New deps**: none required (framer-motion would be nice but we can do springs with CSS + rAF). Will add `framer-motion` only if needed for magnetic + cursor — it's ~30kb gzipped and worth it. Decision at implementation: lean toward adding it.
- **New files**:
  - `src/components/TerminalName.tsx` — typing animation
  - `src/components/RagDemo.tsx` — pipeline card
  - `src/components/MagneticLink.tsx` — wrapper
  - `src/components/CursorAccent.tsx` — global overlay, mounted once in root
  - `src/hooks/useReveal.ts` — IntersectionObserver hook
- **Edits**:
  - `src/components/Portfolio.tsx` — add prompts to sections, swap chip styles, mount RAG demo, wrap links in `MagneticLink`
  - `src/styles.css` — add JetBrains Mono import, `--font-mono`, scanline overlay, `prefers-reduced-motion` guards
  - `src/routes/__root.tsx` — mount `<CursorAccent />`
- **Accessibility**: every animation guarded by `prefers-reduced-motion`; cursor accent does not replace native cursor; RAG demo has a "Skip animation" affordance and is keyboard-operable.

## Out of scope (can add later)

- Real RAG backend (purely visual for now)
- Sound effects / keystroke audio
- Theme toggle (staying dark)
