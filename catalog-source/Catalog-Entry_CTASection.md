---
id: cta_section
contentful_content_type: ctaSection
nested_content_type: form
reference_entry: 3lWfESsqby3GpSeaaQmhnD
last_synced: 2026-06-17
skeleton: [skeleton_cta-section-form.svg, skeleton_cta-section-button.svg]
status: draft
---

# CTA Section

A conversion section that drives one action — click a button (e.g. ask for a consultation) or
sign up via a form (e.g. an email field).
_Category: Conversion._

## Tags (for search & the AI recommender)
- **Pillars:** a conversion element used across pillars — the page sets the tone. Often leans Trust Anchor (e.g. a low-risk "book a free, no-obligation consultation"); the heading / CTA copy carries the pillar.
- **Content density:** low
- **Media:** image (optional) — upload **16:10**, but the **copy sets the component height**, so the image is
  stretched/cropped to a different ratio · brief copy & graphic together

## What it is
A conversion section with eyebrow + heading + paragraph and ONE primary action: a CTA button (link)
or a sign-up form. Optional image with position control, a card background plus a surrounding section
background, a heading-font choice, and responsive hide-on-viewports. The form mode supports configurable
fields (e.g. email), submit/error/success text, a privacy policy, an optional modal, a Demodesk route
(book a consultation/demo) and a PDF opened on submit (gated download).

## Purpose
Get people to take the next step — click through (e.g. ask for a consultation) or sign up via a form
(e.g. email).

## Usecase Examples
- "Book a consultation / demo" button (or Demodesk form)
- Newsletter / waitlist email sign-up
- Gated content download (PDF opened on submit)
- End-of-page conversion ask / a clear next step

## Strengths
- Two modes: button click OR inline form — redirect or capture leads
- Form covers consultation booking (Demodesk), email capture, gated PDF, optional modal
- Optional image + card/section background colors for emphasis
- Responsive hide-on-viewports control
- Focused, single ask

## Limitations
- Should carry one clear ask — competing CTAs dilute it
- Form mode needs a linked form entry (with form fields) set up
- No character limits set → keep CTA copy tight and punchy

## Anti-pattern
Don't stack multiple competing CTAs. Don't use it as a content/storytelling section — it's the ask.
Don't bury the action under long copy.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `ctaSection`. **No character limits are set** (Symbols cap at 256).
Use **either** `ctaButton` (click mode) **or** `form` (sign-up mode).

### Section fields
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol (localized) | no limit |
| heading | Symbol (localized) | no limit |
| headingFont | Symbol | heading font choice |
| paragraph | RichText (localized) | |
| ctaButton | Link → link | **mode A** — the click button |
| form | Link → form | **mode B** — the sign-up form |
| background | Symbol (required) | CTA card background (e.g. yellow) |
| sectionBackground | Symbol | surrounding section background (e.g. white) |
| image | Link → image | optional image |
| imagePosition | Symbol | e.g. right bottom |
| hideOnViewports | Array (small/medium/large/xlarge/xxlarge) | responsive hiding |

### Nested: form (`form`) — sign-up mode
| Field | Type | Notes |
|---|---|---|
| type | Symbol (required) | form type |
| formFields | Array → formField (required) | the input fields (e.g. email) |
| buttonText / mobileButtonText | Symbol (req / opt, localized) | submit button label |
| errorMessage / successMessage | Symbol (required, localized) | feedback messages |
| privacyPolicy | RichText (localized) | privacy / consent text |
| modal | Link → modal | optional modal |
| demodeskRoute | Symbol (localized) | Demodesk route — book a consultation/demo |
| pdfOpenedOnSubmit | Link → Asset | gated PDF opened on submit |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; “~” = recommendation
| Field | Recommended | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | 52 characters (punchy) | optional |
| Section paragraph | 120 characters | optional |
| Button text | ~25 characters | required |
| Form success / error messages | short, 1 line each | required |
| Privacy policy | as needed (form mode) | optional |

## How to find it in Contentful
Add entry → **CTA Section**. Set eyebrow / heading / paragraph. For a click CTA, link a **CTA Button**
(link). For a sign-up, link a **Form** (with its form fields like email, button text, success/error
messages; optionally a Demodesk route or a PDF on submit). Set **Background** + **Section Background**,
add an optional **Image** + **Image Position**, and **Hide on viewports** as needed.

## Skeleton
Two modes (no copy), card split into equal content / image halves:
- Form / email sign-up → [`skeleton_cta-section-form.svg`](skeleton_cta-section-form.svg)
- Button / single click → [`skeleton_cta-section-button.svg`](skeleton_cta-section-button.svg)

A CTA card with eyebrow → heading → paragraph and an optional image (equal space to the content);
the CTA is either a sign-up form (e.g. email field + submit) or a single button.
