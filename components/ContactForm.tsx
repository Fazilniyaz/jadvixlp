"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const SERVICES = [
  "Website Design & Development",
  "Mobile & Web Apps",
  "Ecommerce Store",
  "Custom Software",
  "Digital Marketing & SEO",
  "Graphic Design / Video",
  "IT Consultancy",
  "Jadvix Academy",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    // No backend required: open the visitor's mail client pre-filled.
    const subject = encodeURIComponent(`Project enquiry — ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-outline-variant bg-surface px-5 py-4 text-body-md text-ink placeholder:text-outline transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-secondary";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="cf-name" className="block px-1 text-label-md font-semibold text-primary">
            Full Name
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="cf-email" className="block px-1 text-label-md font-semibold text-primary">
            Email Address
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="cf-service" className="block px-1 text-label-md font-semibold text-primary">
          Service Interest
        </label>
        <select id="cf-service" name="service" className={inputClass} defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="cf-message" className="block px-1 text-label-md font-semibold text-primary">
          Your Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project or goals…"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-accent px-10 py-5 text-headline-md text-white shadow-lg shadow-accent/20 transition-all hover:brightness-110 active:scale-[0.98] md:w-auto"
      >
        Send Message
      </button>

      <p className="text-label-md text-ink-muted" role="status" aria-live="polite">
        {sent
          ? `✓ Your email client should now open — or write to us directly at ${SITE.email}.`
          : "We reply within one business day."}
      </p>
    </form>
  );
}
