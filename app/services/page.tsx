import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import JxCta from "@/components/JxCta";

export const metadata: Metadata = {
  title: "IT Services — Web Development, Apps, Ecommerce, SEO & Consultancy",
  description:
    "Explore Jadvix services: website design & development, mobile & web apps, ecommerce stores, custom software, digital marketing & SEO, graphic design, video editing and IT consultancy — delivered from the UK and India.",
  alternates: { canonical: "/services" },
};

const F = "var(--font-fraunces),Fraunces,serif";
const MONO = "var(--font-plex-mono),'IBM Plex Mono',monospace";

function Ic({ d, sw = 1.5, size = 22 }: { d: string[]; sw?: number; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {d.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

const SERVICES = [
  { title: "Website Design & Development", desc: "High-performance, responsive sites engineered for rankings and conversions.", d: ["M2 5h20v14H2z", "M2 9h20"] },
  { title: "Mobile & Web Apps", desc: "Scalable iOS, Android and web apps on modern cloud-native stacks.", d: ["M7 2h10v20H7z", "M11 18h2"] },
  { title: "Ecommerce Stores", desc: "Conversion-focused online stores built to launch and sell fast.", d: ["M6 6h15l-1.5 9h-12z", "M6 6 5 2H2", "M9 20h.01", "M18 20h.01"] },
  { title: "Custom Software", desc: "Bespoke platforms and internal tools tailored to your workflows.", d: ["M8 7 3 12l5 5", "M16 7l5 5-5 5", "M14 4l-4 16"] },
  { title: "Digital Marketing & SEO", desc: "Data-driven campaigns that grow visibility, traffic and leads.", d: ["m3 11 18-5v12L3 14v-3z", "M11.6 16.8a3 3 0 1 1-5.8-1.6"] },
  { title: "Graphic Design", desc: "Brand systems, identities and assets with agency-grade polish.", d: ["M12 22a10 10 0 1 1 0-20 8 8 0 0 1 0 16h-2a2 2 0 0 0 0 4z", "M8 9h.01", "M15 8h.01"] },
  { title: "Video Editing", desc: "Sharp, on-brand video content for web, social and campaigns.", d: ["M2 6h20v12H2z", "m10 9 5 3-5 3z"] },
  { title: "IT Consultancy", desc: "Honest, practical technology guidance from strategy to delivery.", d: ["M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z", "M9 20h6", "M10 22h4"] },
];

const WHY = [
  { title: "Bespoke Craftsmanship", body: "No templates, no shortcuts. Every solution is engineered from the ground up to fit your business." },
  { title: "Future-Proof Architecture", body: "Modern tech stacks and modular designs let your systems evolve as you grow." },
  { title: "Data-Driven Insights", body: "Strategy backed by hard numbers — we measure and optimise every touchpoint." },
];

const chip: CSSProperties = { display: "inline-block", fontFamily: MONO, fontSize: 11.5, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, color: "var(--teal)", border: "1px solid var(--border)", padding: "7px 14px", borderRadius: 4 };
const btnNavy: CSSProperties = { background: "var(--navy)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 4 };
const btnGhost: CSSProperties = { border: "1px solid var(--border)", color: "var(--ink)", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 4, background: "var(--surface)" };

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .svc-btn-navy:hover{background:var(--navy-2)!important}
        .svc-btn-ghost:hover{border-color:var(--accent)!important;color:var(--accent)!important}
        @media(max-width:900px){.svc-hero,.svc-why{grid-template-columns:1fr!important}.svc-pillars{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:560px){.svc-pillars{grid-template-columns:1fr!important}.svc-why-imgs{grid-template-columns:1fr!important}}
      `,
        }}
      />

      {/* HERO */}
      <section className="svc-hero" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 40px", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 56, alignItems: "center" }}>
        <div>
          <span style={chip}>Innovation Redefined</span>
          <h1 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(38px,5vw,66px)", lineHeight: 1.03, letterSpacing: "-.025em", margin: "24px 0 0", color: "var(--ink)", textWrap: "balance" } as CSSProperties}>
            Our expertise,
            <br />
            your <span style={{ fontStyle: "italic", color: "var(--accent)" }}>advantage.</span>
          </h1>
          <p style={{ maxWidth: 500, margin: "22px 0 0", fontSize: 18, lineHeight: 1.6, color: "var(--ink-2)" }}>
            End-to-end IT solutions — from your first website to enterprise software, and from launch-day marketing to long-term security. One accountable team across the UK and India.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <Link href="/contact" className="svc-btn-navy" style={btnNavy}>Start a Conversation</Link>
            <Link href="/products" className="svc-btn-ghost" style={btnGhost}>See Our Products</Link>
          </div>
        </div>
        <div style={{ position: "relative", perspective: 1400 }} aria-hidden>
          <div style={{ position: "relative", transform: "rotateY(-12deg) rotateX(6deg)", transformStyle: "preserve-3d", borderRadius: 4, overflow: "hidden", background: "radial-gradient(120% 120% at 100% 0%,#0b3b5c,#00253e)", boxShadow: "var(--shadow-lg)", border: "1px solid rgba(255,255,255,.14)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 25% 20%,rgba(57,184,253,.35),transparent 55%),radial-gradient(circle at 85% 85%,rgba(255,124,57,.25),transparent 50%)" }} />
            <div style={{ position: "relative", padding: 28 }}>
              <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(206,229,255,.6)" }}>Service Stack</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 16 }}>
                {[
                  ["Website Design & Development", "var(--sky)"],
                  ["Mobile & Web Apps", "var(--accent)"],
                  ["Digital Marketing & SEO", "var(--sky)"],
                  ["Cybersecurity & Cloud", "var(--accent)"],
                ].map(([label, dot]) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 4, padding: "13px 15px" }}>
                    <span style={{ width: 9, height: 9, borderRadius: 2, background: dot }} />
                    <span style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="jx-float" style={{ position: "absolute", bottom: -24, left: -18, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 5, padding: "18px 22px", boxShadow: "var(--shadow-lg)" }}>
            <div style={{ fontFamily: F, fontWeight: 600, fontSize: 24, color: "var(--ink)" }}>UK + India</div>
            <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginTop: 4 }}>One Delivery Team</div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ background: "var(--surface-2)", marginTop: 60 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "90px 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
            <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--teal)", fontWeight: 600 }}>Strategic Service Pillars</div>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", letterSpacing: "-.02em", margin: "14px 0 12px", color: "var(--ink)" }}>Everything you need, under one roof.</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>Eight disciplines, one accountable team — tailored to accelerate your digital growth.</p>
          </div>
          <div className="svc-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {SERVICES.map((s) => (
              <article key={s.title} className="jx-card" style={{ border: "1px solid var(--border)", borderRadius: 5, background: "var(--surface)", boxShadow: "var(--shadow)", padding: 26 }}>
                <div style={{ width: 48, height: 48, display: "grid", placeItems: "center", borderRadius: 4, background: "color-mix(in srgb,var(--teal) 12%,transparent)", color: "var(--teal)", marginBottom: 16 }}>
                  <Ic d={s.d} />
                </div>
                <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 18, margin: "0 0 7px", color: "var(--ink)" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "90px 24px" }}>
        <div className="svc-why" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", letterSpacing: "-.02em", margin: "0 0 18px", color: "var(--ink)" }}>Why choose Jadvix?</h2>
            <p style={{ margin: "0 0 32px", fontSize: 17, lineHeight: 1.6, color: "var(--ink-2)" }}>We don&apos;t just deliver projects; we build digital legacies. Our approach combines agency agility with enterprise-grade stability.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {WHY.map((w) => (
                <div key={w.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, width: 26, height: 26, display: "grid", placeItems: "center", borderRadius: 4, background: "color-mix(in srgb,var(--teal) 16%,transparent)", color: "var(--teal)", marginTop: 2 }}>
                    <Ic d={["M20 6 9 17l-5-5"]} sw={2.4} size={15} />
                  </span>
                  <div>
                    <h3 style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 700, color: "var(--ink)" }}>{w.title}</h3>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="svc-btn-navy" style={{ display: "inline-block", marginTop: 32, ...btnNavy }}>Start a Conversation</Link>
          </div>
          <div className="svc-why-imgs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} aria-hidden>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
              <div style={{ position: "relative", overflow: "hidden", height: 200, borderRadius: 5, background: "radial-gradient(120% 120% at 60% 40%,#0b3b5c,#00253e)", border: "1px solid var(--border)" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 40%,rgba(57,184,253,.35),transparent 60%)" }} />
                <svg style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 15l3-4 3 2 4-6" />
                </svg>
              </div>
              <div style={{ borderRadius: 5, background: "var(--accent)", color: "#fff", padding: 26 }}>
                <div style={{ fontFamily: F, fontWeight: 600, fontSize: 26 }}>2 Offices</div>
                <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", opacity: 0.85, marginTop: 6 }}>UK & India</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ borderRadius: 5, background: "var(--navy-2)", color: "#fff", padding: 26 }}>
                <div style={{ fontFamily: F, fontWeight: 600, fontSize: 26 }}>8+</div>
                <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", opacity: 0.85, marginTop: 6 }}>Disciplines</div>
              </div>
              <div style={{ position: "relative", overflow: "hidden", height: 250, borderRadius: 5, background: "radial-gradient(120% 120% at 40% 70%,#0b3b5c,#00253e)", border: "1px solid var(--border)" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 40% 70%,rgba(255,124,57,.28),transparent 55%)" }} />
                <svg style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="3" />
                  <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
                  <circle cx="18" cy="8" r="2.5" />
                  <path d="M22 21v-1a4 4 0 0 0-3-3.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JxCta
        title="Ready to evolve?"
        body="Let's discuss how our services can transform your business vision into a scalable digital reality."
        primaryLabel="Get a Free Project Quote"
        primaryHref="/contact"
        secondaryLabel="Book a Consultation"
        secondaryHref="/contact"
      />
    </div>
  );
}
