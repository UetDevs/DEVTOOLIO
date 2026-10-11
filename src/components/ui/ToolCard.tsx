import Link from "next/link";
import { IconBadge } from "./IconBadge";
import type { Tool } from "@/lib/types";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      className="motion-card group flex flex-col rounded-lg border border-line bg-surface p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <IconBadge name={tool.icon} tint={tool.iconTint} size="sm" />
        {tool.status === "soon" ? (
          <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">Soon</span>
        ) : null}
      </div>
      <h3 className="mt-3 text-sm font-semibold text-ink">{tool.name}</h3>
      <p className="mt-1 flex-1 text-sm leading-6 text-muted">{tool.description}</p>
    </Link>
  );
}

export function ToolRow({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      className="motion-card flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-3"
    >
      <IconBadge name={tool.icon} tint={tool.iconTint} size="sm" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-ink">{tool.name}</p>
        <p className="truncate text-xs text-muted">{tool.description}</p>
      </div>
      <span className="hidden font-mono text-[11px] text-subtle sm:inline">{tool.category}</span>
    </Link>
  );
}
