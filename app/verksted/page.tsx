import type { Metadata } from "next";
import { links, phones } from "@/data/site";

export const metadata: Metadata = { title: "Verksted og EU-kontroll" };

const services = [
  { title: "Service og reparasjon", text: "Alle merker, begge avdelinger." },
  { title: "EU-kontroll", text: "Periodisk kjøretøykontroll, begge avdelinger." },
  { title: "Dekk og dekkhotell", text: "Dekkskift, salg av dekk og lagring." },
  { title: "Karosseri og lakk", text: "Skadereparasjon og lakkering på Løkken Verk." },
  { title: "Deler og ruteskift", text: "Delelager, og vi skaffer deler til andre merker på kort tid." },
];

export default function Verksted() {
  return (
    <section className="page">
      <div className="wrap">
        <h1>Verksted og EU-kontroll</h1>
        <p className="intro">Vi reparerer og tar service på alle bilmerker, både på Løkken Verk og i Surnadal.</p>
        <div className="deps-grid">
          {services.map((s) => (
            <div key={s.title} className="dep">
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </div>
          ))}
          <div className="dep">
            <h2>Bilvask</h2>
            <p className="dot">Løkken Verk, hver dag 07:30–15:00</p>
          </div>
        </div>
        <div className="band band-spaced">
          <div>
            <h2>Bestill time</h2>
            <p>På nett, eller ring verkstedet direkte.</p>
          </div>
          <div className="btns">
            <a className="btn btn-primary" href={links.booking} target="_blank" rel="noopener">
              Bestill verkstedtime
            </a>
            <a className="btn btn-ghost" href={phones.lokken.href}>
              Ring Løkken Verk
            </a>
            <a className="btn btn-ghost" href={phones.surnadal.href}>
              Ring Surnadal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
