import type { Metadata } from "next";
import { ContactBlock, FaqBlock, TextSlider } from "@/components/site/blocks";
import { PageHero } from "@/components/site/ui";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQs — Web Development, Pricing, Support & Academy Questions",
  description:
    "Answers to frequently asked questions about Jadvix: where we're based, technologies we use, post-launch support, project timelines, digital marketing and the Jadvix Academy internship programme.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero title="FAQs" crumbs={[{ label: "FAQs" }]} shape="molecule" />
      <FaqBlock items={FAQS} grouped />
      <ContactBlock />
      <TextSlider />
    </>
  );
}
