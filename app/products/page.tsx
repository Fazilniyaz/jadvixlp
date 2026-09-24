import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import JxCta from "@/components/JxCta";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Products — Jadvix Shop, Academy, RotaPay & PayRoto",
  description:
    "Discover the Jadvix product ecosystem: Jadvix Shop, Jadvix Academy learning platform, RotaPay workforce & pay management, and PayRoto payments — enterprise-grade tools built in-house.",
  alternates: { canonical: "/products" },
};

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
  return (
    <svg width="100%" height="60" viewBox="0 0 184 56" preserveAspectRatio="xMinYMax meet" aria-hidden>
      {BAR_H.map((v, i) => {
        const h = (v / 100) * 54;
        return <rect key={i} x={1 + i * 32} y={55 - h} width={20} height={h} rx={4} fill={i === seed ? "var(--brand)" : "none"} stroke="var(--brand)" strokeOpacity={i === seed ? 1 : 0.45} strokeWidth={1.5} />;
      })}
    </svg>
  );
}

const PRODUCTS = [
  { name: "Jadvix Shop", tags: ["Web App", "Ecommerce"], desc: "A curated marketplace for digital products and services — built for modern businesses that want to launch and sell fast.", d: ["M6 6h15l-1.5 9h-12z", "M6 6 5 2H2", "M9 20h.01", "M18 20h.01"], seed: 3 },
  { name: "Jadvix Academy", tags: ["Platform", "Education"], desc: "Practical learning paths in IT, digital marketing and design — with internships on real projects and a route into the Jadvix team.", d: ["M22 10 12 5 2 10l10 5 10-5z", "M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"], seed: 5 },
  { name: "RotaPay", tags: ["SaaS", "Workforce"], desc: "Shift, rota and pay management for teams — schedule work, track earnings and generate reports from one clean dashboard.", d: ["M3 3v18h18", "M7 15l3-4 3 2 4-6"], seed: 3 },
  { name: "PayRoto", tags: ["Web App", "B2B"], desc: "Fast, simple payment workflows for growing businesses — reconciliation and reporting without the spreadsheet chaos.", d: ["M13 2 3 14h7l-1 8 10-12h-7z"], seed: 4 },
];

const art = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function ProductsPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .pr-hero{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:64px;align-items:center}
        .pr-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
        @media(max-width:900px){.pr-hero,.pr-grid{grid-template-columns:1fr}.pr-hero{gap:56px}}
      `,
        }}
      />

      {/* HERO */}
      <section className="jx-wrap pr-hero" style={{ paddingTop: "clamp(72px,10vh,120px)", paddingBottom: "clamp(80px,11vh,130px)" }}>
        <div>
          <span className="jx-eyebrow jx-rise">Innovation Hub</span>
          <h1 className="jx-display-xl jx-rise" style={{ ["--d" as string]: "80ms", margin: "24px 0 0", color: "var(--ink)" } as CSSProperties}>
            Propelling <span className="jx-accent">digital</span> futures.
          </h1>
          <p className="jx-body-lg jx-rise" style={{ ["--d" as string]: "200ms", maxWidth: 540, margin: "24px 0 0", color: "var(--ink-2)" } as CSSProperties}>
            Explore our ecosystem of tools designed to simplify complex workflows, accelerate growth and put enterprise-grade software in reach of every business.
          </p>
          <div className="jx-rise" style={{ ["--d" as string]: "320ms", display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" } as CSSProperties}>
            <Link href="/contact" className="jx-btn jx-btn-spark">Talk to Us</Link>
            <Link href="/ideas" className="jx-btn jx-btn-ghost">Join Academy</Link>
          </div>
        </div>
        <div className="jx-rise" style={{ ["--d" as string]: "240ms", position: "relative" } as CSSProperties} aria-hidden>
          <div className="jx-navy jx-panel" style={{ aspectRatio: "1", boxShadow: "var(--shadow-glow)", color: "var(--brand)" }}>
            <div className="jx-glow" style={{ top: "-30%", left: "-30%" }} />
            <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
              <g {...art}>
                <g className="jx-spin">
                  <rect x="120" y="120" width="160" height="160" rx="20" transform="rotate(45 200 200)" strokeOpacity=".4" />
                </g>
                <rect x="160" y="160" width="80" height="80" rx="14" transform="rotate(45 200 200)" strokeOpacity=".9" />
                <circle cx="200" cy="200" r="150" strokeOpacity=".18" strokeDasharray="2 8" />
              </g>
            </svg>
          </div>
          <div className="jx-card" style={{ position: "absolute", bottom: -26, left: -20, display: "flex", alignItems: "center", gap: 14, padding: "16px 20px" }}>
            <span className="jx-icon-tile" style={{ width: 44, height: 44 }}>
              <Ic s={20} d={["M13 2 3 14h7l-1 8 10-12h-7z"]} />
            </span>
            <div>
              <div className="jx-label" style={{ fontSize: 11, color: "var(--ink-2)" }}>Built In-House</div>
              <div className="font-display" style={{ fontWeight: 600, fontSize: 22, color: "var(--ink)" }}>4 Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="jx-wrap jx-section">
          <Reveal style={{ marginBottom: 52 }}>
            <span className="jx-eyebrow" style={{ background: "var(--surface)" }}>Our Ecosystem</span>
            <h2 className="jx-display-lg" style={{ margin: "20px 0 0", color: "var(--ink)" }}>One design language, four products.</h2>
          </Reveal>
          <div className="pr-grid">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 80}>
                <article className="jx-card jx-hover" style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <div className="jx-art" style={{ padding: "22px 26px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {p.tags.map((tag) => (
                          <span key={tag} className="jx-tag">{tag}</span>
                        ))}
                      </div>
                      <span className="jx-icon-tile" style={{ width: 40, height: 40, borderRadius: 10, color: "var(--brand)" }}>
                        <Ic d={p.d} />
                      </span>
                    </div>
                    <div style={{ marginTop: 24 }}>
                      <Bars seed={p.seed} />
                    </div>
                  </div>
                  <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 className="jx-headline" style={{ margin: "0 0 10px", color: "var(--ink)" }}>{p.name}</h3>
                    <p style={{ margin: "0 0 26px", fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)", flex: 1 }}>{p.desc}</p>
                    <div style={{ display: "flex", gap: 10 }}>
                      <Link href="/contact" className="jx-btn jx-btn-primary jx-btn-sm" style={{ flex: 1 }}>Enquire Now</Link>
                      <Link href="/contact" className="jx-btn jx-btn-ghost jx-btn-sm" style={{ flex: 1 }}>Request Demo</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingTop: "var(--section-gap)" }}>
        <JxCta
          title="Ready to build the future?"
          body="Whether you need a custom solution or want to adopt our existing ecosystem, our team is ready to help."
          primaryLabel="Talk to an Expert"
          primaryHref="/contact"
          secondaryLabel="Explore Our Services"
          secondaryHref="/services"
        />
      </div>
    </div>
  );
}
