import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mcab.dev"),
  title: "Tvorba webů a Android aplikací | Martin Cabalka – MCAB",
  description:
    "Vyvíjím firemní weby, webové aplikace a Android aplikace na míru. Přímá komunikace, srozumitelný postup a vývoj od návrhu po nasazení.",
  applicationName: "MCAB",
  alternates: {
    canonical: "https://mcab.dev/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "MCAB",
    url: "/",
    title: "Tvorba webů a Android aplikací | Martin Cabalka – MCAB",
    description:
      "Firemní weby, webové systémy a Android aplikace na míru. Přímá komunikace od zadání po nasazení.",
  },
  twitter: {
    card: "summary",
    title: "Tvorba webů a Android aplikací | Martin Cabalka – MCAB",
    description:
      "Firemní weby, webové systémy a Android aplikace na míru. Přímá komunikace od zadání po nasazení.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
