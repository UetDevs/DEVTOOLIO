"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";
import { categories } from "@/lib/categories";

export function Footer() {
  return (
    <footer className="stage-footer border-t border-white/10 text-[#c8c9c2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#9a9d95]">{site.tagline}</p>
          <a href={`mailto:${site.email}`} className="mt-3 inline-block font-mono text-xs text-[#c8c9c2] hover:text-white">
            {site.email}
          </a>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">Product</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/tools" className="hover:text-white">All tools</Link></li>
            <li><Link href="/guides" className="hover:text-white">Guides</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">Categories</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.slice(0, 6).map((category) => (
              <li key={category.id}>
                <Link href={category.href} className="hover:text-white">{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">Legal</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-white">Cookies</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-[#7d8078] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Most tools run in this tab. Nothing to install.</p>
        </div>
      </div>
    </footer>
  );
}
