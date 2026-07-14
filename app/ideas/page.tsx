import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Ideas & Jadvix Academy — Learn, Intern, Join the Team",
  description:
    "How Jadvix works: learn practical IT, marketing and design skills at Jadvix Academy, apply them through real internships, and join the Jadvix professional team. Explore the ideas driving our work.",
  alternates: { canonical: "/ideas" },
};

const STEPS = [
  {
    icon: "school",
    title: "Learn & Train",
    body: "Join Jadvix Academy to gain practical, job-ready skills in IT, digital marketing, design and more — taught by people who build for real clients.",
    ring: "border-secondary shadow-[0_0_20px_rgba(0,101,145,0.4)]",
  },
  {
    icon: "bookmark",
    title: "Internship Opportunity",
    body: "Apply your knowledge through hands-on internships and real-world projects, with dedicated mentorship from our delivery team.",
    ring: "border-accent shadow-[0_0_20px_rgba(255,124,57,0.4)]",
  },
  {
    icon: "group",
    title: "Join the Team",
    body: "Perform well during your internship and become part of the Jadvix professional team — contributing to client work across the UK and India.",
    ring: "border-secondary shadow-[0_0_20px_rgba(0,101,145,0.4)]",
  },
];

export default function IdeasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-section-gap md:pt-24">
        <div className="container-jx grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="z-10">
            <p className="mb-6 inline-block rounded-full bg-secondary-container/10 px-4 py-1.5 text-label-md font-semibold text-secondary">
              FUTURE FORWARD IDEAS
            </p>
            <h1 className="mb-8 text-display-lg text-primary">
              Pioneering the Next <span className="text-secondary">Digital Frontier</span>
            </h1>
            <p className="mb-10 max-w-xl text-body-lg text-ink-muted">
              At Jadvix, ideas are our primary currency. We don&apos;t just build software; we grow people and
              products together — through our Academy, internships and in-house product lab.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-primary px-8 py-4 text-headline-md text-white transition-all hover:shadow-xl"
              >
                Apply to Academy
              </Link>
              <Link
                href="/products"
                className="rounded-xl border-2 border-primary px-8 py-4 text-headline-md text-primary transition-all hover:bg-primary/5"
              >
                See Our Products
              </Link>
            </div>
          </div>
          <div className="relative" aria-hidden="true">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary-container/20 blur-[100px]" />
            <div className="animate-floaty relative z-10 rounded-card-lg border border-outline-variant/30 bg-white/60 p-8 shadow-xl backdrop-blur">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(160deg,#00253e,#0b3b5c_50%,#006591)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(57,184,253,0.45),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(255,124,57,0.4),transparent_50%)]" />
                <div className="absolute inset-x-10 top-10 h-3 rounded-full bg-white/20" />
                <div className="absolute inset-x-10 top-[72px] h-3 w-2/3 rounded-full bg-white/15" />
                <div className="absolute inset-x-10 top-[104px] h-3 w-1/2 rounded-full bg-white/10" />
                <Icon name="brain" className="absolute bottom-10 right-10 h-16 w-16 text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Jadvix Works — timeline */}
      <section className="relative overflow-hidden bg-primary py-section-gap">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-secondary-container/10 blur-[150px]" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" aria-hidden="true" />

        <div className="container-jx relative z-10">
          <div className="mb-20 text-center md:mb-24">
            <h2 className="mb-6 text-display-md text-white">How Jadvix Works</h2>
            <p className="mx-auto max-w-2xl text-body-lg text-on-primary-container">
              Our progression model transforms talent into professionals — from foundational learning to real
              organisational impact.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Vertical line */}
            <div
              className="absolute left-8 h-full w-1 rounded-full bg-gradient-to-b from-secondary via-accent to-secondary opacity-30 md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
            />
            <ol className="space-y-16 md:space-y-28">
              {STEPS.map((step, i) => {
                const flip = i % 2 === 1;
                return (
                  <Reveal as="li" key={step.title} className="group relative flex items-start gap-6 md:items-center md:gap-8">
                    {/* Card — alternating sides on desktop */}
                    <div className={`order-2 flex-1 ${flip ? "md:order-3" : "md:order-1 md:text-right"}`}>
                      <div className="rounded-card border border-on-primary-container/20 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-secondary-container/50 md:p-8">
                        <h3 className="mb-3 text-headline-lg text-white">
                          <span className="mr-3 text-accent">0{i + 1}</span>
                          {step.title}
                        </h3>
                        <p className="text-body-md text-on-primary-container">{step.body}</p>
                      </div>
                    </div>
                    {/* Node */}
                    <div className="order-1 shrink-0 md:order-2">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full border-4 bg-primary transition-transform group-hover:scale-110 md:h-20 md:w-20 ${step.ring}`}>
                        <Icon name={step.icon} className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className={`hidden flex-1 md:block ${flip ? "md:order-1" : "md:order-3"}`} />
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Bento — incubating tomorrow */}
      <section className="container-jx py-section-gap">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-4 text-display-md text-primary">Incubating Tomorrow</h2>
            <p className="text-body-lg text-ink-muted">
              The core domains where our team and Academy interns are making a difference today.
            </p>
          </div>
          <Link href="/services" className="group flex items-center gap-2 text-label-md font-semibold text-secondary transition-all hover:gap-4">
            View All Services <Icon name="arrow-right" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <article className="group relative h-full overflow-hidden rounded-card-lg bg-white p-8 shadow-card">
              <div className="relative z-10">
                <span className="mb-4 inline-block rounded-full bg-secondary/10 px-3 py-1 text-label-md font-semibold text-secondary">
                  CORE TECH
                </span>
                <h3 className="mb-4 text-headline-lg text-primary">Cloud-Native Engineering</h3>
                <p className="max-w-sm text-body-md text-ink-muted">
                  Designing resilient, scalable infrastructures that grow with your ambition — from single sites
                  to multi-region platforms.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-2/3 w-2/3 opacity-40 transition-opacity group-hover:opacity-80" aria-hidden="true">
                <div className="h-full w-full rounded-tl-[100px] bg-[radial-gradient(circle_at_70%_70%,rgba(57,184,253,0.5),rgba(11,59,92,0.15))]" />
                <Icon name="cloud" className="absolute bottom-8 right-8 h-16 w-16 text-secondary" />
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="flex h-full flex-col justify-between rounded-card-lg bg-secondary p-8 text-white shadow-card">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                <Icon name="brain" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="mb-2 text-headline-md">Applied AI</h3>
                <p className="opacity-80">Turning smart automation and analytics into practical business tools.</p>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="flex h-full flex-col items-center justify-center rounded-card-lg bg-surface-low p-8 text-center shadow-card">
              <h3 className="mb-4 text-headline-md text-primary">Our Products</h3>
              <p className="mb-6 text-body-md text-ink-muted">Tools built by Jadvix for the modern business.</p>
              <Link href="/products" className="flex items-center gap-2 text-label-md font-bold text-secondary hover:gap-3">
                Explore <Icon name="arrow-up-right" className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>

          <Reveal className="md:col-span-2">
            <article className="flex h-full flex-col items-center gap-8 rounded-card-lg border border-accent/10 bg-accent/5 p-8 shadow-card md:flex-row">
              <div className="flex-1">
                <h3 className="mb-4 text-headline-lg text-accent">Join the Jadvix Academy</h3>
                <p className="mb-6 text-body-md text-ink-muted">
                  Start your journey from learner to professional with our structured mentorship program.
                </p>
                <Link href="/contact" className="inline-block rounded-xl bg-accent px-6 py-3 text-label-md font-semibold text-white transition-transform hover:scale-[1.03]">
                  Apply Now
                </Link>
              </div>
              <div className="relative h-48 w-full flex-1 overflow-hidden rounded-2xl shadow-lg md:h-full" aria-hidden="true">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#006591,#39b8fd)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.3),transparent_55%)]" />
                <Icon name="school" className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-white/90" />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Have an idea worth building?"
        body="Bring it to a team that designs, develops, promotes and secures — end to end."
        secondaryLabel="Meet the Academy"
        secondaryHref="/contact"
      />
    </>
  );
}
