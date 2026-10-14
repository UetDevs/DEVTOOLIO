import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/theme/PageFrame";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageFrame className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-mono text-sm text-subtle">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">This tool was not found</h1>
      <p className="mt-3 text-sm text-muted">The page may have moved. Browse the catalog instead.</p>
      <Link
        href="/tools"
        className="mt-6 inline-flex h-10 items-center rounded-md bg-brand px-4 text-sm font-semibold text-brand-ink"
      >
        Browse tools
      </Link>
    </PageFrame>
  );
}
