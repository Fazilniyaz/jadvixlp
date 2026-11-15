"use client";

import { useEffect, useState } from "react";

/** Live local time for an office, e.g. 14:35. Renders a stable placeholder on the server. */
export default function Clock({ timeZone }: { timeZone: string }) {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  return <span suppressHydrationWarning>{t}</span>;
}
