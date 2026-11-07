"use client";

import { useEffect, useRef } from "react";
import { adsenseClient, adsenseSlot } from "@/lib/site";

export function AdSlot({ label = "Advertisement" }: { label?: string }) {
  const loaded = useRef(false);

  useEffect(() => {
    if (!adsenseClient || !adsenseSlot || loaded.current) return;
    loaded.current = true;
    try {
      ((window as Window & { adsbygoogle?: unknown[] }).adsbygoogle ??= []).push({});
    } catch {
      /* ignore */
    }
  }, []);

  if (!adsenseClient || !adsenseSlot) return null;

  return (
    <aside aria-label={label} className="my-4 overflow-hidden rounded-lg border border-line bg-surface-2">
      <p className="px-3 pt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">{label}</p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClient}
        data-ad-slot={adsenseSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
