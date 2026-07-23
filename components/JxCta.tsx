import Link from "next/link";

const F = "var(--font-fraunces),Fraunces,serif";

export default function JxCta({
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto 90px", padding: "0 24px" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 4, background: "radial-gradient(120% 140% at 80% 0%,#0b3b5c,#00253e 60%,#001322)", color: "#fff", padding: "72px 24px", textAlign: "center" }}>
        <div aria-hidden style={{ position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(circle,rgba(57,184,253,.28),transparent 62%)" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize: "26px 26px", opacity: 0.5 }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(30px,4vw,50px)", lineHeight: 1.06, letterSpacing: "-.02em", margin: "0 auto 18px", maxWidth: 760, textWrap: "balance" } as React.CSSProperties}>
            {title}
          </h2>
          <p style={{ maxWidth: 560, margin: "0 auto 32px", fontSize: 17, lineHeight: 1.6, color: "rgba(206,229,255,.85)" }}>{body}</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={primaryHref} className="jx-lift" style={{ background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 4, boxShadow: "0 14px 32px -8px rgba(255,124,57,.5)" }}>
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="jx-cta-ghost" style={{ border: "1px solid rgba(255,255,255,.3)", background: "rgba(255,255,255,.07)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 4 }}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.jx-cta-ghost:hover{background:rgba(255,255,255,.15)!important;color:#fff!important}` }} />
    </section>
  );
}
