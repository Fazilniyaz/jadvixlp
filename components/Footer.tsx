import Link from "next/link";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Solutions",
    links: [
      { label: "Web Design & Development", href: "/services" },
      { label: "Mobile App Development", href: "/services" },
      { label: "Digital Marketing & SEO", href: "/services" },
      { label: "IT Consultancy & Security", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How Jadvix Works", href: "/ideas" },
      { label: "About Us", href: "/about" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Growth",
    links: [
      { label: "Jadvix Academy", href: "/ideas" },
      { label: "Our Products", href: "/products" },
      { label: "Internships", href: "/ideas" },
      { label: "Get a Free Quote", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary pt-section-gap pb-8 text-white">
      <div className="container-jx grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light className="mb-6" />
          <p className="mb-8 max-w-xs text-body-md text-on-primary-container">
            Full-service IT company building scalable websites, apps and digital experiences across India and the UK.
          </p>
          <ul className="space-y-3 text-body-md text-on-primary-container">
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 transition-colors hover:text-secondary-container">
                <Icon name="mail" className="h-5 w-5" /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.offices.uk.phoneHref} className="flex items-center gap-3 transition-colors hover:text-secondary-container">
                <Icon name="phone" className="h-5 w-5" /> {SITE.phoneUK}
              </a>
            </li>
            <li>
              <a href={SITE.offices.india.phoneHref} className="flex items-center gap-3 transition-colors hover:text-secondary-container">
                <Icon name="phone" className="h-5 w-5" /> {SITE.phoneIN}
              </a>
            </li>
          </ul>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.heading} aria-label={`Footer — ${col.heading}`}>
            <h2 className="mb-6 text-label-md font-semibold uppercase tracking-widest text-accent">{col.heading}</h2>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-body-md text-on-primary-container transition-all hover:translate-x-1 hover:text-secondary-container"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container-jx mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
        <p className="text-center text-label-md text-on-primary-container/70">
          © {new Date().getFullYear()} {SITE.legalName}. {SITE.tagline}
        </p>
        <p className="flex items-center gap-2 text-label-md text-on-primary-container/70">
          <Icon name="globe" className="h-4 w-4" /> United Kingdom · India
        </p>
      </div>
    </footer>
  );
}
