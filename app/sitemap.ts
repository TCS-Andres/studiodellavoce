import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/vocal-lessons/individual", priority: 0.8, freq: "monthly" },
    { path: "/vocal-lessons/group", priority: 0.7, freq: "monthly" },
    { path: "/vocal-lessons/ministerial-choir", priority: 0.7, freq: "monthly" },
    { path: "/online-resources", priority: 0.7, freq: "monthly" },
    { path: "/digital-course", priority: 0.9, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
  ];
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
