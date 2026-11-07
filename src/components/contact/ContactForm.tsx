"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { sendContactMessage, type ContactState } from "@/app/contact/actions";
import { PrimaryButton, SelectInput, TextInput } from "@/components/calculators/fields";
import {
  contactLimits,
  contactTopics,
  normalizeContact,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const initialState: ContactState = {
  status: "idle",
  message: "",
  errors: {},
  values: { name: "", email: "", topic: contactTopics[0], message: "" },
};

function mailtoHref(values: ContactValues) {
  const subject = encodeURIComponent(`[${site.name}] ${values.topic} from ${values.name}`);
  const body = encodeURIComponent(`${values.message}\n\nName: ${values.name}\nEmail: ${values.email}`);
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const [clientErrors, setClientErrors] = useState<ContactErrors>({});
  const errors: ContactErrors = { ...state.errors };
  for (const [field, message] of Object.entries(clientErrors) as [keyof ContactErrors, string | undefined][]) {
    if (message) errors[field] = message;
    else delete errors[field];
  }
  const formKey = `${state.status}-${state.message}`;

  return (
    <form
      key={formKey}
      action={formAction}
      noValidate
      className="mt-8 space-y-4 rounded-lg border border-line bg-surface p-5"
      onChange={(event) => {
        const target = event.target as EventTarget & { name?: string };
        const field = (target.name ?? "") as keyof ContactErrors;
        if (clientErrors[field]) setClientErrors((current) => ({ ...current, [field]: undefined }));
      }}
      onSubmit={(event) => {
        const data = new FormData(event.currentTarget);
        const found = validateContact(
          normalizeContact({
            name: data.get("name"),
            email: data.get("email"),
            topic: data.get("topic"),
            message: data.get("message"),
          }),
        );
        setClientErrors(found);
        if (Object.keys(found).length) event.preventDefault();
      }}
    >
      <FieldRow id="contact-name" label="Name" error={errors.name}>
        <TextInput
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          maxLength={contactLimits.name}
          defaultValue={state.values.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
      </FieldRow>
      <FieldRow id="contact-email" label="Email" error={errors.email}>
        <TextInput
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          maxLength={contactLimits.email}
          placeholder="you@example.com"
          defaultValue={state.values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
      </FieldRow>
      <FieldRow id="contact-topic" label="Topic" error={errors.topic}>
        <SelectInput
          id="contact-topic"
          name="topic"
          defaultValue={state.values.topic || contactTopics[0]}
          aria-invalid={Boolean(errors.topic)}
        >
          {contactTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </SelectInput>
      </FieldRow>
      <FieldRow id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={contactLimits.messageMin}
          maxLength={contactLimits.messageMax}
          defaultValue={state.values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(
            "min-h-36 w-full rounded-md border bg-surface px-3.5 py-3 text-sm text-ink outline-none placeholder:text-subtle focus:border-ink/30",
            errors.message ? "border-danger" : "border-line",
          )}
        />
      </FieldRow>
      <div aria-hidden className="absolute left-[-10000px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <PrimaryButton type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </PrimaryButton>

      <div aria-live="polite" className="text-sm">
        {state.status === "sent" ? <p className="font-medium text-success">{state.message}</p> : null}
        {state.status === "invalid" || state.status === "error" ? (
          <p className="font-medium text-danger">{state.message}</p>
        ) : null}
        {state.status === "unavailable" ? (
          <div className="space-y-3">
            <p className="text-muted">{state.message}</p>
            <a
              href={mailtoHref(state.values)}
              className="inline-flex h-10 items-center rounded-md border border-line px-4 font-medium text-ink"
            >
              Open in my email app
            </a>
          </div>
        ) : null}
      </div>
      <p className="text-xs leading-5 text-subtle">
        We use your name and email only to reply. See the{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

function FieldRow({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
