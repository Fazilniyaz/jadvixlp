"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

/**
 * Scroll-reveal wrapper: opacity 0→1, translateY 24→0 once it enters the viewport.
 * `delay` (ms) staggers siblings, e.g. index * 80. Honors prefers-reduced-motion via CSS.
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("reveal-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={`reveal ${className}`} style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}>
      {children}
    </Comp>
  );
}
