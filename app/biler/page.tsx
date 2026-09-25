import type { Metadata } from "next";
import Link from "next/link";
import { links, phones } from "@/data/site";

export const metadata: Metadata = { title: "Biler til salgs" };

export default function Biler() {
  return (
    <section className="page">
      <div className="wrap">
        <h1>Biler til salgs</h1>
        <p className="intro">
          Alle bruktbilene våre ligger på FINN, der du kan søke, filtrere og se alle bilder. Nye Opel og Subaru kan du se
          og prøvekjøre hos oss.
        </p>
        <div className="deps-grid">
          <div className="dep">
            <h2>Bruktbiler</h2>
            <p>Oppdateres fortløpende på FINN.</p>
            <a className="btn btn-primary dep-btn" href={links.finn} target="_blank" rel="noopener">
              Se bruktbilene på FINN
            </a>
          </div>
          <div className="dep">
            <h2>Nye Opel</h2>
            <p>Modeller, kampanjer og prøvekjøring.</p>
            <a className="btn dep-btn" href={links.opel} target="_blank" rel="noopener">
              Se Opel-modellene
            </a>
          </div>
          <div className="dep">
            <h2>Nye Subaru</h2>
            <p>[Lenke til fungerende Subaru-side må avklares]</p>
            <a className="btn dep-btn" href={phones.lokken.href}>
              Ring oss om Subaru
            </a>
          </div>
          <div className="dep">
            <h2>Innbytte</h2>
            <p>Har du en bil du vil bytte inn? Ring eller send oss en melding, så tar vi en prat.</p>
            <Link className="btn dep-btn" href="/kontakt">
              Kontakt oss
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
