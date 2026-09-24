import type { Metadata } from "next";
import Link from "next/link";
import JxCta from "@/components/JxCta";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "IT Services — Web Development, Apps, Ecommerce, SEO & Consultancy",
  description:
    "Explore Jadvix services: website design & development, mobile & web apps, ecommerce stores, custom software, digital marketing & SEO, graphic design, video editing and IT consultancy — delivered from the UK and India.",
  alternates: { canonical: "/services" },
};

function Ic({ d, sw = 1.5, size = 22 }: { d: string[]; sw?: number; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

const art = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .svc-hero{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:56px;align-items:center}
        .svc-why{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:72px;align-items:center}
        .svc-pillars{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
        .svc-why-imgs{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        @media(max-width:900px){.svc-hero,.svc-why{grid-template-columns:1fr;gap:48px}.svc-pillars{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:560px){.svc-pillars{grid-template-columns:1fr}.svc-why-imgs{grid-template-columns:1fr}}
      `,
        }}
      />

      {/* HERO */}
      <section className="jx-wrap svc-hero" style={{ paddingTop: "clamp(72px,10vh,120px)", paddingBottom: "clamp(72px,10vh,120px)" }}>
        <div>
          <span className="jx-eyebrow jx-rise">Innovation Redefined</span>
          <h1 className="jx-display-xl jx-rise" style={{ ["--d" as string]: "80ms", margin: "24px 0 0", color: "var(--ink)" } as React.CSSProperties}>
            Our expertise,
            <br />
            your <span className="jx-accent">advantage.</span>
          </h1>
          <p className="jx-body-lg jx-rise" style={{ ["--d" as string]: "200ms", maxWidth: 520, margin: "24px 0 0", color: "var(--ink-2)" } as React.CSSProperties}>
            End-to-end IT solutions — from your first website to enterprise software, and from launch-day marketing to long-term security. One accountable team across the UK and India.
          </p>
          <div className="jx-rise" style={{ ["--d" as string]: "320ms", display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" } as React.CSSProperties}>
            <Link href="/contact" className="jx-btn jx-btn-spark">Start a Conversation</Link>
            <Link href="/products" className="jx-btn jx-btn-ghost">See Our Products</Link>
          </div>
        </div>
        <div className="jx-rise" style={{ ["--d" as string]: "240ms", position: "relative" } as React.CSSProperties} aria-hidden>
          <div className="jx-navy jx-panel" style={{ padding: "32px 32px 88px", boxShadow: "var(--shadow-glow)" }}>
            <div className="jx-glow" style={{ width: 420, height: 420, top: "-40%", right: "-30%" }} />
            <div style={{ position: "relative" }}>
              <div className="jx-label" style={{ color: "var(--on-navy-2)" }}>Service Stack</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 18 }}>
                {["Website Design & Development", "Mobile & Web Apps", "Digital Marketing & SEO", "Cybersecurity & Cloud"].map((label) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, border: "1px solid var(--line-navy)", borderRadius: 12, padding: "14px 16px" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brand)" }} />
                    <span style={{ color: "#fff", fontSize: 15, fontWeight: 500 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="jx-card" style={{ position: "absolute", bottom: -28, left: -20, padding: "18px 22px" }}>
            <div className="font-display" style={{ fontWeight: 600, fontSize: 24, color: "var(--ink)" }}>UK + India</div>
            <div className="jx-label" style={{ fontSize: 11.5, color: "var(--ink-2)", marginTop: 4 }}>One Delivery Team</div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="jx-wrap jx-section">
          <Reveal style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 56px" }}>
            <span className="jx-eyebrow" style={{ background: "var(--surface)" }}>Strategic Service Pillars</span>
            <h2 className="jx-display-lg" style={{ margin: "20px 0 16px", color: "var(--ink)" }}>Everything you need, under one roof.</h2>
            <p className="jx-body-lg" style={{ margin: 0, color: "var(--ink-2)" }}>Eight disciplines, one accountable team — tailored to accelerate your digital growth.</p>
          </Reveal>
          <div className="svc-pillars">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 70}>
                <article className="jx-card jx-hover" style={{ height: "100%", padding: 28 }}>
                  <div className="jx-icon-tile" style={{ marginBottom: 20 }}>
                    <Ic d={s.d} />
                  </div>
                  <h3 className="font-display" style={{ fontWeight: 600, fontSize: 19, letterSpacing: "-.01em", margin: "0 0 8px", color: "var(--ink)" }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="jx-wrap jx-section">
        <div className="svc-why">
          <Reveal>
            <h2 className="jx-display-lg" style={{ margin: "0 0 20px", color: "var(--ink)" }}>Why choose Jadvix?</h2>
            <p className="jx-body-lg" style={{ margin: "0 0 36px", color: "var(--ink-2)" }}>We don&apos;t just deliver projects; we build digital legacies. Our approach combines agency agility with enterprise-grade stability.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {WHY.map((w) => (
                <div key={w.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, width: 28, height: 28, display: "grid", placeItems: "center", borderRadius: 999, background: "color-mix(in srgb,var(--brand) 14%,transparent)", color: "var(--accent-text)", marginTop: 1 }}>
                    <Ic d={["M20 6 9 17l-5-5"]} sw={2} size={14} />
                  </span>
                  <div>
                    <h3 style={{ margin: "0 0 4px", fontFamily: "var(--font-body),system-ui,sans-serif", fontSize: 17, fontWeight: 700, color: "var(--ink)" }}>{w.title}</h3>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="jx-btn jx-btn-primary" style={{ marginTop: 36 }}>Start a Conversation</Link>
          </Reveal>
          <div className="svc-why-imgs" aria-hidden>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
              <Reveal>
                <div className="jx-art" style={{ height: 200, borderRadius: "var(--r-card)" }}>
                  <svg viewBox="0 0 200 200" width="100%" height="100%">
                    <g {...art}>
                      <path d="M60 60v80h80" strokeOpacity=".5" />
                      <path d="M76 120l20-26 20 12 24-34" />
                      <circle cx="140" cy="72" r="4" />
                    </g>
                  </svg>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="jx-card" style={{ padding: 26 }}>
                  <div className="font-display jx-num" style={{ fontWeight: 600, fontSize: 28, color: "var(--ink)" }}>2 Offices</div>
                  <div className="jx-label" style={{ fontSize: 11.5, color: "var(--ink-2)", marginTop: 6 }}>UK & India</div>
                </div>
              </Reveal>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Reveal delay={60}>
                <div className="jx-card" style={{ padding: 26 }}>
                  <div className="font-display jx-num" style={{ fontWeight: 600, fontSize: 28, color: "var(--ink)" }}>8+</div>
                  <div className="jx-label" style={{ fontSize: 11.5, color: "var(--ink-2)", marginTop: 6 }}>Disciplines</div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="jx-art" style={{ height: 250, borderRadius: "var(--r-card)" }}>
                  <svg viewBox="0 0 200 250" width="100%" height="100%">
                    <g {...art}>
                      <circle cx="84" cy="104" r="16" />
                      <path d="M52 168v-8a24 24 0 0 1 24-24h16a24 24 0 0 1 24 24v8" />
                      <circle cx="132" cy="110" r="12" strokeOpacity=".55" />
                      <path d="M150 168v-4a18 18 0 0 0-12-17" strokeOpacity=".55" />
                    </g>
                  </svg>
                </div>
              </Reveal>
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
