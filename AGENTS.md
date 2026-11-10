## Projekt

Prezentační web nezávislého vývojáře pro získávání zakázek na webové a Android aplikace. Aktuální cíl: jednostránkový, responzivní český web s kvalitním technickým SEO.

## Technologie a struktura

- Next.js App Router, React, TypeScript, CSS.
- Produkční server Next.js; stránka se při buildu předgeneruje do HTML.
- `src/app/page.tsx`: obsah úvodní stránky.
- `src/app/ContactForm.tsx`: přístupný kontaktní formulář odesílaný přes Netlify Forms.
- `src/app/globals.css`: responzivní styly a animace.
- `src/app/layout.tsx`: jazyk a metadata.
- `src/app/sitemap.ts`: sitemap pro produkční doménu `mcab.dev`.
- `netlify.toml`: build příkaz pro Netlify.
- `public/_redirects`: kanonické přesměrování `www`.
- Správce balíčků: npm.

## Příkazy

- Instalace: `npm ci`
- Vývoj: `npm run dev`
- Kontrola stylu: `npm run lint`
- Typová kontrola: `npx tsc --noEmit`
- Produkční build: `npm run build`
- Produkční spuštění (po buildu): `npm run start`

## Pravidla projektu

- Zachovej český obsah, responzivní rozvržení, přístupnost a respekt k `prefers-reduced-motion`.
- Zachovej značku MCAB (Martin Cabalka) a vizuální směr hlavního webu: téměř černý základ, bílou typografii a oranžové akcenty.
- `/varianty` je samostatná stránka pro porovnávání návrhů; její styly odděluj od hlavního webu.
- Stránka může zůstat server-renderovaná bez klientského JavaScriptu, pokud interakce nevyžadují opak.
- Před zveřejněním nastav doménu, canonical URL, sitemapu a sdílecí obrázek.
- Pro příjem poptávek musí být v Netlify zapnuté rozpoznávání formulářů a nastavené e-mailové notifikace.
- Nepřidávej smyšlené zkušenosti, reference, výsledky ani metriky.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
