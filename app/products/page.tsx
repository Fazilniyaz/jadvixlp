import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import JxCta from "@/components/JxCta";

export const metadata: Metadata = {
  title: "Our Products — Jadvix Shop, Academy, RotaPay & PayRoto",
  description:
    "Discover the Jadvix product ecosystem: Jadvix Shop, Jadvix Academy learning platform, RotaPay workforce & pay management, and PayRoto payments — enterprise-grade tools built in-house.",
  alternates: { canonical: "/products" },
};

const F = "var(--font-display),system-ui,sans-serif";
const MONO = "var(--font-label),system-ui,sans-serif";

function Ic({ d }: { d: string[] }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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
  { name: "Jadvix Shop", tags: ["Web App", "Ecommerce"], desc: "A curated marketplace for digital products and services — built for modern businesses that want to launch and sell fast.", previewBg: "radial-gradient(120% 120% at 0% 0%,#0b3b5c,#006591)", glow: "radial-gradient(circle at 75% 25%,rgba(57,184,253,.45),transparent 60%)", d: ["M6 6h15l-1.5 9h-12z", "M6 6 5 2H2", "M9 20h.01", "M18 20h.01"], seed: 3, accent: "#39b8fd" },
  { name: "Jadvix Academy", tags: ["Platform", "Education"], desc: "Practical learning paths in IT, digital marketing and design — with internships on real projects and a route into the Jadvix team.", previewBg: "radial-gradient(120% 120% at 0% 0%,#006591,#39b8fd)", glow: "radial-gradient(circle at 75% 25%,rgba(255,255,255,.35),transparent 60%)", d: ["M22 10 12 5 2 10l10 5 10-5z", "M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"], seed: 5, accent: "#ffffff" },
  { name: "RotaPay", tags: ["SaaS", "Workforce"], desc: "Shift, rota and pay management for teams — schedule work, track earnings and generate reports from one clean dashboard.", previewBg: "radial-gradient(120% 120% at 0% 0%,#00253e,#0b3b5c)", glow: "radial-gradient(circle at 75% 25%,rgba(255,124,57,.4),transparent 60%)", d: ["M3 3v18h18", "M7 15l3-4 3 2 4-6"], seed: 3, accent: "#ff7c39" },
  { name: "PayRoto", tags: ["Web App", "B2B"], desc: "Fast, simple payment workflows for growing businesses — reconciliation and reporting without the spreadsheet chaos.", previewBg: "radial-gradient(120% 120% at 0% 0%,#642400,#ff7c39)", glow: "radial-gradient(circle at 75% 25%,rgba(255,219,205,.45),transparent 60%)", d: ["M13 2 3 14h7l-1 8 10-12h-7z"], seed: 4, accent: "#ffd8c5" },
];

const chip: CSSProperties = { display: "inline-block", fontFamily: MONO, fontSize: 11.5, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, color: "var(--teal)", border: "1px solid var(--border)", padding: "7px 14px", borderRadius: "var(--radius-md)" };
const btnMono: CSSProperties = { flex: 1, textAlign: "center", fontFamily: MONO, fontSize: 11.5, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 600, padding: "12px 0", borderRadius: "var(--radius-md)" };

export default function ProductsPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .pr-btn-navy:hover{background:var(--navy-2)!important}
        .pr-btn-ghost:hover{border-color:var(--accent)!important;color:var(--accent)!important}
        @media(max-width:900px){.pr-hero{grid-template-columns:1fr!important}.pr-grid{grid-template-columns:1fr!important}}
      `,
        }}
      />

      {/* HERO */}
      <section className="pr-hero" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 60px", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 56, alignItems: "center" }}>
        <div>
          <span style={chip}>Innovation Hub</span>
          <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: "clamp(38px,5vw,66px)", lineHeight: 1.03, letterSpacing: "-.025em", margin: "24px 0 0", color: "var(--ink)", textWrap: "balance" } as CSSProperties}>
            Propelling <span style={{ color: "var(--accent)" }}>digital</span> futures.
          </h1>
          <p style={{ maxWidth: 520, margin: "22px 0 0", fontSize: 18, lineHeight: 1.6, color: "var(--ink-2)" }}>
            Explore our ecosystem of tools designed to simplify complex workflows, accelerate growth and put enterprise-grade software in reach of every business.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <Link href="/contact" className="pr-btn-navy" style={{ background: "var(--navy)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: "var(--radius-md)" }}>Talk to Us</Link>
            <Link href="/ideas" className="pr-btn-ghost" style={{ border: "1px solid var(--border)", color: "var(--ink)", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: "var(--radius-md)", background: "var(--surface)" }}>Join Academy</Link>
          </div>
        </div>
        <div style={{ position: "relative" }} aria-hidden>
          <div style={{ position: "relative", aspectRatio: "1", borderRadius: "var(--radius-md)", overflow: "hidden", background: "radial-gradient(120% 120% at 30% 20%,#0b3b5c,#00253e 60%,#001322)", boxShadow: "var(--shadow-lg)", border: "1px solid rgba(255,255,255,.12)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 30%,rgba(57,184,253,.4),transparent 55%),radial-gradient(circle at 75% 70%,rgba(255,124,57,.32),transparent 50%)" }} />
            <div className="animate-spin-slow" style={{ position: "absolute", left: "50%", top: "50%", width: 190, height: 190, transform: "translate(-50%,-50%) rotate(45deg)", border: "1.5px solid rgba(255,255,255,.22)", borderRadius: "var(--radius-md)" }} />
            <div style={{ position: "absolute", left: "50%", top: "50%", width: 96, height: 96, transform: "translate(-50%,-50%) rotate(45deg)", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,.1)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,.2)" }} />
          </div>
          <div className="jx-float" style={{ position: "absolute", bottom: -22, left: -18, display: "flex", alignItems: "center", gap: 14, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "16px 20px", boxShadow: "var(--shadow-lg)" }}>
            <span style={{ width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "var(--accent)", color: "#fff" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>
            </span>
            <div>
              <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>Built In-House</div>
              <div style={{ fontFamily: F, fontWeight: 600, fontSize: 22, color: "var(--ink)" }}>4 Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section style={{ background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 90px" }}>
          <div style={{ marginBottom: 44 }}>
            <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--teal)", fontWeight: 600 }}>Our Ecosystem</div>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", letterSpacing: "-.02em", margin: "14px 0 0", color: "var(--ink)" }}>One design language, four products.</h2>
          </div>
          <div className="pr-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22 }}>
            {PRODUCTS.map((p) => (
              <article key={p.name} className="jx-card" style={{ display: "flex", flexDirection: "column", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", boxShadow: "var(--shadow)", overflow: "hidden" }}>
                <div style={{ position: "relative", height: 180, overflow: "hidden", background: p.previewBg }} aria-hidden>
                  <div style={{ position: "absolute", inset: 0, background: p.glow }} />
                  <div style={{ position: "absolute", left: 24, right: 24, bottom: 0, top: 30, borderRadius: "5px 5px 0 0", border: "1px solid rgba(255,255,255,.2)", background: "linear-gradient(160deg,rgba(255,255,255,.15),rgba(255,255,255,.03))", backdropFilter: "blur(4px)", padding: "15px 17px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.72)" }}>{p.name}</span>
                      <span style={{ width: 28, height: 28, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,.16)", color: "#fff" }}>
                        <Ic d={p.d} />
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 56, marginTop: 16 }}>
                      <Bars seed={p.seed} accent={p.accent} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: 18, top: 16, display: "flex", gap: 7 }}>
                    {p.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 600, background: "rgba(255,255,255,.94)", color: "#00253e", padding: "4px 9px", borderRadius: "var(--radius-md)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: 26, display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 24, letterSpacing: "-.01em", margin: "0 0 8px", color: "var(--ink)" }}>{p.name}</h3>
                  <p style={{ margin: "0 0 24px", fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)", flex: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 12, paddingTop: 18, borderTop: "1px solid var(--border)" }}>
                    <Link href="/contact" className="pr-btn-navy" style={{ ...btnMono, background: "var(--navy)", color: "#fff" }}>Enquire Now</Link>
                    <Link href="/contact" className="pr-btn-ghost" style={{ ...btnMono, border: "1px solid var(--border)", color: "var(--ink)" }}>Request Demo</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingTop: 90 }}>
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
