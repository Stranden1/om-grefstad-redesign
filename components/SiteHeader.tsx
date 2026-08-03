import { dealership, navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#hovedinnhold">
        Hopp til innhold
      </a>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Løkken Verk · Surnadal</span>
          <a href={dealership.mainPhone.href}>
            Ring oss <strong>{dealership.mainPhone.label}</strong>
          </a>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="shell main-nav">
          <a className="wordmark" href="#top" aria-label="O.M. Grefstad – forsiden">
            <span>O.M.</span>
            <strong>GREFSTAD</strong>
          </a>

          <nav className="desktop-nav" aria-label="Hovedmeny">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-dark nav-cta" href="#kontakt">
            Bestill verksted
          </a>

          <details className="mobile-menu">
            <summary>Meny</summary>
            <nav aria-label="Mobilmeny">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a className="mobile-menu-call" href={dealership.mainPhone.href}>
                Ring {dealership.mainPhone.label}
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

