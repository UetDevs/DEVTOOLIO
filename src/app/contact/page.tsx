import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageFrame } from "@/components/theme/PageFrame";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Email ${site.email} for ${site.name} feedback, tool requests or privacy questions.`,
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact",
    description: `Email ${site.email} for ${site.name} feedback, tool requests or privacy questions.`,
    url: absoluteUrl("/contact"),
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <PageFrame className="animate-enter mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        For feedback, a tool request, a correction or a privacy question, email{" "}
        <a href={`mailto:${site.email}`} className="font-medium text-ink underline underline-offset-2">
          {site.email}
        </a>
        . We read every message. We cannot give medical, legal or financial advice.
      </p>
      <ContactForm />
    </PageFrame>
  );
}
