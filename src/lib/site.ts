const PREFERRED_ORIGIN = "https://www.devtoolio.tech";

function originFrom(value: string) {
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    if (hostname === "devtoolio.tech" || hostname === "www.devtoolio.tech") {
      return PREFERRED_ORIGIN;
    }
    return `${url.protocol}//${hostname}`;
  } catch {
    return PREFERRED_ORIGIN;
  }
}

const origin = originFrom(process.env.NEXT_PUBLIC_SITE_URL ?? PREFERRED_ORIGIN);

export const site = {
  name: "DEVTOOLIO",
  url: origin,
  // No trailing slash. Next strips it from the canonical tag when trailingSlash is false,
  // and the sitemap must use that same URL.
  home: origin,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "devexe01@gmail.com",
  tagline: "Convert, calculate, and check your writing.",
  description:
    "Free browser tools for unit conversion, reading grade level, Unix time, calculators, and small coding jobs. No account.",
};

export function absoluteUrl(path: string) {
  if (!path || path === "/") return site.home;
  const normalized = (path.startsWith("/") ? path : `/${path}`).replace(/\/+$/, "");
  return `${origin}${normalized}`;
}

export const adsenseClient =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-3499075809777399";
export const adsenseSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? "";
export const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
