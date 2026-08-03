import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VehicleCard } from "@/components/VehicleCard";
import { dealership, history, sampleVehicles, services } from "@/data/site";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const lokken = dealership.locations[0];

  return (
    <>
      <SiteHeader />
      <main id="hovedinnhold">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Bilforhandler · Verksted · Siden 1936</p>
            <h1>Din lokale bilforhandler og verksted</h1>
            <p className="hero-lead">
              Salg, service og bilhold på Løkken Verk og i Surnadal.
            </p>
            <div className="button-row">
              <a
                className="button button-yellow"
                href={dealership.links.usedCars}
                target="_blank"
                rel="noreferrer"
              >
                Se biler til salgs <Arrow />
              </a>
              <a className="button button-outline-light" href="#kontakt">
                Bestill verksted
              </a>
            </div>
            <div className="hero-trust" aria-label="Nøkkelfakta">
              <span>
                <strong>1936</strong> på Løkken Verk
              </span>
              <span>
                <strong>1977</strong> Opel-forhandler
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/images/opel-02.jpg"
              alt="Hvit Opel på en mørk, norsk skogsvei"
              fetchPriority="high"
              decoding="async"
            />
            <div className="photo-note">Prototypefoto · erstattes med lokalt materiell</div>
          </div>
        </section>

        <section className="intent-band" aria-label="Snarveier">
          <a href={dealership.links.usedCars} target="_blank" rel="noreferrer">
            <span>01</span>
            <strong>Se biler til salgs</strong>
            <Arrow />
          </a>
          <a href="#opel">
            <span>02</span>
            <strong>Utforsk nye Opel</strong>
            <Arrow />
          </a>
          <a href="#kontakt">
            <span>03</span>
            <strong>Bestill verksted</strong>
            <Arrow />
          </a>
        </section>

        <section className="section shell" id="om-oss">
          <div className="heritage-grid">
            <div className="heritage-copy">
              <p className="eyebrow eyebrow-dark">En lang Opel-historie</p>
              <p className="heritage-year">’77</p>
              <h2>Stolt Opel-forhandler siden 1977</h2>
              <p>
                Opel har vært en del av O.M. Grefstad siden 1. desember 1977.
                For oss handler det om mer enn et merke – det er kunnskap,
                kontinuitet og et lokalt forhold som har vart i flere tiår.
              </p>
              <a href="#opel" className="text-link">
                Opplev Opel hos oss <Arrow />
              </a>
            </div>
            <div className="heritage-image">
              <img
                src="/images/opel-01.jpg"
                alt="Nærbilde av Opel-emblem i solnedgang"
                loading="lazy"
                decoding="async"
              />
              <div className="heritage-stamp">
                <span>Opel hos</span>
                <strong>O.M. Grefstad</strong>
                <small>Løkken Verk · Surnadal</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-cars" id="biler">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-dark">Biler på lager</p>
                <h2>Finn bilen som passer deg</h2>
              </div>
              <div>
                <p>
                  Et ryddigere vindu mot bruktbillageret. Lagerdata kan kobles
                  til dagens eksterne løsning i neste fase.
                </p>
                <a
                  className="text-link"
                  href={dealership.links.usedCars}
                  target="_blank"
                  rel="noreferrer"
                >
                  Se alle bruktbiler <Arrow />
                </a>
              </div>
            </div>
            <div className="vehicle-grid">
              {sampleVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.model} vehicle={vehicle} />
              ))}
            </div>
            <p className="demo-disclaimer">
              Bilene over er tydelig merket eksempelinnhold og representerer
              ikke dagens faktiske lager, priser eller tilgjengelighet.
            </p>
          </div>
        </section>

        <section className="opel-section" id="opel">
          <div className="shell opel-grid">
            <div className="opel-copy">
              <p className="eyebrow">Nye Opel</p>
              <h2>Tysk biltradisjon. Lokal oppfølging.</h2>
              <p>
                Utforsk Opels personbiler, bygg bilen du ønsker og ta neste
                steg sammen med en forhandler som kjenner både merket og veiene
                her hjemme.
              </p>
              <div className="opel-links">
                <a href={dealership.links.opelModels} target="_blank" rel="noreferrer">
                  Se Opel-modeller <Arrow />
                </a>
                <a href={dealership.links.opelBuilder} target="_blank" rel="noreferrer">
                  Bygg din Opel <Arrow />
                </a>
                <a href={dealership.links.opelCampaigns} target="_blank" rel="noreferrer">
                  Se kampanjer <Arrow />
                </a>
                <a href={dealership.links.opelTestDrive} target="_blank" rel="noreferrer">
                  Bestill prøvekjøring <Arrow />
                </a>
              </div>
            </div>
            <div className="opel-gallery">
              <div className="opel-image-main">
                <img
                  src="/images/opel-05.jpg"
                  alt="Grønn Opel Mokka på veien"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="opel-image-detail">
                <img
                  src="/images/opel-03.jpg"
                  alt="Detalj av bakparten på en Opel Mokka"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="opel-gallery-caption">Illustrasjonsfoto fra Unsplash</p>
            </div>
          </div>
        </section>

        <section className="section shell" id="tjenester">
          <div className="services-layout">
            <div className="services-intro">
              <p className="eyebrow eyebrow-dark">Alt til bilen</p>
              <h2>Ett sted gjennom hele bilholdet</h2>
              <p>
                Fra bilen du kjøper til dekkene du lagrer og servicen som
                holder deg på veien.
              </p>
              <a className="button button-dark" href="#kontakt">
                Send en henvendelse
              </a>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <article className="service-row" key={service.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workshop-section" id="verksted">
          <div className="workshop-image">
            <img
              src="/images/workshop.jpg"
              alt="Mekaniker som arbeider i motorrommet på en bil"
              loading="lazy"
              decoding="async"
            />
            <span>Verksted · service · PKK</span>
          </div>
          <div className="workshop-copy">
            <p className="eyebrow eyebrow-dark">Trygt bilhold</p>
            <h2>Verksted du kan stole på.</h2>
            <p>
              Våre verksteder utfører service, vedlikehold og reparasjoner. Vi
              hjelper deg også med PKK, dekk og de andre små og store tingene
              bilen trenger gjennom året.
            </p>
            <ul>
              <li>Service og reparasjoner</li>
              <li>Periodisk kjøretøykontroll</li>
              <li>Dekk, deler og tilbehør</li>
            </ul>
            <div className="button-row">
              <a className="button button-dark" href="#kontakt">
                Bestill verksted
              </a>
              <a href={dealership.mainPhone.href} className="text-link">
                Ring {dealership.mainPhone.label}
              </a>
            </div>
          </div>
        </section>

        <section className="history-section" aria-labelledby="history-title">
          <div className="shell">
            <div className="history-heading">
              <p className="eyebrow eyebrow-dark">Lokalt siden 1936</p>
              <h2 id="history-title">Nitti år med folk, biler og fagkunnskap</h2>
            </div>
            <div className="timeline">
              {history.map((item) => (
                <article key={item.year}>
                  <strong>{item.year}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell locations-section" id="kontakt">
          <div className="section-heading locations-heading">
            <div>
              <p className="eyebrow eyebrow-dark">Finn oss</p>
              <h2>To avdelinger. Samme lokale nærhet.</h2>
            </div>
            <p>
              Kontakt avdelingen som passer deg. Oppdaterte åpningstider bør
              bekreftes mot forhandleren før produksjonslansering.
            </p>
          </div>
          <div className="locations-grid">
            {dealership.locations.map((location) => (
              <article className="location" key={location.id}>
                <div className="location-number">
                  {location.id === "lokken" ? "01" : "02"}
                </div>
                <h3>{location.name}</h3>
                <address>{location.address}</address>
                <div className="location-contact">
                  <a href={location.phone.href}>{location.phone.label}</a>
                  <a href={location.email.href}>{location.email.label}</a>
                </div>
                <div className="location-actions">
                  <a href={location.directions} target="_blank" rel="noreferrer">
                    Få veibeskrivelse <Arrow />
                  </a>
                  <a href={location.email.href}>Send e-post <Arrow /></a>
                </div>
                <p className="location-note">{location.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-band" aria-label="Kontakt verksted eller salg">
          <div className="shell contact-band-grid">
            <div>
              <p className="eyebrow eyebrow-dark">Klar for neste steg?</p>
              <h2>Vi hjelper deg videre.</h2>
            </div>
            <a href={dealership.mainPhone.href}>
              <span>Ring oss</span>
              <strong>{dealership.mainPhone.label}</strong>
              <Arrow />
            </a>
            <a href={dealership.mainEmail.href}>
              <span>Send en henvendelse</span>
              <strong>Kontakt salg eller verksted</strong>
              <Arrow />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />

      <nav className="mobile-actions" aria-label="Hurtigvalg">
        <a href={dealership.mainPhone.href}>Ring</a>
        <a href={dealership.links.usedCars} target="_blank" rel="noreferrer">Biler</a>
        <a href="#kontakt">Verksted</a>
        <a href={lokken.directions} target="_blank" rel="noreferrer">Finn oss</a>
      </nav>
    </>
  );
}
