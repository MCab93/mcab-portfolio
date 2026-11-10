import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mcab.dev"),
  title: "MCAB | Martin Cabalka — Web & Android Developer",
  description:
    "Martin Cabalka (MCAB) — vývoj webových a Android aplikací na míru. Čistý kód, efektivní řešení a přehled o průběhu projektu.",
  applicationName: "MCAB",
  alternates: {
    canonical: "/",
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
    title: "MCAB | Martin Cabalka — Web & Android Developer",
    description:
      "Martin Cabalka (MCAB) — vývoj webových a Android aplikací na míru.",
  },
  twitter: {
    card: "summary",
    title: "MCAB | Martin Cabalka — Web & Android Developer",
    description:
      "Martin Cabalka (MCAB) — vývoj webových a Android aplikací na míru.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
