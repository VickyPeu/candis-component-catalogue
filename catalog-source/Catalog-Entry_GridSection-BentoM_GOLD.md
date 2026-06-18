---
id: grid_section__bento_m
contentful_content_type: gridSection
reference_entry: 3hAxFxh7O8dXm4jdqKy5rF
last_synced: 2026-06-16
skeleton: skeleton_grid-section-bento-m.svg
status: reviewed
---

# Grid Section — Bento M

A grid of 2–9 medium "Bento M" cards, each with an image-or-icon, a heading and a short paragraph.
_Category: Feature Grids · this is the `variant = bento_M` of `gridSection` — other variants (Bento XS/S/L/XL, Magazin, Logos, …) get their own entries._

## Tags (for search & the AI recommender)
- **Pillars — strong:** Standard Setter · Translation of Complexity · Thought Leader
- **Pillars — possible:** Authority · Trust Anchor
- **Pillar note (content-dependent):** Feature grid → Standard Setter · image+sentence explanation → Translation of Complexity · link collection to blog posts → Thought Leader · Authority/Trust only conditionally
- **Content density:** medium
- **Media:** image, icon

## What it is
A section with eyebrow + heading + optional paragraph, below it a grid of 2–9 medium "Bento M"
cards. Each card carries either a 16:10 image OR an icon, a heading (max 80 chars) and a short
rich-text paragraph; optionally a link (text link or button).

## Purpose
Mainly an overview grid for a group of related points. Can also show a light numbered flow
(write the numbers directly into the image, icon or heading) or serve as a link collection
(e.g. to blog posts → then strongly Thought Leader). Very content-dependent.

## Usecase Examples
- Overview / feature or benefit grid (main purpose)
- Light numbered flow — write the numbers into the image, icon or heading (for real steps the Steps Section is better, but max 3 steps)
- Link collection (e.g. to blog posts) → Thought-Leader character

## Strengths
- Flexible architecture — carries many kinds of content and almost any pillar
- Image OR icon per card + short text: concrete and scannable
- Optional link per card (text link or button)
- 2–9 items, ideal 3 or 6

## Limitations
- Card heading hard-capped at 80 chars
- For pure trust-building, other components are usually a better fit
- With >6 items the grid gets busy

## Anti-pattern
For a real step-by-step process the Steps Section is better (but it has max 3 steps). A light
flow works here if the numbers are written into the image/icon/heading. Not as a primary trust element.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, selected via `variant = bento_M`.

### Section fields
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol (localized) | **max 32** |
| heading | Symbol (localized) | no explicit cap (≤256) |
| paragraph | RichText (localized) | bold / italic / underline only |
| headingAlignment | Symbol (enum) | center / left |
| firstBentoBoxImagePosition | Symbol (enum) | left / right |
| background | Symbol (enum) | gray, white, black, ai_brand, … |
| iconBackground | Symbol (enum) | gray, purple, pink, blue, yellow |
| displayTrustBadgesOnLastItem | Boolean | |
| ctaButton | Link → link | optional |
| testimonials | Array → testimonials | max 3 |
| platformRatings | Array → platformRatings | max 3 |

### Nested: cards (`bentoBoxesM` → `bentoM`, 2–9 items, ideal 3 or 6)
| Field | Type | Notes |
|---|---|---|
| heading | Symbol (required, localized) | **max 80** |
| paragraph | RichText (localized) | bold/italic/underline/code/super/subscript |
| image | Link → image | 16:10 — image OR icon |
| icon | Link → image | alternative to image |
| additionalLink | Link → link | optional; text or button |
| stepLabel | Symbol (localized) | ⚠ no effect in Grid context — belongs to Steps Section; ignore here |

## Copy budget (for Alexander) — recommended (Contentful sets no limits)
| Field | Recommended |
|---|---|
| Section eyebrow | ~32 characters |
| Section heading | ~60 characters |
| Section paragraph | 1–2 sentences |
| Card heading (each) | ~80 characters, required |
| Card paragraph (each) | short, 1–2 sentences |
| Card link text | ~25 characters (optional) |
| Cards | 2–9 (ideal 3 or 6) |

## How to find it in Contentful
Add entry → **Grid Section** → set field **Variant** = `bento_M` → add 2–9 **Bento M** entries
under **Bento Boxes M**. Each card: image *or* icon, heading (≤80), short paragraph, optional
link (text or button). To show a flow, write the numbers into the image/icon/heading.

## Skeleton
Low-fi structure (no copy) → [`skeleton_grid-section-bento-m.svg`](skeleton_grid-section-bento-m.svg)
Eyebrow → heading → paragraph, then 2–9 Bento M cards (ideal 3 or 6), each: image *or* icon
(16:10) → heading (≤80) → paragraph → optional link.
