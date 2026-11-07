import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageFrame } from "@/components/theme/PageFrame";
import { absoluteUrl, site } from "@/lib/site";

const description = `Contact ${site.name} with feedback, bug reports, wrong results, tool requests or privacy questions.`;

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: `Contact ${site.name}`,
    description,
    url: absoluteUrl("/contact"),
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <PageFrame className="animate-enter mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact us</h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        Found a wrong result, a broken page, or a tool you wish existed? Have a question about privacy or ads?
        Send a message with the form below, or email{" "}
        <a href={`mailto:${site.email}`} className="font-medium text-ink underline underline-offset-2">
          {site.email}
        </a>{" "}
        directly. We read every message.
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
        <li>For a wrong result, include the tool link and the numbers you entered.</li>
        <li>Please do not send files, passwords, or other personal data.</li>
        <li>We cannot give medical, legal or financial advice.</li>
      </ul>
      <ContactForm />
      <p className="mt-6 text-xs leading-5 text-subtle">
        Before you write, the <Link href="/about" className="underline underline-offset-2">About page</Link> explains
        how the tools work and what we do not offer.
      </p>
    </PageFrame>
  );
}
