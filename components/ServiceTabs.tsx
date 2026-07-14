"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

type ServiceCard = {
  icon: string;
  tag: string;
  title: string;
  description: string;
};

const TABS: { id: string; label: string; cards: ServiceCard[] }[] = [
  {
    id: "develop",
    label: "Develop",
    cards: [
      {
        icon: "web",
        tag: "Websites",
        title: "Website Design & Development",
        description:
          "Visually appealing, user-friendly and highly functional websites that represent your brand accurately and drive conversions.",
      },
      {
        icon: "smartphone",
        tag: "Apps",
        title: "Mobile & Web Applications",
        description:
          "Innovative iOS, Android and web apps that enhance business operations and deepen customer engagement across every device.",
      },
      {
        icon: "code",
        tag: "Software",
        title: "Custom Software",
        description:
          "Bespoke software solutions that address your specific business needs and streamline the workflows off-the-shelf tools can't.",
      },
      {
        icon: "cart",
        tag: "Ecommerce",
        title: "Ecommerce Stores",
        description:
          "Fast, trustworthy online stores with clean catalogues, frictionless checkout and payment integrations that just work.",
      },
    ],
  },
  {
    id: "digital",
    label: "Digital",
    cards: [
      {
        icon: "palette",
        tag: "Design",
        title: "Graphic & UI/UX Design",
        description:
          "Brand identities, marketing collateral and user-centred interfaces that drive engagement and conversion across all platforms.",
      },
      {
        icon: "video",
        tag: "Media",
        title: "Video Editing",
        description:
          "Polished promotional and social video content that tells your story, holds attention and strengthens your brand.",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    cards: [
      {
        icon: "chart",
        tag: "SEO",
        title: "Search Engine Optimisation",
        description:
          "Technical and content SEO that puts your business in front of the right audience on Google — and keeps it there.",
      },
      {
        icon: "megaphone",
        tag: "Growth",
        title: "Digital Marketing & Ads",
        description:
          "Data-driven social media and performance ad campaigns focused on measurable ROI and rapid market acquisition.",
      },
    ],
  },
  {
    id: "consult",
    label: "Consult",
    cards: [
      {
        icon: "brain",
        tag: "Strategy",
        title: "IT Consultancy",
        description:
          "Straight-talking guidance on architecture, technology choices and digital strategy from a team that ships real products.",
      },
      {
        icon: "shield",
        tag: "Security",
        title: "Security & Maintenance",
        description:
          "Security reviews, monitoring and post-launch support that keep your website and applications fast, safe and up to date.",
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    cards: [
      {
        icon: "school",
        tag: "Academy",
        title: "Jadvix Academy",
        description:
          "Practical training in IT, digital marketing and design — with internships on real projects and a path into our team.",
      },
      {
        icon: "group",
        tag: "Teams",
        title: "Corporate Upskilling",
        description:
          "Custom workshops that modernise your workforce's technical and digital capabilities with hands-on learning.",
      },
    ],
  },
];

export default function ServiceTabs() {
  const [active, setActive] = useState("develop");
  const current = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <div>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Service categories"
        className="mb-16 flex flex-wrap justify-center gap-3 border-b border-outline-variant/30 pb-4 md:gap-4"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={`rounded-xl px-6 py-3 text-label-md font-semibold transition-all md:px-8 md:py-4 ${
              active === tab.id ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-ink-muted hover:bg-surface-mid hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="grid min-h-[420px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        key={current.id}
      >
        {current.cards.map((card, i) => (
          <article
            key={card.title}
            className="hover-lift flex flex-col justify-between rounded-card-lg border border-outline-variant/10 bg-white p-8 shadow-card"
            style={{ animation: `fade-up 0.5s ease ${i * 0.06}s both` }}
          >
            <div>
              <div className="mb-6 flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                  <Icon name={card.icon} className="h-7 w-7" />
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-label-md font-semibold text-primary">
                  {card.tag}
                </span>
              </div>
              <h3 className="mb-4 text-headline-md text-primary">{card.title}</h3>
              <p className="mb-6 text-body-md text-ink-muted">{card.description}</p>
            </div>
            <Link href="/contact" className="group flex items-center gap-2 text-label-md font-bold text-secondary transition-all hover:gap-3">
              Get a free quote
              <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
