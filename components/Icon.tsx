const PATHS: Record<string, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />,
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h3l2.5 12.5h10L20 7H6" />
    </>
  ),
  megaphone: <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1zM14 8s2 1.5 2 4-2 4-2 4M17 5s3 2.5 3 7-3 7-3 7" />,
  shield: (
    <>
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  school: (
    <>
      <path d="M12 4L2 9l10 5 10-5-10-5z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v5" />
    </>
  ),
  bookmark: <path d="M7 3h10a1 1 0 0 1 1 1v17l-6-4-6 4V4a1 1 0 0 1 1-1z" />,
  group: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.9c1.8.8 3 2.3 3 4.1" />
    </>
  ),
  brain: (
    <>
      <path d="M12 4a3 3 0 0 0-3 3v10a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3z" />
      <path d="M9 8H7a3 3 0 0 0 0 6h2M15 8h2a3 3 0 0 1 0 6h-2" />
    </>
  ),
  cloud: <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5 4 4 0 0 1 17.5 18H7z" />,
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="6.5" cy="12" r="2.5" />
      <circle cx="16" cy="16" r="2.5" />
      <path d="M11 8.5L8.5 11M15 8.8v4.7" />
    </>
  ),
  video: (
    <>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M16 10.5l6-3.5v10l-6-3.5" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  star: <path d="M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8L12 3z" />,
  "arrow-right": <path d="M4 12h16m-6-6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17L17 7M8 7h9v9" />,
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a1.5 1.5 0 0 1-1.7 1.5C10 19.7 4.3 14 3.5 5.7A1.5 1.5 0 0 1 5 4z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7.5l9 6 9-6" />
    </>
  ),
  send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" />
    </>
  ),
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  handshake: <path d="M4 11l4-4 4 3 4-3 4 4M4 11v5l4 4 4-3.5L16 20l4-4v-5M12 10l-2.5 2.5" />,
  verified: (
    <>
      <path d="M12 2l2.4 2 3.1-.3 1 3 2.8 1.4-.7 3 .7 3-2.8 1.4-1 3-3.1-.3-2.4 2-2.4-2-3.1.3-1-3L2.7 14l.7-3-.7-3 2.8-1.4 1-3 3.1.3L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  layers: <path d="M12 3L2 8.5 12 14l10-5.5L12 3zM4 12.5l8 4.5 8-4.5M4 16.5L12 21l8-4.5" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.8,
}: {
  name: keyof typeof PATHS | string;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name] ?? null}
    </svg>
  );
}
