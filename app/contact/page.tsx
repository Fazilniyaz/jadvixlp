import type { Metadata } from "next";
import Clock from "@/components/site/Clock";
import { ContactBlock, TextSlider } from "@/components/site/blocks";
import { ArrowUR, Frame, PageHero } from "@/components/site/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Project Quote (UK & India Offices)",
  description:
    "Get in touch with Jadvix for a free project quote. UK office: College House, Ruislip HA4 7AE (+44 7355 803386). India office: Mount Road, Saidapet, Chennai 600015 (+91 94896 44108). Email contact@jadvix.uk.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const offices = [SITE.offices.uk, SITE.offices.india];
  return (
    <>
      <PageHero title="Contact us" crumbs={[{ label: "Contact us" }]} shape="rings" />
      <ContactBlock direct />

      <section className="sec">
        <div className="wrap">
          <h2 className="h-60" style={{ maxWidth: 900 }} data-reveal>
            Two offices, two time zones — and one team you can reach in either.
          </h2>
          <Frame src="/img/world.webp" alt="" className="dhero" parallax={0.14} />
          <style>{`.sec .dhero{margin:clamp(34px,5vw,70px) 0 22px}`}</style>
          <div className="offices">
            {offices.map((o, i) => (
              <article key={o.title} className="office" data-fade data-delay={i * 0.1}>
                <div>
                  <div className="office__time">
                    <Clock timeZone={o.timeZone} />
                  </div>
                  <div className="office__city">{o.city}</div>
                </div>
                <div className="office__body">
                  <p>
                    {o.lines.map((l) => (
                      <span key={l} style={{ display: "block" }}>
                        {l}
                      </span>
                    ))}
                  </p>
                  <a className="tlink" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`} target="_blank" rel="noopener noreferrer">
                    Map location <ArrowUR s={13} />
                  </a>
                  <div className="office__k">Contact us</div>
                  <a className="office__tel" href={o.phoneHref}>
                    {o.phone}
                  </a>
                  <a className="office__tel" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TextSlider />
    </>
  );
}
