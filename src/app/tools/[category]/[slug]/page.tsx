import { notFound } from "next/navigation";
import { renderTool } from "@/components/calculators/registry";
import { absoluteUrl } from "@/lib/site";
import { tools, getTool } from "@/lib/tools";

export function generateStaticParams() {
  return tools.map((tool) => ({
    category: tool.category,
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.longDescription ?? tool.description,
    keywords: tool.keywords,
    alternates: { canonical: absoluteUrl(tool.href) },
    openGraph: {
      title: tool.name,
      description: tool.longDescription ?? tool.description,
      url: absoluteUrl(tool.href),
      type: "website",
    },
  };
}

export default async function ToolRoute({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const tool = getTool(slug);
  if (!tool || tool.category !== category) notFound();
  return renderTool(tool);
}
