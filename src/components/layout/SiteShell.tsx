import { PageAds } from "@/components/ads/PageAds";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { SiteBackdrop } from "@/components/theme/SiteBackdrop";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SiteBackdrop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-ink"
      >
        Skip to content
      </a>
      <div className="site-shell flex min-h-full flex-col">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="relative z-10 flex-1 outline-none">
          {children}
          <PageAds />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
