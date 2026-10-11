import type { ReactNode } from "react";
import { PageFrame } from "@/components/theme/PageFrame";

export function Article({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <PageFrame>
      <article className="animate-enter mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
        {updated ? <p className="mt-2 font-mono text-xs text-subtle">Last updated: {updated}</p> : null}
        <div className="mt-6 space-y-4 text-base leading-7 text-muted [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1">
          {children}
        </div>
      </article>
    </PageFrame>
  );
}
