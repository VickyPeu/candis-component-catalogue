// Candis Component Catalogue — AI suggestion endpoint
// Serverless function (Vercel-style: export default handler(req,res)).
// Reads ANTHROPIC_API_KEY from env. Given a page brief (+ optional desired pillars),
// it reasons about each component's architecture, keeps only genuine fits with a
// tailored "how it can work" note, and proposes a top-to-bottom wireframe.
//
// Deploy: see DEPLOY-AI.md. Swap MODEL if you prefer a different Claude model.

const MODEL = "claude-sonnet-4-6";

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
  copyBudget:"eyebrow ≤32 · card heading ≤80 (required) · 2–9 cards", assets:"per card: 1 image (16:10) or 1 icon",
  useCases:["overview / feature or benefit grid","light numbered flow","link collection (e.g. blog posts)"],
  strengths:["flexible — many content types, almost any pillar","image or icon + short text per card"], limitations:["card heading capped at 80","weak as a primary trust element"],
  antiPattern:"For a real step-by-step process the Steps Section is better. Not as a primary trust element."},

 {id:"video", name:"1-Column Section — Video", category:"content_single", contentType:"oneColumnSection",
  pillarsServe:["standard_setter","trust_anchor","translation_of_complexity","thought_leader","authority"], contentDependent:true,
  architecture:"1-Column Section with media=Video. Centered single column: eyebrow, heading (serif or sans), paragraph, one large video (needs a thumbnail + duration + play-button alt; host via uploaded file, YouTube or Wistia), optional link. No character limits set. A screen-recording of the Candis product makes a process concrete.",
  copyBudget:"eyebrow ~32 · heading ~60 · video meta description ~150–160", assets:"1 video + 1 thumbnail image (16:9)",
  useCases:["product explainer / demo","testimonial video","founder/vision POV","screen-record a flow through the product"],
  strengths:["single focal point","video shows instead of tells","lots of real estate for one important video"], limitations:["can't carry multiple parallel points","load weight on mobile"],
  antiPattern:"Not for multiple parallel features. Don't bury the video under heavy copy."},

 {id:"image", name:"1-Column Section — Image", category:"content_single", contentType:"oneColumnSection",
  pillarsServe:["standard_setter","trust_anchor","translation_of_complexity","thought_leader","authority"], contentDependent:true,
  architecture:"1-Column Section with media=Image. Centered single column with one large image (alt text + title), eyebrow, heading, paragraph, optional link. Good for one editorial/brand image, a product screenshot, or a labelled diagram.",
  copyBudget:"eyebrow ~32 · heading ~60 · image alt text ~125", assets:"1 image (+ optional mobile image)",
  useCases:["editorial/brand image","diagram or before/after visual","product screenshot as proof"],
  strengths:["single focal point","lighter than video","built-in alt text"], limitations:["static — shows less than video","strongly image-dependent"],
  antiPattern:"Not for multiple parallel features. Don't use a purely decorative image where proof is needed."},

 {id:"toolcmp", name:"1-Column Section — Table (Tool Comparison)", category:"content_single", contentType:"oneColumnSection",
  pillarsServe:["standard_setter","trust_anchor"], contentDependent:false,
  architecture:"1-Column Section with media=Table, table variant tool_comparison. A comparison table: a first label column + 2–4 tool columns, cells shown as green checkmarks / red crosses. Optional accordion + collapse-by-default for long tables.",
  copyBudget:"column headers short ~15–20 · feature labels concise ~60", assets:"none required (optional integration logos)",
  useCases:["Candis vs competitors feature-by-feature","Candis vs market standard","whenever messaging wants a 'Candis vs …' angle"],
  strengths:["reads as 'we measure up'","honest red crosses build credibility","fast to scan"], limitations:["needs accurate, maintained competitive data","2–4 columns max"],
  antiPattern:"Not for non-comparative content. Don't make claims you can't back up."},

 {id:"decision", name:"1-Column Section — Table (Decision Overview)", category:"content_single", contentType:"oneColumnSection",
  pillarsServe:["standard_setter","trust_anchor"], contentDependent:false,
  architecture:"1-Column Section with media=Table, table variant decision_overview. Like the tool comparison but cells hold free TEXT (not checks/crosses) for nuanced, not-black-and-white comparisons. Supports selectable categories that swap between tables. Leaves the 'right fit' decision to the reader.",
  copyBudget:"column headers short ~15–20 · cell text a sentence or two", assets:"none required (optional integration logos)",
  useCases:["nuanced comparison where 'it depends'","trade-offs / fit by use case","multi-category decision overview"],
  strengths:["room for nuance per cell","reads as honest → builds trust"], limitations:["text-heavy, can get long","less scannable than checkmark table"],
  antiPattern:"Not when a simple yes/no comparison is enough (use Tool Comparison)."},

 {id:"cta", name:"CTA Section", category:"conversion", contentType:"ctaSection",
  pillarsServe:["standard_setter","trust_anchor","translation_of_complexity","thought_leader","authority"], contentDependent:true,
  architecture:"CTA Section: a conversion card with eyebrow, heading, paragraph, plus EITHER a button (link) OR a sign-up form. The form supports configurable fields (e.g. email), submit/success/error text, a Demodesk route (book a consultation/demo) and a PDF-on-submit (gated download). Optional image + background colours.",
  copyBudget:"heading ~50 (punchy) · button ~25 · success/error messages short", assets:"optional: 1 image",
  useCases:["book a consultation/demo","newsletter/waitlist email sign-up","gated content download","end-of-page conversion ask"],
  strengths:["button OR form mode","covers consultation booking, email capture, gated PDF","focused single ask"], limitations:["should carry one clear ask"],
  antiPattern:"Don't stack multiple competing CTAs. Don't use it as a content section."},

 {id:"beforeafter", name:"Before / After Slider", category:"process", contentType:"customComponent",
  pillarsServe:["translation_of_complexity","trust_anchor","standard_setter"], contentDependent:false,
  architecture:"Before/After Slider (customComponent, variant before_after_slider). 3–4 paired 'before' Bento M cards and 3–4 'after' cards. Desktop: drag a full-height slider handle to reveal the 'after' state; mobile: a toggle. Section eyebrow/heading/paragraph + an internal before/after headline (desktop).",
  copyBudget:"eyebrow ~32 · before/after headings ~24 · card heading ≤80", assets:"before 3–4 images (16:10) + after 3–4 images (16:10)",
  useCases:["'Ohne und mit Candis' workflow comparison","pain (before) → relief (after) across steps","any before/after transformation"],
  strengths:["interactive reveal makes the contrast memorable","shows not tells"], limitations:["needs paired before/after content per card","lives inside customComponent"],
  antiPattern:"Not for non-transformation content. Don't mismatch the before/after counts."},

 {id:"exitintent", name:"Exit Intent Modal", category:"conversion", contentType:"customComponent",
  pillarsServe:["trust_anchor","standard_setter"], contentDependent:true,
  architecture:"Two-level. A customComponent (variant exit_intent_modal) is the wrapper — it only controls placement/frequency (showOnCommonPages / showOnLandingPages / showOnBlogPostPages, or displayOnPages for specific pages) and links a modal entry. The modal holds the content + a variant. Relevant variant here: exit_intent (opens when a visitor moves to leave, or after triggerAfterSeconds) and exit_intent_countdown (same, with a countdown banner using exitIntentCountdownEndDate). Modal has eyebrow/heading/paragraph, an optional image, and an action that is EITHER a button (ctaButton, up to two) OR an email-capture form. (The same modal type also powers a 'common' button-triggered booking modal and gated downloads — factsheet/pricing_summary/info_packages/implementation_guide — but those are out of scope for this catalogue entry.)",
  copyBudget:"eyebrow ~32 · heading ~50 (punchy) · button ~25 · reassurance/privacy note short", assets:"optional: 1 image, 1:1 (square) ratio, shown beside the text",
  useCases:["limited-time deal (summer / end-of-year) with a countdown","short survey or feedback prompt","'book a consultation' prompt (→ Demodesk)","time-limited announcement on exit or after X seconds"],
  strengths:["appears over any page without touching its layout","placement control: globally by page type or specific pages","timing control — on exit and/or after X seconds","built-in countdown banner for genuine urgency"],
  limitations:["two-level setup — wrapper customComponent plus a linked modal entry","interruptive — overuse trains visitors to dismiss it","no character limits set in Contentful"],
  antiPattern:"Don't run it everywhere all the time or stack multiple modals on one page — one clear, worth-interrupting ask. Not a regular content section."}
];

const SYSTEM = `You are an expert on Candis's website component library (Contentful building blocks) and on Candis's messaging pillars.
You receive a BRIEF describing what someone wants on a web page, and optionally DESIRED PILLARS.
For EACH component in the catalogue, reason about its ARCHITECTURE and decide whether it can genuinely serve the brief.
ONLY include components that are a real, good fit. If a component does not clearly help the brief, leave it out. If none fit, return empty arrays.
For each included component, write a 1–2 sentence "why" that is TAILORED to the user's actual content (reference what they said), explaining how to use this component for their case.
Then propose a WIREFRAME: an ordered top-to-bottom list of components for this page (a component type may repeat), each with a one-line "role" (what that section does on the page) and the "pillar" it serves most.
Respond with MINIFIED JSON ONLY, no prose, in exactly this shape:
{"suggestions":[{"id":"<catalogue id>","why":"..."}],"wireframe":[{"id":"<catalogue id>","role":"...","pillar":"<pillar id or empty>"}]}
Use only component ids and pillar ids that exist in the data provided.`;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: "ANTHROPIC_API_KEY is not set" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body || "{}"); } catch { body = {}; } }
  const brief = (body && body.brief ? String(body.brief) : "").slice(0, 2000);
  const pillars = Array.isArray(body && body.pillars) ? body.pillars : [];
  if (!brief) return res.status(400).json({ error: "brief required" });

  const user = `BRIEF:\n${brief}\n\nDESIRED PILLARS: ${pillars.join(", ") || "(none specified)"}\n\nPILLARS REFERENCE:${PILLARS_DOC}\n\nCOMPONENT CATALOGUE (JSON):\n${JSON.stringify(CATALOG)}`;

  let r;
  try {
    r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({ model: MODEL, max_tokens: 1600, system: SYSTEM, messages: [{ role: "user", content: user }] })
    });
  } catch (e) { return res.status(502).json({ error: "request to Anthropic failed", detail: String(e).slice(0, 200) }); }

  if (!r.ok) { const t = await r.text(); return res.status(502).json({ error: "Anthropic " + r.status, detail: t.slice(0, 300) }); }

  const j = await r.json();
  const text = (j.content && j.content[0] && j.content[0].text) || "";
  let out;
  try { out = JSON.parse(text); }
  catch { const m = text.match(/\{[\s\S]*\}/); try { out = m ? JSON.parse(m[0]) : null; } catch { out = null; } }
  if (!out || typeof out !== "object") out = { suggestions: [], wireframe: [] };
  if (!Array.isArray(out.suggestions)) out.suggestions = [];
  if (!Array.isArray(out.wireframe)) out.wireframe = [];
  return res.status(200).json(out);
}
