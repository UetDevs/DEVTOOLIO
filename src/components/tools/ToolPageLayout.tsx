import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageFrame } from "@/components/theme/PageFrame";
import { AdSlot } from "@/components/ui/AdSlot";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ToolCard } from "@/components/ui/ToolCard";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCategory } from "@/lib/categories";
import { defaultFaqs, toolHowTo } from "@/lib/tool-copy";
import { toolDetails } from "@/lib/tool-details";
import { getRelatedTools } from "@/lib/tools";
import { absoluteUrl, site } from "@/lib/site";
import type { Tool } from "@/lib/types";

function isHealthTool(tool: Tool) {
  return tool.badge?.startsWith("Health") ?? false;
}

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
  const detail = toolDetails[tool.slug];

  return (
    <PageFrame className="animate-fade">
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
      {tool.faqs?.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tool.faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      ) : null}
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

        {isHealthTool(tool) ? (
          <p className="mt-6 rounded-lg border border-line bg-surface-2 p-4 text-sm leading-6 text-muted">
            <span className="font-semibold text-ink">Health note.</span> This is an estimate for general information.
            It does not diagnose, treat, or prevent any condition. Talk to a doctor, midwife, or dietitian before
            you change diet, exercise, or medication, and especially if you are pregnant, trying to conceive, or
            managing a medical condition.
          </p>
        ) : null}

        <div className="mt-10">{children}</div>

        <div className="mt-6">
          <AdSlot />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <section className="rounded-lg border border-line bg-surface p-5">
            <h2 className="text-sm font-semibold text-ink">How to use {tool.name}</h2>
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

        {detail ? (
          <section className="mt-8 rounded-lg border border-line bg-surface p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-ink">How {tool.metaTitle ?? tool.name} works</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{detail.howItWorks}</p>
            {detail.formula ? (
              <div className="mt-4 rounded-md border border-line bg-surface-2 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">Formula</p>
                <p className="mt-1 break-words font-mono text-sm text-ink">{detail.formula}</p>
              </div>
            ) : null}
            <div className="mt-4">
              <p className="text-sm font-semibold text-ink">Example</p>
              <p className="mt-1 text-sm leading-7 text-muted">{detail.example}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-ink">Common mistakes</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                {detail.mistakes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

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
