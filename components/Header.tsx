"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/90 shadow-sm backdrop-blur-md">
      <nav className="container-jx flex items-center justify-between py-4" aria-label="Main navigation">
        <Link href="/" aria-label="Jadvix — home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "border-b-2 border-accent pb-1 text-label-md font-bold text-primary"
                    : "text-label-md font-semibold text-ink-muted transition-colors hover:text-primary"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-primary px-6 py-2.5 text-label-md font-semibold text-white transition-all hover:opacity-90 active:scale-95 sm:block"
          >
            Get in Touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-primary transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-primary transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-outline-variant/30 bg-surface transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[480px]" : "max-h-0 border-t-0"
        }`}
      >
        <div className="container-jx flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-label-md font-semibold ${
                  active ? "bg-primary/5 text-primary" : "text-ink-muted hover:bg-surface-low hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-label-md font-semibold text-white sm:hidden"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
