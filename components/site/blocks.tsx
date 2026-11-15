import Link from "next/link";
import { SITE } from "@/lib/site";
import { FAQS, PRODUCTS, STATS, TEAM, type Faq, type Product } from "@/lib/content";
import Accordion from "@/components/site/Accordion";
import Chrome3D from "@/components/site/Chrome3D";
import ContactForm from "@/components/site/ContactForm";
import { ArrowUR, Btn, Burst, SectionHead, Stat } from "@/components/site/ui";

/* ---------- contact (always dark) ---------- */
export function ContactBlock({ direct = false }: { direct?: boolean }) {
  const { uk, india } = SITE.offices;
  return (
    <section className="sec t-dark" id="contact">
      <div className="wrap contact">
        <div className="contact__side">
          <h2 className="h-60" data-reveal>
            Have a project idea in mind? Let&apos;s get started
          </h2>
          {direct && (
            <div className="contact__direct" data-fade>
              <a href={uk.phoneHref}>{SITE.phoneUK}</a>
              <a href={india.phoneHref}>{SITE.phoneIN}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          )}
          <div className="locs" data-fade>
            {[uk, india].map((o) => (
              <div className="loc" key={o.title}>
                <h4>{o.city}</h4>
                <p>
                  {o.lines.map((l) => (
                    <span key={l} style={{ display: "block" }}>
                      {l}
                    </span>
                  ))}
                </p>
                {!direct && <a href={o.phoneHref}>{o.phone}</a>}
              </div>
            ))}
          </div>
          {!direct && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 28, marginTop: 36 }} data-fade>
              <a className="tlink" href={`mailto:${SITE.email}`}>
                {SITE.email} <ArrowUR s={13} />
              </a>
              <a className="tlink" href="https://ropix.ai" target="_blank" rel="noopener noreferrer">
                Ropix <ArrowUR s={13} />
              </a>
              <a className="tlink" href="https://academy.jadvix.uk" target="_blank" rel="noopener noreferrer">
                Academy <ArrowUR s={13} />
              </a>
            </div>
          )}
          <Chrome3D shape="cross" />
        </div>
        <div data-fade data-delay="0.1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* ---------- faq ---------- */
export function FaqBlock({ items = FAQS.slice(0, 5), grouped = false }: { items?: Faq[]; grouped?: boolean }) {
  return (
    <section className="sec" id="faq">
      <div className="wrap faq">
        <div className="faq__side">
          <span className="eyebrow" data-fade>
            Answers
          </span>
          <h2 className="h-60" style={{ marginTop: 30 }} data-reveal>
            Frequently Asked Questions
          </h2>
          <div className="faq__card" data-fade>
            <div className="faces">
              {TEAM.slice(0, 3).map((m) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={m.slug} src={m.photo} alt="" loading="lazy" />
              ))}
            </div>
            <h3>Find the right solution for you now</h3>
            <Btn href="/contact">Book a quick call</Btn>
          </div>
        </div>
        <Accordion items={items} grouped={grouped} />
      </div>
    </section>
  );
}

/* ---------- closing marquee (always dark) ---------- */
export function TextSlider({ text = "Let’s talk", cta = "Book a call now", href = "/contact" }: { text?: string; cta?: string; href?: string }) {
  const row = Array.from({ length: 8 });
  return (
    <section className="tslide t-dark t-deep" aria-label={text}>
      <Btn href={href}>{cta}</Btn>
      {[1, -1].map((dir) => (
        <div key={dir} className="tslide__row" data-drift={dir} aria-hidden>
          {row.map((_, i) => (
            <span key={i} style={{ display: "contents" }}>
              <span>{text}</span>
              <Burst />
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}

/* ---------- team ---------- */
export function TeamGrid() {
  return (
    <div className="team">
      {TEAM.map((m, i) => (
        <Link key={m.slug} href={`/team/${m.slug}`} className="member" data-fade data-delay={i * 0.08}>
          <div className="member__img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.photo} alt={m.name} loading="lazy" />
          </div>
          <div className="member__bar">
            <div>
              <div className="member__name">{m.name}</div>
              <div className="member__role">{m.role}</div>
            </div>
            <span className="member__go">
              <ArrowUR />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function TeamBlock() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead eyebrow="Leadership" l1="Meet the people" l2="behind Jadvix" shape="cross" />
        <TeamGrid />
        <div className="center-cta" data-fade>
          <Btn href="/careers">Join with us</Btn>
        </div>
      </div>
    </section>
  );
}

/* ---------- metrics ---------- */
export function Funfacts() {
  return (
    <section className="sec">
      <div className="wrap facts">
        <div className="facts__intro">
          <span className="eyebrow" data-fade>
            At a glance
          </span>
          <h2 className="h-60" style={{ marginTop: 30 }} data-reveal>
            Metrics that prove value
          </h2>
          <p data-fade>
            Jadvix is a full-service IT company with offices in the UK and India — development, design, marketing and consultancy under one roof, delivered by one accountable team.
          </p>
          <div data-fade>
            <Btn href="/services">View all services</Btn>
          </div>
        </div>
        <div>
          {STATS.map((s) => (
            <div className="fact" key={s.label} data-fade>
              <div className="fact__n">
                <Stat value={s.value} suffix={s.suffix} />
              </div>
              <p className="fact__t">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- product cards ---------- */
export function ProductCard({ p, wide = false, delay = 0 }: { p: Product; wide?: boolean; delay?: number }) {
  return (
    <Link href={`/products/${p.slug}`} className={`work${wide ? " work--wide" : ""}`} data-fade data-delay={delay}>
      <div className="work__img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.cover} alt={`${p.name} — ${p.tagline}`} loading="lazy" />
        <span className="work__badge">
          <i />
          {p.status}
        </span>
        <span className="work__view" aria-hidden>
          View
        </span>
      </div>
      <div className="work__meta">
        <div>
          <h3>{p.name}</h3>
          <div className="work__tags">{p.tags.join(", ")}</div>
          {wide && <p className="work__sum">{p.summary}</p>}
        </div>
      </div>
    </Link>
  );
}

export function ProductsGrid({ wide = false }: { wide?: boolean }) {
  return (
    <div className="works" style={wide ? { gridTemplateColumns: "1fr", gap: "clamp(40px,5vw,80px)" } : undefined}>
      {PRODUCTS.map((p, i) => (
        <ProductCard key={p.slug} p={p} wide={wide} delay={wide ? 0 : i * 0.1} />
      ))}
    </div>
  );
}
