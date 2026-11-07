import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Article } from "@/components/legal/Article";
import { guideBreadcrumbs } from "@/lib/guides-index";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideArticles, getGuideArticle } from "@/lib/guide-articles";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guideArticles.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideArticle(slug);
  if (!guide) return {};
  const path = `/guides/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: absoluteUrl(path),
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideArticle(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <Article breadcrumbs={guideBreadcrumbs} title={guide.title}>
        {guide.body.map((block, index) => {
          if (block.t === "h2") return <h2 key={index}>{block.text}</h2>;
          if (block.t === "formula")
            return (
              <p key={index} className="break-words rounded-md border border-line bg-surface-2 p-3 font-mono text-sm text-ink">
                {block.text}
              </p>
            );
          if (block.t === "ul")
            return (
              <ul key={index} className="list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          return <p key={index}>{block.text}</p>;
        })}

        <h2>Questions</h2>
        {guide.faqs.map((item) => (
          <div key={item.question}>
            <h3 className="font-semibold text-ink">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}

        {guide.related.length ? (
          <p>
            Try it:{" "}
            {guide.related.map((item, index) => (
              <span key={item.href}>
                {index > 0 ? ", " : null}
                <Link href={item.href}>{item.label}</Link>
                {index === guide.related.length - 1 ? "." : null}
              </span>
            ))}
          </p>
        ) : null}
      </Article>
    </>
  );
}
