"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { adsenseClient } from "@/lib/site";

const KEY = "devtoolio-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!adsenseClient) return;
    let show = true;
    try {
      show = !window.localStorage.getItem(KEY);
    } catch {
      show = true;
    }
    const frame = window.requestAnimationFrame(() => setVisible(show));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!visible) return null;

  function choose(value: "accepted" | "essential") {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 p-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-muted">
          DEVTOOLIO uses optional cookies for Google ads when they are enabled. See the{" "}
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
            Essential only
          </button>
          <button
            type="button"
            className="h-10 rounded-md bg-brand px-4 text-sm font-semibold text-brand-ink"
            onClick={() => choose("accepted")}
          >
            Accept ads cookies
          </button>
        </div>
      </div>
    </div>
  );
}
