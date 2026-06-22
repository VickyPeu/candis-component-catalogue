---
id: bentos
contentful_content_type: gridSection
component_variant: bento_S
nested_content_type: bentoS
reference_entry: 6c6fvZiQawxfjPGDLJsasB
last_synced: 2026-06-19
skeleton: [skeleton_bento-s.svg]
status: draft
see_also: BENTO-VARIANTS.md
---

# Grid Section — Bento S

Small cards in a grid (4 / 8 / 12, laid out in rows of 4). Each card: a heading + short paragraph +
optional text link, with your choice of an icon, an image, or a colored line on top.
_Category: Feature grids (it's a `gridSection`)._

> See [`BENTO-VARIANTS.md`](BENTO-VARIANTS.md) for how S compares to XS / M / L / XL.

## Tags (for search & the AI recommender)
- **Pillars:** **Translation of Complexity** (primary) — compact, scannable cards · **Standard Setter** (secondary).
- **Content density:** low
- **Media:** icon, image, or a colored top line (choose one) — all optional

## What it is
A `gridSection` (variant `bento_S`) holding `bentoS` boxes in `bentoBoxesS`, laid out **in rows of 4**
(typically 4, 8 or 12). Each box:
- **heading** — ≤65 chars, **required**
- **paragraph** — rich text, ≤130 chars, optional
- **additionalLink** — an optional text link
- ONE optional visual: **icon** (image entry) · **image** · or **topLineColor** (a colored line on top, a hex value)

## Purpose
A flexible row (or rows) of small feature/benefit cards.

## Usecase Examples
- A row (or rows) of small feature / benefit cards
- Compact highlights where each card needs a heading + a line + a link
- Cards set apart by a colored top line instead of an icon/image

## Strengths
- Small, flexible cards — icon, image, OR a colored top line per card
- Holds more cards than the others (4 / 8 / 12…)
- Optional text link per card
- Heading up to 65 + a short paragraph

## Limitations
- Lays out in rows of 4 — 4 / 8 / 12 look balanced (odd counts leave a ragged row)
- One visual per card — an icon, image or colored line, not several at once
- Tight paragraph (≤130 chars)

## Anti-pattern
Don't mix visual treatments randomly across cards if it looks messy — keep them consistent. Don't
overfill small cards with long copy. Don't use odd counts that leave a half-empty last row.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `bento_S`**; boxes are `bentoS` entries in `bentoBoxesS`.

### Bento S box (`bentoS`)
| Field | Type | Notes |
|---|---|---|
| heading | Symbol | ≤65 · **required** |
| paragraph | RichText | ≤130 |
| icon | Link → image | optional · one visual option |
| image | Link → image | optional · one visual option |
| topLineColor | Symbol | optional · a hex colour (≤7) — the colored top line |
| additionalLink | Link → link | optional text link |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Card heading (each) | 65 characters | required |
| Card paragraph (each) | 130 characters | optional |
| Top line colour | hex value, e.g. #895fd5 | optional |
| Card link text | short label | optional |
| Cards | 4 / 8 / 12 — rows of 4 | — |

## How to find it in Contentful
Create / reuse a **Grid Section**, set **Variant = `bento_S`**, add Bento S to `bentoBoxesS` (4 / 8 / 12).
Each needs a **heading** (≤65); add an optional paragraph (≤130), a text link, and ONE visual — an icon,
an image, or a **colored top line** (a hex colour).

## Skeleton
Low-fi structure (no copy) → [`skeleton_bento-s.svg`](skeleton_bento-s.svg)
Small cards in rows of 4; each shows the top-visual options (colored line · icon · image).
