---
id: feedback_section
contentful_content_type: customComponent
component_variant: feedback_section
reference_entry: 1Td0TEEZSi989zXxbZuQ6H
nested_content_type: commonTextSet
last_synced: 2026-06-18
skeleton: [skeleton_feedback-section.svg]
status: draft
---

# Feedback Section

An engagement section that asks website visitors for input — which topics interest them, what
challenges them, or anything else you want to learn. Visitors pick a suggested topic chip or write
their own; every response lands in Slack (#website-feedback-form-submit).
_Category: Conversion (engagement / capture)._

## Tags (for search & the AI recommender)
- 🟡 **Pillars:** at its core a `foundation` engagement utility (a form). When it carries a messaging
  lean it's **Thought Leader** — editorial community dialogue ("the best topics come from practice…
  maybe part of the next episode") — with a **Trust Anchor** undertone (you listen / are approachable).
  _(Vicky to confirm.)_
- **Content density:** medium
- **Media:** none (UI only — no images)

## What it is
A `customComponent` (variant `feedback_section`): a two-part section. **Left** = eyebrow + heading +
paragraph (the invitation). **Right** = a form panel where the visitor either taps one of a few
**suggestion chips** or types a free-text idea (≈150 chars) and submits. All the on-screen microcopy
(labels, placeholder, button, success message, character counter) comes from a linked **Common Text
Set**; the chip options come from **feedbackSectionSuggestions**. Submissions are posted to Slack
(#website-feedback-form-submit).

## Purpose
Collect feedback or topic ideas straight from visitors — low-friction, with both guided (chips) and
open (free text) options.

## Usecase Examples
- "Which topics should we cover next?" on a blog / podcast page
- Gather pain points or feature wishes from the audience
- A lightweight idea box / mini survey
- Source editorial ideas directly from readers

## Strengths
- Two ways to answer — pick a suggested chip OR write your own
- Responses flow straight to Slack (#website-feedback-form-submit) — no inbox to manage
- Signals you listen to your audience → builds rapport
- Low-friction, one focused ask

## Limitations
- Links a Common Text Set for all the UI microcopy (set that up too)
- Free-text answer is short (≈150 characters)
- Needs the Slack submission endpoint wired (backend)
- Not a lead/contact form — it captures topics/feedback, not email or contact details

## Anti-pattern
Don't use it as a contact or lead-capture form (there's no email field). Don't overload it with too
many suggestion chips. Don't ask for feedback you have no intention of acting on.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `customComponent`, **Component variant = `feedback_section`**. **No character limits set.**

### Fields
| Field | Type | Notes |
|---|---|---|
| componentVariant | Symbol | `feedback_section` |
| eyebrowHeading / heading | Symbol | section eyebrow + heading (left) |
| paragraph | RichText | the invitation copy (left) |
| commonTextSet | Link → commonTextSet | **all UI microcopy** — "choose one" label, "or your own" label, textarea placeholder, submit button, success message, char counter |
| feedbackSectionSuggestions | Array → Symbol | the suggestion **chips** (e.g. Rechnungseingang, DATEV, Tipps + Tricks) |
| showOnCommonPages / showOnLandingPages / showOnBlogPostPages | Boolean | where it shows |
| ~~toggleDisabledHeading~~ / ~~toggleDescriptionParagraph~~ | Symbol | ⚠️ inert — Before/After Section leftovers, Dusan to remove |

### Nested: Common Text Set (`commonTextSet`)
| Field | Type | Notes |
|---|---|---|
| name | Symbol (required) | internal name |
| entries | Array | the UI text items |
| entriesJson | Object | key/value of the UI texts |

_Submissions are delivered to Slack **#website-feedback-form-submit** (backend wiring, not a Contentful field)._

## Copy budget (for Alexander) — recommended (Contentful sets no limits)
| Field | Recommended |
|---|---|
| Section eyebrow | ~32 characters |
| Section heading | ~60 characters |
| Section paragraph | 2–3 sentences |
| Suggestion chips | short, ~25 characters each (a few) |
| UI labels (choose one / or your own) | short |
| Textarea placeholder | short |
| Submit button | ~25 characters |
| Visitor free-text answer | ~150 characters (their input) |
| Success message | short, 1 line |

## How to find it in Contentful
Add entry → **Custom Component** → set **Component variant = `feedback_section`**. Fill eyebrow /
heading / paragraph, link a **Common Text Set** (with the UI labels, placeholder, button text, success
message), and add the topic options in **feedbackSectionSuggestions**. Set where it shows via **Show on
Common / Landing / Blog Post pages**.

## Skeleton
Low-fi structure (no copy) → [`skeleton_feedback-section.svg`](skeleton_feedback-section.svg)
Two columns: left = eyebrow → heading → paragraph (the invitation); right = a form panel with a
"choose one" label + suggestion chips, an "or your own" label + a free-text field (with a character
counter), and a submit button.
