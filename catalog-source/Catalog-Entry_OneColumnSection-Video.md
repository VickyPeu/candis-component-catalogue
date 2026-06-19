---
id: one_column_section__video
contentful_content_type: oneColumnSection
reference_entry: 11qtEOh7LiXUvgW5YeHp98
last_synced: 2026-06-16
skeleton: skeleton_one-column-section-video.svg
status: reviewed
---

# 1-Column Section — Video

A centered single-column section that gives one statement room and backs it with a video.
_Category: Content (single) · this is the `media = video` variant — image and table get their own entries._

## Tags (for search & the AI recommender)
- **Pillars:** depends heavily on the video content shown — e.g. Explainer → Translation of Complexity · Founder/Vision → Thought Leader · Customer testimonial → Trust Anchor · Product demo → Standard Setter · and many more
- **Content density:** low
- **Media:** video

## What it is
A centered, single-column section with eyebrow + heading + paragraph and one large media slot —
here a video (with thumbnail, play button, duration). Heading in serif or sans; background and
highlight-color options; optional link.

## Purpose
Gives ONE statement room and backs it with a video — explainer, demo, testimonial or POV.
A single focal point, editorial in character.

## Usecase Examples
- Product explainer / demo video
- Testimonial / customer story as video
- POV / thought-leadership video (e.g. founder, vision)
- A moment that puts one video center stage — with framing copy

## Strengths
- A single focal point — no competition for attention
- Video shows instead of tells — reduces abstraction
- Three hosting options: file, YouTube, Wistia
- Serif/sans + background/highlight for tonal range
- Lots of real estate — ideal for especially important videos that strongly support our messaging goal

## Limitations
- Can't carry multiple parallel points (use Grid/Bento for that)
- Video adds load weight (especially on mobile)

## Anti-pattern
Not for multiple parallel features (use Grid/Bento). Not for step-by-step with proof per step
(use Video Tabs / Steps). Don't bury the video under heavy copy — it's the focal point.

## Structure in Contentful — auto-pulled, don't hand-edit
Content type `oneColumnSection`, selected via `media = video`.
**No character limits are set on this component** (Symbols cap at 256).

### Section fields
| Field | Type | Notes |
|---|---|---|
| eyebrowHeading | Symbol (localized) | no limit |
| heading | Symbol (localized) | no limit |
| useSansSerifForHeading | Boolean | serif ↔ sans toggle |
| paragraph | RichText (localized) | |
| paragraphAlignment | Symbol | e.g. center |
| media | Link → image / table / **video** | here: video |
| mobileViewportImage | Link → image | optional mobile image |
| decisionOverviewTables | Array → table | optional |
| background | Symbol (required) | e.g. default |
| highlightColor | Symbol | e.g. blue |
| additionalLink | Link → link | optional; text or button |
| paddingTop | Integer | top spacing |

### Nested: video (`video`)
| Field | Type | Notes |
|---|---|---|
| displayTitle | Symbol (localized) | shown title |
| description | Symbol (required, localized) | meta description |
| file | Link → Asset | hosting 1: uploaded file |
| youtubeUrl | Symbol (localized) | hosting 2: YouTube |
| wistiaId | Symbol (localized) | hosting 3: Wistia |
| thumbnailImage | Link → image (required) | poster/thumbnail |
| videoDuration | Symbol (required) | e.g. 01.00 |
| playButtonAlt | Symbol (required, localized) | accessibility |
| contentTags | Array → contentTag | |
| isYoutubeShort / shouldAutoplay / isDurationShownOnPlayButton | Boolean | behavior toggles |

## Copy budget (for Alexander) — a plain number = Contentful-enforced limit; “~” = recommendation
| Field | Recommended | Required? |
|---|---|---|
| Section eyebrow | ~32 characters | optional |
| Section heading | ~60 characters | optional |
| Section paragraph | 1–2 sentences | optional |
| Video display title | ~60 characters | optional |
| Video meta description | ~150–160 characters | required |
| Video duration | 5 characters (e.g. “5 min”) | required |
| Play-button alt text | short | required |
| Link text | ~25 characters (optional) | optional |

## How to find it in Contentful
Add entry → **1-Column Section** → set **Media** to a **Video** entry. Eyebrow, heading
(serif or sans), paragraph, optional link. The Video entry needs a thumbnail, a duration
and a play-button alt; host via file, YouTube or Wistia.

## Skeleton
Low-fi structure (no copy) → [`skeleton_one-column-section-video.svg`](skeleton_one-column-section-video.svg)
Centered: eyebrow → heading → paragraph → one large 16:9 video (thumbnail + play button) → optional link.
