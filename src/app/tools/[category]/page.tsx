import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/theme/PageFrame";
import { ToolCard } from "@/components/ui/ToolCard";
import { categories, converterGroups, getCategoryBySlug } from "@/lib/categories";
import { getToolsByCategory } from "@/lib/tools";
import type { CategoryId } from "@/lib/types";
import { cn } from "@/lib/utils";

const leads: Partial<Record<CategoryId, string>> = {
  calculators: "BMI, age, loans, tips, dates, percentages. Type the numbers, get the answer.",
  "student-tools": "GPA, attendance, marks and how many days until the exam.",
  writing: "Rewrite or check a draft you wrote. Do not paste someone else's essay.",
  "image-tools": "Resize, crop, compress or convert a photo. It stays on your computer.",
  "file-converters": "PDF, JPG, Word and TXT. Image and data converters are in their own lists.",
  "data-tools": "Paste JSON, CSV, XML or YAML. Convert it. Copy it back.",
  "developer-tools": "Base64, URLs, JWT, regex, hashes, timestamps and minifiers.",
  "media-tools": "Compress or convert a video you already have. We do not grab clips from YouTube or Instagram.",
  "unit-converters": "Kg and pounds, °C and °F, km and miles, liters, MB and GB.",
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: category.href },
    openGraph: {
      title: category.name,
      description: category.description,
      url: category.href,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const items = getToolsByCategory(category.id);
  const showConverterGroups =
    category.id === "file-converters" || category.id === "data-tools" || category.id === "developer-tools";

  return (
    <PageFrame className="animate-fade">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">{category.name}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">{category.name}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{leads[category.id] ?? category.description}</p>
        <p className="mt-2 font-mono text-xs text-subtle">{items.length} tools</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside>
            <p className="px-1 pb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">Categories</p>
            <nav className="flex flex-col gap-0.5">
              {categories.map((item) => {
                const count = getToolsByCategory(item.id).length;
                const active = item.id === category.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-md px-3 py-2 text-sm",
                      active ? "bg-surface font-medium text-ink" : "text-muted hover:bg-surface-2 hover:text-ink",
                    )}
                  >
                    <span>{item.name}</span>
                    <span className="font-mono text-[11px] text-subtle">{count}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>

          <div>
            {showConverterGroups ? (
              <div className="mb-6 grid gap-2 sm:grid-cols-2">
                {converterGroups.map((group) => (
                  <Link
                    key={group.id}
                    href={group.href}
                    className={cn(
                      "rounded-lg border px-4 py-3",
                      group.id === category.id ? "border-ink bg-surface" : "border-line bg-surface hover:border-ink/20",
                    )}
                  >
                    <p className="text-sm font-semibold text-ink">{group.name}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{group.description}</p>
                  </Link>
                ))}
              </div>
            ) : null}
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
              <p className="text-sm text-muted">Need a different category? Open the full catalog.</p>
              <Link
                href="/tools"
                className="inline-flex h-10 items-center rounded-md bg-brand px-4 text-sm font-semibold text-brand-ink hover:bg-brand-hover"
              >
                Browse all tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
