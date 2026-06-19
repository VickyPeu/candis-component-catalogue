---
id: page_bottom_banner
contentful_content_type: customComponent
component_variant: page_bottom_banner
reference_entry: 2tXuhRRObDIYqERd75bY9T
last_synced: 2026-06-18
skeleton: [skeleton_page-bottom-banner.svg]
status: draft
---

# Page Bottom Banner

A slim countdown banner pinned (sticky) to the bottom of the screen, with a dismiss (×). Use it to
communicate anything tied to a date — a deal, a webinar, an event — with a live countdown and a CTA.
Can be shown globally (by page type) or only on selected pages.
_Category: Conversion._

## Tags (for search & the AI recommender)
- **Pillars:** a `foundation` conversion/announcement utility — content-dependent. It carries urgency
  (deal/event), not a fixed messaging pillar; the offer + page set the tone. (Often pairs with Trust
  Anchor / Standard Setter content, but the banner itself is the mechanism.) _(Vicky to confirm.)_
- **Content density:** low
- **Media:** none (text + countdown + button)

## What it is
A `customComponent` (variant `page_bottom_banner`): a sticky bottom bar with a heading, a short
paragraph (date/time + one line), a **live countdown** (days : hours : minutes : seconds) driven by an
expiry date, and a CTA button. A close (×) dismisses it. Placement is flexible — globally on a page
type, or pinned to specific pages.

## Purpose
Surface a time-bound ask (deal, webinar, event) that follows the visitor down the page, without
interrupting like a modal.

## Usecase Examples
- Webinar / event registration with a countdown to the start
- Limited-time deal (e.g. end-of-year offer) counting down to the deadline
- Any date-driven announcement that should stay visible while scrolling

## Strengths
- Stays visible while scrolling without blocking the page (less interruptive than a modal)
- Built-in live countdown creates genuine urgency
- Dismissible — visitors can close it
- Flexible placement: global by page type, or only on chosen pages
- One clear ask (heading + countdown + CTA)

## Limitations
- Needs an expiry date to count down to (it's date-driven)
- Persistent footer eats a little screen space until dismissed
- One message at a time — it's a single banner

## Anti-pattern
Don't use it for evergreen content (no date = no countdown). Don't stack it with other persistent
banners. Don't keep it running past the deadline.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `customComponent`, **Component variant = `page_bottom_banner`**. **No character limits set.**

### Fields
| Field | Type | Notes |
|---|---|---|
| componentVariant | Symbol | `page_bottom_banner` |
| heading | Symbol | the banner title (e.g. "Webinar: Candis für Film…") |
| paragraph | RichText | date/time + one short line of context |
| pageBottomBannerExpiryDate | Date | the target the **countdown** counts down to |
| ctaButton | Link → link | the CTA (e.g. "Hier registrieren") |
| showOnCommonPages / showOnLandingPages / showOnBlogPostPages | Boolean | show globally on those page types |
| displayOnPages | Array → commonPage | pin to specific pages instead |
| ~~toggleDisabledHeading~~ / ~~toggleDescriptionParagraph~~ | Symbol | ⚠️ inert — Before/After Section leftovers, Dusan to remove |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; “~” = recommendation
| Field | Recommended | Required? |
|---|---|---|
| Heading | ~50 characters (punchy) | optional |
| Paragraph (date/time + line) | 1 short sentence | optional |
| CTA button | ~25 characters | optional |

## How to find it in Contentful
Create a **Custom Component**, set **Component variant = `page_bottom_banner`**, write the heading +
paragraph, set the **Expiry Date** (drives the countdown), link a **CTA Button**, and choose where it
shows — globally via **Show on Common / Landing / Blog Post pages**, or pinned via **Display On Pages**.

## Skeleton
Low-fi structure (no copy) → [`skeleton_page-bottom-banner.svg`](skeleton_page-bottom-banner.svg)
A slim bar pinned to the bottom of the page: heading + date + paragraph on the left, a countdown
(days : hours : minutes : seconds) in the middle, a CTA button on the right, and a close (×).
