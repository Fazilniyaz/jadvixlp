import type { Metadata } from "next";
import { ContactBlock, ProductsGrid, TextSlider } from "@/components/site/blocks";
import { PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Our Products — Ropix & Jadvix Academy",
  description:
    "Products built in-house by Jadvix LTD: Ropix, the AI voice employee for UK businesses, and Jadvix Academy, a 10-month train-to-hire programme in Full Stack Development with Agentic AI.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Products" crumbs={[{ label: "Products" }]} shape="cubes" />
      <section className="sec t-dark" style={{ paddingTop: "clamp(60px,8vw,120px)" }}>
        <div className="wrap">
          <p className="lead ink" style={{ maxWidth: 760, marginBottom: "clamp(40px,5vw,70px)" }} data-fade>
            Alongside client work, Jadvix builds and runs its own products — to the same standard of craft we bring to every engagement. Two are live today.
          </p>
          <ProductsGrid wide />
        </div>
      </section>
      <ContactBlock />
      <TextSlider />
    </>
  );
}
