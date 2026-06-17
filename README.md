# Candis Component Catalogue

An ask-first catalogue of our website building blocks (Contentful components). Describe what you're
building — e.g. *"show Candis vs others"* or *"sections that build trust"* — and it suggests the right
components, with each one's skeleton, copy limits and how to find it in Contentful. You can also filter
by messaging pillar and category.

**Live:** see the repository's GitHub Pages URL.

## How it works
- `index.html` is fully self-contained (no build, no backend). Open it locally or via GitHub Pages.
- Suggestions use a client-side keyword/pillar matcher over each component's documented tags — not an LLM.
- Source documentation for each component lives as `Catalog-Entry_*.md` files (kept alongside the project);
  the structural parts are pulled from Contentful read-only.

## Status
MVP — currently 7 components. More are added as they're documented.

## Updating
Edit `index.html` (the component data lives in the `DATA` array near the bottom), commit, and push —
GitHub Pages redeploys automatically.
