import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@fontsource-variable/funnel-display";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Motion from "@/components/site/Motion";
import { SITE } from "@/lib/site";
import "./globals.css";

// Body/UI: Plus Jakarta Sans. Display: Funnel Display, self-hosted via fontsource (see --ff-h).
const body = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Jadvix | Full-Service IT Company for Web, App, Ecommerce & Digital Marketing — UK & India",
    template: "%s | Jadvix",
  },
  description: SITE.description,
  keywords: [
    "IT company UK",
    "web development company",
    "website design Ruislip",
    "app development Chennai",
    "ecommerce development",
    "digital marketing agency",
    "custom software development",
    "IT consultancy UK India",
    "Jadvix",
  ],
  applicationName: "Jadvix",
  authors: [{ name: "Jadvix Ltd", url: SITE.url }],
  creator: "Jadvix Ltd",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: "Jadvix",
    title: "Jadvix | Design. Develop. Promote. Secure.",
    description: SITE.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jadvix — Design. Develop. Promote. Secure." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jadvix | Design. Develop. Promote. Secure.",
    description: SITE.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  email: SITE.email,
  slogan: SITE.tagline,
  description: SITE.description,
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, College House, 17 King Edwards Rd",
      addressLocality: "Ruislip",
      postalCode: "HA4 7AE",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "No 19/35, 1st Floor, Mount Road, Little Mount, Saidapet",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600015",
      addressCountry: "IN",
    },
  ],
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+44-7355-803386", contactType: "sales", areaServed: "GB", availableLanguage: "en" },
    { "@type": "ContactPoint", telephone: "+91-94896-44108", contactType: "sales", areaServed: "IN", availableLanguage: "en" },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
};

// Runs before paint: apply the saved theme (dark by default) and arm the motion initial
// states. If the motion engine never boots, the class is dropped so nothing stays hidden.
const bootScript = `(function(){var d=document.documentElement;try{d.dataset.theme=localStorage.getItem('jx-theme')||'dark'}catch(e){d.dataset.theme='dark'}if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion');setTimeout(function(){if(!window.__motionReady)d.classList.remove('motion')},4000)}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={body.variable}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[400] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <div className="curtain" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/jadvix-logo-light.svg" alt="" />
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
