---
id: llmsection
contentful_content_type: customComponent
component_variant: llm_section
reference_entry: 5BoEnd2eVa98Kw6TIPjUqT
last_synced: 2026-06-19
skeleton: [skeleton_llm-section.svg]
status: draft
---

# LLM Section — Cal AI Assistant

An on-page AI chat section: visitors chat with **Cal**, the Candis AI assistant, to get answers to their
specific questions instead of hunting the whole site — and Cal proactively offers to book a consultation
with sales.
_Category: Conversion._

## Tags (for search & the AI recommender)
- **Pillars:** **Translation of Complexity** (primary) — exactly the info you need, on demand ·
  **Thought Leader** (secondary) — Candis's own AI, in action.
- **Content density:** medium
- **Media:** Cal's avatar / illustration (image)

## What it is
A `customComponent` (variant `llm_section`): a heading (e.g. "Meet Cal – Candis AI Assistant"), Cal's
**image** (avatar), a **`commonTextSet`** (intro + suggested prompts), and a **`form`** — the sales
consultation lead capture Cal proactively promotes. Currently live on the homepage.

> Heads-up: the `toggleDisabledHeading` / `toggleDescriptionParagraph` fields carry inert placeholder
> text (Before/After leftovers) — ignore them; Dusan clean-up.

## Purpose
Give people who'd rather ask than browse a self-serve way to get answers — and turn that intent into a
sales consultation.

## Usecase Examples
- A self-serve AI chat alternative to hunting the whole site
- Answer visitors' specific questions on the spot (Cal)
- Proactively route interested visitors to a sales consultation
- Showcase Candis's own AI as an assistant on the page

## Strengths
- Visitors get answers to their exact questions without browsing
- Cal proactively promotes a sales consultation — built-in lead gen
- Shows Candis AI in action — an innovation signal
- Currently live on the homepage

## Limitations
- Depends on Cal's available knowledge — it answers "as far as available"
- Needs a linked consultation Form + a Common Text Set
- A prominent, standalone assistant block — one per page
- The `toggle*` fields hold inert placeholder text (Before/After leftovers)

## Anti-pattern
Don't use it as a static FAQ (that's the FAQ Section) — this is a live AI chat. Don't forget to link the
consultation Form — the proactive sales step is half the point.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `customComponent`, **Component variant = `llm_section`**.

### Fields
| Field | Type | Notes |
|---|---|---|
| componentVariant | Symbol | `llm_section` |
| heading | Symbol | e.g. "Meet Cal – Candis AI Assistant" |
| image | Link → image | Cal's avatar / illustration |
| commonTextSet | Link → commonTextSet | Cal's intro + suggested prompts |
| form | Link → form | the consultation lead form Cal promotes |
| showOnCommonPages / showOnLandingPages / showOnBlogPostPages | Boolean | placement |
| ~~toggleDisabledHeading~~ / ~~toggleDescriptionParagraph~~ | Symbol | ⚠️ inert — placeholder leftovers, Dusan to remove |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Heading | short — e.g. "Meet Cal – Candis AI Assistant" | optional |
| Cal intro / prompts | via the Common Text Set | optional |
| Consultation form | standard lead fields | required |

## How to find it in Contentful
1. Create a Custom Component
2. Set Component variant = `llm_section`
3. Add the heading + Cal's image
4. Link a Common Text Set (Cal's intro + prompts) and the consultation Form

## Skeleton
Low-fi structure (no copy) → [`skeleton_llm-section.svg`](skeleton_llm-section.svg)
Cal's avatar + heading, a chat panel (Cal proactively offering a consultation), and a question input with an Ask button.
