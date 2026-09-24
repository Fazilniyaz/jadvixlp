"use client";

import { useState } from "react";

const MONO = "var(--font-label),system-ui,sans-serif";

const FAQS = [
  { q: "Where is Jadvix based?", a: "We operate from two offices — Ruislip in the United Kingdom and Chennai in India — serving local and international clients across both time zones." },
  { q: "What services does Jadvix offer?", a: "End-to-end IT: website design & development, mobile & web apps, ecommerce, custom software, digital marketing & SEO, design, video editing and consultancy." },
  { q: "How long does a typical website project take?", a: "A standard business website usually takes 2–6 weeks depending on scope. Larger applications are planned in milestones, with a clear timeline agreed before work begins." },
  { q: "Do you provide post-launch support?", a: "Yes — every build can ship with monitoring, maintenance and support so your product stays fast, secure and up to date long after launch." },
  { q: "How do you keep projects secure?", a: "Security is built into every layer: secure coding, encrypted connections, access controls and regular updates. It is one of the four words in our name for a reason." },
  { q: "What is Jadvix Academy?", a: "Our training and internship programme — learn practical skills, apply them on real projects, and top performers join the Jadvix team." },
];

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} style={{ borderTop: "1px solid var(--border)" }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "22px 4px", color: "var(--ink)", fontSize: 17, fontWeight: 600 }}
            >
              <span>{f.q}</span>
              <span style={{ flexShrink: 0, color: isOpen ? "var(--accent)" : "var(--muted)", fontFamily: MONO, fontSize: 22, lineHeight: 1 }}>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p style={{ margin: 0, padding: "0 4px 24px", maxWidth: 700, fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)" }}>{f.a}</p>}
          </div>
        );
      })}
      <div style={{ borderTop: "1px solid var(--border)" }} />
    </div>
  );
}
