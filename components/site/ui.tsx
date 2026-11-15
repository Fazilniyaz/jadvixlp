import Link from "next/link";
import type { ReactNode } from "react";
import Chrome3D from "@/components/site/Chrome3D";
import type { Shape } from "@/lib/chrome3d";

/* ---------- icons ---------- */
export function ArrowUR({ s = 14 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
export function ArrowR({ s = 20 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
/** Four-point spark, the bullet used across lists and marquees. */
export function Spark({ s = 14, className = "" }: { s?: number; className?: string }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 0c.9 6.6 4.5 10.200 12 12-7.500 1.800-11.100 5.400-12 12-.9-6.600-4.500-10.200-12-12C7.500 10.200 11.100 6.600 12 0z" />
    </svg>
  );
}
/** Eight-point burst for the closing marquee. */
export function Burst() {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden>
      <path d="M50 0l8 31 27-17-17 27 32 9-32 9 17 27-27-17-8 31-8-31-27 17 17-27L0 50l32-9-17-27 27 17z" />
    </svg>
  );
}

/* ---------- pill button ---------- */
export function Btn({
  href,
  children,
  variant = "",
  external = false,
  className = "",
}: {
  href: string;
  children: string;
  variant?: "" | "ink" | "soft";
  external?: boolean;
  className?: string;
}) {
  const cls = `btn${variant ? ` btn--${variant}` : ""} ${className}`;
  const inner = (
    <>
      <span className="btn__label">
        <span data-t={children}>{children}</span>
      </span>
      <span className="btn__dot">
        <ArrowUR />
      </span>
    </>
  );
  if (external || /^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ---------- section heading: eyebrow + offset two-line title ---------- */
export function SectionHead({ eyebrow, l1, l2, shape, center = false }: { eyebrow: string; l1: string; l2?: string; shape?: Shape; center?: boolean }) {
  return (
    <div className={`shead shead__row${center ? " shead--center" : ""}`}>
      <span className="eyebrow" data-fade>
        {eyebrow}
      </span>
      <h2 className="h-sec" data-reveal>
        <span className="l1">{l1}</span>
        {l2 && <span className="l2">{l2}</span>}
      </h2>
      {shape && <Chrome3D shape={shape} />}
    </div>
  );
}

/* ---------- inner page hero ---------- */
export function PageHero({ title, crumbs, shape = "gyro" }: { title: string; crumbs: { label: string; href?: string }[]; shape?: Shape }) {
  return (
    <section className="phero">
      <div className="phero__topline" />
      <div className="wrap" style={{ position: "relative" }}>
        <nav className="crumb" aria-label="Breadcrumb" data-fade>
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} style={{ display: "contents" }}>
              <i />
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </nav>
        <div className="phero__rule" />
        <h1 className={title.length > 16 ? "is-long" : ""} data-reveal="load">
          {title}
        </h1>
      </div>
      <Chrome3D shape={shape} />
    </section>
  );
}

/* ---------- photo frame ---------- */
export function Frame({ src, alt = "", className = "", parallax, line = false, priority = false }: { src: string; alt?: string; className?: string; parallax?: number; line?: boolean; priority?: boolean }) {
  return (
    <div className={`frame${line ? " frame--line" : ""} ${className}`} data-clip>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" {...(parallax ? { "data-parallax": parallax, style: { transform: "scale(1.16)" } } : {})} />
    </div>
  );
}

/* ---------- lists ---------- */
export function PlusList({ items }: { items: string[] }) {
  return (
    <ul className="pluslist">
      {items.map((b) => (
        <li key={b}>
          <Spark s={12} />
          {b}
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items, label = "Step", cols = 4 }: { items: { title: string; body: string }[]; label?: string; cols?: 3 | 4 }) {
  return (
    <div className={`steps${cols === 3 ? " steps--3" : ""}`}>
      {items.map((s, i) => {
        const n = String(i + 1).padStart(2, "0");
        return (
          <article key={s.title} className="step" data-fade data-delay={i * 0.08}>
            <span className="step__k">
              {label} - {n}
            </span>
            <span className="step__n" aria-hidden>
              {n}
            </span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        );
      })}
    </div>
  );
}

export function Ruler() {
  return (
    <div className="wrap">
      <div className="ruler" aria-hidden />
    </div>
  );
}

export function Stat({ value, suffix }: { value: number; suffix: string }) {
  return (
    <>
      <span data-count={value}>{value}</span>
      {suffix && <small>{suffix}</small>}
    </>
  );
}

export function Wrap({ children }: { children: ReactNode }) {
  return <div className="wrap">{children}</div>;
}
