"use client";

import { useEffect, useRef } from "react";
import { adsenseClient } from "@/lib/site";

type AdFormat = "auto" | "autorelaxed";

const pushedUnits = new WeakSet<HTMLModElement>();

export function AdSlot({
  slot,
  format,
  fullWidth = false,
  label = "Advertisement",
}: {
  slot: string;
  format: AdFormat;
  fullWidth?: boolean;
  label?: string;
}) {
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const ins = insRef.current;
    const box = ins?.closest("aside");
    if (!ins || !box || !adsenseClient || !slot) return;

    if (!pushedUnits.has(ins) && !ins.dataset.adsbygoogleStatus) {
      pushedUnits.add(ins);
      try {
        ((window as Window & { adsbygoogle?: unknown[] }).adsbygoogle ??= []).push({});
      } catch {
        /* A second push on the same unit throws. The unit still renders from the first call. */
      }
    }

    const sync = () => {
      const status = ins.getAttribute("data-ad-status");
      if (status === "filled") box.hidden = false;
      if (status === "unfilled") box.hidden = true;
    };
    const observer = new MutationObserver(sync);
    observer.observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });
    const timer = window.setTimeout(() => {
      const status = ins.getAttribute("data-ad-status");
      if (status !== "filled" && !ins.querySelector("iframe")) box.hidden = true;
    }, 8000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [slot]);

  if (!adsenseClient || !slot) return null;

  return (
    <aside aria-label={label} className="overflow-hidden rounded-lg border border-line bg-surface-2">
      <p className="px-3 pt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">{label}</p>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClient}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(fullWidth ? { "data-full-width-responsive": "true" } : {})}
      />
    </aside>
  );
}
