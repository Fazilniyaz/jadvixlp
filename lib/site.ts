export const SITE = {
  name: "Jadvix",
  legalName: "Jadvix Ltd",
  url: "https://jadvix.uk",
  tagline: "Design. Develop. Promote. Secure.",
  description:
    "Jadvix is a full-service IT company in the UK and India offering website development, mobile & web apps, ecommerce, custom software, digital marketing, graphic design, video editing and IT consultancy.",
  email: "contact@jadvix.uk",
  phoneUK: "+44 7355 803386",
  phoneIN: "+91 94896 44108",
  offices: {
    uk: {
      title: "UK Office",
      lines: ["2nd Floor, College House", "17 King Edwards Rd, Ruislip", "United Kingdom, HA4 7AE"],
      phone: "+44 7355 803386",
      phoneHref: "tel:+447355803386",
      mapQuery: "College House, 17 King Edwards Rd, Ruislip HA4 7AE",
    },
    india: {
      title: "India Office",
      lines: ["No 19/35, 1st Floor, Mount Road", "Little Mount, Saidapet, Chennai", "Tamil Nadu, India, 600 015"],
      phone: "+91 94896 44108",
      phoneHref: "tel:+919489644108",
      mapQuery: "No 19/35 Mount Road, Little Mount, Saidapet, Chennai 600015",
    },
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/ideas", label: "Ideas" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;
