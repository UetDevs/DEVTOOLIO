import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { guideBreadcrumbs } from "@/lib/guides-index";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site";

const title = "15 liters is how many gallons?";
const description =
  "15 liters is 3.96 US gallons, or 3.30 imperial gallons. The two gallons are not the same size.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/guides/how-many-gallons-is-15-liters") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/guides/how-many-gallons-is-15-liters"),
    type: "article",
  },
};

export default function LitersGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "15 liters is how many gallons?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "15 liters is 3.96 US gallons. It is 3.30 imperial gallons. A US gallon is 3.785411784 liters. An imperial gallon is 4.54609 liters.",
              },
            },
          ],
        }}
      />
      <Article breadcrumbs={guideBreadcrumbs} title={title}>
        <p>
          <strong className="text-ink">15 liters is 3.96 US gallons.</strong> It is 3.30 imperial
          gallons. The word “gallon” on its own is ambiguous, so the rest of this note separates the two.
        </p>
        <h2>US gallon</h2>
        <p>
          A US liquid gallon is 3.785411784 liters. Divide liters by that number. 15 ÷ 3.785411784 =
          3.9626, which rounds to 3.96 gallons. Fuel pumps, US recipes, and most online converters use
          this gallon.
        </p>
        <h2>Imperial gallon</h2>
        <p>
          An imperial gallon, still seen in older UK references, is 4.54609 liters. 15 ÷ 4.54609 = 3.30
          gallons. It is larger than the US gallon, so the same 15 liters fills fewer of them.
        </p>
        <h2>Check another amount</h2>
        <p>
          The <Link href="/tools/unit-converters/liters-to-gallons">liters to gallons converter</Link>{" "}
          starts at 15 liters and uses US gallons. Change the number for any other volume. For a smaller
          kitchen measure, US fluid ounces and milliliters are on the{" "}
          <Link href="/tools/unit-converters/ml-to-oz">ml to oz</Link> page.
        </p>
      </Article>
    </>
  );
}
