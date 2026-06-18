---
id: one_column_section__table_tool_comparison
contentful_content_type: oneColumnSection
nested_content_type: table
nested_variant: tool_comparison
reference_entry: 1mnZ8xXqsuqXlpsQ5ExL2L
nested_reference_entry: 27ML5moDGlR4qllek4eOGG
last_synced: 2026-06-16
skeleton: skeleton_one-column-section-table-tool-comparison.svg
status: reviewed
---

# 1-Column Section — Table (Tool Comparison)

A centered single-column section hosting a comparison table that pits Candis against other tools,
feature by feature, with green checkmarks and red crosses.
_Category: Content (single) · this is the `media = table` variant, table `variant = tool_comparison`._

## Tags (for search & the AI recommender)
- **Pillars — strong:** Standard Setter · Trust Anchor
- **Pillars — possible:** — (rarely any other pillar fits here)
- **Pillar note:** Standard Setter — "a tool should have these features, and Candis does." Trust Anchor — an honest red cross on a feature Candis lacks (while others have it) makes visitors trust the whole table more.
- **Content density:** medium
- **Media:** table (variant: tool_comparison)

## What it is
A 1-Column Section hosting a tool-comparison table: feature rows compared across 2–4 tool columns
(plus a first column naming what's being compared), shown with green checkmarks and red crosses.
Tables can be set up individually, made collapsible as an accordion, and collapsed by default to
save space when they get long.

## Purpose
Compare Candis to other tools, or specific Candis features against what's on the market.

## Usecase Examples
- Whenever the messaging wants to bring in a "Candis vs …" angle
- Candis vs competitor tools, feature by feature
- Candis features vs the market standard
- A long capability matrix that needs collapsing / accordion to stay compact

## Strengths
- Side-by-side comparison reads instantly as "we measure up" (Standard Setter)
- Honest red crosses on features Candis lacks increase credibility of the whole table (Trust Anchor)
- Accordion + collapse-by-default keep long tables compact
- Green checks / red crosses scan fast

## Limitations
- Needs accurate, maintained competitive data — ages quickly
- Dense; too many rows or columns overwhelm
- 2–4 comparison columns max (plus the first label column)

## Anti-pattern
Not for non-comparative content (use a normal grid/section). Don't make comparison claims you
can't back up (credibility / legal risk). Don't overload with too many columns or rows.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `oneColumnSection` (media = table) → table content type, `variant = tool_comparison`.
**No character limits are set** (Symbols cap at 256). The checkmarks / crosses live inside the
`richTextTable` content — they're how the `tool_comparison` variant renders cells, not a separate field.

### Section fields (`oneColumnSection`)
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol (localized) | no limit |
| heading | Symbol (localized) | no limit |
| useSansSerifForHeading | Boolean | serif ↔ sans toggle |
| paragraph | RichText (localized) | |
| paragraphAlignment | Symbol | e.g. center |
| media | Link → image / **table** / video | here: table |
| background | Symbol (required) | e.g. default |
| highlightColor | Symbol | e.g. blue |
| additionalLink | Link → link | optional; text or button |
| paddingTop | Integer | top spacing |

### Nested: table (`table`, variant `tool_comparison`)
| Field | Type | Notes |
|---|---|---|
| variant | Symbol | here: `tool_comparison` |
| richTextTable | RichText (required, localized) | the table itself: 2–4 tool columns + first label column, checks/crosses |
| tableSectionHeaderTag | Symbol (localized) | header tag for grouping table sections |
| isAccordionLayout | Boolean | make tables collapsible as an accordion |
| tablesCollapsedByDefault | Symbol | collapse some tables by default (save space on long tables) |
| category | Link → category | optional categorization |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; “~” = recommendation
| Field | Recommended |
|---|---|
| Section eyebrow | ~32 characters |
| Section heading | ~60 characters |
| Section paragraph | 1–2 sentences |
| Column headers | short, ~15–20 characters |
| Feature labels | concise, ~60 characters |
| Section header tag | short (optional) |

## How to find it in Contentful
Add entry → **1-Column Section** → set **Media** to a **Table** entry with **Variant** =
`tool_comparison`. Build the comparison in **Rich Text Table** (first column = what's compared,
then 2–4 tool columns with checks/crosses). For long tables, toggle **Accordion Layout** and/or
**Tables Collapsed by Default**.

## Skeleton
Low-fi structure (no copy) → [`skeleton_one-column-section-table-tool-comparison.svg`](skeleton_one-column-section-table-tool-comparison.svg)
Centered eyebrow → heading → paragraph, then a comparison table: first label column + 2–4 tool
columns, cells as green checks / red crosses.
