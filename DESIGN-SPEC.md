# Candis Component Catalogue — Design Spec

Single source of truth for how the tool **and** the skeletons look, so everything is aus einem Guss.
Two parts: **A) Tool design tokens** (the catalogue page itself, styled like the Candis website) and
**B) Skeleton rules** (the low-fi wireframes — kept neutral greyscale on purpose, NOT brand-coloured).

Values below are **confirmed by Vicky (2026-06-17)** and live in the tool.

---

## A) Tool design tokens (catalogue page → more like candis.io)

### Colours
| Token | Use | Value |
|---|---|---|
| `--bg` | page background (warm off-white) | `#faf8f8` |
| `--surface` | cards / panels | `#ffffff` |
| `--ink` | headlines, near-black plum | `#2b1a2e` |
| `--body` | body text | `#5a4c5b` |
| `--muted` | eyebrows / captions (uppercase) | `#9e959c` |
| `--accent` | primary violet (headline highlight, links, active) | `#895fd5` |
| `--accent-soft` | lavender panel background | `#f6f1fd` |
| `--accent-line` | lavender border | `#e7daf7` |
| `--dark` | dark aubergine section background | `#2b1a2e` |
| `--line` / border | hairline borders | `#ded8d8` |
| `--success` | green status dot | `#2fa86a` |

Pillar colours stay as-is (Authority `#3F3A74`, Thought Leader `#75323B`, Standard Setter `#206062`,
Trust Anchor `#314C39`, Translation of Complexity `#BE704C`).

### Typography — **Inter** everywhere (weights 300 light · 400 regular · 600 semi-bold)
| Role | Font / weight | Notes |
|---|---|---|
| Display / headings | Inter **600** | large, `--ink`, tight leading (-0.02em) |
| Accent word in headline | Inter 600, colour `--accent` | like "Rechnungsmanagement-Software" |
| Body | Inter **400** | `--body` |
| Eyebrow / label | Inter 400–600, **UPPERCASE**, letter-spacing ~0.12em, `--muted` | like "ALLE FUNKTIONEN IM ÜBERBLICK" |
| Spec / numeric bits | Inter (light 300 ok) | copy budgets, field specs |

### Components / patterns (from the website)
- **Buttons:** primary = filled `--dark` (near-black plum), white text, radius ~8px; secondary = `--surface` + `--border`.
- **Cards:** `--surface`, 1px `--border`, radius ~14px; emphasis variant = `--accent-soft` background, no border.
- **Eyebrows:** uppercase, letter-spaced, `--muted`, above the heading.
- **Pills / tags:** small rounded, light bg, optional leading green dot (`--success`) — e.g. "Kostenfrei · Unverbindlich".
- **Checkmark lists:** circular check in `--ink`/`--accent`.
- **Number badges:** numeral in a `--accent-soft` rounded square.
- **Dark section (optional):** `--dark` bg, white text, light cards on top — good for a hero/CTA band.
- **Radii:** sm 8 · md 14 · lg 20. **Shadows:** subtle, low-spread only.

---

## B) Skeleton rules (the wireframes — neutral, consistent)

Skeletons stay **greyscale/neutral** (a wireframe, not the final design) so they don't compete with the
real component. **They do NOT use the brand violet.** These rules fix the "sometimes an outline, sometimes
not" inconsistency.

### Skeleton palette (fixed) — Candis plum greyscale ramp
Neutral on purpose (a wireframe), but drawn from the Candis plum ramp so it sits with the brand.
| Token | Use | Value |
|---|---|---|
| card / surface | skeleton card fill | `#ffffff` |
| placeholder fill | text bars | `#ded8d8` |
| asset-slot fill / stroke | image / video boxes | `#ede8e8` / `#c1babe` |
| container stroke | outlined boxes (cards) | `#c1babe` (card border `#ded8d8`) |
| field fill / stroke | input fields | `#ede8e8` / `#9e959c` |
| button fill | buttons | `#9e959c` |
| label text | element names | `#716571`, Inter, 11px |
| dim backdrop | behind modals/overlays | `#2b1a2e` @ ~8% opacity |
| check / cross | comparison tables | green `#1D9E75` / red `#E24B4A` (semantic, kept) |

Ramp reference (lightest→darkest): `#ffffff · #faf8f8 · #ede8e8 · #ded8d8 · #c1babe · #9e959c · #7e737e · #716571 · #665a67 · #5a4c5b · #463748 · #372639 · #2b1a2e`.

### The core rule — three categories, each rendered ONE way
1. **Text** (eyebrow, heading, paragraph, any copy) → **filled solid rounded bars**, **NEVER an outline**.
   Heading bar is taller; paragraph = 1–2 thinner bars. → *Headlines are never outlined.*
2. **Asset slots** (image, video, the actual media) → **light-filled rounded box + a centered label**
   naming it; images include the ratio (e.g. `image · 1:1`, `Video 16:9`).
3. **Structural containers** (cards, the outer box of a grid item) → **outlined** (stroke, no fill).

So: **content = filled · containers = outlined.** That's the whole consistency rule.

### Specific elements
- **Buttons:** filled solid (button fill), centered label `button`.
- **Input fields:** light fill + thin stroke, left label `email field`.
- **Modals/overlays:** dim backdrop rect over the full canvas, then the card on top; `close ×` top-right.
- **Countdown / segmented bits:** equal small filled squares with `:` separators + one label underneath.
- **Slider handle / toggle:** circle (+ line) for drag; pill for toggle — kept minimal.

### Labels
- Short **element names only** — eyebrow, heading, paragraph, image, button, email field…
- **No explanatory sentences** inside the skeleton (existing rule).
- Add a char limit inline **only** where Contentful enforces one (e.g. `≤80`).
- Image labels always include the ratio.

### Canvas
- `viewBox` width **680** (consistent across all skeletons); height to fit.
- Card padding ~**30px** from canvas edge; consistent left margin for stacked elements.
- Transparent background (the tool frames it).

---

## How it's applied
- Tool tokens → the `:root` CSS variables + font links at the top of `index.html`.
- Skeleton palette → the shared `.ph/.lb/.fr/.fld/.btn/.kard` classes (inline `SK` in `index.html`) **and**
  the standalone `skeleton_*.svg` files — both must match.
- When the spec changes, update both places (and `catalog.html` stays synced to `index.html`).
