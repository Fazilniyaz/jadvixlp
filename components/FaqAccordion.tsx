"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { PlusIcon } from "@/components/HomeFaq";

export type FaqItem = { question: string; answer: string; category: string };


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

  const catLabel: CSSProperties = { color: "var(--accent-text)" };

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
          style={{ width: "100%", padding: "14px 16px 14px 46px" }}
        />
      </div>

      {filtered.length === 0 && (
        <p className="jx-card" style={{ padding: 24, fontSize: 16, color: "var(--ink-2)", boxShadow: "none" }}>
          No results for &ldquo;{query}&rdquo;. Try a different term, or{" "}
          <a href="/contact" style={{ fontWeight: 600, color: "var(--teal)", textDecoration: "underline" }}>ask us directly</a>.
        </p>
      )}

      {categories.map((category) => (
        <div key={category} style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brand)" }} />
            <span className="jx-label" style={catLabel}>{category}</span>
          </div>
          <div>
            {filtered
              .filter((item) => item.category === category)
              .map((item) => {
                const globalIndex = items.indexOf(item);
                const open = openIndex === globalIndex;
                return (
                  <div key={item.question} style={{ borderTop: "1px solid var(--line)" }}>
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
                        padding: "22px 2px",
                        color: "var(--ink)",
                        fontFamily: "var(--font-body),system-ui,sans-serif",
                        fontSize: 18,
                        fontWeight: 600,
                      }}
                    >
                      <span>{item.question}</span>
                      <PlusIcon open={open} />
                    </button>
                    {open && <p className="jx-fade-in" style={{ margin: 0, padding: "0 2px 24px", maxWidth: 700, fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>{item.answer}</p>}
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
