import type { Metadata } from "next";
import { ToolsCatalog } from "@/components/catalog/ToolsCatalog";
import { PageFrame } from "@/components/theme/PageFrame";
import { absoluteUrl } from "@/lib/site";
import { tools } from "@/lib/tools";

const description = `All ${tools.length} DEVTOOLIO calculators, converters, image, PDF, writing and developer utilities on one searchable page.`;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: "All Tools",
    description,
    alternates: { canonical: absoluteUrl("/tools") },
    robots: q ? { index: false, follow: true } : undefined,
    openGraph: {
      title: "All Tools",
      description,
      url: absoluteUrl("/tools"),
      type: "website",
    },
  };
}

export default async function ToolsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <PageFrame className="animate-enter mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">{tools.length} utilities</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">All tools</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        {q
          ? `Results for “${q}”. Refine with a category or sort.`
          : "Every calculator, converter, and utility on the site. Search by name or task, filter by category, then open a tool to use it in your browser."}
      </p>
      <div className="mt-6">
        <ToolsCatalog key={q ?? ""} initialQuery={q ?? ""} />
      </div>
    </PageFrame>
  );
}
