"use client";

import { usePathname } from "next/navigation";
import { AdSlot } from "@/components/ui/AdSlot";
import { adsenseClient, adsenseDisplaySlot, adsenseGridSlot } from "@/lib/site";

export function PageAds() {
  const pathname = usePathname();

  if (!adsenseClient || !adsenseDisplaySlot || !adsenseGridSlot) return null;

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-4 pt-10 sm:px-6">
      <AdSlot key={`${pathname}:display`} slot={adsenseDisplaySlot} format="auto" fullWidth />
      <AdSlot key={`${pathname}:grid`} slot={adsenseGridSlot} format="autorelaxed" label="More from around the web" />
    </div>
  );
}
