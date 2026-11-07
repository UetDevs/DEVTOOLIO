import { guideArticles } from "./guide-articles";

export type GuideLink = { href: string; title: string; description: string };

export const guideBreadcrumbs = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
];

/** Guides that have their own hand-written page under src/app/guides/<slug>. */
const standaloneGuides: GuideLink[] = [
  {
    href: "/guides/what-grade-level-is-my-writing",
    title: "What grade level is my writing?",
    description: "What the Flesch–Kincaid number means, and what it does not measure.",
  },
  {
    href: "/guides/how-to-convert-kg-to-stone",
    title: "How to convert kilograms into stone",
    description: "The stone-to-kilogram factor and a 70 kg example.",
  },
  {
    href: "/guides/how-many-gallons-is-15-liters",
    title: "15 liters is how many gallons?",
    description: "US gallons and imperial gallons are different sizes.",
  },
  {
    href: "/guides/how-to-calculate-bmi",
    title: "How to calculate BMI",
    description: "The formula, healthy ranges, and what BMI can and cannot tell you.",
  },
  {
    href: "/guides/how-loan-payments-work",
    title: "How loan payments work",
    description: "A plain-language look at principal, interest and monthly EMI.",
  },
  {
    href: "/guides/how-to-paraphrase-your-own-writing",
    title: "How to paraphrase your own writing",
    description: "Rewrite your own draft. Do not pass off someone else's words.",
  },
  {
    href: "/guides/keep-files-private-in-browser-tools",
    title: "Keep files private in browser tools",
    description: "Why local image and document tools avoid uploading your files.",
  },
  {
    href: "/guides/how-to-convert-kg-to-lbs",
    title: "How to convert kilograms to pounds",
    description: "The exact factor, a worked example, and when rounding is enough.",
  },
  {
    href: "/guides/what-is-a-unix-timestamp",
    title: "What is Unix time?",
    description: "Epoch seconds, milliseconds, and how to read them.",
  },
];

export const allGuides: GuideLink[] = [
  ...guideArticles.map((guide) => ({
    href: `/guides/${guide.slug}`,
    title: guide.title,
    description: guide.description,
  })),
  ...standaloneGuides,
];
