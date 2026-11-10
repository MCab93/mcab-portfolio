import ContactForm from "./ContactForm";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 30" fill="none">
      <rect
        x="5"
        y="3"
        width="30"
        height="20"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M2 27h36l-3-4H5l-3 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none">
      <path
        d="m11 7-3-4m17 4 3-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 16a10 10 0 0 1 20 0H8Zm0 2h20v9a2 2 0 0 1-2 2h-1v4m-10-4v4m-8-15v8m22-8v8"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="12" r="1" fill="#111" />
      <circle cx="23" cy="12" r="1" fill="#111" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none">
      <path
        d="m13 10-8 8 8 8m10-16 8 8-8 8m-3-21-5 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg
        className="device-art"
        viewBox="0 0 700 390"
        role="presentation"
        focusable="false"
      >
        <defs>
          <linearGradient id="laptop-screen" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#25272a" />
            <stop offset="1" stopColor="#08090b" />
          </linearGradient>
          <linearGradient id="laptop-base" x1="0" x2="0.8" y1="0" y2="1">
            <stop offset="0" stopColor="#8d5a28" />
            <stop offset="0.45" stopColor="#261d16" />
            <stop offset="1" stopColor="#09090a" />
          </linearGradient>
          <linearGradient id="phone-screen" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#17191c" />
            <stop offset="1" stopColor="#050607" />
          </linearGradient>
          <filter id="orange-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="floor-glow">
            <stop stopColor="#f47712" stopOpacity=".25" />
            <stop offset="1" stopColor="#f47712" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="373" cy="325" rx="300" ry="54" fill="url(#floor-glow)" />
        <path
          className="orbit-glow"
          d="M36 259c74-74 210-116 347-139 152-26 280-4 286 43 7 52-113 116-270 146-155 29-304 14-334-27-5-7-6-15-3-23"
          fill="none"
          stroke="#ff8714"
          strokeWidth="8"
          filter="url(#orange-glow)"
        />
        <path
          d="M36 259c74-74 210-116 347-139 152-26 280-4 286 43 7 52-113 116-270 146-155 29-304 14-334-27-5-7-6-15-3-23"
          fill="none"
          stroke="#ffad2e"
          strokeWidth="2.3"
        />

        <g className="laptop">
          <path
            d="m194 61 235-49c12-2 20 5 18 16l-35 200-271 33 37-184c2-9 7-14 16-16Z"
            fill="#090a0d"
            stroke="#bd7a38"
            strokeWidth="2"
          />
          <path
            d="m201 68 220-45-32 188-252 30 33-159c2-7 11-13 31-14Z"
            fill="url(#laptop-screen)"
            stroke="#37383a"
            strokeWidth="1.4"
          />
          <path
            d="m177 241 235-29 54 28-292 45-45-10 48-34Z"
            fill="url(#laptop-base)"
            stroke="#d4914b"
            strokeWidth="1.6"
          />
          <path
            d="m177 241-47 34 43 13 293-47-45-26"
            fill="#35251a"
            stroke="#a16b34"
            strokeWidth="1.4"
          />
          <path
            d="m209 251 158-24 29 9-160 26-28-11Z"
            fill="#17181a"
            stroke="#9e7042"
            strokeWidth="1"
          />
          <path d="m216 254 166-24" stroke="#ff9d24" strokeOpacity=".44" strokeWidth="1" />
          <path d="m206 77 218-43" stroke="#ff9c22" strokeWidth="1.5" />
          <path d="m189 103 220-39" stroke="#6b6d70" strokeWidth="1" />
          <path
            d="m181 118 42-8m12-2 82-15m-136 37 19-4m15-3 48-9m-85 30 36-7m14-3 69-13m-123 39 22-4m14-3 58-11m-100 31 41-8m14-3 73-14m-133 36 29-5m13-3 67-13"
            stroke="#f08c22"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="m340 77 57-11m-68 23 62-12m-64 23 61-12m-67 24 61-12m-67 24 60-12m-70 25 61-12m-67 24 59-12m-68 24 58-11"
            stroke="#bac1c8"
            strokeOpacity=".58"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="m173 226 240-30"
            stroke="#ff9d25"
            strokeWidth="2.2"
            filter="url(#orange-glow)"
          />
        </g>

        <g className="phone" transform="rotate(9 477 246)">
          <rect
            x="432"
            y="144"
            width="104"
            height="174"
            rx="16"
            fill="#050607"
            stroke="#b87735"
            strokeWidth="2"
          />
          <rect x="439" y="153" width="90" height="155" rx="11" fill="url(#phone-screen)" />
          <rect x="468" y="158" width="32" height="3" rx="1.5" fill="#444448" />
          <g transform="translate(458 190) scale(1.3)" fill="#ff9c0a">
            <path
              d="m11 7-3-4m17 4 3-4"
              fill="none"
              stroke="#ff9c0a"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M8 16a10 10 0 0 1 20 0H8Zm0 2h20v9a2 2 0 0 1-2 2h-1v4a2 2 0 0 1-4 0v-4h-6v4a2 2 0 0 1-4 0v-4h-1a2 2 0 0 1-2-2v-9Zm-5 2v7a2 2 0 0 0 4 0v-7a2 2 0 0 0-4 0Zm26 0v7a2 2 0 0 0 4 0v-7a2 2 0 0 0-4 0Z" />
            <circle cx="13" cy="12" r="1" fill="#111" />
            <circle cx="23" cy="12" r="1" fill="#111" />
          </g>
          <circle cx="484" cy="317" r="2" fill="#d08a3d" />
        </g>
      </svg>
      <span className="art-glint art-glint-one" />
      <span className="art-glint art-glint-two" />
    </div>
  );
}

const services = [
  {
    number: "01",
    title: "Webové stránky a aplikace",
    description:
      "Firemní web, zákaznický portál nebo interní systém, který pomůže zákazníkům i vašemu týmu. Navážu také na řešení, které už používáte.",
    icon: <LaptopIcon />,
  },
  {
    number: "02",
    title: "Android aplikace",
    description:
      "Mobilní aplikace na míru i rozvoj té stávající. Promyslíme, jak má fungovat a s jakými službami se má propojit.",
    icon: <AndroidIcon />,
  },
  {
    number: "03",
    title: "Frontend vývoj a kódování",
    description:
      "Převedu návrh z Figmy do responzivního rozhraní, opravím konkrétní části webu nebo posílím váš vývojový tým.",
    icon: <CodeIcon />,
  },
];

const collaborationSteps = [
  "Probereme zadání a cíl projektu.",
  "Navrhnu řešení, rozsah a odhad ceny.",
  "Projekt postupně vyvíjím a průběžně sdílím, jak práce pokračují.",
  "Společně otestujeme, nasadíme a předáme výsledek.",
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="site-header">
        <a className="brand" href="#domu" aria-label="MCAB, Martin Cabalka">
          <span className="brand-mark" aria-hidden="true">
            MC
          </span>
          <span className="brand-lockup">
            <strong>MCAB</strong>
            <small>Martin Cabalka</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#o-mne">O mně</a>
          <a href="#spoluprace">Jak spolupracuji</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="header-cta" href="#kontakt">
          Poptat projekt <ArrowIcon />
        </a>
      </header>

      <main id="obsah">
        <section className="hero section-shell" id="domu" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">VÝVOJ WEBŮ A APLIKACÍ NA MÍRU</p>
            <h1 id="hero-title">Weby a aplikace, které dávají smysl.</h1>
            <p className="hero-description">
              Tvořím firemní weby, webové systémy a Android aplikace. Pomohu od zadání a návrhu
              až po vývoj a nasazení. Jednáte přímo se mnou.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#kontakt">
                Nezávazně poptat projekt <ArrowIcon />
              </a>
              <a className="button button-outline" href="#sluzby">
                Moje služby
              </a>
            </div>
          </div>
          <HeroArtwork />
        </section>

        <section className="trust-points section-shell" aria-label="Výhody spolupráce">
          <p>Přímá komunikace</p>
          <p>Jasný postup od zadání po nasazení</p>
          <p>Pomoc s celým projektem i jeho částí</p>
        </section>

        <section className="services section-shell" id="sluzby" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-kicker">S ČÍM VÁM MOHU POMOCI</p>
            <h2 id="services-title">Řešení podle toho, co váš projekt potřebuje.</h2>
          </div>
          <div className="services-list">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <span className="service-number">{service.number}</span>
                <span className="service-icon">{service.icon}</span>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-process section-shell" aria-label="O mně a průběhu spolupráce">
          <article className="about-panel" id="o-mne" aria-labelledby="about-title">
            <p className="section-kicker">OSOBNÍ PŘÍSTUP, PŘÍMÁ KOMUNIKACE</p>
            <h2 id="about-title">Jsem Martin. Pojďme váš nápad proměnit ve funkční řešení.</h2>
            <p>
              Jmenuji se Martin Cabalka. Kromě samotného vývoje pomáhám ujasnit zadání, navrhnout
              řešení a dotáhnout projekt do nasazení. Zakládám si na přímé komunikaci, přehledném
              postupu a kvalitně odvedené práci.
            </p>
            <p>
              Můžeme spolupracovat na celém projektu nebo jen na jeho části — třeba jako posila
              vašeho interního týmu či agentury.
            </p>
          </article>

          <section
            className="process-panel"
            id="spoluprace"
            aria-labelledby="process-title"
          >
            <p className="section-kicker">OD PRVNÍHO ROZHOVORU PO NASAZENÍ</p>
            <h2 id="process-title">Jak spolupráce probíhá</h2>
            <ol className="process-list">
              {collaborationSteps.map((step, index) => (
                <li key={step}>
                  <span className="process-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </section>

        <section className="contact section-shell" id="kontakt" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="section-kicker">MÁTE NÁPAD NEBO POTŘEBUJETE POMOC?</p>
            <h2 id="contact-title">Pojďme probrat váš projekt.</h2>
            <p>
              Napište mi pár slov o tom, co potřebujete. Ozvu se vám, abychom probrali další
              postup.
            </p>
            <a className="contact-direct" href="mailto:martin.cabalka@gmail.com">
              Nebo napište přímo na martin.cabalka@gmail.com
            </a>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>Weby a aplikace na míru · MCAB</p>
        <span className="footer-copy">© {new Date().getFullYear()} Martin Cabalka</span>
      </footer>
    </>
  );
}
