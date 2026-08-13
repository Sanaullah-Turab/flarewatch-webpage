# Sigma FlareWatch — Website Page

Standalone Next.js build of the `/products/flarewatch` page, per the build brief.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the page renders at the root route (see note below).

To produce a production build:

```bash
npm run build
npm start
```

## File map (brief section → file)

| Brief section | File |
|---|---|
| Section 1: Hero | `components/Hero.tsx` |
| Section 2: The problem | `components/Problem.tsx` |
| Section 3: How it works | `components/HowItWorks.tsx` |
| Section 4: Key capabilities | `components/Capabilities.tsx` |
| Section 5: Dashboard preview placeholder | `components/DashboardPlaceholder.tsx` |
| Section 6: The data | `components/DataSection.tsx` |
| Section 7: Who it is for | `components/WhoItIsFor.tsx` |
| Section 8: Current status | `components/StatusTimeline.tsx` |
| Section 9: Contact CTA | `components/ContactCTA.tsx` |
| Page assembly | `app/page.tsx` |
| Meta tags (title, description, canonical, OG) | `app/layout.tsx` |

All sections are self-contained components with no dependencies outside this repo, so they drop into the main site cleanly. Icons come from `lucide-react`, per spec.

## Deviations from the spec, and why

- **Route**: rendered at the root route (`/`) rather than `/products/flarewatch`, since brief Section 5 step 1 says either is fine for local preview.
- **Fonts**: this build environment has no outbound access to Google Fonts, so `next/font/google` (the Next.js default) was removed and the layout falls back to the system font stack. Swap in your preferred typeface via `next/font` once this drops into the main site.
- **OG image**: `openGraph.images` points at `/sigmae-logo.png`, a placeholder path — drop the actual SigmaE Global logo file into `public/` at that filename (or update the path) before this goes live, per the brief's "SigmaE Global logo until the dashboard screenshot is available" instruction.
- **Contact page**: the CTA buttons link to `/contact?subject=Sigma+FlareWatch+early+access` as specified. That route doesn't exist in this standalone repo (expected, per brief).
- **Dashboard screenshot swap-in**: `<DashboardPlaceholder />` is left in place at the Section 5 position in `app/page.tsx`, as instructed. When the real screenshot is ready, swap in the laptop-frame mockup and the "Sigma FlareWatch live dashboard. Public launch August 2026." caption described in the brief.
- No live deploy was set up (optional per the brief); the project builds and runs cleanly with `npm run build`.
# flarewatch-webpage
