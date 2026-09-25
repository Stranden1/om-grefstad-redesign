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

type ServiceCardProps = {
  title: string;
  text: string;
  image?: string;
  placeholder?: string;
  action?: { label: string; href: string; primary?: boolean };
  status?: string;
  dark?: boolean;
};

export function ServiceCard({ title, text, image, placeholder, action, status, dark }: ServiceCardProps) {
  return (
    <article className={dark ? "svc dark" : "svc"}>
      {image ? <img src={image} alt="" /> : <div className="ph">{placeholder}</div>}
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

type PersonProps = { name: string; role: string; phone?: { label: string; href: string }; extra?: boolean };

export function Person({ name, role, phone, extra }: PersonProps) {
  return (
    <div className={extra ? "person extra" : "person"}>
      <div className="ph">[Portrett]</div>
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
