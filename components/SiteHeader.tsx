"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { links, navigation, phones } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const phone = pathname === "/surnadal" ? phones.surnadal : phones.lokken;
  const phoneName = pathname === "/surnadal" ? "Surnadal" : "Løkken Verk";

  return (
    <header className="top">
      <div className="wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          O.M. Grefstad
        </Link>
        <nav className="nav" aria-label="Hovedmeny">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="top-actions">
          <a className="phone-link" href={phones.lokken.href}>
            {phones.lokken.label}
          </a>
          <a className="btn btn-primary book-top" href={links.booking} target="_blank" rel="noopener">
            Bestill verkstedtime
          </a>
          <a className="btn btn-primary btn-sm ring-top" href={phone.href} aria-label={`Ring ${phoneName} på ${phone.label}`}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
            </svg>
            Ring
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mmenu"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      <nav id="mmenu" className={open ? "mobile-menu open" : "mobile-menu"} aria-label="Meny">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.menuLabel}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function MobileBar() {
  const pathname = usePathname();
  const phone = pathname === "/surnadal" ? phones.surnadal : phones.lokken;

  return (
    <div className="bar">
      <a className="btn" href={phone.href}>
        Ring oss
      </a>
      <a className="btn btn-primary" href={links.booking} target="_blank" rel="noopener">
        Bestill time
      </a>
    </div>
  );
}
