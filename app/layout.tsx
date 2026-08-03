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
      "Uavhengig redesignprototype for O.M. Grefstad – bilsalg, Opel og verkstedtjenester på Løkken Verk og i Surnadal.",
    openGraph: {
      title: "O.M. Grefstad | Din lokale bilforhandler og verksted",
      description: "Salg, service og bilhold på Løkken Verk og i Surnadal.",
      type: "website",
      locale: "nb_NO",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1732,
          height: 909,
          alt: "O.M. Grefstad – din lokale bilforhandler og verksted",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "O.M. Grefstad | Bilforhandler og verksted",
      description: "Salg, service og bilhold på Løkken Verk og i Surnadal.",
      images: [`${baseUrl}/og.png`],
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

