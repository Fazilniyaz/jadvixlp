import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Products — Jadvix Shop, Academy, RotaPay & PayRoto",
  description:
    "Discover the Jadvix product ecosystem: Jadvix Shop, Jadvix Academy learning platform, RotaPay payroll & shift management, and PayRoto payments — enterprise-grade tools built in-house.",
  alternates: { canonical: "/products" },
};

const PRODUCTS = [
  {
    name: "Jadvix Shop",
    tags: ["Web App", "Ecommerce"],
    icon: "cart",
    gradient: "from-[#0b3b5c] to-[#006591]",
    glow: "rgba(57,184,253,0.4)",
    description:
      "A curated marketplace for digital products and services — built for modern businesses that want to launch and sell fast.",
  },
  {
    name: "Jadvix Academy",
    tags: ["Platform", "Education"],
    icon: "school",
    gradient: "from-[#006591] to-[#39b8fd]",
    glow: "rgba(255,255,255,0.3)",
    description:
      "Practical learning paths in IT, digital marketing and design — with internships on real projects and a route into the Jadvix team.",
  },
  {
    name: "RotaPay",
    tags: ["SaaS", "Workforce"],
    icon: "chart",
    gradient: "from-[#00253e] to-[#0b3b5c]",
    glow: "rgba(255,124,57,0.35)",
    description:
      "Shift, rota and pay management for teams — schedule work, track earnings and generate reports from one clean dashboard.",
  },
  {
    name: "PayRoto",
    tags: ["Web App", "B2B"],
    icon: "bolt",
    gradient: "from-[#642400] to-[#ff7c39]",
    glow: "rgba(255,219,205,0.4)",
    description:
      "Fast, simple payment workflows for growing businesses — reconciliation and reporting without the spreadsheet chaos.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-section-gap md:pt-24">
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary-container opacity-10 blur-3xl" />
        <div className="container-jx flex flex-col items-center gap-12 md:flex-row">
          <div className="md:w-3/5">
            <p className="mb-6 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-label-md font-semibold text-secondary">
              INNOVATION HUB
            </p>
            <h1 className="mb-8 text-display-lg text-primary">
              Propelling <span className="text-accent">Digital</span> Futures.
            </h1>
            <p className="mb-10 max-w-xl text-body-lg text-ink-muted">
              Explore our ecosystem of tools designed to simplify complex workflows, accelerate growth and put
              enterprise-grade software in reach of every business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-label-md font-semibold text-white transition-all hover:shadow-xl"
              >
                Talk to Us <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <Link
                href="/ideas"
                className="flex items-center gap-2 rounded-xl border-2 border-primary px-8 py-4 text-label-md font-semibold text-primary transition-all hover:bg-primary/5"
              >
                Join Academy <Icon name="school" className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative w-full md:w-2/5" aria-hidden="true">
            <div className="relative aspect-square w-full overflow-hidden rounded-card-xl shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#00253e,#0b3b5c_55%,#006591)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(57,184,253,0.4),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(255,124,57,0.35),transparent_50%)]" />
              <div className="animate-spin-slow absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-3xl border-2 border-white/20" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-2xl bg-white/10 backdrop-blur" />
            </div>
            <div className="glass-card absolute -bottom-8 -left-4 hidden rounded-2xl p-6 shadow-xl lg:block">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                  <Icon name="bolt" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-label-md uppercase tracking-wider text-ink-muted">Built In-House</p>
                  <p className="text-headline-md text-primary">4 Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-surface-low py-section-gap">
        <div className="container-jx">
          <div className="mb-16">
            <h2 className="mb-4 text-headline-lg text-primary">Our Ecosystem</h2>
            <p className="max-w-lg text-body-md text-ink-muted">
              Bespoke solutions crafted for high-performance teams and growing enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {PRODUCTS.map((product) => (
              <Reveal key={product.name}>
                <article className="hover-lift group flex h-full flex-col rounded-card-lg bg-white p-8 shadow-card">
                  <div className={`relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br ${product.gradient}`} aria-hidden="true">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: `radial-gradient(circle at 70% 30%, ${product.glow}, transparent 60%)` }}
                    />
                    <div className="absolute inset-x-8 bottom-6 top-10 rounded-t-xl border border-white/15 bg-white/5 backdrop-blur-[2px]" />
                    <Icon name={product.icon} className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-white/90" />
                    <div className="absolute left-4 top-4 flex gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/90 px-3 py-1 text-label-md font-semibold text-primary backdrop-blur">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mb-3 text-headline-md text-primary">{product.name}</h3>
                  <p className="mb-8 flex-grow text-body-md text-ink-muted">{product.description}</p>
                  <div className="flex gap-4 border-t border-outline-variant/40 pt-4">
                    <Link
                      href="/contact"
                      className="flex-1 rounded-xl bg-primary py-3 text-center text-label-md font-semibold text-white transition-colors hover:bg-primary-container"
                    >
                      Enquire Now
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 rounded-xl border border-outline py-3 text-center text-label-md font-semibold text-primary transition-colors hover:bg-surface"
                    >
                      Request a Demo
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-section-gap">
        <CtaBanner
          title="Ready to Build the Future?"
          body="Whether you need a custom solution or want to adopt our existing ecosystem, our team is ready to help."
          secondaryLabel="Talk to an Expert"
          secondaryHref="/contact"
        />
      </div>
    </>
  );
}
