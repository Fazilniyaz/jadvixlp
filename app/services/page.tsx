import type { Metadata } from "next";
import { ContactBlock, FaqBlock, TextSlider } from "@/components/site/blocks";
import { Btn, PageHero } from "@/components/site/ui";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "IT Services — Web Development, Apps, Ecommerce, SEO & Consultancy",
  description:
    "Explore Jadvix services: website design & development, mobile & web apps, ecommerce stores, custom software, digital marketing & SEO, graphic design, video editing and IT consultancy — delivered from the UK and India.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" crumbs={[{ label: "Services" }]} shape="rings" />

      <section style={{ paddingBottom: "clamp(60px,8vw,120px)" }}>
        <div className="wrap">
          <p className="lead ink" style={{ maxWidth: 760, paddingBottom: "clamp(40px,5vw,70px)" }} data-fade>
            End-to-end IT solutions — from your first website to enterprise software, and from launch-day marketing to long-term security. Eight disciplines, one accountable team across the UK and India.
          </p>
          {SERVICES.map((s, i) => (
            <article key={s.slug} className="srow" id={s.slug}>
              <div>
                <div className="srow__t">
                  <span className="srow__n">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{s.title}</h2>
                </div>
                <div className="chips">
                  {s.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <p>{s.intro}</p>
                <Btn href={`/services/${s.slug}`}>Service details</Btn>
              </div>
              <div className="frame frame--line srow__img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.title} loading={i < 2 ? "eager" : "lazy"} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactBlock />
      <FaqBlock />
      <TextSlider />
    </>
  );
}
