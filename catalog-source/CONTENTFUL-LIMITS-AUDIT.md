# Contentful character limits — full audit (for Dusan)

Every text field across the components in the catalogue, with its **enforced** character limit pulled
straight from the Contentful Management API (the CMA is the only place these `size` validations live —
the Delivery/Preview API hides them). Use this to verify the limits make sense, decide changes, then
implement; the catalogue gets updated to match afterwards.

- **A number** = a Contentful-enforced max (the editor literally cannot type more).
- **— none** = no limit set in Contentful (free text).
- Only text fields (Symbol / Text / RichText) are listed; enums, booleans, links and assets are omitted.

_Pulled 2026-06-19. Covers all 31 catalogued components (+ their nested types)._

---

## Field limits by content type

### Sections

- **gridSection** — eyebrowHeading **32** · heading — none · paragraph (RichText) — none
- **oneColumnSection** — eyebrowHeading — none · heading — none · paragraph — none
- **ctaSection** — eyebrowHeading **32** · heading **52** · paragraph **120**
- **heroSection** — eyebrowHeading **42** · heading — none · trustChipsText — none · paragraph — none · additionalParagraph — none
- **imageSection** — eyebrowHeading — none · heading — none
- **sliderSection** — eyebrowHeading — none · heading — none
- **tabSection** — eyebrowHeading — none · heading — none · paragraph — none
- **faqSection** — heading — none
- **customComponent** — eyebrowHeading — none · heading — none · paragraph — none · beforeHeading / afterHeading — none

### Bento boxes (live in gridSection / heroSection)

| Bento | eyebrow | heading | paragraph |
|---|---|---|---|
| **XS** | **16** | **38** (req) | **130** |
| **S** | — | **65** (req) | **130** · `topLineColor` **7** |
| **M** | — | **80** (req) | **— none** · `stepLabel` — none |
| **L** | — | **23** (req) | **70** |
| **XL** | **270** | **620** (req) | **— none** (req) |

### Slider / tabs / proof items

| Type | Field(s) | Max |
|---|---|---|
| **testimonials** | quoteRichText | **200** (req) · company / employeeName / employeeTitle — none |
| **tabContent** (video tabs) | tabText **20** · eyebrowHeading **50** · heading — none · paragraph **200** | — |
| **faqQuestion** | question (Text) — none · answer (RichText) — none | — |
| **video** | videoDuration **5** · title / displayTitle / description / playButtonAlt — none | — |
| **platformRatings** | url — none | — |
| **link** | title / icon / mobileButtonOrLinkCopy / objectionHandlingLine — none | — |
| **image** | title / altText — none | — |

---

## 🚩 Inconsistencies & things to fix

The limits were clearly set ad-hoc per component, not by a shared rule. The same *role* (eyebrow,
heading, paragraph) has very different caps — or none — depending on where it lives.

### 1. Eyebrow — six different rules
`16` (Bento XS) · `32` (grid, CTA) · `42` (hero) · `50` (tabContent) · `270` (Bento XL) · **none** (1-column,
image, slider, tab, customComponent). → **Pick one cap** (e.g. ~40) and apply everywhere. `270` (Bento XL)
is almost certainly wrong for an eyebrow; `16` (Bento XS) is very tight.

### 2. Heading — capped in some places, unlimited in most, absurd in two
- Most **section** headings have **no limit** (grid, 1-column, hero, image, slider, tab, faq, customComponent).
- **CTA** heading is capped at `52` — the only section that is.
- **Bento** headings are capped but inconsistently: XS `38` · **L `23`** · S `65` · M `80` · **XL `620`**.
  - **Bento L `23`** is the *shortest* of all bentos despite being a *large* card — counter-intuitive.
  - **Bento XL `620`** is paragraph-length for a "heading".
→ Decide whether section headings should get a sane cap (e.g. 60–90), re-baseline the bento headings so
they rise with card size (XS < S < M < L < XL), and bring L and XL back to sensible values.

### 3. Paragraph — five different rules
`70` (Bento L) · `120` (CTA) · `130` (Bento XS, S) · `200` (tabContent, testimonial quote) · **none**
(grid, 1-column, hero, Bento M, Bento XL, customComponent, faq answer). → Bento M and Bento XL having
**no** paragraph cap while smaller bentos are capped is backwards. Set tiers (e.g. compact cards ~130,
larger blocks ~200) and cap the currently-unlimited ones.

### 4. `video.videoDuration` = **5 characters** — verify it isn't too tight
A 5-char cap fits `4:58` or `0:30`, but **not** `06 min` (6) or `1:23:45` (7). The live site shows
`03 min` / `06 min` (6 chars) — so either the value is stored differently or this limit blocks real
durations. **Please verify and likely raise** (e.g. 8).

### 5. `bentoS.topLineColor` = **7 characters**
That's a hex value (`#895fd5`). It works, but a colour stored as a 7-char text field is fragile —
consider a proper colour/enum control instead of free text.

### 6. Disabled-but-present fields (clean-up, not a limit)
`customComponent` still exposes `beforeHeading`, `afterHeading`, `toggleDisabledHeading`,
`toggleActiveHeading`, `toggleDescriptionParagraph` — leftovers from the Before/After & Feedback
variants that show up on unrelated variants. Hiding them per variant would de-clutter the editor.

---

## Suggested standardization (for discussion)

A simple, role-based baseline to replace the ad-hoc values — adjust the numbers to taste:

| Role | Suggested cap | Notes |
|---|---|---|
| Eyebrow (all) | **40** | one value everywhere; drop XL's 270 and XS's 16 |
| Section heading | **80** | give the uncapped sections a sane ceiling |
| Section paragraph | **200** | cap the currently-unlimited ones |
| Bento heading | XS 40 · S 60 · M 80 · **L 60** · **XL 90** | rises with card size; fix L (23→) and XL (620→) |
| Bento paragraph | XS/S 130 · M 180 · L 90 · **XL 220** | cap M & XL (currently none) |
| Card / tab label | 20–24 | tabText is 20 (fine) |
| Quote (testimonial) | 200 | already good |
| videoDuration | **8** | fit "06 min" / longer formats |

> Once you decide the final numbers and implement them in Contentful, ping me and I'll update every
> affected component's copy budget in the catalogue to match.
