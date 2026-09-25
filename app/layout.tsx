import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileBar, SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const description =
  "Familiebedrift siden 1936. Opel- og Subaru-forhandler med bruktbiler, verksted for alle merker, EU-kontroll, dekkhotell og bilvask.";

export const metadata: Metadata = {
  title: {
    default: "O.M. Grefstad – bil, verksted og vask på Løkken Verk og i Surnadal",
    template: "%s | O.M. Grefstad",
  },
  description,
  openGraph: {
    title: "O.M. Grefstad – bil, verksted og vask",
    description,
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Karla:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="btn btn-sm skip-link">
          Hopp til innhold
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileBar />
      </body>
    </html>
  );
}
