"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ToolRow } from "@/components/ui/ToolCard";
import { categories } from "@/lib/categories";
import { searchTools, tools } from "@/lib/tools";
import type { CategoryId } from "@/lib/types";
import { cn } from "@/lib/utils";

type SortKey = "name" | "category";

export function ToolsCatalog({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [sort, setSort] = useState<SortKey>("category");

  const filtered = useMemo(() => {
    const searched = query.trim() ? searchTools(query) : tools;
    const scoped = category === "all" ? searched : searched.filter((tool) => tool.category === category);
    return [...scoped].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (a.category === b.category) return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    });
  }, [query, category, sort]);

  const grouped = useMemo(() => {
    if (sort !== "category" || category !== "all") return null;
    return categories
      .map((item) => ({
        category: item,
        items: filtered.filter((tool) => tool.category === item.id),
      }))
      .filter((group) => group.items.length);
  }, [filtered, sort, category]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search tools</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter by name, keyword, or job"
            className="h-11 w-full rounded-md border border-line bg-surface pl-9 pr-3 text-sm outline-none placeholder:text-subtle focus:border-ink/25"
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-muted">
          <span className="shrink-0">Sort</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="h-11 rounded-md border border-line bg-surface px-3 text-sm text-ink outline-none focus:border-ink/25"
          >
            <option value="category">Category</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>

      <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        <FilterChip active={category === "all"} onClick={() => setCategory("all")} label="All" count={tools.length} />
        {categories.map((item) => (
          <FilterChip
            key={item.id}
            active={category === item.id}
            onClick={() => setCategory(item.id)}
            label={item.name}
            count={tools.filter((tool) => tool.category === item.id).length}
          />
        ))}
      </div>

      <p className="mt-5 font-mono text-xs text-subtle">
        {filtered.length} {filtered.length === 1 ? "tool" : "tools"}
        {query.trim() ? ` matching “${query.trim()}”` : null}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-line px-6 py-12 text-center">
          <p className="text-sm font-medium text-ink">No tools match that filter.</p>
          <p className="mt-1 text-sm text-muted">Try a shorter search, or clear the category.</p>
          <button
            type="button"
            className="mt-4 text-sm font-medium text-ink underline underline-offset-2"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : grouped ? (
        grouped.map((group) => (
          <section key={group.category.id} className="mt-8">
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h2 className="text-base font-semibold text-ink">{group.category.name}</h2>
              <span className="font-mono text-[11px] text-subtle">{group.items.length}</span>
            </div>
            <div className="grid gap-2">
              {group.items.map((tool) => (
                <ToolRow key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        ))
      ) : (
        <div className="mt-4 grid gap-2">
          {filtered.map((tool) => (
            <ToolRow key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border px-2.5 text-xs font-medium",
        active ? "border-ink bg-ink text-canvas" : "border-line bg-surface text-muted hover:text-ink",
      )}
    >
      {label}
      <span className={cn("font-mono", active ? "text-canvas/70" : "text-subtle")}>{count}</span>
    </button>
  );
}
