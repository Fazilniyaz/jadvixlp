import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us — Full-Service IT Company in the UK & India",
  description:
    "Jadvix is a full-service IT company with offices in Ruislip (UK) and Chennai (India). Learn about our vision, values and the journey behind our web, app, ecommerce and digital marketing services.",
  alternates: { canonical: "/about" },
};

const FOUNDATIONS = [
  {
    icon: "layers",
    tint: "bg-primary/5 text-primary",
    title: "Holistic Integration",
    body: "We don't just add features; we orchestrate harmony between technology, design and business goals.",
  },
  {
    icon: "verified",
    tint: "bg-secondary-container/10 text-secondary",
    title: "Mastery & Expertise",
    body: "Hands-on specialists delivering technical excellence without compromise on security.",
    offset: true,
  },
  {
    icon: "handshake",
    tint: "bg-accent/10 text-accent",
    title: "Impactful Partnership",
    body: "We align our success with your results, building long-term value across every touchpoint.",
  },
  {
    icon: "bolt",
    tint: "bg-primary/5 text-primary",
    title: "Agility",
    body: "Rapid adaptation to market shifts while maintaining the stability your business depends on.",
    offset: true,
  },
];

const JOURNEY = [
  {
    label: "01",
    color: "bg-primary",
    title: "The Beginning — Chennai",
    body: "Jadvix started in India with a simple mission: make professional websites, apps and digital marketing accessible to growing businesses.",
  },
  {
    label: "02",
    color: "bg-secondary-container",
    title: "UK Expansion — Ruislip",
    body: "We opened our UK office to serve local and international clients, operating as one team across two time zones.",
    flip: true,
  },
  {
    label: "03",
    color: "bg-accent",
    title: "Academy & Products",
    body: "Jadvix Academy launched to train the next generation of talent, alongside our own product lab building tools like RotaPay.",
  },
];

const VISION_POINTS = [
  "Empowering businesses with practical, honest tech guidance.",
  "Integrating design, development, marketing and security at scale.",
  "Fostering a culture of relentless digital curiosity through our Academy.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[radial-gradient(circle_at_top_right,rgba(57,184,253,0.08),transparent),radial-gradient(circle_at_bottom_left,rgba(255,124,57,0.05),transparent)] px-0 pt-20 pb-section-gap md:pt-24">
        <div className="container-jx text-center">
          <p className="mb-6 inline-block rounded-full bg-secondary-container/10 px-4 py-1.5 text-label-md font-semibold text-secondary">
            PIONEERING DIGITAL EVOLUTION
          </p>
          <h1 className="mx-auto mb-8 max-w-4xl text-display-lg text-primary">
            Bridging Stability and <span className="text-accent">Innovation</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-body-lg text-ink-muted">
            Jadvix is a full-service IT company guiding businesses through digital transformation with bespoke
            strategic craftsmanship — from our offices in the UK and India.
          </p>
        </div>
      </section>

      {/* Vision split */}
      <section className="overflow-hidden bg-white py-section-gap">
        <div className="container-jx grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl" aria-hidden="true">
              <div className="absolute inset-0 bg-[linear-gradient(140deg,#00253e,#0b3b5c_60%,#006591)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(57,184,253,0.35),transparent_50%),radial-gradient(circle_at_80%_75%,rgba(255,124,57,0.3),transparent_50%)] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute left-[12%] top-[16%] h-28 w-28 rotate-45 rounded-2xl border border-white/20" />
              <div className="absolute bottom-[14%] right-[14%] h-40 w-40 rotate-12 rounded-3xl border border-secondary-container/30" />
              <Icon name="globe" className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-white/70" />
            </div>
          </Reveal>
          <div className="lg:pl-8">
            <h2 className="mb-6 text-headline-lg text-primary">Our Vision</h2>
            <p className="mb-8 text-body-lg leading-relaxed text-ink-muted">
              To be the definitive catalyst for digital growth — where businesses don&apos;t just keep up with
              technology, they lead with it. We turn technological complexity into strategic clarity.
            </p>
            <ul className="space-y-4">
              {VISION_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 text-accent">
                    <Icon name="check" className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                  <span className="text-body-md text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section className="container-jx py-section-gap">
        <div className="mb-16">
          <h2 className="mb-4 text-headline-lg text-primary">Our Foundations</h2>
          <p className="max-w-xl text-body-md text-ink-muted">
            Four pillars that define our approach to every challenge and partnership.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FOUNDATIONS.map((f) => (
            <Reveal key={f.title} className={f.offset ? "lg:mt-8" : ""}>
              <article className="h-full rounded-3xl border border-outline-variant/10 bg-white p-8 shadow-card transition-transform duration-300 hover:-translate-y-2">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${f.tint}`}>
                  <Icon name={f.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-headline-md text-primary">{f.title}</h3>
                <p className="text-body-md text-ink-muted">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white py-section-gap">
        <div className="container-jx">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-headline-lg text-primary">Our Journey</h2>
            <p className="text-body-md text-ink-muted">A story of steady, strategic growth.</p>
          </div>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-6 h-full w-0.5 bg-surface-high lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
            <ol className="space-y-12 lg:space-y-20">
              {JOURNEY.map((item) => (
                <Reveal as="li" key={item.label} className="group relative flex items-start gap-6 lg:items-center">
                  <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold text-white transition-transform group-hover:scale-110 ${item.color} ${item.flip ? "lg:order-2" : "lg:order-2"}`}>
                    {item.label}
                  </div>
                  <div className={`flex-1 ${item.flip ? "lg:order-3 lg:pl-10" : "lg:order-1 lg:pr-10 lg:text-right"}`}>
                    <h3 className="mb-2 text-headline-md text-primary">{item.title}</h3>
                    <p className={`max-w-md text-body-md text-ink-muted ${item.flip ? "" : "lg:ml-auto"}`}>{item.body}</p>
                  </div>
                  <div className={`hidden flex-1 lg:block ${item.flip ? "lg:order-1" : "lg:order-3"}`} />
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="pt-section-gap">
        <CtaBanner
          title="Ready to Evolve?"
          body="Join the businesses across the UK and India that trust Jadvix with their digital growth."
          secondaryLabel="How Jadvix Works"
          secondaryHref="/ideas"
        />
      </div>
    </>
  );
}
