import { MetadataRoute } from "next";
import { SERVICES, LOCATIONS } from "@/lib/data";

const BASE_URL = "https://ramrockcoatings.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, priority: 1.0, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`, lastModified: now, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/services`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/our-work`, lastModified: now, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/our-work/residential`, lastModified: now, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/our-work/commercial`, lastModified: now, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/our-work/before-after`, lastModified: now, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/locations`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/testimonials`, lastModified: now, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/faq`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`, lastModified: now, priority: 0.9, changeFrequency: "yearly" },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/terms`, lastModified: now, priority: 0.3, changeFrequency: "yearly" },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${BASE_URL}/locations/${l.slug}`,
    lastModified: now,
    priority: l.isPrimary ? 0.9 : 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
