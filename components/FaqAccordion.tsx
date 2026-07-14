"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/Icon";

export type FaqItem = { question: string; answer: string; category: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
    );
  }, [items, query]);

  const categories = useMemo(() => Array.from(new Set(filtered.map((i) => i.category))), [filtered]);

  return (
    <div>
      {/* Search */}
      <div className="group relative mb-12 max-w-2xl">
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-outline transition-colors group-focus-within:text-secondary">
          <Icon name="search" className="h-5 w-5" />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs, services or technical topics…"
          aria-label="Search frequently asked questions"
          className="w-full rounded-xl border border-outline-variant bg-white py-5 pl-14 pr-6 text-body-md shadow-sm transition-all focus:border-secondary-container focus:outline-none focus:ring-2 focus:ring-secondary-container/20"
        />
      </div>

      {filtered.length === 0 && (
        <p className="rounded-2xl border border-outline-variant/30 bg-white p-8 text-body-md text-ink-muted">
          No results for &ldquo;{query}&rdquo;. Try a different term, or{" "}
          <a href="/contact" className="font-semibold text-secondary underline">
            ask us directly
          </a>
          .
        </p>
      )}

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <div className="mb-8">
            <h2 className="mb-3 text-headline-lg text-primary">{category}</h2>
            <div className="h-1 w-20 rounded-full bg-accent" />
          </div>
          <div className="space-y-4">
            {filtered.map((item, index) => {
              if (item.category !== category) return null;
              const globalIndex = items.indexOf(item);
              const open = openIndex === globalIndex;
              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-outline-variant/30 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : globalIndex)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-headline-md text-primary">{item.question}</span>
                    <span className={`shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                      <Icon name="arrow-up-right" className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-body-md text-ink-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
