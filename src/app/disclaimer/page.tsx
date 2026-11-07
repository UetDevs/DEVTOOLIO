import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { absoluteUrl, site } from "@/lib/site";

const description = `The limits of ${site.name} calculators, converters, writing helpers and developer utilities, including health and finance estimates.`;

export const metadata: Metadata = {
  title: "Disclaimer",
  description,
  alternates: { canonical: absoluteUrl("/disclaimer") },
  openGraph: {
    title: "Disclaimer",
    description,
    url: absoluteUrl("/disclaimer"),
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <Article title="Disclaimer" updated="7 November 2026">
      <p>
        {site.name} publishes free utilities and short explainers for general information. Nothing on this
        website is professional advice tailored to your situation. Use the results as a starting point and
        confirm anything important.
      </p>

      <h2>Health and fitness</h2>
      <p>
        BMI, calorie, TDEE, protein, water, pregnancy and ovulation results are general estimates based on common
        formulas. They do not diagnose, treat or prevent any condition and do not replace a doctor, midwife,
        dietitian or other clinician.
      </p>

      <h2>Money and work</h2>
      <p>
        Loan, mortgage, interest, SIP, GST/VAT, salary, overtime and tip results are illustrations. Lenders,
        employers and tax authorities apply their own rules, fees and rounding. Check figures with the institution
        involved or a qualified accountant before you commit money.
      </p>

      <h2>Study and grades</h2>
      <p>
        GPA, CGPA, attendance and grade tools follow widely used formulas. Your school or university may use a
        different scale or conversion rule. The official record is whatever your institution publishes.
      </p>

      <h2>Writing tools</h2>
      <p>
        The rewriting, paraphrasing and grammar tools are rule-based helpers, not AI models, and they can change
        meaning. They are meant for drafts you wrote. Using them to disguise copied text is still plagiarism. You
        are responsible for what you publish or submit.
      </p>

      <h2>Files and conversions</h2>
      <p>
        Image, PDF, document and video conversions can lose layout, fonts, quality or metadata. Always keep the
        original file. Text extraction tools do not perform OCR on scanned pages.
      </p>

      <h2>Developer utilities</h2>
      <p>
        Hash, JWT, encoding, regex and formatting tools are for inspection, debugging and learning. A JWT decoder
        reads a token but does not verify its signature. Avoid pasting production secrets on a shared computer.
      </p>

      <h2>Accuracy and corrections</h2>
      <p>
        We work to keep formulas, conversion factors and explanations correct, but we cannot guarantee that every
        result is complete or error-free. If you find a mistake, please{" "}
        <Link href="/contact">tell us</Link> and we will review and fix it.
      </p>

      <h2>Advertising and external links</h2>
      <p>
        Some pages show ads served by Google. Ads are provided by third parties, and we do not endorse the products
        or services advertised. Links to other websites are provided for convenience, and we are not responsible
        for their content.
      </p>

      <p>
        How we handle data is described in the <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </Article>
  );
}
