---
id: one_column_section__table_decision_overview
contentful_content_type: oneColumnSection
nested_content_type: table
nested_variant: decision_overview
reference_entry: GRZ6rlXINOxBKVOj8QytE
nested_reference_entry: 3TyLwIvlSYst1WgsnsMPK1
last_synced: 2026-06-16
skeleton: skeleton_one-column-section-table-decision-overview.svg
status: reviewed
---

# 1-Column Section — Table (Decision Overview)

A centered single-column section hosting a text-based comparison table — for nuanced, not-black-and-white
comparisons that give context on what Candis and others bring, and leave the "right fit" call to the reader.
_Category: Content (single) · `media = table`, table `variant = decision_overview`._

## Tags (for search & the AI recommender)
- **Pillars — strong:** Standard Setter · Trust Anchor
- **Pillars — possible:** — (rarely any other pillar fits here)
- **Pillar note:** Standard Setter — sets the criteria worth comparing. Trust Anchor — balanced, contextual text (not just wins) leaves the decision to the reader and reads as honest.
- **Content density:** high
- **Media:** table (variant: decision_overview)

## What it is
A 1-Column Section hosting a decision-overview table. Instead of checkmarks and crosses, each cell
holds proper text, so it can give nuanced context on what Candis and competitors bring to the table.
Copy can be extensive. Tables can be grouped into selectable categories — picking a category swaps in
another table.

## Purpose
Help the reader decide when the comparison isn't black-and-white: give context on what Candis and
others offer, and leave the judgment of the right fit to them.

## Usecase Examples
- Whenever the messaging wants to bring in a "Candis vs …" angle (the nuanced version)
- Nuanced Candis-vs-alternatives comparison where "it depends"
- Explaining trade-offs / fit by use case
- A multi-category decision overview (selectable categories, each its own table)

## Strengths
- Free text per cell → room for nuance and context (not just yes/no)
- Reads as honest and balanced → builds trust by leaving the decision to the reader
- Selectable categories keep extensive comparisons navigable
- Sets the criteria that matter (Standard Setter)

## Limitations
- Text-heavy → can get long; needs disciplined, scannable copy
- Needs accurate, maintained competitive context — ages
- Less instantly scannable than a checkmark table

## Anti-pattern
Not when a simple yes/no comparison is enough — use the tool_comparison table instead. Not for
non-comparative content. Don't let cells become walls of text.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `oneColumnSection` (media = table) → table content type, `variant = decision_overview`.
**No character limits are set** (Symbols cap at 256). Cell text lives inside `richTextTable`.
_(The table type also has `isAccordionLayout` and `tablesCollapsedByDefault`, but they have no effect for this variant — omitted here.)_

### Section fields (`oneColumnSection`)
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol (localized) | no limit |
| heading | Symbol (localized) | no limit |
| useSansSerifForHeading | Boolean | serif ↔ sans toggle |
| paragraph | RichText (localized) | |
| paragraphAlignment | Symbol | e.g. center |
| media | Link → image / table / video | here: a single decision_overview table |
| decisionOverviewTables | Array → table | **the selectable-category version** — add several decision_overview tables, each with a category |
| background | Symbol (required) | e.g. default |
| highlightColor | Symbol | e.g. blue |
| additionalLink | Link → link | optional; text or button |
| paddingTop | Integer | top spacing |

### Nested: table (`table`, variant `decision_overview`)
| Field | Type | Notes |
|---|---|---|
| variant | Symbol | here: `decision_overview` |
| richTextTable | RichText (required, localized) | the table: free **text** cells, first label column + 2–4 columns |
| tableSectionHeaderTag | Symbol (localized) | header tag for grouping table sections |
| category | Link → category | drives the selectable-category switching |

## Copy budget (for Alexander) — recommended (Contentful sets no limits)
| Field | Recommended |
|---|---|
| Section eyebrow | ~32 characters |
| Section heading | ~60 characters |
| Section paragraph | 1–2 sentences |
| Column headers | short, ~15–20 characters |
| Cell text | a sentence or two |
| Category labels | short (selectable categories) |

## How to find it in Contentful
Add entry → **1-Column Section** → set **Media** to a **Table** entry with **Variant** =
`decision_overview` (text cells). For the selectable-category experience, add several decision_overview
tables to the section's **Decision Overview Tables** field, each assigned a **Category** — the front-end
then shows a category selector that swaps the displayed table.

## Skeleton
Low-fi structure (no copy) → [`skeleton_one-column-section-table-decision-overview.svg`](skeleton_one-column-section-table-decision-overview.svg)
Centered eyebrow → heading → paragraph → a category selector → a comparison table with a first label
column and 2–4 columns of free text.
