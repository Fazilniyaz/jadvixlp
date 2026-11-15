"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/content";
import { ArrowUR } from "@/components/site/ui";

/** Opens the visitor's mail client with the enquiry pre-filled (static export: no server to post to). */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "");
    const subject = encodeURIComponent(`Project enquiry — ${v("service")}`);
    const body = encodeURIComponent(`Name: ${v("name")}\nCompany: ${v("company")}\nEmail: ${v("email")}\nService: ${v("service")}\n\n${v("message")}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="cform">
        <div className="cform__ok" role="status">
          <span className="btn__dot" style={{ background: "var(--blue)", color: "#fff" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <div>
            <h3>Your email is ready to send.</h3>
            <p style={{ marginTop: 6 }}>
              Your mail app should have opened with the enquiry filled in. If it didn&apos;t, write to us directly at <a href={`mailto:${SITE.email}`} style={{ color: "var(--ink)", fontWeight: 600 }}>{SITE.email}</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={onSubmit}>
      <div className="cform__grid">
        <div className="field field--full">
          <label htmlFor="cf-name">Full name *</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" />
        </div>
        <div className="field">
          <label htmlFor="cf-company">Company name</label>
          <input id="cf-company" name="company" type="text" autoComplete="organization" placeholder="Company Ltd" />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
        </div>
        <div className="field field--full">
          <label htmlFor="cf-service">Service required *</label>
          <select id="cf-service" name="service" defaultValue={SERVICES[0].title}>
            {SERVICES.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Ropix</option>
            <option>Jadvix Academy</option>
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="cf-message">Message *</label>
          <textarea id="cf-message" name="message" required placeholder="Tell us more about your idea" />
        </div>
      </div>
      <button type="submit" className="btn btn--block">
        <span className="btn__label">
          <span data-t="Send inquiry">Send inquiry</span>
        </span>
        <ArrowUR />
      </button>
    </form>
  );
}
