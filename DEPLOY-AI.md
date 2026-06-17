# Turning on smart (LLM) suggestions — for Emin

The catalogue (`index.html`) works today with a client-side keyword matcher. To switch it to true
AI suggestions — where it reasons about each component's architecture against a brief, keeps only
genuine fits with a tailored reason, and proposes a wireframe — there's one small serverless function:
`api/suggest.js`. It holds the Anthropic API key **server-side** (never in the browser).

## What it does
`POST /api/suggest` with `{ "brief": "...", "pillars": ["standard_setter","trust_anchor"] }`
→ returns `{ "suggestions":[{"id","why"}], "wireframe":[{"id","role","pillar"}] }`.
It sends Claude the full component catalogue as context (embedded in the function) + the brief.

## Recommended: deploy on Vercel (static site + function, one origin, no CORS)
1. vercel.com → **New Project** → import `VickyPeu/candis-component-catalogue`. Framework preset: **Other**.
2. Project → **Settings → Environment Variables** → add `ANTHROPIC_API_KEY` = (Candis's Claude key).
3. **Deploy.** Vercel serves `index.html` and the function at `/api/suggest`.
4. In `index.html`, set the endpoint near the top of the script:
   `const AI_ENDPOINT="/api/suggest";`  ← relative path, same origin. Commit + push (Vercel redeploys).
5. Open the site, type a brief, hit **Suggest** — you should get tailored suggestions + a wireframe.

## If you'd rather keep the site on GitHub Pages
Deploy only the function on Vercel/Cloudflare, then set `AI_ENDPOINT` to the **full function URL**
(e.g. `https://candis-catalogue.vercel.app/api/suggest`). The function already returns permissive
CORS headers, so a cross-origin call from the Pages site works.

## Notes
- **Model:** `MODEL` constant at the top of `api/suggest.js` (currently `claude-sonnet-4-6`). Swap if you prefer.
- **Cost:** one Claude call per "Suggest" over a small context → roughly cents per query.
- **Keep in sync:** the catalogue lives in two places for now — `DATA` in `index.html` (frontend) and
  `CATALOG` in `api/suggest.js` (what the LLM reasons over). When components are added/edited, update both.
  (Worth unifying into a single `catalog.json` both load — small follow-up.)
- **Fallback:** if `AI_ENDPOINT` is empty or the call fails, the site silently falls back to the keyword matcher.
- **Security:** the key is only ever read from `process.env` on the server. Never put it in `index.html`.
