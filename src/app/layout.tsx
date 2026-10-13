import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { adsenseClient, googleSiteVerification, site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Developer tools without the friction`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: "/favicon.svg",
    apple: "/brand/devtoolio-mark.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Developer tools without the friction`,
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Developer tools without the friction`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  other: adsenseClient ? { "google-adsense-account": adsenseClient } : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#121411" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('devtoolio-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full bg-canvas font-sans text-ink">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
            description: site.description,
            potentialAction: {
              "@type": "SearchAction",
              target: `${site.url}/tools?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            email: site.email,
          }}
        />
        <AdSenseScript />
        <SiteShell>{children}</SiteShell>
        <CookieBanner />
      </body>
    </html>
  );
}
