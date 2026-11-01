import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageFrame } from "@/components/theme/PageFrame";
import { AdSlot } from "@/components/ui/AdSlot";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ToolCard } from "@/components/ui/ToolCard";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCategory } from "@/lib/categories";
import { defaultFaqs, toolHowTo, toolTitle } from "@/lib/tool-copy";
import { getRelatedTools } from "@/lib/tools";
import { absoluteUrl, site } from "@/lib/site";
import type { Tool } from "@/lib/types";

export function ToolPageLayout({
  tool,
  illustration,
  children,
  example,
  extra,
}: {
  tool: Tool;
  illustration?: React.ReactNode;
  children: React.ReactNode;
  example?: React.ReactNode;
  extra?: React.ReactNode;
}) {
  const category = getCategory(tool.category);
  const related = getRelatedTools(tool);
  const faqs = defaultFaqs(tool);

  return (
    <PageFrame className="animate-fade">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: tool.metaTitle ?? tool.name,
          description: tool.longDescription ?? tool.description,
          url: absoluteUrl(tool.href),
          isPartOf: { "@type": "WebSite", name: site.name, url: site.home },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: tool.metaTitle ?? tool.name,
          description: tool.longDescription ?? tool.description,
          url: absoluteUrl(tool.href),
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any",
          browserRequirements: "Requires a modern web browser",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      {category ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.home },
              { "@type": "ListItem", position: 2, name: category.name, item: absoluteUrl(category.href) },
              { "@type": "ListItem", position: 3, name: tool.name, item: absoluteUrl(tool.href) },
            ],
          }}
        />
      ) : null}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
        <nav className="flex flex-wrap items-center gap-1 text-sm text-subtle" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
          <Link href={category?.href ?? "/tools"} className="hover:text-ink">
            {category?.name ?? "Tools"}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
          <span className="min-w-0 text-ink">{tool.name}</span>
        </nav>

        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            {tool.badge ? (
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">{tool.badge}</p>
            ) : null}
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
              {tool.metaTitle ?? tool.name}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-pretty text-muted sm:text-base">
              {tool.longDescription ?? tool.description}
            </p>
            {tool.guide ? (
              <p className="mt-3 text-sm">
                <Link href={tool.guide.href} className="font-medium text-ink underline underline-offset-2">
                  {tool.guide.label}
                </Link>
              </p>
            ) : null}
            <div className="mt-5">
              <TrustBadges />
            </div>
          </div>
          {illustration}
        </div>

        <div className="mt-10">{children}</div>

        <div className="mt-6">
          <AdSlot />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <section className="rounded-lg border border-line bg-surface p-5">
            <h2 className="text-sm font-semibold text-ink">How to use {toolTitle(tool)}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{toolHowTo(tool)}</p>
            {example}
          </section>
          <section className="rounded-lg border border-line bg-surface p-5">
            <h2 className="text-sm font-semibold text-ink">Questions</h2>
            <div className="mt-2">
              <FaqAccordion items={faqs} />
            </div>
          </section>
        </div>

        {extra}

        {related.length ? (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-ink">Related tools</h2>
            <p className="mt-1 text-sm text-muted">Same category, nearby jobs.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {related.map((item) => (
                <ToolCard key={item.slug} tool={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </PageFrame>
  );
}
