import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PRODUCTS, SERVICES, TEAM } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const top = ["", "/about", "/services", "/products", "/team", "/careers", "/faq", "/contact"];
  const routes = [
    ...top,
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...PRODUCTS.map((p) => `/products/${p.slug}`),
    ...TEAM.map((m) => `/team/${m.slug}`),
  ];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : top.includes(route) ? 0.8 : 0.6,
  }));
}
