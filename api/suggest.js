// Candis Component Catalogue — AI suggestion endpoint
// Serverless function (Vercel-style: export default handler(req,res)).
// Reads ANTHROPIC_API_KEY from env. Given a page brief (+ optional desired pillars),
// it reasons about each component's architecture, keeps only genuine fits with a
// tailored "how it can work" note, and proposes a top-to-bottom wireframe.
//
// Deploy: see DEPLOY-AI.md. Swap MODEL if you prefer a different Claude model.

const MODEL = "claude-sonnet-4-6";
const ANNOTATE_MODEL = "claude-haiku-4-5-20251001"; // browse-by-pillar notes are a simple task → use the faster/cheaper model

import { COMPONENTS } from "../catalog.js";

const PILLARS_DOC = `
authority: Structured confidence, earned through restraint. Editorial, low density, footnoted.
thought_leader: Editorial opinion with intent. Magazine spreads, pull-quotes, POV.
standard_setter: Measurable, comparable, verifiable. High density, numbered grids, comparison tables.
trust_anchor: Proof-dense, risk-removing. Logos, numbers, testimonials, badges, honest comparisons.
translation_of_complexity: Progressive disclosure, high visual metaphor. Before/after shown not told; one concept at a time.`;

// Component knowledge base. Keep in sync with the catalogue in index.html (DATA).
const ARCH={
 bentom:"Grid Section, variant bento_M: a grid of 2–9 'Bento M' cards (ideal 3 or 6). Each card has an image (16:10) OR an icon, a heading (max 80 chars), a short rich-text paragraph, and an optional link (text or button). Section has an eyebrow (max 32), heading, optional paragraph, background + icon-background options. A light numbered flow is possible by writing numbers into the image/icon/heading.",
 video:"1-Column Section with media=Video. Centered single column: eyebrow, heading (serif or sans), paragraph, one large video (needs a thumbnail + duration + play-button alt; host via uploaded file, YouTube or Wistia), optional link. No character limits set. A screen-recording of the Candis product makes a process concrete.",
 image:"1-Column Section with media=Image. Centered single column with one large image (alt text + title), eyebrow, heading, paragraph, optional link. Good for one editorial/brand image, a product screenshot, or a labelled diagram.",
 toolcmp:"1-Column Section with media=Table, table variant tool_comparison. A comparison table: a first label column + 2–4 tool columns, cells shown as green checkmarks / red crosses. Optional accordion + collapse-by-default for long tables.",
 decision:"1-Column Section with media=Table, table variant decision_overview. Like the tool comparison but cells hold free TEXT (not checks/crosses) for nuanced, not-black-and-white comparisons. Supports selectable categories that swap between tables. Leaves the 'right fit' decision to the reader.",
 cta:"CTA Section: a conversion card with eyebrow, heading, paragraph, plus EITHER a button (link) OR a sign-up form. The form supports configurable fields (e.g. email), submit/success/error text, a Demodesk route (book a consultation/demo) and a PDF-on-submit (gated download). Optional image + background colours.",
 beforeafter:"Before/After Slider (customComponent, variant before_after_slider). 3–4 paired 'before' Bento M cards and 3–4 'after' cards. Desktop: drag a full-height slider handle to reveal the 'after' state; mobile: a toggle. Section eyebrow/heading/paragraph + an internal before/after headline (desktop).",
 exitintent:"Two-level. A customComponent (variant exit_intent_modal) is the wrapper — it only controls placement/frequency (showOnCommonPages / showOnLandingPages / showOnBlogPostPages, or displayOnPages for specific pages) and links a modal entry. The modal holds the content + a variant. Relevant variant here: exit_intent (opens when a visitor moves to leave, or after triggerAfterSeconds) and exit_intent_countdown (same, with a countdown banner using exitIntentCountdownEndDate). Modal has eyebrow/heading/paragraph, an optional image, and an action that is EITHER a button (ctaButton, up to two) OR an email-capture form. (The same modal type also powers a 'common' button-triggered booking modal and gated downloads — factsheet/pricing_summary/info_packages/implementation_guide — but those are out of scope for this catalogue entry.)",
 feedback:"customComponent, variant feedback_section: a two-part section. Left = eyebrow + heading + paragraph (the invitation). Right = a form panel where the visitor taps one of a few suggestion chips OR writes their own free-text idea (~150 chars) and submits. All UI microcopy (labels, placeholder, submit button, success message, character counter) comes from a linked Common Text Set; the chip options come from the feedbackSectionSuggestions array. Submissions are posted to Slack (#website-feedback-form-submit). Fundamentally an engagement/listening utility, not a lead form (no email capture).",
 banner:"customComponent, variant page_bottom_banner: a slim bar pinned (sticky) to the bottom of the screen, dismissible (×). Heading + short paragraph (date/time + one line), a LIVE countdown (days:hours:minutes:seconds) driven by pageBottomBannerExpiryDate, and a CTA button (link). Placement is flexible: global by page type (showOnCommon/Landing/BlogPost) or pinned to specific pages (displayOnPages). It's a date-driven announcement/conversion mechanism — less interruptive than a modal since it doesn't block the page.",
 steps:"customComponent, variant steps_section: a row of EXACTLY 3 Bento M cards (the steps field) presented as a timeline. Each card has a step label (the timeline marker — e.g. Heute / Tag 14 / Tag 30; the bentoM stepLabel field IS used here, unlike in gridSection), a required image (icon variant does NOT work), a heading (max 80 chars), and a short checklist (the card paragraph). Section eyebrow + heading above; optional CTA button below. Fewer or more than 3 steps breaks the design.",
 bentoxl:"bentoXL: a large two-part block — a 1:1 visual on one side (image, video, or a customHtmlSection embed e.g. Navattic) and text on the other (eyebrow, heading, paragraph) plus up to two links (a button and/or text link). The image should be square (1:1) with a transparent background; the background behind it is set in Contentful. Several background variants (white, gray, gray_on_white, black, white_on_gray, white_on_black) and image position left/right. Stands alone OR nested in a Grid Section. The icon field is only used inside a Bento Tab Section (irrelevant standalone). Content-dependent — the content sets the pillar. NOTE: because the visual can be a VIDEO, this is a genuine alternative to the 1-Column Video whenever someone wants a video WITH explanatory text beside it — surface it as an option for 'video + explanation' briefs.",
 trust:"customComponent, variant trust_section: a short proof/social-proof strip — partner/certification logos, badges, or platform ratings. Items come from trustSectionItems (array of image — the logos/badges) and/or platformRatings (array of platformRatings: image + a star rating number + a url link, e.g. Capterra/Google/App Store). Eyebrow + heading on the left, items on the right. Works with 2 to ~8 items; when they overflow the width it auto-loops as a slider. If every item MUST be visible at first glance, or each logo should deep-link to its own page (e.g. integrations), the Grid Section 'logos_b' variant (Logos / Integrations) is the better choice. Pillar: Trust Anchor (social proof) + Standard Setter (ratings are measurable).",
  herocenteredvideo:"heroSection, variant centered_video: a fully centered, video-first hero — the most representative/flagship hero. eyebrow + heading + trust chips (E-Rechnungen + certifications) + a centered paragraph + primary/secondary button, all centered above a large centered video (16:9). On scroll the video grows and the background inverts, making the video the clear centerpiece. Same building blocks as the common hero (can also carry a floating layer and Bento XS). USE SPARINGLY: only for a standalone page with one special, important topic (e.g. the product tour) — currently the old homepage. Because it's so prominent, too many compete with the homepage (the most important page). Pillar depends on the page topic; leans Trust Anchor + Translation of Complexity.",
 herocommon:"heroSection, variant common: the standard page hero. eyebrowHeading (≤42) + heading + paragraph (rich text), a primary button + secondary button, and ONE media — an image (1:1) OR a video (16:9). Trust proof is optional: either trustBadges (GoBD + Cloud Services, a toggle) OR trustChipsText (chips). An optional floatingLayer image can sit over the video thumbnail (use with care — skip on busy thumbnails, must stay legible on small desktops). An optional row of 3–5 Bento XS sits underneath; like in a grid section, a Bento XS that links to a Bento XL (anchor) renders as a card, otherwise it renders without a card — and the Bento XS can be omitted entirely. Its job: give a fast overview of the topic and reassure visitors they're on the right page. Copy rule (not enforced in Contentful): with NO Bento XS the paragraph can run longer (e.g. bullet points); WITH Bento XS keep the paragraph to ~3 lines or it's too much. Pillar depends on the page's topic, but it leans Trust Anchor (reassurance) + Translation of Complexity (clear overview).",
 youtubeshorts:"gridSection, variant youtube_shorts: the vertical sibling of the YouTube Videos section. content[] holds video entries marked as Shorts (isYoutubeShort), each with a Short's youtubeUrl, a vertical (9:16) custom thumbnailImage, an optional displayTitle, a videoDuration and a playButtonAlt. Renders as tall 9:16 thumbnail cards (play button) that link out to the Short on YouTube; snackable, social-style. For regular landscape videos or full playlists, use the youtube_playlists variant instead. Pillar: Thought Leader (video/brand presence) + Translation of Complexity (quick explainers).",
 youtube:"gridSection, variant youtube_playlists: a grid of YouTube videos. content[] holds video entries — each has a youtubeUrl (a single video OR a whole playlist), a custom thumbnailImage, a displayTitle, a videoDuration, a playButtonAlt and an isYoutubeShort flag. Renders as thumbnail cards (play button + duration + title) that link out to YouTube; pairs with an 'all videos on YouTube' link. For 'prefer the topic as a video?' moments and surfacing the YouTube channel. A sibling variant youtube_shorts does vertical Shorts. Differs from the 1-Column Video section (a single hero video inline). Pillar: Thought Leader (educational video presence) + Translation of Complexity (videos explain features simply).",
 ctabento:"gridSection, variant cta_bento: a large, purpose-built CTA section for prospects — high transparency on what to expect plus trust. Structure: eyebrowHeading + heading + paragraph, a headingImage (big side visual), 3 step cards in bentoBoxesS (each a bentoS: heading + line, with a CTA button + icon on the primary step), platformRatings (up to 3 — App Store/DATEV/Google) and up to 3 testimonials (quote + avatar + name/role). Built like the integrations section as a specific 'next steps / here's what to expect' block (e.g. a 3-step path to getting started: initial call → demo → implementation), but the structure is reusable. Use it as a conversion section near the end of a page; for a small/compact call to action use the plain CTA Section instead. Pillar: Trust Anchor (ratings, testimonials, transparency) + Translation of Complexity (clear next steps).",
 bentoxltabs:"gridSection, variant bento_XL_tabs (internally nicknamed the 'big booty bento'): several Bento XL blocks (bentoBoxesXL) presented as vertical TABS — every topic is visible at a glance. As the visitor scrolls, it steps through the tabs one after another (so everyone passively sees all of them), and clicking any tab gives full self-directed control — a flexible middle ground between the sticky scroll and plain tabs. Each Bento XL renders differently in this variant: its heading becomes the SHORT tab label (the field allows ≤620 but keep it short), its paragraph becomes the panel content, and its icon shows in the tab (the bentoXL icon is shown ONLY in this variant). Media is a required 1:1 image (or video / custom HTML); up to two links per tab. Recommend up to ~5 tabs — not enforced in Contentful but more breaks the layout on small screens. Use when everyone should see all topics with the option to self-navigate; use the sticky scroll for a single guided, sequential narrative. Pillar: Translation of Complexity (organized overview of complex topics) + Standard Setter.",
 bentoxlsticky:"gridSection, variant bento_XL_sticky_scroll: a long-form, scroll-driven story made of several Bento XL blocks (bentoBoxesXL). As you scroll, the media (image/video/customHtml) stays pinned/sticky while you read each block's text, and the visual swaps to match the current block. Each bentoXL has a required media, a required heading (≤620) and paragraph (rich text), an optional eyebrow (≤270), background/border options, image position, and up to two links. Built for when you have a LOT to say and want to guide visitors step by step — product walkthroughs, transformation/customer-journey storytelling, deep feature explanations where each point gets its own large visual, screen-by-screen flows. Strength: controls the reveal and keeps a visual in view; weakness: overuse disorients (people can't see what's next or where they are). If visitors need to see all topics at a glance, use the Bento XL Tab Section instead. Pillar: Translation of Complexity (deep, guided explanation) + Thought Leader (narrative journey).",
 bentol:"gridSection, variant bento_L: image-led cards in a grid, laid out in rows of 2 (2 or 4 cards). Each bentoL box has a required 16:10 image, a required short heading (≤23 — the shortest of any bento), an optional brief paragraph (≤70) and an optional link (additionalLink). No icon option — the image is mandatory and sits beside the text. The most visual of the in-grid bentos. Pillar: Translation of Complexity + Standard Setter. Use Bento M for icon-or-image flexibility and more copy, Bento S for many small cards.",
 bentos:"gridSection, variant bento_S: small feature cards in a grid, laid out in rows of 4 (typically 4, 8 or 12). Each bentoS box has a required heading (≤65), an optional short paragraph (≤130 rich text), an optional text link (additionalLink), and ONE optional visual — your choice of an icon (image entry), an image, OR a colored top line (topLineColor, a hex value). More/smaller cards than Bento M; holds more per grid than XS and can take images (unlike XS). Pillar: Translation of Complexity + Standard Setter. Use Bento M for bigger cards and more copy, Bento L for image-led cards.",
 bentoxs:"gridSection, variant bento_XS: the smallest bento — 2 to 5 Bento XS boxes (bentoBoxesXS). Each box has a required icon (an image entry used as a small icon — icons only, no photographic images), an optional eyebrow (≤16), a required heading (≤38) and an optional short paragraph (≤130, rich text). A compact feature/highlight strip. Can also act as in-page navigation: each box has an onClickScrollTo that anchor-scrolls down the page — but the target is restricted to a Bento XL entry, NOT an arbitrary section or page. Pillar: Translation of Complexity (compact, scannable) + Standard Setter. Use Bento S/M/L when you need images or longer copy.",
 faq:"faqSection: a heading + up to 30 faqQuestion entries, each with a question (plain text) and a rich-text answer (supports lists, links, headings, embedded entries). Renders as an accordion — heading on the left, collapsible Q&A on the right. Purpose-built for SEO and AI/LLM crawlers: structured question/answer pairs that search engines surface as rich results and answer engines ingest cleanly. Also a way to keep landing pages lean — move detailed text into the collapsible answers instead of bloating page copy. Text only, no media. Best when questions are phrased the way prospects actually search. Pillar: Translation of Complexity (turns complex topics into clear plain answers) + Trust Anchor (handles security/data/access objections).",
 logosint:"gridSection, variant logos_b: a grid of integration/partner logos showing which accounting & ERP systems Candis connects to. content[] holds 3–8 Link entries (appearance = media) — each pairs a logo image with a link to that integration's own subpage, so logos deep-link (unlike the Trust Section's logo-only strip). eyebrowHeading (max 32) + heading head the section; logos are grouped (common accounting systems / ERP / the Candis interface). commonTextSet + ctaButton render a 'not listed?' side card pointing to the open Candis API (REST / OAuth / JSON, 'Mehr zur Schnittstelle'). A standing/reference component: the integrations rarely change, so it's reused as-is and the copy is essentially fixed. Its job is prospect qualification — a visitor sees their accounting system and concludes 'they fit my stack.' Pillar: Standard Setter (we plug into the systems you already use) + Trust Anchor (recognizable logos). Use Bento M instead if each item needs a real explanation paragraph."
};

// Derive the AI knowledge base from the single source (catalog.js). Only the architecture prose is AI-specific.
const CATALOG = COMPONENTS.map(c => ({
  id:c.id, name:c.name, category:c.cat, contentType:c.ct,
  pillarsServe:c.pillars, contentDependent:c.cd,
  architecture:ARCH[c.id]||"",
  copyBudget:c.budget.map(r=>r[0]+" "+r[1]).join(" · "),
  assets:c.assets, useCases:c.uses, strengths:c.str, limitations:c.lim, antiPattern:c.anti
}));


const SYSTEM = `You are an expert on Candis's website component library (Contentful building blocks) and on Candis's messaging pillars.
You receive a BRIEF describing what someone wants on a web page, and optionally DESIRED PILLARS.
For EACH component in the catalogue, reason about its ARCHITECTURE and decide whether it can genuinely serve the brief.
ONLY include components that are a real, good fit. If a component does not clearly help the brief, leave it out. If none fit, return empty arrays.
Do surface genuine ALTERNATIVES, not only the single most obvious component: if a more flexible component can also serve the brief well (e.g. a Bento XL — which can hold a video — for a "video with explanation" brief, alongside the dedicated 1-Column Video), include it too and let its "why" note the trade-off. (Still only genuine fits — don't pad with weak matches.)
For each included component, write a 1–2 sentence "why" that is TAILORED to the user's actual content (reference what they said), explaining how to use this component for their case.
Then decide whether the BRIEF is asking for a WHOLE PAGE, a wireframe, or several connected sections that work together.
ONLY in that case, propose a WIREFRAME: an ordered top-to-bottom list of components for that page (a component type may repeat), each with a one-line "role" (what that section does on the page) and the "pillar" it serves most.
If the brief is a single need, a single section, or a "what component does X" question, return an EMPTY wireframe array [] and just return the matching suggestion(s).
Return AT MOST 6 suggestions — only the strongest fits, best first. Never enumerate the whole catalogue.
If the brief is vague, meta, or asks to list/show "everything" or "all components", do NOT list the catalogue — return the 3–5 most versatile starting points (with a short "why") and an empty wireframe.
Respond with MINIFIED JSON ONLY, no prose, in exactly this shape:
{"suggestions":[{"id":"<catalogue id>","why":"..."}],"wireframe":[{"id":"<catalogue id>","role":"...","pillar":"<pillar id or empty>"}]}
Use only component ids and pillar ids that exist in the data provided.`;

// Annotate mode: no filtering, no wireframe — just a pillar-tailored "how it can work" per given component.
const ANNOTATE_SYSTEM = `You are an expert on Candis's website component library (Contentful building blocks) and messaging pillars.
You receive a set of COMPONENTS and one or more DESIRED PILLARS.
For EACH component, write ONE concrete 1–2 sentence note on how that specific component can be used to support the given pillar(s) — tailored to the pillar's intent, referencing what the pillar is about (not a generic description). E.g. for a Video under "Thought Leader", describe the kind of video that carries editorial opinion / POV.
Respond with MINIFIED JSON ONLY, no prose, in exactly this shape: {"notes":{"<component id>":"..."}}
Include every component id you were given. Use only the component ids and pillar ids provided.`;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  // Trim defensively: a stray newline/space in the env var would make the
  // auth header invalid (and must never be echoed back to the caller).
  const key = (process.env.ANTHROPIC_API_KEY || "").trim();
  if (!key) return res.status(500).json({ error: "ANTHROPIC_API_KEY is not set" });
  if (/\s/.test(key)) return res.status(500).json({ error: "ANTHROPIC_API_KEY is malformed (contains whitespace) — re-enter it as a single line" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body || "{}"); } catch { body = {}; } }
  const brief = (body && body.brief ? String(body.brief) : "").slice(0, 2000);
  const pillars = Array.isArray(body && body.pillars) ? body.pillars : [];
  const annotate = Array.isArray(body && body.annotate) ? body.annotate.filter(x => typeof x === "string").slice(0, 20) : [];
  // Annotate mode = browse-by-pillar: pillar-tailored "how it can work" for the given components (no brief, no filtering, no wireframe).
  const annotateMode = annotate.length > 0 && pillars.length > 0;
  if (!brief && !annotateMode) return res.status(400).json({ error: "brief, or annotate + pillars, required" });

  let system, user;
  if (annotateMode) {
    const subset = CATALOG.filter(c => annotate.includes(c.id));
    system = ANNOTATE_SYSTEM;
    user = `DESIRED PILLARS: ${pillars.join(", ")}\n\nPILLARS REFERENCE:${PILLARS_DOC}\n\nCOMPONENTS TO ANNOTATE (JSON):\n${JSON.stringify(subset)}`;
  } else {
    system = SYSTEM;
    user = `BRIEF:\n${brief}\n\nDESIRED PILLARS: ${pillars.join(", ") || "(none specified)"}\n\nPILLARS REFERENCE:${PILLARS_DOC}\n\nCOMPONENT CATALOGUE (JSON):\n${JSON.stringify(CATALOG)}`;
  }

  let r;
  try {
    r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({ model: annotateMode ? ANNOTATE_MODEL : MODEL, max_tokens: 1600, system, messages: [{ role: "user", content: user }] })
    });
  } catch (e) {
    // Never echo the raw error — it can include the request headers (the API key).
    console.error("Anthropic request failed:", e);
    return res.status(502).json({ error: "request to Anthropic failed" });
  }

  if (!r.ok) { const t = await r.text(); return res.status(502).json({ error: "Anthropic " + r.status, detail: t.slice(0, 300) }); }

  const j = await r.json();
  const text = (j.content && j.content[0] && j.content[0].text) || "";
  let out;
  try { out = JSON.parse(text); }
  catch { const m = text.match(/\{[\s\S]*\}/); try { out = m ? JSON.parse(m[0]) : null; } catch { out = null; } }
  if (!out || typeof out !== "object") out = {};

  if (annotateMode) {
    const notes = (out.notes && typeof out.notes === "object") ? out.notes : {};
    return res.status(200).json({ notes });
  }
  if (!Array.isArray(out.suggestions)) out.suggestions = [];
  if (!Array.isArray(out.wireframe)) out.wireframe = [];
  return res.status(200).json(out);
}
