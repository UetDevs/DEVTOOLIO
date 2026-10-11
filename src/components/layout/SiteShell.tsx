import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { SiteBackdrop } from "@/components/theme/SiteBackdrop";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SiteBackdrop />
      <div className="site-shell flex min-h-full flex-col">
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
