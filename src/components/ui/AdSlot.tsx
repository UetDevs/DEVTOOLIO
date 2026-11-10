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

    let cancelled = false;

    const request = () => {
      if (cancelled || pushedUnits.has(ins) || ins.dataset.adsbygoogleStatus) return;
      // A 0×0 slot makes Google return no creative. Wait until the box has width.
      if (ins.getBoundingClientRect().width < 120) return;
      pushedUnits.add(ins);
      try {
        ((window as Window & { adsbygoogle?: unknown[] }).adsbygoogle ??= []).push({});
      } catch {
        /* A second push on the same unit throws. The first call still renders. */
      }
    };

    request();
    const frame = window.requestAnimationFrame(request);
    const resize = new ResizeObserver(request);
    resize.observe(box);

    const status = new MutationObserver(() => {
      if (ins.getAttribute("data-ad-status") === "unfilled") box.hidden = true;
      if (ins.getAttribute("data-ad-status") === "filled") box.hidden = false;
    });
    status.observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      resize.disconnect();
      status.disconnect();
    };
  }, [slot]);

  if (!adsenseClient || !slot) return null;

  return (
    <aside aria-label={label} className="w-full rounded-lg border border-line bg-surface-2">
      <p className="px-3 pt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">{label}</p>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: format === "autorelaxed" ? 280 : 90 }}
        data-ad-client={adsenseClient}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(fullWidth ? { "data-full-width-responsive": "true" } : {})}
      />
    </aside>
  );
}
