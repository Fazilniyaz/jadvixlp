"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import type { Shape } from "@/lib/chrome3d";

/** A layout slot for one floating chrome object; the shared WebGL stage draws into it. */
export default function Chrome3D({ shape, className = "", style }: { shape: Shape; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let off: (() => void) | undefined;
    let dead = false;
    import("@/lib/chrome3d").then((m) => {
      if (!dead && ref.current) off = m.mount(ref.current, shape);
    });
    return () => {
      dead = true;
      off?.();
    };
  }, [shape]);
  return <span ref={ref} aria-hidden className={`c3d ${className}`} style={style} />;
}
