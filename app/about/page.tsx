import type { Metadata } from "next";
import type { CSSProperties } from "react";
import JxCta from "@/components/JxCta";

export const metadata: Metadata = {
  title: "About Us — Full-Service IT Company in the UK & India",
  description:
    "Jadvix is a full-service IT company with offices in Ruislip (UK) and Chennai (India). Our vision, foundations, journey and the leadership behind our web, app, ecommerce and digital marketing services.",
  alternates: { canonical: "/about" },
};

const F = "var(--font-display),system-ui,sans-serif";
const MONO = "var(--font-label),system-ui,sans-serif";

function Ic({ d, sw = 1.5 }: { d: string[]; sw?: number }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
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
  { label: "01", bg: "var(--navy)", title: "The Beginning — Chennai", body: "Jadvix started in India with a simple mission: make professional websites, apps and digital marketing accessible to growing businesses." },
  { label: "02", bg: "var(--teal)", title: "UK Expansion — Ruislip", body: "We opened our UK office to serve local and international clients, operating as one team across two time zones." },
  { label: "03", bg: "var(--accent)", title: "Academy & Products", body: "Jadvix Academy launched to train the next generation of talent, alongside our own product lab building tools like RotaPay." },
];

const TEAM = [
  { name: "Jachin Raja", role: "CEO & Founder", photo: "/team/jachin.jpg" },
  { name: "Negha Sharma", role: "Chief Marketing Officer", photo: "/team/nehasharma.jpg" },
  { name: "Elavarasi Manoharan", role: "Chief Technical Officer", photo: "/team/elavarasi.jpg" },
  { name: "Adv. Heavalin", role: "Legal Advisor", photo: "/team/heavalin.jpg" },
];

const eyebrow = (color: string): CSSProperties => ({
  fontFamily: MONO,
  fontSize: 12,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color,
  fontWeight: 600,
});
const h2Style: CSSProperties = { fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", letterSpacing: "-.02em", margin: "14px 0 0", color: "var(--ink)" };

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .jx-vision{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
        .jx-grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
        .jx-grid4.team{gap:22px}
        @media(max-width:900px){.jx-vision{grid-template-columns:1fr;gap:36px}.jx-grid4{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.jx-grid4{grid-template-columns:1fr}}
      `,
        }}
      />

      {/* HERO */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "90px 24px 70px", textAlign: "center" }}>
        <span style={{ display: "inline-block", fontFamily: MONO, fontSize: 11.5, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, color: "var(--teal)", border: "1px solid var(--border)", padding: "7px 14px", borderRadius: "var(--radius-md)" }}>
          Pioneering Digital Evolution
        </span>
        <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-.025em", margin: "24px 0 0", color: "var(--ink)", textWrap: "balance" } as CSSProperties}>
          Bridging stability and <span style={{ color: "var(--accent)" }}>innovation.</span>
        </h1>
        <p style={{ maxWidth: 640, margin: "22px auto 0", fontSize: 18, lineHeight: 1.6, color: "var(--ink-2)" }}>
          Jadvix is a full-service IT company guiding businesses through digital transformation with bespoke strategic craftsmanship — from our offices in the UK and India.
        </p>
      </section>

      {/* VISION SPLIT */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="jx-vision" style={{ maxWidth: 1280, margin: "0 auto", padding: "90px 24px" }}>
          <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", background: "radial-gradient(120% 120% at 30% 25%,#0b3b5c,#00253e)" }}>
            <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(150deg,rgba(0,37,62,.75),rgba(0,101,145,.2) 55%,transparent)", opacity: 0.4 }} />
            <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 82% 14%,rgba(57,184,253,.3),transparent 55%)", opacity: 0.4 }} />
            <div style={{ position: "absolute", left: 18, bottom: 18, display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,.14)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.3)", borderRadius: "var(--radius-md)", padding: "12px 16px" }}>
              <span style={{ fontFamily: F, fontWeight: 600, fontSize: 28, color: "#fff", lineHeight: 1 }}>2</span>
              <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.92)", lineHeight: 1.35 }}>
                Countries
                <br />
                One team
              </span>
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,40px)", letterSpacing: "-.02em", margin: "0 0 16px", color: "var(--ink)" }}>Our vision</h2>
            <p style={{ margin: "0 0 26px", fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)" }}>
              To be the definitive catalyst for digital growth — where businesses don&apos;t just keep up with technology, they lead with it. We turn technological complexity into strategic clarity.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {VISION.map((v) => (
                <div key={v} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, color: "var(--accent)", marginTop: 2 }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--ink)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATIONS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "90px 24px" }}>
        <div style={{ marginBottom: 44 }}>
          <div style={eyebrow("var(--teal)")}>Our Foundations</div>
          <h2 style={h2Style}>Four pillars behind every partnership.</h2>
        </div>
        <div className="jx-grid4">
          {FOUNDATIONS.map((f) => (
            <article key={f.title} className="jx-card" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)", padding: 28 }}>
              <div style={{ width: 52, height: 52, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "color-mix(in srgb,var(--teal) 12%,transparent)", color: "var(--teal)", marginBottom: 18 }}>
                <Ic d={f.d} />
              </div>
              <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 19, margin: "0 0 8px", color: "var(--ink)" }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)" }}>{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section style={{ background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "90px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", letterSpacing: "-.02em", margin: "0 0 10px", color: "var(--ink)" }}>Our journey</h2>
            <p style={{ margin: 0, fontSize: 16, color: "var(--ink-2)" }}>A story of steady, strategic growth.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {JOURNEY.map((j) => (
              <div key={j.label} style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: 56, height: 56, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: j.bg, color: "#fff", fontFamily: F, fontWeight: 700, fontSize: 20 }}>{j.label}</span>
                <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)", padding: "24px 26px", flex: 1 }}>
                  <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 20, margin: "0 0 8px", color: "var(--ink)" }}>{j.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>{j.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "90px 24px" }}>
        <div style={{ marginBottom: 44 }}>
          <div style={eyebrow("var(--accent)")}>Leadership</div>
          <h2 style={h2Style}>The people behind Jadvix.</h2>
        </div>
        <div className="jx-grid4 team">
          {TEAM.map((m) => (
            <article key={m.name} className="jx-card" style={{ display: "flex", flexDirection: "column", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)", overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", background: "var(--surface-2)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.photo} alt={m.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,37,62,.34),transparent 46%)" }} />
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: 20 }}>
                <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 19, margin: "0 0 6px", color: "var(--ink)" }}>{m.name}</h3>
                <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--teal)", fontWeight: 600 }}>{m.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div style={{ height: 60 }} />

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
