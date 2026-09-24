import Link from "next/link";
import Reveal from "@/components/Reveal";

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
    <section className="jx-wrap" style={{ paddingBottom: "var(--section-gap)" }}>
      <Reveal>
        <div className="jx-navy jx-panel" style={{ padding: "clamp(64px,9vw,112px) 24px", textAlign: "center" }}>
          <div aria-hidden className="jx-glow" style={{ bottom: "-60%", right: "-10%" }} />
          <div style={{ position: "relative" }}>
            <h2 className="jx-display-lg" style={{ margin: "0 auto 20px", maxWidth: 780, color: "#fff" }}>
              {title}
            </h2>
            <p className="jx-body-lg" style={{ maxWidth: 580, margin: "0 auto 36px", color: "var(--on-navy-2)" }}>{body}</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={primaryHref} className="jx-btn jx-btn-spark">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="jx-btn jx-btn-ghost">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
