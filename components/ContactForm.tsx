"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { SITE } from "@/lib/site";

const MONO = "var(--font-label),system-ui,sans-serif";
const F = "var(--font-display),system-ui,sans-serif";

const SERVICES = [
  "Website Design & Development",
  "Mobile & Web Apps",
  "Ecommerce Store",
  "Digital Marketing & SEO",
  "Custom Software",
  "IT Consultancy",
];

const label: CSSProperties = { display: "block", fontFamily: MONO, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 7 };

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Project enquiry — ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\n${message}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", background: "var(--surface)", boxShadow: "var(--shadow-lg)", padding: 40 }}>
      <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: 26, letterSpacing: "-.01em", margin: "0 0 6px", color: "var(--ink)" }}>Send us a message</h2>
      <p style={{ margin: "0 0 28px", fontSize: 15, color: "var(--ink-2)" }}>Fill out the form and our team will reach out within one business day.</p>

      {sent ? (
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start", border: "1px solid color-mix(in srgb,var(--teal) 40%,transparent)", background: "color-mix(in srgb,var(--teal) 8%,var(--surface))", borderRadius: "var(--radius-md)", padding: 22 }}>
          <span style={{ flexShrink: 0, width: 36, height: 36, display: "grid", placeItems: "center", borderRadius: "var(--radius-sm)", background: "var(--teal)", color: "#fff" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <div>
            <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "var(--ink)" }}>Thanks — message received.</h3>
            <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink-2)" }}>Your email client should open, or write to us directly at {SITE.email}.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="cf-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={label} htmlFor="cf-name">Full Name</label>
              <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" />
            </div>
            <div>
              <label style={label} htmlFor="cf-email">Email</label>
              <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
            </div>
          </div>
          <div className="cf-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={label} htmlFor="cf-company">Company</label>
              <input id="cf-company" name="company" type="text" placeholder="Company Ltd" />
            </div>
            <div>
              <label style={label} htmlFor="cf-service">Service</label>
              <select id="cf-service" name="service" defaultValue={SERVICES[0]}>
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label style={label} htmlFor="cf-message">Message</label>
            <textarea id="cf-message" name="message" rows={5} required placeholder="Tell us about your project..." style={{ resize: "vertical" }} />
          </div>
          <button type="submit" className="jx-lift" style={{ marginTop: 4, background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "15px 0", border: "none", borderRadius: "var(--radius-sm)", cursor: "pointer", width: "100%" }}>
            Send Message
          </button>
        </form>
      )}
      <style dangerouslySetInnerHTML={{ __html: `@media(max-width:520px){.cf-row{grid-template-columns:1fr!important}}` }} />
    </div>
  );
}
