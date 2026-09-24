import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQs — Web Development, Pricing, Support & Academy Questions",
  description:
    "Answers to frequently asked questions about Jadvix: where we're based, technologies we use, post-launch support, project timelines, digital marketing and the Jadvix Academy internship programme.",
  alternates: { canonical: "/faq" },
};


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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
        .faq-grid{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:64px;align-items:start}
        @media(max-width:960px){.faq-grid{grid-template-columns:1fr}.faq-sidebar{position:static!important}}
      `,
        }}
      />

      {/* HERO */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(72px,10vh,120px) 24px 30px" }}>
        <span className="jx-eyebrow jx-rise">Support &amp; Answers</span>
        <h1 className="jx-display-xl jx-rise" style={{ ["--d" as string]: "80ms", margin: "24px 0 0", color: "var(--ink)" } as CSSProperties}>
          How can we <span className="jx-accent">help?</span>
        </h1>
        <p className="jx-body-lg jx-rise" style={{ ["--d" as string]: "200ms", maxWidth: 580, margin: "24px 0 0", color: "var(--ink-2)" } as CSSProperties}>
          Answers to common questions about our services, projects, support and the Jadvix Academy.
        </p>
      </section>

      {/* CONTENT */}
      <section className="jx-wrap faq-grid" style={{ paddingTop: 56, paddingBottom: "var(--section-gap)" }}>
        <Reveal>
          <FaqAccordion items={FAQS} />
        </Reveal>

        <aside className="faq-sidebar" style={{ display: "flex", flexDirection: "column", gap: 18, position: "sticky", top: 100 }}>
          <Reveal delay={80}>
            <div className="jx-navy" style={{ borderRadius: "var(--r-card)", padding: 32, boxShadow: "var(--shadow-glow)" }}>
              <div aria-hidden className="jx-glow" style={{ width: 420, height: 420, bottom: "-70%", right: "-40%" }} />
              <div style={{ position: "relative" }}>
                <div className="jx-icon-tile" style={{ color: "var(--brand)", marginBottom: 22 }}>
                  <SchoolIc />
                </div>
                <h2 className="jx-headline" style={{ fontSize: 24, margin: "0 0 10px", color: "#fff" }}>Jadvix Academy</h2>
                <p style={{ margin: "0 0 22px", fontSize: 16, lineHeight: 1.6, color: "var(--on-navy-2)" }}>
                  Want to learn, intern and join our team? The Academy takes you from practical training to real-world projects.
                </p>
                <Link href="/ideas" className="jx-arrow-link">
                  Learn how it works <ArrowR />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="jx-card" style={{ padding: 32 }}>
              <h2 className="jx-headline" style={{ fontSize: 22, margin: "0 0 10px", color: "var(--ink)" }}>Still have questions?</h2>
              <p style={{ margin: "0 0 22px", fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>
                Our team replies within one business day — tell us what you&apos;re planning.
              </p>
              <Link href="/contact" className="jx-btn jx-btn-spark jx-btn-block">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </aside>
      </section>
    </div>
  );
}
