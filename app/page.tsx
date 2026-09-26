import Link from "next/link";
import { PaintIcon, PartsIcon, Person, ServiceCard, WashIcon, WindshieldIcon } from "@/components/Blocks";
import { links, people, phones, sampleCars } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <p className="eyebrow">
              Familiebedrift på Løkken Verk siden 1936 · <Link href="/om-oss">Vår historie →</Link>
            </p>
            <h1>Vi hjelper deg med bilen din.</h1>
            <p className="lead">
              Enten du skal kjøpe ny eller brukt, trenger service og dekkskift, eller bare vil ha en ren bil.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={phones.lokken.href}>
                Ring oss · {phones.lokken.label}
              </a>
              <Link className="btn" href="/surnadal">
                Avdeling Surnadal →
              </Link>
            </div>
          </div>
          <img className="hero-img" src="/images/hero-corsa.jpg" alt="Hvit Opel Corsa parkert ved en skogsvei" />
        </div>
      </section>

      <section className="section" aria-labelledby="h-hjelp">
        <div className="wrap">
          <h2 id="h-hjelp">Hva kan vi hjelpe deg med?</h2>
          <div className="services">
            <ServiceCard
              title="Kjøpe bil"
              text="Bruktbiler, og nye Opel og Subaru."
              image="/images/mokka-gronn.jpg"
              action={{ label: "Se biler til salgs", href: "/biler", primary: true }}
            />
            <ServiceCard
              title="Verksted og EU-kontroll"
              text="Service og reparasjon på alle merker."
              image="/images/verksted.jpg"
              action={{ label: "Bestill verkstedtime", href: links.booking, primary: true }}
            />
            <ServiceCard
              title="Dekk og dekkhotell"
              text="Dekkskift, salg og lagring gjennom sesongene."
              image="/images/opel-grill.jpg"
              action={{ label: "Ring for dekkskift", href: phones.lokken.href }}
            />
            <ServiceCard
              title="Karosseri og lakk"
              text="Skadereparasjon og lakkering på Løkken Verk."
              icon={<PaintIcon />}
              action={{ label: "Ring om skade", href: phones.lokken.href }}
            />
            <ServiceCard
              title="Ruteskift"
              text="Vi skifter ruter på alle bilmodeller i Surnadal."
              icon={<WindshieldIcon />}
              action={{ label: "Ring Surnadal", href: phones.surnadal.href }}
            />
            <ServiceCard
              title="Deler"
              text="Delelager, og vi skaffer deler til andre merker på kort tid."
              icon={<PartsIcon />}
              action={{ label: "Ring om deler", href: phones.lokken.href }}
            />
            <ServiceCard
              title="Bilvask"
              text="Vaskehall på Løkken Verk."
              icon={<WashIcon />}
              status="Åpen hver dag 07:30–15:00"
            />
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="h-folk">
        <div className="wrap">
          <h2 id="h-folk">Folkene du møter</h2>
          <div className="people">
            {people.slice(0, 3).map((p) => (
              <Person key={p.name} name={p.name} role={p.role} />
            ))}
            <Person extra name="Jon Olav Holten" role="Bilselger, Surnadal" />
          </div>
          <Link className="more-link" href="/om-oss">
            Hele teamet og historien vår
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="band">
            <div>
              <h2>Trenger bilen service?</h2>
              <p>Bestill time på nett, eller ring verkstedet direkte.</p>
            </div>
            <div className="btns">
              <a className="btn btn-primary" href={links.booking} target="_blank" rel="noopener">
                Bestill verkstedtime
              </a>
              <a className="btn btn-ghost" href={phones.lokken.href}>
                Ring verkstedet
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section desk-only" aria-labelledby="h-salg">
        <div className="wrap">
          <div className="head-row">
            <h2 id="h-salg">Biler til salgs nå</h2>
            <a href={links.finn} target="_blank" rel="noopener">
              Se alle på FINN
            </a>
          </div>
          <div className="cars">
            {sampleCars.map((car) => (
              <a key={car.image} className="car" href={links.finn} target="_blank" rel="noopener">
                <div className="car-media">
                  <img src={car.image} alt={car.alt} />
                </div>
                <div>
                  <small>{car.meta}</small>
                  <strong className="name">{car.name}</strong>
                  <strong>{car.price}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section desk-only">
        <div className="wrap brands">
          <a className="brand-tile opel" href={links.opel} target="_blank" rel="noopener">
            <img src="/images/opel-grill.jpg" alt="" />
            <span className="since">Forhandler siden 1977</span>
            <span className="bname">Nye Opel</span>
            <span>Modeller, prøvekjøring og tilbud</span>
          </a>
          <Link className="brand-tile" href="/biler">
            <span className="since">Forhandler siden 2003</span>
            <span className="bname">Nye Subaru</span>
            <span>Firehjulstrekk for veiene her</span>
          </Link>
        </div>
      </section>
    </>
  );
}
