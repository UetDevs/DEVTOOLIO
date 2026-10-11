import { cn } from "@/lib/utils";

export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}

const control =
  "h-11 w-full rounded-md border border-line bg-surface px-3.5 text-sm text-ink outline-none placeholder:text-subtle focus:border-ink/30";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(control, props.className)} />;
}

export function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(control, props.className)} />;
}

export function AffixInput({
  suffix,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { suffix: string }) {
  return (
    <div className="flex overflow-hidden rounded-md border border-line focus-within:border-ink/30">
      <input {...props} className="h-11 min-w-0 flex-1 bg-surface px-3.5 text-sm text-ink outline-none placeholder:text-subtle" />
      <span className="flex items-center border-l border-line bg-surface-2 px-3 font-mono text-xs text-muted">
        {suffix}
      </span>
    </div>
  );
}

export function PrimaryButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex h-11 w-full items-center justify-center rounded-md bg-brand text-sm font-semibold text-brand-ink transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-55",
        props.className,
      )}
    >
      {children}
    </button>
  );
}

export function ResetButton({
  children = "Reset",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...props}
      className="inline-flex h-10 w-full items-center justify-center text-sm font-medium text-muted hover:text-ink"
    >
      {children}
    </button>
  );
}

export function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 rounded-md border border-line bg-surface-2 p-0.5">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "h-9 rounded-[5px] text-sm font-medium",
            value === option.value ? "bg-surface text-ink" : "text-muted",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function ResultCard({
  title,
  value,
  subtitle,
  children,
}: {
  title: string;
  value: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-line bg-surface p-5">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-subtle">{title}</p>
      <p className="mt-2 font-mono text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{value}</p>
      {subtitle ? <p className="mt-2 text-sm font-medium text-success">{subtitle}</p> : null}
      {children}
    </div>
  );
}

export function Panel({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-line bg-surface p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-ink">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}
