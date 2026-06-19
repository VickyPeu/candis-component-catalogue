---
id: trust_section
contentful_content_type: customComponent
component_variant: trust_section
nested_content_type: platformRatings
reference_entry: 2sL7KbZhCD0boMXcfiVS4e
last_synced: 2026-06-18
skeleton: [skeleton_trust-section.svg]
status: draft
---

# Trust Section

A short proof strip for partnerships, certifications, badges or platform ratings. Items are image files
(optionally with a star rating + link). Fits roughly 2–8 items; when they don't fit the width it turns
into an automatically looping slider.
_Category: Content (single)._

## Tags (for search & the AI recommender)
- **Pillars:** **Trust Anchor** (primary) — social proof: partners, certs, ratings · **Standard Setter**
  (secondary) — ratings are measurable, comparable.
- **Content density:** low
- **Media:** logos / badges (image files) · or platform ratings

## What it is
A `customComponent` (variant `trust_section`): an eyebrow + heading on the left and a row of proof items
on the right. Items come from **`trustSectionItems`** (image files — partner/cert logos, badges) and/or
**`platformRatings`** (each with an image, a star rating and a link, e.g. Capterra / Google / App Store).
Works with about **2–8 items**; when they overflow the available width it becomes an **auto-looping
slider**.

## Purpose
Build credibility at a glance — show who trusts/partners with Candis, or how customers rate it.

## Usecase Examples
- Partner / certification logos ("Candis als offizieller Partner von")
- Customer ratings with stars (Capterra, Google, App Store, DATEV-Marktplatz…)
- Badges / trust marks / awards
- A proof strip placed near a conversion point

## Strengths
- Quick social-proof strip — partners, certs or ratings
- Auto-loops as a slider when items overflow the width
- Items can be plain logos OR rated platforms (stars + link)
- Works with 2 to ~8 items

## Limitations
- If **every** item must be visible at first glance, a Grid Section "logos" variant fits better (not built yet)
- Logos need clean, consistent image files
- Ratings need Platform Ratings entries (image + rating + url)

## Anti-pattern
Don't cram so many logos that the auto-slider hides key ones (use a logos grid instead). Don't use
unrelated or low-trust logos — it dilutes the proof.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `customComponent`, **Component variant = `trust_section`**.

### Fields
| Field | Type | Notes |
|---|---|---|
| componentVariant | Symbol | `trust_section` |
| eyebrowHeading / heading | Symbol | section eyebrow + heading |
| trustSectionItems | Array → image | the logo / badge image files |
| platformRatings | Array → platformRatings | rated platforms (image + star rating + link) |
| showOnCommonPages / showOnLandingPages / showOnBlogPostPages | Boolean | placement |
| ~~toggleDisabledHeading~~ / ~~toggleDescriptionParagraph~~ | Symbol | ⚠️ inert — Before/After Section leftovers, Dusan to remove |

### Nested: Platform Ratings (`platformRatings`)
| Field | Type | Notes |
|---|---|---|
| image / mobileImage | Link → image | the platform logo |
| rating | Number | the star score (e.g. 4.8) |
| url | Symbol | link to the review platform |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; “~” = recommendation
| Field | Recommended | Required? |
|---|---|---|
| Section eyebrow | ~32 characters | optional |
| Section heading | ~60 characters | optional |
| Items | 2–8 (more → auto-slider) | — |

## How to find it in Contentful
Create a **Custom Component**, set **Component variant = `trust_section`**, write the eyebrow + heading,
then add your proof items: **trustSectionItems** (logo / badge image files) and/or **platformRatings**
(image + star rating + link). 2–8 items; more turns it into an auto-looping slider.

## Skeleton
Low-fi structure (no copy) → [`skeleton_trust-section.svg`](skeleton_trust-section.svg)
Eyebrow + heading on the left, a row of logo/badge tiles on the right that auto-loops as a slider when
the items overflow the width.
