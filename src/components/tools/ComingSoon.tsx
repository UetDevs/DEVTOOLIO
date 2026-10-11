import { ToolPageLayout } from "./ToolPageLayout";
import type { Tool } from "@/lib/types";

export function ComingSoon({ tool }: { tool: Tool }) {
  return (
    <ToolPageLayout tool={tool}>
      <div className="rounded-lg border border-dashed border-line bg-surface px-6 py-12 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">Coming soon</p>
        <h2 className="mt-2 text-xl font-semibold text-ink">{tool.name} is not ready yet</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
          This page is still empty. The rest of the site works. Check back later, or write if you
          actually need this one.
        </p>
      </div>
    </ToolPageLayout>
  );
}
