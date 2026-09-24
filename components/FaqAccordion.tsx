"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";

export type FaqItem = { question: string; answer: string; category: string };

const MONO = "var(--font-label),system-ui,sans-serif";
const F = "var(--font-display),system-ui,sans-serif";

function SearchIc() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" />
    </svg>
  );
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q));
  }, [items, query]);

  const categories = useMemo(() => Array.from(new Set(filtered.map((i) => i.category))), [filtered]);

  const catLabel: CSSProperties = { fontFamily: MONO, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--teal)", fontWeight: 600 };

  return (
    <div>
      <div style={{ position: "relative", marginBottom: 40, maxWidth: 480 }}>
        <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }} aria-hidden>
          <SearchIc />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs, services or topics…"
          aria-label="Search frequently asked questions"
          style={{ width: "100%", padding: "13px 16px 13px 46px", borderRadius: "var(--radius-md)" }}
        />
      </div>

      {filtered.length === 0 && (
        <p style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface)", padding: 24, fontSize: 15, color: "var(--ink-2)" }}>
          No results for &ldquo;{query}&rdquo;. Try a different term, or{" "}
          <a href="/contact" style={{ fontWeight: 600, color: "var(--teal)", textDecoration: "underline" }}>ask us directly</a>.
        </p>
      )}

      {categories.map((category) => (
        <div key={category} style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
            <span style={catLabel}>{category}</span>
          </div>
          <div>
            {filtered
              .filter((item) => item.category === category)
              .map((item) => {
                const globalIndex = items.indexOf(item);
                const open = openIndex === globalIndex;
                return (
                  <div key={item.question} style={{ borderTop: "1px solid var(--border)" }}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : globalIndex)}
                      aria-expanded={open}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 20,
                        textAlign: "left",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "20px 4px",
                        color: "var(--ink)",
                        fontFamily: F,
                        fontSize: 17,
                        fontWeight: 600,
                      }}
                    >
                      <span>{item.question}</span>
                      <span style={{ flexShrink: 0, color: open ? "var(--accent)" : "var(--muted)", fontFamily: MONO, fontSize: 22, lineHeight: 1 }}>{open ? "−" : "+"}</span>
                    </button>
                    {open && <p style={{ margin: 0, padding: "0 4px 22px", maxWidth: 700, fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)" }}>{item.answer}</p>}
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
