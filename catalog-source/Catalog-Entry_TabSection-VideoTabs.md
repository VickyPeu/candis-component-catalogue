---
id: videotabs
contentful_content_type: tabSection
nested_content_type: tabContent
mode_toggle: isVideoTabSectionWithoutSound
reference_entry: 6avlUVFJYcBHztjBLMlZCy
last_synced: 2026-06-19
skeleton: [skeleton_video-tabs.svg]
status: draft
---

# Tab Section — Video Tabs

A tabbed video section: 1–4 short videos, one per tab, showing what a feature actually looks like in
the product. Two modes via one toggle: muted screen recordings that autoplay, or sound videos clicked
to play (e.g. interview impressions).
_Category: Process._

> **One component, two modes.** A single Boolean (`isVideoTabSectionWithoutSound`) switches the whole
> section between muted-autoplay and sound-on-click — so it's **one catalogue entry**, not two.

## Tags (for search & the AI recommender)
- **Pillars:** **Trust Anchor** (real product proof) + **Translation of Complexity** (you see how it behaves).
- **Content density:** medium
- **Media:** 1–4 short videos (one per tab) — muted autoplay screen recordings (≤20s) OR sound videos clicked to play (16:9 thumbnail each)

## What it is
A `tabSection` with 1–4 video tabs (`tabs` → `tabContent`). Each tab has a **`tabText` label (≤20)**, a
**`heading`**, a **`paragraph` (≤200)**, an optional eyebrow (≤50), a **`media` video** (+ `mobileMedia`)
and an optional link. The Boolean **`isVideoTabSectionWithoutSound`** sets the mode for the whole section:
- **Muted (on):** screen recordings that **autoplay** — keep them **≤20s**. A quick, real impression of a
  feature in the product. Tabs can flow as one continuous storyline (1 → 2 → 3) — nice, not required.
- **Sound (off):** videos **clicked to play** — for short filmed **interview impressions** (real people).
  These need a **16:9 thumbnail per tab**.

## Purpose
Show the real product (or real people) — proof it's real, plus a clear sense of how it behaves.

## Usecase Examples
- Show what a feature actually looks like in the product (real screen recordings)
- A numbered storyline across tabs (e.g. a workflow: 1 → 2 → 3)
- Short filmed interview impressions (sound mode, click to play)
- Proof the product is real + an explanation of how it behaves

## Strengths
- Real product footage — strong proof + clear explanation
- Two modes via one toggle: muted autoplay (screen recordings) or sound-on-click (interviews)
- Muted tabs can flow as one continuous storyline (1→2→3)
- Up to 4 short tabs, each with a label + heading + short paragraph

## Limitations
- Keep videos SHORT — muted autoplay **≤20 seconds**; it's a quick impression, not a full demo
- Sound (click-to-play) videos need a **16:9 thumbnail** per tab
- 1–4 tabs only; tab label ≤20, paragraph ≤200
- One toggle sets the mode for the whole section (all muted OR all sound)

## Anti-pattern
Don't use long videos — muted autoplay is ≤20s, a quick real impression. Don't forget the 16:9
thumbnails for the sound version. Don't mix the modes in one section — the toggle applies to all tabs.
Don't pad the per-tab copy (label ≤20, paragraph ≤200).

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `tabSection`; video tabs live in `tabs` (→ `tabContent`).

### Section fields
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading / heading / paragraph | Symbol / RichText | section header |
| tabs | Array → tabContent | 1–4 video tabs |
| isVideoTabSectionWithoutSound | Boolean | on = muted autoplay · off = sound, click to play |

### Each tab (`tabContent`)
| Field | Type | Notes |
|---|---|---|
| tabText | Symbol | ≤20 · the tab label |
| heading | Symbol | short headline |
| paragraph | RichText | ≤200 |
| eyebrowHeading | Symbol | ≤50 |
| media | Link → video / image | the video (≤20s for muted autoplay) |
| mobileMedia | Link → video / image | mobile version |
| link | Link → link | optional |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section heading | short | optional |
| Section paragraph | rich text | optional |
| Tab label (each) | 20 characters | required |
| Tab heading (each) | short — keep it tight | required |
| Tab paragraph (each) | 200 characters | required |
| Tabs | 1–4 | — |

## How to find it in Contentful
1. Create a Tab Section
2. Add 1–4 tabs (`tabContent`) — each with a short tab label + heading + paragraph + a video
3. Toggle `isVideoTabSectionWithoutSound` for muted autoplay vs sound-on-click (sound needs a 16:9 thumbnail each)

## Skeleton
Low-fi structure (no copy) → [`skeleton_video-tabs.svg`](skeleton_video-tabs.svg)
A heading, 1–4 numbered tabs (label + heading + paragraph + progress) over a large video; muted autoplay or sound-on-click.
