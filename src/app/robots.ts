import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AdSense fetches /ads.txt directly. Allow it explicitly for Google's ad crawler.
      { userAgent: "AdsBot-Google", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
