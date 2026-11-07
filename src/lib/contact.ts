export const contactTopics = [
  "General feedback",
  "Report a bug or wrong result",
  "Tool request",
  "Privacy question",
  "Advertising or legal",
] as const;

export type ContactTopic = (typeof contactTopics)[number];

export type ContactValues = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export const contactLimits = {
  name: 100,
  email: 254,
  messageMin: 10,
  messageMax: 5000,
};

const EMAIL_PATTERN = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

export function normalizeContact(raw: Partial<Record<keyof ContactValues, unknown>>): ContactValues {
  const text = (value: unknown) => (typeof value === "string" ? value : "");
  return {
    name: text(raw.name).replace(/[\r\n\t]+/g, " ").trim(),
    email: text(raw.email).trim(),
    topic: text(raw.topic).trim(),
    message: text(raw.message).replace(/\r\n/g, "\n").trim(),
  };
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name) errors.name = "Enter your name.";
  else if (values.name.length > contactLimits.name) errors.name = `Keep your name under ${contactLimits.name} characters.`;

  if (!values.email) errors.email = "Enter your email so we can reply.";
  else if (values.email.length > contactLimits.email || !EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!contactTopics.includes(values.topic as ContactTopic)) errors.topic = "Choose a topic.";

  if (values.message.length < contactLimits.messageMin) {
    errors.message = `Write at least ${contactLimits.messageMin} characters.`;
  } else if (values.message.length > contactLimits.messageMax) {
    errors.message = `Keep your message under ${contactLimits.messageMax} characters.`;
  }
  return errors;
}
