# Candis Component Catalogue — Design Spec

Single source of truth for how the tool **and** the skeletons look, so everything is aus einem Guss.
Two parts: **A) Tool design tokens** (the catalogue page itself, styled like the Candis website) and
**B) Skeleton rules** (the low-fi wireframes — kept neutral greyscale on purpose, NOT brand-coloured).

🟡 = value estimated from website screenshots — **Vicky to confirm / replace with the exact Candis hex / font.**

---

## A) Tool design tokens (catalogue page → more like candis.io)

### Colours
| Token | Use | Value (🟡 = confirm) |
|---|---|---|
| `--bg` | page background (warm cream) | 🟡 `#F7F5F2` |
| `--surface` | cards / panels | `#FFFFFF` |
| `--ink` | headlines, near-black plum | 🟡 `#1E1A24` |
| `--body` | body text | 🟡 `#5A5766` |
| `--muted` | eyebrows / captions (uppercase) | 🟡 `#8A8794` |
| `--accent` | primary violet (headline highlight, links, active) | 🟡 `#7C5CFC` |
| `--accent-soft` | lavender panel background | 🟡 `#F1ECFB` |
| `--dark` | dark aubergine section background | 🟡 `#2A2233` |
| `--border` | hairline borders | 🟡 `#E7E3DD` |
| `--success` | green status dot | 🟡 `#2FA86A` |

Pillar colours stay as-is (Authority `#3F3A74`, Thought Leader `#75323B`, Standard Setter `#206062`,
Trust Anchor `#314C39`, Translation of Complexity `#BE704C`).

### Typography
| Role | Font (🟡 = confirm exact Candis font) | Notes |
|---|---|---|
| Display / headings | 🟡 serif — Candis uses an elegant serif; interim = **Fraunces** | large, `--ink`, tight leading |
| Accent word in headline | same serif, colour `--accent` | like "Rechnungsmanagement-Software" |
| Body | 🟡 grotesk sans — interim = **Hanken Grotesk** | `--body` |
| Eyebrow / label | sans, **UPPERCASE**, letter-spacing ~0.12em, `--muted` | like "ALLE FUNKTIONEN IM ÜBERBLICK" |
| Spec / mono bits | **JetBrains Mono** | copy budgets, field specs |

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

### Skeleton palette (fixed)
| Token | Use | Value |
|---|---|---|
| placeholder fill | text bars, media fill | `#DCD9CD` |
| container stroke | outlined boxes | `#B4B2A9` |
| field fill / stroke | input fields | `#ECEAE1` / `#9C9A90` |
| button fill | buttons | `#C2BFB3` |
| label text | element names | `#6B6A65`, mono, 11px |
| dim backdrop | behind modals/overlays | `#6B6A65` @ 10–12% opacity |

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
