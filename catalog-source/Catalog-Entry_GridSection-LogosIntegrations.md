---
id: logosint
contentful_content_type: gridSection
component_variant: logos_b
reference_entry: 7MuONZbKnzxiCgikjJtWLJ
example_entry: 5LLPGS9u3vjCNKIx0B22NM
last_synced: 2026-06-19
skeleton: [skeleton_logos-integrations.svg]
status: standing
---

# Grid Section — Logos (Integrations)

A grid of integration/partner logos showing which accounting & ERP systems Candis connects to.
Each logo deep-links to its own integration subpage, grouped (common accounting systems · ERP · the
Candis interface). A prospect sees their system and concludes "they fit my stack."
_Category: Feature grids (it's a `gridSection`)._

> **Standing component.** The integrations rarely change, so this section is reused as-is — you
> normally don't rewrite its copy. Pick the relevant logos, group them, keep the eyebrow + heading
> and the "not listed?" side card. It's mostly an asset/maintenance job, not a copy job.

## Tags (for search & the AI recommender)
- **Pillars:** **Standard Setter** (primary) — we plug into the systems you already use · **Trust
  Anchor** (secondary) — recognizable accounting/ERP logos build credibility.
- **Content density:** low
- **Media:** integration logo image files — each links to its subpage

## What it is
A `gridSection` (variant `logos_b`): an eyebrow + heading, then a grid of integration logos grouped
under labels (e.g. *Gängige Systeme* / *ERP*), plus a "not listed?" side card. Each logo is a **`link`
entry** with `appearance = media` that pairs a **logo image** with a **link to that integration's
subpage** — so the logos deep-link (unlike the Trust Section's logo-only proof strip). The side card
comes from a **`commonTextSet`** (short paragraph + REST API / OAuth / JSON chips) and a **`ctaButton`**
("Mehr zur Candis Schnittstelle →").

## Purpose
Prospect qualification — let a visitor instantly confirm Candis connects to their accounting/ERP
system ("ah, alles klar, die passen bei uns rein"). One of the more important sections for prospects.

## Usecase Examples
- Show which accounting / ERP systems Candis integrates with (DATEV & adjacent, ERP, own interface)
- Deep-link each logo to its integration subpage
- A "not listed?" side card pointing to the open Candis API (REST / OAuth / JSON)

## Strengths
- Instant ecosystem proof — recognizable accounting / ERP logos
- Each logo deep-links to its own integration subpage
- Standing component — set up once, rarely needs changes
- Side card answers the "my system isn't here" objection (open API)

## Limitations
- Logos need clean, consistent image files — and each needs a target subpage to link to
- 3–8 logos per section — curate & group rather than dumping every integration
- It's a logo + link grid, not a text grid — for a short explanation per item use a **Grid Section — Bento M**

## Anti-pattern
Don't rewrite it per page — the integrations are stable, reuse the standing section. Don't add a logo
without a target subpage, and don't cram every integration in; group the relevant ones
(DATEV & adjacent / ERP / interface).

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `logos_b`**.

### Fields
| Field | Type | Notes |
|---|---|---|
| variant | Symbol | `logos_b` |
| eyebrowHeading | Symbol | section eyebrow (max 32) |
| heading | Symbol | section heading |
| content | Array → link/image | the integration logos — 3–8 `link` entries (appearance = media) |
| commonTextSet | Link → commonTextSet | the "not listed?" side card (paragraph + API/OAuth/JSON) |
| ctaButton | Link → link | "Mehr zur Candis Schnittstelle →" |
| headingAlignment | Symbol | center / left |
| firstBentoBoxImagePosition | Symbol | left / right |

### Each logo (`link` entry, appearance = media)
| Field | Type | Notes |
|---|---|---|
| title | Symbol | brand name (e.g. DATEV) |
| appearance | Symbol | `media` (renders the logo) |
| image | Link → image | the logo image file |
| link | Link → commonPage / landingPage | the integration's subpage |
| behavior | Symbol | same_tab |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | ~60 characters | optional |
| Logo label (each) | short brand name | optional |
| Side-card paragraph | ~200 characters | optional |
| Logos | 3–8 per section (curate & group) | — |

## How to find it in Contentful
Create / reuse a **Grid Section**, set **Variant = `logos_b`**. Add each integration to **content** as a
**Link entry** (appearance = media: logo image + link to its subpage), group the relevant ones
(DATEV & adjacent / ERP / interface), and keep the eyebrow + heading and the **commonTextSet** +
**ctaButton** side card. Because the integrations are stable, this is normally reused as-is.

## Skeleton
Low-fi structure (no copy) → [`skeleton_logos-integrations.svg`](skeleton_logos-integrations.svg)
Eyebrow + heading top-left, grouped logo tiles (common systems / ERP), and a "not listed?" side card
on the right with API/OAuth/JSON chips and a CTA.
