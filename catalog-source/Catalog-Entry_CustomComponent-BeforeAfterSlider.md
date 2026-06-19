---
id: custom_component__before_after_slider
contentful_content_type: customComponent
component_variant: before_after_slider
reference_entry: 12hjP4eNXU7h0ZjtBmGw21
last_synced: 2026-06-17
skeleton: [skeleton_before-after-slider-desktop.svg, skeleton_before-after-slider-mobile.svg]
status: draft
---

# Before / After Slider

An interactive before/after comparison that contrasts the "without Candis" and "with Candis" workflow
across 3–4 paired Bento M cards — drag to reveal on desktop, toggle on mobile.
_Category: Process._

> **Note — lives inside `customComponent`.** Candis ran out of content models on its Contentful plan,
> so many components are built as variants of one generic `customComponent` type (here
> `componentVariant = before_after_slider`). That type has ~34 fields total; only the subset below
> applies to this variant — the rest belong to other variants.

## Tags (for search & the AI recommender)
- **Pillars — strong:** Translation of Complexity
- **Pillars — possible:** Trust Anchor · Standard Setter
- **Pillar note:** The before→after reveal makes a transformation tangible (Translation of Complexity); "before = pain you recognise, after = Candis relief" can also build trust.
- **Content density:** medium
- **Media:** image (one per Bento M card)

## What it is
A before/after slider. It shows a row of 3–4 "before" Bento M cards and a matching set of 3–4 "after"
Bento M cards. On **desktop**, visitors drag a slider handle (spanning the full height of the component) to reveal the
"after" cards underneath; on **mobile**, they toggle between before and after. The section has its own
eyebrow + heading + paragraph; inside the component, a before/after headline labels the current state
(desktop), and the toggle labels drive the mobile toggle.

## Purpose
Make a transformation tangible — show the "without Candis" situation next to the "with Candis" one and
let the visitor reveal the improvement themselves.

## Usecase Examples
- "Ohne und mit Candis" workflow comparison (the canonical use)
- Showing pain (before) → relief (after) across the steps of a process
- Any before/after transformation story

## Strengths
- Interactive reveal (drag / toggle) makes the contrast memorable
- 3–4 paired cards cover a multi-step transformation
- Shows, not tells — strong Translation of Complexity
- "Before = recognisable pain, after = Candis relief"

## Limitations
- Needs paired before/after content for every card (double the content)
- Needs good imagery per Bento M card
- Interaction differs desktop (drag) vs mobile (toggle) — test both
- Lives inside `customComponent`, so it's less discoverable in Contentful

## Anti-pattern
Not for non-transformation content. Don't mismatch the before/after card counts. Don't use it where a
simple statement would do.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `customComponent`, `componentVariant = before_after_slider`. Only the fields used by this
variant are listed. **No character limits on the section fields** (card limits come from Bento M).

### Section fields (relevant subset of `customComponent`)
| Field | Type | Notes |
|---|---|---|
| componentVariant | Symbol | = `before_after_slider` |
| eyebrowHeading | Symbol | section eyebrow (e.g. "Dein Workflow") |
| heading | Symbol | section heading (e.g. "Ohne und mit Candis") |
| paragraph | RichText | optional section intro |
| beforeHeading | Symbol | internal before-state headline (shown on desktop) |
| beforeState | Array → bentoM | the "before" cards (3 or 4 Bento M) |
| afterHeading | Symbol | internal after-state headline (shown on desktop) |
| afterState | Array → bentoM | the "after" cards (3 or 4 Bento M) |
| toggleDisabledHeading | Symbol | mobile toggle label, off (e.g. "Ohne Candis") |
| toggleActiveHeading | Symbol | mobile toggle label, on (e.g. "Mit Candis") |
| toggleDescriptionParagraph | Symbol | toggle hint (e.g. "Hier aktivieren und Vorteile entdecken") |
| background | Symbol | section background |
| showOnCommonPages / showOnLandingPages / showOnBlogPostPages | Boolean | where it renders |
| mobileImages | Array → image | ⚠ leftover — no effect anymore; ignore |

### Nested: before/after cards (`beforeState` / `afterState` → `bentoM`)
Each card is a **Bento M** (see the Grid Section — Bento M entry): image (16:10) or icon, heading
(**max 80**), a short rich-text paragraph, optional link.

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; “~” = recommendation
| Field | Recommended | Required? |
|---|---|---|
| Section eyebrow | ~32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | 1–2 sentences | optional |
| Before / after headings | short, ~24 characters (desktop) | optional |
| Card heading (each) | 80 characters | required |
| Card paragraph (each) | short, 1–2 sentences | optional |
| Mobile toggle labels | short | optional |

## How to find it in Contentful
Add entry → **Custom Component** → set **Component variant** = `before_after_slider`. Fill eyebrow +
heading; **Before Heading** + **Before State** (3–4 Bento M); **After Heading** + **After State**
(3–4 Bento M); the three **Toggle** fields (for the mobile toggle); **Background**; and the show-on-page
flags. Ignore **Mobile Images** (leftover).

## Skeleton
Two views (no copy):
- Desktop / drag slider → [`skeleton_before-after-slider-desktop.svg`](skeleton_before-after-slider-desktop.svg)
- Mobile / toggle → [`skeleton_before-after-slider-mobile.svg`](skeleton_before-after-slider-mobile.svg)

Centered eyebrow → heading, then a row of 3–4 Bento M cards with a draggable slider handle (desktop) or
a single card with a before/after toggle (mobile).
