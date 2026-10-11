"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { searchTools } from "@/lib/tools";
import type { Tool } from "@/lib/types";

export function HeroSearch({ suggestions }: { suggestions: Tool[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const results = useMemo(() => (query.trim() ? searchTools(query).slice(0, 8) : []), [query]);

  return (
    <div className="mx-auto mt-6 max-w-xl">
      <form action="/tools" className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
        <input
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 120)}
          placeholder="Search BMI, JSON, PDF, timestamps…"
          aria-label="Search tools"
          autoComplete="off"
          className="h-12 w-full rounded-md border border-line bg-surface pl-10 pr-16 text-sm outline-none placeholder:text-subtle focus:border-ink/25"
        />
        <div className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-1.5 sm:flex">
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-subtle">/</kbd>
        </div>
        {open && query.trim() ? (
          <div className="animate-menu absolute inset-x-0 top-full z-20 mt-1.5 rounded-lg border border-line bg-surface p-1.5 shadow-sm">
            {results.length ? (
              results.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="block rounded-md px-3 py-2 hover:bg-surface-2"
                  onMouseDown={(event) => event.preventDefault()}
                >
                  <span className="text-sm font-medium text-ink">{tool.name}</span>
                  <span className="mt-0.5 block truncate text-xs text-subtle">{tool.description}</span>
                </Link>
              ))
            ) : (
              <p className="px-3 py-2 text-sm text-subtle">No tools match that search.</p>
            )}
          </div>
        ) : null}
      </form>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs text-subtle">Popular:</span>
        {suggestions.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.href}
            className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-muted transition hover:border-ink/20 hover:text-ink"
          >
            {tool.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
