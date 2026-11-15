"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

/**
 * The site's motion engine. Pages opt in with data attributes, so sections stay
 * server-rendered and readable without JS:
 *   data-fade [data-delay]   rise + fade on enter
 *   data-reveal              heading whose letters light up as you scroll
 *   data-stack               sticky cards that tip back as the next one arrives
 *   data-rotate-in           section that unfolds in 3D as it enters
 *   data-count="24"          number counts up on enter
 *   data-parallax="0.15"     drifts against the scroll
 *   data-tilt                leans towards the pointer in 3D
 *   data-drift="-1|1"        marquee row pushed sideways by the scroll
 *   data-rail                horizontal card rail driven by the scroll
 */
export default function Motion() {
  const pathname = usePathname();

  // Smooth scrolling, once.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, anchors: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  // Per-page animations.
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (!window.location.hash) {
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
      else window.scrollTo(0, 0);
    }
    if (reduced) {
      root.classList.remove("motion");
      return;
    }
    (window as unknown as { __motionReady?: boolean }).__motionReady = true;
    root.classList.add("motion");

    const cleanups: (() => void)[] = [];
    const ctx = gsap.context(() => {
      const desktop = window.matchMedia("(min-width: 861px)").matches;

      // rise + fade
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          delay: parseFloat(el.dataset.delay || "0"),
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      // image wipe
      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        gsap.to(el, { clipPath: "inset(0% 0 0 0)", duration: 1.3, ease: "power4.inOut", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });

      // headings: letters light up with the scroll
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const split = new SplitText(el, { type: "words,chars", charsClass: "rv-char" });
        cleanups.push(() => split.revert());
        const load = el.dataset.reveal === "load";
        gsap.fromTo(
          split.chars,
          { opacity: 0.2 },
          load
            ? { opacity: 1, duration: 0.7, stagger: 0.022, ease: "power2.out", delay: 0.9 }
            : { opacity: 1, stagger: 0.05, ease: "none", scrollTrigger: { trigger: el, start: "top 86%", end: "bottom 52%", scrub: 0.6 } }
        );
      });

      // stacked cards
      gsap.utils.toArray<HTMLElement>("[data-stack]").forEach((stack) => {
        if (!desktop) return;
        const cards = gsap.utils.toArray<HTMLElement>(":scope > *", stack);
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          gsap.to(card, {
            scale: 0.9,
            rotationX: -10,
            rotationZ: i % 2 ? 2.4 : -2.4,
            yPercent: -6,
            filter: "brightness(0.45)",
            transformPerspective: 1400,
            ease: "none",
            scrollTrigger: { trigger: next, start: "top 92%", end: "top 16%", scrub: true },
          });
        });
      });

      // 3D unfold
      gsap.utils.toArray<HTMLElement>("[data-rotate-in]").forEach((el) => {
        gsap.fromTo(
          el,
          { rotationX: 16, scale: 0.9, transformPerspective: 1600, transformOrigin: "50% 0%", borderTopLeftRadius: 60, borderTopRightRadius: 60 },
          { rotationX: 0, scale: 1, borderTopLeftRadius: 0, borderTopRightRadius: 0, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "top 22%", scrub: true } }
        );
      });

      // counters
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = parseFloat(el.dataset.count || "0");
        const o = { v: 0 };
        el.textContent = "0";
        gsap.to(o, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => (el.textContent = String(Math.round(o.v))),
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      // parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const k = parseFloat(el.dataset.parallax || "0.15");
        gsap.fromTo(el, { yPercent: -k * 50 }, { yPercent: k * 50, ease: "none", scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true } });
      });

      // marquee rows
      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el) => {
        const dir = parseFloat(el.dataset.drift || "1");
        gsap.fromTo(el, { xPercent: dir > 0 ? -22 : 0 }, { xPercent: dir > 0 ? 0 : -22, ease: "none", scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: 0.4 } });
      });

      // horizontal rail
      gsap.utils.toArray<HTMLElement>("[data-rail]").forEach((rail) => {
        if (!window.matchMedia("(min-width: 1000px)").matches) return;
        const track = rail.firstElementChild as HTMLElement | null;
        if (!track) return;
        gsap.to(track, {
          x: () => -Math.max(0, track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: { trigger: rail, start: "top 78%", end: "bottom 22%", scrub: 0.5, invalidateOnRefresh: true },
        });
      });

      // pointer tilt
      gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((el) => {
        if (!window.matchMedia("(hover: hover)").matches) return;
        const rx = gsap.quickTo(el, "rotationX", { duration: 0.7, ease: "power3.out" });
        const ry = gsap.quickTo(el, "rotationY", { duration: 0.7, ease: "power3.out" });
        gsap.set(el, { transformPerspective: 1100 });
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          rx(((e.clientY - r.top) / r.height - 0.5) * -12);
          ry(((e.clientX - r.left) / r.width - 0.5) * 14);
        };
        const leave = () => {
          rx(0);
          ry(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 600);
    document.fonts?.ready.then(refresh).catch(() => {});
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
