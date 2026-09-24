import type { Metadata } from "next";
import type { CSSProperties } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Project Quote (UK & India Offices)",
  description:
    "Get in touch with Jadvix for a free project quote. UK office: College House, Ruislip HA4 7AE (+44 7355 803386). India office: Mount Road, Saidapet, Chennai 600015 (+91 94896 44108). Email contact@jadvix.uk.",
  alternates: { canonical: "/contact" },
};

const F = "var(--font-display),system-ui,sans-serif";
const MONO = "var(--font-label),system-ui,sans-serif";

const chip: CSSProperties = { display: "inline-block", fontFamily: MONO, fontSize: 11.5, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, color: "var(--teal)", border: "1px solid var(--border)", padding: "7px 14px", borderRadius: "var(--radius-md)" };
const flagRow: CSSProperties = { display: "flex", alignItems: "center", gap: 9, fontFamily: MONO, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 600, marginBottom: 12 };

function GlobeIc() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}
function PhoneIc() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function MailIc() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .ct-uklink:hover{color:var(--sky)!important}
        .ct-inlink:hover{color:var(--teal)!important}
        .ct-channel:hover{transform:translateY(-6px);border-color:var(--accent)!important}
        @media(max-width:900px){.ct-grid{grid-template-columns:1fr!important}.ct-channels{grid-template-columns:1fr!important}}
      `,
        }}
      />

      {/* HERO */}
      <section style={{ margin: "0 auto", padding: "80px 24px 30px", maxWidth: 820 }}>
        <span style={chip}>Let&apos;s Connect</span>
        <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: "clamp(36px,4.6vw,58px)", lineHeight: 1.05, letterSpacing: "-.025em", margin: "22px 0 0", color: "var(--ink)", textWrap: "balance" } as CSSProperties}>
          Let&apos;s build the <span style={{ color: "var(--accent)" }}>future</span> together.
        </h1>
        <p style={{ maxWidth: 620, margin: "20px 0 0", fontSize: 18, lineHeight: 1.6, color: "var(--ink-2)" }}>
          Whether you need a new website, an app, an online store or ongoing digital marketing — our team in the UK and India is ready to help. Get a free project quote today.
        </p>
      </section>

      {/* FORM + OFFICES */}
      <section className="ct-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32, alignItems: "start" }}>
        <ContactForm />

        <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* UK */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-md)", background: "radial-gradient(120% 120% at 85% 0%,#0b3b5c,#00253e)", color: "#fff", padding: 30 }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 85% 15%,rgba(57,184,253,.28),transparent 55%)" }} aria-hidden />
            <div style={{ position: "relative" }}>
              <div style={{ ...flagRow, color: "var(--sky)" }}>
                <GlobeIc /> United Kingdom
              </div>
              <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 22, margin: "0 0 12px" }}>UK Office</h3>
              <address style={{ fontStyle: "normal", fontSize: 14.5, lineHeight: 1.7, color: "rgba(206,229,255,.82)", margin: "0 0 16px" }}>
                2nd Floor, College House
                <br />
                17 King Edwards Rd, Ruislip
                <br />
                United Kingdom, HA4 7AE
              </address>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="tel:+447355803386" className="ct-uklink" style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff", fontWeight: 600, fontSize: 14.5 }}>
                  <span style={{ width: 36, height: 36, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,.12)" }}><PhoneIc /></span>+44 7355 803386
                </a>
                <a href="mailto:contact@jadvix.uk" className="ct-uklink" style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff", fontWeight: 600, fontSize: 14.5 }}>
                  <span style={{ width: 36, height: 36, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,.12)" }}><MailIc /></span>contact@jadvix.uk
                </a>
              </div>
            </div>
          </div>
          {/* India */}
          <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)", padding: 30 }}>
            <div style={{ ...flagRow, color: "var(--teal)" }}>
              <GlobeIc /> India
            </div>
            <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 22, margin: "0 0 12px", color: "var(--ink)" }}>India Office</h3>
            <address style={{ fontStyle: "normal", fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)", margin: "0 0 16px" }}>
              No 19/35, 1st Floor, Mount Road
              <br />
              Little Mount, Saidapet, Chennai
              <br />
              Tamil Nadu, India, 600 015
            </address>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:+919489644108" className="ct-inlink" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--ink)", fontWeight: 600, fontSize: 14.5 }}>
                <span style={{ width: 36, height: 36, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "var(--surface-2)" }}><PhoneIc /></span>+91 94896 44108
              </a>
              <a href="mailto:contact@jadvix.uk" className="ct-inlink" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--ink)", fontWeight: 600, fontSize: 14.5 }}>
                <span style={{ width: 36, height: 36, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "var(--surface-2)" }}><MailIc /></span>contact@jadvix.uk
              </a>
            </div>
          </div>
        </aside>
      </section>

      {/* DIRECT CHANNELS */}
      <section style={{ background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(26px,3.2vw,38px)", letterSpacing: "-.02em", margin: "0 0 8px", color: "var(--ink)" }}>Prefer a direct line?</h2>
            <p style={{ margin: 0, fontSize: 16, color: "var(--ink-2)" }}>Reach the right team instantly.</p>
          </div>
          <div className="ct-channels" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {[
              { label: "Email Us", value: "contact@jadvix.uk", href: "mailto:contact@jadvix.uk", icon: <MailIc /> },
              { label: "Call UK", value: "+44 7355 803386", href: "tel:+447355803386", icon: <PhoneIc /> },
              { label: "Call India", value: "+91 94896 44108", href: "tel:+919489644108", icon: <PhoneIc /> },
            ].map((c) => (
              <a key={c.label} href={c.href} className="ct-channel" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", padding: 36, textAlign: "center", transition: "transform .3s,border-color .3s" }}>
                <span style={{ width: 60, height: 60, display: "grid", placeItems: "center", borderRadius: "50%", background: "color-mix(in srgb,var(--teal) 12%,transparent)", color: "var(--teal)" }}>{c.icon}</span>
                <span style={{ fontWeight: 700, fontSize: 15, color: "var(--ink)" }}>{c.label}</span>
                <span style={{ fontSize: 14, color: "var(--ink-2)" }}>{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
