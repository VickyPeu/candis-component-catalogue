---
id: bentoxltabs
contentful_content_type: gridSection
component_variant: bento_XL_tabs
nested_content_type: bentoXL
reference_entry: 30aod9lSi579SWGvZRLXaD
internal_nickname: "big booty bento"
last_synced: 2026-06-19
skeleton: [skeleton_bento-xl-tabs.svg]
status: draft
see_also: BENTO-VARIANTS.md
---

# Grid Section — Bento XL Tabs

Several Bento XL behind tabs — visitors see all the topics at a glance (the tab labels) and click to
jump to the one they want. The counterpart to the sticky scroll: orientation over reveal.
_Category: Feature grids (it's a `gridSection`). Internally nicknamed the "big booty bento."_

> See [`BENTO-VARIANTS.md`](BENTO-VARIANTS.md) for the bento family.

## Tags (for search & the AI recommender)
- **Pillars:** **Translation of Complexity** (primary) — organized overview of complex topics ·
  **Standard Setter** (secondary).
- **Content density:** high
- **Media:** one image (or video) per tab — shown when its tab is active

## What it is
A `gridSection` (variant `bento_XL_tabs`) holding up to ~5 `bentoXL` blocks in `bentoBoxesXL`, presented
as **tabs**. Visitors see every topic up front via the tab labels and click to switch. Each tab is a
full `bentoXL`: required media (image / video / custom HTML), a **heading that doubles as the SHORT tab
label** (the field allows ≤620, but keep it short here), a required paragraph, an optional eyebrow
(≤270) and up to two links.

## Purpose
Let visitors see all topics at once and pick — the orientation-first counterpart to the sticky scroll.

## Usecase Examples
- Show several topics at a glance and let visitors pick (tabbed)
- An organized alternative to one long scroll — orientation first
- Feature areas / product modules, each with its own visual
- When the order doesn't matter and people should choose their topic

## Strengths
- All topics visible up front as tabs — strong orientation
- Each tab is a full Bento XL (big visual + rich copy)
- Visitor-led — click the topic you care about
- The counterpart to the sticky scroll when "what's next?" matters

## Limitations
- Keep tab headings short — they're the tab labels
- Up to ~5 tabs — **not enforced in Contentful**, but more breaks the layout on small screens; use fewer
- Heavy: each tab needs real content + a visual
- Tabs hide all but the active panel — for a continuous narrative use the sticky scroll instead

## Anti-pattern
Don't exceed ~5 tabs (it breaks on mobile even though Contentful allows it). Don't write long tab
headings — they're the labels. Don't use tabs when the story should flow in order — that's the sticky
scroll's job.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `bento_XL_tabs`**; tabs are `bentoXL` entries in `bentoBoxesXL`.

### Bento XL tab (`bentoXL`)
| Field | Type | Notes |
|---|---|---|
| media | Link → image / video / customHtmlSection | **required** · shown when the tab is active |
| heading | Symbol | **the tab label** — keep it short (≤620 allowed) · **required** |
| paragraph | RichText | **required** · no limit |
| eyebrowHeading | Symbol | ≤270 |
| additionalLink / additionalLinkTwo | Link → link | up to two optional links |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | rich text | optional |
| Tab label = block heading (each) | keep it short — it's the tab | required |
| Block eyebrow (each) | 270 characters | optional |
| Block paragraph (each) | rich text — no limit | required |
| Tabs | up to ~5 (fewer is better — not enforced, but more breaks on mobile) | — |

## How to find it in Contentful
1. Create a Grid Section
2. Set Variant = `bento_XL_tabs`; add up to 5 Bento XL to `bentoBoxesXL`
3. Give each a short heading (it becomes the tab label) + media + paragraph

## Skeleton
Low-fi structure (no copy) → [`skeleton_bento-xl-tabs.svg`](skeleton_bento-xl-tabs.svg)
A row of tabs (one active) with a panel below showing the active Bento XL — a big image/video with rich copy.
