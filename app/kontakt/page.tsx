import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { emails, links, phones } from "@/data/site";

export const metadata: Metadata = { title: "Kontakt og åpningstider" };

export default function Kontakt() {
  return (
    <section className="page">
      <div className="wrap">
        <h1>Kontakt og åpningstider</h1>
        <div className="deps-grid">
          <div className="dep">
            <h2>Løkken Verk</h2>
            <span>Løkkenveien [386/175], 7332 Løkken Verk</span>
            <a href={phones.lokken.href}>
              <b>{phones.lokken.label}</b>
            </a>
            <a href={emails.lokken.href}>{emails.lokken.label}</a>
            <dl>
              <dt>Salg</dt>
              <dd>[åpningstid]</dd>
              <dt>Verksted</dt>
              <dd>[åpningstid]</dd>
              <dt>Bilvask</dt>
              <dd>Hver dag 07:30–15:00</dd>
            </dl>
            <a className="btn dep-btn" href={links.mapsLokken} target="_blank" rel="noopener">
              Finn veien
            </a>
          </div>
          <div className="dep">
            <h2>Surnadal</h2>
            <span>Øravegen 4, 6650 Surnadal (ALTI-senteret)</span>
            <a href={phones.surnadal.href}>
              <b>{phones.surnadal.label}</b>
            </a>
            <a href={emails.surnadal.href}>{emails.surnadal.label}</a>
            <dl>
              <dt>Salg</dt>
              <dd>[åpningstid]</dd>
              <dt>Verksted</dt>
              <dd>[åpningstid]</dd>
            </dl>
            <a className="btn dep-btn" href={links.mapsSurnadal} target="_blank" rel="noopener">
              Finn veien
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
