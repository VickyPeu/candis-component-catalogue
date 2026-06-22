---
id: bentoxs
contentful_content_type: gridSection
component_variant: bento_XS
nested_content_type: bentoXS
reference_entry: 6bZrjhrGUsKZIgAEFcuJ1U
last_synced: 2026-06-19
skeleton: [skeleton_bento-xs.svg]
status: draft
see_also: BENTO-VARIANTS.md
---

# Grid Section — Bento XS

The smallest bento: a row of 2–5 compact cards, each an icon + short heading + one-line paragraph.
Icons only (no images). A card can also act as in-page navigation — "On Click scroll to" anchors down
to a Bento XL on the same page.
_Category: Feature grids (it's a `gridSection`)._

> See [`BENTO-VARIANTS.md`](BENTO-VARIANTS.md) for how XS compares to S / M / L / XL.

## Tags (for search & the AI recommender)
- **Pillars:** **Translation of Complexity** (primary) — compact, scannable · **Standard Setter** (secondary).
- **Content density:** low
- **Media:** icon only (no images)

## What it is
A `gridSection` (variant `bento_XS`) holding **2–5 `bentoXS`** boxes (`bentoBoxesXS`). Each box:
- **icon** — Link → image, **required** (an image entry used as a small icon; icons only, no photos)
- **eyebrowHeading** — ≤16 chars, optional
- **heading** — ≤38 chars, **required**
- **paragraph** — rich text, ≤130 chars, optional
- **onClickScrollTo** — optional; anchor-scrolls to a **Bento XL** (see limitation)

## Purpose
A tight feature/highlight strip, or compact in-page navigation.

## Usecase Examples
- A compact row of features / highlights (icon + a few words)
- In-page navigation — a card scroll-jumps to a Bento XL further down
- A quick "at a glance" capability strip

## Strengths
- Smallest, tightest bento — icon + heading + one line
- 2–5 cards in a clean row
- Can double as in-page navigation (scroll to a Bento XL)
- Forces concise copy (heading ≤38, paragraph ≤130)

## Limitations
- Icons only — no images (use Bento S / M / L for images)
- Very tight copy: heading ≤38, paragraph ≤130 chars
- ⚠️ **"On Click scroll to" can ONLY target a Bento XL** — not an arbitrary page or section (Contentful
  restricts the field to `bentoXL`). Logged in BENTO-VARIANTS.md as a cleanup candidate.
- Needs 2–5 cards — not for a single highlight

## Anti-pattern
Don't try to fit a full sentence — XS is an icon + a few words. Don't expect images. Don't rely on it to
jump anywhere other than a Bento XL anchor.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `bento_XS`**; boxes are `bentoXS` entries in `bentoBoxesXS`.

### Bento XS box (`bentoXS`)
| Field | Type | Notes |
|---|---|---|
| icon | Link → image | **required** · icons only |
| eyebrowHeading | Symbol | ≤16 |
| heading | Symbol | ≤38 · **required** |
| paragraph | RichText | ≤130 |
| onClickScrollTo | Link → bentoXL | optional in-page anchor (Bento XL only) |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | rich text | optional |
| Card eyebrow (each) | 16 characters | optional |
| Card heading (each) | 38 characters | required |
| Card paragraph (each) | 130 characters | optional |
| Cards | 2–5 per section | — |

## How to find it in Contentful
Create / reuse a **Grid Section**, set **Variant = `bento_XS`**, add **2–5 Bento XS** to `bentoBoxesXS`.
Each needs an **icon** + **heading** (≤38); add an optional eyebrow (≤16) and paragraph (≤130). To use a
card as in-page nav, set **On Click scroll to** → a Bento XL on the page.

## Skeleton
Low-fi structure (no copy) → [`skeleton_bento-xs.svg`](skeleton_bento-xs.svg)
A row of compact cards: icon tile, short heading, one-line paragraph.
