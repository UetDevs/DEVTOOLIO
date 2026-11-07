import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { CONSENT_KEY } from "@/lib/consent";
import { absoluteUrl, site } from "@/lib/site";

const description = `The cookies and local storage used on ${site.name}, including Google AdSense advertising cookies, and how to control them.`;

export const metadata: Metadata = {
  title: "Cookie Policy",
  description,
  alternates: { canonical: absoluteUrl("/cookie-policy") },
  openGraph: {
    title: "Cookie Policy",
    description,
    url: absoluteUrl("/cookie-policy"),
    type: "website",
  },
};

export default function CookiePolicyPage() {
  return (
    <Article title="Cookie Policy" updated="7 November 2026">
      <p>
        This page lists the cookies and similar browser storage used on {site.home}. For how we handle personal
        information in general, see the <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Storage set by {site.name}</h2>
      <p>These values live in your browser&apos;s local storage. They are never sent to us.</p>
      <ul>
        <li>
          <code>devtoolio-theme</code>: remembers whether you chose the light or dark theme.
        </li>
        <li>
          <code>{CONSENT_KEY}</code>: remembers whether you allowed personalized ads or chose non-personalized ads
          only.
        </li>
      </ul>
      <p>The tools themselves do not need cookies to calculate or convert anything.</p>

      <h2>Advertising cookies from Google</h2>
      <p>
        We use Google AdSense. Google and its partners may set or read cookies, or use similar technologies such
        as device identifiers, to serve ads, limit how often you see the same ad, measure ad performance and
        prevent fraud. If you allow personalized ads, they may also use cookies to show ads based on your visits
        to this and other websites. If you choose non-personalized ads only, ads are chosen from the page context
        instead, but Google may still use cookies for frequency capping, reporting and fraud prevention.
      </p>
      <p>
        Read{" "}
        <a href="https://policies.google.com/technologies/ads" rel="noreferrer" target="_blank">
          how Google uses cookies in advertising
        </a>{" "}
        and manage personalization at{" "}
        <a href="https://adssettings.google.com" rel="noreferrer" target="_blank">
          Google Ads Settings
        </a>
        .
      </p>

      <h2>How to change your choice</h2>
      <ul>
        <li>Use the &quot;Cookie settings&quot; link in the site footer to reopen the choice.</li>
        <li>Clear this site&apos;s data in your browser. The cookie banner will show again on your next visit.</li>
        <li>
          Block third-party cookies in your browser settings. Ads may still appear, but they will not be
          personalized using those cookies.
        </li>
      </ul>

      <h2>Questions</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </Article>
  );
}
