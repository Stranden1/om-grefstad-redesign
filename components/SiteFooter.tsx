import { dealership, navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <a className="wordmark wordmark-light" href="#top">
            <span>O.M.</span>
            <strong>GREFSTAD</strong>
          </a>
          <p className="footer-intro">
            Lokal bilforhandler og verksted på Løkken Verk og i Surnadal.
          </p>
        </div>
        <div>
          <p className="footer-label">Navigasjon</p>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        {dealership.locations.map((location) => (
          <div key={location.id}>
            <p className="footer-label">{location.name}</p>
            <p>{location.address}</p>
            <a href={location.phone.href}>{location.phone.label}</a>
            <a href={location.email.href}>{location.email.label}</a>
          </div>
        ))}
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {dealership.name}</span>
        <span>Uavhengig redesignprototype · Ikke produksjonsnettsted</span>
        <a href="#top">Til toppen ↑</a>
      </div>
    </footer>
  );
}

