import type { Config } from "tailwindcss";

/**
 * Jadvix design system — ported from the Google Stitch mockups.
 * MD3-style tokens: deep navy primary, teal secondary, coral accent.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00253e",
        "primary-container": "#0b3b5c",
        "on-primary": "#ffffff",
        "on-primary-container": "#7fa5cc",
        "primary-fixed": "#cee5ff",
        "primary-fixed-dim": "#a3caf2",
        secondary: "#006591",
        "secondary-container": "#39b8fd",
        "on-secondary-container": "#004666",
        accent: "#ff7c39",
        surface: "#f9f9fc",
        "surface-low": "#f3f3f6",
        "surface-mid": "#eeedf1",
        "surface-high": "#e8e8eb",
        ink: "#1a1c1e",
        "ink-muted": "#42474e",
        outline: "#72777e",
        "outline-variant": "#c2c7ce",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["clamp(44px, 6vw, 72px)", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-md": ["clamp(34px, 4.5vw, 48px)", { lineHeight: "1.2", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-lg": ["clamp(28px, 3vw, 36px)", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      maxWidth: { container: "1280px" },
      spacing: { "section-gap": "clamp(72px, 10vw, 120px)" },
      boxShadow: {
        card: "0 10px 30px -10px rgba(11, 59, 92, 0.08)",
        "card-lg": "0 20px 50px rgba(11, 59, 92, 0.08)",
        ambient: "0 32px 64px rgba(11, 59, 92, 0.08)",
      },
      borderRadius: {
        "card": "24px",
        "card-lg": "32px",
        "card-xl": "48px",
      },
    },
  },
  plugins: [],
};
export default config;
