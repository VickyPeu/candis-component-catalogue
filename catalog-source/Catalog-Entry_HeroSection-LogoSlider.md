---
id: herologoslider
contentful_content_type: heroSection
component_variant: customer_logo_slider
reference_entry: 4kffja4GXrVMEVVFKpstxP
last_synced: 2026-06-19
skeleton: [skeleton_hero-logo-slider.svg]
status: draft
---

# Hero Section — Logo Slider

A trust-heavy hero: the common-hero layout (eyebrow + heading + short paragraph + media + two buttons)
with a customer logo slider integrated right underneath. The logo strip makes it reassure hard —
"look who already works with us."
_Category: Hero._

## Tags (for search & the AI recommender)
- **Pillars:** **Trust Anchor** (primary) — the integrated logo proof · **Translation of Complexity** (secondary).
- **Content density:** high
- **Media:** an image (1:1) OR a video (16:9) — like the common hero · plus an integrated customer logo slider

## What it is
A `heroSection` (variant `customer_logo_slider`): the common-hero layout — eyebrow + heading + a short
paragraph + a primary/secondary button + trust chips + ONE `media` (image 1:1 OR video 16:9) — **plus an
integrated customer logo slider** (`logoSlider` → `sliderSection`) underneath, e.g. "100+ companies work
with Candis" + a row of logos. **No Bento XS** in this variant.

## Purpose
Lead with social proof — the logo slider makes the hero reassure hard.

## Usecase Examples
- A trust-first hero with an integrated customer logo slider
- Lead with social proof — "look who already works with us"
- An industry / segment landing page where credibility matters most
- The common-hero layout, plus a logo strip for proof

## Strengths
- Extreme trust — the customer logo slider is built right in
- Common-hero layout (eyebrow + heading + media + two buttons)
- Image (1:1) or video (16:9)
- A short trust-chip line on top of the logo proof

## Limitations
- **Keep the paragraph to ~4 lines** — no room for bullets or Bento XS
- **No Bento XS** in this variant (the logo slider takes the bottom)
- One media only — an image OR a video
- Needs real, recognizable customer logos to deliver the trust payoff

## Anti-pattern
Don't overload the paragraph — ~4 lines, no bullets, no Bento XS. Don't use it without a strong set of
recognizable customer logos — the slider is the whole point. Don't try to use both an image and a video.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `heroSection`, **Variant = `customer_logo_slider`**.

### Fields
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol | ≤42 |
| heading | Symbol | the headline |
| paragraph | RichText | **~4 lines max — no bullets** |
| media | Link → image / video | image (1:1) OR video (16:9) |
| trustChipsText | Symbol | short chips, e.g. "GoBD zertifiziert, Server in Deutschland" |
| logoSlider | Link → sliderSection | the integrated customer logo slider |
| button / additionalButton | Link → link | primary + secondary CTA |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Eyebrow | 42 characters | optional |
| Heading | ~60 characters | required |
| Paragraph | ~4 lines max — no bullets here | required |
| Primary button | short label | required |
| Secondary button | short label | optional |
| Trust chips | short (e.g. GoBD · Server in Deutschland) | optional |
| Logo slider caption | e.g. "100+ companies work with Candis" | optional |

## How to find it in Contentful
1. Create a Hero Section
2. Set Variant = `customer_logo_slider`; add eyebrow + heading + a short paragraph (~4 lines) + media (image 1:1 or video 16:9) + two buttons + trust chips
3. Then link a logo slider underneath

## Skeleton
Low-fi structure (no copy) → [`skeleton_hero-logo-slider.svg`](skeleton_hero-logo-slider.svg)
Common-hero layout on top, with an integrated customer logo slider along the bottom. No Bento XS.
