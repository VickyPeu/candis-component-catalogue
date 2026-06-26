---
id: youtubeshorts
contentful_content_type: gridSection
component_variant: youtube_shorts
sibling_variant: youtube_playlists
nested_content_type: video
reference_entry: 3nSxhcjqbr4Gi4MRCjHFHK
last_synced: 2026-06-19
skeleton: [skeleton_youtube-shorts.svg]
status: draft
---

# Grid Section — YouTube Shorts

A grid of YouTube Shorts — the vertical sibling of the YouTube Videos section. Attach video entries
marked as Shorts, each a tall 9:16 thumbnail card with a play button that links out to the Short on
YouTube.
_Category: Feature grids (it's a `gridSection`)._

## Tags (for search & the AI recommender)
- **Pillars:** **Thought Leader** (primary) — video / brand presence · **Translation of Complexity**
  (secondary) — quick explainers.
- **Content density:** low
- **Media:** vertical (9:16) Short thumbnails — a custom `thumbnailImage` per video entry

## What it is
A `gridSection` (variant `youtube_shorts`) whose `content` holds **`video` entries marked as Shorts**
(`isYoutubeShort` on). Each has the Short's **`youtubeUrl`**, a vertical (9:16) custom
**`thumbnailImage`**, an optional **`displayTitle`**, a **`videoDuration`** and a **`playButtonAlt`**.
Renders as tall 9:16 thumbnail cards (play button) that **link out to the Short on YouTube** —
snackable, social-style. The landscape sibling is the **`youtube_playlists`** variant.

## Purpose
Surface short, vertical clips and point visitors to your Shorts on YouTube.

## Usecase Examples
- Show a row of short, vertical clips (YouTube Shorts)
- Snackable social-style video content on a page
- Surface your Shorts and link out to YouTube
- A light "thought leadership" / brand-presence block

## Strengths
- Vertical 9:16 Short cards (thumbnail + play)
- Snackable, social-style format
- Custom thumbnails per Short
- Links out to YouTube; pairs with an "all videos" link

## Limitations
- Vertical Shorts only — for landscape videos/playlists use the YouTube Videos variant
- Each Short needs a clean vertical thumbnail
- Links out to YouTube — it doesn't embed/play inline
- Best with a few Shorts, not a huge wall

## Anti-pattern
Don't mix landscape videos in here — Shorts are vertical (use the YouTube Videos variant for
landscape). Don't use blurry auto-thumbnails. Don't dump dozens; curate a few.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `youtube_shorts`** (sibling: `youtube_playlists`).

### Each card (`video`, a Short)
| Field | Type | Notes |
|---|---|---|
| youtubeUrl | Symbol | the Short's URL (e.g. youtube.com/shorts/…) |
| isYoutubeShort | Boolean | on — marks it as a Short |
| thumbnailImage | Link → image | the custom vertical (9:16) thumbnail |
| displayTitle | Symbol | optional title under the card |
| videoDuration | Symbol | e.g. "0:30" |
| playButtonAlt | Symbol | accessibility label for the play button |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | ~60 characters | optional |
| Short title (each) | short — optional under the card | optional |
| Short duration (each) | e.g. 0:30 | optional |
| Play-button alt text (each) | accessibility label | optional |
| Shorts | a few per row (grid) | — |

## How to find it in Contentful
1. Create a Grid Section
2. Set Variant = `youtube_shorts`; add video entries (isYoutubeShort on) to `content`
3. Each Short: a `youtubeUrl` (a Short) + a vertical `thumbnailImage` + optional title

## Skeleton
Low-fi structure (no copy) → [`skeleton_youtube-shorts.svg`](skeleton_youtube-shorts.svg)
A row of tall vertical (9:16) Short cards (thumbnail + play button + duration), with optional titles.
