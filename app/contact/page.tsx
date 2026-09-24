import type { Metadata } from "next";
import type { CSSProperties } from "react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Project Quote (UK & India Offices)",
  description:
    "Get in touch with Jadvix for a free project quote. UK office: College House, Ruislip HA4 7AE (+44 7355 803386). India office: Mount Road, Saidapet, Chennai 600015 (+91 94896 44108). Email contact@jadvix.uk.",
  alternates: { canonical: "/contact" },
};

const flagRow: CSSProperties = { display: "flex", alignItems: "center", gap: 9, marginBottom: 14 };

function GlobeIc() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}
function PhoneIc() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function MailIc() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

const iconChip: CSSProperties = { width: 38, height: 38, display: "grid", placeItems: "center", borderRadius: 999, flexShrink: 0 };

export default function ContactPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .ct-grid{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:28px;align-items:start}
        .ct-channels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
        .ct-link{display:flex;align-items:center;gap:12px;font-weight:600;font-size:15.5px;transition:color .25s var(--ease)}
        .ct-uklink{color:#fff}
        .ct-uklink:hover{color:var(--brand)}
        .ct-inlink{color:var(--ink)}
        .ct-inlink:hover{color:var(--accent-text)}
        @media(max-width:900px){.ct-grid,.ct-channels{grid-template-columns:1fr}}
      `,
        }}
      />

      {/* HERO */}
      <section style={{ margin: "0 auto", padding: "clamp(72px,10vh,120px) 24px 40px", maxWidth: 900 }}>
        <span className="jx-eyebrow jx-rise">Let&apos;s Connect</span>
        <h1 className="jx-display-xl jx-rise" style={{ ["--d" as string]: "80ms", margin: "24px 0 0", color: "var(--ink)" } as CSSProperties}>
          Let&apos;s build the <span className="jx-accent">future</span> together.
        </h1>
        <p className="jx-body-lg jx-rise" style={{ ["--d" as string]: "200ms", maxWidth: 640, margin: "24px 0 0", color: "var(--ink-2)" } as CSSProperties}>
          Whether you need a new website, an app, an online store or ongoing digital marketing — our team in the UK and India is ready to help. Get a free project quote today.
        </p>
      </section>

      {/* FORM + OFFICES */}
      <section className="jx-wrap ct-grid" style={{ paddingTop: 40, paddingBottom: "var(--section-gap)" }}>
        <Reveal>
          <ContactForm />
        </Reveal>

        <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* UK */}
          <Reveal delay={80}>
            <div className="jx-navy" style={{ borderRadius: "var(--r-card)", padding: 30, boxShadow: "var(--shadow-glow)" }}>
              <div className="jx-glow" style={{ width: 420, height: 420, top: "-60%", right: "-40%" }} aria-hidden />
              <div style={{ position: "relative" }}>
                <div className="jx-label" style={{ ...flagRow, color: "var(--brand)" }}>
                  <GlobeIc /> United Kingdom
                </div>
                <h3 className="jx-headline" style={{ fontSize: 24, margin: "0 0 12px", color: "#fff" }}>UK Office</h3>
                <address style={{ fontStyle: "normal", fontSize: 15.5, lineHeight: 1.7, color: "var(--on-navy-2)", margin: "0 0 18px" }}>
                  2nd Floor, College House
                  <br />
                  17 King Edwards Rd, Ruislip
                  <br />
                  United Kingdom, HA4 7AE
                </address>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="tel:+447355803386" className="ct-link ct-uklink">
                    <span style={{ ...iconChip, border: "1px solid var(--line-navy)" }}><PhoneIc /></span>+44 7355 803386
                  </a>
                  <a href="mailto:contact@jadvix.uk" className="ct-link ct-uklink">
                    <span style={{ ...iconChip, border: "1px solid var(--line-navy)" }}><MailIc /></span>contact@jadvix.uk
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          {/* India */}
          <Reveal delay={160}>
            <div className="jx-card" style={{ padding: 30 }}>
              <div className="jx-label" style={{ ...flagRow, color: "var(--accent-text)" }}>
                <GlobeIc /> India
              </div>
              <h3 className="jx-headline" style={{ fontSize: 24, margin: "0 0 12px", color: "var(--ink)" }}>India Office</h3>
              <address style={{ fontStyle: "normal", fontSize: 15.5, lineHeight: 1.7, color: "var(--ink-2)", margin: "0 0 18px" }}>
                No 19/35, 1st Floor, Mount Road
                <br />
                Little Mount, Saidapet, Chennai
                <br />
                Tamil Nadu, India, 600 015
              </address>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="tel:+919489644108" className="ct-link ct-inlink">
                  <span style={{ ...iconChip, border: "1px solid var(--line)", color: "var(--accent-text)" }}><PhoneIc /></span>+91 94896 44108
                </a>
                <a href="mailto:contact@jadvix.uk" className="ct-link ct-inlink">
                  <span style={{ ...iconChip, border: "1px solid var(--line)", color: "var(--accent-text)" }}><MailIc /></span>contact@jadvix.uk
                </a>
              </div>
            </div>
          </Reveal>
        </aside>
      </section>

      {/* DIRECT CHANNELS */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="jx-wrap jx-section">
          <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 className="jx-display-lg" style={{ margin: "0 0 14px", color: "var(--ink)" }}>Prefer a direct line?</h2>
            <p className="jx-body-lg" style={{ margin: 0, color: "var(--ink-2)" }}>Reach the right team instantly.</p>
          </Reveal>
          <div className="ct-channels">
            {[
              { label: "Email Us", value: "contact@jadvix.uk", href: "mailto:contact@jadvix.uk", icon: <MailIc /> },
              { label: "Call UK", value: "+44 7355 803386", href: "tel:+447355803386", icon: <PhoneIc /> },
              { label: "Call India", value: "+91 94896 44108", href: "tel:+919489644108", icon: <PhoneIc /> },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <a href={c.href} className="jx-card jx-hover" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: 38, textAlign: "center" }}>
                  <span className="jx-icon-tile" style={{ width: 60, height: 60, borderRadius: 999 }}>{c.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 17, color: "var(--ink)" }}>{c.label}</span>
                  <span style={{ fontSize: 15.5, color: "var(--ink-2)" }}>{c.value}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
