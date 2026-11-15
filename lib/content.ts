/**
 * All site copy lives here so pages stay layout-only.
 * Facts come from the existing Jadvix site, the Ropix product docs and academy.jadvix.uk.
 */

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  body: string;
  bullets: string[];
  tags: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    short: "Web Design",
    intro:
      "High-performance, responsive websites that blend technical stability with premium agency aesthetics — engineered for search rankings and conversions.",
    body: "Visually appealing, user-friendly and highly functional websites that represent your brand accurately and drive conversions. A standard business website usually takes 2–6 weeks; larger builds are planned in milestones with a clear timeline agreed before work begins.",
    bullets: ["Responsive, mobile-first builds", "Conversion-focused UX", "Technical SEO foundations", "CMS & content setup", "Performance tuning"],
    tags: ["Business Websites", "Landing Pages", "CMS", "SEO-Ready", "React & Next.js"],
    image: "/img/svc-web.webp",
  },
  {
    slug: "mobile-web-apps",
    title: "Mobile & Web Apps",
    short: "Apps",
    intro: "Scalable iOS, Android and web applications built on modern, cloud-native technologies.",
    body: "Innovative iOS, Android and web apps that enhance business operations and deepen customer engagement across every device — built on React, Next.js and native mobile frameworks with robust APIs behind them.",
    bullets: ["iOS & Android apps", "Progressive web apps", "API & backend engineering", "Cloud-native architecture", "App store launch support"],
    tags: ["iOS", "Android", "Web Apps", "APIs", "Cloud-Native"],
    image: "/img/svc-mobile.webp",
  },
  {
    slug: "ecommerce-stores",
    title: "Ecommerce Stores",
    short: "Ecommerce",
    intro: "Conversion-focused online stores built to launch and sell fast.",
    body: "Fast, trustworthy online stores with clean catalogues, frictionless checkout and payment integrations that just work — planned in milestones so you can start selling sooner.",
    bullets: ["Storefront design", "Clean product catalogues", "Frictionless checkout", "Payment integrations", "Order & stock workflows"],
    tags: ["Online Stores", "Checkout", "Payments", "Catalogues", "Analytics"],
    image: "/img/dashboards.webp",
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    short: "Software",
    intro: "Bespoke platforms and internal tools tailored to your workflows.",
    body: "Bespoke software solutions that address your specific business needs and streamline the workflows off-the-shelf tools can't. Technology is chosen per project, never one-size-fits-all.",
    bullets: ["Internal tools & portals", "Workflow automation", "System integrations", "Data & reporting", "Modular, future-proof design"],
    tags: ["Platforms", "Internal Tools", "Automation", "Integrations", "Dashboards"],
    image: "/img/svc-cloud.webp",
  },
  {
    slug: "digital-marketing-seo",
    title: "Digital Marketing & SEO",
    short: "Marketing",
    intro: "Data-driven strategies that increase visibility, drive traffic and generate quality leads.",
    body: "Technical and content SEO that puts your business in front of the right audience on Google — and keeps it there — alongside social media and performance ad campaigns focused on measurable ROI.",
    bullets: ["Technical & content SEO", "Social media campaigns", "Performance advertising", "Lead generation", "Measurement & reporting"],
    tags: ["SEO", "Social Media", "Paid Ads", "Lead Generation", "Analytics"],
    image: "/img/svc-marketing.webp",
  },
  {
    slug: "graphic-ui-ux-design",
    title: "Graphic & UI/UX Design",
    short: "Design",
    intro: "Brand systems, identities and interfaces with agency-grade polish.",
    body: "Brand identities, marketing collateral and user-centred interfaces that drive engagement and conversion across all platforms.",
    bullets: ["Brand identity systems", "UI/UX for web & app", "Marketing collateral", "Design guidelines", "Prototyping"],
    tags: ["Branding", "UI/UX", "Collateral", "Guidelines", "Prototypes"],
    image: "/img/svc-design.webp",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    short: "Video",
    intro: "Sharp, on-brand video content for web, social and campaigns.",
    body: "Polished promotional and social video content that tells your story, holds attention and strengthens your brand.",
    bullets: ["Promotional videos", "Social media edits", "Brand storytelling", "Motion titles & graphics", "Campaign cut-downs"],
    tags: ["Promo", "Social", "Storytelling", "Motion", "Campaigns"],
    image: "/img/jadvix-cube.webp",
  },
  {
    slug: "it-consultancy-security",
    title: "IT Consultancy & Security",
    short: "Consultancy",
    intro: "Honest, practical technology guidance from strategy to delivery — with security built into every layer.",
    body: "Straight-talking guidance on architecture, technology choices and digital strategy from a team that ships real products, plus security reviews, monitoring and post-launch support that keep your website and applications fast, safe and up to date.",
    bullets: ["Architecture & tech strategy", "Security reviews", "Monitoring & maintenance", "Cloud & DevOps guidance", "Post-launch support"],
    tags: ["Strategy", "Security", "Cloud", "DevOps", "Support"],
    image: "/img/svc-security.webp",
  },
];

export const STEPS = [
  { title: "Design", body: "We map your goals and users, then shape a clear, conversion-focused experience before a line of code is written." },
  { title: "Develop", body: "Modern, production-grade stacks chosen per project — built in milestones against a timeline agreed up front." },
  { title: "Promote", body: "SEO, social and performance campaigns that put the product in front of the right audience and measure what works." },
  { title: "Secure", body: "Secure coding, encrypted connections, access controls and ongoing monitoring keep everything fast, safe and up to date." },
];

export const STATS = [
  { value: 2, suffix: "", label: "Countries", note: "Offices in Ruislip, UK and Chennai, India — one delivery team." },
  { value: 8, suffix: "+", label: "Services", note: "Eight disciplines under one roof, from websites to consultancy." },
  { value: 100, suffix: "%", label: "In-House Delivery", note: "Design, development, marketing and security by our own team." },
  { value: 24, suffix: "/7", label: "Support & Monitoring", note: "Post-launch monitoring, maintenance and support options." },
];

export const WHY = [
  { title: "Bespoke Craftsmanship", body: "No templates, no shortcuts. Every solution is engineered from the ground up to fit your business." },
  { title: "Future-Proof Architecture", body: "Modern tech stacks and modular designs let your systems evolve as you grow." },
  { title: "Data-Driven Insights", body: "Strategy backed by hard numbers — we measure and optimise every touchpoint." },
];

export const FOUNDATIONS = [
  { title: "Holistic Integration", body: "We orchestrate harmony between technology, design and business goals — not just features." },
  { title: "Mastery & Expertise", body: "Hands-on specialists delivering technical excellence without compromise on security." },
  { title: "Impactful Partnership", body: "We align our success with your results, building long-term value at every touchpoint." },
  { title: "Agility", body: "Rapid adaptation to market shifts while maintaining the stability you depend on." },
];

export const VISION = [
  "Empowering businesses with practical, honest tech guidance.",
  "Integrating design, development, marketing and security at scale.",
  "Fostering a culture of relentless digital curiosity through our Academy.",
];

export const JOURNEY = [
  { title: "The Beginning — Chennai", body: "Jadvix started in India with a simple mission: make professional websites, apps and digital marketing accessible to growing businesses." },
  { title: "UK Expansion — Ruislip", body: "We opened our UK office to serve local and international clients, operating as one team across two time zones." },
  { title: "Academy & Products", body: "Jadvix Academy launched to train the next generation of talent, alongside our own product lab building Ropix." },
];

export type Member = { slug: string; name: string; role: string; photo: string; bio: string };

export const TEAM: Member[] = [
  { slug: "jachin-raja", name: "Jachin Raja", role: "CEO & Founder", photo: "/team/jachin.jpg", bio: "Jachin founded Jadvix and leads the company across its UK and India offices, setting the direction for its services, products and Academy." },
  { slug: "negha-sharma", name: "Negha Sharma", role: "Chief Marketing Officer", photo: "/team/nehasharma.jpg", bio: "Negha leads marketing at Jadvix — the SEO, social and performance campaigns that put client products in front of the right audience." },
  { slug: "elavarasi-manoharan", name: "Elavarasi Manoharan", role: "Chief Technical Officer", photo: "/team/elavarasi.jpg", bio: "Elavarasi leads engineering at Jadvix, owning the technical standards behind client builds and the company's own products." },
  { slug: "heavalin", name: "Adv. Heavalin", role: "Legal Advisor", photo: "/team/heavalin.jpg", bio: "Heavalin advises Jadvix on legal matters across its UK and India operations." },
];

export type Faq = { category: string; q: string; a: string };

export const FAQS: Faq[] = [
  { category: "Company & Operations", q: "Where is Jadvix based?", a: "We operate from two offices: Ruislip in the United Kingdom and Chennai in India. This lets us serve local and international clients with extended working hours across both time zones." },
  { category: "Company & Operations", q: "What services does Jadvix offer?", a: "We provide end-to-end IT solutions: website design & development, mobile & web applications, ecommerce stores, custom software, digital marketing & SEO, graphic design, video editing and IT consultancy." },
  { category: "Company & Operations", q: "What technologies do you use?", a: "We work with modern, production-grade stacks — React, Next.js and native mobile frameworks on the front end, with robust APIs, databases and cloud infrastructure behind them. Technology is chosen per project, never one-size-fits-all." },
  { category: "Projects & Support", q: "Do you provide post-launch support?", a: "Yes. Every build can ship with monitoring, maintenance and support options so your product stays fast, secure and up to date long after launch." },
  { category: "Projects & Support", q: "How long does a typical website project take?", a: "A standard business website usually takes 2–6 weeks depending on scope. Larger applications and ecommerce projects are planned in milestones — we agree a clear timeline with you before work begins." },
  { category: "Projects & Support", q: "How do you keep projects secure?", a: "Security is baked into every layer: secure coding practices, encrypted connections, access controls and regular updates. 'Secure' is one of the four words in our tagline for a reason." },
  { category: "Academy & Careers", q: "What is Jadvix Academy?", a: "Jadvix Academy is our train-to-hire programme: a 10-month, milestone-gated course in Full Stack Development with Agentic AI. Clear each stage's evaluation to unlock a paid internship, and strong internship performance leads to a full-time offer at Jadvix LTD." },
  { category: "Academy & Careers", q: "How do I apply to the Academy or an internship?", a: "Apply at academy.jadvix.uk, or email contact@jadvix.uk with a short introduction and your area of interest. We review applications on a rolling basis." },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: string;
  market: string;
  url: string;
  urlLabel: string;
  tags: string[];
  summary: string;
  overview: string[];
  capabilitiesTitle: string;
  capabilities: { title: string; body: string }[];
  facts: { value: string; label: string }[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  note: string;
  cover: string;
  gallery: { src: string; alt: string; tall?: boolean }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "ropix",
    name: "Ropix",
    tagline: "AI voice employee for UK businesses",
    category: "AI Voice · SaaS",
    status: "Live",
    market: "United Kingdom",
    url: "https://ropix.ai",
    urlLabel: "ropix.ai",
    tags: ["AI Voice", "SaaS", "Stay Awake"],
    summary:
      "An AI voice employee that answers your phone and makes calls for you, around the clock, on your own UK number — booking appointments mid-call and sending a WhatsApp summary afterwards.",
    overview: [
      "Ropix is an AI voice employee that answers and places calls on a business's own UK phone number. It books appointments into the diary while the caller is still on the line, takes callback requests, and sends a plain-English WhatsApp summary after each call. Every call is recorded, transcribed and costed.",
      "It exists because a missed call is rarely just a missed call — it is a job that went to whoever answered. In a small business the person who answers the phone is usually the person doing the billable work, and the work always wins. Ropix takes the phone off their hands without putting callers through to voicemail.",
      "Ropix is built for UK businesses and follows UK calling rules, including TPS and CTPS screening and honouring do-not-call requests. Data is handled under UK GDPR.",
    ],
    capabilitiesTitle: "What Ropix does",
    capabilities: [
      { title: "Answers 24/7", body: "An AI representative picks up every incoming call on your own UK number, day and night." },
      { title: "Books appointments live", body: "Checks a real diary mid-call and confirms the slot straight away — it never double-books." },
      { title: "Handles callbacks", body: "Takes “call me back” requests and dials them automatically within your calling hours." },
      { title: "Campaign calls", body: "Outbound batches for reminders, follow-ups and reactivation from a contact list, on higher plans." },
      { title: "Voice widget & QR calling", body: "A call button for your website, plus QR-code calling for print and signage." },
      { title: "Browser softphone", body: "A human can step in and take over a call from the browser, with recordings, on higher plans." },
      { title: "WhatsApp summaries", body: "A plain-English summary after each call, with a link to the recording." },
      { title: "Full call history", body: "Every call transcribed, recorded and costed, with live monitoring and analytics in the dashboard." },
    ],
    facts: [
      { value: "24/7", label: "Always answering" },
      { value: "UK", label: "Numbers & compliance" },
      { value: "TPS", label: "CTPS screened" },
      { value: "£99", label: "Plans from, per month + VAT" },
    ],
    stepsTitle: "Getting started",
    steps: [
      { title: "Pick a voice", body: "Choose how your AI representative sounds on your own UK number, or port your existing number in." },
      { title: "Give it knowledge", body: "Add a prompt and a knowledge base — prices, hours, services and policies it should answer from." },
      { title: "Test in the browser", body: "Talk to it in your browser before it ever answers a real call. Setup is done with you." },
      { title: "Go live", body: "Calls are answered, booked and summarised to WhatsApp, with every plan drawing on one pool of credits." },
    ],
    note: "Plans start at £99 per month excluding VAT. See ropix.ai for current plans and pricing, or book a demo.",
    cover: "/img/ropix-hero.webp",
    gallery: [
      { src: "/img/ropix-callbacks.webp", alt: "Ropix campaign calls and scheduled callbacks dashboard" },
      { src: "/img/ropix-diary.webp", alt: "Ropix appointments diary, week view" },
      { src: "/img/ropix-studio.webp", alt: "Ropix — Stay Awake" },
    ],
  },
  {
    slug: "jadvix-academy",
    name: "Jadvix Academy",
    tagline: "Full Stack Development with Agentic AI",
    category: "Education · Train-to-Hire",
    status: "Live",
    market: "Hybrid — online & offline",
    url: "https://academy.jadvix.uk",
    urlLabel: "academy.jadvix.uk",
    tags: ["Train-to-Hire", "Agentic AI", "Full Stack"],
    summary:
      "A 10-month, milestone-gated train-to-hire programme in Full Stack Development with Agentic AI — three gated stages, a 6-month paid internship and a UK-issued certificate.",
    overview: [
      "Jadvix Academy is built by Jadvix LTD. We train engineers to the standard our own teams work to — then hire from within. The programme runs for 10 months in three stages: Frontend, Backend, then Agentic AI.",
      "Each stage ends in an evaluation you must clear to unlock the next stage and a matching 6-month paid internship. Strong internship performance leads to a full-time offer at Jadvix LTD — a direct pathway based on performance, not a guaranteed job.",
      "Learning is hands-on: guided, client-style project work and real code-review cycles, with modern AI-assisted engineering using Claude Code running through the whole programme rather than added as an afterthought.",
    ],
    capabilitiesTitle: "Why Jadvix Academy",
    capabilities: [
      { title: "Learn by building", body: "Guided, client-style project work and real code-review cycles — not passive lectures." },
      { title: "Milestone-gated progress", body: "Each stage ends in an evaluation you must clear to unlock the next stage and its internship." },
      { title: "Agentic AI, built in", body: "Modern AI-assisted engineering with Claude Code runs through the whole programme." },
      { title: "A pathway to hire", body: "Clear a stage, earn a paid internship; perform in the internship, earn a full-time offer at Jadvix LTD." },
    ],
    facts: [
      { value: "10", label: "Months structured training" },
      { value: "6", label: "Months paid internship" },
      { value: "3", label: "Gated stages" },
      { value: "UK", label: "Issued certificate" },
    ],
    stepsTitle: "Three stages, three gates",
    steps: [
      { title: "Frontend Development", body: "Months 1–4. Core web, React and AI-assisted engineering. Gate: Frontend Evaluation — pass to unlock the Frontend Development Intern role." },
      { title: "Backend Development", body: "Months 5–8. Server-side fundamentals, data and full stack integration. Gate: practical test plus a full stack project." },
      { title: "Agentic AI", body: "Months 9–10. LLM-powered agents, tool use and a production-style agentic capstone." },
      { title: "Internship to hire", body: "Each cleared gate unlocks the matching 6-month paid internship, capacity permitting, with a pathway to a full-time offer." },
    ],
    note: "Internship offers are capped by confirmed intern capacity per cohort. See academy.jadvix.uk for the curriculum, fees and how to apply.",
    cover: "/img/academy-team.webp",
    gallery: [
      { src: "/img/academy-agentic.webp", alt: "Jadvix Academy — agentic AI" },
      { src: "/img/svc-web.webp", alt: "Engineering workspace" },
      { src: "/img/about-desk.webp", alt: "Strategy, design, develop, grow" },
    ],
  },
];

export const OPENINGS = [
  { title: "Frontend Development Intern", body: "Unlocked by clearing the Stage 1 Frontend Evaluation at Jadvix Academy. Work on real client-style builds with code review.", meta: ["Paid", "6 months", "Hybrid"], href: "https://academy.jadvix.uk", cta: "Apply via Academy" },
  { title: "Backend Development Intern", body: "Unlocked by clearing the Stage 2 Backend Evaluation — a practical test and a full stack project.", meta: ["Paid", "6 months", "Hybrid"], href: "https://academy.jadvix.uk", cta: "Apply via Academy" },
  { title: "Agentic AI Development Intern", body: "Unlocked by clearing the Stage 3 Agentic AI capstone. Build LLM-powered agents and tooling alongside our team.", meta: ["Paid", "6 months", "Hybrid"], href: "https://academy.jadvix.uk", cta: "Apply via Academy" },
  { title: "Ropix Introducer", body: "Refer UK businesses to Ropix through the introducer programme, track each referral and see what you have earned.", meta: ["Freelance", "UK", "Remote"], href: "https://ropix.ai", cta: "Learn more" },
];

export const PATHWAY = [
  { title: "Learn & Train", body: "Join Jadvix Academy for practical, job-ready skills — taught by people who build for real clients." },
  { title: "Internship Opportunity", body: "Apply your knowledge through hands-on internships and real-world projects, with dedicated mentorship from our delivery team." },
  { title: "Join the Team", body: "Perform well and become part of the Jadvix professional team — contributing to client work across the UK and India." },
];

export const MARQUEE = ["Web Development", "Mobile Apps", "Ecommerce Stores", "Custom Software", "Digital Marketing", "SEO", "UI/UX Design", "Video Editing", "IT Consultancy", "Cybersecurity"];

export const TECH = ["React", "Next.js", "Node.js", "REST APIs", "SQL & NoSQL", "Cloud", "iOS", "Android"];
