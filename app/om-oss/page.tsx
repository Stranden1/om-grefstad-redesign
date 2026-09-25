import type { Metadata } from "next";
import { Person } from "@/components/Blocks";
import { history, people } from "@/data/site";

export const metadata: Metadata = { title: "Om oss og historien" };

export default function OmOss() {
  return (
    <section className="page">
      <div className="wrap">
        <h1>Snart 90 år på Løkken Verk</h1>
        <p className="intro">
          O.M. Grefstad startet med bensinstasjon og sykkelverksted i 1936. I dag er vi Opel- og Subaru-forhandler med
          verksted for alle merker, og avdeling også i Surnadal – fortsatt en familiebedrift.
        </p>
        <img className="building" src="/images/bygget-lokken.jpg" alt="O.M. Grefstad sitt bygg på Løkken Verk" />
        <p className="note">Midlertidig bilde. Byttes med et nytt bilde av bygget.</p>
        <ol className="timeline">
          {history.map((h) => (
            <li key={h.year} className={"highlight" in h ? "hl" : undefined}>
              <b>{h.year}</b>
              <span>{h.text}</span>
            </li>
          ))}
        </ol>
        <h2 className="sub-h2">Folkene</h2>
        <div className="people people-auto">
          {people.map((p) => (
            <Person key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
