---
id: faq
contentful_content_type: faqSection
component_variant: (none — faqSection has no variant field)
nested_content_type: faqQuestion
reference_entry: 5KX9NDNqo8L7022Pu59QEt
example_entries: [5pMXCIhotsnkQvpiAogeYK, 1A4C9ucNgxxs8jvzkJMxsI]
last_synced: 2026-06-19
skeleton: [skeleton_faq-section.svg]
status: draft
---

# FAQ Section

A heading + an accordion of up to 30 question/answer pairs. Built for **SEO and AI crawlers**
(structured Q&A that search & answer engines surface) and to **keep pages lean** — move detailed text
into the FAQ instead of bloating the page copy.
_Category: Content (single)._

## Tags (for search & the AI recommender)
- **Pillars:** **Translation of Complexity** (primary) — turns complex topics into clear plain
  answers · **Trust Anchor** (secondary) — handles security / data / access objections.
- **Content density:** high
- **Media:** none — text only

## What it is
A `faqSection`: a `heading` and a required list of up to **30 `faqQuestion`** entries. Each
`faqQuestion` has a **`question`** (plain text) and a **`answer`** in **rich text** (lists, links,
headings, embedded entries allowed). Renders as an accordion — heading on the left, collapsible Q&A on
the right. No variant field — it's its own content type.

## Purpose
Two jobs: **(1) SEO + AI crawlers** — clean structured question/answer pairs that search engines surface
as rich results and AI answer engines ingest; **(2) lean pages** — park detailed text in collapsible
answers instead of stuffing it into the page.

## Usecase Examples
- Answer recurring prospect questions / objections (security, data, access, pricing…)
- SEO — structured Q&A that search engines surface as rich results
- Feed AI crawlers / answer engines clean question–answer pairs
- Offload detail from a page — park it in the FAQ instead of bloating the copy

## Strengths
- Purpose-built for SEO & AI crawlers — structured question/answer pairs
- Rich-text answers (lists, links, headings) hold real detail
- Keeps pages lean — move long explanations into the accordion
- Up to 30 questions; reusable across topics

## Limitations
- Text only — no images or media
- Answers are collapsed by default, so don't hide must-see info inside them
- Questions worded as real search queries help SEO/AI most — internal phrasing won't

## Anti-pattern
Don't dump marketing fluff — FAQs work when they answer real questions plainly. Don't bury critical
info (pricing, key features) only inside a collapsed FAQ. Don't paste the same Q&A across many pages
verbatim — duplicate / thin content hurts SEO.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `faqSection` (no variant).

### Fields
| Field | Type | Notes |
|---|---|---|
| heading | Symbol | section heading |
| faqQuestion | Array → faqQuestion | the Q&A items — up to 30 · **required** |

### Each item (`faqQuestion`)
| Field | Type | Notes |
|---|---|---|
| question | Text | the question · **required** |
| answer | RichText | the answer — lists, links, headings, embedded entries allowed |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section heading | ~60 characters | optional |
| Question (each) | no hard limit — phrase like a real search query | required |
| Answer (each) | rich text — no limit (lists, links, headings, embeds) | optional |
| Questions | 1–30 per section | — |

## How to find it in Contentful
Create an **FAQ Section**, write the **heading**, then add **faqQuestion** entries (up to 30) — each a
**question** + a **rich-text answer**. Phrase questions the way prospects actually search.

## Skeleton
Low-fi structure (no copy) → [`skeleton_faq-section.svg`](skeleton_faq-section.svg)
A heading on the left, and an accordion of up to 30 collapsible question/answer rows on the right.
