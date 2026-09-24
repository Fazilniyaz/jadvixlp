import Link from "next/link";
import { SITE } from "@/lib/site";

const COLS = [
  {
    heading: "Solutions",
    links: [
      { label: "Web Design & Development", href: "/services" },
      { label: "Mobile App Development", href: "/services" },
      { label: "Digital Marketing & SEO", href: "/services" },
      { label: "IT Consultancy & Security", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How Jadvix Works", href: "/ideas" },
      { label: "About Us", href: "/about" },
      { label: "FAQs", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Jadvix Shop", href: "/products" },
      { label: "Jadvix Academy", href: "/products" },
      { label: "RotaPay", href: "/products" },
      { label: "PayRoto", href: "/products" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="jx-navy">
      <div className="jx-wrap jx-footer-grid" style={{ position: "relative", padding: "88px 24px 40px", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ marginBottom: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/jadvix-logo-light.svg" alt="Jadvix" style={{ height: 32, display: "block" }} />
          </div>
          <p style={{ maxWidth: 320, margin: "0 0 24px", fontSize: 15, lineHeight: 1.65, color: "var(--on-navy-2)" }}>
            Full-service IT company building scalable websites, apps and digital experiences across India and the UK.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, fontSize: 15 }}>
            <a href={`mailto:${SITE.email}`} className="jx-foot-link">{SITE.email}</a>
            <a href={SITE.offices.uk.phoneHref} className="jx-foot-link">{SITE.phoneUK}</a>
            <a href={SITE.offices.india.phoneHref} className="jx-foot-link">{SITE.phoneIN}</a>
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.heading}>
            <h2 className="jx-label" style={{ color: "var(--on-navy-2)", margin: "0 0 18px", fontFamily: "var(--font-label),system-ui,sans-serif" }}>{col.heading}</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, fontSize: 15 }}>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} className="jx-foot-link">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid var(--line-navy)" }}>
        <div className="jx-wrap" style={{ padding: "22px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 13.5, color: "var(--on-navy-2)" }}>
          <span>© {new Date().getFullYear()} Jadvix Ltd. Design. Develop. Promote. Secure.</span>
          <span>United Kingdom · India</span>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `.jx-foot-link{position:relative;padding:3px 0;color:rgba(234,239,246,.86);transition:color .25s var(--ease)}
        .jx-foot-link::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1.5px;border-radius:2px;background:var(--brand);transform:scaleX(0);transform-origin:left;transition:transform .35s var(--ease)}
        .jx-foot-link:hover{color:#fff}
        .jx-foot-link:hover::after{transform:scaleX(1)}
        @media(max-width:860px){.jx-footer-grid{grid-template-columns:1fr 1fr!important;gap:36px!important}}
        @media(max-width:520px){.jx-footer-grid{grid-template-columns:1fr!important}}`,
        }}
      />
    </footer>
  );
}
