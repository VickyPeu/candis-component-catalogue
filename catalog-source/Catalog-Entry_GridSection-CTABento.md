---
id: ctabento
contentful_content_type: gridSection
component_variant: cta_bento
nested_content_type: [bentoS, platformRatings, testimonials]
reference_entry: 4WpnHsNMbuZchwf2162SgV
example_entry: 45bGmTuDV2F6l0r7RVOjcX
last_synced: 2026-06-19
skeleton: [skeleton_cta-bento.svg]
status: draft
---

# Grid Section — CTA Bento

A big CTA section for prospects: high transparency on what to expect (e.g. a 3-step path to getting
started) plus trust (platform ratings + short testimonials) and a clear call to action. Purpose-built
like the integrations section, but the structure is reusable.
_Category: Conversion._

> **Layout:** section header + a big heading image on the right; numbered step cards on the left with a
> CTA button on the first; platform ratings under the image; up to 3 testimonials along the bottom.

## Tags (for search & the AI recommender)
- **Pillars:** **Trust Anchor** (primary) — ratings, testimonials, transparency · **Translation of
  Complexity** (secondary) — clear next steps.
- **Content density:** high
- **Media:** a heading image (the big side visual) · platform ratings · up to 3 testimonial avatars

## What it is
A `gridSection` (variant `cta_bento`): `eyebrowHeading` + `heading` + `paragraph`, a **`headingImage`**
(big side visual), **3 step cards in `bentoBoxesS`** (each a `bentoS` — heading + line, with a CTA
button + icon on the primary step), **`platformRatings`** (up to 3 — App Store / DATEV / Google) and up
to **3 `testimonials`** (quote + avatar + name/role). Built as a specific "next steps / here's what to
expect" block (e.g. initial call → demo → implementation), but the structure is reusable.

## Purpose
Show prospects exactly what happens next and reassure them with proof, then convert.

## Usecase Examples
- A "what to expect / next steps" CTA section (e.g. a 3-step path to getting started)
- Drive a demo / contact while reassuring with ratings + testimonials
- A high-transparency conversion section near the end of a page
- Reusable structure: steps + image + proof + CTA for other flows

## Strengths
- Purpose-built CTA: transparent next steps + trust in one section
- Pairs steps with a big image, platform ratings and short testimonials
- A clear primary CTA on the first step
- High transparency lowers friction before contacting sales

## Limitations
- A big, content-heavy section — needs steps, an image, ratings AND testimonials to feel complete
- Ratings and testimonials are up to 3 each
- Meant as a "next steps" CTA — repurposing works, but it's opinionated
- Steps are Bento S cards (heading ≤65, paragraph ≤130)

## Anti-pattern
Don't use it as a small call to action — it's a large, transparency-first section (use the plain **CTA
Section** for a compact CTA). Don't leave the ratings/testimonials empty — the trust proof is half the
point. Don't overload the steps with copy.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `cta_bento`**.

### Fields
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading / heading / paragraph | Symbol / RichText | section header |
| headingImage | Link → image | the big side visual |
| bentoBoxesS | Array → bentoS | the step cards (usually 3) — CTA button + icon on the primary step |
| platformRatings | Array → platformRatings | up to 3 (image + rating + url) |
| testimonials | Array → testimonials | up to 3 (quote + avatar + name/role) |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | rich text | optional |
| Step heading (each) | 65 characters | required |
| Step paragraph (each) | 130 characters | optional |
| Step CTA button | short label | optional |
| Steps | usually 3 (bentoBoxesS) | — |
| Testimonials | up to 3 (quote + name/role) | — |
| Platform ratings | up to 3 | — |

## How to find it in Contentful
1. Create a Grid Section
2. Set Variant = `cta_bento`; add 3 step cards to `bentoBoxesS` (CTA button on the first)
3. Set the `headingImage`
4. Attach `platformRatings` + up to 3 `testimonials`

## Skeleton
Low-fi structure (no copy) → [`skeleton_cta-bento.svg`](skeleton_cta-bento.svg)
Numbered steps on the left (CTA on the first), a big image + platform ratings on the right, and up to
three testimonials along the bottom.
