import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import ServiceTabs from "@/components/ServiceTabs";

export const metadata: Metadata = {
  title: "IT Services — Web Development, Apps, Ecommerce, SEO & Consultancy",
  description:
    "Explore Jadvix services: website design & development, mobile & web apps, ecommerce stores, custom software, digital marketing & SEO, graphic design, video editing and IT consultancy — delivered from the UK and India.",
  alternates: { canonical: "/services" },
};

const WHY_POINTS = [
  {
    title: "Bespoke Craftsmanship",
    body: "No templates, no shortcuts. Every solution is engineered from the ground up to fit your unique business ecosystem.",
  },
  {
    title: "Future-Proof Architecture",
    body: "Modern tech stacks and modular designs allow your systems to evolve as your business grows.",
  },
  {
    title: "Data-Driven Insights",
    body: "Strategy backed by hard numbers. We monitor, measure and optimise every digital touchpoint for peak performance.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-24">
        <div className="container-jx flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center rounded-full bg-secondary-container/20 px-4 py-1.5 text-label-md font-semibold text-secondary">
              INNOVATION REDEFINED
            </p>
            <h1 className="text-display-lg text-primary">
              Our Expertise, Your <span className="text-accent">Advantage</span>
            </h1>
            <p className="max-w-xl text-body-lg text-ink-muted">
              End-to-end IT solutions — from your first website to enterprise software, and from launch-day
              marketing to long-term security. One accountable team across the UK and India.
            </p>
          </div>
          <div className="relative w-full flex-1">
            <div className="hover-lift aspect-square w-full rotate-3 overflow-hidden rounded-card-xl shadow-card" aria-hidden="true">
              <div className="relative h-full w-full bg-[linear-gradient(135deg,#0b3b5c,#006591)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(57,184,253,0.4),transparent_50%),radial-gradient(circle_at_80%_75%,rgba(255,124,57,0.3),transparent_50%)]" />
                <div className="absolute left-[12%] top-[15%] h-24 w-24 rotate-45 rounded-2xl border-2 border-white/20" />
                <div className="absolute bottom-[18%] right-[15%] h-32 w-32 rotate-12 rounded-2xl border border-secondary-container/40" />
                <Icon name="layers" className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-white/70" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-2 max-w-xs rounded-3xl border border-outline-variant/30 bg-white p-6 shadow-xl md:-bottom-8 md:-left-8 md:p-8">
              <p className="text-headline-md text-primary">UK + India</p>
              <p className="text-label-md uppercase tracking-wider text-ink-muted">One Delivery Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-surface-low/50 py-section-gap">
        <div className="container-jx">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-headline-lg text-primary">Strategic Service Pillars</h2>
            <p className="mx-auto max-w-2xl text-body-md text-ink-muted">
              Select a category to explore how Jadvix can accelerate your digital growth through tailored
              solutions and expert craftsmanship.
            </p>
          </div>
          <ServiceTabs />
        </div>
      </section>

      {/* Why choose */}
      <section className="container-jx py-section-gap">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <h2 className="text-headline-lg text-primary">Why Choose Jadvix Services?</h2>
            <p className="text-body-lg text-ink-muted">
              We don&apos;t just deliver projects; we build digital legacies. Our approach combines agency agility
              with enterprise-grade stability.
            </p>
            <ul className="space-y-6">
              {WHY_POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-secondary-container/30 text-secondary">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.6} />
                  </span>
                  <div>
                    <h3 className="text-label-md font-bold text-primary">{point.title}</h3>
                    <p className="text-body-md text-ink-muted">{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-primary px-8 py-4 text-label-md font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]"
            >
              Start a Conversation
            </Link>
          </div>

          <div className="relative grid grid-cols-2 gap-6" aria-hidden="true">
            <div className="mt-12 space-y-6">
              <div className="hover-lift relative h-64 overflow-hidden rounded-3xl bg-primary-container shadow-card">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(57,184,253,0.35),transparent_60%)]" />
                <Icon name="chart" className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-secondary-container/90" />
              </div>
              <div className="hover-lift rounded-3xl bg-accent p-8 text-white shadow-card">
                <p className="text-headline-md">2 Offices</p>
                <p className="text-label-md uppercase opacity-80">UK & India</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="hover-lift rounded-3xl bg-primary-container p-8 text-white shadow-card">
                <p className="text-headline-md">8+</p>
                <p className="text-label-md uppercase opacity-80">Disciplines</p>
              </div>
              <div className="hover-lift relative h-80 overflow-hidden rounded-3xl bg-primary shadow-card">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(255,124,57,0.3),transparent_55%)]" />
                <Icon name="group" className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Evolve?"
        body="Let's discuss how our services can transform your business vision into a scalable digital reality."
        secondaryLabel="Book a Consultation"
        secondaryHref="/contact"
      />
    </>
  );
}
