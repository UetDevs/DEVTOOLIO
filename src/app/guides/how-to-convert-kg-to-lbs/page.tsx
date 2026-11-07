import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { guideBreadcrumbs } from "@/lib/guides-index";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to convert kilograms to pounds",
  description: "Multiply kilograms by 2.2046226218 to get pounds. 70 kg is about 154.32 lb.",
  alternates: { canonical: absoluteUrl("/guides/how-to-convert-kg-to-lbs") },
  openGraph: {
    title: "How to convert kilograms to pounds",
    description: "Multiply kilograms by 2.2046226218 to get pounds. 70 kg is about 154.32 lb.",
    url: absoluteUrl("/guides/how-to-convert-kg-to-lbs"),
    type: "article",
  },
};

export default function KgGuidePage() {
  return (
    <Article breadcrumbs={guideBreadcrumbs} title="How to convert kilograms to pounds">
      <p>
        A kilogram is the SI unit of mass. A pound (lb) in everyday US use is the international avoirdupois
        pound. The exact factor is:
      </p>
      <p>
        <strong className="text-ink">1 kilogram = 2.2046226218 pounds</strong>
      </p>
      <h2>Worked example</h2>
      <p>
        To convert 70 kg to pounds, multiply 70 × 2.2046226218. The result is about 154.32 lb. People
        sometimes phrase the same job as “transfer kg to lbs.” It is still this multiplication. To go the
        other way, multiply pounds by 0.45359237.
      </p>
      <h2>When precision matters</h2>
      <p>
        Shipping labels, gym logs and cooking often need only one or two decimal places. Laboratory or
        aviation work may need the full factor. DEVTOOLIO’s{" "}
        <Link href="/tools/unit-converters/kg-to-lbs" >
          KG → LBS
        </Link>{" "}
        and{" "}
        <Link href="/tools/unit-converters/lbs-to-kg" >
          LBS → KG
        </Link>{" "}
        pages use the international pound, not a rounded 2.2 shortcut. For British body weight, see{" "}
        <Link href="/guides/how-to-convert-kg-to-stone">how to convert kg into stone</Link>.
      </p>
      <h2>Weight is not the same as force</h2>
      <p>
        In casual speech people say “weight in kilos”. Strictly, a kilogram is mass. Bathroom scales
        estimate mass from force due to gravity. For everyday health tracking the distinction rarely
        changes the number you write down.
      </p>
    </Article>
  );
}
