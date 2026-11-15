import Link from "next/link";
import { SITE } from "@/lib/site";
import { ArrowR, Spark } from "@/components/site/ui";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact Us" },
];

const LINKS = [
  { href: "https://ropix.ai", label: "Ropix", ext: true },
  { href: "https://academy.jadvix.uk", label: "Jadvix Academy", ext: true },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQs" },
];

export default function Footer() {
  return (
    <footer className="t-dark t-deep foot">
      <div className="wrap">
        <div className="foot__grid">
          <div className="fcard" data-fade>
            <nav className="fnav" aria-label="Footer">
              {NAV.map((l) => (
                <Link key={l.href} href={l.href}>
                  <Spark s={16} />
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="fcard__foot">
              <span>{SITE.tagline}</span>
              <span>United Kingdom · India</span>
            </div>
          </div>

          <div className="fcard" data-fade data-delay="0.1">
            <div className="fcontact">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <div>
                <a href={SITE.offices.uk.phoneHref}>
                  <small>United Kingdom</small>
                  {SITE.phoneUK}
                </a>
                <a href={SITE.offices.india.phoneHref} style={{ marginTop: 14 }}>
                  <small>India</small>
                  {SITE.phoneIN}
                </a>
              </div>
              <address style={{ fontStyle: "normal" }}>
                {SITE.offices.uk.lines[0]}, {SITE.offices.uk.lines[1]},
                <br />
                {SITE.offices.uk.lines[2]}
              </address>
            </div>
          </div>

          <div className="fcard" data-fade data-delay="0.2">
            <div className="flinks">
              {LINKS.map((l) =>
                l.ext ? (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                    <ArrowR />
                  </a>
                ) : (
                  <Link key={l.href} href={l.href}>
                    {l.label}
                    <ArrowR />
                  </Link>
                )
              )}
            </div>
            <div className="fcard__foot" style={{ alignItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/jadvix-logo-light.svg" alt="Jadvix" className="foot__logo" />
              <span>
                © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
