---
id: steps_section
contentful_content_type: customComponent
component_variant: steps_section
nested_content_type: bentoM
reference_entry: 6HPeOtt5U4xrYBjUhalQ1O
last_synced: 2026-06-19
skeleton: [skeleton_steps-section.svg]
status: draft
---

# Steps Section

A process/timeline section of **up to 5 steps**: Bento M cards laid out as steps (with a timeline of
step labels, e.g. "Heute → Tag 14 → Tag 30"), each with an image, a heading and a short checklist.
Optional button below. Use it to show how something unfolds over time.
_Category: Process._

## Tags (for search & the AI recommender)
- **Pillars:** **Translation of Complexity** (primary) — a process made tangible, one step at a time ·
  **Standard Setter** (secondary) — a clear, structured "this is how it goes" timeline.
- **Content density:** medium
- **Media:** image (required per card — the icon variant does NOT work here)

## What it is
A `customComponent` (variant `steps_section`): a row of **up to 5 Bento M cards** (the `steps` field,
Contentful-capped at 5), presented as a timeline. Each card carries a **step label** (the timeline
marker — e.g. "Heute", "Tag 14", "Tag 30"), an **image**, a **heading**, and a short **checklist** (the
card paragraph). Section eyebrow + heading above; an optional button below.

> Note: in the Steps Section the Bento M **`stepLabel` field IS used** (it drives the timeline markers).
> This is the opposite of the Grid Section, where `stepLabel` is inert.

## Purpose
Show a process or rollout as a clear, time-ordered sequence — what happens now, next, and later.

## Usecase Examples
- "So läuft die Implementierung" — onboarding / rollout timeline (Heute → Tag 14 → Tag 30)
- A multi-phase how-it-works for a process
- Before → during → after of a workflow, as discrete steps

## Strengths
- Reads instantly as a time-ordered process (timeline + step labels)
- Each step gets an image + heading + a scannable checklist
- Optional closing CTA (e.g. download a guide)
- Translation of Complexity — turns a process into digestible beats

## Limitations
- **Up to 5 steps** — Contentful caps the `steps` field at 5
- **Images required** — the icon variant does not work here
- Each step is a Bento M, so it inherits Bento M's card limits

## Anti-pattern
Don't use it for non-sequential content (use a Grid Section). Don't exceed 5 steps. Don't leave out the
images (icon-only breaks the layout).

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `customComponent`, **Component variant = `steps_section`**.

### Fields
| Field | Type | Notes |
|---|---|---|
| componentVariant | Symbol | `steps_section` |
| eyebrowHeading / heading | Symbol | section eyebrow + heading |
| paragraph | RichText | optional section intro |
| steps | Array → bentoM | **up to 5** Bento M cards (the steps) |
| ctaButton | Link → link | optional button below |
| showOnCommonPages / showOnLandingPages / showOnBlogPostPages | Boolean | placement |
| ~~toggleDisabledHeading~~ / ~~toggleDescriptionParagraph~~ | Symbol | ⚠️ inert — Before/After Section leftovers, Dusan to remove |

### Per step (`bentoM`)
| Field | Type | Notes |
|---|---|---|
| stepLabel | Symbol | **the timeline marker** (e.g. "Heute", "Tag 14") — active here |
| image | Link → image | **required** (icon variant doesn't work in Steps) |
| heading | Symbol | **max 80 characters** (enforced) |
| paragraph | RichText | the step's short checklist / description |

## Copy budget (for Alexander)
| Field | Recommended | Required? |
|---|---|---|
| Section eyebrow | ~32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | 1–2 sentences (optional) | optional |
| Step label (each) | short, ~12 characters (e.g. "Tag 14") | optional |
| Card heading (each) | 80 characters | required |
| Card checklist (each) | short bullet lines | optional |
| Button | ~25 characters | optional |
| Steps | up to 5 | — |

## How to find it in Contentful
Create a **Custom Component**, set **Component variant = `steps_section`**, write the section eyebrow +
heading, then add **up to 5 Bento M** cards under **steps** — each with a step label, an image
(required), a heading and a short checklist. Optionally link a CTA button, and choose where it shows.

## Skeleton
Low-fi structure (no copy) → [`skeleton_steps-section.svg`](skeleton_steps-section.svg)
Section eyebrow + heading, a timeline of step labels (up to 5 steps), then cards (image · heading ·
checklist), and an optional button below.
