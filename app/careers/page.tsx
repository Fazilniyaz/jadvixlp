import type { Metadata } from "next";
import { ContactBlock, Funfacts, TextSlider } from "@/components/site/blocks";
import { Btn, Frame, PageHero, SectionHead, Steps } from "@/components/site/ui";
import { OPENINGS, PATHWAY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers — Learn, Intern, Join the Jadvix Team",
  description:
    "How to join Jadvix: train at Jadvix Academy, earn a paid internship by clearing each stage, and convert strong internship performance into a full-time offer. Plus the Ropix introducer programme.",
  alternates: { canonical: "/careers" },
};

const GALLERY = ["/img/academy-team.webp", "/img/svc-web.webp", "/img/about-desk.webp", "/img/svc-mobile.webp", "/img/hero-desk.webp", "/img/academy-agentic.webp", "/img/svc-marketing.webp"];

export default function CareersPage() {
  return (
    <>
      <PageHero title="Careers" crumbs={[{ label: "Careers" }]} shape="cross" />

      <section style={{ paddingBottom: "clamp(70px,9vw,130px)" }}>
        <div className="wrap">
          <div className="gallery">
            {GALLERY.map((src) => (
              <Frame key={src} src={src} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec t-dark glowbg">
        <div className="wrap">
          <SectionHead eyebrow="Openings" l1="Be a Jadvixer." l2="Like us" shape="knot" />
          <div className="jobs">
            {OPENINGS.map((o, i) => (
              <article key={o.title} className="job" data-fade data-delay={i * 0.08}>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <div className="job__meta">
                  {o.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <Btn href={o.href} variant="soft">
                  {o.cta}
                </Btn>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 30, maxWidth: 760, fontSize: 14.5 }} data-fade>
            Internship places are capped by confirmed intern capacity per cohort, so clearing an evaluation keeps you eligible but does not guarantee a place. For anything else, write to contact@jadvix.uk with a short introduction.
          </p>
        </div>
      </section>

      <Funfacts />

      <div className="persp clip">
        <section className="sec sec--tight" data-rotate-in>
          <div className="wrap">
            <SectionHead eyebrow="The progression model" l1="From learner" l2="to professional" center />
            <Steps items={PATHWAY} cols={3} />
            <div className="center-cta" data-fade>
              <Btn href="https://academy.jadvix.uk">Apply to the Academy</Btn>
            </div>
          </div>
        </section>
      </div>

      <ContactBlock />
      <TextSlider text="Join us" cta="Apply now" href="https://academy.jadvix.uk" />
    </>
  );
}
