"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Btn } from "@/components/site/ui";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);
  const toggle = () => {
    const t = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("jx-theme", t);
    } catch {}
    setTheme(t);
  };
  return (
    <button type="button" className="iconbtn" onClick={toggle} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
      {theme === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.900 4.900l1.400 1.400M17.700 17.700l1.400 1.400M2 12h2M20 12h2M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400" />
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.800A9 9 0 1 1 11.200 3a7 7 0 0 0 9.800 9.800z" />
        </svg>
      )}
    </button>
  );
}

function Logo() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/jadvix-logo.svg" alt="Jadvix" className="logo-dark" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/jadvix-logo-light.svg" alt="" aria-hidden className="logo-light" />
    </>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [hide, setHide] = useState(false);
  const last = useRef(0);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 40);
      // Tuck away while reading down, return on the way up.
      setHide(y > 700 && y > last.current);
      last.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="hdr" data-tone={pathname === "/" ? "hero" : "default"} data-stuck={stuck} data-hide={hide && !open}>
        <div className="wrap hdr__in">
          <Link href="/" className="hdr__logo" aria-label="Jadvix — home">
            <Logo />
          </Link>
          <nav className="hdr__nav" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hdr__link" aria-current={isActive(l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hdr__act">
            <ThemeToggle />
            <Btn href="/contact" className="hdr__cta">
              Book a call
            </Btn>
            <button type="button" className="iconbtn burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                <path d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="offc" data-open={open} aria-hidden={!open}>
        <div className="offc__top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/jadvix-logo-light.svg" alt="Jadvix" style={{ height: 30 }} />
          <button type="button" className="iconbtn" aria-label="Close menu" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <nav className="offc__nav" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <Link key={l.href} href={l.href} className="offc__link" aria-current={isActive(l.href) ? "page" : undefined} tabIndex={open ? 0 : -1}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="offc__foot">
          <a href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1}>{SITE.email}</a>
          <a href={SITE.offices.uk.phoneHref} tabIndex={open ? 0 : -1}>{SITE.phoneUK}</a>
          <a href={SITE.offices.india.phoneHref} tabIndex={open ? 0 : -1}>{SITE.phoneIN}</a>
        </div>
      </div>
    </>
  );
}
