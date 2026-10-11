import { ToolsCatalog } from "@/components/catalog/ToolsCatalog";
import { PageFrame } from "@/components/theme/PageFrame";
import { tools } from "@/lib/tools";

export const metadata = {
  title: "All Tools",
  description: "Every DEVTOOLIO calculator, converter and utility on one page.",
};

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
        {q ? `Results for “${q}”. Refine with a category or sort.` : "Search, filter by category, or scan the full catalog."}
      </p>
      <div className="mt-6">
        <ToolsCatalog initialQuery={q ?? ""} />
      </div>
    </PageFrame>
  );
}
