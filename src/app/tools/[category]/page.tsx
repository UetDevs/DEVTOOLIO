import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageFrame } from "@/components/theme/PageFrame";
import { ToolCard } from "@/components/ui/ToolCard";
import { categories, converterGroups, getCategoryBySlug } from "@/lib/categories";
import { absoluteUrl, site } from "@/lib/site";
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

const about: Record<CategoryId, { body: string; uses: string[] }> = {
  calculators: {
    body: "Everyday maths for health, money, dates and time. Each calculator uses a standard formula, such as the WHO BMI ranges, the amortization formula for loans and mortgages, or Mifflin–St Jeor for calorie needs. The most-used pages show that formula with a worked example so you can check the answer yourself.",
    uses: [
      "Estimate a monthly loan or mortgage payment before talking to a lender",
      "Add or remove GST/VAT from a price",
      "Work out an exact age, a date difference, or a time zone conversion",
      "Get a rough calorie, protein or water target (an estimate, not medical advice)",
    ],
  },
  "student-tools": {
    body: "Grade maths for students and teachers. The GPA and CGPA tools weight each course by its credit hours. The attendance calculator shows how many classes you can miss, or must attend, to stay above a threshold. Schools use different scales, so check your institution's official rule for anything that counts.",
    uses: [
      "Calculate a semester GPA or a cumulative CGPA",
      "Find the score you need on a final exam to reach a target grade",
      "Convert a CGPA to a percentage, or a percentage to GPA",
      "Count down the days to an exam and plan study time",
    ],
  },
  writing: {
    body: "Text tools for drafts you wrote. The counters, case converter, line sorter and text compare tools do exact, mechanical jobs. The rewriting, paraphrasing and grammar helpers are rule-based, not AI: they use fixed word lists and patterns, so always read the result before you use it.",
    uses: [
      "Check word, character and reading-grade counts against a limit",
      "Compare two versions of a draft line by line",
      "Clean pasted text: remove duplicate lines, extra spaces, or change case",
      "Check a meta description length before publishing a web page",
    ],
  },
  "image-tools": {
    body: "Resize, crop, compress and convert images directly in your browser. Your photo is not uploaded. Formats include JPG, PNG, WebP, SVG and iPhone HEIC. There are also helpers for favicons, passport-size crops and 1200×630 social preview images.",
    uses: [
      "Shrink a photo to meet an upload size limit",
      "Convert HEIC photos from an iPhone to JPG",
      "Create a favicon set or an Open Graph image for a website",
      "Check an image's pixel dimensions or metadata",
    ],
  },
  "file-converters": {
    body: "PDF and document jobs that run in your browser with open-source libraries (pdf-lib, PDF.js and Mammoth). Merge, split, rotate or compress a PDF, turn pages into JPGs, or build a PDF from images or plain text. Conversions that rebuild a document can change layout, so keep your original.",
    uses: [
      "Combine several PDFs into one file, or extract a page range",
      "Turn scanned photos or JPGs into a single PDF",
      "Pull selectable text out of a PDF (no OCR for scanned pages)",
      "Reduce a PDF's file size for email",
    ],
  },
  "data-tools": {
    body: "Convert structured data between JSON, CSV, XML and YAML. Paste the input, check the output, copy it back. Parsing happens in your browser, and invalid input shows an error instead of guessing.",
    uses: [
      "Turn a JSON API response into a CSV for a spreadsheet",
      "Convert a CSV export into JSON for code or tests",
      "Translate a YAML config to JSON, or the reverse",
      "Pretty-print or convert XML to JSON",
    ],
  },
  "developer-tools": {
    body: "Small utilities developers reach for many times a day: format and validate JSON, encode and decode Base64 or URLs, decode a JWT, test a regular expression, generate hashes, UUIDs and passwords, and minify CSS or JavaScript. They run in your browser, which matters when the input is a token or an internal payload.",
    uses: [
      "Debug an API by formatting, validating or decoding its payload",
      "Read the claims inside a JWT (the signature is not verified)",
      "Test a regex against sample text before adding it to code",
      "Generate a robots.txt, an .htaccess redirect, a CSS gradient or a box shadow",
    ],
  },
  "media-tools": {
    body: "Compress, resize and convert videos you already have, using FFmpeg compiled to WebAssembly. Processing happens on your device, so large files are limited by your computer's memory and speed. We do not offer downloaders for YouTube, Instagram or other platforms.",
    uses: [
      "Make a screen recording small enough to share",
      "Turn a short clip into a GIF, or a GIF into a video",
      "Convert between MP4 and WebM",
      "Check a video's frame rate, resolution and other metadata",
    ],
  },
  "unit-converters": {
    body: "Single-purpose converters for length, weight, temperature, volume, speed, pressure, power, area and digital storage. They use the exact defined conversion factors, for example 1 lb = 0.45359237 kg and 1 inch = 2.54 cm, and most pages show the formula next to the result.",
    uses: [
      "Convert body weight between kg, lb and stone",
      "Switch recipe or fuel volumes between liters, gallons, ml and fluid ounces",
      "Convert speeds, tyre pressures or engine power between metric and imperial",
      "Check file sizes in MB, GB and bytes",
    ],
  },
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
  const title = `${category.name}: ${getToolsByCategory(category.id).length} free online tools`;
  const description = `${leads[category.id] ?? category.description} Free, no signup, runs in your browser.`;
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(category.href) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(category.href),
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

  const intro = about[category.id];

  return (
    <PageFrame className="animate-fade">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.home },
            { "@type": "ListItem", position: 2, name: "Tools", item: absoluteUrl("/tools") },
            { "@type": "ListItem", position: 3, name: category.name, item: absoluteUrl(category.href) },
          ],
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <nav className="flex flex-wrap items-center gap-1 text-sm text-subtle" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <Link href="/tools" className="hover:text-ink">Tools</Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="text-ink" aria-current="page">{category.name}</span>
        </nav>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{category.name}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{leads[category.id] ?? category.description}</p>
        <p className="mt-2 font-mono text-xs text-subtle">{items.length} tools</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="min-w-0 lg:sticky lg:top-20 lg:self-start">
            <p className="px-1 pb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">Categories</p>
            <nav className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:px-0">
              {categories.map((item) => {
                const count = getToolsByCategory(item.id).length;
                const active = item.id === category.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "flex shrink-0 items-center justify-between gap-3 rounded-md px-3 py-2 text-sm lg:shrink",
                      active ? "bg-surface font-medium text-ink" : "text-muted hover:bg-surface-2 hover:text-ink",
                    )}
                  >
                    <span className="whitespace-nowrap lg:whitespace-normal">{item.name}</span>
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
            <section className="mt-10 rounded-lg border border-line bg-surface p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-ink">About {category.name.toLowerCase()}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{intro.body}</p>
              <h3 className="mt-5 text-sm font-semibold text-ink">Common uses</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted">
                {intro.uses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
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
