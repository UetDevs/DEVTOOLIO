"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { categories } from "@/lib/categories";
import { searchTools } from "@/lib/tools";
import { cn } from "@/lib/utils";

const links = [
  { href: "/tools", label: "Tools" },
  { href: "/guides", label: "Guides" },
];

export function Navbar() {
  const [query, setQuery] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => (query.trim() ? searchTools(query).slice(0, 7) : []), [query]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      event.preventDefault();
      searchRef.current?.focus();
      setOpenSearch(true);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/72 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setOpenCategories(true)}
            onMouseLeave={() => setOpenCategories(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 transition hover:text-ink"
              aria-expanded={openCategories}
              onClick={() => setOpenCategories((value) => !value)}
            >
              Categories
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {openCategories ? (
              <div className="animate-menu absolute left-0 top-full z-30 w-72 rounded-lg border border-line bg-surface p-1.5 shadow-sm">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="block rounded-md px-3 py-2 hover:bg-surface-2"
                    onClick={() => setOpenCategories(false)}
                  >
                    <span className="block text-sm font-medium text-ink">{category.name}</span>
                    <span className="block truncate text-xs text-subtle">{category.description}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-subtle" />
            <input
              ref={searchRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => setOpenSearch(true)}
              onBlur={() => window.setTimeout(() => setOpenSearch(false), 120)}
              placeholder="Search tools"
              aria-label="Search tools"
              className="h-9 w-44 rounded-md border border-line bg-surface pl-8 pr-10 text-sm outline-none placeholder:text-subtle focus:border-ink/25 lg:w-56"
            />
            <kbd className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-subtle lg:inline">
              /
            </kbd>
            {openSearch && query.trim() ? (
              <div className="animate-menu absolute right-0 top-full z-30 mt-1.5 w-80 rounded-lg border border-line bg-surface p-1.5 shadow-sm">
                {results.length ? (
                  results.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={tool.href}
                      className="block rounded-md px-3 py-2 text-sm hover:bg-surface-2"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => setQuery("")}
                    >
                      <span className="font-medium text-ink">{tool.name}</span>
                      <span className="mt-0.5 block truncate text-xs text-subtle">{tool.description}</span>
                    </Link>
                  ))
                ) : (
                  <p className="px-3 py-2 text-sm text-subtle">No tools found.</p>
                )}
              </div>
            ) : null}
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted md:hidden"
            onClick={() => setOpenMenu((value) => !value)}
            aria-label={openMenu ? "Close menu" : "Open menu"}
          >
            {openMenu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {openMenu ? (
        <div className="animate-menu border-t border-line bg-canvas px-4 py-3 md:hidden">
          <div className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search tools"
              aria-label="Search tools"
              className="h-10 w-full rounded-md border border-line bg-surface pl-9 pr-3 text-sm outline-none"
            />
          </div>
          <div className="flex flex-col gap-0.5 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-muted hover:bg-surface-2 hover:text-ink"
                onClick={() => setOpenMenu(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-3 px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">Categories</p>
          <div className="mt-1 grid grid-cols-2 gap-0.5">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="rounded-md px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-ink"
                onClick={() => setOpenMenu(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
          {query.trim() ? (
            <div className="mt-2 space-y-0.5">
              {results.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className={cn("block rounded-md px-3 py-2 text-sm hover:bg-surface-2")}
                  onClick={() => setOpenMenu(false)}
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
