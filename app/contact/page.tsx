import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Project Quote (UK & India Offices)",
  description:
    "Get in touch with Jadvix for a free project quote. UK office: College House, Ruislip HA4 7AE (+44 7355 803386). India office: Mount Road, Saidapet, Chennai 600015 (+91 94896 44108). Email contact@jadvix.uk.",
  alternates: { canonical: "/contact" },
};

const OFFICES = [
  { key: "uk", office: SITE.offices.uk, badge: "United Kingdom", dark: true },
  { key: "india", office: SITE.offices.india, badge: "India", dark: false },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-24">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary-container/10 blur-3xl" aria-hidden="true" />
        <div className="container-jx relative z-10 max-w-3xl">
          <p className="mb-6 inline-block rounded-full bg-secondary-container/20 px-4 py-1.5 text-label-md font-semibold text-secondary">
            LET&apos;S CONNECT
          </p>
          <h1 className="mb-6 text-display-md text-primary">
            Let&apos;s build the <span className="text-accent">future</span> together.
          </h1>
          <p className="text-body-lg text-ink-muted">
            Whether you need a new website, an app, an online store or ongoing digital marketing — our team in
            the UK and India is ready to help. Get a free project quote today.
          </p>
        </div>
      </section>

      {/* Form + office cards */}
      <section className="container-jx flex flex-col gap-8 pb-section-gap lg:flex-row">
        {/* Form */}
        <div className="flex-grow lg:w-3/5">
          <div className="rounded-card bg-white p-6 shadow-ambient md:p-12">
            <h2 className="mb-2 text-headline-lg text-primary">Send us a Message</h2>
            <p className="mb-8 text-body-md text-ink-muted">
              Fill out the form and our team will reach out within one business day.
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Offices */}
        <aside className="space-y-6 lg:w-2/5">
          {OFFICES.map(({ key, office, badge, dark }) => (
            <Reveal key={key}>
              <div
                className={`group relative overflow-hidden rounded-card p-8 ${
                  dark ? "bg-primary text-white" : "border border-outline-variant/30 bg-surface-high/60"
                }`}
              >
                <div className="absolute right-0 top-0 p-4 opacity-10" aria-hidden="true">
                  <Icon name="pin" className="h-28 w-28 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="relative z-10">
                  <div className={`mb-4 flex items-center gap-2 ${dark ? "text-on-primary-container" : "text-secondary"}`}>
                    <Icon name="globe" className="h-5 w-5" />
                    <span className="text-label-md font-semibold uppercase tracking-widest">{badge}</span>
                  </div>
                  <h3 className={`mb-4 text-headline-lg ${dark ? "" : "text-primary"}`}>{office.title}</h3>
                  <address className={`mb-6 not-italic leading-relaxed text-body-md ${dark ? "text-on-primary-container" : "text-ink-muted"}`}>
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <div className="space-y-3">
                    <a href={office.phoneHref} className={`flex items-center gap-4 font-semibold transition-colors ${dark ? "hover:text-secondary-container" : "text-primary hover:text-secondary"}`}>
                      <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${dark ? "bg-primary-container" : "bg-white shadow-sm"}`}>
                        <Icon name="phone" className="h-5 w-5" />
                      </span>
                      {office.phone}
                    </a>
                    <a href={`mailto:${SITE.email}`} className={`flex items-center gap-4 font-semibold transition-colors ${dark ? "hover:text-secondary-container" : "text-primary hover:text-secondary"}`}>
                      <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${dark ? "bg-primary-container" : "bg-white shadow-sm"}`}>
                        <Icon name="mail" className="h-5 w-5" />
                      </span>
                      {SITE.email}
                    </a>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-lg border-2 py-3 text-label-md font-semibold transition-colors ${
                      dark
                        ? "border-white/30 text-white hover:bg-white/10"
                        : "border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    <Icon name="pin" className="h-4 w-4" /> View on Google Maps
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </aside>
      </section>

      {/* Direct channels */}
      <section className="bg-surface-low py-20">
        <div className="container-jx">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-headline-lg text-primary">Prefer a direct line?</h2>
            <p className="text-body-md text-ink-muted">Reach the right team instantly.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { icon: "mail", label: "Email Us", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: "phone", label: "Call UK", value: SITE.phoneUK, href: SITE.offices.uk.phoneHref },
              { icon: "phone", label: "Call India", value: SITE.phoneIN, href: SITE.offices.india.phoneHref },
            ].map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-outline-variant/30 bg-white p-8 transition-all hover:-translate-y-2 hover:border-secondary-container"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                  <Icon name={channel.icon} className="h-7 w-7" />
                </span>
                <span className="text-label-md font-bold text-primary">{channel.label}</span>
                <span className="text-body-md text-ink-muted">{channel.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
