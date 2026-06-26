---
id: youtube
contentful_content_type: gridSection
component_variant: youtube_playlists
sibling_variant: youtube_shorts
nested_content_type: video
reference_entry: 01DVkGQrNKyMj5qPpgFDN2
example_entry: 6NQWnCmjFGsvTi3Wxkalss
last_synced: 2026-06-19
skeleton: [skeleton_youtube-videos.svg]
status: draft
---

# Grid Section — YouTube Videos

A grid of YouTube videos — attach video (or playlist) entries, each shown as a thumbnail card with a
play button, duration and title. For "prefer the topic as a video?" moments and surfacing your YouTube
content.
_Category: Feature grids (it's a `gridSection`)._

## Tags (for search & the AI recommender)
- **Pillars:** **Thought Leader** (primary) — an educational video presence · **Translation of
  Complexity** (secondary) — videos explain features simply.
- **Content density:** low
- **Media:** YouTube video thumbnails — a custom `thumbnailImage` per video entry

## What it is
A `gridSection` (variant `youtube_playlists`) whose `content` holds **`video` entries**. Each `video`
has a **`youtubeUrl`** (a single video OR a whole playlist), a custom **`thumbnailImage`**, a
**`displayTitle`**, a **`videoDuration`**, a **`playButtonAlt`** and an `isYoutubeShort` flag. Renders
as thumbnail cards (play button + duration + title) that **link out to YouTube**; pairs with an "all
videos on YouTube" link. A sibling variant, **`youtube_shorts`**, does vertical Shorts.

## Purpose
Offer the topic as video and point visitors to the YouTube channel.

## Usecase Examples
- Offer a topic as a video ("prefer it as a video?")
- Showcase your YouTube videos or playlists on a page
- An educational / explainer video grid that links out to YouTube
- A "thought leadership" content block

## Strengths
- A clean grid of YouTube video cards (thumbnail + play + duration)
- Each card can be a single video OR a whole playlist (`youtubeUrl`)
- Custom thumbnails per video
- Links out to YouTube; pairs with an "all videos" link

## Limitations
- Each video needs a clean custom thumbnail to look good
- Links out to YouTube — it doesn't embed/play inline
- A sibling variant, `youtube_shorts`, is for vertical Shorts
- Best with a few videos, not a huge wall

## Anti-pattern
Don't use auto-generated/blurry thumbnails — the thumbnail carries the card. Don't dump dozens of
videos; curate a few. Don't use it for a single hero video — that's the **1-Column Video** section.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `gridSection`, **Variant = `youtube_playlists`** (sibling: `youtube_shorts`).

### Each card (`video`)
| Field | Type | Notes |
|---|---|---|
| youtubeUrl | Symbol | a single video URL **or** a playlist URL |
| thumbnailImage | Link → image | the custom thumbnail (carries the card) |
| displayTitle | Symbol | shown under the card |
| videoDuration | Symbol | e.g. "3 min" / "1:54" |
| playButtonAlt | Symbol | accessibility label for the play button |
| isYoutubeShort | Boolean | marks a vertical Short |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; "~" = recommendation
| Field | Limit | Required? |
|---|---|---|
| Section eyebrow | 32 characters | optional |
| Section heading | ~60 characters | optional |
| Video title (each) | short — shown under the card | required |
| Video duration (each) | e.g. 3 min / 1:54 | optional |
| Play-button alt text (each) | accessibility label | optional |
| Videos | a few per row (grid) | — |

## How to find it in Contentful
1. Create a Grid Section
2. Set Variant = `youtube_playlists`; add video entries to `content`
3. Each video: a `youtubeUrl` (a video or a playlist) + `thumbnailImage` + `displayTitle` + duration

## Skeleton
Low-fi structure (no copy) → [`skeleton_youtube-videos.svg`](skeleton_youtube-videos.svg)
A row of YouTube video cards (thumbnail + play button + duration + title) with an "all videos" link.
