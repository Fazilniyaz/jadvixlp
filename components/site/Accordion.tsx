"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content";

export default function Accordion({ items, grouped = false }: { items: Faq[]; grouped?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  let lastCat = "";
  return (
    <div>
      {items.map((f, i) => {
        const showCat = grouped && f.category !== lastCat;
        lastCat = f.category;
        const isOpen = open === i;
        return (
          <div key={f.q}>
            {showCat && <div className="acc__group">{f.category}</div>}
            <div className="acc__item" data-open={isOpen} data-fade data-delay={Math.min(i, 5) * 0.05}>
              <button type="button" className="acc__btn" aria-expanded={isOpen} aria-controls={`acc-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                <span>{f.q}</span>
                <svg className="acc__ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                  <path d="M12 4v16M4 12h16" />
                </svg>
              </button>
              <div className="acc__panel" id={`acc-${i}`} role="region">
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
