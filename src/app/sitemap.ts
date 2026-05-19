import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/brand";

const routes = [
  "",
  "/experiences",
  "/about",
  "/gallery",
  "/private-events",
  "/consulting",
  "/contact",
  "/journal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
