---
id: bento_xl
contentful_content_type: bentoXL
reference_entry: 5vcEO0kBQC9layClG6pZJ6
last_synced: 2026-06-18
skeleton: [skeleton_bento-xl.svg]
status: draft
---

# Bento XL

A large feature section: a square (1:1) visual beside text — eyebrow, heading, paragraph — with an
optional button and text link. The visual can be an image, a video, or a custom HTML embed (e.g.
Navattic). Several background styles, and the image can sit left or right. Works as its own section or
nested inside a Grid Section.
_Category: Content (single)._

## Tags (for search & the AI recommender)
- **Pillars:** depends heavily on the content shown — a proof/integration story leans Trust Anchor /
  Standard Setter, an explainer-with-visual leans Translation of Complexity, an editorial take leans
  Thought Leader, and so on. The component is a flexible image-and-text block; the content sets the pillar.
- **Content density:** medium
- **Media:** image (1:1, transparent) · or video · or custom HTML (e.g. Navattic)

## What it is
A `bentoXL`: a two-part block — a **1:1 visual** on one side (set its position left or right) and **text**
on the other (eyebrow, heading, paragraph), plus up to two links (a button and/or a text link). The
visual is an `image`, a `video`, or a `customHtmlSection` (for interactive embeds like Navattic). The
image should be **square (1:1) with a transparent background** — the background behind it is set in
Contentful. Several **background variants** change the whole look. Can stand alone, or be placed inside
a Grid Section.

> The `icon` field is only relevant when a Bento XL sits inside a **Bento Tab Section** — ignore it for
> the standalone Bento XL described here.

## Purpose
Give one feature, story or integration a generous, visual spotlight beside a square graphic (or video /
interactive embed).

## Usecase Examples
- A standalone feature/story section (image + text + CTA)
- Showcase an integration or capability (e.g. "Direkter Export nach Sesam + DATEV")
- Embed an interactive product demo via custom HTML (Navattic)
- A bento placed inside a larger Grid Section

## Strengths
- Flexible media: a 1:1 image, a video, or a custom HTML embed
- Six background styles + image left/right for visual variety
- Generous heading/eyebrow room; supports a button + a text link
- Works standalone or inside a Grid Section

## Limitations
- The image must be **1:1 with a transparent background** (the background is set in Contentful)
- Media is required
- The `icon` field does nothing here (it's for the Bento Tab Section)

## Anti-pattern
Don't use a non-square or non-transparent image (the background won't show through correctly). Don't
rely on the Icon field for the standalone Bento XL.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `bentoXL`.

| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol (max 270) | eyebrow |
| heading | Symbol (max 620, required) | heading |
| paragraph | RichText (required) | body copy |
| media | Link → image / video / customHtmlSection (required) | the 1:1 visual (or video / HTML embed) |
| background | Symbol | one of: white · gray · gray_on_white · black · white_on_gray · white_on_black |
| imageBackground | Symbol | background behind the image: default · alternate · accent |
| imagePosition | Symbol | left · right |
| hasBorder | Boolean | optional border |
| additionalLink / additionalLinkTwo | Link → link | a button and/or a text link |
| icon | Link → image | ⚠️ only used inside a Bento Tab Section — ignore here |
| supportedIntegrations / supportedPricingPackages | Array | optional (integration logos / pricing-package tags) |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; “~” = recommendation
| Field | Recommended | Required? |
|---|---|---|
| Eyebrow | ~40 recommended (270 max) | optional |
| Heading | ~60 recommended (620 max) | required |
| Paragraph | 1–3 sentences | required |
| Button text | ~25 characters | optional |
| Text link | ~25 characters (optional) | optional |

## How to find it in Contentful
Create a **Bento XL**, write the eyebrow + heading + paragraph, set **Media** (a 1:1 transparent image,
a video, or a custom HTML embed), pick a **Background** + **Image position** (left/right), and add a
button / text link. Use it standalone or reference it from a Grid Section.

## Skeleton
Low-fi structure (no copy) → [`skeleton_bento-xl.svg`](skeleton_bento-xl.svg)
A two-part block: a 1:1 visual on one side and eyebrow → heading → paragraph + button / text link on
the other (image can be left or right; several background styles).
