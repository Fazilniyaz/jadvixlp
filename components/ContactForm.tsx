"use client";

import { useState } from "react";

import { SITE } from "@/lib/site";

const F = "var(--font-display),system-ui,sans-serif";

const SERVICES = [
  "Website Design & Development",
  "Mobile & Web Apps",
  "Ecommerce Store",
  "Digital Marketing & SEO",
  "Custom Software",
  "IT Consultancy",
];


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
    <div className="jx-card" style={{ padding: "clamp(28px,4vw,44px)" }}>
      <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "var(--fs-headline)", letterSpacing: "-.015em", margin: "0 0 8px", color: "var(--ink)" }}>Send us a message</h2>
      <p style={{ margin: "0 0 30px", fontSize: 16, color: "var(--ink-2)" }}>Fill out the form and our team will reach out within one business day.</p>

      {sent ? (
        <div className="jx-fade-in" style={{ display: "flex", gap: 14, alignItems: "flex-start", border: "1px solid color-mix(in srgb,var(--brand) 40%,transparent)", background: "color-mix(in srgb,var(--brand) 8%,var(--surface))", borderRadius: "var(--r-card)", padding: 22 }}>
          <span style={{ flexShrink: 0, width: 40, height: 40, display: "grid", placeItems: "center", borderRadius: 999, background: "var(--brand-ink)", color: "#fff" }}>
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
              <label className="jx-field-label" htmlFor="cf-name">Full Name</label>
              <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="jx-field-label" htmlFor="cf-email">Email</label>
              <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
            </div>
          </div>
          <div className="cf-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label className="jx-field-label" htmlFor="cf-company">Company</label>
              <input id="cf-company" name="company" type="text" placeholder="Company Ltd" />
            </div>
            <div>
              <label className="jx-field-label" htmlFor="cf-service">Service</label>
              <select id="cf-service" name="service" defaultValue={SERVICES[0]}>
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="jx-field-label" htmlFor="cf-message">Message</label>
            <textarea id="cf-message" name="message" rows={5} required placeholder="Tell us about your project..." style={{ resize: "vertical" }} />
          </div>
          <button type="submit" className="jx-btn jx-btn-spark jx-btn-block" style={{ marginTop: 6 }}>
            Send Message
          </button>
        </form>
      )}
      <style dangerouslySetInnerHTML={{ __html: `@media(max-width:520px){.cf-row{grid-template-columns:1fr!important}}` }} />
    </div>
  );
}
