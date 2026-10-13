import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSearch } from "@/components/home/HeroSearch";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ToolCard, ToolRow } from "@/components/ui/ToolCard";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { categories } from "@/lib/categories";
import { site } from "@/lib/site";
import { getPopularTools, getToolsByCategory, tools } from "@/lib/tools";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
  },
};

const guides = [
  { href: "/guides/how-to-calculate-bmi", title: "How to calculate BMI", note: "Formula and ranges" },
  { href: "/guides/how-loan-payments-work", title: "How loan payments work", note: "Principal and interest" },
  { href: "/guides/keep-files-private-in-browser-tools", title: "Keep files private in browser tools", note: "Local processing" },
  { href: "/guides/what-is-a-unix-timestamp", title: "What is a Unix timestamp", note: "Epoch time" },
];

export default function HomePage() {
  const popular = getPopularTools();
  const featured = popular.slice(0, 3);
  const supporting = popular.slice(3);
  const developerTools = getToolsByCategory("developer-tools").slice(0, 6);
  const suggestions = popular.slice(0, 5);

  return (
    <div>
      <section className="stage-hero border-b border-line">
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-10 text-center sm:px-6 sm:pb-12 sm:pt-14">
          <p className="animate-enter font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            {tools.length} tools · no account
          </p>
          <h1 className="animate-enter delay-1 mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {site.tagline}
          </h1>
          <p className="animate-enter delay-2 mx-auto mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
            {site.description}
          </p>
          <div className="animate-enter delay-3">
            <HeroSearch suggestions={suggestions} />
          </div>
          <div className="animate-enter mt-5 flex justify-center">
            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="animate-enter-slow mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink">Browse by category</h2>
            <p className="mt-1 text-sm text-muted">Counts come from the live catalog.</p>
          </div>
          <Link href="/tools" className="hidden text-sm font-medium text-ink underline-offset-2 hover:underline sm:inline">
            All tools
          </Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="stage-inset">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-ink">Featured tools</h2>
              <p className="mt-1 text-sm text-muted">A short list from tools already marked as popular.</p>
            </div>
            <Link href="/tools" className="hidden items-center gap-1 text-sm font-medium text-ink underline-offset-2 hover:underline sm:inline-flex">
              View catalog
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {featured.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
          {supporting.length ? (
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {supporting.map((tool) => (
                <ToolRow key={tool.slug} tool={tool} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="stage-band">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink">Developer utilities</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              Formatters, encoders, hashes, timestamps, and validators. Paste, get a result, copy it back.
            </p>
            <Link
              href="/tools/developer-tools"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink underline underline-offset-2"
            >
              Open developer tools
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-2">
            {developerTools.map((tool) => (
              <ToolRow key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink">How a tool works</h2>
            <ol className="mt-5 space-y-4">
              {[
                { step: "01", title: "Open a page", text: "Search or pick a category. One URL, one job." },
                { step: "02", title: "Type or drop a file", text: "Numbers, text, a photo, a clip. Most of it stays in this tab." },
                { step: "03", title: "Copy or download", text: "Take the result and leave. No account first." },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="w-8 shrink-0 font-mono text-xs text-subtle">{item.step}</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink">Guides</h2>
            <p className="mt-2 text-sm text-muted">Short notes next to the tools — formulas, units, and why files stay local.</p>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {guides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-sm font-medium text-ink">{guide.title}</span>
                  <span className="hidden shrink-0 font-mono text-[11px] text-subtle sm:inline">{guide.note}</span>
                </Link>
              ))}
            </div>
            <Link href="/guides" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink underline underline-offset-2">
              All guides
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="stage-inset">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight text-ink">What stays on your machine</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Most converters and editors run in this tab. We do not get a copy of the numbers, drafts, or
              files you drop in. Ads, if they appear later, pay for hosting. You still get the answer without
              clicking one.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Free, no signup",
              "Works in current browsers",
              "No social downloaders",
              "Writing tools are for your drafts",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-line bg-surface px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
