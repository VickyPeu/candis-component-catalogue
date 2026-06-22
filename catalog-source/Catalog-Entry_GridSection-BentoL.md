---
id: bentol
contentful_content_type: gridSection
component_variant: bento_L
nested_content_type: bentoL
reference_entry: 5h38MChIFdiCBYxrDBfipS
last_synced: 2026-06-19
skeleton: [skeleton_bento-l.svg]
status: draft
see_also: BENTO-VARIANTS.md
---

# Grid Section — Bento L

Image-led cards in a grid (2 or 4, laid out in rows of 2). Each card pairs a 16:10 image with a short
heading + a brief line, plus an optional link. The most visual of the in-grid bentos.
_Category: Feature grids (it's a `gridSection`)._

> See [`BENTO-VARIANTS.md`](BENTO-VARIANTS.md) for how L compares to XS / S / M / XL.

## Tags (for search & the AI recommender)
- **Pillars:** **Translation of Complexity** (primary) — a picture per point · **Standard Setter** (secondary).
- **Content density:** medium
- **Media:** image (16:10) — required, one per card

## What it is
A `gridSection` (variant `bento_L`) holding `bentoL` boxes in `bentoBoxesL`, laid out **in rows of 2**
(2 or 4 cards). Each box:
- **image** — Link → image, **required** · shown at **16:10**, beside the text
- **heading** — ≤23 chars, **required** (the shortest of any bento)
- **paragraph** — rich text, ≤70 chars, optional
- **additionalLink** — an optional link

## Purpose
A small, visual set of feature/benefit cards where the image matters most.

## Usecase Examples
- Image-led feature / benefit cards (a picture per point)
- A small set of highlights where the visual matters most
- Two or four cards in a clean 2-up layout

## Strengths
- Most visual of the small bentos — a 16:10 image per card
- Clean 2-up layout (2 or 4 cards)
- Optional link per card
- Image carries the message, so copy stays short

## Limitations
- Image is required — no icon-only or text-only cards
- Very tight copy: heading ≤23 (the shortest of all bentos), paragraph ≤70
- Lays out in rows of 2 — use 2 or 4 (3 leaves a ragged row)

## Anti-pattern
Don't use it without good 16:10 images — the image is the point. Don't try to cram copy; the heading is
only 23 characters. Don't use odd counts that leave a half-empty row.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `bento_L`**; boxes are `bentoL` entries in `bentoBoxesL`.

### Bento L box (`bentoL`)
| Field | Type | Notes |
|---|---|---|
| image | Link → image | **required** · 16:10 |
| heading | Symbol | ≤23 · **required** |
| paragraph | RichText | ≤70 |
| additionalLink | Link → link | optional link |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | rich text | optional |
| Card heading (each) | 23 characters | required |
| Card paragraph (each) | 70 characters | optional |
| Card link text | short label | optional |
| Cards | 2 or 4 — rows of 2 | — |

## How to find it in Contentful
1. Create a Grid Section
2. Set Variant = `bento_L`; add 2 or 4 Bento L to `bentoBoxesL`
3. Set a 16:10 image + heading per box (paragraph and link optional)

## Skeleton
Low-fi structure (no copy) → [`skeleton_bento-l.svg`](skeleton_bento-l.svg)
Image-led cards in rows of 2; each pairs a 16:10 image with a short heading, a brief line and an optional link.
