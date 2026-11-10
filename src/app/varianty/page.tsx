import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    number: "01",
    title: "Webové aplikace",
    description: "Weby a produkty, které rostou spolu s vaším byznysem.",
  },
  {
    number: "02",
    title: "Android aplikace",
    description: "Mobilní zážitek, který funguje přirozeně v pohybu.",
  },
  {
    number: "03",
    title: "API a propojení",
    description: "Služby, které spolu konečně mluví.",
  },
];

function ServiceItems({ variant }: { variant: "line" | "orbit" | "rail" }) {
  return (
    <ol className={styles[`${variant}List`]}>
      {services.map((service) => (
        <li className={styles[`${variant}Item`]} key={service.number}>
          <span className={styles[`${variant}Node`]}>{service.number}</span>
          <div className={styles.itemCopy}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function VariantsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>MC</span>
          <span>MCAB</span>
        </Link>
        <Link className={styles.backLink} href="/#sluzby">
          Zpět na web <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <div className={styles.content}>
        <div className={styles.intro}>
          <p className={styles.kicker}>
            <span /> DESIGN EXPLORATION — 01
          </p>
          <h1>
            Méně karet.
            <br />
            <span>Víc propojení.</span>
          </h1>
          <p className={styles.lead}>
            Čtyři směry pro služby. Méně popisků a štítků, víc charakteru
            a vztahu mezi jednotlivými částmi.
          </p>
        </div>

        <section className={styles.variant} aria-labelledby="line-title">
          <div className={styles.variantHeading}>
            <span>01</span>
            <div>
              <p>JASNÝ SMĚR</p>
              <h2 id="line-title">Linka</h2>
            </div>
            <span className={styles.variantNote}>JEDEN SOUVISLÝ PRODUKT</span>
          </div>
          <div className={styles.lineCanvas}>
            <ServiceItems variant="line" />
          </div>
        </section>

        <section
          className={`${styles.variant} ${styles.orbitVariant}`}
          aria-labelledby="orbit-title"
        >
          <div className={styles.variantHeading}>
            <span>02</span>
            <div>
              <p>V POHYBU</p>
              <h2 id="orbit-title">Orbit</h2>
            </div>
            <span className={styles.variantNote}>JEDEN SYSTÉM, TŘI BODY</span>
          </div>
          <div className={styles.orbitCanvas}>
            <svg
              className={styles.orbitPath}
              viewBox="0 0 1000 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M166 78 C310 78 342 248 500 248 S690 78 834 78" />
              <path d="M166 78 C310 78 342 248 500 248 S690 78 834 78" />
            </svg>
            <ServiceItems variant="orbit" />
          </div>
        </section>

        <section className={styles.variant} aria-labelledby="rail-title">
          <div className={styles.variantHeading}>
            <span>03</span>
            <div>
              <p>KLIDNÝ EDITORIÁL</p>
              <h2 id="rail-title">Sekvence</h2>
            </div>
            <span className={styles.variantNote}>OD NÁPADU PO PROPOJENÍ</span>
          </div>
          <div className={styles.railCanvas}>
            <ServiceItems variant="rail" />
            <span className={styles.railEnd} aria-hidden="true">
              +
            </span>
          </div>
        </section>

        <section
          className={`${styles.variant} ${styles.goldVariant}`}
          aria-labelledby="gold-title"
        >
          <div className={styles.variantHeading}>
            <span>04</span>
            <div>
              <p>NOČNÍ EDICE</p>
              <h2 id="gold-title">Aurum</h2>
            </div>
            <span className={styles.variantNote}>ČERNÁ · ZLATO · MĚĎ</span>
          </div>
          <div className={styles.orbitCanvas}>
            <svg
              className={`${styles.orbitPath} ${styles.goldPath}`}
              viewBox="0 0 1000 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M166 78 C310 78 342 248 500 248 S690 78 834 78" />
              <path d="M166 78 C310 78 342 248 500 248 S690 78 834 78" />
            </svg>
            <ServiceItems variant="orbit" />
          </div>
        </section>

        <footer className={styles.footer}>
          <span>DALŠÍ KROK</span>
          <p>Vyber směr, který nejvíc sedí — doladím ho na celém webu.</p>
        </footer>
      </div>
    </main>
  );
}
