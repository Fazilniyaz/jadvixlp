import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeamGrid, TextSlider } from "@/components/site/blocks";
import { Btn, Frame, PageHero, SectionHead } from "@/components/site/ui";
import { TEAM } from "@/lib/content";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = TEAM.find((x) => x.slug === params.slug);
  if (!m) return {};
  return { title: `${m.name} — ${m.role}`, description: `${m.name}, ${m.role} at Jadvix.`, alternates: { canonical: `/team/${m.slug}` } };
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const m = TEAM.find((x) => x.slug === params.slug);
  if (!m) notFound();
  const { uk } = SITE.offices;

  return (
    <>
      <PageHero title={m.name} crumbs={[{ label: "Team", href: "/team" }, { label: m.name }]} shape="molecule" />
      <section className="sec" style={{ paddingTop: "clamp(40px,6vw,90px)" }}>
        <div className="wrap">
          <div className="tdcard" data-fade>
            <Frame src={m.photo} alt={m.name} className="tdcard__img" priority />
            <div>
              <h2>{m.name}</h2>
              <div className="tdcard__role">{m.role}</div>
              <p className="tdcard__bio">{m.bio}</p>
              <div className="tdinfo">
                <a href={uk.phoneHref}>
                  {SITE.phoneUK}
                  <small>Phone — UK office</small>
                </a>
                <a href={`mailto:${SITE.email}`}>
                  {SITE.email}
                  <small>Email address</small>
                </a>
                <a href={SITE.offices.india.phoneHref}>
                  {SITE.phoneIN}
                  <small>Phone — India office</small>
                </a>
                <div>
                  {uk.lines[1]}
                  <small>{uk.lines[2]}</small>
                </div>
              </div>
              <div style={{ marginTop: 34 }}>
                <Btn href="/contact">Get in touch</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="Leadership" l1="The rest of" l2="the team" />
          <TeamGrid />
        </div>
      </section>
      <TextSlider />
    </>
  );
}
