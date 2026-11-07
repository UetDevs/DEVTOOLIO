import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageFrame } from "@/components/theme/PageFrame";
import { absoluteUrl } from "@/lib/site";

type Crumb = { href: string; label: string };

export function Article({
  title,
  updated,
  breadcrumbs,
  children,
}: {
  title: string;
  updated?: string;
  /** Ancestors of this page, starting with Home. The current page is appended automatically. */
  breadcrumbs?: Crumb[];
  children: ReactNode;
}) {
  return (
    <PageFrame>
      {breadcrumbs?.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              ...breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.label,
                item: absoluteUrl(crumb.href),
              })),
              { "@type": "ListItem", position: breadcrumbs.length + 1, name: title },
            ],
          }}
        />
      ) : null}
      <article className="animate-enter mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {breadcrumbs?.length ? (
          <nav className="mb-5 flex flex-wrap items-center gap-1 text-sm text-subtle" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="inline-flex items-center gap-1">
                <Link href={crumb.href} className="hover:text-ink">
                  {crumb.label}
                </Link>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </span>
            ))}
            <span className="min-w-0 text-ink" aria-current="page">
              {title}
            </span>
          </nav>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
        {updated ? <p className="mt-2 font-mono text-xs text-subtle">Last updated: {updated}</p> : null}
        <div className="mt-6 space-y-4 text-base leading-7 text-muted [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 [&_code]:rounded [&_code]:bg-surface-2 [&_code]:px-1 [&_code]:font-mono [&_code]:text-sm [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1">
          {children}
        </div>
      </article>
    </PageFrame>
  );
}
