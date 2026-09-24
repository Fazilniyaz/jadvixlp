import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import HomeFaq from "@/components/HomeFaq";
import HomeContactForm from "@/components/HomeContactForm";

export const metadata: Metadata = {
  title: "Jadvix | Full-Service IT Company for Web, App, Ecommerce & Digital Marketing — UK & India",
  description:
    "Jadvix designs, develops, promotes and secures digital products. Website development, mobile & web apps, ecommerce, custom software, SEO and digital marketing from our offices in Ruislip (UK) and Chennai (India).",
  alternates: { canonical: "/" },
};

const F = "var(--font-display),system-ui,sans-serif";
const MONO = "var(--font-label),system-ui,sans-serif";

function ArrowR({ s = 15 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function Ic({ d, s = 15 }: { d: string[]; s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {d.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}
const BAR_H = [45, 68, 52, 82, 60, 74];
function Bars({ seed, accent }: { seed: number; accent: string }) {
  return (
    <>
      {BAR_H.map((v, i) => (
        <div key={i} style={{ flex: 1, height: `${v}%`, borderRadius: 3, background: i === seed ? accent : "rgba(255,255,255,.2)" }} />
      ))}
    </>
  );
}

const PRODUCTS = [
  { name: "Jadvix Shop", tags: ["Web App", "Ecommerce"], desc: "A curated marketplace for digital products and services — built for businesses that want to launch and sell fast.", previewBg: "radial-gradient(120% 120% at 0% 0%,#0b3b5c,#006591)", glow: "radial-gradient(circle at 75% 25%,rgba(57,184,253,.45),transparent 60%)", d: ["M6 6h15l-1.5 9h-12z", "M6 6 5 2H2", "M9 20a1 1 0 1 0 0 .01", "M18 20a1 1 0 1 0 0 .01"], seed: 3, accent: "#39b8fd" },
  { name: "Jadvix Academy", tags: ["Platform", "Education"], desc: "Practical learning paths in IT, marketing and design — with internships on real projects and a route into the Jadvix team.", previewBg: "radial-gradient(120% 120% at 0% 0%,#006591,#39b8fd)", glow: "radial-gradient(circle at 75% 25%,rgba(255,255,255,.35),transparent 60%)", d: ["M22 10 12 5 2 10l10 5 10-5z", "M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"], seed: 5, accent: "#ffffff" },
  { name: "RotaPay", tags: ["SaaS", "Workforce"], desc: "Shift, rota and pay management for teams — schedule work, track earnings and generate reports from one clean dashboard.", previewBg: "radial-gradient(120% 120% at 0% 0%,#00253e,#0b3b5c)", glow: "radial-gradient(circle at 75% 25%,rgba(255,124,57,.4),transparent 60%)", d: ["M3 3v18h18", "M7 15l3-4 3 2 4-6"], seed: 3, accent: "#ff7c39" },
  { name: "PayRoto", tags: ["Web App", "B2B"], desc: "Fast, simple payment workflows for growing businesses — reconciliation and reporting without the spreadsheet chaos.", previewBg: "radial-gradient(120% 120% at 0% 0%,#642400,#ff7c39)", glow: "radial-gradient(circle at 75% 25%,rgba(255,219,205,.45),transparent 60%)", d: ["M13 2 3 14h7l-1 8 10-12h-7z"], seed: 4, accent: "#ffd8c5" },
];

const STATS = [
  { value: "2", label: "Countries" },
  { value: "8+", label: "Services" },
  { value: "100%", label: "In-House Delivery" },
  { value: "24/7", label: "Support & Monitoring" },
];

const MARQUEE = ["Web Development", "Mobile Apps", "Ecommerce Stores", "Custom Software", "Digital Marketing", "SEO", "UI/UX Design", "Video Editing", "IT Consultancy", "Cybersecurity"];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["Where is Jadvix based?", "We operate from two offices — Ruislip in the United Kingdom and Chennai in India — serving local and international clients across both time zones."],
    ["What services does Jadvix offer?", "End-to-end IT: website design & development, mobile & web apps, ecommerce, custom software, digital marketing & SEO, design, video editing and consultancy."],
    ["How long does a typical website project take?", "A standard business website usually takes 2–6 weeks depending on scope. Larger applications are planned in milestones, with a clear timeline agreed before work begins."],
    ["Do you provide post-launch support?", "Yes — every build can ship with monitoring, maintenance and support so your product stays fast, secure and up to date long after launch."],
    ["How do you keep projects secure?", "Security is built into every layer: secure coding, encrypted connections, access controls and regular updates."],
    ["What is Jadvix Academy?", "Our training and internship programme — learn practical skills, apply them on real projects, and top performers join the Jadvix team."],
  ].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const exploreLink: CSSProperties = { display: "inline-flex", alignItems: "center", gap: 7, fontWeight: 600, fontSize: 13.5 };
const featureBadge: CSSProperties = { position: "absolute", padding: "4px 9px", borderRadius: 3, fontFamily: MONO };

export default function HomePage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes jxspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
        @keyframes jxspinrev{from{transform:rotate(360deg)}to{transform:rotate(0)}}
        @keyframes jxfloatH{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes jxfloat2{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}
        @keyframes jxmarqueeH{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .hz-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg)}
        .hz-prod:hover{transform:translateY(-8px);border-color:rgba(57,184,253,.5)!important}
        .hz-explore:hover{gap:11px!important}
        @media(max-width:960px){.hz-hero-grid{grid-template-columns:1fr!important}.hz-hero-engine{display:none!important}.hz-svc-feature{grid-template-columns:1fr!important}.hz-svc3{grid-template-columns:1fr!important}.hz-prodgrid{grid-template-columns:1fr!important}.hz-about{grid-template-columns:1fr!important}.hz-contact{grid-template-columns:1fr!important}}
        @media(max-width:640px){.hz-feature-split{flex-direction:column!important}.hz-feature-copy{max-width:100%!important}.hz-stats2{grid-template-columns:1fr!important}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `,
        }}
      />

      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(150deg,#0b3b5c 0%,#00253e 55%,#001526 100%)", color: "#fff" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "28px 28px", WebkitMaskImage: "radial-gradient(120% 90% at 50% 30%,#000 30%,transparent 78%)", maskImage: "radial-gradient(120% 90% at 50% 30%,#000 30%,transparent 78%)", opacity: 0.4 } as CSSProperties} />
        <div aria-hidden style={{ position: "absolute", top: "-14%", right: "-8%", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle,rgba(57,184,253,.28),transparent 62%)", filter: "blur(24px)" }} />

        <div className="hz-hero-grid" style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "center", minHeight: "88vh" }}>
          <div style={{ padding: "64px 0" }}>
            <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: "clamp(44px,5.4vw,74px)", lineHeight: 1.02, letterSpacing: "-.025em", margin: 0, textWrap: "balance" } as CSSProperties}>
              Design. Develop.
              <br />
              Promote. <span style={{ color: "var(--sky)" }}>Secure.</span>
            </h1>
            <p style={{ maxWidth: 520, margin: "24px 0 0", fontSize: 18, lineHeight: 1.6, color: "rgba(206,229,255,.86)" }}>
              Jadvix builds scalable websites, apps and digital experiences from the UK and India — reliable engineering fused with creative, conversion-focused design.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
              <Link href="/contact" className="jx-lift" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: "var(--radius-sm)", boxShadow: "0 12px 30px -8px rgba(255,124,57,.5)" }}>
                Get a Free Project Quote <ArrowR s={17} />
              </Link>
              <Link href="/services" className="hz-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 9, border: "1px solid rgba(255,255,255,.28)", background: "rgba(255,255,255,.06)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: "var(--radius-sm)", backdropFilter: "blur(6px)" }}>
                Explore Our Work
              </Link>
            </div>
            <div style={{ display: "flex", gap: 28, marginTop: 44, paddingTop: 26, borderTop: "1px solid rgba(255,255,255,.12)", flexWrap: "wrap" }}>
              {[["Offices", "UK · India"], ["Delivery", "100% In-House"], ["Products", "4 Built In-House"]].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(206,229,255,.6)" }}>{k}</div>
                  <div style={{ fontFamily: F, fontSize: 20, fontWeight: 600, marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right: 3D engine (decorative) */}
          <div className="hz-hero-engine" style={{ position: "relative", height: 560, perspective: 1600 }} aria-hidden>
            <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d", transform: "translateX(-34px)" }}>
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(57,184,253,.42),transparent 62%)", filter: "blur(16px)" }} />
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 500, height: 500, margin: "-250px 0 0 -250px", borderRadius: "50%", border: "1px dashed rgba(255,255,255,.22)", animation: "jxspin 46s linear infinite" }} />
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 392, height: 392, margin: "-196px 0 0 -196px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.14)", animation: "jxspinrev 34s linear infinite" }}>
                <span style={{ position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)", width: 12, height: 12, borderRadius: "50%", background: "var(--sky)", boxShadow: "0 0 14px 2px rgba(57,184,253,.7)" }} />
                <span style={{ position: "absolute", bottom: 34, right: 6, width: 9, height: 9, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 12px 2px rgba(255,124,57,.7)" }} />
                <span style={{ position: "absolute", bottom: 48, left: 22, width: 7, height: 7, borderRadius: "50%", background: "rgba(255,255,255,.55)" }} />
              </div>
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 292, height: 292, margin: "-146px 0 0 -146px", borderRadius: "50%", border: "2px solid rgba(255,255,255,.07)", borderTopColor: "var(--sky)", borderRightColor: "var(--accent)", animation: "jxspin 13s linear infinite" }} />
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 214, height: 214, margin: "-107px 0 0 -107px", borderRadius: "50%", border: "1px dashed rgba(255,255,255,.18)", animation: "jxspinrev 22s linear infinite" }} />
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%) translateZ(46px)" }}>
                <div style={{ position: "relative", animation: "jxfloatH 6.5s ease-in-out infinite" }}>
                  <div aria-hidden style={{ position: "absolute", left: "50%", bottom: -30, transform: "translateX(-50%)", width: 180, height: 32, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,0,0,.55),transparent 70%)", filter: "blur(8px)" }} />
                  <div style={{ position: "relative", width: 228, padding: "28px 24px 24px", borderRadius: "var(--radius-md)", background: "linear-gradient(150deg,rgba(255,255,255,.24),rgba(57,184,253,.10) 55%,rgba(255,255,255,.04))", border: "1px solid rgba(255,255,255,.34)", backdropFilter: "blur(16px)", boxShadow: "0 46px 90px -26px rgba(0,0,0,.78),inset 0 1px 0 rgba(255,255,255,.5)", transform: "rotateY(-12deg) rotateX(7deg)", textAlign: "center" }}>
                    <div aria-hidden style={{ position: "absolute", top: -1, left: 22, right: 22, height: 2, borderRadius: 2, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent)" }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/jadvix-logo-light.svg" alt="Jadvix" style={{ position: "relative", width: 156, display: "block", margin: "2px auto 0", filter: "drop-shadow(0 8px 18px rgba(0,0,0,.5))" }} />
                    <div style={{ position: "relative", fontFamily: MONO, fontSize: 8.5, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(206,229,255,.8)", marginTop: 14 }}>Design · Develop · Secure</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", top: 40, right: 62, width: 58, height: 58, borderRadius: "50%", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.24)", backdropFilter: "blur(8px)", display: "grid", placeItems: "center", color: "#fff", animation: "jxfloatH 6s ease-in-out infinite" }}>
                <Ic d={["m8 7-5 5 5 5", "M16 7l5 5-5 5", "M14 4l-4 16"]} s={24} />
              </div>
              <div style={{ position: "absolute", bottom: 82, right: 24, width: 52, height: 52, borderRadius: "50%", background: "rgba(255,124,57,.85)", border: "1px solid rgba(255,255,255,.24)", display: "grid", placeItems: "center", color: "#fff", animation: "jxfloat2 7s ease-in-out infinite" }}>
                <Ic d={["M11 18h2"]} s={22} />
              </div>
              <div style={{ position: "absolute", bottom: 58, left: 44, width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.24)", backdropFilter: "blur(8px)", display: "grid", placeItems: "center", color: "#fff", animation: "jxfloatH 8s ease-in-out infinite" }}>
                <Ic d={["M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.6A4 4 0 0 0 6 19z"]} s={24} />
              </div>
              <div style={{ position: "absolute", top: 96, left: 18, width: 50, height: 50, borderRadius: "50%", background: "rgba(57,184,253,.28)", border: "1px solid rgba(255,255,255,.24)", backdropFilter: "blur(8px)", display: "grid", placeItems: "center", color: "#fff", animation: "jxfloat2 6.5s ease-in-out infinite" }}>
                <Ic d={["M3 3v18h18M7 15l3-4 3 2 4-6"]} s={22} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 24px 40px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 44 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--teal)", fontWeight: 600 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />Our Services
            </div>
            <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1.08, letterSpacing: "-.02em", margin: "14px 0 0", color: "var(--ink)" }}>
              Strategic digital <span style={{ color: "var(--teal)" }}>capabilities.</span>
            </h2>
          </div>
          <Link href="/services" className="hz-explore" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: MONO, fontSize: 12.5, letterSpacing: ".05em", textTransform: "uppercase", fontWeight: 600, color: "var(--ink)", borderBottom: "2px solid var(--accent)", paddingBottom: 4 }}>
            View all services <ArrowR />
          </Link>
        </div>

        <div className="hz-svc-feature" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 20 }}>
          {/* feature card */}
          <article className="jx-card hz-card" style={{ position: "relative", overflow: "hidden", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)", display: "flex" }}>
            <div className="hz-feature-copy hz-feature-split-child" style={{ padding: 34, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "56%" }}>
              <div style={{ width: 52, height: 52, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "color-mix(in srgb,var(--teal) 12%,transparent)", color: "var(--teal)", marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>
              </div>
              <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 24, letterSpacing: "-.01em", margin: "0 0 8px", color: "var(--ink)" }}>Website Design &amp; Development</h3>
              <span style={{ display: "block", width: 38, height: 3, borderRadius: 2, background: "var(--teal)", marginBottom: 14 }} />
              <p style={{ margin: "0 0 20px", fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>High-performance, responsive websites that blend technical stability with premium agency aesthetics — engineered for search rankings and conversions.</p>
              <Link href="/services" className="hz-explore" style={{ ...exploreLink, color: "var(--teal)" }}>Explore Service <ArrowR s={14} /></Link>
            </div>
            <div className="hz-feature-split" style={{ flex: 1, position: "relative", minWidth: "44%", background: "radial-gradient(120% 120% at 100% 0%,#0b3b5c,#00253e)", minHeight: 320, overflow: "hidden", perspective: 1200 }} aria-hidden>
              <div style={{ position: "absolute", top: "-22%", right: "-14%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,101,145,.45),transparent 62%)", filter: "blur(10px)" }} />
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "20px 20px", opacity: 0.45 }} />
              <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d", transform: "rotateY(-16deg) rotateX(7deg)" }}>
                <div style={{ position: "absolute", left: 30, right: 22, top: 34, borderRadius: 7, border: "1px solid rgba(255,255,255,.22)", background: "linear-gradient(160deg,rgba(255,255,255,.15),rgba(255,255,255,.03))", backdropFilter: "blur(7px)", boxShadow: "0 34px 66px -28px rgba(0,0,0,.72)", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 13px", borderBottom: "1px solid rgba(255,255,255,.12)" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff7c39" }} />
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#39b8fd" }} />
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,.3)" }} />
                    <span style={{ marginLeft: 8, fontFamily: MONO, fontSize: 9, letterSpacing: ".08em", color: "rgba(255,255,255,.55)" }}>jadvix.uk</span>
                  </div>
                  <div style={{ padding: 15, display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 12 }}>
                    <div>
                      <div style={{ height: 9, width: "70%", borderRadius: 2, background: "rgba(255,255,255,.32)" }} />
                      <div style={{ height: 7, width: "92%", borderRadius: 2, background: "rgba(255,255,255,.14)", marginTop: 9 }} />
                      <div style={{ height: 7, width: "80%", borderRadius: 2, background: "rgba(255,255,255,.14)", marginTop: 7 }} />
                      <div style={{ height: 22, width: 76, borderRadius: 3, background: "var(--accent)", marginTop: 14 }} />
                    </div>
                    <div style={{ borderRadius: "var(--radius-md)", background: "linear-gradient(150deg,rgba(57,184,253,.5),rgba(255,124,57,.35))", minHeight: 78 }} />
                  </div>
                </div>
                <div style={{ position: "absolute", left: 12, bottom: 24, transform: "translateZ(70px)" }}>
                  <div style={{ animation: "jxfloatH 6s ease-in-out infinite", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,.24)", background: "linear-gradient(160deg,rgba(255,255,255,.2),rgba(255,255,255,.05))", backdropFilter: "blur(8px)", boxShadow: "0 24px 46px -20px rgba(0,0,0,.65)", padding: "12px 14px", width: 150 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: MONO, fontSize: 8.5, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.65)" }}>Responsive</span>
                      <span style={{ width: 26, height: 14, borderRadius: 100, background: "var(--sky)", position: "relative" }}>
                        <span style={{ position: "absolute", right: 2, top: 2, width: 10, height: 10, borderRadius: "50%", background: "#fff" }} />
                      </span>
                    </div>
                    <div style={{ height: 6, width: "80%", borderRadius: 2, background: "rgba(255,255,255,.28)", marginTop: 11 }} />
                    <div style={{ height: 6, width: "55%", borderRadius: 2, background: "rgba(255,255,255,.14)", marginTop: 7 }} />
                  </div>
                </div>
                <div style={{ position: "absolute", right: 14, bottom: 22, transform: "translateZ(95px)" }}>
                  <div style={{ animation: "jxfloat2 7s ease-in-out infinite", display: "flex", alignItems: "center", gap: 10, borderRadius: "var(--radius-md)", background: "linear-gradient(160deg,rgba(255,124,57,.94),rgba(255,124,57,.75))", border: "1px solid rgba(255,255,255,.24)", boxShadow: "0 24px 46px -18px rgba(255,124,57,.55)", padding: "11px 14px" }}>
                    <span style={{ fontFamily: F, fontWeight: 600, fontSize: 24, color: "#fff", lineHeight: 1 }}>98</span>
                    <span style={{ fontFamily: MONO, fontSize: 8.5, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.92)", lineHeight: 1.3 }}>Lighthouse<br />Score</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* dark app card */}
          <article className="jx-card hz-card" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-md)", background: "radial-gradient(120% 120% at 0% 0%,#0b3b5c,#050c18)", color: "#fff", boxShadow: "var(--shadow)", padding: 34, minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div aria-hidden style={{ position: "absolute", top: -40, right: -40, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(57,184,253,.3),transparent 65%)" }} />
            <div aria-hidden style={{ position: "absolute", top: 22, right: 18, perspective: 900 }}>
              <div style={{ transform: "rotate(6deg)", animation: "jxfloatH 7s ease-in-out infinite" }}>
                <div style={{ width: 142, height: 262, borderRadius: 20, padding: 7, background: "linear-gradient(160deg,#1c2c40,#0a1420)", border: "1px solid rgba(255,255,255,.16)", boxShadow: "0 40px 70px -26px rgba(0,0,0,.8)" }}>
                  <div style={{ position: "relative", height: "100%", borderRadius: 15, overflow: "hidden", background: "linear-gradient(170deg,#0c2237,#071523)" }}>
                    <div style={{ position: "absolute", top: 7, left: "50%", transform: "translateX(-50%)", width: 40, height: 5, borderRadius: 100, background: "rgba(255,255,255,.22)" }} />
                    <div style={{ padding: "20px 13px 10px" }}>
                      <div style={{ fontFamily: MONO, fontSize: 7, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(206,229,255,.5)" }}>Jadvix App</div>
                      <div style={{ height: 9, width: "62%", borderRadius: 2, background: "rgba(255,255,255,.3)", marginTop: 7 }} />
                    </div>
                    <div style={{ margin: "0 13px", borderRadius: 8, background: "linear-gradient(150deg,var(--sky),#1f7fb8)", padding: "11px 12px" }}>
                      <div style={{ fontFamily: F, fontWeight: 600, fontSize: 20, color: "#fff", lineHeight: 1 }}>4.9★</div>
                      <div style={{ fontFamily: MONO, fontSize: 6.5, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.88)", marginTop: 3 }}>App Store rating</div>
                    </div>
                    <div style={{ padding: 13 }}>
                      {[["rgba(255,124,57,.85)", "72%", "44%"], ["rgba(57,184,253,.7)", "60%", "38%"]].map(([bg, w1, w2], i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i === 0 ? 11 : 0 }}>
                          <span style={{ width: 22, height: 22, borderRadius: "50%", background: bg, flexShrink: 0 }} />
                          <span style={{ flex: 1 }}>
                            <span style={{ display: "block", height: 6, width: w1, borderRadius: 2, background: "rgba(255,255,255,.28)" }} />
                            <span style={{ display: "block", height: 5, width: w2, borderRadius: 2, background: "rgba(255,255,255,.13)", marginTop: 5 }} />
                          </span>
                        </div>
                      ))}
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-around", alignItems: "center", padding: "11px 0", borderTop: "1px solid rgba(255,255,255,.1)", background: "rgba(0,0,0,.28)" }}>
                      <span style={{ width: 7, height: 7, borderRadius: 2, background: "var(--accent)" }} />
                      <span style={{ width: 7, height: 7, borderRadius: 2, background: "rgba(255,255,255,.25)" }} />
                      <span style={{ width: 7, height: 7, borderRadius: 2, background: "rgba(255,255,255,.25)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", width: 52, height: 52, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,.1)", color: "#fff", marginBottom: "auto" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>
            </div>
            <h3 style={{ position: "relative", fontFamily: F, fontWeight: 600, fontSize: 24, margin: "22px 0 8px", maxWidth: "60%" }}>Mobile &amp; Web Apps</h3>
            <span style={{ display: "block", width: 38, height: 3, borderRadius: 2, background: "var(--sky)", marginBottom: 14 }} />
            <p style={{ position: "relative", margin: "0 0 20px", fontSize: 15, lineHeight: 1.6, color: "rgba(206,229,255,.82)", maxWidth: "66%" }}>Scalable iOS, Android and web applications built on modern, cloud-native technologies.</p>
            <Link href="/services" className="hz-explore" style={{ ...exploreLink, color: "var(--sky)" }}>Explore Service <ArrowR s={14} /></Link>
          </article>
        </div>

        {/* three capability cards */}
        <div className="hz-svc3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 20 }}>
          {/* Digital Marketing */}
          <article className="jx-card hz-card" style={{ display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)" }}>
            <div style={{ position: "relative", height: 152, overflow: "hidden", background: "radial-gradient(130% 130% at 15% 0%,#0b3b5c,#00253e)" }} aria-hidden>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 85% 15%,rgba(57,184,253,.32),transparent 55%)" }} />
              <span style={{ ...featureBadge, top: 16, right: 16, fontSize: 10, letterSpacing: ".06em", color: "#fff", background: "rgba(255,124,57,.92)" }}>+142% leads</span>
              <div style={{ position: "absolute", left: 22, right: 22, bottom: 22, display: "flex", alignItems: "flex-end", gap: 9, height: 80 }}>
                {["38%", "55%", "48%", "72%", "92%"].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: h, background: i === 2 ? "rgba(57,184,253,.5)" : i === 4 ? "var(--sky)" : "rgba(255,255,255,.16)", borderRadius: 2 }} />
                ))}
              </div>
              <svg style={{ position: "absolute", left: 20, bottom: 40 }} width="156" height="64" viewBox="0 0 156 64" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 54 42 40 78 46 116 16 150 6" /><path d="M136 6h14v14" /></svg>
            </div>
            <div style={{ padding: 26 }}>
              <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 20, margin: "0 0 8px", color: "var(--ink)" }}>Digital Marketing &amp; Growth</h3>
              <p style={{ margin: "0 0 16px", fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>Data-driven strategies that increase visibility, drive traffic and generate quality leads.</p>
              <Link href="/services" className="hz-explore" style={{ ...exploreLink, color: "var(--teal)" }}>Explore Service <ArrowR s={14} /></Link>
            </div>
          </article>
          {/* Cybersecurity */}
          <article className="jx-card hz-card" style={{ display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)" }}>
            <div style={{ position: "relative", height: 152, overflow: "hidden", background: "radial-gradient(130% 130% at 15% 0%,#0b3b5c,#00253e)" }} aria-hidden>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 80%,rgba(255,124,57,.2),transparent 55%)" }} />
              <svg style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.88)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v7c0 5 8 10 8 10s8-5 8-10V5z" /><path d="m9 12 2 2 4-4" /></svg>
              <div style={{ position: "absolute", left: 14, right: 14, top: "50%", height: 1, background: "linear-gradient(90deg,transparent,var(--sky),transparent)", boxShadow: "0 0 8px 1px rgba(57,184,253,.6)" }} />
              <span style={{ position: "absolute", top: 20, left: 20, width: 6, height: 6, borderRadius: "50%", background: "var(--sky)" }} />
              <span style={{ position: "absolute", bottom: 22, right: 24, width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
            </div>
            <div style={{ padding: 26 }}>
              <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 20, margin: "0 0 8px", color: "var(--ink)" }}>Cybersecurity &amp; Protection</h3>
              <p style={{ margin: "0 0 16px", fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>Robust security practices baked into every build — protecting your data, users and trust.</p>
              <Link href="/services" className="hz-explore" style={{ ...exploreLink, color: "var(--teal)" }}>Explore Service <ArrowR s={14} /></Link>
            </div>
          </article>
          {/* Cloud */}
          <article className="jx-card hz-card" style={{ display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)" }}>
            <div style={{ position: "relative", height: 152, overflow: "hidden", background: "radial-gradient(130% 130% at 15% 0%,#0b3b5c,#00253e)" }} aria-hidden>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 75% 20%,rgba(57,184,253,.3),transparent 55%)" }} />
              <svg style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} width="200" height="110" viewBox="0 0 200 110" fill="none">
                <g stroke="rgba(255,255,255,.26)" strokeWidth="1.4"><path d="M40 82 100 44M100 44 160 82M40 82 160 82M100 44 100 96" /></g>
                <g fill="none" stroke="var(--sky)" strokeWidth="1.6"><circle cx="40" cy="82" r="7" /><circle cx="160" cy="82" r="7" /><circle cx="100" cy="96" r="6" /></g>
                <path d="M83 44a12 12 0 0 1 23-3 9 9 0 0 1 2 18H87a9 9 0 0 1-4-15z" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.7)" strokeWidth="1.4" />
              </svg>
            </div>
            <div style={{ padding: 26 }}>
              <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 20, margin: "0 0 8px", color: "var(--ink)" }}>Cloud Solutions &amp; DevOps</h3>
              <p style={{ margin: "0 0 16px", fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>Reliable cloud infrastructure and DevOps practices for speed, scalability and uptime.</p>
              <Link href="/services" className="hz-explore" style={{ ...exploreLink, color: "var(--teal)" }}>Explore Service <ArrowR s={14} /></Link>
            </div>
          </article>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section style={{ position: "relative", overflow: "hidden", marginTop: 80, background: "linear-gradient(175deg,#0b3b5c 0%,#00253e 58%,#001322 100%)", color: "#fff" }}>
        <div aria-hidden style={{ position: "absolute", top: "20%", left: "-6%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,124,57,.14),transparent 68%)", filter: "blur(20px)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "90px 24px 100px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--sky)", fontWeight: 600 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />The Ecosystem
              </div>
              <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1.08, letterSpacing: "-.02em", margin: "14px 0 12px" }}>
                Four products, <span style={{ color: "var(--sky)" }}>one platform.</span>
              </h2>
              <p style={{ maxWidth: 520, margin: 0, fontSize: 16, lineHeight: 1.6, color: "rgba(206,229,255,.8)" }}>Enterprise-grade tools built in-house — sharing one design language, one login experience and one standard of craft.</p>
            </div>
            <Link href="/products" className="hz-explore" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: MONO, fontSize: 12.5, letterSpacing: ".05em", textTransform: "uppercase", fontWeight: 600, color: "#fff", borderBottom: "2px solid var(--accent)", paddingBottom: 4 }}>
              All products <ArrowR />
            </Link>
          </div>

          <div className="hz-prodgrid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22 }}>
            {PRODUCTS.map((p) => (
              <article key={p.name} className="hz-prod" style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,.14)", borderRadius: "var(--radius-md)", background: "linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02))", backdropFilter: "blur(8px)", transition: "transform .35s,border-color .35s", boxShadow: "0 30px 60px -34px rgba(0,0,0,.7)" }}>
                <div style={{ position: "relative", height: 150, overflow: "hidden", background: p.previewBg }}>
                  <div aria-hidden style={{ position: "absolute", inset: 0, background: p.glow }} />
                  <div style={{ position: "absolute", left: 22, right: 22, bottom: 0, top: 26, borderRadius: "4px 4px 0 0", border: "1px solid rgba(255,255,255,.2)", background: "linear-gradient(160deg,rgba(255,255,255,.14),rgba(255,255,255,.03))", backdropFilter: "blur(4px)", padding: "13px 15px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>{p.name}</span>
                      <span style={{ width: 26, height: 26, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,.14)", color: "#fff" }}><Ic d={p.d} /></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 52, marginTop: 14 }}><Bars seed={p.seed} accent={p.accent} /></div>
                  </div>
                  <div style={{ position: "absolute", left: 16, top: 14, display: "flex", gap: 7 }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 600, background: "rgba(255,255,255,.92)", color: "#00253e", padding: "4px 9px", borderRadius: "var(--radius-md)" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "24px 24px 26px" }}>
                  <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 23, letterSpacing: "-.01em", margin: "0 0 8px" }}>{p.name}</h3>
                  <p style={{ margin: "0 0 22px", fontSize: 14.5, lineHeight: 1.6, color: "rgba(206,229,255,.8)" }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 12, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,.12)" }}>
                    <Link href="/contact" style={{ flex: 1, textAlign: "center", fontFamily: MONO, fontSize: 11.5, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 600, background: "var(--accent)", color: "#fff", padding: "11px 0", borderRadius: "var(--radius-md)" }}>Enquire</Link>
                    <Link href="/contact" style={{ flex: 1, textAlign: "center", fontFamily: MONO, fontSize: 11.5, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 600, border: "1px solid rgba(255,255,255,.28)", color: "#fff", padding: "11px 0", borderRadius: "var(--radius-md)" }}>Live Demo</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT + STATS ============ */}
      <section style={{ background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="hz-about" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center" }}>
            <div style={{ padding: "90px 0" }}>
              <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>About Jadvix</div>
              <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.12, letterSpacing: "-.02em", margin: "14px 0 22px", color: "var(--ink)" }}>End-to-end IT solutions that help businesses grow.</h2>
              <p style={{ margin: "0 0 16px", fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)" }}>Based in India and the UK, Jadvix is a full-service IT company serving local and international clients. We don&apos;t just build websites — we craft complete digital ecosystems.</p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)" }}>Our team combines development, design, marketing and consultancy under one roof, delivering secure, innovative technology that is as reliable as it is creative.</p>
            </div>
            <div className="hz-stats2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, padding: "40px 0" }}>
              {STATS.map((s) => (
                <div key={s.label} style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)", padding: "26px 24px" }}>
                  <div style={{ fontFamily: F, fontWeight: 600, fontSize: 40, lineHeight: 1, color: "var(--teal)" }}>{s.value}</div>
                  <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section aria-label="Capabilities" style={{ overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface)", padding: "26px 0" }}>
        <div style={{ display: "flex", width: "max-content", animation: "jxmarqueeH 34s linear infinite" }}>
          {[0, 1].map((copy) => (
            <div key={copy} style={{ display: "flex", alignItems: "center" }} aria-hidden={copy === 1}>
              {MARQUEE.map((item) => (
                <span key={`${copy}-${item}`} style={{ display: "flex", alignItems: "center", padding: "0 30px", fontFamily: F, fontSize: 22, fontWeight: 600, letterSpacing: "-.01em", color: "var(--muted)", whiteSpace: "nowrap" }}>
                  {item}
                  <span style={{ marginLeft: 30, color: "var(--accent)", opacity: 0.6, fontSize: 12 }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" style={{ maxWidth: 920, margin: "0 auto", padding: "100px 24px 40px", scrollMarginTop: 90 }}>
        <div style={{ marginBottom: 10, fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--teal)", fontWeight: 600 }}>FAQ</div>
        <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,44px)", letterSpacing: "-.02em", margin: "0 0 34px", color: "var(--ink)" }}>
          Answers, before you <span style={{ color: "var(--teal)" }}>ask.</span>
        </h2>
        <HomeFaq />
      </section>

      {/* ============ CONTACT ============ */}
      <section style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border)" }}>
        <div className="hz-contact" style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>Get in touch</div>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", letterSpacing: "-.02em", margin: "14px 0 18px", color: "var(--ink)" }}>Let&apos;s build the future together.</h2>
            <p style={{ margin: "0 0 34px", maxWidth: 440, fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>Tell us what you&apos;re planning — a website, an app, an online store or ongoing marketing. Our team in the UK and India replies within one business day.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { href: "mailto:contact@jadvix.uk", text: "contact@jadvix.uk", tag: "", d: ["M2 4h20v16H2z", "m2 7 10 6 10-6"], rect: true },
                { href: "tel:+447355803386", text: "+44 7355 803386", tag: "UK", d: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"] },
                { href: "tel:+919489644108", text: "+91 94896 44108", tag: "IN", d: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"] },
              ].map((c) => (
                <a key={c.href} href={c.href} className="hz-contactlink" style={{ display: "flex", alignItems: "center", gap: 14, color: "var(--ink)", fontWeight: 600, fontSize: 15 }}>
                  <span style={{ width: 40, height: 40, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "var(--surface)", border: "1px solid var(--border)", color: "var(--teal)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {c.rect && <rect x="2" y="4" width="20" height="16" rx="2" />}
                      {c.d.map((p, i) => (
                        <path key={i} d={p} />
                      ))}
                    </svg>
                  </span>
                  {c.text}
                  {c.tag && <span style={{ fontFamily: MONO, fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>{c.tag}</span>}
                </a>
              ))}
            </div>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
