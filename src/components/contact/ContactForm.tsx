"use client";

import { useState } from "react";
import { Field, PrimaryButton, TextInput } from "@/components/calculators/fields";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="mt-8 space-y-4 rounded-lg border border-line bg-surface p-5"
      onSubmit={(event) => {
        event.preventDefault();
        const subject = encodeURIComponent(`${site.name} message from ${name || "a visitor"}`);
        const body = encodeURIComponent(`${message}\n\nName: ${name}\nEmail: ${from}`);
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      }}
    >
      <Field label="Name">
        <TextInput name="name" required placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} />
      </Field>
      <Field label="Email">
        <TextInput type="email" name="email" required placeholder="you@email.com" value={from} onChange={(event) => setFrom(event.target.value)} />
      </Field>
      <Field label="Message">
        <textarea
          name="message"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-32 w-full rounded-md border border-line bg-surface px-3.5 py-3 text-sm text-ink outline-none placeholder:text-subtle focus:border-ink/30"
        />
      </Field>
      <PrimaryButton type="submit">Open email to {site.email}</PrimaryButton>
      <p className="text-xs text-subtle">
        This opens your email app so the message goes directly to us. You can also write {site.email} yourself.
      </p>
    </form>
  );
}
