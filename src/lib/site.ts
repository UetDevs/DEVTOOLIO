export const site = {
  name: "DEVTOOLIO",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.devtoolio.tech",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "devexe01@gmail.com",
  tagline: "Developer tools. Minus the friction.",
  description:
    "Practical tools for coding, converting, calculating, and getting work done — all in one place. Most run in your browser.",
};

export const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
export const adsenseSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? "";
export const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
