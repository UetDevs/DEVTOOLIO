import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site";

const title = "What grade level is my writing?";
const description =
  "Paste a draft to estimate its US grade level. The number comes from Flesch–Kincaid and tracks sentence length and word length.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/guides/what-grade-level-is-my-writing") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/guides/what-grade-level-is-my-writing"),
    type: "article",
  },
};

export default function GradeLevelGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What grade level is my writing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Paste the passage into a Flesch–Kincaid checker. The result is an estimate of the US school grade that can read those sentences comfortably.",
              },
            },
          ],
        }}
      />
      <Article title={title}>
        <p>
          The grade level of a piece of writing is an estimate, not a mark from a teacher. The usual
          formula on the web is Flesch–Kincaid. It looks at how long the sentences are and how many
          syllables the words have. A result of 6 means the sentences look like sixth-grade reading. A
          result of 12 looks like the last year of high school.
        </p>
        <h2>How to check a draft</h2>
        <p>
          Copy a paragraph you wrote — a caption, an email, a product note — and paste it into the{" "}
          <Link href="/tools/writing/readability-checker">readability checker</Link>. You get a grade
          level and a reading-ease score from 0 to 100. Higher ease is easier. The text stays in your
          browser.
        </p>
        <h2>What moves the number</h2>
        <ul>
          <li>Long sentences raise the grade level. Two shorter sentences usually lower it.</li>
          <li>Long words raise it, even when the idea is simple. “Use” scores easier than “utilize.”</li>
          <li>A list of familiar words can still score high if every sentence runs on.</li>
        </ul>
        <h2>What the number does not mean</h2>
        <p>
          A low grade is not automatically better writing. Instructions, emails, and most web pages are
          easier to finish around grades 6 to 8. A lab note or a contract can sit higher because the
          reader expects the precise word. The score never checks whether the facts are right or the
          tone is kind.
        </p>
        <p>
          If you are rewriting your own draft, the{" "}
          <Link href="/guides/how-to-paraphrase-your-own-writing">paraphrase note</Link> sits next to
          this one. Do not paste someone else’s essay into the checker and hand the result in as yours.
        </p>
      </Article>
    </>
  );
}
