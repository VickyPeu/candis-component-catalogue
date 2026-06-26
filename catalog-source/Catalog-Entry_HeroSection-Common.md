---
id: herocommon
contentful_content_type: heroSection
component_variant: common
nested_content_type: bentoXS
reference_entry: bl2EEUf8cxQjIdHACNj9P
last_synced: 2026-06-19
skeleton: [skeleton_hero-common.svg]
status: draft
note: "heroSection has 7 more variants (centered_no_media, centered_video, comparison_cards, customer_logo_slider, full_image, media_tabs, upsell_page) — not yet catalogued."
---

# Hero Section — Common

The standard page hero: eyebrow + heading + paragraph, a primary + secondary button, an image (1:1) or
video (16:9), and trust proof. Its job is to give a fast overview of the topic and reassure visitors
they're in the right place. An optional Bento XS row sits underneath.
_Category: Hero._

## Tags (for search & the AI recommender)
- **Pillars:** **Trust Anchor** (reassurance, badges) + **Translation of Complexity** (fast clear
  overview). The actual pillar follows the page's topic, so it's marked content-dependent.
- **Content density:** high
- **Media:** an image (1:1) OR a video (16:9) · optional floating-layer image over the video

## What it is
A `heroSection` (variant `common`): `eyebrowHeading` (≤42) + `heading` + `paragraph`, a primary
`button` + a secondary `additionalButton`, and ONE `media` — an **image (1:1)** OR a **video (16:9)**.
Trust proof is optional: either **`trustBadges`** (GoBD + Cloud Services, a toggle) OR
**`trustChipsText`** (chips). An optional **`floatingLayer`** image can sit over the video thumbnail.
An optional row of **3–5 `bentoBoxesXs`** sits underneath.

## Bento XS behaviour (same as in a Grid Section)
- A Bento XS that **links to a Bento XL** (anchor, via `onClickScrollTo`) renders **as a card**.
- Otherwise it renders **without a card**.
- The Bento XS can be **omitted entirely**.

## Purpose
Give a fast overview of the topic and reassure visitors they've landed on the right page.

## Usecase Examples
- The standard top-of-page hero for a topic / landing page
- Give a fast overview and reassure visitors they're in the right place
- Lead with a video (16:9) or a product image (1:1) + two CTAs
- Add a Bento XS row for quick highlights / in-page jumps to a Bento XL

## Strengths
- Fast topic overview + reassurance above the fold
- Image (1:1) or video (16:9), primary + secondary CTA
- Trust proof via badges (GoBD + Cloud Services) or chips
- Optional Bento XS row — links to Bento XL render as cards, otherwise card-less

## Limitations
- **No Bento XS → the paragraph can run longer** (e.g. with bullet points); **WITH Bento XS keep it to
  ~3 lines**, or it's too much. _(Not enforced in Contentful — a copy rule.)_
- The floating layer is risky — skip it on busy thumbnails, and keep it legible on small desktops
- One media only — an image OR a video, not both
- Bento XS come in 3–5 (or none)

## Anti-pattern
Don't overload it — with Bento XS keep the paragraph to ~3 lines. Don't stack a floating layer on an
already-crowded thumbnail or one that breaks on small desktops. Don't try to use both an image and a video.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `heroSection`, **Variant = `common`**.

### Fields
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol | ≤42 |
| heading | Symbol | the headline |
| paragraph | RichText | see the copy rule above |
| media | Link → image / video / audio | image (1:1) OR video (16:9) |
| floatingLayer | Link → image | optional overlay on the video thumbnail (use with care) |
| portraitModeImage | Link → image | optional image for mobile |
| button / additionalButton | Link → link | primary + secondary CTA |
| trustBadges | Boolean | GoBD + Cloud Services badges |
| trustChipsText | Symbol | trust chips (alternative to the badges) |
| bentoBoxesXs | Array → bentoXS | optional · 3–5 · cards when they link to a Bento XL |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Eyebrow | 42 characters | optional |
| Heading | ~60 characters | required |
| Paragraph | rich text — see note | required |
| Primary button | short label | required |
| Secondary button | short label | optional |
| Trust chips text | short — alt to the badges | optional |
| Bento XS (each) | heading ≤38 · paragraph ≤130 | optional |
| Bento XS | optional · 3–5 if used | — |

## How to find it in Contentful
1. Create a Hero Section
2. Set Variant = `common`; add eyebrow + heading + paragraph + media (image 1:1 or video 16:9)
3. A primary + secondary button
4. Then trust badges (GoBD + Cloud Services) or trust chips; optionally 3–5 Bento XS

## Skeleton
Low-fi structure (no copy) → [`skeleton_hero-common.svg`](skeleton_hero-common.svg)
Text + two buttons + trust badges on the left, one media on the right, and an optional Bento XS row beneath.
