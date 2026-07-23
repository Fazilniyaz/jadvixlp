import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import JxCta from "@/components/JxCta";

export const metadata: Metadata = {
  title: "Ideas & Jadvix Academy — Learn, Intern, Join the Team",
  description:
    "How Jadvix works: learn practical IT, marketing and design skills at Jadvix Academy, apply them through real internships, and join the Jadvix professional team. Explore the ideas driving our work.",
  alternates: { canonical: "/ideas" },
};

const F = "var(--font-fraunces),Fraunces,serif";
const MONO = "var(--font-plex-mono),'IBM Plex Mono',monospace";

function Ic({ d }: { d: string[] }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {d.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

const STEPS = [
  { num: "01", title: "Learn & Train", body: "Join Jadvix Academy for practical, job-ready skills in IT, marketing and design — taught by people who build for real clients.", d: ["M22 10 12 5 2 10l10 5 10-5z", "M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"] },
  { num: "02", title: "Internship Opportunity", body: "Apply your knowledge through hands-on internships and real-world projects, with dedicated mentorship from our delivery team.", d: ["M6 3h12v18l-6-4-6 4z"] },
  { num: "03", title: "Join the Team", body: "Perform well and become part of the Jadvix professional team — contributing to client work across the UK and India.", d: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M23 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"] },
];

const chip: CSSProperties = { display: "inline-block", fontFamily: MONO, fontSize: 11.5, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, color: "var(--teal)", border: "1px solid var(--border)", padding: "7px 14px", borderRadius: 4 };

export default function IdeasPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .id-btn-navy:hover{background:var(--navy-2)!important}
        .id-btn-ghost:hover{border-color:var(--accent)!important;color:var(--accent)!important}
        .id-step:hover{border-color:rgba(57,184,253,.5)!important}
        @media(max-width:900px){.id-hero{grid-template-columns:1fr!important}.id-steps{grid-template-columns:1fr!important}.id-incubate{grid-template-columns:1fr!important}}
      `,
        }}
      />

      {/* HERO */}
      <section className="id-hero" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 70px", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 56, alignItems: "center" }}>
        <div>
          <span style={chip}>Future Forward Ideas</span>
          <h1 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(36px,4.6vw,60px)", lineHeight: 1.04, letterSpacing: "-.025em", margin: "24px 0 0", color: "var(--ink)", textWrap: "balance" } as CSSProperties}>
            Pioneering the next <span style={{ fontStyle: "italic", color: "var(--accent)" }}>digital frontier.</span>
          </h1>
          <p style={{ maxWidth: 520, margin: "22px 0 0", fontSize: 18, lineHeight: 1.6, color: "var(--ink-2)" }}>
            At Jadvix, ideas are our primary currency. We don&apos;t just build software; we grow people and products together — through our Academy, internships and in-house product lab.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <Link href="/contact" className="id-btn-navy" style={{ background: "var(--navy)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 4 }}>Apply to Academy</Link>
            <Link href="/products" className="id-btn-ghost" style={{ border: "1px solid var(--border)", color: "var(--ink)", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 4, background: "var(--surface)" }}>See Our Products</Link>
          </div>
        </div>
        <div style={{ position: "relative" }} aria-hidden>
          <div className="jx-float" style={{ border: "1px solid var(--border)", borderRadius: 4, background: "var(--surface)", boxShadow: "var(--shadow-lg)", padding: 20 }}>
            <div style={{ position: "relative", aspectRatio: "1", borderRadius: 5, overflow: "hidden", background: "radial-gradient(120% 120% at 30% 25%,#0b3b5c,#00253e 60%,#006591)" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 25%,rgba(57,184,253,.45),transparent 55%),radial-gradient(circle at 75% 80%,rgba(255,124,57,.4),transparent 50%)" }} />
              <div style={{ position: "absolute", left: 40, top: 40, right: 40, height: 11, borderRadius: 4, background: "rgba(255,255,255,.22)" }} />
              <div style={{ position: "absolute", left: 40, top: 66, width: "66%", height: 11, borderRadius: 4, background: "rgba(255,255,255,.16)" }} />
              <div style={{ position: "absolute", left: 40, top: 92, width: "48%", height: 11, borderRadius: 4, background: "rgba(255,255,255,.1)" }} />
              <svg style={{ position: "absolute", right: 36, bottom: 36 }} width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* HOW JADVIX WORKS */}
      <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 100% at 50% 0%,#0b3b5c,#00253e 60%,#001322)", color: "#fff" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "28px 28px", opacity: 0.5 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1000, margin: "0 auto", padding: "90px 24px 100px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--sky)", fontWeight: 600 }}>The Progression Model</div>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.6vw,44px)", letterSpacing: "-.02em", margin: "14px 0 12px" }}>How Jadvix works.</h2>
            <p style={{ maxWidth: 560, margin: "0 auto", fontSize: 16, lineHeight: 1.6, color: "rgba(206,229,255,.8)" }}>We transform talent into professionals — from foundational learning to real organisational impact.</p>
          </div>
          <div className="id-steps" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {STEPS.map((s) => (
              <article key={s.num} className="id-step" style={{ border: "1px solid rgba(255,255,255,.14)", borderRadius: 4, background: "linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02))", backdropFilter: "blur(8px)", padding: 30, transition: "border-color .3s" }}>
                <div style={{ width: 56, height: 56, display: "grid", placeItems: "center", borderRadius: 5, background: "rgba(255,255,255,.1)", color: "#fff", marginBottom: 20 }}>
                  <Ic d={s.d} />
                </div>
                <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".12em", color: "var(--accent)", marginBottom: 6 }}>{s.num}</div>
                <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 22, margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "rgba(206,229,255,.8)" }}>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INCUBATING TOMORROW */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "90px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
          <div>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", letterSpacing: "-.02em", margin: "0 0 8px", color: "var(--ink)" }}>Incubating tomorrow.</h2>
            <p style={{ margin: 0, maxWidth: 460, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>The core domains where our team and Academy interns are making a difference today.</p>
          </div>
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: MONO, fontSize: 12.5, letterSpacing: ".05em", textTransform: "uppercase", fontWeight: 600, color: "var(--ink)", borderBottom: "2px solid var(--accent)", paddingBottom: 4 }}>
            View all services
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
        <div className="id-incubate" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18 }}>
          <article style={{ position: "relative", overflow: "hidden", border: "1px solid var(--border)", borderRadius: 4, background: "var(--surface)", boxShadow: "var(--shadow)", padding: 34, minHeight: 230 }}>
            <span style={{ display: "inline-block", fontFamily: MONO, fontSize: 10.5, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 600, color: "var(--teal)", background: "color-mix(in srgb,var(--teal) 12%,transparent)", padding: "5px 11px", borderRadius: 4 }}>Core Tech</span>
            <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 26, letterSpacing: "-.01em", margin: "16px 0 10px", color: "var(--ink)" }}>Cloud-Native Engineering</h3>
            <p style={{ maxWidth: 380, margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>Designing resilient, scalable infrastructures that grow with your ambition — from single sites to multi-region platforms.</p>
            <svg style={{ position: "absolute", right: 28, bottom: 24, color: "var(--sky)", opacity: 0.5 }} width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.6A4 4 0 0 0 6 19z" /></svg>
          </article>
          <article style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: 4, background: "var(--teal)", color: "#fff", boxShadow: "var(--shadow)", padding: 30, minHeight: 230 }}>
            <span style={{ width: 56, height: 56, display: "grid", placeItems: "center", borderRadius: 5, background: "rgba(255,255,255,.18)" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" /></svg>
            </span>
            <div>
              <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 22, margin: "0 0 6px" }}>Applied AI</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, opacity: 0.85 }}>Turning smart automation and analytics into practical business tools.</p>
            </div>
          </article>
          <article style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", border: "1px solid var(--border)", borderRadius: 4, background: "var(--surface-2)", boxShadow: "var(--shadow)", padding: 34, minHeight: 200 }}>
            <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 22, margin: "0 0 8px", color: "var(--ink)" }}>Our Products</h3>
            <p style={{ margin: "0 0 16px", fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)" }}>Tools built by Jadvix for the modern business.</p>
            <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontWeight: 600, fontSize: 14, color: "var(--teal)" }}>
              Explore
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </Link>
          </article>
          <article style={{ display: "flex", gap: 28, alignItems: "center", border: "1px solid color-mix(in srgb,var(--accent) 30%,transparent)", borderRadius: 4, background: "color-mix(in srgb,var(--accent) 7%,var(--surface))", boxShadow: "var(--shadow)", padding: 34, minHeight: 200 }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 24, letterSpacing: "-.01em", margin: "0 0 10px", color: "var(--accent)" }}>Join the Jadvix Academy</h3>
              <p style={{ margin: "0 0 18px", fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>Start your journey from learner to professional with our structured mentorship programme.</p>
              <Link href="/contact" className="jx-lift" style={{ display: "inline-block", background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 4 }}>Apply Now</Link>
            </div>
            <div style={{ flex: "0 0 40%", position: "relative", aspectRatio: "4/3", borderRadius: 5, overflow: "hidden", background: "radial-gradient(120% 120% at 40% 30%,#006591,#39b8fd)" }} aria-hidden>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%,rgba(255,255,255,.3),transparent 55%)" }} />
              <svg style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10 12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5" />
              </svg>
            </div>
          </article>
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
