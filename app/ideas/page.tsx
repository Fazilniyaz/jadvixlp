import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import JxCta from "@/components/JxCta";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ideas & Jadvix Academy — Learn, Intern, Join the Team",
  description:
    "How Jadvix works: learn practical IT, marketing and design skills at Jadvix Academy, apply them through real internships, and join the Jadvix professional team. Explore the ideas driving our work.",
  alternates: { canonical: "/ideas" },
};

function Ic({ d, s = 24 }: { d: string[]; s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {d.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}
function ArrowR() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const STEPS = [
  { num: "01", title: "Learn & Train", body: "Join Jadvix Academy for practical, job-ready skills in IT, marketing and design — taught by people who build for real clients.", d: ["M22 10 12 5 2 10l10 5 10-5z", "M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"] },
  { num: "02", title: "Internship Opportunity", body: "Apply your knowledge through hands-on internships and real-world projects, with dedicated mentorship from our delivery team.", d: ["M6 3h12v18l-6-4-6 4z"] },
  { num: "03", title: "Join the Team", body: "Perform well and become part of the Jadvix professional team — contributing to client work across the UK and India.", d: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M23 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"] },
];

const BULB = ["M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"];
const art = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function IdeasPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .id-hero{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:64px;align-items:center}
        .id-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
        .id-incubate{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:18px}
        @media(max-width:900px){.id-hero,.id-steps,.id-incubate{grid-template-columns:1fr}.id-hero{gap:48px}}
        @media(max-width:640px){.id-academy{flex-direction:column;align-items:stretch!important}}
      `,
        }}
      />

      {/* HERO */}
      <section className="jx-wrap id-hero" style={{ paddingTop: "clamp(72px,10vh,120px)", paddingBottom: "clamp(72px,10vh,120px)" }}>
        <div>
          <span className="jx-eyebrow jx-rise">Future Forward Ideas</span>
          <h1 className="jx-display-xl jx-rise" style={{ ["--d" as string]: "80ms", margin: "24px 0 0", color: "var(--ink)" } as CSSProperties}>
            Pioneering the next <span className="jx-accent">digital frontier.</span>
          </h1>
          <p className="jx-body-lg jx-rise" style={{ ["--d" as string]: "200ms", maxWidth: 540, margin: "24px 0 0", color: "var(--ink-2)" } as CSSProperties}>
            At Jadvix, ideas are our primary currency. We don&apos;t just build software; we grow people and products together — through our Academy, internships and in-house product lab.
          </p>
          <div className="jx-rise" style={{ ["--d" as string]: "320ms", display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" } as CSSProperties}>
            <Link href="/contact" className="jx-btn jx-btn-spark">Apply to Academy</Link>
            <Link href="/products" className="jx-btn jx-btn-ghost">See Our Products</Link>
          </div>
        </div>
        <div className="jx-rise" style={{ ["--d" as string]: "240ms" } as CSSProperties} aria-hidden>
          <div className="jx-navy jx-panel" style={{ aspectRatio: "1", boxShadow: "var(--shadow-glow)", color: "var(--brand)" }}>
            <div className="jx-glow" style={{ top: "-30%", left: "-25%" }} />
            <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
              <g {...art}>
                <rect x="48" y="52" width="210" height="12" rx="6" strokeOpacity=".55" />
                <rect x="48" y="80" width="150" height="12" rx="6" strokeOpacity=".38" />
                <rect x="48" y="108" width="100" height="12" rx="6" strokeOpacity=".22" />
                <circle cx="270" cy="270" r="84" strokeOpacity=".2" />
                <circle cx="270" cy="270" r="56" strokeOpacity=".32" strokeDasharray="2 7" />
                <g transform="translate(234 234) scale(3)" strokeWidth={0.5}>
                  <path d={BULB[0]} />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* HOW JADVIX WORKS */}
      <section className="jx-navy">
        <div aria-hidden className="jx-glow" style={{ top: "-20%", right: "-10%" }} />
        <div className="jx-section" style={{ position: "relative", maxWidth: 1080, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
          <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="jx-eyebrow">The Progression Model</span>
            <h2 className="jx-display-lg" style={{ margin: "20px 0 16px", color: "#fff" }}>How Jadvix works.</h2>
            <p className="jx-body-lg" style={{ maxWidth: 580, margin: "0 auto", color: "var(--on-navy-2)" }}>We transform talent into professionals — from foundational learning to real organisational impact.</p>
          </Reveal>
          <div className="id-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <article className="jx-card-dark jx-hover" style={{ height: "100%", padding: 32 }}>
                  <div className="jx-icon-tile" style={{ width: 52, height: 52, color: "var(--brand)", marginBottom: 22 }}>
                    <Ic d={s.d} />
                  </div>
                  <div className="jx-label jx-num" style={{ color: "var(--brand)", marginBottom: 8 }}>{s.num}</div>
                  <h3 className="jx-headline" style={{ margin: "0 0 12px", color: "#fff" }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--on-navy-2)" }}>{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INCUBATING TOMORROW */}
      <section className="jx-wrap jx-section">
        <Reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <div>
            <h2 className="jx-display-lg" style={{ margin: "0 0 14px", color: "var(--ink)" }}>Incubating tomorrow.</h2>
            <p className="jx-body-lg" style={{ margin: 0, maxWidth: 480, color: "var(--ink-2)" }}>The core domains where our team and Academy interns are making a difference today.</p>
          </div>
          <Link href="/services" className="jx-arrow-link">
            View all services
            <ArrowR />
          </Link>
        </Reveal>
        <div className="id-incubate">
          <Reveal>
            <article className="jx-card jx-hover" style={{ height: "100%", overflow: "hidden", padding: 36, minHeight: 240 }}>
              <span className="jx-eyebrow">Core Tech</span>
              <h3 className="jx-headline" style={{ margin: "18px 0 12px", color: "var(--ink)" }}>Cloud-Native Engineering</h3>
              <p style={{ maxWidth: 400, margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>Designing resilient, scalable infrastructures that grow with your ambition — from single sites to multi-region platforms.</p>
              <svg aria-hidden style={{ position: "absolute", right: 30, bottom: 26, color: "var(--brand)", opacity: 0.55 }} width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.6A4 4 0 0 0 6 19z" /></svg>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="jx-card-dark jx-hover" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 28, padding: 32, minHeight: 240, background: "var(--navy-900)" }}>
              <span className="jx-icon-tile" style={{ width: 52, height: 52, color: "var(--brand)" }}>
                <Ic d={BULB} />
              </span>
              <div>
                <h3 className="jx-headline" style={{ margin: "0 0 8px", color: "#fff" }}>Applied AI</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--on-navy-2)" }}>Turning smart automation and analytics into practical business tools.</p>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article className="jx-card jx-hover" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: 36, minHeight: 210, background: "var(--surface-2)" }}>
              <h3 className="jx-headline" style={{ margin: "0 0 10px", color: "var(--ink)" }}>Our Products</h3>
              <p style={{ margin: "0 0 18px", fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)" }}>Tools built by Jadvix for the modern business.</p>
              <Link href="/products" className="jx-arrow-link">
                Explore
                <ArrowR />
              </Link>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="jx-card jx-hover id-academy" style={{ height: "100%", display: "flex", gap: 28, alignItems: "center", padding: 32, minHeight: 210 }}>
              <div style={{ flex: 1 }}>
                <h3 className="jx-headline" style={{ margin: "0 0 10px", color: "var(--ink)" }}>Join the Jadvix Academy</h3>
                <p style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>Start your journey from learner to professional with our structured mentorship programme.</p>
                <Link href="/contact" className="jx-btn jx-btn-primary">Apply Now</Link>
              </div>
              <div className="jx-art" aria-hidden style={{ flex: "0 0 38%", aspectRatio: "4/3", borderRadius: 12, display: "grid", placeItems: "center" }}>
                <Ic s={46} d={["M22 10 12 5 2 10l10 5 10-5z", "M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"]} />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <JxCta
        title="Have an idea worth building?"
        body="Bring it to a team that designs, develops, promotes and secures — end to end."
        primaryLabel="Get a Free Project Quote"
        primaryHref="/contact"
        secondaryLabel="Meet the Academy"
        secondaryHref="/contact"
      />
    </div>
  );
}
