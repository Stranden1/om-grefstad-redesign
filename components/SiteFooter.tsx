import Link from "next/link";
import { emails, links, phones } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span className="fbrand">O.M. Grefstad</span>
        <div className="deps">
          <div>
            <strong>Løkken Verk</strong>
            <span>Løkkenveien [386/175]</span>
            <br />
            <a href={phones.lokken.href}>{phones.lokken.label}</a>
            <br />
            <span>Man–fre [åpningstid]</span>
          </div>
          <div>
            <strong>
              <Link href="/surnadal">Surnadal</Link>
            </strong>
            <span>Øravegen 4</span>
            <br />
            <a href={phones.surnadal.href}>{phones.surnadal.label}</a>
            <br />
            <span>Man–fre [åpningstid]</span>
          </div>
        </div>
        <div className="links">
          <Link href="/om-oss">Om oss og historien</Link>
          <a href={links.opel} target="_blank" rel="noopener">Nye Opel</a>
          <Link href="/biler">Nye Subaru</Link>
          <Link href="/personvern">Personvern</Link>
          <a href={links.facebook} target="_blank" rel="noopener">Facebook</a>
          <a href={emails.lokken.href}>{emails.lokken.label}</a>
        </div>
        <p className="demo">Demo av ny nettside. Bilder av biler er midlertidige eksempler.</p>
      </div>
    </footer>
  );
}
