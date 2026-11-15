import type { Metadata } from "next";
import Chrome3D from "@/components/site/Chrome3D";
import { ContactBlock, FaqBlock, Funfacts, ProductsGrid, TeamBlock, TextSlider } from "@/components/site/blocks";
import { Btn, Frame, PlusList, Ruler, SectionHead, Spark, Stat, Steps } from "@/components/site/ui";
import { FAQS, FOUNDATIONS, MARQUEE, SERVICES, STATS, STEPS, TECH } from "@/lib/content";

export const metadata: Metadata = {
  title: "Jadvix | Full-Service IT Company for Web, App, Ecommerce & Digital Marketing — UK & India",
  description:
    "Jadvix designs, develops, promotes and secures digital products. Website development, mobile & web apps, ecommerce, custom software, SEO and digital marketing from our offices in Ruislip (UK) and Chennai (India).",
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.slice(0, 6).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ============ HERO ============ */}
      <section className="hero t-dark">
        <div className="hero__aura" aria-hidden>
          <i />
          <i />
          <i />
        </div>
        <div className="hero__rule" />
        <div className="wrap">
          <div className="hero__frame">
            <h1 className="h-hero">
              <span className="hero__line" data-fade data-delay="0.75">
                Design<span className="dot-b">.</span> Develop<span className="dot-o">.</span>
              </span>
              <span className="hero__line" data-fade data-delay="0.85">
                <span className="hero__pill">
                  <span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/world.webp" alt="" />
                  </span>
                </span>
                Promote<span className="dot-r">.</span>
              </span>
              <span className="hero__line" data-fade data-delay="0.95">
                <span className="grad">Secure.</span>
              </span>
            </h1>
            <p className="hero__lead" data-fade data-delay="1.05">
              Jadvix is a full-service IT company building scalable websites, apps and digital experiences from the UK and India — reliable engineering fused with creative, conversion-focused design.
            </p>
            <div className="hero__cta" data-fade data-delay="1.15">
              <Btn href="/contact">Get a free project quote</Btn>
              <Btn href="/services" variant="soft">
                Explore services
              </Btn>
            </div>
            <div className="hero__meta" data-fade data-delay="1.25">
              <span>
                <i style={{ background: "var(--blue)" }} />
                Offices in the UK &amp; India
              </span>
              <span>
                <i style={{ background: "var(--orange)" }} />
                8+ services in-house
              </span>
              <span>
                <i style={{ background: "var(--red)" }} />2 products live
              </span>
            </div>
            <div className="hero__visual" data-fade data-delay="1">
              <Chrome3D shape="knot" />
              <div className="hero__img" data-tilt>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/hero-desk.webp" alt="Jadvix work displayed on a laptop and phone" data-parallax="0.12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CAPABILITY STRIP ============ */}
      <section className="strip" aria-label="Capabilities">
        <div className="strip__track">
          {[0, 1].map((copy) => (
            <div key={copy} style={{ display: "flex" }} aria-hidden={copy === 1}>
              {MARQUEE.map((m) => (
                <span key={m} className="strip__item">
                  {m}
                  <Spark className="spark" s={16} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="about__top">
            <span className="eyebrow" data-fade>
              About us
            </span>
            <h2 className="about__lede" data-reveal>
              End-to-end IT solutions for growing businesses. We don&apos;t just build websites — we craft complete digital ecosystems that are as reliable as they are creative.
            </h2>
            <Chrome3D shape="gyro" />
          </div>
          <div className="about__bot">
            <Frame src="/img/about-desk.webp" alt="Strategy, design, develop, grow — the Jadvix desk" className="about__img" line parallax={0.12} />
            <div className="about__copy">
              <p className="lead" data-fade>
                Based in India and the UK, Jadvix is a full-service IT company serving local and international clients. Our team combines development, design, marketing and consultancy under one roof, delivering secure, innovative technology from first idea to long after launch.
              </p>
              <div data-fade>
                <Btn href="/about">More about us</Btn>
              </div>
              <div className="bigstats">
                {STATS.slice(0, 2).map((s) => (
                  <div key={s.label} data-fade>
                    <div className="bigstat__n">
                      <Stat value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="bigstat__l">{s.label === "Countries" ? "Countries, one delivery team" : "Service disciplines in-house"}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES — stacked cards ============ */}
      <section className="sec t-dark glowbg">
        <div className="wrap">
          <SectionHead eyebrow="Services" l1="Solutions that" l2="drive results" shape="rings" />
          <div className="stack persp" data-stack>
            {SERVICES.slice(0, 5).map((s) => (
              <article key={s.slug} className="stack__card svc-card">
                <div className="svc-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.intro}</p>
                  <PlusList items={s.bullets} />
                  <div className="svc-card__more">
                    <Btn href={`/services/${s.slug}`}>Explore service</Btn>
                  </div>
                </div>
                <div className="frame frame--line svc-card__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt="" loading="lazy" />
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta" data-fade>
            <Btn href="/services">View all services</Btn>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="sec sec--tight">
        <div className="wrap">
          <SectionHead eyebrow="How it works" l1="Four words," l2="one process" center />
          <Steps items={STEPS} />
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <div className="persp clip">
        <section className="sec t-dark" data-rotate-in>
          <div className="wrap">
            <SectionHead eyebrow="Products" l1="Built in-house" l2="by Jadvix" shape="cubes" center />
            <ProductsGrid />
            <div className="center-cta" data-fade>
              <Btn href="/products">View all products</Btn>
            </div>
          </div>
        </section>
      </div>

      <TeamBlock />

      {/* ============ WHY CHOOSE US — bento ============ */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="eyebrow" data-fade style={{ marginBottom: 40 }}>
            Why choose us
          </span>
          <div className="bento">
            <div className="b b--4 b--photo" data-fade>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="b__bgimg" src="/img/academy-team.webp" alt="" loading="lazy" />
              <h3>One accountable team</h3>
              <p>Design, development, marketing and security from the same people — no hand-offs between agencies.</p>
            </div>
            <div className="b b--4" data-fade data-delay="0.08">
              <h3>Two offices, extended hours</h3>
              <p>Ruislip and Chennai, working across both time zones for local and international clients.</p>
              <div className="b__foot offices-mini">
                <span>
                  <b>United Kingdom</b>Ruislip, HA4 7AE
                </span>
                <span>
                  <b>India</b>Chennai, 600 015
                </span>
              </div>
            </div>
            <div className="b b--big t-dark" data-fade data-delay="0.16">
              <h3>Strategic solutions for lasting impact</h3>
              <PlusList items={["Bespoke craftsmanship", "Future-proof architecture", "Data-driven insights", "Security built into every layer", "Post-launch support"]} />
              <Btn href="/services">View all services</Btn>
              <div className="frame" style={{ borderRadius: 12, aspectRatio: "16/10", marginTop: "auto", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/jadvix-cube.webp" alt="" loading="lazy" />
              </div>
            </div>
            <div className="b b--3" data-fade>
              <Chrome3D shape="molecule" className="b__c3d" />
              <div className="b__big">
                24<small>/7</small>
              </div>
              <h3 style={{ marginTop: 14 }}>Always-on support</h3>
              <p>Monitoring, maintenance and support options after launch.</p>
            </div>
            <div className="b b--2 b--photo" data-fade data-delay="0.08">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="b__bgimg" src="/img/svc-security.webp" alt="" loading="lazy" />
              <h3>Secure &amp; future-ready</h3>
            </div>
            <div className="b b--3" data-fade data-delay="0.16">
              <h3>Built with the best</h3>
              <p>Modern, production-grade stacks, chosen per project.</p>
              <div className="b__foot chips">
                {TECH.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Funfacts />
      <Ruler />

      {/* ============ PRINCIPLES RAIL ============ */}
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Our foundations" l1="Four pillars behind" l2="every partnership" shape="molecule" />
        </div>
        <div className="rail" data-rail>
          <div className="rail__track">
            {FOUNDATIONS.map((f, i) => (
              <article key={f.title} className="vcard">
                <span className="vcard__n">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <div className="vcard__k">Jadvix foundation</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBlock />
      <FaqBlock />
      <TextSlider />
    </>
  );
}
