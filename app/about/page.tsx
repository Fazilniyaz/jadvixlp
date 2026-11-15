import type { Metadata } from "next";
import Chrome3D from "@/components/site/Chrome3D";
import { ContactBlock, FaqBlock, TeamBlock, TextSlider } from "@/components/site/blocks";
import { Btn, Frame, PageHero, Ruler, SectionHead, Spark, Stat, Steps } from "@/components/site/ui";
import { FOUNDATIONS, JOURNEY, STATS, VISION } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us — Full-Service IT Company in the UK & India",
  description:
    "Jadvix is a full-service IT company with offices in Ruislip (UK) and Chennai (India). Our vision, foundations, journey and the leadership behind our web, app, ecommerce and digital marketing services.",
  alternates: { canonical: "/about" },
};

const TILE_IMG = [null, "/img/world.webp", null, "/img/svc-security.webp"];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About us" crumbs={[{ label: "About us" }]} shape="gyro" />

      {/* MISSION */}
      <div className="persp clip">
        <section className="sec t-dark" data-rotate-in>
          <div className="wrap">
            <span className="eyebrow" data-fade>
              Not just another IT company
            </span>
            <div className="mission" style={{ marginTop: 30 }}>
              <Frame src="/img/academy-team.webp" alt="The Jadvix team reviewing work" className="mission__img" line parallax={0.12} />
              <div className="mission__main">
                <h2 className="h-sec" style={{ paddingLeft: 0 }} data-reveal>
                  <span className="l1">Bridging stability</span>
                  <span className="l2" style={{ paddingLeft: 0 }}>
                    and innovation
                  </span>
                </h2>
                <div className="mission__cols">
                  <div data-fade>
                    <h3>Our Vision</h3>
                    <p>
                      To be the definitive catalyst for digital growth — where businesses don&apos;t just keep up with technology, they lead with it. We turn technological complexity into strategic clarity.
                    </p>
                    <Btn href="/services">Explore services</Btn>
                  </div>
                  <i />
                  <div data-fade data-delay="0.1">
                    <h3>What it means</h3>
                    <ul className="dotlist">
                      {VISION.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                      <li>One team across two time zones, the UK and India.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* STAT TILES */}
      <section className="sec sec--tight" style={{ position: "relative" }}>
        <div className="wrap">
          <div className="tiles">
            {STATS.map((s, i) => (
              <div key={s.label} className={`tile${TILE_IMG[i] ? " tile--photo" : ""}`} data-fade data-delay={i * 0.08}>
                {TILE_IMG[i] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="b__bgimg" src={TILE_IMG[i] as string} alt="" loading="lazy" />
                )}
                <span className="tile__k">{s.label}</span>
                <div className="tile__row">
                  <span className="tile__n">
                    <Stat value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="tile__t">{s.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Ruler />

      {/* WHY CHOOSE */}
      <section className="sec">
        <div className="wrap choose">
          <div className="choose__side">
            <h2 className="h-sec" style={{ paddingLeft: 0, fontSize: "clamp(40px,6vw,104px)" }} data-reveal>
              Why choose us
            </h2>
            <p className="lead" data-fade>
              We don&apos;t just deliver projects; we build digital legacies. Our approach combines agency agility with enterprise-grade stability — four foundations sit behind every partnership.
            </p>
            <Chrome3D shape="knot" style={{ width: "clamp(120px,15vw,240px)", marginTop: 30 }} />
          </div>
          <div className="choose__list">
            {FOUNDATIONS.map((f, i) => (
              <article key={f.title} className="ccard" data-fade data-delay={(i % 2) * 0.1}>
                <div className="ccard__h">
                  <Spark s={34} />
                  <h3>{f.title}</h3>
                </div>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TeamBlock />

      {/* JOURNEY */}
      <section className="sec sec--tight">
        <div className="wrap">
          <SectionHead eyebrow="Our journey" l1="A story of steady," l2="strategic growth" center />
          <Steps items={JOURNEY} label="Chapter" cols={3} />
        </div>
      </section>

      <FaqBlock />
      <ContactBlock direct />
      <TextSlider />
    </>
  );
}
