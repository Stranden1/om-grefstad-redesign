import type { Metadata } from "next";
import Link from "next/link";
import { Person, ServiceCard } from "@/components/Blocks";
import { emails, links, phones, surnadalPeople } from "@/data/site";

export const metadata: Metadata = { title: "Avdeling Surnadal" };

export default function Surnadal() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <span className="badge">Subaru i Surnadal siden 1987</span>
            <h1>Verksted og bilsalg i Surnadal.</h1>
            <p className="lead">
              Service og reparasjon på alle bilmerker, EU-kontroll, dekk og ruteskift. Vi selger Opel og Subaru, og har
              bruktbiler fra begge avdelingene.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={phones.surnadal.href}>
                Ring Surnadal · {phones.surnadal.label}
              </a>
              <small>Øravegen 4, på ALTI-senteret</small>
            </div>
          </div>
          <div className="ph hero-ph">[Bilde av avdelingen i Surnadal]</div>
        </div>
      </section>

      <section className="section" aria-labelledby="h-surn-tj">
        <div className="wrap">
          <h2 id="h-surn-tj">Dette gjør vi i Surnadal</h2>
          <div className="services">
            <ServiceCard
              title="Verksted og EU-kontroll"
              text="Autorisert verksted for alle bilmerker."
              image="/images/verksted.jpg"
              action={{ label: "Ring verkstedet", href: phones.surnadal.href, primary: true }}
            />
            <ServiceCard
              title="Dekk og ruteskift"
              text="Salg av dekk, og vi skifter ruter på alle bilmodeller."
              image="/images/opel-grill.jpg"
              action={{ label: "Ring for time", href: phones.surnadal.href }}
            />
            <ServiceCard
              title="Deler"
              text="Delelager for Subaru [og Opel – avklares], og deler til andre merker på kort tid."
              image="/images/mokka-hvit-bak.jpg"
              action={{ label: "Send e-post", href: emails.surnadal.href }}
            />
            <ServiceCard
              title="Kjøpe bil"
              text="Nye Opel og Subaru, og bruktbiler."
              image="/images/mokka-gronn.jpg"
              action={{ label: "Se biler til salgs", href: "/biler", primary: true }}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="h-surn-folk">
        <div className="wrap">
          <h2 id="h-surn-folk">Folkene i Surnadal</h2>
          <div className="people surn-people">
            {surnadalPeople.map((p) => (
              <Person key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap deps-grid">
          <div className="dep">
            <h2>Finn oss</h2>
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
          <div className="dep">
            <h2>Avdeling Løkken Verk</h2>
            <p>Salg, verksted, karosseri og lakk, dekkhotell og bilvask.</p>
            <a href={phones.lokken.href}>
              <b>{phones.lokken.label}</b>
            </a>
            <Link className="btn dep-btn" href="/">
              Gå til Løkken Verk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
