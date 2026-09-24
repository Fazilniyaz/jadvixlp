import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQs — Web Development, Pricing, Support & Academy Questions",
  description:
    "Answers to frequently asked questions about Jadvix: where we're based, technologies we use, post-launch support, project timelines, digital marketing and the Jadvix Academy internship programme.",
  alternates: { canonical: "/faq" },
};

const F = "var(--font-display),system-ui,sans-serif";
const MONO = "var(--font-label),system-ui,sans-serif";

const FAQS: FaqItem[] = [
  {
    category: "Company & Operations",
    question: "Where is Jadvix based?",
    answer:
      "We operate from two offices: Ruislip in the United Kingdom and Chennai in India. This lets us serve local and international clients with extended working hours across both time zones.",
  },
  {
    category: "Company & Operations",
    question: "What services does Jadvix offer?",
    answer:
      "We provide end-to-end IT solutions: website design & development, mobile & web applications, ecommerce stores, custom software, digital marketing & SEO, graphic design, video editing and IT consultancy.",
  },
  {
    category: "Company & Operations",
    question: "What technologies do you use?",
    answer:
      "We work with modern, production-grade stacks — React, Next.js and native mobile frameworks on the front end, with robust APIs, databases and cloud infrastructure behind them. Technology is chosen per project, never one-size-fits-all.",
  },
  {
    category: "Projects & Support",
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Every build can ship with monitoring, maintenance and support options so your product stays fast, secure and up to date long after launch.",
  },
  {
    category: "Projects & Support",
    question: "How long does a typical website project take?",
    answer:
      "A standard business website usually takes 2–6 weeks depending on scope. Larger applications and ecommerce projects are planned in milestones — we agree a clear timeline with you before work begins.",
  },
  {
    category: "Projects & Support",
    question: "How do you keep projects secure?",
    answer:
      "Security is baked into every layer: secure coding practices, encrypted connections, access controls and regular updates. 'Secure' is one of the four words in our tagline for a reason.",
  },
  {
    category: "Academy & Careers",
    question: "What is Jadvix Academy?",
    answer:
      "Jadvix Academy is our training and internship programme. You learn practical skills in IT, digital marketing and design, apply them on real projects during an internship, and top performers join the Jadvix professional team.",
  },
  {
    category: "Academy & Careers",
    question: "How do I apply to the Academy or an internship?",
    answer:
      "Use the contact form on our website or email contact@jadvix.uk with a short introduction and your area of interest. We review applications on a rolling basis.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const chip: CSSProperties = { display: "inline-block", fontFamily: MONO, fontSize: 11.5, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, color: "var(--teal)", border: "1px solid var(--border)", padding: "7px 14px", borderRadius: "var(--radius-md)" };

function SchoolIc() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4L2 9l10 5 10-5-10-5z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v5" />
    </svg>
  );
}
function ArrowR() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function FaqPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .faq-grid{display:grid;grid-template-columns:1.5fr 1fr;gap:56px;align-items:start}
        .faq-academy:hover{transform:translateY(-2px)}
        @media(max-width:960px){.faq-grid{grid-template-columns:1fr}.faq-sidebar{position:static!important}}
      `,
        }}
      />

      {/* HERO */}
      <section style={{ maxWidth: 820, margin: "0 auto", padding: "80px 24px 30px" }}>
        <span style={chip}>Support &amp; Answers</span>
        <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: "clamp(36px,4.6vw,58px)", lineHeight: 1.05, letterSpacing: "-.025em", margin: "22px 0 0", color: "var(--ink)", textWrap: "balance" } as CSSProperties}>
          How can we <span style={{ color: "var(--accent)" }}>help?</span>
        </h1>
        <p style={{ maxWidth: 560, margin: "20px 0 0", fontSize: 18, lineHeight: 1.6, color: "var(--ink-2)" }}>
          Answers to common questions about our services, projects, support and the Jadvix Academy.
        </p>
      </section>

      {/* CONTENT */}
      <section className="faq-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "50px 24px 110px" }}>
        <div>
          <FaqAccordion items={FAQS} />
        </div>

        <aside className="faq-sidebar" style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 100 }}>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)", background: "linear-gradient(155deg,#0b3b5c 0%,#00253e 70%,#001322 100%)", color: "#fff", padding: 32 }}>
            <div aria-hidden style={{ position: "absolute", bottom: "-30%", right: "-15%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(57,184,253,.2),transparent 68%)" }} />
            <div style={{ position: "relative" }}>
              <div style={{ width: 48, height: 48, display: "grid", placeItems: "center", borderRadius: "var(--radius-sm)", background: "rgba(255,124,57,.18)", color: "var(--accent)", marginBottom: 20 }}>
                <SchoolIc />
              </div>
              <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: 22, margin: "0 0 10px" }}>Jadvix Academy</h2>
              <p style={{ margin: "0 0 22px", fontSize: 14.5, lineHeight: 1.6, color: "rgba(206,229,255,.82)" }}>
                Want to learn, intern and join our team? The Academy takes you from practical training to real-world projects.
              </p>
              <Link href="/ideas" className="faq-academy jx-lift" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 14.5, color: "var(--accent)" }}>
                Learn how it works <ArrowR />
              </Link>
            </div>
          </div>

          <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", background: "var(--surface)", boxShadow: "var(--shadow)", padding: 32 }}>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: 20, margin: "0 0 10px", color: "var(--ink)" }}>Still have questions?</h2>
            <p style={{ margin: "0 0 22px", fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>
              Our team replies within one business day — tell us what you&apos;re planning.
            </p>
            <Link href="/contact" className="jx-lift" style={{ display: "block", textAlign: "center", background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 0", borderRadius: "var(--radius-sm)" }}>
              Contact Us
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
