# MCAB

Český prezentační web Martina Cabalky (MCAB), vývojáře webových a Android aplikací. Postavený v Reactu a TypeScriptu na Next.js App Router.

## Spuštění

```bash
npm ci
npm run dev
```

Pro produkční spuštění:

```bash
npm run build
npm run start
```

Web poběží na `http://localhost:3000`. Příkaz `npm run start` spouštějte až po produkčním buildu.

## Kontroly a build

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Next.js při buildu předgeneruje stránky pro rychlé načtení a SEO. Produkční server je možné lokálně spustit příkazem `npm run start`; pro Netlify se použije jeho automatický Next.js OpenNext adapter.

## Nasazení na Netlify

1. Pushněte změny do připojeného repozitáře `MCab93/mcab-portfolio`; Netlify automaticky spustí nové nasazení z větve `master`.
2. Projekt používá Next.js Runtime od Netlify a build příkaz `npm run build`.
3. V nastavení domén webu přidejte `mcab.dev` a `www.mcab.dev`; jako primární doménu nastavte `mcab.dev`.
4. U registrátora domény nastavte DNS záznamy, které Netlify zobrazí pro připojenou doménu. Případně přeneste DNS správu na Netlify.
5. Po ověření DNS aktivujte HTTPS v Netlify. `public/_redirects` přesměruje `www.mcab.dev` na `mcab.dev`.

Doménu je nutné nejprve vlastnit/registrovat. DNS záznamy se liší podle registrátora a konfigurace Netlify, proto je nekopírujte z obecných příkladů.

### Kontaktní formulář

Formulář používá Netlify Forms bez externích klíčů nebo e-mailové aplikace. V **Project → Forms → Form detection** zapněte rozpoznávání formulářů a nasaďte tuto verzi webu. Potom v **Project → Forms → Submission notifications** přidejte e-mail pro upozornění. Netlify může vyžadovat potvrzení adresy, která není členem týmu. Odeslání otestujte na nasazeném webu a ověřte, že se poptávka objeví v přehledu **Forms** a přijde upozornění.

Lokálně formulář záměrně nehlásí úspěch: běžný Next.js server neumí poptávku uložit do Netlify Forms.

## Před zveřejněním

- Ověřte vlastnictví domény `mcab.dev` a nakonfigurujte ji podle instrukcí Netlify.
- Ověřte kontaktní e-mail a případně doplňte profily či portfolio.
- Ověřte texty, technologie a nabízené služby podle skutečné zkušenosti a nabídky.
- Metadata, canonical URL a sitemapu obsluhuje `src/app/layout.tsx` a `src/app/sitemap.ts`.
- Otestujte publikovanou verzi na mobilu, tabletu a desktopu.

## Struktura

- `src/app/page.tsx` — obsah stránky a navigace.
- `src/app/ContactForm.tsx` — přístupný formulář pro přímé odesílání poptávek přes Netlify Forms.
- `src/app/sitemap.ts` — sitemap pro `mcab.dev`.
- `netlify.toml` — build příkaz pro Netlify.
- `public/_redirects` — přesměrování `www.mcab.dev` na primární doménu.
- `src/app/varianty/page.tsx` — srovnání návrhů propojených služeb a barev na `/varianty`.
- `src/app/globals.css` — design, responzivní pravidla, stavy a animace.
- `src/app/layout.tsx` — jazyk dokumentu a metadata pro vyhledávání a sdílení.
- `public/robots.txt` — základní pravidla pro crawlery.

Hlavní web používá téměř černý základ s oranžovými akcenty. Návrhová stránka `/varianty` má vlastní oddělené barevné směry.
