import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "@/components/theme/PageFrame";
import { allGuides } from "@/lib/guides-index";
import { absoluteUrl } from "@/lib/site";

const description =
  "Plain-language guides behind the tools: percentages, GST and VAT, mortgages, GPA, JSON, QR codes, password length, Unix time, unit conversions and file privacy.";

export const metadata: Metadata = {
  title: "Guides",
  description,
  alternates: { canonical: absoluteUrl("/guides") },
  openGraph: {
    title: "Guides",
    description,
    url: absoluteUrl("/guides"),
    type: "website",
  },
};

export default function GuidesPage() {
  return (
    <PageFrame className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Guides</h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        Short explainers that sit next to the tools. Each one covers how a formula works, a worked example, and
        the mistakes people commonly make, so you can understand a result instead of just copying it.
      </p>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {allGuides.map((guide) => (
          <Link key={guide.href} href={guide.href} className="block py-4">
            <h2 className="text-sm font-semibold text-ink">{guide.title}</h2>
            <p className="mt-1 text-sm text-muted">{guide.description}</p>
          </Link>
        ))}
      </div>
    </PageFrame>
  );
}
