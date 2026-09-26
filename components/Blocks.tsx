import Link from "next/link";
import type { ReactNode } from "react";

/** Internal paths use Next's Link; tel:, mailto: and external URLs use a plain anchor. */
export function SmartLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a className={className} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}>
      {children}
    </a>
  );
}

export function WashIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.5c2.6 3.2 4.5 5.9 4.5 8.4a4.5 4.5 0 0 1-9 0c0-2.5 1.9-5.2 4.5-8.4z" />
      <path d="M10.2 12.6a1.9 1.9 0 0 0 1.8 1.6" />
      <path d="M19 4v3M17.5 5.5h3M5 15v2.5M3.75 16.25h2.5" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

type ServiceCardProps = {
  title: string;
  text: string;
  image?: string;
  icon?: ReactNode;
  action?: { label: string; href: string; primary?: boolean };
  status?: string;
  dark?: boolean;
};

export function ServiceCard({ title, text, image, icon, action, status, dark }: ServiceCardProps) {
  return (
    <article className={dark ? "svc dark" : "svc"} data-reveal>
      {image ? (
        <div className="svc-media">
          <img src={image} alt="" />
        </div>
      ) : (
        <div className="svc-media svc-icon">{icon}</div>
      )}
      <div className="svc-body">
        <h3>{title}</h3>
        <p>{text}</p>
        {action && (
          <>
            <SmartLink className="svc-link" href={action.href}>
              {action.label}
            </SmartLink>
            <SmartLink className={action.primary ? "btn btn-primary" : "btn"} href={action.href}>
              {action.label}
            </SmartLink>
          </>
        )}
        {status && <span className="dot">{status}</span>}
      </div>
    </article>
  );
}

function initials(name: string) {
  if (name.startsWith("[")) return "+";
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .filter((_, i, all) => i === 0 || i === all.length - 1)
    .join("");
}

type PersonProps = {
  name: string;
  role: string;
  phone?: { label: string; href: string };
  image?: string;
  extra?: boolean;
};

export function Person({ name, role, phone, image, extra }: PersonProps) {
  return (
    <div className={extra ? "person extra" : "person"} data-reveal>
      {image ? (
        <img className="person-photo" src={image} alt={name} />
      ) : (
        <div className="person-photo person-initials" aria-hidden="true">
          <span>{initials(name)}</span>
          <small>Foto kommer</small>
        </div>
      )}
      <strong>{name}</strong>
      <span>
        {role}
        {phone && (
          <>
            {" · "}
            <a href={phone.href}>{phone.label}</a>
          </>
        )}
      </span>
    </div>
  );
}
