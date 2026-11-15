import type { Metadata } from "next";
import CareersPage from "@/app/careers/page";

// /ideas was the old home of "How Jadvix works". That story now lives on /careers;
// the route is kept so existing links and search results still land somewhere useful.
export const metadata: Metadata = {
  title: "How Jadvix Works — Learn, Intern, Join the Team",
  description: "Learn at Jadvix Academy, apply your skills through a paid internship, and join the Jadvix professional team.",
  alternates: { canonical: "/careers" },
};

export default CareersPage;
