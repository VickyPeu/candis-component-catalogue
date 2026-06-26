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

Several Bento XL as vertical tabs — every topic is visible at a glance. As you scroll it steps through
the tabs one after another (so everyone sees all of them), and you can click any tab to take full
control. The flexible counterpart to the sticky scroll.
_Category: Feature grids (it's a `gridSection`). Internally nicknamed the "big booty bento."_

> **Layout:** vertical tabs on the left (active tab highlighted, can carry an icon), the active Bento
> XL's text in the middle, and a **1:1** image on the right.

> See [`BENTO-VARIANTS.md`](BENTO-VARIANTS.md) for the bento family.

## Tags (for search & the AI recommender)
- **Pillars:** **Translation of Complexity** (primary) — organized overview of complex topics ·
  **Standard Setter** (secondary).
- **Content density:** high
- **Media:** a 1:1 image (or video) per tab · plus the Bento XL icon, which shows in the tab

## What it is
A `gridSection` (variant `bento_XL_tabs`) holding up to ~5 `bentoXL` blocks in `bentoBoxesXL`, presented
as **vertical tabs**. Every topic is visible at a glance. **Scrolling steps through the tabs one after
another** (so everyone passively sees all of them), and **clicking a tab gives full control**. Each
`bentoXL` renders differently in this variant:
- its **heading** becomes the **tab label** (the field allows ≤620, but keep it short)
- its **paragraph** becomes the **panel content** (rich text — bullet lists etc.)
- its **icon** shows **in the tab** (and the icon is shown ONLY in this variant — attach it on the Bento XL entry)
- its **media** (1:1 image / video / custom HTML) shows on the right; up to two links.

## Purpose
Show every topic at once with a scroll-through that also lets people self-navigate — the flexible
counterpart to the sticky scroll.

## Usecase Examples
- Show several topics at a glance and let visitors pick (tabbed)
- A guided-yet-browsable overview — scroll through it, or jump around
- Feature areas / product modules, each with its own visual
- When everyone should see all topics, with the option to self-navigate

## Strengths
- Every topic visible up front as tabs — strong orientation
- Scroll steps through the tabs automatically, so passive viewers still see all of them
- Click any tab for full self-directed control
- Each tab is a full Bento XL — a 1:1 image + rich copy, with an icon in the tab
- The flexible middle ground between the sticky scroll and plain tabs

## Limitations
- Each Bento XL renders differently here — keep the headline short (it's the tab label)
- Up to ~5 tabs — **not enforced in Contentful**, but more breaks the layout on small screens; use fewer
- Heavy: each tab needs real content + a 1:1 visual
- Only one panel shows at a time — for a single continuous narrative the sticky scroll flows better

## Anti-pattern
Don't exceed ~5 tabs (it breaks on mobile even though Contentful allows it). Don't write long headlines
— they become the tab labels. Don't use tabs when the story should flow as one continuous narrative —
that's the sticky scroll's job.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `bento_XL_tabs`**; tabs are `bentoXL` entries in `bentoBoxesXL`.

### Bento XL tab (`bentoXL`) — renders differently in this variant
| Field | Type | Notes |
|---|---|---|
| heading | Symbol | **the tab label** — keep it short (≤620 allowed) · **required** |
| paragraph | RichText | **the panel content** (rich text) · **required** |
| media | Link → image / video / customHtmlSection | **required** · **1:1** · shown on the right |
| icon | Link → image | shows **in the tab** — and only in this variant (attach it on the Bento XL) |
| additionalLink / additionalLinkTwo | Link → link | up to two optional links |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | rich text | optional |
| Bento XL headline (each) | short — rendered as the tab label | required |
| Bento XL paragraph (each) | rich text — rendered as the panel content | required |
| Tabs | up to ~5 (fewer is better — not enforced, but more breaks on mobile) | — |

## How to find it in Contentful
1. Create a Grid Section
2. Set Variant = `bento_XL_tabs`; add up to 5 Bento XL to `bentoBoxesXL`
3. Give each a short headline (the tab label) + a 1:1 media + paragraph (add an icon on the Bento XL — it shows in the tab)

## Skeleton
Low-fi structure (no copy) → [`skeleton_bento-xl-tabs.svg`](skeleton_bento-xl-tabs.svg)
Vertical tabs on the left (active highlighted, with an icon), the active Bento XL's paragraph in the
middle, and a 1:1 image on the right.
