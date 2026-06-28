---
id: logoslider
contentful_content_type: sliderSection
slider_size: logo
nested_content_type: image
reference_entry: 7p4oSRzqaGiEI3raEB37Pv
last_synced: 2026-06-19
skeleton: [skeleton_slider-logos.svg]
status: draft
---

# Slider Section — Logos

A logo slider: a continuous, auto-rolling band of customer/reference logos with a short heading —
social proof that recognizable companies already rely on Candis.
_Category: Social Proof._

## Tags (for search & the AI recommender)
- **Pillars:** **Trust Anchor** (social proof) + **Standard Setter** (market reach).
- **Content density:** low
- **Media:** a continuous, auto-rolling row of customer/reference logos (image files)

## What it is
A `sliderSection` with **`size = logo`**: `content` holds **`image` entries** (the logos). An optional
short `eyebrowHeading` + `heading` frames it (e.g. "More than 10,000 companies already rely on Candis").
`mode` is usually `continuous_slide` for the auto-rolling effect (~6 visible).

> Different from the **Grid Section — Logos (Integrations)** (`logos_b`), where each logo deep-links to
> its own integration subpage. This one is a rolling trust band.

## Purpose
Prove credibility at a glance with a band of recognizable customer logos.

## Usecase Examples
- Show recognizable customer / reference logos as social proof
- A "trusted by 10,000+ companies" band
- Reinforce credibility for a specific target group (relevant logos)
- An auto-rolling logo strip with a short heading

## Strengths
- Continuous, auto-rolling band of customer logos
- A short eyebrow + heading frames the proof
- Recognizable, relevant logos build instant trust
- Simple: clean logo image files

## Limitations
- **Pick logos relevant to the page's audience and that they recognize** — random logos don't build trust
- Logos should be clean, consistent files (ideally monochrome) to look tidy
- Logos only — for a quote use the Testimonials slider
- Best with enough logos to fill the rolling row

## Anti-pattern
Don't use logos the visitor won't recognize or that don't fit the target group — relevance is the point.
Don't mix wildly different logo styles / colours — keep them consistent. Don't use it for quotes or
ratings (use the Testimonials slider).

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `sliderSection`, **size = `logo`**; slides are `image` entries in `content`.

### Fields
| Field | Type | Notes |
|---|---|---|
| size | Symbol | `logo` |
| mode | Symbol | usually `continuous_slide` (auto-rolling) |
| content | Array → image | the reference logos |
| eyebrowHeading / heading | Symbol | optional short header |
| slidesPerView | Integer | how many logos show at once (~6) |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | short (e.g. SEIT 2015) | optional |
| Section heading | short | optional |
| Logos | several (auto-rolling) | — |

## How to find it in Contentful
1. Create a Slider Section
2. Set size = `logo`
3. Add the reference logos as image entries to `content` + an eyebrow + heading
4. Set mode = `continuous_slide` (auto-rolling band)

## Skeleton
Low-fi structure (no copy) → [`skeleton_slider-logos.svg`](skeleton_slider-logos.svg)
A short eyebrow + heading on the left, and an auto-rolling band of reference logos on the right.
