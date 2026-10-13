import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { site } from "@/lib/site";
import { tools } from "@/lib/tools";

const lastModified = new Date();

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function entry(path: string, changeFrequency: ChangeFrequency, priority: number): MetadataRoute.Sitemap[number] {
  return {
    url: path ? `${site.url}${path}` : site.url,
    lastModified,
    changeFrequency,
    priority,
  };
}

const guidePaths = [
  "/guides/how-to-calculate-bmi",
  "/guides/how-loan-payments-work",
  "/guides/how-to-paraphrase-your-own-writing",
  "/guides/keep-files-private-in-browser-tools",
  "/guides/how-to-convert-kg-to-lbs",
  "/guides/what-is-a-unix-timestamp",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    entry("", "weekly", 1),
    entry("/tools", "weekly", 0.9),
    entry("/guides", "weekly", 0.8),
    entry("/about", "monthly", 0.5),
    entry("/contact", "monthly", 0.5),
    entry("/privacy-policy", "yearly", 0.3),
    entry("/cookie-policy", "yearly", 0.3),
    entry("/terms", "yearly", 0.3),
    entry("/disclaimer", "yearly", 0.3),
    ...guidePaths.map((path) => entry(path, "monthly", 0.6)),
    ...categories.map((category) => entry(category.href, "weekly", 0.8)),
    ...tools
      .filter((tool) => tool.status === "ready")
      .map((tool) => entry(tool.href, "monthly", tool.popular ? 0.8 : 0.7)),
  ];

  const seen = new Set<string>();
  return pages.filter((page) => {
    if (seen.has(page.url)) return false;
    seen.add(page.url);
    return true;
  });
}
