import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-7 w-7", className)} aria-hidden>
      <path
        d="M16 2.4 28.2 9.2v13.6L16 29.6 3.8 22.8V9.2L16 2.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M11.4 16.1 14.1 13l-2.7-3.1M20.6 16.1 17.9 13l2.7-3.1M13.2 20.8h5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-w-0 items-center gap-2 rounded-sm text-ink",
        inverted && "text-white",
        className,
      )}
    >
      <Mark className={inverted ? "text-brand" : "text-ink"} />
      <span className="truncate text-[15px] font-semibold tracking-[-0.03em]">{site.name}</span>
    </Link>
  );
}
