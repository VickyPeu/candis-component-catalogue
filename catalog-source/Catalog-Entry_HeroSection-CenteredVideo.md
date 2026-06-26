---
id: herocenteredvideo
contentful_content_type: heroSection
component_variant: centered_video
reference_entry: 4Cn7H2w03WMNyHkt3lANg3
last_synced: 2026-06-19
skeleton: [skeleton_hero-centered-video.svg]
status: draft
---

# Hero Section — Centered Video

A fully centered, video-first hero — the most representative / flagship hero. Everything is centered
around a large video (16:9) that grows on scroll while the background inverts, making the video the
clear centerpiece. For a standalone page with one special, important topic.
_Category: Hero._

> **Use sparingly.** It's very prominent, so too many of these compete with the homepage — your most
> important page. Reach for it only on a representative standalone page (e.g. the product tour);
> currently it lives on the old homepage. For normal pages, use the **common hero**.

## Tags (for search & the AI recommender)
- **Pillars:** **Trust Anchor** + **Translation of Complexity** — but the actual pillar follows the
  page's topic, so it's marked content-dependent.
- **Content density:** high
- **Media:** a large centered video (16:9) — the centerpiece; grows on scroll while the background inverts

## What it is
A `heroSection` (variant `centered_video`): eyebrow + heading + trust chips (E-Rechnungen +
certifications) + a centered paragraph + a primary/secondary button, **all centered above a large
centered video (16:9)**. On scroll the video grows and the background inverts — the video is the star.
Same building blocks as the common hero (it can also carry a floating layer and Bento XS).

## Purpose
A flagship, representative top-of-page where the video is the main message.

## Usecase Examples
- A flagship, video-first hero for ONE special standalone page
- A representative top-of-page (e.g. the product tour; today the old homepage)
- When the video is the main message and should command attention
- A centered, prestige hero — used rarely

## Strengths
- Fully centered, video-first — the most representative hero
- The video grows on scroll and the background inverts → it really stands out
- Trust chips up top for instant credibility
- Same building blocks as the common hero, dialed up

## Limitations
- **Use SPARINGLY** — too many of these compete with the homepage (your most important page)
- Only for a standalone page with one special topic, not a default hero
- The video carries it — needs a strong, representative video
- Very prominent: not for routine / secondary pages

## Anti-pattern
Don't make it your default hero — it's a flagship; use the common hero for normal pages. Don't run
several across the site (they dilute and compete with the homepage). Don't use it without a video
worthy of the spotlight.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `heroSection`, **Variant = `centered_video`**.

### Fields (centered layout)
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol | ≤42 · centered |
| heading | Symbol | centered headline |
| eRechnungenAndCertificationsLinks | Array → link | 2–3 trust chips (E-Rechnungen + certifications) |
| paragraph | RichText | centered · kept tight |
| media | Link → video | the large centered video (16:9) — grows on scroll |
| button / additionalButton | Link → link | primary + secondary CTA |
| floatingLayer | Link → image | optional overlay on the video (use with care) |
| bentoBoxesXs | Array → bentoXS | optional, as in the common hero |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Eyebrow | 42 characters | optional |
| Heading | ~60 characters | required |
| Paragraph | rich text — kept tight (centered) | required |
| Primary button | short label | required |
| Secondary button | short label | optional |
| Trust chips | 2–3 (E-Rechnungen + certifications) | optional |

## How to find it in Contentful
1. Create a Hero Section
2. Set Variant = `centered_video`; centered eyebrow + heading + trust chips + paragraph + two buttons
3. With a large centered video (16:9) as the main piece

## Skeleton
Low-fi structure (no copy) → [`skeleton_hero-centered-video.svg`](skeleton_hero-centered-video.svg)
Everything centered above a large centered video — the main piece (grows on scroll, background inverts).
