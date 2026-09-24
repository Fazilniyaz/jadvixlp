"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function HomeContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Project enquiry — jadvix.uk");
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="jx-card" style={{ padding: 36 }}>
      {sent ? (
        <div className="jx-fade-in" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <span style={{ flexShrink: 0, width: 40, height: 40, display: "grid", placeItems: "center", borderRadius: 999, background: "var(--brand-ink)", color: "#fff" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <div>
            <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>Thanks — message received.</h3>
            <p style={{ margin: 0, fontSize: 15, color: "var(--ink-2)" }}>We&apos;ll get back to you within one business day.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="hcf-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label className="jx-field-label" htmlFor="hcf-name">Name</label>
              <input id="hcf-name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="jx-field-label" htmlFor="hcf-email">Email</label>
              <input id="hcf-email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
            </div>
          </div>
          <div>
            <label className="jx-field-label" htmlFor="hcf-message">Message</label>
            <textarea id="hcf-message" name="message" rows={4} required placeholder="Tell us about your project..." style={{ resize: "vertical" }} />
          </div>
          <button type="submit" className="jx-btn jx-btn-spark jx-btn-block" style={{ marginTop: 4 }}>
            Send Message
          </button>
        </form>
      )}
      <style dangerouslySetInnerHTML={{ __html: `@media(max-width:520px){.hcf-row{grid-template-columns:1fr!important}}` }} />
    </div>
  );
}
