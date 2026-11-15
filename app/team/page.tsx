import type { Metadata } from "next";
import { ContactBlock, TeamGrid, TextSlider } from "@/components/site/blocks";
import { Btn, PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Our Team — The Leadership Behind Jadvix",
  description: "Meet the leadership team behind Jadvix — the people guiding our web, app, marketing and consultancy work across the UK and India.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero title="Meet the team" crumbs={[{ label: "Team" }]} shape="cross" />
      <section className="sec" style={{ paddingTop: "clamp(40px,6vw,90px)" }}>
        <div className="wrap">
          <TeamGrid />
          <div className="center-cta" data-fade>
            <Btn href="/careers">Join with us</Btn>
          </div>
        </div>
      </section>
      <ContactBlock />
      <TextSlider />
    </>
  );
}
