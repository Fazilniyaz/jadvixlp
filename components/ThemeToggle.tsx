"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let t: "light" | "dark" = "light";
    try {
      t = (localStorage.getItem("jx-theme") as "light" | "dark") || "light";
    } catch {}
    setTheme(t);
    document.documentElement.dataset.theme = t;
  }, []);

  const toggle = () =>
    setTheme((prev) => {
      const t = prev === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = t;
      try {
        localStorage.setItem("jx-theme", t);
      } catch {}
      return t;
    });

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="jx-lift"
      style={{ display: "grid", placeItems: "center", width: 38, height: 38, border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", background: "var(--surface)", color: "var(--ink)", cursor: "pointer" }}
    >
      {theme === "dark" ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
