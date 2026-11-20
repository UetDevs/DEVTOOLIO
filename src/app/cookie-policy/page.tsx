import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { absoluteUrl, site } from "@/lib/site";

const description = `The cookies, local storage and notification permissions used on ${site.name}, and how to control them.`;

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
    <Article title="Cookie Policy" updated="20 November 2026">
      <p>
        This page lists the cookies, similar browser storage and notification permissions used on {site.home}. For
        how we handle personal information in general, see the <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Storage set by {site.name}</h2>
      <p>This value lives in your browser&apos;s local storage. It is never sent to us.</p>
      <ul>
        <li>
          <code>devtoolio-theme</code>: remembers whether you chose the light or dark theme.
        </li>
      </ul>

      <p>The tools themselves do not need cookies to calculate or convert anything.</p>

      <h2>Advertising cookies and notifications</h2>
      <p>
        Our advertising partner may set cookies or similar storage, and may ask your browser for permission to send
        notifications. Those ads can appear as a permission prompt, a notification-style card, or a full-screen
        vignette. Refusing the prompt keeps notifications off. The partner&apos;s cookies are used to limit how often
        you see an ad, measure ad performance and prevent fraud.
      </p>

      <h2>How to change your choice</h2>
      <ul>
        <li>Refuse or revoke the notification permission for this site in your browser settings.</li>
        <li>Clear this site&apos;s data in your browser to remove the theme setting.</li>
        <li>Block third-party cookies in your browser settings. Ads may still appear.</li>
      </ul>

      <h2>Questions</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </Article>
  );
}
