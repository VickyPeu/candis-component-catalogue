// Candis Component Catalogue — AI suggestion endpoint
// Serverless function (Vercel-style: export default handler(req,res)).
// Reads ANTHROPIC_API_KEY from env. Given a page brief (+ optional desired pillars),
// it reasons about each component's architecture, keeps only genuine fits with a
// tailored "how it can work" note, and proposes a top-to-bottom wireframe.
//
// Deploy: see DEPLOY-AI.md. Swap MODEL if you prefer a different Claude model.

const MODEL = "claude-sonnet-4-6";
const ANNOTATE_MODEL = "claude-haiku-4-5-20251001"; // browse-by-pillar notes are a simple task → use the faster/cheaper model

const PILLARS_DOC = `
authority: Structured confidence, earned through restraint. Editorial, low density, footnoted.
thought_leader: Editorial opinion with intent. Magazine spreads, pull-quotes, POV.
standard_setter: Measurable, comparable, verifiable. High density, numbered grids, comparison tables.
trust_anchor: Proof-dense, risk-removing. Logos, numbers, testimonials, badges, honest comparisons.
translation_of_complexity: Progressive disclosure, high visual metaphor. Before/after shown not told; one concept at a time.`;

// Component knowledge base. Keep in sync with the catalogue in index.html (DATA).
const CATALOG = [
 {id:"bentom", name:"Grid Section — Bento M", category:"feature_grids", contentType:"gridSection",
  pillarsServe:["standard_setter","translation_of_complexity","thought_leader","authority","trust_anchor"], contentDependent:false,
  architecture:"Grid Section, variant bento_M: a grid of 2–9 'Bento M' cards (ideal 3 or 6). Each card has an image (16:10) OR an icon, a heading (max 80 chars), a short rich-text paragraph, and an optional link (text or button). Section has an eyebrow (max 32), heading, optional paragraph, background + icon-background options. A light numbered flow is possible by writing numbers into the image/icon/heading.",
  copyBudget:"section eyebrow 32 characters · section heading ~60 characters · section paragraph 1–2 sentences · card heading (each) 80 characters, required · card paragraph (each) short, 1–2 sentences · card link text ~25 characters (optional) · cards 2–9 (ideal 3 or 6)", assets:"per card: 1 image (16:10) or 1 icon",
  useCases:["overview / feature or benefit grid","light numbered flow","link collection (e.g. blog posts)"],
  strengths:["flexible — many content types, almost any pillar","image or icon + short text per card"], limitations:["card heading capped at 80","weak as a primary trust element"],
  antiPattern:"For a real step-by-step process the Steps Section is better. Not as a primary trust element."},

 {id:"video", name:"1-Column Section — Video", category:"content_single", contentType:"oneColumnSection",
  pillarsServe:["standard_setter","trust_anchor","translation_of_complexity","thought_leader","authority"], contentDependent:true,
  architecture:"1-Column Section with media=Video. Centered single column: eyebrow, heading (serif or sans), paragraph, one large video (needs a thumbnail + duration + play-button alt; host via uploaded file, YouTube or Wistia), optional link. No character limits set. A screen-recording of the Candis product makes a process concrete.",
  copyBudget:"section eyebrow ~32 characters · section heading ~60 characters · section paragraph 1–2 sentences · video display title ~60 characters · video meta description ~150–160 characters · video duration 5 characters · play-button alt text short · link text ~25 characters (optional)", assets:"1 video + 1 thumbnail image (16:9)",
  useCases:["product explainer / demo","testimonial video","founder/vision POV","screen-record a flow through the product"],
  strengths:["single focal point","video shows instead of tells","lots of real estate for one important video"], limitations:["can't carry multiple parallel points","load weight on mobile"],
  antiPattern:"Not for multiple parallel features. Don't bury the video under heavy copy."},

 {id:"image", name:"1-Column Section — Image", category:"content_single", contentType:"oneColumnSection",
  pillarsServe:["standard_setter","trust_anchor","translation_of_complexity","thought_leader","authority"], contentDependent:true,
  architecture:"1-Column Section with media=Image. Centered single column with one large image (alt text + title), eyebrow, heading, paragraph, optional link. Good for one editorial/brand image, a product screenshot, or a labelled diagram.",
  copyBudget:"section eyebrow ~32 characters · section heading ~60 characters · section paragraph 1–2 sentences · image alt text ~125 characters · image title ~60 characters · link text ~25 characters (optional)", assets:"1 image — ratio is free choice, but it always spans the full width of the component (+ optional mobile image)",
  useCases:["editorial/brand image","diagram or before/after visual","product screenshot as proof"],
  strengths:["single focal point","lighter than video","built-in alt text"], limitations:["static — shows less than video","strongly image-dependent"],
  antiPattern:"Not for multiple parallel features. Don't use a purely decorative image where proof is needed."},

 {id:"toolcmp", name:"1-Column Section — Table (Tool Comparison)", category:"content_single", contentType:"oneColumnSection",
  pillarsServe:["standard_setter","trust_anchor"], contentDependent:false,
  architecture:"1-Column Section with media=Table, table variant tool_comparison. A comparison table: a first label column + 2–4 tool columns, cells shown as green checkmarks / red crosses. Optional accordion + collapse-by-default for long tables.",
  copyBudget:"section eyebrow ~32 characters · section heading ~60 characters · section paragraph 1–2 sentences · column headers short, ~15–20 characters · feature labels concise, ~60 characters · section header tag short (optional)", assets:"none required",
  useCases:["Candis vs competitors feature-by-feature","Candis vs market standard","whenever messaging wants a 'Candis vs …' angle"],
  strengths:["reads as 'we measure up'","honest red crosses build credibility","fast to scan"], limitations:["needs accurate, maintained competitive data","2–4 columns max"],
  antiPattern:"Not for non-comparative content. Don't make claims you can't back up."},

 {id:"decision", name:"1-Column Section — Table (Decision Overview)", category:"content_single", contentType:"oneColumnSection",
  pillarsServe:["standard_setter","trust_anchor"], contentDependent:false,
  architecture:"1-Column Section with media=Table, table variant decision_overview. Like the tool comparison but cells hold free TEXT (not checks/crosses) for nuanced, not-black-and-white comparisons. Supports selectable categories that swap between tables. Leaves the 'right fit' decision to the reader.",
  copyBudget:"section eyebrow ~32 characters · section heading ~60 characters · section paragraph 1–2 sentences · column headers short, ~15–20 characters · cell text a sentence or two · category labels short (selectable categories)", assets:"none required",
  useCases:["nuanced comparison where 'it depends'","trade-offs / fit by use case","multi-category decision overview"],
  strengths:["room for nuance per cell","reads as honest → builds trust"], limitations:["text-heavy, can get long","less scannable than checkmark table"],
  antiPattern:"Not when a simple yes/no comparison is enough (use Tool Comparison)."},

 {id:"cta", name:"CTA Section", category:"conversion", contentType:"ctaSection",
  pillarsServe:["standard_setter","trust_anchor","translation_of_complexity","thought_leader","authority"], contentDependent:true,
  architecture:"CTA Section: a conversion card with eyebrow, heading, paragraph, plus EITHER a button (link) OR a sign-up form. The form supports configurable fields (e.g. email), submit/success/error text, a Demodesk route (book a consultation/demo) and a PDF-on-submit (gated download). Optional image + background colours.",
  copyBudget:"section eyebrow 32 characters · section heading 52 characters (punchy) · section paragraph 120 characters · button text ~25 characters · form success / error messages short, 1 line each · privacy policy as needed (form mode)", assets:"optional: 1 image — upload 16:10, but the copy sets the component height so the image is stretched/cropped to a different ratio; copy & graphic must be briefed together",
  useCases:["book a consultation/demo","newsletter/waitlist email sign-up","gated content download","end-of-page conversion ask"],
  strengths:["button OR form mode","covers consultation booking, email capture, gated PDF","focused single ask"], limitations:["should carry one clear ask"],
  antiPattern:"Don't stack multiple competing CTAs. Don't use it as a content section."},

 {id:"beforeafter", name:"Before / After Slider", category:"process", contentType:"customComponent",
  pillarsServe:["translation_of_complexity","trust_anchor","standard_setter"], contentDependent:false,
  architecture:"Before/After Slider (customComponent, variant before_after_slider). 3–4 paired 'before' Bento M cards and 3–4 'after' cards. Desktop: drag a full-height slider handle to reveal the 'after' state; mobile: a toggle. Section eyebrow/heading/paragraph + an internal before/after headline (desktop).",
  copyBudget:"section eyebrow ~32 characters · section heading ~60 characters · section paragraph 1–2 sentences · before / after headings short, ~24 characters (desktop) · card heading (each) 80 characters · card paragraph (each) short, 1–2 sentences · mobile toggle labels short", assets:"before 3–4 images (16:10) + after 3–4 images (16:10)",
  useCases:["'Ohne und mit Candis' workflow comparison","pain (before) → relief (after) across steps","any before/after transformation"],
  strengths:["interactive reveal makes the contrast memorable","shows not tells"], limitations:["needs paired before/after content per card","lives inside customComponent"],
  antiPattern:"Not for non-transformation content. Don't mismatch the before/after counts."},

 {id:"exitintent", name:"Exit Intent Modal", category:"conversion", contentType:"customComponent",
  pillarsServe:["trust_anchor","standard_setter"], contentDependent:true,
  architecture:"Two-level. A customComponent (variant exit_intent_modal) is the wrapper — it only controls placement/frequency (showOnCommonPages / showOnLandingPages / showOnBlogPostPages, or displayOnPages for specific pages) and links a modal entry. The modal holds the content + a variant. Relevant variant here: exit_intent (opens when a visitor moves to leave, or after triggerAfterSeconds) and exit_intent_countdown (same, with a countdown banner using exitIntentCountdownEndDate). Modal has eyebrow/heading/paragraph, an optional image, and an action that is EITHER a button (ctaButton, up to two) OR an email-capture form. (The same modal type also powers a 'common' button-triggered booking modal and gated downloads — factsheet/pricing_summary/info_packages/implementation_guide — but those are out of scope for this catalogue entry.)",
  copyBudget:"eyebrow ~32 characters · heading ~50 characters · title ~50 characters, required · close label short, required · paragraph 1–2 sentences · button text ~25 characters · reassurance text short line", assets:"optional: 1 image, 1:1 (square) ratio, shown beside the text",
  useCases:["limited-time deal (summer / end-of-year) with a countdown","short survey or feedback prompt","'book a consultation' prompt (→ Demodesk)","time-limited announcement on exit or after X seconds"],
  strengths:["appears over any page without touching its layout","placement control: globally by page type or specific pages","timing control — on exit and/or after X seconds","built-in countdown banner for genuine urgency"],
  limitations:["two-level setup — wrapper customComponent plus a linked modal entry","interruptive — overuse trains visitors to dismiss it","no character limits set in Contentful"],
  antiPattern:"Don't run it everywhere all the time or stack multiple modals on one page — one clear, worth-interrupting ask. Not a regular content section."},

 {id:"feedback", name:"Feedback Section", category:"conversion", contentType:"customComponent",
  pillarsServe:["thought_leader","trust_anchor"], contentDependent:false,
  architecture:"customComponent, variant feedback_section: a two-part section. Left = eyebrow + heading + paragraph (the invitation). Right = a form panel where the visitor taps one of a few suggestion chips OR writes their own free-text idea (~150 chars) and submits. All UI microcopy (labels, placeholder, submit button, success message, character counter) comes from a linked Common Text Set; the chip options come from the feedbackSectionSuggestions array. Submissions are posted to Slack (#website-feedback-form-submit). Fundamentally an engagement/listening utility, not a lead form (no email capture).",
  copyBudget:"section eyebrow ~32 characters · section heading ~60 characters · section paragraph 2–3 sentences · suggestion chips short ~25 characters each · UI labels short · submit button ~25 characters · visitor free-text ~150 characters · success message short", assets:"none (UI only)",
  useCases:["'which topics should we cover next?' on a blog/podcast page","gather pain points or feature wishes","a lightweight idea box / mini survey","source editorial ideas directly from readers"],
  strengths:["two ways to answer — pick a chip or write your own","responses flow straight to Slack","signals you listen → builds rapport","low-friction, one focused ask"],
  limitations:["links a Common Text Set for all UI microcopy","free-text answer is short (~150 chars)","needs the Slack endpoint wired (backend)","not a lead/contact form — no email capture"],
  antiPattern:"Don't use it as a contact/lead-capture form (no email field). Don't overload with too many chips. Don't ask for feedback you won't act on."},

 {id:"banner", name:"Page Bottom Banner", category:"conversion", contentType:"customComponent",
  pillarsServe:["trust_anchor","standard_setter"], contentDependent:true,
  architecture:"customComponent, variant page_bottom_banner: a slim bar pinned (sticky) to the bottom of the screen, dismissible (×). Heading + short paragraph (date/time + one line), a LIVE countdown (days:hours:minutes:seconds) driven by pageBottomBannerExpiryDate, and a CTA button (link). Placement is flexible: global by page type (showOnCommon/Landing/BlogPost) or pinned to specific pages (displayOnPages). It's a date-driven announcement/conversion mechanism — less interruptive than a modal since it doesn't block the page.",
  copyBudget:"heading ~50 characters (punchy) · paragraph 1 short sentence (date/time + line) · CTA button ~25 characters", assets:"none (text + countdown + button)",
  useCases:["webinar / event registration with a countdown to the start","limited-time deal counting down to the deadline","any date-driven announcement that stays visible while scrolling"],
  strengths:["stays visible while scrolling without blocking the page","built-in live countdown creates urgency","dismissible","flexible placement: global by page type or specific pages","one clear ask (heading + countdown + CTA)"],
  limitations:["needs an expiry date to count down to","persistent footer uses a little screen space until dismissed","one message at a time"],
  antiPattern:"Not for evergreen content (no date = no countdown). Don't stack multiple persistent banners. Don't keep it running past the deadline."},

 {id:"steps", name:"Steps Section", category:"process", contentType:"customComponent",
  pillarsServe:["translation_of_complexity","standard_setter"], contentDependent:false,
  architecture:"customComponent, variant steps_section: a row of EXACTLY 3 Bento M cards (the steps field) presented as a timeline. Each card has a step label (the timeline marker — e.g. Heute / Tag 14 / Tag 30; the bentoM stepLabel field IS used here, unlike in gridSection), a required image (icon variant does NOT work), a heading (max 80 chars), and a short checklist (the card paragraph). Section eyebrow + heading above; optional CTA button below. Fewer or more than 3 steps breaks the design.",
  copyBudget:"section eyebrow ~32 characters · section heading ~60 characters · section paragraph 1–2 sentences (optional) · step label short ~12 characters · card heading 80 characters · card checklist short bullet lines · button ~25 characters · exactly 3 steps", assets:"3 images (16:10), one per step (icon variant doesn't work)",
  useCases:["onboarding / rollout timeline ('So läuft die Implementierung')","a 3-phase how-it-works","before → during → after of a workflow as discrete steps"],
  strengths:["reads instantly as a time-ordered process","each step gets an image + heading + scannable checklist","optional closing CTA","turns a process into three digestible beats"],
  limitations:["exactly 3 steps — fewer/more breaks the design","images required — icon variant doesn't work","each step is a Bento M, inheriting its card limits"],
  antiPattern:"Not for non-sequential content (use a Grid Section). Don't fit 4+ steps. Don't leave out the images."},

 {id:"bentoxl", name:"Bento XL", category:"content_single", contentType:"bentoXL",
  pillarsServe:["trust_anchor","standard_setter","translation_of_complexity","thought_leader","authority"], contentDependent:true,
  architecture:"bentoXL: a large two-part block — a 1:1 visual on one side (image, video, or a customHtmlSection embed e.g. Navattic) and text on the other (eyebrow, heading, paragraph) plus up to two links (a button and/or text link). The image should be square (1:1) with a transparent background; the background behind it is set in Contentful. Several background variants (white, gray, gray_on_white, black, white_on_gray, white_on_black) and image position left/right. Stands alone OR nested in a Grid Section. The icon field is only used inside a Bento Tab Section (irrelevant standalone). Content-dependent — the content sets the pillar.",
  copyBudget:"eyebrow ~40 recommended (270 max) · heading ~60 recommended (620 max) · paragraph 1–3 sentences · button text ~25 characters · text link ~25 characters (optional)", assets:"1 image — 1:1 (square), transparent background (bg set in Contentful); or a video, or a custom HTML embed",
  useCases:["a standalone feature/story section (image + text + CTA)","showcase an integration or capability (e.g. Sesam + DATEV export)","embed an interactive product demo via custom HTML (Navattic)","a bento placed inside a larger Grid Section"],
  strengths:["flexible media: 1:1 image, video, or custom HTML embed","six background styles + image left/right","generous heading room; button + text link","works standalone or inside a Grid Section"],
  limitations:["image must be 1:1 with a transparent background","media is required","the icon field does nothing here (it's for the Bento Tab Section)"],
  antiPattern:"Don't use a non-square or non-transparent image. Don't rely on the Icon field for the standalone Bento XL."}
];

const SYSTEM = `You are an expert on Candis's website component library (Contentful building blocks) and on Candis's messaging pillars.
You receive a BRIEF describing what someone wants on a web page, and optionally DESIRED PILLARS.
For EACH component in the catalogue, reason about its ARCHITECTURE and decide whether it can genuinely serve the brief.
ONLY include components that are a real, good fit. If a component does not clearly help the brief, leave it out. If none fit, return empty arrays.
For each included component, write a 1–2 sentence "why" that is TAILORED to the user's actual content (reference what they said), explaining how to use this component for their case.
Then decide whether the BRIEF is asking for a WHOLE PAGE, a wireframe, or several connected sections that work together.
ONLY in that case, propose a WIREFRAME: an ordered top-to-bottom list of components for that page (a component type may repeat), each with a one-line "role" (what that section does on the page) and the "pillar" it serves most.
If the brief is a single need, a single section, or a "what component does X" question, return an EMPTY wireframe array [] and just return the matching suggestion(s).
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
