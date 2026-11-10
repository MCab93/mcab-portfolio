import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mcab.dev",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
