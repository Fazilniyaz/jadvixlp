import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";

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

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 md:pt-24">
        <div className="container-jx relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-display-md text-primary">How can we help?</h1>
            <p className="text-body-lg text-ink-muted">
              Answers to common questions about our services, projects, support and the Jadvix Academy.
            </p>
          </div>
        </div>
        <div className="absolute -right-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary-container/5 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" aria-hidden="true" />
      </section>

      {/* Content */}
      <section className="container-jx grid grid-cols-1 items-start gap-12 py-section-gap lg:grid-cols-12">
        <div className="lg:col-span-7">
          <FaqAccordion items={FAQS} />
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-28 lg:col-span-5">
          <div className="relative overflow-hidden rounded-card-lg bg-primary p-8 text-white shadow-xl">
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <Icon name="school" className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-headline-md">Jadvix Academy</h2>
              <p className="mb-6 text-body-md text-on-primary-container">
                Want to learn, intern and join our team? The Academy takes you from practical training to
                real-world projects.
              </p>
              <Link href="/ideas" className="group inline-flex items-center gap-2 text-label-md font-semibold text-accent transition-all hover:gap-4">
                Learn how it works <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
            <Icon name="school" className="absolute -bottom-10 -right-10 h-48 w-48 text-white/5" />
          </div>

          <div className="rounded-card-lg border border-outline-variant/30 bg-white p-8 shadow-card">
            <h2 className="mb-4 text-headline-md text-primary">Still have questions?</h2>
            <p className="mb-6 text-body-md text-ink-muted">
              Our team replies within one business day — tell us what you&apos;re planning.
            </p>
            <Link
              href="/contact"
              className="inline-block w-full rounded-xl bg-accent px-6 py-4 text-center text-label-md font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
