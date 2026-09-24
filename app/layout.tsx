import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

// Display: Clash Display (Fontshare, self-hosted), headings only, 500–600.
const display = localFont({
  src: [
    { path: "./fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-display",
});
// Body/UI: Satoshi (Fontshare, self-hosted).
const body = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-body",
});
// Micro-labels / eyebrows only.
const label = Space_Grotesk({ subsets: ["latin"], weight: ["500"], display: "swap", variable: "--font-label" });

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
  themeColor: "#041826",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${label.variable}`}>
      <body>
        {/* No-flash theme init: apply saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('jx-theme')||'light';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
