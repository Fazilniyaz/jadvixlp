import Link from "next/link";
import { SITE } from "@/lib/site";

const MONO = "var(--font-label),system-ui,sans-serif";

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
    <footer style={{ background: "var(--navy)", color: "#fff" }}>
      <div className="jx-footer-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 24px 32px", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ marginBottom: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/jadvix-logo-light.svg" alt="Jadvix" style={{ height: 32, display: "block" }} />
          </div>
          <p style={{ maxWidth: 300, margin: "0 0 20px", fontSize: 14.5, lineHeight: 1.6, color: "rgba(206,229,255,.72)" }}>
            Full-service IT company building scalable websites, apps and digital experiences across India and the UK.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: MONO, fontSize: 12.5 }}>
            <a href={`mailto:${SITE.email}`} className="jx-foot-link" style={{ color: "rgba(206,229,255,.82)" }}>{SITE.email}</a>
            <a href={SITE.offices.uk.phoneHref} className="jx-foot-link" style={{ color: "rgba(206,229,255,.82)" }}>{SITE.phoneUK}</a>
            <a href={SITE.offices.india.phoneHref} className="jx-foot-link" style={{ color: "rgba(206,229,255,.82)" }}>{SITE.phoneIN}</a>
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.heading}>
            <h2 style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(206,229,255,.55)", margin: "0 0 16px", fontWeight: 600 }}>{col.heading}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14 }}>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} className="jx-foot-link" style={{ color: "rgba(255,255,255,.85)" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "22px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: MONO, fontSize: 11.5, letterSpacing: ".04em", color: "rgba(206,229,255,.6)" }}>
          <span>© {new Date().getFullYear()} Jadvix Ltd. Design. Develop. Promote. Secure.</span>
          <span>United Kingdom · India</span>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `.jx-foot-link:hover{color:var(--accent)!important}
        @media(max-width:860px){.jx-footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important}}
        @media(max-width:520px){.jx-footer-grid{grid-template-columns:1fr!important}}`,
        }}
      />
    </footer>
  );
}
