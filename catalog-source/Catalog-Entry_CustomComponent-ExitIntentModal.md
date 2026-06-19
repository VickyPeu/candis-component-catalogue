---
id: exit_intent_modal
contentful_content_type: customComponent
nested_content_type: modal
component_variant: exit_intent_modal
reference_entry: 5eCt3Ki8Ff9NxwWze9DXCS
nested_reference_entry: 4bgm4xfUwpMXdLjjFKAJii
last_synced: 2026-06-17
skeleton: [skeleton_exit-intent-modal.svg, skeleton_exit-intent-modal-countdown.svg]
status: draft
---

# Exit Intent Modal

An overlay (pop-up) that surfaces an urgent or high-value ask on top of the page — a limited-time deal,
a survey, a "book a consultation" prompt, or a gated download. Can be set to appear globally across the
site or only on chosen pages, and to pop up on exit or after a set number of seconds.
_Category: Conversion._

## Tags (for search & the AI recommender)
- 🟡 **Pillars:** primarily `foundation` — it's a conversion/overlay *mechanism*, not a pillar message in
  itself. Content-dependent: a "talk to our team" / gated-proof modal leans **Trust Anchor**; a deal /
  survey modal is pure urgency / conversion. _(Vicky to confirm.)_
- **Content density:** low (one focused ask)
- **Media:** image (optional) — **1:1 (square)** source ratio. PDF for gated variants.

## What it is
A **two-level** component. A `customComponent` (variant `exit_intent_modal`) is the **wrapper** — it only
controls **where** and **how often** the modal shows. It references a `modal` entry, which holds **all the
content** and a `variant` that sets the behaviour.

**Trigger / placement (set on the wrapper):**
- `showOnCommonPages` / `showOnLandingPages` / `showOnBlogPostPages` — show globally on those page types
- `displayOnPages` — target specific individual pages
- `triggerAfterSeconds` (on the modal) — auto-open after X seconds

**The 7 modal variants:**
| Variant | Behaviour |
|---|---|
| `common` | Does **not** open by itself — triggered by a button on the page. Used in the "Beratung buchen" flow: a page button opens it, the visitor books a slot with Christine (sales first contact) via Demodesk. |
| `exit_intent` | Opens when a visitor moves to leave the page — or after X seconds. |
| `exit_intent_countdown` | Exit-intent variant **with a countdown banner** inside (uses `exitIntentCountdownEndDate`). |
| `factsheet` | Gated factsheet download — email first, then the PDF. |
| `pricing_summary` | Gated pricing-summary download — email first. |
| `info_packages` | Gated info-packages download — email first. |
| `implementation_guide` | Gated implementation-guide download — email first. |

## Purpose
Surface one urgent or high-value ask without redesigning the page: communicate a time-limited deal
(summer / end-of-year), run a survey, prompt a booking, or capture an email in exchange for a download.

## Usecase Examples
- Summer deal / end-of-year deal announcement (with a countdown)
- Short survey or feedback prompt
- "Book a consultation" modal triggered from a page button (→ Demodesk, e.g. with Christine)
- Gated download — factsheet, pricing summary, info packages, implementation guide (email first)

## Strengths
- Appears over any page without touching that page's layout
- Flexible placement: global by page type, or only on chosen pages
- Timing control (exit-intent and/or after X seconds)
- Covers the whole urgency-to-conversion range: deals, surveys, booking, gated lead-gen
- Built-in countdown variant for genuine time pressure
- Trust microcopy + icons (`reassuranceText`, `iconsWithText`) to reduce friction at the ask

## Limitations
- Two-level setup — wrapper `customComponent` **plus** a linked `modal` entry
- Interruptive by nature — overuse trains visitors to dismiss it
- `common` variant does nothing on its own; it needs a page button wired to trigger it
- Gated variants need a `form` and the `pdf` set up
- No character limits set in Contentful

## Anti-pattern
Don't run it everywhere all the time, and don't stack multiple modals on one page — it should carry one
clear, worth-interrupting ask. Don't gate low-value content behind an email. Don't use it as a regular
content section.

## Structure in Contentful — auto-pulled, don't hand-edit

### Wrapper — `customComponent` (variant `exit_intent_modal`)
| Field | Type | Notes |
|---|---|---|
| componentVariant | Symbol | `exit_intent_modal` |
| exitIntentModal | Link → modal | the actual modal (content + behaviour) |
| showOnCommonPages | Boolean | show on common pages |
| showOnLandingPages | Boolean | show on landing pages |
| showOnBlogPostPages | Boolean | show on blog post pages |
| displayOnPages | Array | target specific pages |
| ~~toggleDisabledHeading~~ / ~~toggleDescriptionParagraph~~ | Symbol | ⚠️ inert here — leftover from Before/After Section, Dusan to remove |

### Modal — `modal`
| Field | Type | Notes |
|---|---|---|
| variant | Symbol | one of the 7 above |
| title | Symbol (localized) | **required** |
| closeLabel | Symbol (localized) | **required** — the close-button label |
| eyebrowHeading / heading | Symbol (localized) | |
| paragraph | RichText (localized) | |
| triggerAfterSeconds | Integer | auto-open delay |
| exitIntentCountdownEndDate | Date | countdown end (for `exit_intent_countdown`) |
| form | Link → form | gated-download / capture form (e.g. email) |
| pdf | Link | the gated asset |
| demodeskRoute | Symbol (localized) | book a consultation/demo |
| ctaButton / ctaButtonTwo | Link → link | up to two buttons |
| reassuranceText | Array → commonText | trust microcopy |
| iconsWithText / nextStepsIconsWithText | Array → commonRichText | icon + text rows |
| image / imageTwo / mobileImage / mobileImageTwo | Link → image | visuals (desktop + mobile) |
| sliderImages | Array → image | image slider inside the modal |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; “~” = recommendation
| Field | Recommended | Required? |
|---|---|---|
| Eyebrow | ~32 characters | optional |
| Heading | ~50 characters | optional |
| Title | ~50 characters | required |
| Close label | short | required |
| Paragraph | 1–2 sentences | optional |
| Button text | ~25 characters | optional |
| Reassurance text | short line | optional |

## How to find it in Contentful
Add entry → **Custom Component** → set **Component variant = `exit_intent_modal`**. Link an
**exitIntentModal** (a **Modal** entry), and in that modal pick the **variant** (`common`, `exit_intent`,
`exit_intent_countdown`, `factsheet`, `pricing_summary`, `info_packages`, `implementation_guide`). Fill
title + close label (required), texts, and what the variant needs — `triggerAfterSeconds`,
`exitIntentCountdownEndDate` (countdown), or a `form` + `pdf` (gated). Back on the wrapper, set where it
shows: **Show on Common / Landing / Blog Post pages** or **Display On Pages** for specific pages.

## Skeleton
Two visuals (wide modal card over a dimmed page, no copy) — the catalogue focuses on the **exit-intent**
use case for now. The action can be **either a button or an email field**; shown with and without the
countdown banner:
- Without countdown → [`skeleton_exit-intent-modal.svg`](skeleton_exit-intent-modal.svg)
- With countdown banner → [`skeleton_exit-intent-modal-countdown.svg`](skeleton_exit-intent-modal-countdown.svg)

A wide modal card over a dimmed page: close ×, eyebrow + heading and an optional countdown banner on the
left, the ask (a button or an email field), and an image on the right.

_(The same `modal` type also powers the `common` booking modal and the gated-download variants —
factsheet / pricing summary / info packages / implementation guide. Those are out of scope for this
catalogue entry for now.)_
