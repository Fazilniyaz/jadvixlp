import Link from "next/link";
import type { CSSProperties } from "react";

const F = "var(--font-display),system-ui,sans-serif";
const MONO = "var(--font-label),system-ui,sans-serif";

export default function NotFound() {
  return (
    <section style={{ minHeight: "56vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "100px 24px", background: "var(--bg)" }}>
      <span style={{ fontFamily: MONO, fontSize: 12.5, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, color: "var(--teal)" } as CSSProperties}>404</span>
      <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: "clamp(34px,4.4vw,52px)", letterSpacing: "-.02em", margin: "16px 0 14px", color: "var(--ink)" }}>Page not found</h1>
      <p style={{ maxWidth: 420, margin: "0 0 32px", fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="jx-lift" style={{ background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: "var(--radius-sm)" }}>
        Back to Home
      </Link>
    </section>
  );
}
