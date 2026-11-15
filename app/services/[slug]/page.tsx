import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactBlock, FaqBlock, TextSlider } from "@/components/site/blocks";
import { Btn, Frame, PageHero, PlusList, SectionHead, Steps } from "@/components/site/ui";
import { SERVICES, STEPS, WHY } from "@/lib/content";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: `${s.title} — Jadvix Services`, description: s.intro, alternates: { canonical: `/services/${s.slug}` } };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const i = SERVICES.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const s = SERVICES[i];
  const next = SERVICES[(i + 1) % SERVICES.length];

  return (
    <>
      <PageHero title={s.title} crumbs={[{ label: "Services", href: "/services" }, { label: s.short }]} shape="knot" />

      <section style={{ paddingBottom: "clamp(70px,8vw,115px)" }}>
        <div className="wrap">
          <Frame src={s.image} alt={s.title} className="dhero" parallax={0.14} priority />
          <div className="prose" style={{ marginTop: "clamp(40px,5vw,70px)" }}>
            <p className="ink" data-fade>
              {s.intro}
            </p>
            <h2 data-fade>What this service covers</h2>
            <p data-fade>{s.body}</p>

            <div className="split">
              <div data-fade>
                <h2 style={{ marginTop: 0 }}>What&apos;s included</h2>
                <PlusList items={s.bullets} />
                <div className="chips" style={{ marginTop: 30 }}>
                  {s.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Frame src="/img/jadvix-cube.webp" className="split__img" line />
            </div>

            <h2 data-fade>Why Jadvix</h2>
            <div className="caps" style={{ gridTemplateColumns: "repeat(3,minmax(0,1fr))", marginTop: 26 }}>
              {WHY.map((w, k) => (
                <article key={w.title} className="cap" data-fade data-delay={k * 0.08}>
                  <span className="cap__i">0{k + 1}</span>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="How it works" l1="Four words," l2="one process" center />
          <Steps items={STEPS} />
          <div className="note" style={{ marginTop: "clamp(40px,5vw,70px)" }} data-fade>
            <p>
              Next service: <b>{next.title}</b>
            </p>
            <div className="note__act">
              <Btn href={`/services/${next.slug}`}>View service</Btn>
              <Btn href="/services" variant="soft">
                All services
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <ContactBlock />
      <FaqBlock />
      <TextSlider />
    </>
  );
}
