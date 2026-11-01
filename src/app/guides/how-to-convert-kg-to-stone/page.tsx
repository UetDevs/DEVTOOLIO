import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site";

const title = "How to convert kilograms into stone";
const description =
  "Divide kilograms by 6.35029318. One stone is 14 pounds, so 70 kg is about 11.02 stone.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/guides/how-to-convert-kg-to-stone") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/guides/how-to-convert-kg-to-stone"),
    type: "article",
  },
};

export default function KgToStoneGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I convert kg into stone?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Divide kilograms by 6.35029318. One stone equals 14 international pounds, or 6.35029318 kilograms. 70 kg is about 11.02 stone.",
              },
            },
          ],
        }}
      />
      <Article title={title}>
        <p>
          A stone is a British unit still used for body weight. One stone is exactly 14 international
          pounds. One pound is 0.45359237 kilograms, so:
        </p>
        <p>
          <strong className="text-ink">1 stone = 6.35029318 kilograms</strong>
        </p>
        <h2>The conversion</h2>
        <p>Stone = kilograms ÷ 6.35029318. Kilograms = stone × 6.35029318.</p>
        <h2>Worked example</h2>
        <p>
          70 ÷ 6.35029318 is about 11.02. So 70 kg is about 11 stone. Eleven stone on its own is 69.85
          kg, which is why the leftover shows up as a fraction of a stone rather than a round 11.
        </p>
        <p>
          Use the <Link href="/tools/unit-converters/kg-to-stone">kg to stone converter</Link> when you
          do not want to keep the factor in your head. The reverse page is{" "}
          <Link href="/tools/unit-converters/stone-to-kg">stone to kg</Link>. If you need pounds instead,
          the <Link href="/guides/how-to-convert-kg-to-lbs">kg to pounds note</Link> uses a different
          factor.
        </p>
        <h2>Why clinic notes still say stone</h2>
        <p>
          UK scales and older medical charts often print stone and pounds together, such as 11 st 4 lb.
          The converter on this site returns decimal stone. Multiply the decimal part by 14 if you need
          the leftover pounds. 0.02 × 14 is about 0.3 lb, so 70 kg is roughly 11 stone and a third of a
          pound.
        </p>
      </Article>
    </>
  );
}
