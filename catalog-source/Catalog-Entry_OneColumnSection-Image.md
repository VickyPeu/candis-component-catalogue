---
id: one_column_section__image
contentful_content_type: oneColumnSection
reference_entry: 6VfP8Kcr1HFfSxNcYulw86
last_synced: 2026-06-16
skeleton: skeleton_one-column-section-image.svg
status: reviewed
---

# 1-Column Section — Image

A centered single-column section that gives one statement room and backs it with a single image.
_Category: Content (single) · this is the `media = image` variant — video and table get their own entries._

## Tags (for search & the AI recommender)
- **Pillars:** depends heavily on the content shown — e.g. Editorial/brand image → Thought Leader / Authority · Diagram or before/after → Translation of Complexity · Product screenshot → Trust Anchor / Standard Setter · and many more
- **Content density:** low
- **Media:** image — **ratio is free choice**, but be aware it always spans the **full width** of the component

## What it is
A centered, single-column section with eyebrow + heading + paragraph and one large media slot —
here a single image (with alt text). Heading in serif or sans; background and highlight-color
options; optional link.

## Purpose
Gives ONE statement room and supports it with a single strong image — an editorial, brand or
explanatory visual. A single focal point.

## Usecase Examples
- Editorial / brand image moment
- Diagram or before/after visual (explaining a concept)
- Product screenshot as a focal proof
- A moment that puts one important image center stage — with framing copy

## Strengths
- A single focal point — no competition for attention
- Lots of real estate — ideal for one especially important image
- Lighter than video — faster load, less production effort
- Serif/sans + background/highlight for tonal range
- Built-in alt text (accessibility + SEO)

## Limitations
- A static image shows less than a video (no motion/demo)
- Can't carry multiple parallel points (use Grid/Bento)
- Strongly image-dependent — a weak image weakens the whole section

## Anti-pattern
Not for multiple parallel features (use Grid/Bento). Not for step-by-step (use Steps Section).
Don't use a purely decorative image where real proof or explanation is needed.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `oneColumnSection`, selected via `media = image`.
**No character limits are set on this component** (Symbols cap at 256).

### Section fields
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol (localized) | no limit |
| heading | Symbol (localized) | no limit |
| useSansSerifForHeading | Boolean | serif ↔ sans toggle |
| paragraph | RichText (localized) | |
| paragraphAlignment | Symbol | e.g. center |
| media | Link → **image** / table / video | here: image |
| mobileViewportImage | Link → image | optional mobile image |
| decisionOverviewTables | Array → table | optional |
| background | Symbol (required) | e.g. default |
| highlightColor | Symbol | e.g. blue |
| additionalLink | Link → link | optional; text or button |
| paddingTop | Integer | top spacing |

### Nested: image (`image`)
| Field | Type | Notes |
|---|---|---|
| title | Symbol (localized) | image title |
| image | Link → Asset (required) | the image file |
| altText | Symbol (localized) | alt text (accessibility + SEO) |
| size | Symbol | size variant |
| buttonImageWidth | Symbol | width when used as a button image |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; “~” = recommendation
| Field | Recommended | Required? |
|---|---|---|
| Section eyebrow | ~32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | 1–2 sentences | optional |
| Image alt text | ~125 characters | optional |
| Image title | ~60 characters | optional |
| Link text | ~25 characters (optional) | optional |

## How to find it in Contentful
Add entry → **1-Column Section** → set **Media** to an **Image** entry. Eyebrow, heading
(serif or sans), paragraph, optional link. The Image entry needs the image file and
(recommended) alt text.

## Skeleton
Low-fi structure (no copy) → [`skeleton_one-column-section-image.svg`](skeleton_one-column-section-image.svg)
Centered: eyebrow → heading → paragraph → one large image → optional link.
