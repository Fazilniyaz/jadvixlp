import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import HomeFaq from "@/components/HomeFaq";
import HomeContactForm from "@/components/HomeContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Jadvix | Full-Service IT Company for Web, App, Ecommerce & Digital Marketing — UK & India",
  description:
    "Jadvix designs, develops, promotes and secures digital products. Website development, mobile & web apps, ecommerce, custom software, SEO and digital marketing from our offices in Ruislip (UK) and Chennai (India).",
  alternates: { canonical: "/" },
};

function ArrowUpRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
function ArrowR({ s = 16 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function Ic({ d, s = 18 }: { d: string[]; s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {d.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

const BAR_H = [45, 68, 52, 82, 60, 74];
function Bars({ seed }: { seed: number }) {
  // outline bars, one highlighted — decorative, drawn on a 180×56 board
  const w = 20;
  const gap = 12;
  return (
    <svg width="100%" height="56" viewBox="0 0 184 56" preserveAspectRatio="xMinYMax meet" aria-hidden>
      {BAR_H.map((v, i) => {
        const h = (v / 100) * 54;
        return (
          <rect
            key={i}
            x={1 + i * (w + gap)}
            y={55 - h}
            width={w}
            height={h}
            rx={4}
            fill={i === seed ? "var(--brand)" : "none"}
            stroke="var(--brand)"
            strokeOpacity={i === seed ? 1 : 0.45}
            strokeWidth={1.5}
          />
        );
      })}
    </svg>
  );
}

const PRODUCTS = [
  { name: "Jadvix Shop", tags: ["Web App", "Ecommerce"], desc: "A curated marketplace for digital products and services — built for businesses that want to launch and sell fast.", d: ["M6 6h15l-1.5 9h-12z", "M6 6 5 2H2", "M9 20a1 1 0 1 0 0 .01", "M18 20a1 1 0 1 0 0 .01"], seed: 3 },
  { name: "Jadvix Academy", tags: ["Platform", "Education"], desc: "Practical learning paths in IT, marketing and design — with internships on real projects and a route into the Jadvix team.", d: ["M22 10 12 5 2 10l10 5 10-5z", "M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"], seed: 5 },
  { name: "RotaPay", tags: ["SaaS", "Workforce"], desc: "Shift, rota and pay management for teams — schedule work, track earnings and generate reports from one clean dashboard.", d: ["M3 3v18h18", "M7 15l3-4 3 2 4-6"], seed: 3 },
  { name: "PayRoto", tags: ["Web App", "B2B"], desc: "Fast, simple payment workflows for growing businesses — reconciliation and reporting without the spreadsheet chaos.", d: ["M13 2 3 14h7l-1 8 10-12h-7z"], seed: 4 },
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

const HERO_LINES = [
  ["Design.", "Develop."],
  ["Promote.", "Secure."],
];
const sectionHead: CSSProperties = { display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 56 };
const artStroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function HomePage() {
  let wordIndex = 0;
  return (
    <div style={{ background: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hz-hero-wrap{position:relative;padding:12px 16px 0}
        .hz-hero-frame{border-radius:var(--r-hero);border:1px solid var(--line-navy);min-height:min(84dvh,820px);display:flex;flex-direction:column;justify-content:center;padding:96px 24px 150px}
        .hz-shaft{position:absolute;left:50%;top:-30%;width:min(900px,120%);height:120%;transform:translateX(-50%);background:radial-gradient(ellipse 38% 60% at 50% 0%,rgba(31,166,224,.36),rgba(31,166,224,.1) 55%,transparent 75%);pointer-events:none}
        .hz-hero-inner{position:relative;max-width:980px;margin:0 auto;text-align:center}
        .hz-meta{position:absolute;left:0;right:0;bottom:30px;width:min(700px,calc(100% - 640px));display:flex;justify-content:space-between;gap:24px;margin:0 auto}
        .hz-meta-item dt{color:var(--on-navy-2);font-size:11.5px}
        .hz-meta-item dd{margin:6px 0 0;font-family:var(--font-display),system-ui,sans-serif;font-size:17px;font-weight:500;color:#fff;word-spacing:.06em}
        .hz-float{position:absolute;bottom:-44px;z-index:2}
        .hz-float-l{left:48px}
        .hz-float-r{right:48px}
        .hz-glass{margin:0;display:flex;align-items:center;gap:14px;padding:16px 20px;border:1px solid var(--line);border-radius:var(--r-card);background:color-mix(in srgb,var(--surface) 90%,transparent);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:var(--shadow-md)}
        .hz-glass-col{flex-direction:column;align-items:stretch;width:236px;gap:12px}
        .hz-glass figcaption{display:flex;flex-direction:column}
        .hz-glass-num{font-size:28px;font-weight:600;line-height:1;color:var(--ink);letter-spacing:-.02em}
        .hz-glass-label{font-size:11px;color:var(--ink-2);margin-top:6px}
        .hz-glass-col .hz-glass-label{margin-top:0}
        .hz-strip{overflow:hidden;padding:84px 0 12px;opacity:.7;-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)}
        @media(max-width:1060px){.hz-meta{position:relative;left:auto;right:auto;bottom:auto;width:auto;margin:48px auto 0;max-width:640px}.hz-hero-frame{padding-bottom:110px}}
        @media(max-width:640px){.hz-hero-wrap{padding:8px 10px 0}.hz-hero-frame{padding:64px 20px 96px;min-height:0}.hz-meta{flex-wrap:wrap;justify-content:center;gap:18px 28px;text-align:center}.hz-float{bottom:-44px;width:calc(50% - 22px)}.hz-float-l{left:16px}.hz-float-r{right:16px}.hz-glass{padding:12px 14px;gap:10px;min-height:96px}.hz-glass>svg{width:36px;height:36px;flex-shrink:0}.hz-glass-col{width:auto;gap:8px}.hz-glass-col>svg{width:100%;height:18px}.hz-glass-num{font-size:22px}.hz-glass-label{font-size:10px;letter-spacing:.1em}}
        .hz-svc-feature{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:20px}
        .hz-svc3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:20px}
        .hz-prodgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
        .hz-about{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:64px;align-items:center}
        .hz-stats2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .hz-contact{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:64px;align-items:start}
        .hz-feature-split{display:flex;height:100%}
        .hz-h1-line{white-space:nowrap}
        @media(max-width:560px){.hz-h1-line{white-space:normal}}
        .hz-contactlink{transition:color .25s var(--ease)}
        .hz-contactlink:hover{color:var(--accent-text)!important}
        .hz-contactlink:hover .hz-ci{border-color:var(--brand)}
        .hz-ci{transition:border-color .25s var(--ease)}
        @media(max-width:960px){.hz-svc-feature,.hz-svc3,.hz-prodgrid,.hz-about,.hz-contact{grid-template-columns:1fr}.hz-about,.hz-contact{gap:48px}}
        @media(max-width:640px){.hz-feature-split{flex-direction:column}.hz-feature-copy{max-width:100%!important}.hz-feature-art{min-height:240px!important}.hz-stats2{grid-template-columns:1fr}}
      `,
        }}
      />

      {/* ============ HERO (contained frame) ============ */}
      <section className="hz-hero-wrap">
        <div className="jx-navy hz-hero-frame">
          <div aria-hidden className="hz-shaft" />
          <div className="hz-hero-inner">
            <h1 className="jx-display-xl" style={{ color: "#fff" }}>
              {HERO_LINES.map((line, li) => (
                <span key={li}>
                  {li > 0 && <br />}
                  <span className="hz-h1-line">
                    {line.map((w, wi) => {
                      const idx = wordIndex++;
                      return (
                        <span key={w}>
                          {wi > 0 && " "}
                          <span className={`jx-word${w === "Secure." ? " jx-accent" : ""}`} style={{ ["--i" as string]: idx } as CSSProperties}>
                            {w}
                          </span>
                        </span>
                      );
                    })}
                  </span>
                </span>
              ))}
            </h1>
            <p className="jx-body-lg jx-rise" style={{ ["--d" as string]: "420ms", maxWidth: 600, margin: "28px auto 0", color: "var(--on-navy-2)" } as CSSProperties}>
              Jadvix builds scalable websites, apps and digital experiences from the UK and India — reliable engineering fused with creative, conversion-focused design.
            </p>
            <div className="jx-rise" style={{ ["--d" as string]: "540ms", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 36 } as CSSProperties}>
              <Link href="/contact" className="jx-btn jx-btn-spark">
                Get a Free Project Quote <ArrowUpRight />
              </Link>
              <Link href="/services" className="jx-btn jx-btn-ghost">
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* corner meta-labels, restyled from the existing stat strip */}
          <dl className="hz-meta jx-rise" style={{ ["--d" as string]: "660ms" } as CSSProperties}>
            {[["Offices", "UK · India"], ["Delivery", "100% In-House"], ["Products", "4 Built In-House"]].map(([k, v]) => (
              <div key={k} className="hz-meta-item">
                <dt className="jx-label">+ {k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* floating glass cards overlapping the frame's lower corners (existing stats only) */}
        <div className="hz-float hz-float-l jx-rise" style={{ ["--d" as string]: "760ms" } as CSSProperties}>
          <figure className="hz-glass jx-float" style={{ ["--fd" as string]: "0s" } as CSSProperties}>
            <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden>
              <circle cx="26" cy="26" r="21" fill="none" stroke="var(--line)" strokeWidth="4" />
              <circle cx="26" cy="26" r="21" fill="none" stroke="var(--brand)" strokeWidth="4" strokeLinecap="round" />
              <path d="M19 26.5l4.5 4.5 9-9.5" fill="none" stroke="var(--accent-text)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <figcaption>
              <span className="font-display jx-num hz-glass-num">{STATS[2].value}</span>
              <span className="jx-label hz-glass-label">{STATS[2].label}</span>
            </figcaption>
          </figure>
        </div>
        <div className="hz-float hz-float-r jx-rise" style={{ ["--d" as string]: "860ms" } as CSSProperties}>
          <figure className="hz-glass hz-glass-col jx-float" style={{ ["--fd" as string]: "-3s" } as CSSProperties}>
            <figcaption>
              <span className="jx-label hz-glass-label">{STATS[1].label}</span>
              <span className="font-display jx-num hz-glass-num">{STATS[1].value}</span>
            </figcaption>
            {/* unit chart: one cell per service discipline */}
            <svg width="100%" height="22" viewBox="0 0 176 22" preserveAspectRatio="xMinYMid meet" aria-hidden>
              {Array.from({ length: 8 }).map((_, i) => (
                <rect key={i} x={i * 22} y={0} width={18} height={22} rx={5} fill="var(--brand)" fillOpacity={0.35 + i * 0.09} />
              ))}
            </svg>
          </figure>
        </div>
      </section>

      {/* ============ MARQUEE (trust strip, directly under the hero) ============ */}
      <section aria-label="Capabilities" className="hz-strip">
        <div className="animate-marquee" style={{ display: "flex", width: "max-content" }}>
          {[0, 1].map((copy) => (
            <div key={copy} style={{ display: "flex", alignItems: "center" }} aria-hidden={copy === 1}>
              {MARQUEE.map((item) => (
                <span key={`${copy}-${item}`} className="font-display" style={{ display: "flex", alignItems: "center", padding: "0 28px", fontSize: 24, fontWeight: 500, letterSpacing: "-.01em", color: "var(--ink-2)", whiteSpace: "nowrap" }}>
                  {item}
                  <span aria-hidden style={{ marginLeft: 56, width: 5, height: 5, borderRadius: "50%", background: "var(--brand)" }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="jx-wrap jx-section">
        <Reveal style={sectionHead}>
          <div>
            <span className="jx-eyebrow">Our Services</span>
            <h2 className="jx-display-lg" style={{ marginTop: 20, color: "var(--ink)" }}>
              Strategic digital <span className="jx-accent">capabilities.</span>
            </h2>
          </div>
          <Link href="/services" className="jx-arrow-link">
            View all services <ArrowR />
          </Link>
        </Reveal>

        <div className="hz-svc-feature">
          {/* feature card */}
          <Reveal>
            <article className="jx-card jx-hover hz-feature-split" style={{ overflow: "hidden" }}>
              <div className="hz-feature-copy" style={{ padding: 36, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "54%" }}>
                <div className="jx-icon-tile" style={{ marginBottom: 22 }}>
                  <Ic s={22} d={["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"]} />
                </div>
                <h3 className="jx-headline" style={{ margin: "0 0 12px", color: "var(--ink)" }}>Website Design &amp; Development</h3>
                <p className="jx-body" style={{ margin: "0 0 24px", color: "var(--ink-2)" }}>High-performance, responsive websites that blend technical stability with premium agency aesthetics — engineered for search rankings and conversions.</p>
                <Link href="/services" className="jx-arrow-link">Explore Service <ArrowR s={15} /></Link>
              </div>
              <div className="jx-art hz-feature-art" aria-hidden style={{ flex: 1, minHeight: 320 }}>
                <div className="jx-glow" style={{ width: 360, height: 360, top: "-30%", right: "-30%" }} />
                <svg viewBox="0 0 320 260" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ position: "absolute", inset: 0, padding: 20 }}>
                  <g {...artStroke}>
                    <rect x="20" y="36" width="230" height="160" rx="12" strokeOpacity=".8" />
                    <path d="M20 62h230" strokeOpacity=".35" />
                    <rect x="40" y="82" width="92" height="10" rx="5" strokeOpacity=".7" />
                    <path d="M40 106h110M40 120h84" strokeOpacity=".4" />
                    <rect x="40" y="140" width="56" height="22" rx="11" fill="var(--brand)" fillOpacity=".18" />
                    <rect x="152" y="82" width="80" height="80" rx="10" strokeOpacity=".45" />
                    <path d="M152 140l24-22 18 16 14-10 24 18" strokeOpacity=".6" />
                    <rect x="222" y="118" width="74" height="126" rx="14" fill="var(--navy-900)" />
                    <path d="M248 130h22" strokeOpacity=".5" />
                    <rect x="234" y="146" width="50" height="34" rx="6" strokeOpacity=".5" />
                    <path d="M234 194h50M234 206h34" strokeOpacity=".35" />
                  </g>
                </svg>
              </div>
            </article>
          </Reveal>

          {/* dark app card */}
          <Reveal delay={80}>
            <article className="jx-card-dark jx-hover" style={{ overflow: "hidden", padding: 36, minHeight: 380, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "var(--navy-900)" }}>
              <svg aria-hidden viewBox="0 0 150 250" width="130" style={{ position: "absolute", top: 28, right: 28, color: "var(--brand)" }}>
                <g {...artStroke}>
                  <rect x="4" y="4" width="142" height="242" rx="24" strokeOpacity=".8" />
                  <path d="M60 18h30" strokeOpacity=".5" />
                  <path d="M22 44h56" strokeOpacity=".6" />
                  <rect x="22" y="58" width="106" height="56" rx="10" fill="var(--brand)" fillOpacity=".14" strokeOpacity=".6" />
                  <path d="M32 100l18-14 16 8 20-18 22 12" strokeOpacity=".9" />
                  <circle cx="34" cy="140" r="10" strokeOpacity=".6" />
                  <path d="M52 136h54M52 146h36" strokeOpacity=".4" />
                  <circle cx="34" cy="176" r="10" strokeOpacity=".6" />
                  <path d="M52 172h54M52 182h30" strokeOpacity=".4" />
                  <path d="M4 214h142" strokeOpacity=".25" />
                </g>
              </svg>
              <div className="jx-icon-tile" style={{ position: "relative", background: "rgba(255,255,255,.06)", color: "var(--brand)", marginBottom: "auto" }}>
                <Ic s={22} d={["M8 2h8a2.5 2.5 0 0 1 2.5 2.5v15A2.5 2.5 0 0 1 16 22H8a2.5 2.5 0 0 1-2.5-2.5v-15A2.5 2.5 0 0 1 8 2z", "M11 18h2"]} />
              </div>
              <h3 className="jx-headline" style={{ position: "relative", margin: "28px 0 12px", maxWidth: "60%", color: "#fff" }}>Mobile &amp; Web Apps</h3>
              <p className="jx-body" style={{ position: "relative", margin: "0 0 24px", color: "var(--on-navy-2)", maxWidth: "70%" }}>Scalable iOS, Android and web applications built on modern, cloud-native technologies.</p>
              <Link href="/services" className="jx-arrow-link" style={{ color: "var(--brand)" }}>Explore Service <ArrowR s={15} /></Link>
            </article>
          </Reveal>
        </div>

        {/* three capability cards */}
        <div className="hz-svc3">
          {[
            {
              title: "Digital Marketing & Growth",
              body: "Data-driven strategies that increase visibility, drive traffic and generate quality leads.",
              art: (
                <g {...artStroke}>
                  {[38, 55, 48, 72, 92].map((h, i) => (
                    <rect key={i} x={40 + i * 34} y={130 - h} width={22} height={h} rx={4} strokeOpacity={i === 4 ? 1 : 0.4} fill={i === 4 ? "var(--brand)" : "none"} fillOpacity={0.2} />
                  ))}
                  <path d="M36 96l40-18 34 8 38-30 44-20" strokeOpacity=".9" />
                  <path d="M178 36h14v14" strokeOpacity=".9" />
                </g>
              ),
            },
            {
              title: "Cybersecurity & Protection",
              body: "Robust security practices baked into every build — protecting your data, users and trust.",
              art: (
                <g {...artStroke}>
                  <circle cx="130" cy="80" r="56" strokeOpacity=".2" />
                  <circle cx="130" cy="80" r="40" strokeOpacity=".3" strokeDasharray="2 6" />
                  <path d="M130 44l-26 10v22c0 17 26 32 26 32s26-15 26-32V54z" strokeOpacity=".95" />
                  <path d="M119 78l8 8 15-15" strokeOpacity=".95" />
                </g>
              ),
            },
            {
              title: "Cloud Solutions & DevOps",
              body: "Reliable cloud infrastructure and DevOps practices for speed, scalability and uptime.",
              art: (
                <g {...artStroke}>
                  <path d="M70 118 130 72M130 72 190 118M70 118h120M130 72v58" strokeOpacity=".35" />
                  <circle cx="70" cy="118" r="8" />
                  <circle cx="190" cy="118" r="8" />
                  <circle cx="130" cy="132" r="7" />
                  <path d="M111 72a14 14 0 0 1 27-4 10 10 0 0 1 3 20h-26a10 10 0 0 1-4-16z" fill="var(--navy-900)" strokeOpacity=".95" />
                </g>
              ),
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="jx-card jx-hover" style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div className="jx-art" aria-hidden style={{ height: 160 }}>
                  <svg viewBox="0 0 260 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
                    {c.art}
                  </svg>
                </div>
                <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 className="font-display" style={{ fontSize: 21, fontWeight: 600, letterSpacing: "-.01em", margin: "0 0 10px", color: "var(--ink)" }}>{c.title}</h3>
                  <p className="jx-body" style={{ margin: "0 0 20px", fontSize: 15, color: "var(--ink-2)", flex: 1 }}>{c.body}</p>
                  <Link href="/services" className="jx-arrow-link">Explore Service <ArrowR s={15} /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className="jx-navy">
        <div aria-hidden className="jx-glow" style={{ top: "10%", left: "-14%" }} />
        <div className="jx-wrap jx-section" style={{ position: "relative" }}>
          <Reveal style={sectionHead}>
            <div>
              <span className="jx-eyebrow">The Ecosystem</span>
              <h2 className="jx-display-lg" style={{ margin: "20px 0 16px", color: "#fff" }}>
                Four products, <span className="jx-accent">one platform.</span>
              </h2>
              <p className="jx-body-lg" style={{ maxWidth: 560, margin: 0, color: "var(--on-navy-2)" }}>Enterprise-grade tools built in-house — sharing one design language, one login experience and one standard of craft.</p>
            </div>
            <Link href="/products" className="jx-arrow-link">
              All products <ArrowR />
            </Link>
          </Reveal>

          <div className="hz-prodgrid">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 80}>
                <article className="jx-card-dark jx-hover" style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <div style={{ position: "relative", padding: "20px 24px 22px", borderBottom: "1px solid var(--line-navy)", background: "var(--navy-900)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {p.tags.map((t) => (
                          <span key={t} className="jx-tag">{t}</span>
                        ))}
                      </div>
                      <span className="jx-icon-tile" style={{ width: 40, height: 40, borderRadius: 10, color: "var(--brand)" }}><Ic d={p.d} /></span>
                    </div>
                    <div style={{ marginTop: 22 }}>
                      <Bars seed={p.seed} />
                    </div>
                  </div>
                  <div style={{ padding: "26px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 className="font-display" style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-.01em", margin: "0 0 10px", color: "#fff" }}>{p.name}</h3>
                    <p className="jx-body" style={{ margin: "0 0 24px", fontSize: 15, color: "var(--on-navy-2)", flex: 1 }}>{p.desc}</p>
                    <div style={{ display: "flex", gap: 10 }}>
                      <Link href="/contact" className="jx-btn jx-btn-primary jx-btn-sm" style={{ flex: 1 }}>Enquire</Link>
                      <Link href="/contact" className="jx-btn jx-btn-ghost jx-btn-sm" style={{ flex: 1 }}>Live Demo</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT + STATS ============ */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="jx-wrap jx-section hz-about">
          <Reveal>
            <span className="jx-eyebrow" style={{ background: "var(--surface)" }}>About Jadvix</span>
            <h2 className="jx-display-lg" style={{ margin: "20px 0 24px", color: "var(--ink)" }}>End-to-end IT solutions that help businesses grow.</h2>
            <p className="jx-body-lg" style={{ margin: "0 0 16px", maxWidth: 560, color: "var(--ink-2)" }}>Based in India and the UK, Jadvix is a full-service IT company serving local and international clients. We don&apos;t just build websites — we craft complete digital ecosystems.</p>
            <p className="jx-body-lg" style={{ margin: 0, maxWidth: 560, color: "var(--ink-2)" }}>Our team combines development, design, marketing and consultancy under one roof, delivering secure, innovative technology that is as reliable as it is creative.</p>
          </Reveal>
          <div className="hz-stats2">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="jx-card jx-hover" style={{ height: "100%", padding: "30px 28px 28px" }}>
                  <div className="font-display jx-num" style={{ fontWeight: 600, fontSize: "clamp(40px,4vw,52px)", lineHeight: 1, letterSpacing: "-.02em", color: "var(--ink)" }}>{s.value}</div>
                  <div aria-hidden style={{ width: 28, height: 2, borderRadius: 2, background: "var(--brand)", margin: "18px 0 12px" }} />
                  <div className="jx-label" style={{ color: "var(--ink-2)" }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="jx-section" style={{ maxWidth: 920, margin: "0 auto", paddingLeft: 24, paddingRight: 24, scrollMarginTop: 90 }}>
        <Reveal>
          <span className="jx-eyebrow">FAQ</span>
          <h2 className="jx-display-lg" style={{ margin: "20px 0 44px", color: "var(--ink)" }}>
            Answers, before you <span className="jx-accent">ask.</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <HomeFaq />
        </Reveal>
      </section>

      {/* ============ CONTACT ============ */}
      <section style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)" }}>
        <div className="jx-wrap jx-section hz-contact">
          <Reveal>
            <span className="jx-eyebrow" style={{ background: "var(--surface)" }}>Get in touch</span>
            <h2 className="jx-display-lg" style={{ margin: "20px 0 20px", color: "var(--ink)" }}>Let&apos;s build the future together.</h2>
            <p className="jx-body-lg" style={{ margin: "0 0 36px", maxWidth: 460, color: "var(--ink-2)" }}>Tell us what you&apos;re planning — a website, an app, an online store or ongoing marketing. Our team in the UK and India replies within one business day.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { href: "mailto:contact@jadvix.uk", text: "contact@jadvix.uk", tag: "", d: ["M2 4h20v16H2z", "m2 7 10 6 10-6"], rect: true },
                { href: "tel:+447355803386", text: "+44 7355 803386", tag: "UK", d: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"] },
                { href: "tel:+919489644108", text: "+91 94896 44108", tag: "IN", d: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"] },
              ].map((c) => (
                <a key={c.href} href={c.href} className="hz-contactlink" style={{ display: "flex", alignItems: "center", gap: 14, color: "var(--ink)", fontWeight: 600, fontSize: 16 }}>
                  <span className="hz-ci" style={{ width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--line)", color: "var(--accent-text)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {c.rect && <rect x="2" y="4" width="20" height="16" rx="2" />}
                      {c.d.map((p, i) => (
                        <path key={i} d={p} />
                      ))}
                    </svg>
                  </span>
                  {c.text}
                  {c.tag && <span className="jx-label" style={{ fontSize: 11.5, color: "var(--ink-2)" }}>{c.tag}</span>}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={90}>
            <HomeContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
