---
id: bentoxlsticky
contentful_content_type: gridSection
component_variant: bento_XL_sticky_scroll
nested_content_type: bentoXL
reference_entry: 6Bwif5JI3u9OBTJgOi9p43
last_synced: 2026-06-19
skeleton: [skeleton_bento-xl-sticky-scroll.svg]
status: draft
see_also: BENTO-VARIANTS.md
---

# Grid Section — Bento XL Sticky Scroll

A long-form, scroll-driven story: several Bento XL stacked, where the media stays pinned while you
scroll each block's text and the visual swaps to match. For when you have a LOT to say and want to
guide visitors through it step by step.
_Category: Feature grids (it's a `gridSection`)._

> See [`BENTO-VARIANTS.md`](BENTO-VARIANTS.md) for the bento family. Bento XL is the only bento that
> also stands alone (catalogued separately); this variant chains several of them with a sticky scroll.

## Tags (for search & the AI recommender)
- **Pillars:** **Translation of Complexity** (primary) — deep, guided explanation · **Thought Leader**
  (secondary) — a narrative journey.
- **Content density:** high
- **Media:** one image (or video) per Bento XL — stays sticky while its text scrolls, then swaps

## What it is
A `gridSection` (variant `bento_XL_sticky_scroll`) holding several `bentoXL` blocks in `bentoBoxesXL`.
As you scroll, the **media stays pinned** while you read each block's text, and the visual **swaps** to
match the active block. Each `bentoXL` has a required media (image / video / custom HTML), a required
heading (≤620) and paragraph (rich text), an optional eyebrow (≤270), background/border options, image
position and up to two links.

## Purpose
Take visitors on a guided journey through a lot of content, one step at a time, with a visual that
keeps pace.

## Where it's strong (use cases)
- A guided **product walkthrough** — each step gets its own big visual
- **Storytelling a transformation or customer journey** (problem → solution, before → after)
- A **deep feature explanation** where every point deserves a large visual + dwell time
- A **screen-by-screen flow** where the image/video updates per step (great with UI shots)
- Any **narrative where you control the order and the reveal**

## Strengths
- Holds a LOT — several full Bento XL blocks of copy + visuals
- Sticky media keeps the visual in view while the story scrolls
- The visual swaps per block — strong for step-by-step / screen-by-screen flows
- Controls the reveal — great for journeys (you don't see what's next)
- Works with image, video or custom HTML media

## Limitations
- Overuse disorients — sticky scroll hides where you are; keep it focused, ideally one per page
- Visitors can't see what's coming — if they need all topics at a glance, use the **Bento XL Tab Section**
- Heavy: needs real content and a strong visual per block
- Long-form — not for a quick, scannable overview

## Anti-pattern
Don't use it for a short list or quick overview — that's what scannable grids/tabs are for. Don't stack
several sticky-scroll sections on one page (people lose orientation). Don't leave a block without a
meaningful visual — the swapping media is the whole point.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `bento_XL_sticky_scroll`**; blocks are `bentoXL` entries in `bentoBoxesXL`.

### Bento XL block (`bentoXL`)
| Field | Type | Notes |
|---|---|---|
| media | Link → image / video / customHtmlSection | **required** · stays sticky, swaps per block |
| heading | Symbol | ≤620 · **required** |
| paragraph | RichText | **required** · no limit |
| eyebrowHeading | Symbol | ≤270 |
| background / hasBorder / imagePosition | Symbol / Boolean | layout options |
| additionalLink / additionalLinkTwo | Link → link | up to two optional links |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | rich text | optional |
| Block eyebrow (each) | 270 characters | optional |
| Block heading (each) | 620 characters | required |
| Block paragraph (each) | rich text — no limit | required |
| Blocks | several Bento XL (up to ~10) | — |

## How to find it in Contentful
1. Create a Grid Section
2. Set Variant = `bento_XL_sticky_scroll`; add several Bento XL to `bentoBoxesXL`
3. Give each a media (image/video) + heading + paragraph (the media stays pinned while its text scrolls)

## Skeleton
Low-fi structure (no copy) → [`skeleton_bento-xl-sticky-scroll.svg`](skeleton_bento-xl-sticky-scroll.svg)
A pinned image on the left; several Bento XL text blocks scroll past on the right, the image swapping
as each block becomes active.
