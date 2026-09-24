"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products", count: "04" }, // four products on /products
  { href: "/ideas", label: "Ideas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  useEffect(() => setOpen(false), [pathname]);

  // Scroll state via IntersectionObserver on a top-of-page sentinel (no scroll listener).
  useEffect(() => {
    const el = sentinel.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div ref={sentinel} aria-hidden style={{ position: "absolute", top: 0, left: 0, width: 1, height: 48, pointerEvents: "none" }} />
      <header className="jx-hdr" data-scrolled={scrolled}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .jx-hdr{position:sticky;top:0;z-index:50;padding:16px 16px 0;pointer-events:none}
        html[data-theme="dark"] .jx-logo-on-light{display:none!important}
        html:not([data-theme="dark"]) .jx-logo-on-dark{display:none!important}
        .jx-pill{pointer-events:auto;position:relative;max-width:1180px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:10px 10px 10px 20px;border:1px solid var(--line);border-radius:999px;background:color-mix(in srgb,var(--surface) 88%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:var(--shadow-sm);transform-origin:top center;transition:transform .45s var(--ease);animation:jx-settle .8s var(--ease) backwards}
        .jx-pill::after{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:var(--shadow-md);opacity:.6;transition:opacity .45s var(--ease);pointer-events:none}
        .jx-hdr[data-scrolled="true"] .jx-pill{transform:translateY(-6px) scale(.985)}
        .jx-hdr[data-scrolled="true"] .jx-pill::after{opacity:1}
        .jx-nav{display:flex;align-items:center;gap:2px}
        .jx-navlink{position:relative;display:inline-flex;align-items:flex-start;gap:3px;padding:9px 14px;font-family:var(--font-label),system-ui,sans-serif;font-size:13px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2);white-space:nowrap;transition:color .25s var(--ease)}
        .jx-navlink::before{content:"";position:absolute;inset:0;border-radius:999px;background:var(--surface-2);opacity:0;transition:opacity .25s var(--ease);z-index:-1}
        .jx-navlink:hover{color:var(--ink)}
        .jx-navlink:hover::before{opacity:.7}
        .jx-navlink[aria-current="page"]{color:var(--ink)}
        .jx-navlink[aria-current="page"]::before{opacity:1}
        .jx-navlink sup{font-size:9.5px;line-height:1;letter-spacing:.04em;color:var(--accent-text);margin-top:-2px}
        .jx-iconbtn{display:grid;place-items:center;width:40px;height:40px;border:1px solid var(--line);border-radius:999px;background:var(--surface);color:var(--ink);cursor:pointer;transition:border-color .25s var(--ease),transform .25s var(--ease)}
        .jx-iconbtn:hover{border-color:var(--brand)}
        .jx-mobile{pointer-events:auto;position:absolute;left:16px;right:16px;top:calc(100% + 8px);max-width:1180px;margin:0 auto;padding:8px 18px;border:1px solid var(--line);border-radius:24px;background:var(--surface);box-shadow:var(--shadow-md);opacity:0;visibility:hidden;transform:translateY(-8px);transition:opacity .3s var(--ease),transform .3s var(--ease),visibility 0s linear .3s}
        .jx-mobile[data-open="true"]{opacity:1;visibility:visible;transform:none;transition:opacity .3s var(--ease),transform .3s var(--ease),visibility 0s}
        .jx-mobile-link{display:block;padding:14px 4px;font-size:16px;font-weight:500;color:var(--ink-2);border-bottom:1px solid var(--line)}
        .jx-mobile-link:last-child{border-bottom:0}
        .jx-mobile-link[aria-current="page"]{color:var(--ink);font-weight:700}
        @media(max-width:1060px){.jx-nav{display:none!important}.jx-burger{display:grid!important}}
        @media(max-width:520px){.jx-hdr-cta{display:none!important}.jx-pill{padding-left:16px}}
      `,
          }}
        />
        <nav className="jx-pill" aria-label="Main">
          <Link href="/" aria-label="Jadvix — home" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/jadvix-logo.svg" alt="Jadvix" className="jx-logo-on-light" style={{ height: 28, display: "block" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/jadvix-logo-light.svg" alt="Jadvix" className="jx-logo-on-dark" style={{ height: 28, display: "block" }} />
          </Link>

          <div className="jx-nav" style={{ isolation: "isolate" }}>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className="jx-navlink">
                {l.label}
                {l.count && <sup aria-hidden>{l.count}</sup>}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <ThemeToggle />
            <Link href="/contact" className="jx-btn jx-btn-ink jx-btn-sm jx-hdr-cta">
              Get a Free Quote <ArrowUpRight />
            </Link>
            <button
              type="button"
              className="jx-burger jx-iconbtn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              style={{ display: "none" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu (animates with transform/opacity only) */}
        <div className="jx-mobile" data-open={open}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className="jx-mobile-link" tabIndex={open ? undefined : -1}>
              {l.label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
