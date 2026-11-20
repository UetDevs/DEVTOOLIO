import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { absoluteUrl, site } from "@/lib/site";

const description = `What ${site.name} collects, how browser-based tools keep your files local, and how our advertising partner uses cookies and notifications.`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: absoluteUrl("/privacy-policy") },
  openGraph: {
    title: "Privacy Policy",
    description,
    url: absoluteUrl("/privacy-policy"),
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <Article title="Privacy Policy" updated="20 November 2026">
      <p>
        This policy explains what information {site.name} ({site.home}) collects, why, and the choices you
        have. If something here is unclear, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>What you type or upload into tools</h2>
      <p>
        Calculators, converters, image editors, PDF tools, video tools, writing helpers and developer utilities
        on {site.name} run in your browser. The numbers, text and files you use are processed on your device
        and are not uploaded to or stored on a {site.name} server. We have no account system, so there is no
        profile attached to your tool use.
      </p>
      <p>
        Some tools download a processing library the first time you use them. PDF tools load the PDF.js
        worker and video tools load the FFmpeg WebAssembly core from the public CDN{" "}
        <a href="https://unpkg.com" rel="noreferrer" target="_blank">unpkg.com</a>. That CDN receives a normal
        web request (including your IP address and browser details), but not your files. Your files are still
        processed locally.
      </p>

      <h2>Information you send us</h2>
      <p>
        If you use the <Link href="/contact">contact form</Link> or email us, we receive your name, email address
        and message. We use them only to read and reply to your message. When the form sends mail on our behalf,
        the message passes through our email delivery provider (Resend) to reach our inbox. We keep
        correspondence only as long as we need it to handle your request, then delete it.
      </p>

      <h2>Server logs</h2>
      <p>
        Our hosting provider (Vercel) automatically processes standard request data such as IP address, browser
        type, the page requested and the time of the request. This is used to deliver the site, keep it secure
        and diagnose errors. We do not use these logs to build marketing profiles.
      </p>

      <h2>Analytics</h2>
      <p>
        We do not currently use an analytics service such as Google Analytics. If that changes, this policy
        will be updated before it goes live.
      </p>

      <h2>Advertising</h2>
      <p>
        {site.name} shows ads from an advertising partner to pay for hosting. The partner&apos;s code loads on our
        pages and can show three kinds of ad: browser push notifications (after you accept the browser&apos;s
        permission prompt), in-page notification-style ads, and full-screen vignette ads.
      </p>
      <p>
        To serve these ads, the partner may receive your IP address, browser details, the page you are viewing,
        and the time of your visit. It may set cookies or similar storage on your device to limit how often you
        see an ad, measure ad performance and prevent fraud.
      </p>
      <ul>
        <li>
          Push notifications only appear if you allow them in the browser prompt. You can turn them off at any
          time in your browser settings.
        </li>
        <li>
          Refusing the browser prompt keeps notifications off. Closing or dismissing an ad does not give the
          partner any extra permission.
        </li>
      </ul>
      <p>
        Our advertising partner&apos;s own privacy policy describes how it uses data. Contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> if you want us to pass on a question to it.
      </p>

      <h2>Cookies and local storage we set</h2>
      <p>
        {site.name} itself stores one small value in your browser&apos;s local storage: your light or dark theme
        preference. It is not sent to us. The full list is on the{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>Block or delete cookies and notifications in your browser settings. Tools will still work.</li>
        <li>Refuse or revoke the browser notification permission for this site.</li>
        <li>
          Ask what correspondence we hold about you, or ask us to correct or delete it, by emailing{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </li>
      </ul>
      <p>
        Depending on where you live, you may have additional rights under local data protection law, such as the
        right to object to processing or to complain to a data protection authority. Contact us and we will
        respond to any request we receive.
      </p>

      <h2>Children</h2>
      <p>
        {site.name} is a general-audience website and is not directed at children under 13. We do not knowingly
        collect personal information from children. If you believe a child has sent us personal information,
        email {site.email} and we will delete it.
      </p>

      <h2>Links to other websites</h2>
      <p>
        Pages may link to other websites, and ads lead to advertisers&apos; sites. Their privacy practices are
        their own, so please read their policies.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We will update this page when our practices change, and change the date at the top. If we add a new kind
        of data collection, we will describe it here first.
      </p>
    </Article>
  );
}
