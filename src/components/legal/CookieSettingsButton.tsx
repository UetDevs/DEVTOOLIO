"use client";

import { OPEN_CONSENT_EVENT, googleCmpEnabled } from "@/lib/consent";
import { adsenseClient } from "@/lib/site";

type GoogleFc = { callbackQueue?: unknown[]; showRevocationMessage?: () => void };

export function CookieSettingsButton({ className }: { className?: string }) {
  if (!adsenseClient) return null;

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (googleCmpEnabled) {
          const w = window as Window & { googlefc?: GoogleFc };
          const fc = (w.googlefc ??= {});
          (fc.callbackQueue ??= []).push(() => w.googlefc?.showRevocationMessage?.());
          return;
        }
        window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
      }}
    >
      Cookie settings
    </button>
  );
}
