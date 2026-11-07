"use server";

import { headers } from "next/headers";
import { normalizeContact, validateContact, type ContactErrors, type ContactValues } from "@/lib/contact";
import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "invalid" | "sent" | "unavailable" | "error";
  message: string;
  errors: ContactErrors;
  values: ContactValues;
};

const emptyValues: ContactValues = { name: "", email: "", topic: "", message: "" };

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Per server instance only; a basic guard against repeated submissions, not a distributed rate limit.
const recent = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (hits.length >= MAX_PER_WINDOW) {
    recent.set(key, hits);
    return true;
  }
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5000) recent.clear();
  return false;
}

export async function sendContactMessage(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const values = normalizeContact({
    name: formData.get("name"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    message: formData.get("message"),
  });

  // Honeypot: real visitors never see or fill this field.
  if (typeof formData.get("website") === "string" && String(formData.get("website")).length > 0) {
    return { status: "sent", message: "Thanks. Your message was sent.", errors: {}, values: emptyValues };
  }

  const errors = validateContact(values);
  if (Object.keys(errors).length) {
    return { status: "invalid", message: "Please fix the highlighted fields.", errors, values };
  }

  const requestHeaders = await headers();
  const ip = (requestHeaders.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return {
      status: "error",
      message: "Too many messages from this connection. Please wait a few minutes, or email us directly.",
      errors: {},
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  if (!apiKey || !from) {
    return {
      status: "unavailable",
      message: "The form cannot send mail right now. Use the button below to send the same message from your email app.",
      errors: {},
      values,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `[${site.name}] ${values.topic} from ${values.name}`,
        text: `${values.message}\n\n---\nName: ${values.name}\nEmail: ${values.email}\nTopic: ${values.topic}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`Email provider responded ${response.status}`);
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return {
      status: "unavailable",
      message: "Your message could not be delivered. Use the button below to send it from your email app instead.",
      errors: {},
      values,
    };
  }

  return { status: "sent", message: "Thanks. Your message was sent, and we will reply by email.", errors: {}, values: emptyValues };
}
