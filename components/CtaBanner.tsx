import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CtaBanner({
  title = "Ready to evolve your digital presence?",
  body = "Let's discuss how our approach to design, development, marketing and security can accelerate your business growth.",
  primaryLabel = "Get a Free Project Quote",
  secondaryLabel = "Explore Our Services",
  secondaryHref = "/services",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="container-jx pb-section-gap">
      <Reveal>
        <div className="asymmetric-shape relative overflow-hidden rounded-card-xl bg-primary p-10 text-center text-white md:p-24">
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary-container/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative z-10">
            <h2 className="mb-6 text-display-md">{title}</h2>
            <p className="mx-auto mb-10 max-w-2xl text-body-lg text-primary-fixed/80">{body}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/contact"
                className="rounded-lg bg-accent px-7 py-3 text-base font-semibold text-white shadow-xl shadow-orange-900/30 transition-transform hover:scale-105"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="rounded-lg border border-white/20 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
