## Goal

Make the site easier to discover and rank for terms beyond your name — e.g. "LUMI AI Factory", "LUMI LLM", "RAG phonology" — while keeping the current #1 result for your name intact.

Site is single-page (route `/`), so all work targets the homepage.

## Changes

**1. `index.html` — richer head metadata**
- Sharper `<title>`: `Artúr Vojt-Antal — AI Specialist at LUMI AI Factory` (keeps name #1, adds discoverable keywords).
- Longer, keyword-rich `<meta name="description">` mentioning LUMI, LLMs, RAG, CSC.
- Add `<meta name="keywords">` (minor signal, cheap).
- Add canonical `<link rel="canonical" href="https://personal-artur-folio.lovable.app/" />`.
- Add `og:url`, `og:site_name`, `og:locale`. Upgrade Twitter card to `summary_large_image` only if we add an og:image (see below — skipping unless you provide one).
- Add `<meta name="robots" content="index, follow" />`.
- Add JSON-LD `Person` schema (name, jobTitle, worksFor CSC, alumniOf universities, sameAs LinkedIn + GitHub, knowsAbout: LLMs, RAG, NLP, HPC). This is the biggest win for entity recognition by Google.

**2. `public/robots.txt` (new)**
- Allow all crawlers, point to sitemap.

**3. `public/sitemap.xml` (new)**
- Single URL entry for `/` with lastmod.

**4. `src/components/Portfolio.tsx` — semantic tweaks**
- Add `alt` improvement on portrait (already reasonable).
- No H1 change needed — `TerminalName` already renders `<h1>` with your name.

## Not doing (unless you ask)

- `og:image`: a placeholder previews worse than none. If you have a headshot/branded card you want used for LinkedIn/Twitter shares, I'll wire it up.
- Per-route Helmet setup: unnecessary for a single-page site.
- Blog/content pages: real long-term SEO growth comes from publishing (e.g. notes on LUMI, RAG). Say the word and I'll scaffold it.

## Technical notes

- Site is Vite SPA; crawlers that execute JS (Googlebot) see the full page. Social crawlers only see `index.html` head — so all meta goes there statically.
- Canonical uses the Lovable preview domain; swap to a custom domain later if you connect one.
