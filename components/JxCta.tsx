import Link from "next/link";

const F = "var(--font-display),system-ui,sans-serif";

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
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-xl)", background: "linear-gradient(155deg,#0b3b5c 0%,#00253e 62%,#001322 100%)", color: "#fff", padding: "72px 24px", textAlign: "center" }}>
        <div aria-hidden style={{ position: "absolute", bottom: "-40%", right: "-8%", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle,rgba(57,184,253,.22),transparent 68%)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: "clamp(30px,4vw,50px)", lineHeight: 1.06, letterSpacing: "-.02em", margin: "0 auto 18px", maxWidth: 760, textWrap: "balance" } as React.CSSProperties}>
            {title}
          </h2>
          <p style={{ maxWidth: 560, margin: "0 auto 32px", fontSize: 17, lineHeight: 1.6, color: "rgba(206,229,255,.85)" }}>{body}</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={primaryHref} className="jx-lift" style={{ background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: "var(--radius-sm)", boxShadow: "0 14px 32px -8px rgba(255,124,57,.5)" }}>
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="jx-cta-ghost" style={{ border: "1px solid rgba(255,255,255,.3)", background: "rgba(255,255,255,.07)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: "var(--radius-sm)" }}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.jx-cta-ghost:hover{background:rgba(255,255,255,.15)!important;color:#fff!important}` }} />
    </section>
  );
}
