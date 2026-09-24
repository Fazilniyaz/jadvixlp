import type { Config } from "tailwindcss";

/**
 * Jadvix design system — mirrors the CSS tokens in app/globals.css.
 * Navy canvas, one brand blue, a single "spark" accent for the key CTA.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#041826",
        "primary-container": "#0b3b5c",
        "on-primary": "#ffffff",
        "on-primary-container": "#a7b4c4",
        "primary-fixed": "#eaeff6",
        "primary-fixed-dim": "#a7b4c4",
        secondary: "#0a7cb0",
        "secondary-container": "#1fa6e0",
        "on-secondary-container": "#041826",
        accent: "#ff6a2c",
        brand: "#1fa6e0",
        "brand-ink": "#0a7cb0",
        spark: "#ff6a2c",
        navy: { 700: "#0b3b5c", 800: "#071f30", 900: "#041826" },
        surface: "var(--surface)",
        "surface-low": "var(--surface-2)",
        "surface-mid": "var(--surface-2)",
        "surface-high": "var(--surface-2)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-2)",
        outline: "var(--muted)",
        "outline-variant": "var(--line)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        label: ["var(--font-label)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(52px, 7vw, 92px)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "600" }],
        "display-lg": ["clamp(38px, 4.5vw, 60px)", { lineHeight: "1.06", letterSpacing: "-0.025em", fontWeight: "600" }],
        "display-md": ["clamp(38px, 4.5vw, 60px)", { lineHeight: "1.06", letterSpacing: "-0.025em", fontWeight: "600" }],
        headline: ["clamp(24px, 2.4vw, 30px)", { lineHeight: "1.15", fontWeight: "600" }],
        "headline-lg": ["clamp(24px, 2.4vw, 30px)", { lineHeight: "1.15", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.25", fontWeight: "600" }],
        "body-lg": ["19px", { lineHeight: "1.65", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        eyebrow: ["13px", { lineHeight: "1.3", letterSpacing: "0.14em", fontWeight: "500" }],
        "label-md": ["13px", { lineHeight: "1.3", letterSpacing: "0.14em", fontWeight: "500" }],
      },
      maxWidth: { container: "1240px" },
      spacing: { "section-gap": "clamp(96px, 14vh, 180px)" },
      boxShadow: {
        sm: "0 1px 2px rgba(6, 20, 35, 0.06)",
        md: "0 18px 40px -20px rgba(6, 20, 35, 0.18)",
        glow: "0 30px 80px -30px rgba(31, 166, 224, 0.35)",
        card: "0 18px 40px -20px rgba(6, 20, 35, 0.18)",
        "card-lg": "0 18px 40px -20px rgba(6, 20, 35, 0.18)",
        ambient: "0 18px 40px -20px rgba(6, 20, 35, 0.18)",
      },
      borderRadius: {
        input: "10px",
        card: "16px",
        panel: "24px",
        "card-lg": "24px",
        "card-xl": "24px",
      },
      transitionTimingFunction: { jx: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
    },
  },
  plugins: [],
};
export default config;
