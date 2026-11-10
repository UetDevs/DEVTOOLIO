"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { adsenseClient } from "@/lib/site";
import { CONSENT_KEY, OPEN_CONSENT_EVENT, googleCmpEnabled, type ConsentChoice } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!adsenseClient || googleCmpEnabled) return;
    let show = true;
    try {
      show = !window.localStorage.getItem(CONSENT_KEY);
    } catch {
      show = true;
    }
    const frame = window.requestAnimationFrame(() => setVisible(show));
    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.classList.remove("has-cookie-banner");
      root.style.removeProperty("--cookie-banner-offset");
      return;
    }
    const sync = () => {
      const banner = document.querySelector<HTMLElement>('[aria-label="Cookie choices"]');
      const height = banner ? Math.ceil(banner.getBoundingClientRect().height) : 0;
      root.classList.add("has-cookie-banner");
      root.style.setProperty("--cookie-banner-offset", `${height + 16}px`);
    };
    sync();
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("resize", sync);
      root.classList.remove("has-cookie-banner");
      root.style.removeProperty("--cookie-banner-offset");
    };
  }, [visible]);

  if (!visible) return null;

  function choose(value: ConsentChoice) {
    let previous: string | null = null;
    try {
      previous = window.localStorage.getItem(CONSENT_KEY);
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* storage blocked: ads stay non-personalized */
    }
    setVisible(false);
    // The ad setting is read once per page load, so a changed choice needs a reload to apply.
    if (previous && previous !== value) window.location.reload();
  }

  return (
    <div
      role="region"
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 p-4 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-muted">
          {"We use Google AdSense to pay for hosting. Ads stay non-personalized unless you allow advertising cookies. Google may still use cookies to limit repeats and prevent fraud. See the "}
          <Link href="/cookie-policy" className="font-medium text-ink underline underline-offset-2">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="h-10 rounded-md border border-line px-4 text-sm font-medium text-ink"
            onClick={() => choose("essential")}
          >
            Non-personalized ads only
          </button>
          <button
            type="button"
            className="h-10 rounded-md border border-line px-4 text-sm font-medium text-ink"
            onClick={() => choose("accepted")}
          >
            Allow personalized ads
          </button>
        </div>
      </div>
    </div>
  );
}
