import Link from "next/link";
import { emails, links, phones } from "@/data/site";

const departments = [
  {
    name: "Løkken Verk",
    href: "/kontakt",
    address: "Løkkenveien [386/175], 7332 Løkken Verk",
    phone: phones.lokken,
    email: emails.lokken,
    hours: [
      ["Salg", "[åpningstid]"],
      ["Verksted", "[åpningstid]"],
      ["Bilvask", "Hver dag 07:30–15:00"],
    ],
  },
  {
    name: "Surnadal",
    href: "/surnadal",
    address: "Øravegen 4, 6650 Surnadal",
    phone: phones.surnadal,
    email: emails.surnadal,
    hours: [
      ["Salg", "[åpningstid]"],
      ["Verksted", "[åpningstid]"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span className="fbrand">O.M. Grefstad</span>
        <div className="deps">
          {departments.map((dep) => (
            <div key={dep.name} className="foot-dep">
              <h2>
                <Link href={dep.href}>{dep.name}</Link>
              </h2>
              <span>{dep.address}</span>
              <a className="foot-phone" href={dep.phone.href}>
                {dep.phone.label}
              </a>
              <a href={dep.email.href}>{dep.email.label}</a>
              <dl>
                {dep.hours.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <div className="links">
          <Link href="/om-oss">Om oss og historien</Link>
          <a href={links.opel} target="_blank" rel="noopener">Nye Opel</a>
          <Link href="/biler">Nye Subaru</Link>
          <Link href="/personvern">Personvern</Link>
          <a href={links.facebook} target="_blank" rel="noopener">Facebook</a>
        </div>
        <p className="demo">Demo av ny nettside. Bilder av biler er midlertidige eksempler.</p>
      </div>
    </footer>
  );
}
