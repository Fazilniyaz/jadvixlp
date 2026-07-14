import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Jadvix | Full-Service IT Company for Web, App, Ecommerce & Digital Marketing — UK & India",
  description:
    "Jadvix designs, develops, promotes and secures digital products. Website development, mobile & web apps, ecommerce stores, custom software, SEO and digital marketing from our offices in Ruislip (UK) and Chennai (India).",
  alternates: { canonical: "/" },
};

const STATS = [
  { value: "8+", label: "Service Disciplines" },
  { value: "2", label: "Global Offices" },
  { value: "100%", label: "In-House Delivery" },
  { value: "24/7", label: "Support & Monitoring" },
];

const MARQUEE_ITEMS = [
  "Web Development",
  "Mobile Apps",
  "Ecommerce Stores",
  "Custom Software",
  "Digital Marketing",
  "SEO",
  "UI/UX Design",
  "Video Editing",
  "IT Consultancy",
  "Cybersecurity",
];

const TESTIMONIALS = [
  {
    quote:
      "Jadvix transformed our outdated booking website into a fast, seamless digital experience. Their attention to detail and technical skill stood out from day one.",
    name: "Sarah J.",
    role: "Operations Director, Travel — UK",
    tone: "border-l-accent text-accent",
  },
  {
    quote:
      "Their digital marketing strategy helped our ecommerce store grow month after month. A genuine growth partner, not just an agency.",
    name: "Rajiv M.",
    role: "Founder, Retail — India",
    tone: "border-l-secondary text-secondary",
  },
  {
    quote:
      "The security review Jadvix carried out was thorough and eye-opening. We now run our platform with full confidence.",
    name: "Mark T.",
    role: "Director of Operations, SaaS — UK",
    tone: "border-l-primary text-primary",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-primary md:min-h-[90vh]">
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover [object-position:50%_60%]"
        />
        {/* Legibility: darken only the centre where the text sits, keeping the glowing
            cube, lock and world map bright at the edges (mobile gets a touch more). */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_72%_78%_at_50%_46%,rgba(0,37,62,0.62),rgba(0,37,62,0.18)_78%)] md:bg-[radial-gradient(ellipse_56%_82%_at_50%_50%,rgba(0,37,62,0.5),rgba(0,37,62,0)_72%)]"
          aria-hidden="true"
        />

        <div className="container-jx relative z-10 py-24 text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
            <span className="text-label-md uppercase tracking-wider text-white/90">Strategic Digital Growth Partner</span>
          </div>
          <h1 className="mx-auto mb-6 max-w-4xl text-display-lg text-white">
            Design. Develop. Promote. Secure.
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-body-lg text-primary-fixed/90">
            Jadvix builds scalable websites, apps and digital experiences from the UK and India — combining
            reliable engineering with creative, conversion-focused design.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              className="w-full rounded-xl bg-accent px-10 py-5 text-headline-md text-white shadow-lg shadow-orange-500/20 transition-transform hover:scale-105 sm:w-auto"
            >
              Get a Free Project Quote
            </Link>
            <Link
              href="/services"
              className="w-full rounded-xl border-2 border-white/30 bg-white/10 px-10 py-5 text-headline-md text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:w-auto"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SERVICES BENTO ============ */}
      <section className="container-jx py-section-gap">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">Our Services</p>
            <h2 className="text-display-md text-primary">Strategic Digital Capabilities</h2>
          </div>
          <Link href="/services" className="group flex items-center gap-2 font-bold text-primary transition-all hover:gap-4">
            View all services <Icon name="arrow-right" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <article className="hover-lift group relative h-full overflow-hidden rounded-card-lg border border-outline-variant/30 bg-white p-10 shadow-card-lg">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Icon name="web" className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-headline-lg text-primary">Website Design & Development</h3>
                <p className="max-w-md text-body-md text-ink-muted">
                  High-performance, responsive websites that blend technical stability with premium agency
                  aesthetics — engineered for search rankings and conversions.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal className="md:col-span-4">
            <article className="hover-lift h-full overflow-hidden rounded-card-lg bg-primary p-10 text-white">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <Icon name="smartphone" className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-headline-lg">Mobile & Web Apps</h3>
              <p className="text-body-md text-primary-fixed/80">
                Scalable iOS, Android and web applications built on modern, cloud-native technologies.
              </p>
            </article>
          </Reveal>

          <Reveal className="md:col-span-4">
            <article className="hover-lift h-full overflow-hidden rounded-card-lg border border-outline-variant/30 bg-surface-low p-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                <Icon name="megaphone" className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-headline-lg text-primary">Digital Marketing & SEO</h3>
              <p className="text-body-md text-ink-muted">
                Data-driven SEO, social and paid campaigns that scale your brand visibility across the UK, India and beyond.
              </p>
            </article>
          </Reveal>

          <Reveal className="md:col-span-8">
            <article className="hover-lift h-full overflow-hidden rounded-card-lg border border-outline-variant/30 bg-white p-10 shadow-card-lg">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="md:w-1/2">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon name="shield" className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-headline-lg text-primary">Secure by Default</h3>
                  <p className="text-body-md text-ink-muted">
                    Robust security practices protect your digital assets and customer trust — baked into every
                    build, never bolted on afterwards.
                  </p>
                </div>
                <div
                  className="relative min-h-[200px] w-full overflow-hidden rounded-2xl bg-primary-container md:w-1/2"
                  aria-hidden="true"
                >
                  {/* Abstract security graphic */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(57,184,253,0.35),transparent_60%)]" />
                  <div className="absolute inset-6 rounded-xl border border-white/15" />
                  <div className="absolute inset-12 rounded-lg border border-white/10" />
                  <Icon name="shield" className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-secondary-container/80" />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ============ ABOUT SPLIT ============ */}
      <section className="relative overflow-hidden bg-primary-container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden lg:min-h-0" aria-hidden="true">
            {/* Abstract collaboration graphic */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b3b5c,#00253e)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,124,57,0.18),transparent_55%),radial-gradient(circle_at_75%_25%,rgba(57,184,253,0.22),transparent_50%)]" />
            <div className="absolute left-[15%] top-[20%] h-40 w-40 rotate-45 rounded-3xl border border-white/10" />
            <div className="absolute bottom-[15%] right-[18%] h-56 w-56 rotate-12 rounded-3xl border border-secondary-container/20" />
          </div>
          <div className="flex flex-col justify-center px-5 py-20 text-white md:px-12 lg:py-24 lg:pl-20 lg:pr-16">
            <p className="eyebrow text-accent">About Jadvix</p>
            <h2 className="mb-8 text-display-md">End-to-end IT solutions that help businesses grow.</h2>
            <div className="max-w-xl space-y-6 text-body-lg text-primary-fixed/90">
              <p>
                Based in India and the UK, Jadvix is a full-service IT company serving local and international
                clients. We don&apos;t just build websites — we craft complete digital ecosystems.
              </p>
              <p>
                Our team combines development, design, marketing and consultancy under one roof, delivering
                secure, innovative technology that is as reliable as it is creative.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-10 border-t border-white/10 pt-8">
              <div>
                <p className="text-display-md text-accent">2</p>
                <p className="text-label-md uppercase tracking-wider text-primary-fixed">Countries</p>
              </div>
              <div>
                <p className="text-display-md text-accent">8+</p>
                <p className="text-label-md uppercase tracking-wider text-primary-fixed">Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="container-jx py-section-gap">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {STATS.map((stat) => (
            <Reveal key={stat.label}>
              <div className="rounded-card border border-outline-variant/30 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                <p className="mb-2 text-display-md text-primary">{stat.value}</p>
                <p className="text-label-md uppercase tracking-widest text-ink-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CAPABILITIES MARQUEE ============ */}
      <section className="overflow-hidden border-y border-outline-variant/20 bg-white py-8" aria-label="Our capabilities">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {MARQUEE_ITEMS.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center px-8 text-xl font-extrabold tracking-tight text-primary/40">
                  {item}
                  <span className="ml-16 text-accent/50">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="overflow-hidden py-section-gap">
        <div className="container-jx mb-16">
          <h2 className="max-w-xl text-display-md text-primary">Voices of Partnership</h2>
        </div>
        <div className="container-jx grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name}>
              <figure className={`glass-card h-full rounded-card-lg border-l-4 p-8 shadow-lg lg:p-10 ${t.tone.split(" ")[0]}`}>
                <div className={`mb-6 flex gap-1 ${t.tone.split(" ")[1]}`} aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mb-8 text-body-lg italic text-primary">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-bold text-white" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-label-md font-semibold text-primary">{t.name}</p>
                    <p className="text-xs uppercase text-ink-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
