import { iconMap } from "@/lib/icon-map";
import type { IconTint } from "@/lib/types";
import { cn } from "@/lib/utils";

export function IconBadge({
  name,
  size = "md",
}: {
  name: string;
  tint?: IconTint;
  size?: "sm" | "md" | "lg";
}) {
  const Icon = iconMap[name];
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center text-ink",
        size === "sm" && "h-8 w-8",
        size === "md" && "h-9 w-9",
        size === "lg" && "h-11 w-11",
      )}
    >
      {Icon ? <Icon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} strokeWidth={1.7} /> : null}
    </span>
  );
}
