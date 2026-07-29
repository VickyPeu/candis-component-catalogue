# Candis Component Catalogue

A catalogue of our website building blocks (Contentful components) with **Compony**, an AI recommender
on top. Describe what you want a page to do — e.g. *"show Candis vs others"*, *"a hero with customer
logos for trust"*, or *"a page for the Summerparty with signup"* — and it suggests the right
components with, for each: a tailored *why*, the structure as a **wireframe skeleton**, the **copy
limits**, the **assets** needed, and a **link straight into Contentful**. For whole-page briefs it also
sketches an ordered top-to-bottom **wireframe**. You can also browse by **messaging pillar**.

**Live:** https://candis-website-component-catalogue.vercel.app/

Currently **31 components** across Hero, Feature Grids (Bentos), Content, Social Proof, Conversion and
Process sections.

## How it works
- **`index.html`** — the front-end (self-contained page: the UI, the wireframe skeletons `SK`, styling).
- **`catalog.js`** — the single source of truth: `export const COMPONENTS = [...]` (every component's
  data — pillars, copy budget, assets, use-cases, Contentful setup, etc.). Imported by both the page
  and the AI function, so there's one place to edit.
- **`api/suggest.js`** — Compony, a Vercel serverless function that calls Claude (`claude-sonnet-4-6`).
  It reasons over the catalogue and returns tailored suggestions + an optional wireframe. If it's
  unavailable, the page falls back to a local keyword/pillar matcher.
- **`catalog-source/`** — the long-form docs: one `Catalog-Entry_*.md` per component, the standalone
  skeleton SVGs, `BENTO-VARIANTS.md`, and `CONTENTFUL-LIMITS-AUDIT.md`. Enforced character limits are
  pulled read-only from the Contentful **Management API** (the CMA — the only place `size` validations
  live); `cma.sh` is a read-only wrapper for that.

## Updating a component
1. Edit its entry in **`catalog.js`** (and its wireframe in the `SK` object in `index.html`).
2. Optionally add/update its `catalog-source/Catalog-Entry_*.md`.
3. Commit + push — **Vercel redeploys automatically**.

The AI catalogue is derived from `COMPONENTS` at request time, so updating `catalog.js` updates both
the page and Compony. AI-only architecture prose lives in the `ARCH` map in `api/suggest.js`.

## Notes
- The `ANTHROPIC_API_KEY` is a **server-side Vercel environment variable** — never committed to the repo.
- Not a build system: no bundler. `index.html` + `catalog.js` are served as-is; `api/suggest.js` runs on Vercel.
