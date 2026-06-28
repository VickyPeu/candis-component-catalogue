---
id: herofullimage
contentful_content_type: heroSection
component_variant: full_image
reference_entry: 5DZZyIQCgFbLqdPU2nOas6
last_synced: 2026-06-19
skeleton: [skeleton_hero-full-image.svg]
status: draft
---

# Hero Section — Full Image

A bold, full-bleed image hero: a complete background image with the eyebrow, heading, a short paragraph
and buttons centered over it. A visual, brand-moment hero for a standout page (campaign, Academy, event).
_Category: Hero._

## Tags (for search & the AI recommender)
- **Pillars:** leans **Trust Anchor** + **Translation of Complexity**, but the actual pillar follows the
  page's topic, so it's marked content-dependent.
- **Content density:** low
- **Media:** a full-bleed background image · plus a REQUIRED portrait (vertical) image for mobile

## What it is
A `heroSection` (variant `full_image`): a complete background image (`media`) with eyebrow + heading +
a short paragraph + up to two buttons centered over it, in white. A separate **`portraitModeImage`
(vertical) is REQUIRED for mobile**. The image can show anything — but the centered text must stay
legible. No Bento XS, logo slider or trust chips here; the image carries the visuals.

## Purpose
Make a bold, visual statement where the image sets the tone and the copy stays minimal.

## Usecase Examples
- A bold, visual brand-moment hero (campaign, Academy, event page)
- A standout page where a full image sets the tone
- When the image does the talking and the copy stays minimal
- A centered hero over a complete background image

## Strengths
- Full-bleed background image — maximum visual impact
- Centered eyebrow + heading + short paragraph + buttons over the image
- A dedicated portrait image keeps it sharp on mobile
- Great for a bold, branded standout page

## Limitations
- **Legibility is the risk** — the text must stay readable over the image (needs a calm/dark area or overlay)
- Copy is sparse: eyebrow + heading + a **≤3-line paragraph** (it's centered)
- A **portrait (vertical) image is REQUIRED for mobile**
- No Bento XS / logo slider / trust chips — the image carries the visuals

## Anti-pattern
Don't put text over a busy part of the image — protect legibility (calm area / overlay). Don't write
more than ~3 lines of centered paragraph. Don't skip the mobile portrait image. Don't expect room for
extra elements (bentos, logos) — keep it to centered text + buttons.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `heroSection`, **Variant = `full_image`**.

### Fields
| Field | Type | Notes |
|---|---|---|
| media | Link → image | the full-bleed background image |
| portraitModeImage | Link → image | **required** · the vertical image for mobile |
| eyebrowHeading | Symbol | ≤42 · centered |
| heading | Symbol | centered headline |
| paragraph | RichText | **≤3 lines** · centered |
| button / additionalButton | Link → link | up to two centered buttons |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Eyebrow | 42 characters | optional |
| Heading | ~60 characters | required |
| Paragraph | ≤3 lines (centered — legibility) | required |
| Primary button | short label | optional |
| Secondary button | short label | optional |

## How to find it in Contentful
1. Create a Hero Section
2. Set Variant = `full_image`; add the full background image + a portrait image for mobile
3. Then eyebrow + heading + a short (≤3 line) paragraph + up to two buttons — all centered over the image

## Skeleton
Low-fi structure (no copy) → [`skeleton_hero-full-image.svg`](skeleton_hero-full-image.svg)
A full-bleed background image with centered eyebrow + heading + short paragraph + buttons; portrait image required for mobile.
