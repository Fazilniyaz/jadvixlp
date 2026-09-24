import type { Metadata } from "next";
import type { CSSProperties } from "react";
import JxCta from "@/components/JxCta";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — Full-Service IT Company in the UK & India",
  description:
    "Jadvix is a full-service IT company with offices in Ruislip (UK) and Chennai (India). Our vision, foundations, journey and the leadership behind our web, app, ecommerce and digital marketing services.",
  alternates: { canonical: "/about" },
};

function Ic({ d, sw = 1.5 }: { d: string[]; sw?: number }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {d.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

const VISION = [
  "Empowering businesses with practical, honest tech guidance.",
  "Integrating design, development, marketing and security at scale.",
  "Fostering a culture of relentless digital curiosity through our Academy.",
];

const FOUNDATIONS = [
  { title: "Holistic Integration", body: "We orchestrate harmony between technology, design and business goals — not just features.", d: ["M12 2 2 7l10 5 10-5z", "M2 17l10 5 10-5", "M2 12l10 5 10-5"] },
  { title: "Mastery & Expertise", body: "Hands-on specialists delivering technical excellence without compromise on security.", d: ["M12 2l2.4 6.9L22 9l-5.6 4.5L18 21l-6-3.7L6 21l1.6-7.5L2 9l7.6-.1z"] },
  { title: "Impactful Partnership", body: "We align our success with your results, building long-term value at every touchpoint.", d: ["M8 12 5.5 9.5a3 3 0 0 1 4-4L12 8l2.5-2.5a3 3 0 0 1 4 4L16 12", "m7 13 4 4 6-6"] },
  { title: "Agility", body: "Rapid adaptation to market shifts while maintaining the stability you depend on.", d: ["M13 2 3 14h7l-1 8 10-12h-7z"] },
];

const JOURNEY = [
  { label: "01", title: "The Beginning — Chennai", body: "Jadvix started in India with a simple mission: make professional websites, apps and digital marketing accessible to growing businesses." },
  { label: "02", title: "UK Expansion — Ruislip", body: "We opened our UK office to serve local and international clients, operating as one team across two time zones." },
  { label: "03", title: "Academy & Products", body: "Jadvix Academy launched to train the next generation of talent, alongside our own product lab building tools like RotaPay." },
];

const TEAM = [
  { name: "Jachin Raja", role: "CEO & Founder", photo: "/team/jachin.jpg" },
  { name: "Negha Sharma", role: "Chief Marketing Officer", photo: "/team/nehasharma.jpg" },
  { name: "Elavarasi Manoharan", role: "Chief Technical Officer", photo: "/team/elavarasi.jpg" },
  { name: "Adv. Heavalin", role: "Legal Advisor", photo: "/team/heavalin.jpg" },
];

const art = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .jx-vision{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:72px;align-items:center}
        .jx-grid4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
        .jx-grid4.team{gap:22px}
        .jx-team-img img{transition:transform .6s var(--ease)}
        .jx-team-card:hover .jx-team-img img{transform:scale(1.04)}
        @media(max-width:900px){.jx-vision{grid-template-columns:1fr;gap:40px}.jx-grid4{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:560px){.jx-grid4{grid-template-columns:1fr}}
      `,
        }}
      />

      {/* HERO */}
      <section style={{ maxWidth: 980, margin: "0 auto", padding: "clamp(80px,12vh,140px) 24px clamp(72px,10vh,120px)", textAlign: "center" }}>
        <span className="jx-eyebrow jx-rise">Pioneering Digital Evolution</span>
        <h1 className="jx-display-xl jx-rise" style={{ ["--d" as string]: "80ms", margin: "24px 0 0", color: "var(--ink)" } as CSSProperties}>
          Bridging stability and <span className="jx-accent">innovation.</span>
        </h1>
        <p className="jx-body-lg jx-rise" style={{ ["--d" as string]: "200ms", maxWidth: 660, margin: "26px auto 0", color: "var(--ink-2)" } as CSSProperties}>
          Jadvix is a full-service IT company guiding businesses through digital transformation with bespoke strategic craftsmanship — from our offices in the UK and India.
        </p>
      </section>

      {/* VISION SPLIT */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="jx-wrap jx-section jx-vision">
          <Reveal>
            <div className="jx-navy jx-panel" style={{ aspectRatio: "4/3", boxShadow: "var(--shadow-glow)", color: "var(--brand)" }}>
              <div aria-hidden className="jx-glow" style={{ top: "-40%", right: "-30%" }} />
              <svg aria-hidden viewBox="0 0 400 300" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
                <g {...art}>
                  <circle cx="150" cy="140" r="86" strokeOpacity=".35" />
                  <circle cx="250" cy="140" r="86" strokeOpacity=".35" />
                  <circle cx="150" cy="140" r="5" fill="var(--brand)" />
                  <circle cx="250" cy="140" r="5" fill="var(--brand)" />
                  <path d="M150 140h100" strokeDasharray="3 7" />
                </g>
              </svg>
              <div style={{ position: "absolute", left: 20, bottom: 20, display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,.06)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 12, padding: "12px 16px" }}>
                <span className="font-display" style={{ fontWeight: 600, fontSize: 28, color: "#fff", lineHeight: 1 }}>2</span>
                <span className="jx-label" style={{ fontSize: 10.5, color: "var(--on-navy)", lineHeight: 1.35 }}>
                  Countries
                  <br />
                  One team
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="jx-display-lg" style={{ margin: "0 0 20px", color: "var(--ink)" }}>Our vision</h2>
            <p className="jx-body-lg" style={{ margin: "0 0 28px", color: "var(--ink-2)" }}>
              To be the definitive catalyst for digital growth — where businesses don&apos;t just keep up with technology, they lead with it. We turn technological complexity into strategic clarity.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {VISION.map((v) => (
                <div key={v} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, width: 26, height: 26, display: "grid", placeItems: "center", borderRadius: 999, background: "color-mix(in srgb,var(--brand) 14%,transparent)", color: "var(--accent-text)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 16.5, lineHeight: 1.55, color: "var(--ink)" }}>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDATIONS */}
      <section className="jx-wrap jx-section">
        <Reveal style={{ marginBottom: 52 }}>
          <span className="jx-eyebrow">Our Foundations</span>
          <h2 className="jx-display-lg" style={{ margin: "20px 0 0", color: "var(--ink)" }}>Four pillars behind every partnership.</h2>
        </Reveal>
        <div className="jx-grid4">
          {FOUNDATIONS.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <article className="jx-card jx-hover" style={{ height: "100%", padding: 30 }}>
                <div className="jx-icon-tile" style={{ marginBottom: 20 }}>
                  <Ic d={f.d} />
                </div>
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: 20, letterSpacing: "-.01em", margin: "0 0 8px", color: "var(--ink)" }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="jx-section" style={{ maxWidth: 920, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
          <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 className="jx-display-lg" style={{ margin: "0 0 14px", color: "var(--ink)" }}>Our journey</h2>
            <p className="jx-body-lg" style={{ margin: 0, color: "var(--ink-2)" }}>A story of steady, strategic growth.</p>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {JOURNEY.map((j, i) => (
              <Reveal key={j.label} delay={i * 80}>
                <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
                  <span className="font-display jx-num" style={{ flexShrink: 0, width: 56, height: 56, display: "grid", placeItems: "center", borderRadius: 999, background: i === 0 ? "var(--navy-900)" : "var(--surface)", border: "1px solid", borderColor: i === 0 ? "var(--navy-900)" : "var(--line)", color: i === 0 ? "#fff" : "var(--accent-text)", fontWeight: 600, fontSize: 19 }}>{j.label}</span>
                  <div className="jx-card jx-hover" style={{ padding: "26px 28px", flex: 1 }}>
                    <h3 className="font-display" style={{ fontWeight: 600, fontSize: 21, letterSpacing: "-.01em", margin: "0 0 8px", color: "var(--ink)" }}>{j.title}</h3>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>{j.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="jx-wrap jx-section">
        <Reveal style={{ marginBottom: 52 }}>
          <span className="jx-eyebrow">Leadership</span>
          <h2 className="jx-display-lg" style={{ margin: "20px 0 0", color: "var(--ink)" }}>The people behind Jadvix.</h2>
        </Reveal>
        <div className="jx-grid4 team">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article className="jx-card jx-hover jx-team-card" style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div className="jx-team-img" style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", background: "var(--surface-2)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: 22 }}>
                  <h3 className="font-display" style={{ fontWeight: 600, fontSize: 20, letterSpacing: "-.01em", margin: "0 0 6px", color: "var(--ink)" }}>{m.name}</h3>
                  <div style={{ fontSize: 14.5, fontWeight: 500, color: "var(--accent-text)" }}>{m.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <JxCta
        title="Ready to evolve?"
        body="Join the businesses across the UK and India that trust Jadvix with their digital growth."
        primaryLabel="Get a Free Project Quote"
        primaryHref="/contact"
        secondaryLabel="How Jadvix Works"
        secondaryHref="/ideas"
      />
    </div>
  );
}
