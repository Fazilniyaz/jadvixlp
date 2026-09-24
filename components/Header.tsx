"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/ideas", label: "Ideas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const linkBase: React.CSSProperties = {
    fontFamily: "var(--font-label),system-ui,sans-serif",
    fontSize: 13,
    letterSpacing: ".03em",
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "color-mix(in srgb,var(--surface) 82%,transparent)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html[data-theme="dark"] .jx-logo-on-light{display:none!important}
        html:not([data-theme="dark"]) .jx-logo-on-dark{display:none!important}
        .jx-navlink:hover{color:var(--ink)!important}
        @media(max-width:860px){.jx-desktop-nav{display:none!important}.jx-burger{display:grid!important}}
      `,
        }}
      />
      <nav className="jx-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, paddingTop: 14, paddingBottom: 14 }}>
        <Link href="/" aria-label="Jadvix — home" style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/jadvix-logo.svg" alt="Jadvix" className="jx-logo-on-light" style={{ height: 30, display: "block" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/jadvix-logo-light.svg" alt="Jadvix" className="jx-logo-on-dark" style={{ height: 30, display: "block" }} />
        </Link>

        <div className="jx-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {LINKS.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className="jx-navlink"
                style={{
                  ...linkBase,
                  fontWeight: active ? 600 : 500,
                  color: active ? "var(--ink)" : "var(--ink-2)",
                  borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                  paddingBottom: 3,
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ThemeToggle />
          <button
            type="button"
            className="jx-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{ display: "none", placeItems: "center", width: 38, height: 38, border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", background: "var(--surface)", color: "var(--ink)", cursor: "pointer" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{ overflow: "hidden", maxHeight: open ? 360 : 0, transition: "max-height .3s ease", borderTop: open ? "1px solid var(--border)" : "none", background: "var(--surface)" }}>
        <div className="jx-wrap" style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 12, paddingBottom: 12 }}>
          {LINKS.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{ ...linkBase, fontWeight: active ? 600 : 500, color: active ? "var(--ink)" : "var(--ink-2)", padding: "12px 4px", borderBottom: "1px solid var(--border)" }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
