import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactBlock, ProductCard, TextSlider } from "@/components/site/blocks";
import { Btn, Frame, PageHero, SectionHead, Steps } from "@/components/site/ui";
import { PRODUCTS } from "@/lib/content";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PRODUCTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: `${p.name} — ${p.tagline}`, description: p.summary, alternates: { canonical: `/products/${p.slug}` } };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const p = PRODUCTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const other = PRODUCTS.find((x) => x.slug !== p.slug);

  return (
    <>
      <PageHero title={p.name} crumbs={[{ label: "Products", href: "/products" }, { label: p.name }]} shape={p.slug === "ropix" ? "rings" : "molecule"} />

      <section style={{ paddingBottom: "clamp(70px,9vw,140px)" }}>
        <div className="wrap">
          <Frame src={p.cover} alt={`${p.name} — ${p.tagline}`} className="dhero" parallax={0.14} priority />
          <div className="metarow" data-fade>
            <span>
              Product by:<b>Jadvix LTD</b>
            </span>
            <span>
              Status:<b>{p.status}</b>
            </span>
            <span>
              Category:<b>{p.category}</b>
            </span>
            <span>
              Market:<b>{p.market}</b>
            </span>
          </div>

          <div className="ov">
            <div>
              <h2 className="h-40" data-reveal>
                Product overview
              </h2>
              <div style={{ marginTop: 26 }} data-fade>
                <Btn href={p.url}>{`Visit ${p.urlLabel}`}</Btn>
              </div>
            </div>
            <div>
              <p className="ink" style={{ fontSize: "clamp(19px,1.7vw,25px)", lineHeight: 1.5 }} data-fade>
                {p.summary}
              </p>
              {p.overview.map((t) => (
                <p key={t.slice(0, 24)} data-fade>
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec t-dark">
        <div className="wrap">
          <SectionHead eyebrow="Capabilities" l1={p.capabilitiesTitle} shape="knot" />
          <div className="caps">
            {p.capabilities.map((c, i) => (
              <article key={c.title} className="cap" data-fade data-delay={(i % 4) * 0.07}>
                <span className="cap__i">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="tiles" style={{ marginBottom: "clamp(40px,6vw,90px)" }}>
            {p.facts.map((f, i) => (
              <div key={f.label} className="tile" style={{ minHeight: 200 }} data-fade data-delay={i * 0.08}>
                <span className="tile__k">{f.label}</span>
                <span className="tile__n" style={{ fontSize: "clamp(44px,5vw,76px)" }}>
                  {f.value}
                </span>
              </div>
            ))}
          </div>
          <div className={`gal${p.gallery.length === 2 ? " gal--2" : ""}`}>
            {p.gallery.map((g) => (
              <Frame key={g.src} src={g.src} alt={g.alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="How it works" l1={p.stepsTitle} center />
          <Steps items={p.steps} />
          <div className="note" style={{ marginTop: "clamp(40px,5vw,70px)" }} data-fade>
            <p>{p.note}</p>
            <div className="note__act">
              <Btn href={p.url}>{`Go to ${p.urlLabel}`}</Btn>
              <Btn href="/contact" variant="soft">
                Enquire
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {other && (
        <section className="sec t-dark">
          <div className="wrap">
            <SectionHead eyebrow="Next product" l1="Also built" l2="by Jadvix" />
            <ProductCard p={other} wide />
          </div>
        </section>
      )}

      <ContactBlock />
      <TextSlider />
    </>
  );
}
