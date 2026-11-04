import { adsenseClient } from "@/lib/site";

export function AdSenseScript() {
  if (!adsenseClient) return null;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
      crossOrigin="anonymous"
      suppressHydrationWarning
    />
  );
}
