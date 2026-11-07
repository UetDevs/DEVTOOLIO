import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/legal/Article";
import { absoluteUrl, site } from "@/lib/site";

const description = `The terms for using ${site.name}'s free browser tools: acceptable use, your content, advertising, and limits of liability.`;

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: { canonical: absoluteUrl("/terms") },
  openGraph: {
    title: "Terms of Service",
    description,
    url: absoluteUrl("/terms"),
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <Article title="Terms of Service" updated="7 November 2026">
      <p>
        These terms apply to your use of {site.home}. By using the site you agree to them. If you do not agree,
        please do not use the site.
      </p>

      <h2>The service</h2>
      <p>
        {site.name} provides free web tools for calculations, conversions, file handling, writing and software
        development, along with explanatory guides. There is no account and no paid plan. We may add, change or
        remove tools at any time, and we do not guarantee that the site will always be available or error-free.
      </p>

      <h2>Acceptable use</h2>
      <p>You may use the tools for personal, educational or ordinary business work. You may not:</p>
      <ul>
        <li>attack, overload or disrupt the site, or scrape it in a way that degrades it for other visitors</li>
        <li>use a tool to break the law or to infringe someone else&apos;s copyright, privacy or other rights</li>
        <li>process files or text you do not have the right to use</li>
        <li>submit another person&apos;s work as your own after running it through a writing tool</li>
        <li>copy the {site.name} name or design to impersonate this site</li>
        <li>click ads you are not genuinely interested in, or ask others to do so</li>
      </ul>

      <h2>Your content</h2>
      <p>
        Text and files you process in a tool stay on your device and remain yours. We claim no rights over them.
        If you contact us, you allow us to read and store your message so we can reply. Please do not send
        passwords, secrets or other people&apos;s private data.
      </p>

      <h2>Results and accuracy</h2>
      <p>
        We try to make every tool correct, and we publish formulas and examples so you can check the results.
        Even so, results are provided for general information. Health, finance, academic and conversion results
        are estimates, not professional advice. Check anything important with a qualified professional or the
        official source. See the <Link href="/disclaimer">Disclaimer</Link> for details.
      </p>

      <h2>Our content</h2>
      <p>
        The site&apos;s design, text, guides and code are owned by {site.name} unless stated otherwise. You may link
        to any page and quote short passages with attribution. Please do not republish whole pages or guides
        without permission. Open-source libraries used by the tools remain under their own licenses.
      </p>

      <h2>Advertising and third-party links</h2>
      <p>
        Pages may show ads served by Google AdSense and may link to other websites. Advertisers and linked sites
        are responsible for their own content, products and policies. We do not endorse advertised products, and
        ads are always separate from tool controls and results.
      </p>

      <h2>No warranty and limitation of liability</h2>
      <p>
        The site is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind. To the
        fullest extent permitted by law, {site.name} is not liable for any loss or damage arising from your use
        of, or inability to use, the site or its tools, including incorrect results or lost or damaged files.
        Keep a copy of any file before you convert or edit it.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms. The date at the top shows the latest version. Continued use of the site after
        a change means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a> or the{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </Article>
  );
}
