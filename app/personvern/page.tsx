import type { Metadata } from "next";
import { emails } from "@/data/site";

export const metadata: Metadata = { title: "Personvern" };

export default function Personvern() {
  return (
    <section className="page">
      <div className="wrap prose">
        <h1>Personvern</h1>
        <p>
          <b>Utkast.</b> Denne teksten må gjennomgås før siden publiseres.
        </p>
        <h2>Informasjonskapsler</h2>
        <p>Nettsiden bruker ikke informasjonskapsler til sporing eller markedsføring.</p>
        <h2>Henvendelser</h2>
        <p>
          Når du sender oss en melding, bruker vi navn, telefon og det du skriver bare til å svare deg. [Hvor lenge
          henvendelser lagres og hvem som behandler dem må fylles inn.]
        </p>
        <h2>Kontakt</h2>
        <p>
          O.M. Grefstad AS · <a href={emails.lokken.href}>{emails.lokken.label}</a>
        </p>
      </div>
    </section>
  );
}
