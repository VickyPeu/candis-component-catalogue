---
id: imagesection
contentful_content_type: imageSection
component_variant: (none — imageSection has no variant field)
reference_entry: 3vonwXp0lvdNPruldeDUKk
last_synced: 2026-06-19
skeleton: [skeleton_image-section.svg]
status: draft
---

# Image Section

A full-width image band used as a navigation element, an emotional CTA, or a brand-closing section. A
big image with an eyebrow + heading, and optionally one or two buttons — or none, just a nice brand moment.
_Category: Conversion._

## Tags (for search & the AI recommender)
- **Pillars:** leans **Trust Anchor** + **Translation of Complexity**, but it's a flexible band, so the
  pillar follows the page/context (marked content-dependent).
- **Content density:** low
- **Media:** a full-width background image · plus a mobile image (required for mobile)

## What it is
An `imageSection` (no variant): a required background `image` + a `mobileImage` for mobile, an
`eyebrowHeading` + `heading`, and optionally one or two buttons (`button` + `additionalButton`;
`isFirstButtonPrimary` sets which is primary) — **or no buttons at all**, just a brand moment. The text
sits over the image, so keep it legible. Short copy only.

## Purpose
Close a page on a brand/emotional note, push to the next step, or act as a visual navigation element.

## Usecase Examples
- An emotional CTA — big image + heading + a button to the next step
- A navigation element to push visitors onward
- A brand-closing section at the bottom of a page (no CTA needed)
- A full-width image moment with a short message

## Strengths
- A full-width image band — strong visual / emotional close
- Eyebrow + heading over the image, with up to two buttons
- Buttons optional — works as a pure brand moment too
- A simple way to end a page or send people to the next step

## Limitations
- Keep the text legible over the image (calm/dark area or overlay)
- Needs a separate mobile image
- Short copy only — eyebrow + heading (it's image-led)
- Not a content section — it's a visual CTA / closer

## Anti-pattern
Don't pile copy on it — eyebrow + heading is the budget. Don't forget the mobile image. Don't put text
over a busy part of the image. Use the **CTA Bento** if you need steps / ratings / testimonials — this
is the simple, emotional version.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `imageSection` (no variant).

### Fields
| Field | Type | Notes |
|---|---|---|
| image | Link → image | **required** · the full-width background image |
| mobileImage | Link → image | the separate image for mobile |
| eyebrowHeading | Symbol | short eyebrow |
| heading | Symbol | the headline |
| button / additionalButton | Link → link | optional · one or two buttons |
| isFirstButtonPrimary | Boolean | which button is primary |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Eyebrow | short | optional |
| Heading | ~60 characters | required |
| Button 1 | short label | optional |
| Button 2 | short label | optional |

## How to find it in Contentful
1. Create an Image Section
2. Add the background image + a mobile image
3. Then eyebrow + heading; optionally one or two buttons (or none — it can be a pure brand-closing section)

## Skeleton
Low-fi structure (no copy) → [`skeleton_image-section.svg`](skeleton_image-section.svg)
A full-width image with a centered eyebrow + heading and an optional button (or two); mobile image required.
