const PREFERRED_ORIGIN = "https://devtoolio.tech";

function originFrom(value: string) {
  try {
    const url = new URL(value);
    const hostname = url.hostname.replace(/^www\./i, "");
    return `${url.protocol}//${hostname}`;
  } catch {
    return PREFERRED_ORIGIN;
  }
}

const origin = originFrom(process.env.NEXT_PUBLIC_SITE_URL ?? PREFERRED_ORIGIN);

export const site = {
  name: "DEVTOOLIO",
  url: origin,
  home: `${origin}/`,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "devexe01@gmail.com",
  tagline: "Developer tools. Minus the friction.",
  description:
    "Practical tools for coding, converting, calculating, and getting work done — all in one place. Most run in your browser.",
};

export function absoluteUrl(path: string) {
  if (!path || path === "/") return site.home;
  const normalized = (path.startsWith("/") ? path : `/${path}`).replace(/\/+$/, "");
  return `${origin}${normalized}`;
}

export const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
export const adsenseSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? "";
export const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
