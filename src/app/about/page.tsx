import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { categories } from "@/lib/categories";
import { allGuides } from "@/lib/guides-index";
import { absoluteUrl, site } from "@/lib/site";
import { getToolsByCategory, tools } from "@/lib/tools";

const description = `What ${site.name} is, how its free browser tools work, how we check accuracy, and how to reach us.`;

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: `About ${site.name}`,
    description,
    url: absoluteUrl("/about"),
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <Article title={`About ${site.name}`}>
      <p>
        {site.name} is a free collection of {tools.length} small web tools: calculators, unit converters, image
        and PDF helpers, video converters, writing editors and developer utilities. Each page does one job, so you
        can finish a task and move on. No app to install and no account to create.
      </p>

      <h2>What you can do here</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={category.href}>{category.name}</Link> ({getToolsByCategory(category.id).length} tools):{" "}
            {category.description}
          </li>
        ))}
      </ul>
      <p>
        The full list is on the <Link href="/tools">tools page</Link>. Alongside the tools, the{" "}
        <Link href="/guides">guides</Link> explain the formulas and ideas behind them, such as how GPA is
        calculated, what a Unix timestamp is, or how long a password should be.
      </p>

      <h2>Where the work happens</h2>
      <p>
        Most of our tools do the math or the file work in your browser with standard web technology (JavaScript,
        Canvas and WebAssembly). The numbers, drafts and files you use are not uploaded to our server. Some PDF and
        video tools download an open-source processing library from a public CDN the first time you use them. Your
        files are still processed on your device. The <Link href="/guides/keep-files-private-in-browser-tools">
        privacy guide</Link> explains why this matters.
      </p>

      <h2>How we keep tools accurate</h2>
      <ul>
        <li>Calculators and converters use published formulas and exact conversion factors.</li>
        <li>
          Popular tool pages show the formula, a worked example and common mistakes, so you can check a result
          by hand.
        </li>
        <li>
          Health, finance and grade tools say plainly that they give estimates. They are not a substitute for a
          professional or your institution&apos;s official rules.
        </li>
        <li>
          The writing tools are rule-based, not AI. We say so on the pages so you know what to expect.
        </li>
        <li>When someone reports an error, we check it and fix the tool or the text.</li>
      </ul>

      <h2>What we will not offer</h2>
      <p>
        No YouTube, Instagram, TikTok or Facebook downloaders. Those usually break platform rules and help people
        copy work they do not own. The writing tools are for text you wrote, not a way to hide a copied essay.
      </p>

      <h2>How the site is funded</h2>
      <p>
        {site.name} is free to use and is supported by advertising through Google AdSense. Ads are kept separate
        from tool buttons and results, and you never have to click an ad to get an answer. Read more in the{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2>Guides currently published</h2>
      <p>
        {allGuides.length} guides so far, written to sit next to the tools and answer the question
        behind them. Browse them on the <Link href="/guides">guides page</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        Corrections, tool requests, bug reports and privacy questions are welcome. Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or use the <Link href="/contact">contact page</Link>.
      </p>
    </Article>
  );
}
