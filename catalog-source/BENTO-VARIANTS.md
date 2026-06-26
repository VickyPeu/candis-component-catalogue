# Bento variants — what's actually different

The bentos look and behave similarly, so it's easy to lose track of which is which. This is the
single source of truth for the real differences, pulled from the Contentful content models (CMA, so
the enforced `size` limits are accurate). It also logs the **discrepancies / inconsistencies** worth
cleaning up — see the bottom section (candidates for Dusan).

> **Note on Bento XL:** it's the odd one out — the only bento that **stands on its own** as a component
> (catalogued separately as "Bento XL", `customComponent`-style standalone). It *can* sit inside a Grid
> Section (`bentoBoxesXL`, variant `bento_XL_*`) too, but we treat it as its own element. All the
> others (XS / S / M / L) only ever live **inside a Grid Section**.

_Last synced: 2026-06-19._

## At-a-glance comparison

| | **Bento XS** | **Bento S** | **Bento M** | **Bento L** | **Bento XL** |
|---|---|---|---|---|---|
| Content type | `bentoXS` | `bentoS` | `bentoM` | `bentoL` | `bentoXL` |
| Grid field / **allowed count** (CMA) | `bentoBoxesXS` · **2–5** | `bentoBoxesS` · **3–12** | `bentoBoxesM` · **2–9** | `bentoBoxesL` · **2–4** | `bentoBoxesXL` · **0–10** |
| **Layout in grid** (cols/row) | single row · 2–5 across | **rows of 4** (4 · 8 · 12) | **rows of 3** (3 · 6 · 9) | **rows of 2** (2 · 4) | **stands alone** · usually 1 |
| **Counts actually used** (of 225 entries) | 5 (×22), 3 (×10), 4 (×2) | **4 (×48)**, 8 (×5) | 3 (×16), 2 (×10) | 2 (×3) | 1 (×3) |
| Grid variant | `bento_XS` | `bento_S` (+ `bento_S_pricing_page_wow`) | `bento_M` | `bento_L` | `bento_XL`, `_sticky_scroll`, `_tabs` |
| **Icon** | ✅ **required** | ✅ optional | ✅ optional | ❌ none | ✅ optional |
| **Image** | ❌ **none** | ✅ optional | ✅ optional | ✅ **required** | ✅ `media` (image/video/HTML) **req** |
| **Eyebrow** | ✅ ≤16 | ❌ | ❌ | ❌ | ✅ ≤270 |
| **Heading** | ≤38 *(req)* | ≤65 *(req)* | ≤80 *(req)* | **≤23** *(req)* | ≤620 *(req)* |
| **Paragraph** | ≤130 | ≤130 | **no limit** | ≤70 | **no limit** *(req)* |
| Link | — | `additionalLink` | `additionalLink` | `additionalLink` | `additionalLink` + `additionalLinkTwo` |
| Special fields | `onClickScrollTo` (→ **bentoXL only**) | `topLineColor` (hex ≤7), `variant` | `stepLabel` (numbered flow) | — | `background`, `hasBorder`, `imagePosition`, `supportedIntegrations`, `supportedPricingPackages` |
| In catalogue? | ✅ #16 | ✅ #17 | ✅ #1 | ✅ #18 | ✅ #12 (standalone) |

## One-line "when to use which"
- **XS** — tightest. Icon + a few words. A compact feature strip, or in-page nav (scroll to a Bento XL).
- **S** — small cards, many of them (up to 12). Icon *or* image, a bit more copy than XS.
- **M** — the workhorse feature/benefit grid. Icon or image, generous copy, optional `stepLabel` for a numbered flow.
- **L** — image-led, very short heading (≤23). Few big cards (2–4).
- **XL** — stands alone. Big hero-ish block: image/video/custom HTML, long copy, integrations, pricing tags.

## Discrepancies & inconsistencies (cleanup candidates → Dusan)
1. **Heading limits don't follow size order.** L ("large") has the **shortest** heading at **23** chars,
   shorter than XS (38), S (65) and M (80). Counter-intuitive; easy to trip over.
2. **Paragraph limits are uneven.** XS = 130, S = 130, L = 70, but **M and XL have no enforced limit at
   all.** Either M/XL should get a sane cap or the others should be loosened — pick one rule.
3. **Icon vs image availability is all over the place.** XS = icon only · L = image only (required) ·
   S/M = both optional · XL = icon + media. No consistent pattern, so it's hard to remember what each can show.
4. **Allowed count ≠ layout-friendly count.** The CMA `size` range is wider than the layout actually
   wants, so editors can save combinations that render unbalanced:
   - **S** allows **3–12** but lays out in **rows of 4** — usage proves it (48 of 67 use exactly 4, the
     rest 8). Counts like 3, 5, 6, 7, 9–11 leave a ragged last row. Tighten to multiples of 4 (4/8/12).
   - **M** allows 2–9 but lays out in rows of 3 (clean at 3/6/9); 2 is a deliberate half-row.
   - **L** allows 2–4, lays out in rows of 2 (clean at 2/4); 3 leaves a gap.
   - **XL** allows 0–10 but is the standalone bento — almost always **1** per section.
5. **Eyebrow exists only on XS (≤16) and XL (≤270)** — not on S/M/L. And 16 vs 270 is a huge gap.
6. **`stepLabel` lives only on M**, `topLineColor` + a nested `variant` only on S — these one-off fields
   make the family feel inconsistent.
7. **Does XS even need to exist?** (Vicky's open question — discussing with Dusan.) XS is a tighter S
   with icons-only and no images; a single row of 2–5. Candidate to fold into S to reduce the family to
   **S / M / L / XL**. Needs a deeper look first.

### Confirmed by-design (not bugs, just worth knowing)
- **`onClickScrollTo` (Bento XS) targets a Bento XL only** — it anchor-scrolls to a Bento XL on the same
  page, *not* an arbitrary section/page. This is intended behavior (confirmed 2026-06-19), just a known
  constraint when using XS for in-page nav.

_All five bentos are in the catalogue (XS #16 · S #17 · M #1 · L #18 · XL #12 standalone). The two XL **grid** variants are catalogued too: **Bento XL Sticky Scroll #19** (`bento_XL_sticky_scroll` — pinned image, scroll-through story) and **Bento XL Tabs #20** (`bento_XL_tabs`, internally the "big booty bento" — all topics at a glance via tabs). Note on the Tabs variant: the bentoXL renders differently — `heading` = the tab label (keep short despite ≤620), `paragraph` = the panel content, **`icon` shows in the tab (and only in this variant)**, `media` is 1:1. Scrolling steps through the tabs one after another, and you can also click a tab. ~5 tabs max is a layout constraint, not enforced in Contentful. Keep this doc in sync if any field/limit changes._
