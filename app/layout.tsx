import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "localhost:3000";
  const protocol =
    headerList.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    title: "O.M. Grefstad | Bilforhandler og verksted",
    description:
      "Uavhengig redesignprototype for O.M. Grefstad – biler, Opel og lokalt verksted på Løkken Verk og i Surnadal.",
    openGraph: {
      title: "Dette er O.M. Grefstad på Løkken Verk",
      description:
        "Biler, Opel og lokalt verksted – stolt Opel-forhandler siden 1977.",
      type: "website",
      locale: "nb_NO",
      images: [
        {
          url: `${baseUrl}/og-v2.png`,
          width: 1536,
          height: 1024,
          alt: "O.M. Grefstad på Løkken Verk – stolt Opel-forhandler siden 1977",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Dette er O.M. Grefstad på Løkken Verk",
      description:
        "Biler, Opel og lokalt verksted – stolt Opel-forhandler siden 1977.",
      images: [`${baseUrl}/og-v2.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
