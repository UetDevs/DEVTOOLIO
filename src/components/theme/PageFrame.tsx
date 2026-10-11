import { cn } from "@/lib/utils";

export function PageFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="stage-page">
      <div className={cn(className)}>{children}</div>
    </div>
  );
}
