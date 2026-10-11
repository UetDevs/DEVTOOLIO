import Link from "next/link";
import { IconBadge } from "./IconBadge";
import type { Category } from "@/lib/categories";
import { getToolsByCategory } from "@/lib/tools";

export function CategoryCard({ category }: { category: Category }) {
  const count = getToolsByCategory(category.id).length;
  return (
    <Link
      href={category.href}
      className="motion-card group flex items-start gap-3 rounded-lg border border-line bg-surface px-4 py-4"
    >
      <IconBadge name={category.icon} tint={category.iconTint} />
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-sm font-semibold text-ink">{category.name}</h3>
          <span className="shrink-0 font-mono text-[11px] text-subtle">{count}</span>
        </div>
        <p className="mt-1 text-sm leading-6 text-muted">{category.description}</p>
      </div>
    </Link>
  );
}
