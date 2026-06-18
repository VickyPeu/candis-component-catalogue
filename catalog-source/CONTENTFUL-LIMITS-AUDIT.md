# Contentful character-limit audit — for Dusan's cleanup ticket

Pulled live from Contentful (CMA, 2026-06-18) for the fields the Website Component Catalogue uses.
Goal: make the enforced character limits **sensible + consistent** so the catalogue's copy budgets
are real guidance. Numbers below are **recommendations to set in Contentful** — Vicky to confirm/adjust.

---

## 1. Absurd — fix first (Bento XL)
| Field | Now | → Recommend | Why |
|---|---|---|---|
| `bentoXL.eyebrowHeading` | **270** | **40** | 270 ≈ a paragraph; an eyebrow is one short kicker line |
| `bentoXL.heading` | **620** | **90** | 620 ≈ a chapter. A Bento XL heading can be a touch longer than a Bento M card heading (80), but not a book |

## 2. Eyebrows — standardize (same limit everywhere)
An eyebrow is always one short kicker line, so it should have the **same cap wherever it appears**.
Currently all over the place:

| Field | Now |
|---|---|
| `gridSection.eyebrowHeading` | 32 |
| `ctaSection.eyebrowHeading` | 32 |
| `bentoXL.eyebrowHeading` | 270 |
| `oneColumnSection.eyebrowHeading` | none |
| `customComponent.eyebrowHeading` | none |
| `modal.eyebrowHeading` | none |

→ **Recommend: 40 on all of them.** (Note: 32 is already a bit tight — e.g. "PRÄZISE, VERLÄSSLICH,
AUTOMATISCH" is 33 chars and would be cut off. 40 gives a little headroom.)

## 3. Headings — add sane caps where missing (these may differ by component)
| Field | Now | → Recommend | Note |
|---|---|---|---|
| `gridSection.heading` (section) | none | **80** | section heading |
| `oneColumnSection.heading` (section) | none | **80** | section heading |
| `customComponent.heading` (section) | none | **80** | section heading (steps / before-after / etc.) |
| `bentoXL.heading` | 620 | **90** | a bit longer is OK |
| `bentoM.heading` (card) | 80 | **80** ✓ | keep |
| `ctaSection.heading` | 52 | **52** ✓ (or 60) | intentionally punchy — keep, or 60 to roughly align |
| `modal.title` | none | **50** | the modal headline |

## 4. Missing caps worth adding
| Field | Now | → Recommend | Why |
|---|---|---|---|
| `link.title` (button / text-link copy) | none | **40** | buttons & links should stay short |
| `bentoM.stepLabel` | none | **16** | timeline marker (e.g. "Tag 14") |
| `modal.closeLabel` | none | **24** | short |
| `image.altText` | none | **125** | accessibility / SEO best practice |

## 5. Fine as-is / intentional (no change)
- `video.videoDuration` = 5 ✓ (e.g. "5 min")
- `ctaSection.paragraph` = 120 (punchy CTA body — keep). Other paragraphs are uncapped, which is fine
  for body copy (RichText).

---

## Also — fields to HIDE (ties into your "tidy up Contentful" ticket)
These **Before/After Section leftovers** currently show on the generic `customComponent` and are inert
for the variants that aren't Before/After — they confused us on Feedback / Exit Intent / Steps / Page
Bottom Banner. Hide or remove where not applicable:
- `customComponent.toggleDisabledHeading`
- `customComponent.toggleDescriptionParagraph`
- `customComponent.toggleActiveHeading`

(Once you change any limit, the catalogue re-syncs from the CMA and updates automatically.)
