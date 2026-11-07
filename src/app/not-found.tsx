import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/theme/PageFrame";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageFrame className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <p className="font-mono text-sm text-subtle">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">Page not found</h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        The address may be mistyped, or the page may have moved. Search the catalog or pick a category below.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/tools"
          className="inline-flex h-10 items-center rounded-md bg-brand px-4 text-sm font-semibold text-brand-ink hover:bg-brand-hover"
        >
          Browse all tools
        </Link>
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-md border border-line px-4 text-sm font-medium text-ink"
        >
          Go to the homepage
        </Link>
      </div>
      <h2 className="mt-12 text-sm font-semibold text-ink">Categories</h2>
      <ul className="mt-3 flex flex-wrap justify-center gap-2 text-sm">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={category.href} className="inline-block rounded-md border border-line bg-surface px-3 py-1.5 text-muted hover:text-ink">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-muted">
        Think a link on this site is broken?{" "}
        <Link href="/contact" className="font-medium text-ink underline underline-offset-2">
          Tell us
        </Link>
        .
      </p>
    </PageFrame>
  );
}
