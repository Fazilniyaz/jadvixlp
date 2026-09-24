"use client";

import { useState } from "react";

const FAQS = [
  { q: "Where is Jadvix based?", a: "We operate from two offices — Ruislip in the United Kingdom and Chennai in India — serving local and international clients across both time zones." },
  { q: "What services does Jadvix offer?", a: "End-to-end IT: website design & development, mobile & web apps, ecommerce, custom software, digital marketing & SEO, design, video editing and consultancy." },
  { q: "How long does a typical website project take?", a: "A standard business website usually takes 2–6 weeks depending on scope. Larger applications are planned in milestones, with a clear timeline agreed before work begins." },
  { q: "Do you provide post-launch support?", a: "Yes — every build can ship with monitoring, maintenance and support so your product stays fast, secure and up to date long after launch." },
  { q: "How do you keep projects secure?", a: "Security is built into every layer: secure coding, encrypted connections, access controls and regular updates. It is one of the four words in our name for a reason." },
  { q: "What is Jadvix Academy?", a: "Our training and internship programme — learn practical skills, apply them on real projects, and top performers join the Jadvix team." },
];

export function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      style={{
        flexShrink: 0,
        width: 32,
        height: 32,
        display: "grid",
        placeItems: "center",
        borderRadius: 999,
        border: "1px solid",
        borderColor: open ? "var(--brand)" : "var(--line)",
        color: open ? "var(--accent-text)" : "var(--ink-2)",
        transition: "border-color .25s var(--ease), color .25s var(--ease)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform .3s var(--ease)" }}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    </span>
  );
}

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} style={{ borderTop: "1px solid var(--line)" }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "24px 2px", color: "var(--ink)", fontFamily: "var(--font-body),system-ui,sans-serif", fontSize: 18, fontWeight: 600 }}
            >
              <span>{f.q}</span>
              <PlusIcon open={isOpen} />
            </button>
            {isOpen && <p className="jx-fade-in" style={{ margin: 0, padding: "0 2px 26px", maxWidth: 700, fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>{f.a}</p>}
          </div>
        );
      })}
      <div style={{ borderTop: "1px solid var(--line)" }} />
    </div>
  );
}
