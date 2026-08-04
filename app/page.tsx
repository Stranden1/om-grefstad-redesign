import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VehicleCard } from "@/components/VehicleCard";
import { dealership, sampleVehicles } from "@/data/site";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

type PlaceholderProps = {
  className?: string;
  index: string;
  label: string;
  note: string;
};

function PhotoPlaceholder({ className = "", index, label, note }: PlaceholderProps) {
  return (
    <div
      className={`photo-placeholder ${className}`}
      role="img"
      aria-label={`Bildeplassholder: ${label}. ${note}`}
    >
      <span className="photo-index">Lokalt foto {index}</span>
      <div className="photo-marker" aria-hidden="true">+</div>
      <div className="photo-brief">
        <strong>{label}</strong>
        <span>{note}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const lokken = dealership.locations[0];

  return (
    <>
      <SiteHeader />
      <main id="hovedinnhold">
        <section className="v2-hero" id="top">
          <div className="v2-hero-copy">
            <p className="eyebrow">Løkken Verk · Bilforhandler siden 1969</p>
            <h1>Dette er O.M. Grefstad på Løkken Verk.</h1>
            <p className="v2-hero-lead">
              Biler, verksted og folk du blir kjent med — midt i lokalsamfunnet,
              med avdeling også i Surnadal.
            </p>
            <div className="button-row">
              <a className="button button-yellow" href={dealership.links.usedCars} target="_blank" rel="noreferrer">
                Se biler til salgs <Arrow />
              </a>
              <a className="button button-outline-light" href="#verksted">Bestill verksted</a>
            </div>
            <div className="v2-local-line">
              <span>O.M. Grefstad AS</span>
              <span>Løkken Verk · Surnadal</span>
              <span>Lokalt siden 1936</span>
            </div>
          </div>
          <PhotoPlaceholder
            className="hero-place"
            index="01"
            label="Forhandlerfasaden på Løkken Verk"
            note="Vis bygget, O.M. Grefstad-skiltet og stedet i naturlig dagslys."
          />
        </section>

        <section className="v2-inventory" id="biler">
          <div className="shell">
            <div className="v2-inventory-heading">
              <div>
                <p className="eyebrow eyebrow-dark">Biler på lager</p>
                <h2>Din neste bil kan stå her nå.</h2>
              </div>
              <div className="inventory-action">
                <p>Se hele utvalget av bruktbiler, eller ta kontakt — vi kjenner bilene og hjelper deg å finne den rette.</p>
                <a className="button button-dark" href={dealership.links.usedCars} target="_blank" rel="noreferrer">
                  Se alle biler til salgs <Arrow />
                </a>
              </div>
            </div>
            <div className="vehicle-grid">
              {sampleVehicles.map((vehicle, index) => (
                <VehicleCard key={vehicle.model} vehicle={vehicle} index={index + 1} />
              ))}
            </div>
            <p className="demo-disclaimer">Eksempelvisning. I en ferdig løsning hentes faktiske lagerbiler, priser og bilder direkte fra forhandlerens lager.</p>
          </div>
        </section>

        <section className="v2-heritage" id="opel">
          <div className="v2-heritage-signature">
            <p className="eyebrow eyebrow-dark">En del av identiteten vår</p>
            <span className="signature-year">1977</span>
            <h2>Stolt Opel-forhandler siden 1977</h2>
            <p>Opel er ikke bare et merke vi selger. Det er flere tiår med modellkunnskap, verkstederfaring og kunder som kommer tilbake.</p>
            <div className="signature-mark">
              <span>OPEL</span><i aria-hidden="true" /><strong>O.M. GREFSTAD</strong>
            </div>
          </div>
          <div className="v2-heritage-side">
            <PhotoPlaceholder
              className="showroom-place"
              index="02"
              label="Opel-showroom og lokal modellvisning"
              note="Fotografer en ekte Opel i utstillingen med ansatte eller lokale detaljer i bakgrunnen."
            />
            <div className="heritage-actions">
              <a href={dealership.links.opelModels} target="_blank" rel="noreferrer">Se Opel-modeller <Arrow /></a>
              <a href={dealership.links.opelTestDrive} target="_blank" rel="noreferrer">Bestill prøvekjøring <Arrow /></a>
              <a href={dealership.links.opelCampaigns} target="_blank" rel="noreferrer">Se aktuelle kampanjer <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="v2-workshop" id="verksted">
          <PhotoPlaceholder
            className="workshop-place"
            index="03"
            label="Verkstedet i arbeid"
            note="Vis egne mekanikere, ekte arbeidsmiljø og en kundebil på løftebukk."
          />
          <div className="v2-workshop-copy">
            <p className="eyebrow eyebrow-dark">Verksted for hverdagen</p>
            <h2>Fagfolk som kjenner bilen — og veiene her.</h2>
            <p>Service, reparasjoner, PKK, dekk og skade. Du får hjelp av et lokalt verksted med korte veier fra spørsmål til svar.</p>
            <div className="service-chips" aria-label="Verkstedtjenester">
              <span>Service og reparasjon</span><span>PKK</span><span>Dekkhotell</span><span>Karosseri og lakk</span>
            </div>
            <div className="button-row">
              <a className="button button-dark" href="#kontakt">Bestill verksted</a>
              <a className="text-link" href={dealership.mainPhone.href}>Ring {dealership.mainPhone.label}</a>
            </div>
          </div>
        </section>

        <section className="v2-trust" id="om-oss">
          <div className="shell v2-trust-grid">
            <div className="trust-copy">
              <p className="eyebrow eyebrow-dark">Folkene bak</p>
              <h2>Et bilhus består av folk du møter igjen.</h2>
              <p>På O.M. Grefstad skal du vite hvem du snakker med — enten du kjøper bil, leverer til service eller bare trenger et råd.</p>
              <div className="trust-facts">
                <span><strong>1936</strong> startet på Løkken Verk</span>
                <span><strong>2</strong> lokale avdelinger</span>
              </div>
            </div>
            <PhotoPlaceholder
              className="people-place"
              index="04"
              label="Ansatte hos O.M. Grefstad"
              note="Et uformelt gruppe- eller arbeidssituasjonsbilde med navn og roller i bildeteksten."
            />
          </div>
        </section>

        <section className="v2-contact" id="kontakt">
          <div className="shell">
            <div className="v2-contact-heading">
              <p className="eyebrow eyebrow-dark">Kom innom eller ring</p>
              <h2>To avdelinger. Samme lokale nærhet.</h2>
            </div>
            <div className="v2-locations">
              {dealership.locations.map((location) => (
                <article key={location.id}>
                  <span>{location.id === "lokken" ? "Hovedavdeling" : "Avdeling"}</span>
                  <h3>{location.name}</h3>
                  <address>{location.address}</address>
                  <a href={location.phone.href}>{location.phone.label}</a>
                  <a href={location.email.href}>{location.email.label}</a>
                  <a className="text-link" href={location.directions} target="_blank" rel="noreferrer">Finn veien <Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-band" aria-label="Kontakt verksted eller salg">
          <div className="shell contact-band-grid">
            <div><p className="eyebrow eyebrow-dark">Klar for neste steg?</p><h2>Vi hjelper deg videre.</h2></div>
            <a href={dealership.mainPhone.href}><span>Ring oss</span><strong>{dealership.mainPhone.label}</strong><Arrow /></a>
            <a href={dealership.mainEmail.href}><span>Send e-post</span><strong>Kontakt salg eller verksted</strong><Arrow /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <nav className="mobile-actions" aria-label="Hurtigvalg">
        <a href={dealership.mainPhone.href}>Ring</a>
        <a href={dealership.links.usedCars} target="_blank" rel="noreferrer">Biler</a>
        <a href="#verksted">Verksted</a>
        <a href={lokken.directions} target="_blank" rel="noreferrer">Finn oss</a>
      </nav>
    </>
  );
}
