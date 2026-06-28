---
id: testimonialslider
contentful_content_type: sliderSection
slider_size: testimonial
nested_content_type: testimonials
reference_entry: 1Y10XcpFMu6KwI5AaT9330
last_synced: 2026-06-19
skeleton: [skeleton_slider-testimonials.svg]
status: draft
note: "sliderSection's 'variant' is the size field (testimonial | logo | rating | small | medium | large). mode = slide | continuous_slide | continuous_slide_full_width. Other slider variants (logo, rating) not yet catalogued."
---

# Slider Section — Testimonials

A testimonials slider: customer quotes as social proof. One testimonial shows static; several
auto-rotate as a slider. Each pairs a 1:1 portrait + the company's monochrome logo with the person's
name, title and a short benefit quote.
_Category: Social Proof._

## Tags (for search & the AI recommender)
- **Pillars:** **Trust Anchor** — customer social proof.
- **Content density:** low
- **Media:** per testimonial — a 1:1 portrait of the speaker + the company logo as a monochrome vector

## What it is
A `sliderSection` with **`size = testimonial`**: `content` holds `testimonials` entries. Each
testimonial has a required **1:1 `portrait`**, a required company **`logo`** (monochrome vector),
**`employeeName`** + **`employeeTitle`**, the **`company`** name, and a **`quoteRichText` capped at 200
characters**. `mode` controls behaviour — a single testimonial is static; several auto-rotate
(`slide` / `continuous_slide`).

## Purpose
Back the page's message with a real customer voice.

## Usecase Examples
- Customer testimonials as social proof
- A single hero quote (static) or a rotating set (slider)
- Back a claim with a real customer voice + their logo
- Proof that lands a specific benefit matching the page

## Strengths
- Real customer proof — portrait + logo + name/title + quote
- One = static; several = an auto-rotating slider
- The quote lands one benefit, tied to the page's message
- Recognizable company logos add weight

## Limitations
- Quote is **capped at 200 characters** — keep it punchy, one benefit
- Needs a high-res **1:1 portrait** AND a **monochrome vector logo** per testimonial
- Real customer quotes need sign-off
- One testimonial is static (not a slider)

## Anti-pattern
Don't use vague, generic praise — land ONE concrete benefit that matches the page. Don't exceed 200
characters. Don't use low-res portraits or coloured/raster logos — it's a 1:1 high-res portrait + a
monochrome vector logo.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `sliderSection`, **size = `testimonial`**; slides are `testimonials` entries in `content`.

### Slider fields
| Field | Type | Notes |
|---|---|---|
| size | Symbol | `testimonial` |
| mode | Symbol | slide / continuous_slide / continuous_slide_full_width (single = static) |
| content | Array → testimonials | the testimonials |
| eyebrowHeading / heading | Symbol | optional section header |

### Each testimonial (`testimonials`)
| Field | Type | Notes |
|---|---|---|
| portrait | Link → image | **required** · high-res 1:1 |
| logo | Link → image | **required** · company logo, monochrome vector (.eps / .svg) |
| employeeName | Symbol | **required** |
| employeeTitle | Symbol | **required** · role at the company |
| company | Symbol | **required** |
| quoteRichText | RichText | **required** · ≤200 characters |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | short | optional |
| Section heading | short | optional |
| Quote (each) | 200 characters | required |
| Employee name (each) | short | required |
| Employee title (each) | short — role at the company | required |
| Company (each) | short | required |
| Testimonials | 1 (static) or several (slider) | — |

## How to find it in Contentful
1. Create a Slider Section
2. Set size = `testimonial`; add one or more testimonials to `content`
3. Set each one's 1:1 portrait + monochrome vector logo + name + title
4. Write a punchy ≤200-char benefit quote

## Skeleton
Low-fi structure (no copy) → [`skeleton_slider-testimonials.svg`](skeleton_slider-testimonials.svg)
A 1:1 portrait on the left; name + title + company logo and a short quote on the right; slider dots beneath.
