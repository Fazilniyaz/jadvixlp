import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "var(--section-gap) 24px", background: "var(--bg)" }}>
      <span className="jx-eyebrow jx-rise">404</span>
      <h1 className="jx-display-lg jx-rise" style={{ ["--d" as string]: "80ms", margin: "22px 0 16px", color: "var(--ink)" } as React.CSSProperties}>Page not found</h1>
      <p className="jx-body-lg jx-rise" style={{ ["--d" as string]: "160ms", maxWidth: 440, margin: "0 0 34px", color: "var(--ink-2)" } as React.CSSProperties}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="jx-btn jx-btn-spark jx-rise" style={{ ["--d" as string]: "240ms" } as React.CSSProperties}>
        Back to Home
      </Link>
    </section>
  );
}
