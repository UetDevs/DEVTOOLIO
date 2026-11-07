import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { guideBreadcrumbs } from "@/lib/guides-index";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "What is Unix time?",
  description:
    "Unix time is the number of seconds since 00:00:00 UTC on 1 January 1970. See how it differs from milliseconds and how to convert it.",
  alternates: { canonical: absoluteUrl("/guides/what-is-a-unix-timestamp") },
  openGraph: {
    title: "What is Unix time?",
    description:
      "Unix time is the number of seconds since 00:00:00 UTC on 1 January 1970. See how it differs from milliseconds and how to convert it.",
    url: absoluteUrl("/guides/what-is-a-unix-timestamp"),
    type: "article",
  },
};

export default function UnixGuidePage() {
  return (
    <Article breadcrumbs={guideBreadcrumbs} title="What is Unix time?">
      <p>
        Unix time is a count of seconds. It starts at 00:00:00 UTC on 1 January 1970 and ignores leap
        seconds. A Unix timestamp is that count written as an integer. Programmers store it because any
        timezone can format the same number later.
      </p>
      <h2>Seconds versus milliseconds</h2>
      <p>
        Many APIs use seconds (10 digits for current dates). JavaScript’s <code>Date.now()</code> uses
        milliseconds (13 digits). If a number looks about a thousand times too large, divide by 1000
        before you treat it as seconds.
      </p>
      <h2>Why it looks ugly</h2>
      <p>
        1_704_067_200 is harder to read than “1 January 2024”. Logs still prefer the integer because it
        sorts correctly and does not depend on a locale. Convert it only when a human needs to read the
        moment.
      </p>
      <p>
        Use the{" "}
        <Link href="/tools/developer-tools/unix-timestamp" >
          Unix Timestamp Converter
        </Link>{" "}
        to move between epoch seconds and a readable ISO date.
      </p>
    </Article>
  );
}
